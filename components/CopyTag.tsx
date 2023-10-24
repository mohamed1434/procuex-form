import React, { useState } from "react";

function CopyTag({ url }: { url: string }) {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyClick = () => {
    const textToCopy = url;

    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();

    try {
      document.execCommand("copy");
      setCopySuccess(true);
    } catch (err) {
      console.error("Unable to copy:", err);
      setCopySuccess(false);
    } finally {
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="w-full">
      <button
        onClick={handleCopyClick}
        className="underline text-[#3ECC73] text-[8px] text-left md:text-[14px]"
      >
        {url}
      </button>
    </div>
  );
}

export default CopyTag;
