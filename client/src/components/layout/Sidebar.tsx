import {
  LayoutDashboard,
  FileText,
  Brain,
  LogOut,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authcontext";

export default function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div className="m-5 flex w-72 flex-col rounded-3xl border border-white/40 bg-white/70 p-6 shadow-xl backdrop-blur-xl">
      <h1 className="mb-12 text-2xl font-bold">GappyAI</h1>

      <nav className="flex flex-1 flex-col gap-3 text-sm">
        <Link
          to="/dashboard"
          className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-neutral-100"
        >
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link
          to="/applications"
          className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-neutral-100"
        >
          <FileText size={18} />
          Applications
        </Link>

        <Link
          to="/resume-ai"
          className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-neutral-100"
        >
          <Brain size={18} />
          Resume AI
        </Link>
      </nav>

      <button
        onClick={handleLogout}
        className="mt-8 flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-red-600 hover:bg-red-50"
      >
        <LogOut size={18} />
        Logout
      </button>
    </div>
  );
}