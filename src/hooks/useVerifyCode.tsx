import { VerifyCodePayload } from "@/lib/validators/verificationCode";
import { useEffect, useState } from "react";

export const useVerifyCode = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<VerifyCodePayload>();
  const [error, setError] = useState<string>();
  const [userInput, setUserInput] = useState<number>();

  const handleChange = (newValue: string) => {
    const val = Number(newValue);
    setUserInput(val);
  };

  const verifyCode = async (code: number) => {
    const response = await fetch("/api/verifyCode", {
      method: "POST",
      body: JSON.stringify({ code }),
    });

    const data = (await response.json()) as VerifyCodePayload;
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
