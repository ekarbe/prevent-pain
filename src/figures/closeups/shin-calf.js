// Shin & calf close-up. Drawing area 0 0 240 300 (rendered with a small margin).
// Each view: outline (filled silhouette), details (strokes), spots { spotId: [x, y] }, edges [left, right] label keys.
export default {
  views: ["front", "inside", "back"],
  front: {
    caption: {
      en: "Left lower leg from the front",
      de: "Linker Unterschenkel von vorne",
    },
    outline:
      "M 76 0 C 70 24, 64 50, 64 80 C 64 116, 78 160, 86 198 C 90 218, 92 234, 91 246 C 90 254, 86 258, 86 266 C 86 276, 88 288, 88 300 L 154 300 C 154 290, 156 284, 156 276 C 156 266, 150 258, 149 246 C 148 220, 152 190, 156 150 C 160 110, 166 70, 166 40 C 166 24, 164 10, 164 0 Z",
    details: [
      "M 107 15 a 7 5 0 1 0 14 0 a 7 5 0 1 0 -14 0",
      "M 113 26 C 111 80, 110 150, 106 210 C 104 234, 100 248, 96 258",
      "M 142 20 C 150 64, 148 124, 134 176 C 126 210, 118 250, 112 290",
      "M 80 64 C 80 116, 88 170, 96 218 C 97 226, 97 232, 96 238",
      "M 92 256 C 98 260, 100 272, 94 280",
      "M 150 266 C 144 270, 144 282, 150 288",
      "M 147 258 C 144 238, 143 212, 144 178",
    ].join(" "),
    spots: {
      "front-shin": [130, 80],
      "inner-shin": [95, 212],
      "outer-shin": [144, 205],
    },
    edges: ["inner", "outer"],
  },
  inside: {
    caption: {
      en: "Left lower leg from the inside",
      de: "Linker Unterschenkel von innen",
    },
    outline:
      "M 72 0 C 62 24, 52 56, 53 90 C 54 124, 70 164, 84 196 C 90 210, 92 226, 92 240 C 92 256, 88 272, 84 286 C 82 292, 82 296, 82 300 L 182 300 C 176 294, 170 288, 166 278 C 162 266, 160 250, 160 230 C 160 190, 166 110, 170 50 C 172 30, 174 14, 174 0 Z",
    details: [
      "M 161 18 a 5 4 0 1 0 10 0 a 5 4 0 1 0 -10 0",
      "M 144 14 C 142 80, 140 160, 136 226 C 135 238, 134 246, 134 252",
      "M 122 264 a 10 11 0 1 0 20 0 a 10 11 0 1 0 -20 0",
      "M 114 6 C 122 50, 120 104, 104 140 C 94 158, 78 164, 66 154",
      "M 102 180 C 106 210, 108 240, 106 274",
    ].join(" "),
    spots: {
      calf: [84, 96],
      "inner-shin": [138, 212],
      achilles: [100, 246],
    },
    edges: ["back", "front"],
  },
  back: {
    caption: {
      en: "Left lower leg from behind",
      de: "Linker Unterschenkel von hinten",
    },
    outline:
      "M 164 0 C 170 24, 176 50, 176 80 C 176 116, 162 160, 154 198 C 150 218, 148 234, 149 246 C 150 254, 154 258, 154 266 C 154 276, 152 288, 152 300 L 86 300 C 86 290, 84 284, 84 276 C 84 266, 90 258, 91 246 C 92 220, 88 190, 84 150 C 80 110, 74 70, 74 40 C 74 24, 76 10, 76 0 Z",
    details: [
      "M 120 6 C 118 40, 118 90, 120 128",
      "M 80 64 C 84 104, 98 132, 118 138",
      "M 168 76 C 166 124, 148 156, 122 162",
      "M 108 152 C 110 190, 112 226, 110 266",
      "M 134 164 C 130 198, 128 228, 130 266",
      "M 106 270 C 104 286, 112 294, 120 294 C 128 294, 136 286, 134 270",
      "M 148 256 C 142 260, 140 272, 146 280",
      "M 90 266 C 96 270, 96 282, 90 288",
    ].join(" "),
    spots: {
      calf: [128, 100],
      "inner-shin": [145, 212],
      "outer-shin": [96, 205],
      achilles: [120, 250],
    },
    edges: ["outer", "inner"],
  },
};
