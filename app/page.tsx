"use client";
import EditForm from "@/components/forms/EditForm";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { color } = useTheme();
  return (
    <div className="h-fit p-6">
      <h1 className={`font-bold text-[36px] px-6 text-primary theme-${color} theme-light`}>My RFQ</h1>
      <EditForm />
    </div>
  );
}
