import type { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  desc: string;
}

function FeatureCard({ icon, title, desc }: Props) {
  return (
    <div className="rounded-3xl border border-white/30 bg-white/60 p-7 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-2">
      <div className="mb-5 w-fit rounded-2xl bg-neutral-900 p-3 text-white">
        {icon}
      </div>

      <h2 className="mb-2 text-xl font-semibold">{title}</h2>

      <p className="leading-7 text-neutral-600">{desc}</p>
    </div>
  );
}

export default FeatureCard;