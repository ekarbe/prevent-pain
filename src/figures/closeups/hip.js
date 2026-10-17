// Hip close-up. Drawing area 0 0 240 300 (rendered with a small margin).
// Each view: outline (filled silhouette), details (strokes), spots { spotId: [x, y] }, edges [left, right] label keys.
export default {
  views: ["front", "side", "back"],
  front: {
    caption: { en: "Left hip from the front", de: "Linke Hüfte von vorne" },
    // midline at x=66; a strip of the other side shows on the left and its groin fold runs down into the crotch
    outline:
      "M 38 0 L 38 138 C 38 162, 56 176, 75 181 C 78 218, 82 258, 88 300 L 174 300 C 178 262, 186 222, 190 186 C 194 156, 196 128, 194 108 C 192 80, 180 50, 172 30 C 168 20, 166 10, 166 0 Z",
    details: [
      "M 174 40 C 166 43, 156 50, 150 60",
      "M 140 66 a 7 5 0 1 0 14 0 a 7 5 0 1 0 -14 0",
      // groin crease, running down into the crotch where the inner thigh begins
      "M 140 80 C 124 100, 104 126, 80 158 C 77 162, 75 170, 75 181",
      "M 146 76 C 140 140, 122 220, 106 300",
      "M 160 94 C 160 160, 156 240, 150 300",
      "M 186 112 C 182 122, 182 136, 186 146",
      // midline down to the pubic bone, where the two halves of the pelvis meet
      "M 66 24 C 66 58, 66 90, 66 112",
      "M 46 134 C 52 125, 59 121, 66 121 C 73 121, 80 125, 86 134",
      "M 66 117 L 66 128",
    ].join(" "),
    spots: {
      groin: [126, 100],
      "outer-hip": [180, 128],
      pubic: [66, 122],
      "pelvic-floor": [66, 160],
    },
    edges: ["inner", "outer"],
  },
  side: {
    caption: { en: "Left hip from the outside", de: "Linke Hüfte von außen" },
    outline:
      "M 64 0 C 58 28, 54 56, 54 82 C 54 104, 58 122, 62 134 C 60 150, 58 172, 58 196 C 60 236, 66 270, 72 300 L 168 300 C 172 266, 176 230, 180 204 C 182 194, 184 188, 188 184 C 202 176, 208 150, 206 122 C 204 94, 194 68, 182 48 C 174 34, 170 18, 172 0 Z",
    details: [
      "M 166 44 C 146 20, 98 20, 72 58",
      "M 62 64 a 6 5 0 1 0 12 0 a 6 5 0 1 0 -12 0",
      "M 106 132 a 14 17 0 1 0 28 0 a 14 17 0 1 0 -28 0",
      "M 160 58 C 150 92, 144 124, 140 160 C 136 210, 130 260, 128 300",
      "M 158 182 Q 172 189 188 184",
      "M 88 52 C 92 120, 106 190, 108 300",
      "M 62 134 C 70 128, 76 120, 80 110",
    ].join(" "),
    spots: {
      groin: [70, 120],
      "outer-hip": [120, 132],
      buttock: [180, 118],
    },
    edges: ["front", "back"],
  },
  back: {
    caption: { en: "Left hip from behind", de: "Linke Hüfte von hinten" },
    outline:
      "M 182 0 L 182 150 C 182 166, 176 176, 168 182 C 168 220, 166 260, 162 300 L 74 300 C 70 262, 62 222, 58 186 C 54 156, 52 128, 54 108 C 56 80, 68 50, 76 30 C 80 20, 82 10, 82 0 Z",
    details: [
      "M 73 42 C 98 28, 140 34, 156 54",
      "M 155 60 a 5 4 0 1 0 10 0 a 5 4 0 1 0 -10 0",
      "M 182 92 C 160 78, 112 86, 86 114 C 70 134, 74 162, 98 172 C 120 182, 148 188, 168 182",
      "M 146 190 C 134 226, 124 262, 122 300",
      "M 70 172 C 78 214, 86 258, 92 300",
      "M 62 112 C 66 122, 66 136, 62 146",
    ].join(" "),
    spots: {
      buttock: [128, 130],
      "sit-bone": [150, 168],
      "outer-hip": [68, 128],
    },
    edges: ["outer", "inner"],
  },
};
