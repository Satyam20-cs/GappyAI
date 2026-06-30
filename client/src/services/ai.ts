import api from "./api";

export const askAI = async (prompt: string) => {
  const res = await api.post("/ai/chat", {
    prompt,
  });

  return res.data;
};

export const reviewResume = async (
  resumeText: string,
  targetRole: string,
  jobDescription: string
) => {
  const res = await api.post("/ai/resume-review", {
    resumeText,
    targetRole,
    jobDescription,
  });

  return res.data;
};

export const generateCoverLetter = async (
  company: string,
  role: string,
  experience: string
) => {
  const res = await api.post("/ai/cover-letter", {
    company,
    role,
    experience,
  });

  return res.data;
};