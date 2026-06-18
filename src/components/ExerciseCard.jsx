import { ExternalLink } from "lucide-react";

const ExerciseCard = ({ exercise }) => (
  <div className="bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 rounded-xl p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
    <div>
      <div className="flex justify-between items-start mb-2 gap-2">
        <h4 className="font-bold text-zinc-800 dark:text-zinc-100 text-sm md:text-base">
          {exercise.name}
        </h4>
        <span className="text-[10px] md:text-xs font-mono font-semibold bg-blue-500/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-md shrink-0">
          {exercise.reps}
        </span>
      </div>
      <p className="text-zinc-650 text-xs md:text-sm leading-relaxed dark:text-zinc-400">
        {exercise.instructions}
      </p>
    </div>
    {exercise.source && (
      <div className="mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-850 flex items-center justify-between">
        <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-semibold tracking-wider uppercase">
          Reference Source
        </span>
        <a
          href={exercise.source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 hover:underline transition-colors"
        >
          {exercise.source.name}
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    )}
  </div>
);

export default ExerciseCard;
