/**
 * Scroll-reveal for [data-reveal], [data-swipe] and [data-draw].
 *
 * Inline rather than a client component so it runs before hydration, and so a
 * JS failure can never leave content stuck invisible. The MutationObserver keeps
 * it working across App Router navigations and filtered lists.
 */
/** Runs first, before body content paints, so reveals never flash in. */
export function RevealBoot() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `document.documentElement.classList.add('js')`,
      }}
    />
  );
}

const script = `
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var SEL = '[data-reveal], [data-swipe], [data-draw]';
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      if (el.hasAttribute('data-draw')) {
        try { el.style.setProperty('--draw-length', Math.ceil(el.getTotalLength()) + ''); } catch (e) {}
        el.setAttribute('data-draw', 'shown');
      }
      if (el.hasAttribute('data-swipe')) el.setAttribute('data-swipe', 'shown');
      if (el.hasAttribute('data-reveal')) el.setAttribute('data-reveal', 'shown');
      io.unobserve(el);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

  function scan(root) {
    var nodes = root.querySelectorAll ? root.querySelectorAll(SEL) : [];
    for (var i = 0; i < nodes.length; i++) io.observe(nodes[i]);
  }
  scan(document);

  new MutationObserver(function (records) {
    records.forEach(function (r) {
      r.addedNodes.forEach(function (n) {
        if (n.nodeType !== 1) return;
        if (n.matches && n.matches(SEL)) io.observe(n);
        scan(n);
      });
    });
  }).observe(document.body, { childList: true, subtree: true });
})();
`;

export function RevealScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

/** Sets the stagger delay used by the reveal transitions. */
export const revealDelay = (index: number, step = 70) =>
  ({ "--reveal-delay": `${index * step}ms` }) as React.CSSProperties;
