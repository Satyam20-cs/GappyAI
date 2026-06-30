import DashboardLayout from "../components/layout/DashboardLayout";
import CommandBar from "../components/ai/CommandBar";
import AiPanel from "../components/ai/AiPanel";
import { useEffect, useState } from "react";
import { getApplications } from "../services/application";
import ApplicationCard from "../components/ui/ApplicationCard";
import Greeting from "../components/dashboard/Greeting";
import WeeklyGoal from "../components/dashboard/WeeklyGoal";
import StatsCard from "../components/dashboard/StatsCard";
import AddApplicationModal from "../components/application/AddApplicationModal";

import {
  Briefcase,
  Calendar,
  BadgeCheck,
  XCircle,
} from "lucide-react";

export default function Dashboard() {

  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
);

const userId = user._id;

  const [apps, setApps] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState(false);

  async function fetchApplications() {
    const data = await getApplications(userId);
    setApps(data);
  }

  useEffect(() => {
    fetchApplications();
  }, []);
  console.log(user);
  console.log(userId);
  return (
    <DashboardLayout>

      <Greeting />

      <CommandBar />

      <div className="grid gap-6 lg:grid-cols-4">

        <StatsCard
          title="Applications"
          value={apps.length}
          icon={<Briefcase size={20} />}
          color="bg-blue-100"
        />

        <StatsCard
          title="Interviews"
          value={apps.filter((a) => a.status === "interview").length}
          icon={<Calendar size={20} />}
          color="bg-yellow-100"
        />

        <StatsCard
          title="Offers"
          value={apps.filter((a) => a.status === "offer").length}
          icon={<BadgeCheck size={20} />}
          color="bg-green-100"
        />

        <StatsCard
          title="Rejected"
          value={apps.filter((a) => a.status === "rejected").length}
          icon={<XCircle size={20} />}
          color="bg-red-100"
        />

      </div>

      <div className="mt-8">

        <WeeklyGoal
          current={apps.length}
          goal={25}
        />

      </div>

      <AiPanel />

      <div className="mt-10">

        <div className="mb-4 flex items-center justify-between">

          <h2 className="text-xl font-semibold">
            Recent Applications
          </h2>

          <button
            onClick={() => setOpenModal(true)}
            className="rounded-xl bg-black px-5 py-2 text-white hover:bg-neutral-800"
          >
            + Add
          </button>

        </div>

        <div className="space-y-3">

          {apps.map((app) => (
            <ApplicationCard
              key={app._id}
              company={app.company}
              role={app.role}
              status={app.status}
            />
          ))}

        </div>

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