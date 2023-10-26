import React from "react";
import toast from "react-hot-toast";

function CopyTag({ url }: { url: string }) {

  const handleCopyClick = () => {
    navigator.clipboard.writeText(url);
    toast.success("URL copied to clipboard");
  };

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={handleCopyClick}
        className="underline text-[#3ECC73] text-[8px] text-left md:text-[14px]"
      >
        {url}
      </button>
    </div>
  );
}

export default CopyTag;
