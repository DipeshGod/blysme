import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function VerificationCode({
  inputPattern,
  handleChange,
}: {
  inputPattern: string;
  handleChange: (newValue: string) => unknown;
}) {
  return (
    <InputOTP
      maxLength={6}
      pattern={inputPattern}
      onChange={handleChange}
      data-testid="codeVerify"
    >
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}
