// Body regions, top to bottom, and the spots inside each one.
// A spot lists the causes to offer (in display order) and an optional warning id (see warnings.js).
// Ids are English in both languages so a shared link works whatever language the receiver reads.
export const regions = [
  {
    id: "lower-back",
    en: {
      name: "Lower back",
      short: "Back",
    },
    de: {
      name: "Unterer Rücken",
      short: "Rücken",
    },
    spots: [
      {
        id: "center",
        en: {
          name: "Across the low back",
        },
        de: {
          name: "Quer über den unteren Rücken",
        },
        causes: [
          "lbp-overload",
          "inflammatory-back-refer",
          "spondylolysis-refer",
        ],
      },
      {
        id: "one-side",
        en: {
          name: "One side, next to the spine",
        },
        de: {
          name: "Eine Seite, neben der Wirbelsäule",
        },
        causes: [
          "lbp-overload",
          "si-joint",
          "inflammatory-back-refer",
          "sacral-bsi-refer",
          "spondylolysis-refer",
        ],
      },
      {
        id: "dimple",
        en: {
          name: "At the dimple above the buttock",
        },
        de: {
          name: "Am Grübchen über dem Gesäß",
        },
        causes: ["si-joint", "inflammatory-back-refer", "sacral-bsi-refer"],
      },
      {
        id: "into-leg",
        en: {
          name: "Spreading into the buttock or leg",
        },
        de: {
          name: "Ausstrahlend ins Gesäß oder Bein",
        },
        causes: ["sciatica-refer"],
        warn: "cauda",
      },
      {
        id: "tailbone",
        en: {
          name: "Tailbone",
        },
        de: {
          name: "Steißbein",
        },
        causes: ["coccydynia"],
      },
    ],
  },
  {
    id: "hip",
    en: {
      name: "Hip & glute",
      short: "Hip",
    },
    de: {
      name: "Hüfte & Gesäß",
      short: "Hüfte",
    },
    spots: [
      {
        id: "groin",
        en: {
          name: "Front of the hip or groin",
        },
        de: {
          name: "Vorne an der Hüfte oder in der Leiste",
        },
        causes: [
          "hip-flexor",
          "hip-oa",
          "inguinal-groin",
          "snapping-hip",
          "hip-joint-refer",
          "hip-bsi-refer",
          "pubic-ramus-bsi-refer",
          "apophyseal-avulsion-refer",
          "scfe-refer",
        ],
      },
      {
        id: "pubic",
        en: {
          name: "Pubic bone, front and centre",
        },
        de: {
          name: "Schambein, vorne in der Mitte",
        },
        causes: [
          "inguinal-groin",
          "adductor-strain",
          "osteitis-pubis-refer",
          "pubic-ramus-bsi-refer",
        ],
      },
      {
        id: "outer-hip",
        en: {
          name: "Outer hip bone",
        },
        de: {
          name: "Außen am Hüftknochen",
        },
        causes: ["gluteal-tendinopathy", "snapping-hip"],
      },
      {
        id: "buttock",
        en: {
          name: "Deep in the buttock",
        },
        de: {
          name: "Tief im Gesäß",
        },
        causes: ["deep-gluteal", "sciatica-refer", "sacral-bsi-refer"],
      },
      {
        id: "sit-bone",
        en: {
          name: "At the sit bone",
        },
        de: {
          name: "Am Sitzbein",
        },
        causes: [
          "proximal-hamstring",
          "hamstring-avulsion-refer",
          "apophyseal-avulsion-refer",
        ],
      },
      {
        id: "pelvic-floor",
        en: {
          name: "Pelvic floor",
        },
        de: {
          name: "Beckenboden",
        },
        causes: ["pelvic-floor", "postpartum-return"],
      },
    ],
  },
  {
    id: "thigh",
    en: {
      name: "Thigh",
      short: "Thigh",
    },
    de: {
      name: "Oberschenkel",
      short: "Ober­schenkel",
    },
    spots: [
      {
        id: "front-thigh",
        en: {
          name: "Front of the thigh",
        },
        de: {
          name: "Vorderseite des Oberschenkels",
        },
        causes: [
          "quad-strain",
          "quad-contusion",
          "femur-bsi-refer",
          "scfe-refer",
        ],
      },
      {
        id: "inner-thigh",
        en: {
          name: "Inner thigh",
        },
        de: {
          name: "Innenseite des Oberschenkels",
        },
        causes: [
          "adductor-strain",
          "hip-bsi-refer",
          "pubic-ramus-bsi-refer",
          "scfe-refer",
        ],
      },
      {
        id: "outer-thigh",
        en: {
          name: "Outer thigh",
        },
        de: {
          name: "Außenseite des Oberschenkels",
        },
        causes: ["tfl-overload", "meralgia"],
      },
      {
        id: "back-thigh",
        en: {
          name: "Back of the thigh",
        },
        de: {
          name: "Rückseite des Oberschenkels",
        },
        causes: ["hamstring-strain", "hamstring-avulsion-refer"],
        warn: "tear",
      },
    ],
  },
  {
    id: "knee",
    en: {
      name: "Knee",
      short: "Knee",
    },
    de: {
      name: "Knie",
      short: "Knie",
    },
    spots: [
      {
        id: "above-kneecap",
        en: {
          name: "Above the kneecap",
        },
        de: {
          name: "Oberhalb der Kniescheibe",
        },
        causes: ["quad-tendon", "pfp"],
      },
      {
        id: "around-kneecap",
        en: {
          name: "Around or behind the kneecap",
        },
        de: {
          name: "Rund um oder hinter der Kniescheibe",
        },
        causes: [
          "pfp",
          "knee-oa",
          "medial-plica",
          "patellar-dislocation-refer",
        ],
      },
      {
        id: "below-kneecap",
        en: {
          name: "Just below the kneecap",
        },
        de: {
          name: "Direkt unter der Kniescheibe",
        },
        causes: ["patellar-tendon", "hoffa", "pfp", "osgood-schlatter"],
      },
      {
        id: "inner-knee",
        en: {
          name: "Inner side",
        },
        de: {
          name: "Innenseite",
        },
        causes: [
          "pes-anserine",
          "mcl-sprain",
          "medial-plica",
          "knee-oa",
          "meniscus-refer",
        ],
        warn: "twist",
      },
      {
        id: "outer-knee",
        en: {
          name: "Outer side",
        },
        de: {
          name: "Außenseite",
        },
        causes: ["itbs", "biceps-femoris-tendon", "ptfj-refer"],
      },
      {
        id: "back-of-knee",
        en: {
          name: "Back of the knee",
        },
        de: {
          name: "Kniekehle",
        },
        causes: ["back-knee", "biceps-femoris-tendon", "bakers-cyst-refer"],
        warn: "clot",
      },
    ],
  },
  {
    id: "shin-calf",
    en: {
      name: "Shin & calf",
      short: "Shin",
    },
    de: {
      name: "Schienbein & Wade",
      short: "Schien­bein",
    },
    spots: [
      {
        id: "inner-shin",
        en: {
          name: "Inner edge of the shin",
        },
        de: {
          name: "Innenkante des Schienbeins",
        },
        causes: ["mtss", "tibia-bsi-refer"],
      },
      {
        id: "front-shin",
        en: {
          name: "Front of the shin, in the muscle",
        },
        de: {
          name: "Vorne am Schienbein, im Muskel",
        },
        causes: [
          "tib-ant",
          "tibia-bsi-refer",
          "compartment-refer",
          "paes-refer",
        ],
      },
      {
        id: "outer-shin",
        en: {
          name: "Outer edge of the lower leg",
        },
        de: {
          name: "Außenseite des Unterschenkels",
        },
        causes: ["fibula-bsi-refer", "peroneal-nerve-refer"],
      },
      {
        id: "calf",
        en: {
          name: "Calf muscle",
        },
        de: {
          name: "Wadenmuskel",
        },
        causes: [
          "calf-strain",
          "soleus-strain",
          "tennis-leg",
          "cramps",
          "paes-refer",
          "bakers-cyst-refer",
        ],
        warn: "clot",
      },
      {
        id: "achilles",
        en: {
          name: "Achilles tendon, above the heel",
        },
        de: {
          name: "Achillessehne, über der Ferse",
        },
        causes: ["achilles-mid", "achilles-insertional"],
        warn: "rupture",
      },
    ],
  },
  {
    id: "ankle-foot",
    en: {
      name: "Ankle & foot",
      short: "Foot",
    },
    de: {
      name: "Sprunggelenk & Fuß",
      short: "Fuß",
    },
    spots: [
      {
        id: "achilles",
        en: {
          name: "Achilles tendon",
        },
        de: {
          name: "Achillessehne",
        },
        causes: ["achilles-mid", "achilles-insertional"],
        warn: "rupture",
      },
      {
        id: "back-heel",
        en: {
          name: "Back of the heel",
        },
        de: {
          name: "Hinten an der Ferse",
        },
        causes: [
          "achilles-insertional",
          "posterior-impingement",
          "calcaneal-bsi-refer",
          "severs",
        ],
      },
      {
        id: "heel",
        en: {
          name: "Under the heel",
        },
        de: {
          name: "Unter der Ferse",
        },
        causes: [
          "plantar-heel",
          "heel-fat-pad",
          "calcaneal-bsi-refer",
          "tarsal-tunnel-refer",
          "severs",
        ],
      },
      {
        id: "arch",
        en: {
          name: "Arch of the foot",
        },
        de: {
          name: "Fußgewölbe",
        },
        causes: [
          "plantar-heel",
          "tib-post",
          "navicular-bsi-refer",
          "tarsal-tunnel-refer",
        ],
      },
      {
        id: "inner-ankle",
        en: {
          name: "Inner ankle",
        },
        de: {
          name: "Innenknöchel",
        },
        causes: [
          "tib-post",
          "posterior-impingement",
          "ankle-bsi-refer",
          "tarsal-tunnel-refer",
          "ankle-fracture-refer",
        ],
      },
      {
        id: "outer-ankle",
        en: {
          name: "Outer ankle",
        },
        de: {
          name: "Außenknöchel",
        },
        causes: [
          "ankle-sprain",
          "ankle-instability",
          "peroneal",
          "sinus-tarsi",
          "ankle-fracture-refer",
          "peroneal-nerve-refer",
        ],
      },
      {
        id: "front-ankle",
        en: {
          name: "Front of the ankle",
        },
        de: {
          name: "Vorne am Sprunggelenk",
        },
        causes: ["anterior-impingement", "ankle-bsi-refer"],
      },
      {
        id: "top-foot",
        en: {
          name: "Top of the foot",
        },
        de: {
          name: "Fußrücken",
        },
        causes: [
          "extensor-tendon",
          "navicular-bsi-refer",
          "metatarsal-bsi-refer",
          "peroneal-nerve-refer",
        ],
      },
      {
        id: "outer-midfoot",
        en: {
          name: "Outer edge of the midfoot",
        },
        de: {
          name: "Außenkante des Mittelfußes",
        },
        causes: ["peroneal", "jones-bsi-refer", "cuboid-refer"],
      },
      {
        id: "ball",
        en: {
          name: "Ball of the foot",
        },
        de: {
          name: "Fußballen",
        },
        causes: [
          "metatarsalgia",
          "mortons-neuroma",
          "plantar-plate",
          "sesamoid-refer",
          "metatarsal-bsi-refer",
        ],
      },
      {
        id: "toes",
        en: {
          name: "Between or under the small toes",
        },
        de: {
          name: "Zwischen oder unter den kleinen Zehen",
        },
        causes: ["mortons-neuroma", "plantar-plate"],
      },
      {
        id: "big-toe",
        en: {
          name: "Big toe joint",
        },
        de: {
          name: "Großzehengrundgelenk",
        },
        causes: ["hallux-rigidus", "sesamoid-refer"],
      },
    ],
  },
];
