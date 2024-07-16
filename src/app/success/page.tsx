import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Success = () => {
  return (
    <div className="px-36 text-center py-10">
      <h1>Verfified Successfully</h1>
      <Link href="/">
        <Button className="mt-5">Back To Home</Button>
      </Link>
    </div>
  );
};

export default Success;
