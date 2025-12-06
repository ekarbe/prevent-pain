import React from 'react';

const ExerciseCard = ({ exercise }) => (
    <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-bold text-slate-800">{exercise.name}</h4>
        <span className="text-xs font-mono bg-blue-100 text-blue-800 px-2 py-1 rounded">{exercise.reps}</span>
      </div>
      <p className="text-slate-600 text-sm leading-relaxed">{exercise.instructions}</p>
    </div>
  );

  export default ExerciseCard;
