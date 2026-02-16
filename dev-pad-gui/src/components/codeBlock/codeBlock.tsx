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
    <div className="bg-[var(--surface-2)] border border-[var(--border)] rounded-lg p-4 font-mono relative group">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs uppercase text-[var(--accent)]">
          {language}
        </span>
        <CopyButton onClick={() => copyToClipboard(code)} />
      </div>
      <pre className="text-sm leading-relaxed whitespace-pre-wrap text-[var(--text)]">
        {code}
      </pre>
    </div>
  );
};

export default CodeBlock;
