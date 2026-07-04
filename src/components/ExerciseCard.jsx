import { ExternalLink } from "lucide-react";
import TiltCard from "./TiltCard";

const ExerciseCard = ({ exercise }) => (
  <TiltCard className="p-8 flex flex-col justify-between h-full">
    <div>
      <div className="flex justify-between items-start mb-4 gap-4">
        <h3 className="text-apple-primaryTextLight dark:text-apple-primaryTextDark text-base md:text-lg">
          {exercise.name}
        </h3>
        <span className="text-[10px] md:text-xs font-mono font-semibold bg-blue-500/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 px-3 py-1.5 rounded-full shrink-0">
          {exercise.reps}
        </span>
      </div>
      <p className="mb-4">
        {exercise.instructions}
      </p>
    </div>
    {exercise.source && (
      <div className="mt-4 pt-4 border-t border-apple-borderLight dark:border-apple-borderDark flex items-center justify-between">
        <span className="text-[10px] text-apple-secondaryTextLight dark:text-apple-secondaryTextDark font-semibold tracking-wider uppercase">
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
  </TiltCard>
);

export default ExerciseCard;
