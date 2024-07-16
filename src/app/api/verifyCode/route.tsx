import { VerifyCodePayload } from "@/lib/validators/verificationCode";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const body = (await request.json()) as VerifyCodePayload;

  //simulate api response with 2 second timeout, error 30% and success 70% of time
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (body.code.toString().length == 6) {
    return Response.json({ body });
  } else {
    return Response.json(
      { error: "Verfication code is invalid" },
      { status: 400 }
    );
  }
}
