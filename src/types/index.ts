export type Platform = {
  id: string;
  name: string;
  icon: string;
  requiresMedia?: boolean;
};

export type SocialAccount = {
  id: string;
  platform: Platform["id"];
  username: string;
  connectedAt: Date;
};

export type ScheduledPost = {
  id: string;
  content: string;
  mediaUrls: string[];
  platforms: Platform["id"][];
  scheduledAt: Date;
  status: "pending" | "posted" | "failed";
};

export type FormData = {
  prompt: string;
  platforms: string[];
  scheduleDate: Date;
};

export type FormValues = {
  platforms: string[];
};
