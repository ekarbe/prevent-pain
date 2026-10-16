// Knee close-up. Drawing area 0 0 240 300 (rendered with a small margin).
// Each view: outline (filled silhouette), details (strokes), spots { spotId: [x, y] }, edges [left, right] label keys.
export default {
  views: ["front", "side", "back"],
  front: {
    caption: { en: "Left knee from the front", de: "Linkes Knie von vorne" },
    outline:
      "M 66 0 C 70 60, 78 100, 80 130 C 82 150, 80 170, 86 190 C 90 230, 94 270, 96 300 L 144 300 C 146 270, 150 230, 154 190 C 160 170, 158 150, 160 130 C 162 100, 170 60, 174 0 Z",
    details: [
      "M 96 118 a 24 28 0 1 0 48 0 a 24 28 0 1 0 -48 0",
      "M 104 22 C 106 56, 106 80, 106 94",
      "M 136 22 C 134 56, 134 80, 134 94",
      "M 110 145 L 112 196",
      "M 130 145 L 128 196",
      "M 109 202 a 11 6 0 1 0 22 0 a 11 6 0 1 0 -22 0",
      "M 82 150 Q 92 157 100 156",
      "M 140 156 Q 148 157 158 150",
      "M 82 122 C 84 102, 92 88, 102 80",
    ].join(" "),
    spots: {
      "above-kneecap": [120, 66],
      "around-kneecap": [120, 118],
      "below-kneecap": [120, 172],
      "inner-knee": [86, 152],
      "outer-knee": [154, 140],
    },
    edges: ["inner", "outer"],
  },
  side: {
    caption: { en: "Left knee from the outside", de: "Linkes Knie von außen" },
    outline:
      "M 60 0 C 62 50, 62 90, 60 108 C 58 124, 62 136, 72 150 C 80 170, 84 230, 88 300 L 150 300 C 160 260, 180 230, 176 200 C 172 175, 160 160, 162 140 C 164 110, 172 60, 178 0 Z",
    details: [
      "M 57 120 a 11 22 0 1 0 22 0 a 11 22 0 1 0 -22 0",
      "M 72 142 L 82 176",
      "M 79 181 a 5 4 0 1 0 10 0 a 5 4 0 1 0 -10 0",
      "M 116 0 C 114 60, 106 120, 98 172",
      "M 134 0 C 130 60, 118 120, 110 172",
      "M 128 178 a 6 6 0 1 0 12 0 a 6 6 0 1 0 -12 0",
      "M 72 150 Q 115 158 160 148",
    ].join(" "),
    spots: {
      "around-kneecap": [68, 120],
      "below-kneecap": [84, 164],
      "outer-knee": [113, 130],
      "back-of-knee": [156, 146],
    },
    edges: ["front", "back"],
  },
  back: {
    caption: { en: "Left knee from behind", de: "Linkes Knie von hinten" },
    outline:
      "M 66 0 C 70 60, 76 100, 78 130 C 80 155, 74 175, 72 200 C 74 240, 90 270, 96 300 L 144 300 C 150 270, 166 240, 168 200 C 166 175, 160 155, 162 130 C 164 100, 170 60, 174 0 Z",
    details: [
      "M 120 92 C 132 108, 140 122, 142 136 C 138 150, 130 162, 120 176 C 110 162, 102 150, 98 136 C 100 122, 108 108, 120 92 Z",
      "M 92 140 Q 120 148 148 140",
      "M 96 16 C 98 70, 100 110, 98 136",
      "M 144 16 C 142 70, 140 110, 142 136",
      "M 100 160 C 92 200, 100 240, 114 262",
      "M 140 160 C 148 200, 140 240, 126 262",
      "M 120 176 L 120 262",
    ].join(" "),
    spots: {
      "back-of-knee": [120, 134],
      "outer-knee": [86, 140],
      "inner-knee": [154, 148],
    },
    edges: ["outer", "inner"],
  },
};
