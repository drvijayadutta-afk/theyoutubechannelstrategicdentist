import { site } from "@/content/site";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Signups are validated but not yet persisted anywhere.
 *
 * To go live, replace the body of this function with a call to the email
 * provider (Buttondown, ConvertKit, Resend audiences, …) using a key from the
 * environment. Nothing else in the app needs to change.
 */
async function addSubscriber(email: string): Promise<boolean> {
  console.info(`[newsletter] pending provider wiring — would subscribe ${email}`);
  return true;
}

export async function POST(request: Request) {
  let email: unknown;
  try {
    ({ email } = await request.json());
  } catch {
    return Response.json(
      { ok: false, message: "That request didn't parse. Try again?" },
      { status: 400 },
    );
  }

  if (typeof email !== "string" || !EMAIL.test(email.trim())) {
    return Response.json(
      { ok: false, message: "That email doesn't look quite right — mind checking it?" },
      { status: 400 },
    );
  }

  const added = await addSubscriber(email.trim().toLowerCase());
  if (!added) {
    return Response.json(
      { ok: false, message: "Something broke on my end. Try again in a moment?" },
      { status: 502 },
    );
  }

  return Response.json({
    ok: true,
    message: `${site.newsletter.name} lands in your inbox when there's something worth sending.`,
  });
}
