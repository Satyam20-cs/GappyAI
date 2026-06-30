import Navbar from "../components/layout/Navbar";
import FeatureCard from "../components/ui/FeatureCard";
import { Link } from "react-router-dom";
import {
  Brain,
  FileText,
  Briefcase,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

function Landing() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-[#fafafa]">

        <div className="absolute left-[-150px] top-[-120px] h-[350px] w-[350px] rounded-full bg-blue-300/20 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-violet-300/20 blur-3xl"></div>

        <section className="mx-auto flex max-w-7xl flex-col items-center px-6 pt-44 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
          >

            <h1 className="mx-auto max-w-5xl text-6xl font-bold leading-tight">

              Your AI Command Centre
              <br />
              for Landing Dream Jobs.

            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-600">

              Track applications, generate cover letters,
              tailor resumes and prepare interviews —
              all from one beautifully designed workspace.

            </p>

            <div className="mt-10 flex justify-center gap-5">

              <Link
                to="/signup"
                className="flex items-center gap-2 rounded-2xl bg-neutral-900 px-8 py-4 text-white transition hover:bg-black"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>

              <a
                href="#features"
                className="rounded-2xl border border-neutral-300 bg-white px-8 py-4 transition hover:bg-neutral-100"
              >
                Learn More
              </a>

            </div>

          </motion.div>

        </section>

        <section
          id="features"
          className="mx-auto mt-36 grid max-w-7xl grid-cols-1 gap-8 px-6 pb-32 md:grid-cols-2 lg:grid-cols-4"
        >

          <FeatureCard
            icon={<Brain />}
            title="Resume AI"
            desc="Receive detailed AI feedback on every resume."
          />

          <FeatureCard
            icon={<FileText />}
            title="Cover Letters"
            desc="Generate personalized cover letters instantly."
          />

          <FeatureCard
            icon={<Briefcase />}
            title="Job Tracker"
            desc="Track every application from one dashboard."
          />

          <FeatureCard
            icon={<Sparkles />}
            title="Interview Prep"
            desc="Practice AI generated interview questions."
          />

        </section>

      </main>
    </>
  );
}

export default Landing;