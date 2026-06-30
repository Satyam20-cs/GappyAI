import AiCard from "./AiCard";
import { FileText, Sparkles, Mic } from "lucide-react";

export default function AiPanel() {
  return (
    <div className="mt-10">
      <h2 className="mb-4 text-xl font-semibold">
        AI Workspace
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

        <AiCard
          icon={<FileText />}
          title="Resume Analyzer"
          desc="Get AI feedback on your resume instantly"
        />

        <AiCard
          icon={<Sparkles />}
          title="Cover Letter Generator"
          desc="Generate tailored cover letters"
        />

        <AiCard
          icon={<Mic />}
          title="Interview Prep"
          desc="Practice AI mock interviews"
        />

      </div>
    </div>
  );
}