// Lower back close-up. Drawing area 0 0 240 300 (rendered with a small margin).
// Each view: outline (filled silhouette), details (strokes), spots { spotId: [x, y] }, edges [left, right] label keys.
export default {
  views: ["back", "side"],
  back: {
    caption: { en: "Lower back from behind", de: "Unterer Rücken von hinten" },
    outline:
      "M 46 0 C 48 24, 54 44, 54 64 C 54 84, 46 108, 41 132 C 37 150, 35 172, 35 196 C 35 230, 40 264, 44 300 L 114 300 C 116 284, 118 270, 120 260 C 122 270, 124 284, 126 300 L 196 300 C 200 264, 205 230, 205 196 C 205 172, 203 150, 199 132 C 194 108, 186 84, 186 64 C 186 44, 192 24, 194 0 Z",
    details: [
      "M 120 4 C 120 40, 120 80, 120 120",
      "M 74 2 C 68 50, 74 100, 98 132",
      "M 166 2 C 172 50, 166 100, 142 132",
      "M 72 18 C 66 28, 60 38, 54 50",
      "M 168 18 C 174 28, 180 38, 186 50",
      "M 96 136 a 4 3 0 1 0 8 0 a 4 3 0 1 0 -8 0",
      "M 136 136 a 4 3 0 1 0 8 0 a 4 3 0 1 0 -8 0",
      "M 102 144 C 108 154, 114 164, 120 174 C 126 164, 132 154, 138 144",
      "M 120 174 C 120 198, 120 222, 120 246",
      "M 96 146 C 70 154, 50 174, 43 210",
      "M 144 146 C 170 154, 190 174, 197 210",
      "M 117 248 C 100 258, 72 256, 48 241",
      "M 123 248 C 140 258, 168 256, 192 241",
    ].join(" "),
    spots: {
      center: [120, 102],
      "one-side": [92, 80],
      dimple: [100, 136],
      "into-leg": [80, 214],
    },
    edges: null,
  },
  side: {
    caption: { en: "Lower back from the left", de: "Unterer Rücken von links" },
    outline:
      "M 68 0 C 60 36, 54 80, 56 116 C 58 150, 66 178, 74 196 C 78 230, 80 266, 82 300 L 162 300 C 164 276, 166 258, 170 244 C 186 234, 196 210, 196 182 C 196 150, 180 124, 166 104 C 158 90, 160 40, 170 0 Z",
    details: [
      "M 66 14 C 84 32, 108 44, 131 40",
      "M 136 4 C 128 40, 128 80, 146 112",
      "M 72 132 C 90 106, 136 98, 158 118",
      "M 150 126 C 128 162, 124 232, 122 300",
      "M 74 196 C 82 190, 88 182, 92 172",
      "M 150 246 Q 160 249 170 244",
    ].join(" "),
    spots: {
      "one-side": [148, 86],
      dimple: [160, 122],
      "into-leg": [146, 266],
    },
    edges: ["front", "back"],
  },
};
