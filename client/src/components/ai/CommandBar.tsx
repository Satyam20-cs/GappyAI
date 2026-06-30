import { useState } from "react";
import { Search, X } from "lucide-react";
import { askAI } from "../../services/ai";

export default function CommandBar() {
  const [open, setOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleAskAI() {
    if (!prompt.trim()) return;

    try {
      setLoading(true);
      setOutput("");

      const res = await askAI(prompt);

      setOutput(res.result);
    } catch (error) {
      console.error(error);
      setOutput("Something went wrong while contacting AI.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="mb-6">
        <button
          onClick={() => setOpen(true)}
          className="flex w-full items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-left text-sm text-neutral-500 shadow-sm hover:bg-neutral-50"
        >
          <Search size={16} />
          Ask GappyAI anything... resume, cover letter, interview prep
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/30 pt-24 backdrop-blur-sm">
          <div className="w-[92%] max-w-2xl rounded-3xl border border-white/40 bg-white p-6 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">GappyAI Copilot</h2>

              <button onClick={() => setOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Example: Review my resume for software internships..."
              rows={5}
              className="w-full resize-none rounded-2xl border border-neutral-300 p-4 outline-none focus:border-black"
            />

            <button
              onClick={handleAskAI}
              disabled={loading}
              className="mt-4 rounded-2xl bg-black px-6 py-3 text-white disabled:opacity-60"
            >
              {loading ? "Thinking..." : "Ask AI"}
            </button>

            {output && (
              <div className="mt-6 max-h-80 overflow-y-auto whitespace-pre-wrap rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-sm leading-7 text-neutral-800">
                {output}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}