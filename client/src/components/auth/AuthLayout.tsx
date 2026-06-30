import type { ReactNode } from "react";
import Glow from "../ui/Glow";

interface Props {
  children: ReactNode;
}

function AuthLayout({ children }: Props) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f7f7f8]">

      <Glow />

      <div className="absolute left-[-200px] top-[-100px] h-[400px] w-[400px] rounded-full bg-blue-300/20 blur-3xl" />

      <div className="absolute right-[-150px] bottom-[-100px] h-[350px] w-[350px] rounded-full bg-violet-300/20 blur-3xl" />

      <div className="relative z-10 flex min-h-screen items-center justify-center p-6">

        {children}

      </div>
    </div>
  );
}

export default AuthLayout;