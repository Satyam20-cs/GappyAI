import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  value: number;
  icon: ReactNode;
  color: string;
}

export default function StatsCard({
  title,
  value,
  icon,
  color,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="rounded-3xl border border-white/40 bg-white/70 p-6 backdrop-blur-xl shadow-lg"
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-neutral-500">
            {title}
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            {value}
          </h2>

        </div>

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${color}`}
        >
          {icon}
        </div>

      </div>
    </motion.div>
  );
}