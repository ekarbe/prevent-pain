// Weak links: areas elsewhere in the chain that commonly feed a problem.
// `at` orders the chain strip from running form (0) through trunk and hip down to the foot (6).
// Each link owns one self-test (tests.js) and the exercises it adds to the week when the test is positive.
// `why` is generic; a cause can override it for its own chain entry.
export const links = {
  stride: {
    at: 0,
    test: "cad",
    exercises: ["metronome"],
    en: {
      name: "Step rate (running form)",
      short: "Stride",
      why: "Long strides with few steps per minute make each landing heavier and push more of it into the knees, hips and shins. Raising your step rate by 5–10% measurably lowers that load.",
    },
    de: {
      name: "Schrittfrequenz (Laufstil)",
      short: "Schritt",
      why: "Lange Schritte mit wenigen Schritten pro Minute machen jede Landung schwerer und leiten mehr davon in Knie, Hüfte und Schienbein. 5–10 % mehr Schritte senken diese Last messbar.",
    },
  },
  trunk: {
    at: 1,
    test: "sph",
    exercises: ["bird-dog", "dead-bug"],
    en: {
      name: "Trunk control",
      short: "Core",
      why: "Your trunk is the base every stride pushes from. When it can't hold steady, the pelvis wobbles and the back and hips absorb the slack.",
    },
    de: {
      name: "Rumpfkontrolle",
      short: "Rumpf",
      why: "Der Rumpf ist die Basis, von der jeder Schritt abdrückt. Bleibt er nicht stabil, wackelt das Becken, und Rücken und Hüfte müssen das abfangen.",
    },
  },
  hipflex: {
    at: 1.8,
    test: "tho",
    exercises: ["couch-stretch"],
    en: {
      name: "Hip flexor mobility",
      short: "Hip flexor",
      why: "Tight hip flexors tip the pelvis forward and cut your stride short at the back, which loads the low back and the front of the hip.",
    },
    de: {
      name: "Beweglichkeit der Hüftbeuger",
      short: "Hüftbeuger",
      why: "Verkürzte Hüftbeuger kippen das Becken nach vorn und verkürzen den Schritt nach hinten. Das belastet den unteren Rücken und die Vorderseite der Hüfte.",
    },
  },
  hipabd: {
    at: 2,
    test: "sls",
    exercises: ["side-abduction", "side-plank"],
    en: {
      name: "Side-hip strength (glute med)",
      short: "Side hip",
      why: "If the side-hip muscles can't keep your pelvis level, the thigh drops inward on every stride. That twist travels down to the knee and up to the back.",
    },
    de: {
      name: "Seitliche Hüftkraft (Gluteus medius)",
      short: "Hüftseite",
      why: "Halten die seitlichen Hüftmuskeln das Becken nicht stabil, sinkt der Oberschenkel bei jedem Schritt nach innen. Diese Drehung wandert nach unten ins Knie und nach oben in den Rücken.",
    },
  },
  glutes: {
    at: 2.2,
    test: "slb",
    exercises: ["single-leg-bridge", "step-up"],
    en: {
      name: "Glute strength (glute max)",
      short: "Glutes",
      why: "Strong glutes share the work of every landing and push-off. Weak ones hand more of it to the hamstrings, quads, knees and low back.",
    },
    de: {
      name: "Gesäßkraft (Gluteus maximus)",
      short: "Gesäß",
      why: "Kräftige Gesäßmuskeln teilen sich die Arbeit jeder Landung und jedes Abdrucks. Schwache geben mehr davon an hintere und vordere Oberschenkel, Knie und unteren Rücken ab.",
    },
  },
  quads: {
    at: 3,
    test: "sts",
    exercises: ["wall-sit", "split-squat"],
    en: {
      name: "Quad strength",
      short: "Quads",
      why: "Your quads brake every landing. When they tire early, the knee joint and its tendons take more of the shock.",
    },
    de: {
      name: "Kraft der vorderen Oberschenkel",
      short: "Quadrizeps",
      why: "Die vorderen Oberschenkel bremsen jede Landung ab. Ermüden sie früh, fangen Kniegelenk und Sehnen mehr Stoß ab.",
    },
  },
  hams: {
    at: 3.2,
    test: "hsb",
    exercises: ["hamstring-bridge", "single-leg-rdl"],
    en: {
      name: "Hamstring strength",
      short: "Hamstrings",
      why: "Your hamstrings brake the swinging leg before every landing. Without enough strength they strain, and the knee and pelvis lose a stabiliser.",
    },
    de: {
      name: "Kraft der hinteren Oberschenkel",
      short: "Hamstrings",
      why: "Die hinteren Oberschenkel bremsen das schwingende Bein vor jeder Landung. Fehlt ihnen Kraft, zerren sie sich leichter, und Knie und Becken verlieren einen Stabilisator.",
    },
  },
  calf: {
    at: 5,
    test: "cr",
    exercises: ["calf-raise", "bent-knee-raise"],
    en: {
      name: "Calf strength",
      short: "Calf",
      why: "Your calves absorb a large share of each landing. When they tire early, more of the shock goes to the Achilles, the shin and the knee.",
    },
    de: {
      name: "Wadenkraft",
      short: "Wade",
      why: "Die Waden fangen einen großen Teil jeder Landung ab. Ermüden sie früh, landet mehr Stoß in Achillessehne, Schienbein und Knie.",
    },
  },
  ankle: {
    at: 5.5,
    test: "ktw",
    exercises: ["ktw-mob", "bent-knee-raise"],
    en: {
      name: "Ankle mobility",
      short: "Ankle",
      why: "A stiff ankle stops the shin from moving forward over the foot. The knee, foot and Achilles make up for it by twisting or taking more load.",
    },
    de: {
      name: "Beweglichkeit im Sprunggelenk",
      short: "Knöchel",
      why: "Ein steifes Sprunggelenk lässt das Schienbein nicht über den Fuß nach vorn. Knie, Fuß und Achillessehne gleichen aus, indem sie sich verdrehen oder mehr Last tragen.",
    },
  },
  foot: {
    at: 6,
    test: "bal",
    exercises: ["short-foot", "balance-reach"],
    en: {
      name: "Foot and balance control",
      short: "Foot",
      why: "If the arch collapses and balance is shaky, the shin rotates inward and the foot's own tissues work overtime.",
    },
    de: {
      name: "Fuß- und Gleichgewichtskontrolle",
      short: "Fuß",
      why: "Sinkt das Fußgewölbe ein und ist das Gleichgewicht wackelig, dreht das Schienbein nach innen und das Gewebe im Fuß arbeitet im Dauereinsatz.",
    },
  },
  adductors: {
    at: 2.6,
    test: "cph",
    exercises: ["adductor-squeeze", "copenhagen-adduction"],
    en: {
      name: "Inner-thigh strength (adductors)",
      short: "Adductors",
      why: "Your inner-thigh muscles help steady the pelvis and guide the leg on every stride. Strengthening them is a key part of rehab for groin pain, and it may also help prevent it.",
    },
    de: {
      name: "Kraft der Oberschenkelinnenseite (Adduktoren)",
      short: "Adduktoren",
      why: "Die Muskeln an der Oberschenkelinnenseite helfen, bei jedem Schritt das Becken zu stabilisieren und das Bein zu führen. Ihre Kräftigung ist ein Kernstück der Reha bei Leistenschmerzen und kann ihnen womöglich auch vorbeugen.",
    },
  },
};

// Where each pain region sits on the same axis, so the chain strip can place the pain between its links.
export const regionAt = {
  "lower-back": 1.5,
  hip: 2.1,
  thigh: 3.1,
  knee: 4,
  "shin-calf": 5.2,
  "ankle-foot": 5.8,
};
