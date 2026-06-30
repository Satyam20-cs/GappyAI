import { User } from "lucide-react";
import { useAuth } from "../../context/authcontext";

export default function Topbar() {
  const { logout } = useAuth();

  return (
    <div className="mb-8 flex items-center justify-between rounded-3xl border border-white/40 bg-white/70 px-8 py-6 shadow-lg backdrop-blur-xl">

      <div>

        <h2 className="text-2xl font-bold">
            Welcome back!
        </h2>
        <p className="mt-1 text-sm text-neutral-400">
          Track applications • Improve resumes • Ace interviews
        </p>

      </div>

      <div className="text-right">

        <p className="text-sm text-neutral-400">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </p>

        <p className="mt-2 text-xl font-semibold">
            Keep Building!
        </p>

      </div>

    </div>
  );
}