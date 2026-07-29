import { Circle } from "lucide-react";
import { highlight } from "./Highlight";
import { useTypeWriter } from "../hooks/useTypeWriter";
import { LineNumbers } from "./LineNumbers";

export const RacePane = ({
  fileName,
  dotColor,
  lang,
  fullCode,
  active,
  onFinish,
  isWinner,
  isDone,
  reduceMotion,
}) => {
  const typed = useTypeWriter(fullCode, {
    active: active && !reduceMotion,
    onFinish,
  });
  const displayed = reduceMotion ? fullCode : typed;
  const totalLines = displayed.split("\n").length;
 
  return (
    <div className="relative w-full h-full bg-[#0d0f14] flex flex-col rounded-xl overflow-hidden border border-white/10">
      <div className="flex items-center justify-between h-8 sm:h-9 bg-[#0a0b0e] border-b border-white/5 px-2.5 sm:px-3 shrink-0">
        <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] text-white/70 truncate">
          <Circle size={6} className="sm:w-[7px] sm:h-[7px] shrink-0" fill={dotColor} stroke="none" />
          <span className="truncate">{fileName}</span>
        </div>
      </div>
 
      <div className="relative flex-1 overflow-auto flex px-1 py-3 sm:py-4">
        <LineNumbers count={totalLines} />
        <pre className="flex-1 m-0 min-w-0 font-mono text-[10px] sm:text-[11px] md:text-[12px] leading-relaxed whitespace-pre overflow-x-auto pr-3 sm:pr-4">
          <span
            dangerouslySetInnerHTML={{ __html: highlight(displayed, lang) }}
          />
          {!reduceMotion && !isDone && (
            <span className="inline-block w-[6px] sm:w-[7px] h-[1em] bg-white/70 align-middle animate-pulse ml-[1px]" />
          )}
        </pre>
      </div>
    </div>
  );
};
