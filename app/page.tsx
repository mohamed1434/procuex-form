"use client";
import EditForm from "@/components/forms/EditForm";

export default function Home() {
  return (
    <div className="h-fit p-6">
      <h1 className="font-bold text-[36px]">My RFQ</h1>
      <EditForm />
    </div>
  );
}
