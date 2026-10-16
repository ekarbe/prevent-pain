// Body regions, top to bottom, and the spots inside each one.
// A spot lists the causes to offer (in display order) and an optional warning id (see warnings.js).
// Ids are English in both languages so a shared link works whatever language the receiver reads.
export const regions = [
  {
    id: "lower-back",
    en: { name: "Lower back", short: "Back" },
    de: { name: "Unterer Rücken", short: "Rücken" },
    spots: [
      {
        id: "center",
        en: { name: "Across the low back" },
        de: { name: "Quer über den unteren Rücken" },
        causes: ["lbp-overload"],
      },
      {
        id: "one-side",
        en: { name: "One side, next to the spine" },
        de: { name: "Eine Seite, neben der Wirbelsäule" },
        causes: ["lbp-overload", "si-joint"],
      },
      {
        id: "dimple",
        en: { name: "At the dimple above the buttock" },
        de: { name: "Am Grübchen über dem Gesäß" },
        causes: ["si-joint"],
      },
      {
        id: "into-leg",
        en: { name: "Spreading into the buttock or leg" },
        de: { name: "Ausstrahlend ins Gesäß oder Bein" },
        causes: ["sciatica-refer"],
        warn: "cauda",
      },
    ],
  },
  {
    id: "hip",
    en: { name: "Hip & glute", short: "Hip" },
    de: { name: "Hüfte & Gesäß", short: "Hüfte" },
    spots: [
      {
        id: "groin",
        en: { name: "Front of the hip or groin" },
        de: { name: "Vorne an der Hüfte oder in der Leiste" },
        causes: ["hip-flexor", "hip-joint-refer", "hip-bsi-refer"],
      },
      {
        id: "outer-hip",
        en: { name: "Outer hip bone" },
        de: { name: "Außen am Hüftknochen" },
        causes: ["gluteal-tendinopathy"],
      },
      {
        id: "buttock",
        en: { name: "Deep in the buttock" },
        de: { name: "Tief im Gesäß" },
        causes: ["deep-gluteal", "sciatica-refer"],
      },
      {
        id: "sit-bone",
        en: { name: "At the sit bone" },
        de: { name: "Am Sitzbein" },
        causes: ["proximal-hamstring"],
      },
    ],
  },
  {
    id: "thigh",
    en: { name: "Thigh", short: "Thigh" },
    de: { name: "Oberschenkel", short: "Ober­schenkel" },
    spots: [
      {
        id: "front-thigh",
        en: { name: "Front of the thigh" },
        de: { name: "Vorderseite des Oberschenkels" },
        causes: ["quad-strain", "femur-bsi-refer"],
      },
      {
        id: "inner-thigh",
        en: { name: "Inner thigh" },
        de: { name: "Innenseite des Oberschenkels" },
        causes: ["adductor-strain", "hip-bsi-refer"],
      },
      {
        id: "outer-thigh",
        en: { name: "Outer thigh" },
        de: { name: "Außenseite des Oberschenkels" },
        causes: ["tfl-overload"],
      },
      {
        id: "back-thigh",
        en: { name: "Back of the thigh" },
        de: { name: "Rückseite des Oberschenkels" },
        causes: ["hamstring-strain"],
        warn: "tear",
      },
    ],
  },
  {
    id: "knee",
    en: { name: "Knee", short: "Knee" },
    de: { name: "Knie", short: "Knie" },
    spots: [
      {
        id: "above-kneecap",
        en: { name: "Above the kneecap" },
        de: { name: "Oberhalb der Kniescheibe" },
        causes: ["quad-tendon", "pfp"],
      },
      {
        id: "around-kneecap",
        en: { name: "Around or behind the kneecap" },
        de: { name: "Rund um oder hinter der Kniescheibe" },
        causes: ["pfp"],
      },
      {
        id: "below-kneecap",
        en: { name: "Just below the kneecap" },
        de: { name: "Direkt unter der Kniescheibe" },
        causes: ["patellar-tendon", "pfp"],
      },
      {
        id: "inner-knee",
        en: { name: "Inner side" },
        de: { name: "Innenseite" },
        causes: ["pes-anserine", "meniscus-refer"],
        warn: "twist",
      },
      {
        id: "outer-knee",
        en: { name: "Outer side" },
        de: { name: "Außenseite" },
        causes: ["itbs"],
      },
      {
        id: "back-of-knee",
        en: { name: "Back of the knee" },
        de: { name: "Kniekehle" },
        causes: ["back-knee"],
        warn: "clot",
      },
    ],
  },
  {
    id: "shin-calf",
    en: { name: "Shin & calf", short: "Shin" },
    de: { name: "Schienbein & Wade", short: "Schien­bein" },
    spots: [
      {
        id: "inner-shin",
        en: { name: "Inner edge of the shin" },
        de: { name: "Innenkante des Schienbeins" },
        causes: ["mtss", "tibia-bsi-refer"],
      },
      {
        id: "front-shin",
        en: { name: "Front of the shin, in the muscle" },
        de: { name: "Vorne am Schienbein, im Muskel" },
        causes: ["tib-ant", "tibia-bsi-refer", "compartment-refer"],
      },
      {
        id: "calf",
        en: { name: "Calf muscle" },
        de: { name: "Wadenmuskel" },
        causes: ["calf-strain"],
        warn: "clot",
      },
      {
        id: "achilles",
        en: { name: "Achilles tendon, above the heel" },
        de: { name: "Achillessehne, über der Ferse" },
        causes: ["achilles-mid", "achilles-insertional"],
        warn: "rupture",
      },
    ],
  },
  {
    id: "ankle-foot",
    en: { name: "Ankle & foot", short: "Foot" },
    de: { name: "Sprunggelenk & Fuß", short: "Fuß" },
    spots: [
      {
        id: "achilles",
        en: { name: "Achilles tendon" },
        de: { name: "Achillessehne" },
        causes: ["achilles-mid", "achilles-insertional"],
        warn: "rupture",
      },
      {
        id: "heel",
        en: { name: "Under the heel" },
        de: { name: "Unter der Ferse" },
        causes: ["plantar-heel"],
      },
      {
        id: "arch",
        en: { name: "Arch of the foot" },
        de: { name: "Fußgewölbe" },
        causes: ["plantar-heel", "tib-post"],
      },
      {
        id: "inner-ankle",
        en: { name: "Inner ankle" },
        de: { name: "Innenknöchel" },
        causes: ["tib-post"],
      },
      {
        id: "outer-ankle",
        en: { name: "Outer ankle" },
        de: { name: "Außenknöchel" },
        causes: ["ankle-instability", "peroneal"],
      },
      {
        id: "ball",
        en: { name: "Ball of the foot" },
        de: { name: "Fußballen" },
        causes: ["metatarsalgia", "metatarsal-bsi-refer"],
      },
      {
        id: "top-foot",
        en: { name: "Top of the foot" },
        de: { name: "Fußrücken" },
        causes: ["extensor-tendon", "metatarsal-bsi-refer"],
      },
    ],
  },
];
