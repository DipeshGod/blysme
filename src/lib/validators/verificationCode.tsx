import { z } from "zod";

export const VerifyCodePayload = z.object({
  code: z.number(),
});

export type VerifyCodePayload = z.infer<typeof VerifyCodePayload>;
