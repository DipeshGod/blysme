import { useToast } from "@/components/ui/use-toast";
import { VerifyCodePayload } from "@/lib/validators/verificationCode";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useVerifyCode = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<VerifyCodePayload>();
  const [error, setError] = useState<string>();
  const [userInput, setUserInput] = useState<number>();
  const { toast } = useToast();
  const router = useRouter();

  const handleChange = (newValue: string) => {
    const val = Number(newValue);
    setUserInput(val);
  };

  const verifyCode = async (code: number) => {
    const response = await fetch("/api/verifyCode", {
      method: "POST",
      body: JSON.stringify({ code }),
    });

    if (response.status === 400) {
      toast({
        variant: "destructive",
        title: "Invalid Verification Code",
        description: "Please try again.",
      });
    }

    if (response.status === 200) {
      router.push("/success");
    }

    return data;
  };

  const handleSubmit = async () => {
    try {
      if (!userInput) {
        return;
      }
      setLoading(true);
      await verifyCode(userInput!);
      setData(data);
      setLoading(false);
    } catch (err) {
      setError("Something went wrong");
      setLoading(false);
    }
  };

  return { loading, data, error, handleChange, handleSubmit };
};
