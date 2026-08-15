const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

interface Submission {
  name: string;
  email: string;
  topic: string;
  message: string;
}

/**
 * Messages are validated but not yet delivered anywhere.
 *
 * To go live, replace the body of this function with a transactional email send
 * (Resend, Postmark, …) using a key from the environment.
 */
async function deliver(submission: Submission): Promise<boolean> {
  console.info(`[contact] pending provider wiring — message from ${submission.email}`);
  return true;
}

const asString = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { ok: false, message: "That request didn't parse. Try again?" },
      { status: 400 },
    );
  }

  const submission: Submission = {
    name: asString(payload.name),
    email: asString(payload.email),
    topic: asString(payload.topic),
    message: asString(payload.message),
  };

  if (!submission.name || !submission.message) {
    return Response.json(
      { ok: false, message: "A name and a message are all I need to get started." },
      { status: 400 },
    );
  }

  if (!EMAIL.test(submission.email)) {
    return Response.json(
      { ok: false, message: "That email doesn't look quite right — mind checking it?" },
      { status: 400 },
    );
  }

  const sent = await deliver(submission);
  if (!sent) {
    return Response.json(
      { ok: false, message: "Something broke on my end. Email works too." },
      { status: 502 },
    );
  }

  return Response.json({
    ok: true,
    message: "I read everything myself, so a reply may take a few days — but it will come.",
  });
}
