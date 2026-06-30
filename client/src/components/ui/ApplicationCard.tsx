interface Props {
  company: string;
  role: string;
  status: string;
}

export default function ApplicationCard({
  company,
  role,
  status,
}: Props) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-neutral-200 bg-white p-4">
      <div>
        <p className="font-semibold">{company}</p>
        <p className="text-sm text-neutral-500">{role}</p>
      </div>

      <span className="rounded-full bg-neutral-100 px-3 py-1 text-sm">
        {status}
      </span>
    </div>
  );
}