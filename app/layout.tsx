import type { Metadata } from "next";
import { Bricolage_Grotesque, Newsreader, Kalam, Space_Mono } from "next/font/google";
import { site } from "@/content/site";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { SkipLink } from "@/components/layout/skip-link";
import { RevealBoot, RevealScript } from "@/components/ui/reveal";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-kalam",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "learning in public",
    "AI experiments",
    "brand strategy",
    "marketing experiments",
    "healthcare marketing",
    "career learning",
  ],
  authors: [{ name: site.author }],
  creator: site.author,
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${newsreader.variable} ${kalam.variable} ${spaceMono.variable}`}
    >
      <body className="min-h-screen bg-paper text-ink antialiased">
        <RevealBoot />
        <SkipLink />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <RevealScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: site.name,
              url: site.url,
              description: site.description,
              inLanguage: "en",
              author: {
                "@type": "Person",
                name: site.author,
                url: `${site.url}/about`,
                sameAs: [site.social.youtube, site.social.linkedin],
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
