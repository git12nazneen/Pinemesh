
import { SignUpUserForm } from "@/app/features/auth/components/sign-up-card";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="items-center mt-10 rounded-3xl flex justify-center">
      
      <div className="w-1/3 bg-[#f0f1ee] p-10">
        <SignUpUserForm />
      </div>
    </div>
  )
};

export default SignUpPage;
