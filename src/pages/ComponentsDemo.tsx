import { useState } from "react";
import { Code } from "lucide-react";
import CodeBlock from "@/components/Personal/CodeBlock";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/Store";

interface ComponentDemoProps {
  children?: React.ReactNode;
  code: string;
  showCode?: boolean;
}

const ComponentDemo = ({ children, code }: ComponentDemoProps) => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const themeMode = useSelector((store: RootState) => store.theme);

  return (
    <div
      className={` cursor-pointer rounded-lg overflow-hidden shadow-sm ${themeMode.mode === "light" ? "bg-gray-200 border border-gray-200" : "bg-[#222] border border-none"}`}
    >
      <div
        className={`flex items-center justify-between cursor-pointer px-4 py-2 border-b ${themeMode.mode === "light" ? "border-gray-100 bg-gray-50" : " bg-gray-500"}`}
      >
        <span className={`text-sm font-medium ${themeMode.mode === "light" ? "text-gray-700" : "text-white"}`}>Preview</span>
        <button
          onClick={() => setIsCodeVisible(!isCodeVisible)}
          className="flex items-center gap-1 px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors"
        >
          <Code size={14} />
          {isCodeVisible ? "Hide Code" : "View Code"}
        </button>
      </div>

      <div className="py-10 flex items-center justify-center">
        {children}
      </div>

      {isCodeVisible && (
        <div className="border-t border-gray-200">
          <CodeBlock code={code} />
        </div>
      )}
    </div>
  );
};

export default ComponentDemo;
