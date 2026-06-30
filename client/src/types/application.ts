export interface Application {
  _id: string;

  company: string;

  role: string;

  status:
    | "applied"
    | "interview"
    | "offer"
    | "rejected";

  jobLink: string;

  notes: string;

  createdAt: string;
}