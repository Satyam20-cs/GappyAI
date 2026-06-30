import { useEffect, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import { getApplications } from "../services/application";
import AddApplicationModal from "../components/application/AddApplicationModal";
import StatusBadge from "../components/application/StatusBadge";

export default function Applications() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userId = user._id;

  const [apps, setApps] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState("");

  async function fetchApplications() {
    if (!userId) return;
    const data = await getApplications(userId);
    setApps(data);
  }

  useEffect(() => {
    fetchApplications();
  }, []);

  const filteredApps = apps.filter((app) =>
    `${app.company} ${app.role} ${app.status}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Applications</h1>
          <p className="mt-2 text-neutral-500">
            Track every job and internship application in one place.
          </p>
        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="rounded-2xl bg-black px-6 py-3 text-white hover:bg-neutral-800"
        >
          + Add Application
        </button>
      </div>

      <div className="mb-6">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search company, role, or status..."
          className="w-full rounded-2xl border border-neutral-200 bg-white p-4 outline-none focus:border-black"
        />
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/40 bg-white/70 shadow-xl backdrop-blur-xl">
        <table className="w-full text-left">
          <thead className="border-b border-neutral-200 text-sm text-neutral-500">
            <tr>
              <th className="p-5">Company</th>
              <th className="p-5">Role</th>
              <th className="p-5">Status</th>
              <th className="p-5">Job Link</th>
            </tr>
          </thead>

          <tbody>
            {filteredApps.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="p-8 text-center text-neutral-500"
                >
                  No applications found.
                </td>
              </tr>
            ) : (
              filteredApps.map((app) => (
                <tr
                  key={app._id}
                  className="border-b border-neutral-100 hover:bg-neutral-50"
                >
                  <td className="p-5 font-medium">{app.company}</td>
                  <td className="p-5">{app.role}</td>
                  <td className="p-5">
                    <StatusBadge status={app.status} />
                  </td>
                  <td className="p-5 text-sm text-neutral-500">
                    {app.jobLink ? (
                      <a
                        href={app.jobLink}
                        target="_blank"
                        className="underline"
                      >
                        Open
                      </a>
                    ) : (
                      "—"
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <AddApplicationModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onAdded={fetchApplications}
        userId={userId}
      />
    </DashboardLayout>
  );
}