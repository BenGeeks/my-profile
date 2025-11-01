import { NextRequest } from "next/server";

const FORWARD_URL = "https://webhook.site/e34a972a-4781-4cea-9245-b4fa75117754";

// Facebook GET webhook verification
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const challenge = searchParams.get("hub.challenge");

  // ✅ Always return hub.challenge for verification
  if (challenge) {
    return new Response(challenge, { status: 200 });
  }

  return new Response("Missing challenge", { status: 400 });
}

// Facebook POST webhook (actual message events)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Forward the payload to webhook.site for inspection
    await fetch(FORWARD_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body, null, 2),
    });

    return new Response("ok", { status: 200 });
  } catch (err) {
    console.error("Error forwarding webhook:", err);
    return new Response("Internal error", { status: 500 });
  }
}
