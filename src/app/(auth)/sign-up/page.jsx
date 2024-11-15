
import { SignUpUserForm } from "@/app/features/auth/components/sign-up-card";
import Image from "next/image";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex justify-between gap-4 items-center">
      <div className="w-2/3 hidden md:flex bg-[#ffe6c8] border-2 border-white items-center justify-center min-h-screen">
        <Image
          src="/logo1.png"
          alt="logo"
          width={400}
          height={400}
          className="rounded-2xl p-10"
        />
      </div>
      <div className="w-1/3 bg-white p-10">
        <SignUpUserForm />
      </div>
    </div>
  )
};

export default SignUpPage;
