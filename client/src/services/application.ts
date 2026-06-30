import api from "./api";

export interface AddApplicationData {
  userId: string;
  company: string;
  role: string;
  status: string;
  jobLink: string;
  notes: string;
}

export const addApplication = async (data: {
  userId: string;
  company: string;
  role: string;
  status: string;
  jobLink: string;
  notes: string;
}) => {
  const res = await api.post("/applications", data);
  return res.data;
};

export const getApplications = async (userId: string) => {
  const res = await api.get(`/applications/${userId}`);
  return res.data;
};