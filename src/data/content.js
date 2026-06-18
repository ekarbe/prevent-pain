export const bodyData = {
  "lower-back": {
    label: "Lower Back",
    description:
      "Common area for fatigue and tightness in runners due to core weakness or tight hip flexors.",
    causes: [],
  },
  hips: {
    label: "Hips & Glutes",
    description:
      "The power engine of running. Weakness here causes issues downstream (knees/ankles).",
    causes: [],
  },
  thighs: {
    label: "Upper Leg (Quads/Hams)",
    description: "The primary shock absorbers and propellers.",
    causes: [],
  },
  knees: {
    label: "Knees",
    description: "The most common site of injury for runners.",
    causes: [],
  },
  calves: {
    label: "Calves & Shins",
    description: "Absorbs 2-3x bodyweight on every step.",
    causes: [],
  },
  ankles: {
    label: "Ankles & Feet",
    description: "The foundation of the running chain.",
    causes: [],
  },
};

export const bodyZones = [
  { id: "lower-back", xMin: 19, xMax: 80, yMin: 0, yMax: 6 },
  { id: "hips", xMin: 18, xMax: 86, yMin: 8, yMax: 21 },
  { id: "thighs", xMin: 14, xMax: 83, yMin: 21, yMax: 43 },
  { id: "knees", xMin: 20, xMax: 81, yMin: 46, yMax: 55 },
  { id: "calves", xMin: 18, xMax: 82, yMin: 57, yMax: 79 },
  { id: "ankles", xMin: 22, xMax: 80, yMin: 83, yMax: 89 },
];
