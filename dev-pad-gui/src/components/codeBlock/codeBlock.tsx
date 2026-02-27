import React from "react";
import CopyButton from "../copyButton/copyButton";

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="glass group relative rounded-[var(--radius-md)] p-4 font-[var(--font-mono)]">
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
          {language}
        </span>
        <CopyButton onClick={() => copyToClipboard(code)} />
      </div>
      <pre className="max-h-80 overflow-auto rounded-[var(--radius-sm)] bg-[var(--surface-soft)] p-3 text-sm leading-relaxed whitespace-pre-wrap text-[var(--text)]">
        {code}
      </pre>
    </div>
  );
};

export default CodeBlock;
