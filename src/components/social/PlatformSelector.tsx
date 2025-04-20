"use client";

import { Control, useController, UseFormSetValue } from "react-hook-form";
import { Platform } from "@/types";

const platforms: Platform[] = [
  { id: "linkedin", name: "LinkedIn", icon: "..." },
  { id: "twitter", name: "Twitter", icon: "..." },
  { id: "instagram", name: "Instagram", icon: "..." },
  { id: "facebook", name: "Facebook", icon: "..." },
];

type FormData = {
  prompt: string;
  platforms: string[];
  scheduleDate: Date;
};

export default function PlatformSelector({
  control,
  setValue,
}: {
  control: Control<FormData>;
  setValue: UseFormSetValue<FormData>;
}) {
  const { field } = useController({
    name: "platforms",
    control,
    defaultValue: [],
  });

  const togglePlatform = (platformId: string) => {
    const newValue = field.value.includes(platformId)
      ? field.value.filter((id: string) => id !== platformId)
      : [...field.value, platformId];
    setValue("platforms", newValue);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Platforms
      </label>
      <div className="mt-2 flex gap-2 flex-wrap">
        {platforms.map((platform) => (
          <button
            key={platform.id}
            type="button"
            onClick={() => togglePlatform(platform.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              field.value.includes(platform.id)
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {platform.name}
          </button>
        ))}
      </div>
    </div>
  );
}
