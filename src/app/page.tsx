"use client";

import { Button } from "@/components/ui/button";
import { VerificationCode } from "@/components/utils/verification-code";
import { useEffect, useState } from "react";

const numericPattern = "^[0-9]+$";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const verifyCode = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/verifyCode", {
          method: "POST",
          body: JSON.stringify({ code: 123456 }),
        });

        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (err) {
        setError("Something went wrong");
        setLoading(false);
      }
    };

    verifyCode();
  }, []);

  return (
    <div className="px-36 text-center py-10">
      <h2 className="text-2xl font-semibold mt-5">Verification Code</h2>
      <div className="flex flex-col justify-center items-center mt-5">
        <VerificationCode inputPattern={numericPattern} />
        <div className="mt-5">
          <Button className="px-10">SUBMIT</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
