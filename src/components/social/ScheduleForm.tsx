"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { generateContent } from "@/lib/api";
import PlatformSelector from "./PlatformSelector";
import { toast } from "react-hot-toast";
import "react-datepicker/dist/react-datepicker.css";

type FormData = {
  prompt: string;
  platforms: string[];
  scheduleDate: Date;
};

export default function ScheduleForm({ userId }: { userId: string }) {
  console.log(" ScheduleForm ~ userId:", userId);
  const { register, handleSubmit, control, setValue } = useForm<FormData>();
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<{
    text: string;
    media?: string[];
  } | null>(null);

  const handleGenerate = async (data: FormData) => {
    try {
      setIsGenerating(true);
      const content = await generateContent({
        prompt: data.prompt,
        platforms: data.platforms,
      });
      setGeneratedContent(content);
    } catch (error) {
      console.log(" handleGenerate ~ error:", error);
      toast.error("Failed to generate content");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Create New Post</h2>
      <form onSubmit={handleSubmit(handleGenerate)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Prompt
          </label>
          <textarea
            {...register("prompt", { required: true })}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <PlatformSelector control={control} setValue={setValue} />

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Schedule Time
          </label>
          <DatePicker
            selected={new Date()}
            onChange={(date) => setValue("scheduleDate", date as Date)}
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mm aa"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </div>

        <button
          type="submit"
          disabled={isGenerating}
          className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50"
        >
          {isGenerating ? "Generating..." : "Generate Content"}
        </button>

        {generatedContent && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">Generated Content</h3>
            <p className="mb-4">{generatedContent.text}</p>
            <button
              type="button"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              Schedule Post
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
