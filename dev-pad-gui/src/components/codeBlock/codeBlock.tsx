import React from "react";

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 font-mono relative group">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs uppercase text-purple-400">
          {language}
        </span>

        <button
          className="
            text-xs
            text-slate-400
            opacity-0
            group-hover:opacity-100
            hover:text-purple-400
            transition
          "
        >
          Copy
        </button>
      </div>

      <pre className="text-sm leading-relaxed whitespace-pre-wrap text-slate-200">
        {code}
      </pre>
    </div>
  );
};

export default CodeBlock;
