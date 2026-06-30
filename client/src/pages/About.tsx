import { Brain, Briefcase, FileText, Sparkles } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">

        <div className="inline-flex rounded-full border border-neutral-200 bg-white px-5 py-2 text-sm shadow-sm">
          About GappyAI
        </div>

        <h1 className="mt-8 text-6xl font-bold tracking-tight text-neutral-900">
          Built to simplify
          <br />
          your job search.
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl text-neutral-600 leading-8">
          GappyAI is your AI-powered career companion that helps you
          organize applications, improve resumes, generate cover
          letters, and prepare for interviews — all in one place.
        </p>

      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-24 md:grid-cols-2 lg:grid-cols-4">

        <FeatureCard
          icon={<Briefcase size={28} />}
          title="Application Tracking"
          text="Track every internship and job application effortlessly."
        />

        <FeatureCard
          icon={<FileText size={28} />}
          title="Resume Analysis"
          text="Receive AI-powered ATS feedback to improve your resume."
        />

        <FeatureCard
          icon={<Sparkles size={28} />}
          title="Cover Letters"
          text="Generate tailored cover letters in seconds."
        />

        <FeatureCard
          icon={<Brain size={28} />}
          title="Interview Prep"
          text="Practice interview questions with AI assistance."
        />

      </section>

      <section className="pb-20 text-center">

        <h2 className="text-3xl font-bold">
          Built for students, graduates and professionals.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-neutral-600">
          GappyAI combines application management with AI-powered
          career tools to help you land your dream opportunity faster.
        </p>

      </section>

    </div>
  );
}

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">

      <div className="mb-5 inline-flex rounded-2xl bg-neutral-900 p-4 text-white">
        {icon}
      </div>

      <h3 className="mb-3 text-xl font-semibold">
        {title}
      </h3>

      <p className="text-neutral-600">
        {text}
      </p>

    </div>
  );
}