import type { ReactNode } from "react";

export default function AiCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition">
      <div className="mb-3 text-neutral-800">{icon}</div>

      <h3 className="font-semibold">{title}</h3>

      <p className="mt-1 text-sm text-neutral-500">{desc}</p>
    </div>
  );
}