"use client";

import { Button } from "@/components/ui/button";
import { VerificationCode } from "@/components/utils/verification-code";
import { useVerifyCode } from "@/hooks/useVerifyCode";
import { ThreeDots } from "react-loader-spinner";

const numericPattern = "^[0-9]+$";

const Home = () => {
  const { handleChange, handleSubmit, loading } = useVerifyCode();

  return (
    <div className="px-36 text-center py-10">
      <h2 className="text-2xl font-semibold mt-5">Verification Code</h2>
      <div className="flex flex-col justify-center items-center mt-5">
        <VerificationCode
          inputPattern={numericPattern}
          handleChange={handleChange}
        />
        <div className="mt-5 flex flex-col justify-center items-center">
          <Button
            disabled={loading}
            className="px-10 bg-[#351e92] mb-5"
            onClick={handleSubmit}
          >
            SUBMIT
          </Button>
          {loading && (
            <div className="flex flex-col justify-center items-center">
              <ThreeDots
                visible={true}
                height="40"
                width="80"
                color="#4fa94d"
                radius="9"
                ariaLabel="loading-validation"
              />
              <p>Verifying. Please Wait ..</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
