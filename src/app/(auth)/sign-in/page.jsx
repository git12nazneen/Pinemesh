
import { UserAuthForm } from "@/app/features/auth/components/sign-in-card";

export const metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <div className="">
    <div className="items-center mt-10 rounded-3xl flex justify-center">
      
      <div className="w-1/3 bg-[#f0f1ee] p-10">
          <UserAuthForm />
        </div>
      </div>
    </div>
  );
}
