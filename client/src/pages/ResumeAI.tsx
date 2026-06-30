import { useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import { reviewResume } from "../services/ai";

export default function ResumeAI() {
  const [resumeText, setResumeText] = useState("");
  const [result, setResult] = useState("");
  const [targetRole, setTargetRole] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleAnalyze() {
    if (!resumeText.trim()) return;

    try {
      setLoading(true);
      setResult("");

      const res = await reviewResume(resumeText, targetRole, jobDescription);
      setResult(res.result);
    } catch (error) {
      console.error(error);
      setResult("AI failed to analyze the resume. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Resume AI</h1>
        <p className="mt-2 text-neutral-500">
          Paste your resume and get AI feedback, ATS suggestions, and improved bullet points.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-xl backdrop-blur-xl">
          <h2 className="mb-4 text-xl font-semibold">Paste Resume</h2>
          <input
            value={targetRole}
            onChange={(e) => setTargetRole(e.target.value)}
            placeholder="Target role, e.g. Software Engineer Intern"
            className="mb-4 w-full rounded-2xl border border-neutral-200 p-4 outline-none focus:border-black"
          />

          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            rows={6}
            placeholder="Paste job description here for tailored feedback..."
            className="mb-4 w-full resize-none rounded-2xl border border-neutral-200 p-4 outline-none focus:border-black"
          />
          <textarea
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            rows={16}
            placeholder="Paste your resume text here..."
            className="w-full resize-none rounded-2xl border border-neutral-200 p-4 outline-none focus:border-black"
          />

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="mt-5 w-full rounded-2xl bg-black py-4 font-semibold text-white hover:bg-neutral-800 disabled:opacity-60"
          >
            {loading ? "Analyzing..." : "Analyze Resume"}
          </button>
        </div>

        <div className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-xl backdrop-blur-xl">
          <h2 className="mb-4 text-xl font-semibold">AI Feedback</h2>

          {result ? (
            <div className="whitespace-pre-wrap text-sm leading-7 text-neutral-800">
              {result}
            </div>
          ) : (
            <div className="flex h-[420px] items-center justify-center rounded-2xl border border-dashed border-neutral-300 text-neutral-500">
              Your resume feedback will appear here.
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}