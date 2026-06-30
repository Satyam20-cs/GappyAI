interface Props {
  status: string;
}

export default function StatusBadge({ status }: Props) {
  const colors: Record<string, string> = {
    applied: "bg-blue-100 text-blue-700",
    interview: "bg-yellow-100 text-yellow-700",
    offer: "bg-green-100 text-green-700",
    rejected: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${
        colors[status] || "bg-neutral-100 text-neutral-700"
      }`}
    >
      {status}
    </span>
  );
}