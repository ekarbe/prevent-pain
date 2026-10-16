// Thigh close-up. Drawing area 0 0 240 300 (rendered with a small margin).
// Each view: outline (filled silhouette), details (strokes), spots { spotId: [x, y] }, edges [left, right] label keys.
export default {
  views: ["front", "back"],
  front: {
    caption: {
      en: "Left thigh from the front",
      de: "Linker Oberschenkel von vorne",
    },
    outline:
      "M 52 0 L 188 0 C 192 50, 188 110, 176 170 C 168 214, 163 256, 162 300 L 78 300 C 73 288, 70 268, 71 250 C 72 226, 77 200, 74 170 C 70 130, 56 60, 52 0 Z",
    details: [
      "M 55 32 C 77 23, 96 12, 114 0",
      "M 98 12 C 92 76, 86 146, 76 208",
      "M 128 22 C 108 80, 102 170, 112 262",
      "M 128 22 C 150 80, 150 170, 130 262",
      "M 170 30 C 174 110, 164 200, 150 284",
      "M 77 200 C 94 214, 104 246, 105 279",
      "M 100 300 C 100 286, 110 278, 121 278 C 132 278, 142 286, 142 300",
    ].join(" "),
    spots: {
      "inner-thigh": [74, 96],
      "front-thigh": [126, 140],
      "outer-thigh": [170, 154],
    },
    edges: ["inner", "outer"],
  },
  back: {
    caption: {
      en: "Left thigh from behind",
      de: "Linker Oberschenkel von hinten",
    },
    outline:
      "M 52 0 L 188 0 C 192 14, 192 30, 184 42 C 180 96, 172 150, 170 196 C 168 236, 164 272, 158 300 L 78 300 C 77 256, 72 214, 64 170 C 52 110, 48 50, 52 0 Z",
    details: [
      "M 184 42 C 162 56, 124 56, 90 42",
      "M 120 70 C 118 124, 118 170, 120 204",
      "M 120 204 C 108 230, 102 256, 98 284",
      "M 120 204 C 132 230, 138 256, 142 284",
      "M 70 70 C 74 140, 86 228, 98 284",
      "M 168 70 C 164 140, 154 228, 142 284",
      "M 92 288 Q 120 294 148 288",
    ].join(" "),
    spots: {
      "outer-thigh": [72, 160],
      "back-thigh": [120, 134],
      "inner-thigh": [170, 104],
    },
    edges: ["outer", "inner"],
  },
};
