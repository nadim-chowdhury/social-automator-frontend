import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Add this new export
export const getSocialAccounts = async () => {
  const response = await api.get("/social/accounts");
  return response.data;
};

// Existing exports
export const generateContent = async (data: {
  prompt: string;
  platforms: string[];
}) => {
  const response = await api.post("/ai/generate", data);
  return response.data;
};

export const connectSocialAccount = async (platform: string) => {
  return api.get(`/social/connect/${platform}`);
};

export const getScheduledPosts = async (userId: string) => {
  const response = await api.get(`/schedules?userId=${userId}`);
  return response.data;
};
