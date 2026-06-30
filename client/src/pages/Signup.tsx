import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signupUser } from "../services/auth";
import toast from "react-hot-toast";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);

      await signupUser({
        name,
        email,
        password,
      });

      toast.success("Account created successfully!");

      navigate("/login");

    } catch (err: any) {
      toast.error(
        err.response?.data?.message || "Signup failed"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        <h1 className="mb-6 text-3xl font-bold">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border p-3"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border p-3"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border p-3"
            required
          />

          <button
            disabled={loading}
            className="w-full rounded-xl bg-black p-3 text-white"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>

        </form>

        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}