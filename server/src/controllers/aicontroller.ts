import ai from "../lib/ai.js";

const model = process.env.GROQ_MODEL || "openai/gpt-oss-20b";

export const aiChat = async (req: any, res: any) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        message: "Prompt is required",
      });
    }

    const response = await ai.chat.completions.create({
      model,
      messages: [
        {
          role: "system",
          content:
            "You are GappyAI, an AI career assistant. Help students track jobs, improve resumes, generate cover letters, and prepare for interviews. Keep answers practical, structured, and concise.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    return res.status(200).json({
      result: response.choices[0].message.content,
    });
  } catch (error) {
    console.error("AI Error:", error);

    return res.status(500).json({
      message: "AI request failed",
    });
  }
};

export const reviewResume = async (req: any, res: any) => {
  try {
    const { resumeText, targetRole, jobDescription } = req.body;

    if (!resumeText) {
      return res.status(400).json({
        message: "Resume text is required",
      });
    }

    const response = await ai.chat.completions.create({
      model,
      temperature: 0.8,
      messages: [
        {
          role: "system",
          content:
            "You are a strict but helpful ATS resume reviewer. Do not give generic feedback. Tailor every point to the provided target role and job description. Be specific, practical, and concise.",
        },
        {
          role: "user",
          content: `
Target Role:
${targetRole || "Not provided"}

Job Description:
${jobDescription || "Not provided"}

Resume:
${resumeText}

Return response in this exact format:

1. ATS Score: __/100

2. Best Matches:
- mention 3 strengths from the resume

3. Missing Keywords:
- list role-specific missing keywords

4. Weak Bullet Points:
- identify 3 weak bullets or weak areas

5. Improved Bullet Points:
- rewrite 3 bullets with stronger action verbs and measurable impact

6. Final Recruiter Advice:
- give 3 short practical actions
`,
        },
      ],
    });

    return res.status(200).json({
      result: response.choices[0].message.content,
    });
  } catch (error) {
    console.error("AI Resume Error:", error);

    return res.status(500).json({
      message: "Resume review failed",
    });
  }
};

export const generateCoverLetter = async (req: any, res: any) => {
  try {
    const { company, role, experience } = req.body;

    if (!company || !role || !experience) {
      return res.status(400).json({
        message: "Company, role, and experience are required",
      });
    }

    const response = await ai.chat.completions.create({
      model,
      messages: [
        {
          role: "system",
          content:
            "You are a professional cover letter writer. Write concise, natural, personalized cover letters. Avoid generic AI-sounding language.",
        },
        {
          role: "user",
          content: `
Company: ${company}
Role: ${role}
Candidate experience:
${experience}
`,
        },
      ],
    });

    return res.status(200).json({
      result: response.choices[0].message.content,
    });
  } catch (error) {
    console.error("AI Cover Letter Error:", error);

    return res.status(500).json({
      message: "Cover letter generation failed",
    });
  }
};