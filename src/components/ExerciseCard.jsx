const ExerciseCard = ({ exercise }) => (
  <div className="bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 rounded-xl p-4 shadow-sm hover:shadow-md transition-all">
    <div className="flex justify-between items-start mb-2">
      <h4 className="font-bold text-zinc-800 dark:text-zinc-100">
        {exercise.name}
      </h4>
      <span className="text-xs font-mono font-semibold bg-blue-500/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-md">
        {exercise.reps}
      </span>
    </div>
    <p className="text-zinc-600 text-sm leading-relaxed dark:text-zinc-400">
      {exercise.instructions}
    </p>
  </div>
);

export default ExerciseCard;
