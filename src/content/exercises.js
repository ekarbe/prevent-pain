// Exercise library. `min` is a rough session time (0 = done during runs).
// `video` is a YouTube demo per language, loaded only after a tap: { en: { id, start?, title, channel }, de?: {…} }.
export const exercises = {
  "wall-sit": {
    min: 10,
    video: {
      en: {
        id: "EzA794cQHrY",
        title: "Wall Sit Isometric",
        channel: "The Irish Physios",
      },
    },
    en: {
      name: "Wall sit",
      dose: "5 × 30–45 s · 2 min rest",
      how: "Back flat against a wall, slide down until your knees bend to about 60° and hold. Go less deep if pain passes 3/10.",
    },
    de: {
      name: "Wandsitzen",
      dose: "5 × 30–45 s · 2 Min. Pause",
      how: "Rücken flach an die Wand, so weit herunterrutschen, bis die Knie etwa 60° gebeugt sind, und halten. Weniger tief, wenn der Schmerz über 3/10 geht.",
    },
  },
  "step-down": {
    min: 5,
    video: {
      en: {
        id: "8DcIZ2HOvHE",
        title: "Physio shows how to Regress and Progress Lateral Step Downs",
        channel: "",
      },
    },
    en: {
      name: "Slow step-down",
      dose: "3 × 10 per leg",
      how: "Stand on a low step (10–15 cm). Lower the other heel to the floor over 3 seconds, knee tracking over your 2nd toe, then push back up.",
    },
    de: {
      name: "Langsames Step-down",
      dose: "3 × 10 pro Bein",
      how: "Auf eine niedrige Stufe (10–15 cm) stellen. Die andere Ferse in 3 Sekunden zum Boden senken, das Knie bleibt über der 2. Zehe, dann wieder hochdrücken.",
    },
  },
  "spanish-squat": {
    min: 10,
    video: {
      en: {
        id: "1CJ3hteGxo4",
        title: "Patellar tendinopathy? Try a Spanish Squat",
        channel: "",
      },
    },
    en: {
      name: "Spanish squat hold",
      dose: "5 × 45 s · 2 min rest",
      how: "Loop a strong band behind both knees and anchor it in front. Sit back into a half squat with shins vertical and hold.",
    },
    de: {
      name: "Spanish Squat halten",
      dose: "5 × 45 s · 2 Min. Pause",
      how: "Ein kräftiges Band hinter beide Knie legen und vorne fixieren. Mit senkrechten Schienbeinen in eine halbe Kniebeuge setzen und halten.",
    },
  },
  "slow-leg-press": {
    min: 10,
    video: null,
    en: {
      name: "Heavy slow leg press",
      dose: "4 × 15 → 6 over 12 weeks · 3 s down, 3 s up",
      how: "Choose a weight that makes the last rep hard. Go heavier with fewer reps every 2 weeks while pain stays within the rule.",
    },
    de: {
      name: "Schwere, langsame Beinpresse",
      dose: "4 × 15 → 6 über 12 Wochen · 3 s runter, 3 s hoch",
      how: "Gewicht so wählen, dass die letzte Wiederholung schwer ist. Alle 2 Wochen schwerer mit weniger Wiederholungen, solange die Schmerzregel hält.",
    },
  },
  "side-abduction": {
    min: 5,
    video: {
      en: {
        id: "i2r_o6JRdyU",
        title: "How to Perform Hip Abduction in Side-lying",
        channel: "Equilibrium Physical Therapy",
      },
    },
    en: {
      name: "Side-lying leg raise",
      dose: "3 × 15 per side",
      how: "Lie on your side, bottom knee bent. Lift the straight top leg slightly behind you, toes pointing forward. Lower over 3 seconds.",
    },
    de: {
      name: "Seitliches Beinheben",
      dose: "3 × 15 pro Seite",
      how: "Auf die Seite legen, unteres Knie gebeugt. Das gestreckte obere Bein leicht nach hinten anheben, Zehen zeigen nach vorn. In 3 Sekunden absenken.",
    },
  },
  "side-plank": {
    min: 4,
    video: null,
    en: {
      name: "Side plank",
      dose: "3 × 20–40 s per side",
      how: "Forearm under the shoulder. Lift your hips until shoulders, hips and knees line up. Start from the knees, progress to straight legs.",
    },
    de: {
      name: "Seitstütz",
      dose: "3 × 20–40 s pro Seite",
      how: "Unterarm unter der Schulter. Hüfte anheben, bis Schultern, Hüfte und Knie eine Linie bilden. Auf den Knien beginnen, später mit gestreckten Beinen.",
    },
  },
  "single-leg-bridge": {
    min: 5,
    video: {
      en: {
        id: "z_f9sw2VSSw",
        title: "Single Leg Bridge - Nxt Generation Physio",
        channel: "Nxt Generation PHYSIO - Clinique physiothérapie",
      },
    },
    en: {
      name: "Single-leg glute bridge",
      dose: "3 × 10–12 per side",
      how: "On your back, one foot planted. Push through the heel to lift your hips level, hold 2 seconds, lower slowly.",
    },
    de: {
      name: "Einbeinige Gesäßbrücke",
      dose: "3 × 10–12 pro Seite",
      how: "Rückenlage, ein Fuß aufgestellt. Über die Ferse die Hüfte gerade anheben, 2 Sekunden halten, langsam absenken.",
    },
  },
  "step-up": {
    min: 5,
    video: {
      en: {
        id: "2g6G_GpsBoc",
        title: "Step Ups",
        channel: "Physio Logic",
      },
    },
    en: {
      name: "Step-up",
      dose: "3 × 10 per leg",
      how: "Step onto a knee-high box and drive through the whole foot to stand tall. Lower yourself under control.",
    },
    de: {
      name: "Step-up",
      dose: "3 × 10 pro Bein",
      how: "Auf eine kniehohe Box steigen und über den ganzen Fuß in den aufrechten Stand drücken. Kontrolliert wieder absenken.",
    },
  },
  "ktw-mob": {
    min: 3,
    video: {
      en: {
        id: "CRgmHELYh3A",
        title: "Knee to Wall Ankle Mobilization",
        channel: "",
      },
    },
    en: {
      name: "Knee-to-wall mobilisation",
      dose: "2 × 15 per side · daily",
      how: "Lunge stance facing a wall. Drive the front knee toward the wall without lifting the heel, hold 2 seconds, return.",
    },
    de: {
      name: "Knie-zur-Wand-Mobilisation",
      dose: "2 × 15 pro Seite · täglich",
      how: "Schrittstellung vor einer Wand. Das vordere Knie zur Wand schieben, ohne die Ferse anzuheben, 2 Sekunden halten, zurück.",
    },
  },
  "bent-knee-raise": {
    min: 4,
    video: null,
    en: {
      name: "Bent-knee calf raise",
      dose: "3 × 15 per side",
      how: "Stand on one leg with the knee slightly bent. Rise onto the ball of the foot and lower over 3 seconds. This targets the deep calf (soleus).",
    },
    de: {
      name: "Wadenheben mit gebeugtem Knie",
      dose: "3 × 15 pro Seite",
      how: "Auf einem Bein mit leicht gebeugtem Knie stehen. Auf den Fußballen drücken und in 3 Sekunden absenken. Das trainiert den tiefen Wadenmuskel (Soleus).",
    },
  },
  "calf-raise": {
    min: 5,
    video: {
      en: {
        id: "3g5Mb3Y9sFU",
        title: "Single leg calf raise on a step - Achilles Tendinopathy",
        channel: "Perfect Balance Clinic",
      },
    },
    en: {
      name: "Single-leg calf raise",
      dose: "3 × 12–20 per side",
      how: "On a step edge, rise as high as you can on one leg, then lower below step level over 3 seconds.",
    },
    de: {
      name: "Einbeiniges Wadenheben",
      dose: "3 × 12–20 pro Seite",
      how: "Auf einer Stufenkante einbeinig so hoch wie möglich drücken, dann in 3 Sekunden unter Stufenniveau absenken.",
    },
  },
  "short-foot": {
    min: 3,
    video: {
      en: {
        id: "QnnsoOIAFm0",
        title: "Foot - short foot intrinsic muscle strengthening",
        channel: "Physical Therapy First",
      },
    },
    en: {
      name: "Short foot",
      dose: "3 × 10 · 5 s holds",
      how: "Pull the ball of your foot toward the heel to lift the arch, without curling your toes. Start seated, progress to standing.",
    },
    de: {
      name: "Kurzer Fuß",
      dose: "3 × 10 · 5 s halten",
      how: "Den Fußballen Richtung Ferse ziehen, sodass sich das Gewölbe hebt, ohne die Zehen einzukrallen. Im Sitzen beginnen, später im Stand.",
    },
  },
  "balance-reach": {
    min: 4,
    video: null,
    en: {
      name: "Single-leg balance reach",
      dose: "3 × 8 reaches per side",
      how: "Stand on one leg, knee soft. Tap the other foot forward, to the side and behind you while the knee stays over your toes.",
    },
    de: {
      name: "Einbeinstand mit Tippen",
      dose: "3 × 8 pro Seite",
      how: "Auf einem Bein stehen, Knie locker. Mit dem anderen Fuß nach vorn, zur Seite und nach hinten tippen, das Knie bleibt über den Zehen.",
    },
  },
  metronome: {
    min: 0,
    video: null,
    en: {
      name: "Step-rate runs",
      dose: "2–3 easy runs a week · +5% step rate",
      how: "Set a metronome app to your current step rate plus 5%. Run short, easy stretches to the beat until it feels natural.",
    },
    de: {
      name: "Läufe mit höherer Schrittfrequenz",
      dose: "2–3 lockere Läufe pro Woche · +5 % Schrittfrequenz",
      how: "Ein Metronom auf deine aktuelle Schrittfrequenz plus 5 % stellen. Kurze, lockere Abschnitte im Takt laufen, bis es sich natürlich anfühlt.",
    },
  },
  "bird-dog": {
    min: 4,
    video: {
      en: {
        id: "SlNTXO1fD9c",
        title: "NUHS Physiotherapy - Bird Dog",
        channel: "NUHS Physiotherapy",
      },
    },
    en: {
      name: "Bird dog",
      dose: "3 × 8 per side · 5 s holds",
      how: "On hands and knees, reach one arm forward and the opposite leg back until both are level with your trunk. Hold 5 seconds without your hips tipping, then switch.",
    },
    de: {
      name: "Bird Dog",
      dose: "3 × 8 pro Seite · 5 s halten",
      how: "Vierfüßlerstand. Einen Arm nach vorn und das gegenüberliegende Bein nach hinten strecken, bis beide auf Rumpfhöhe sind. 5 Sekunden halten, ohne dass das Becken kippt, dann wechseln.",
    },
  },
  "dead-bug": {
    min: 4,
    video: {
      en: {
        id: "7a6dkBwr0j4",
        title: "Physio Clinical Pilates Dead Bug",
        channel: "Complete Wellness Physiotherapy",
      },
    },
    en: {
      name: "Dead bug",
      dose: "3 × 8 per side",
      how: "On your back, arms up, hips and knees bent to 90°. Keep your low back gently on the floor while you slowly lower one arm and the opposite leg, then return.",
    },
    de: {
      name: "Dead Bug",
      dose: "3 × 8 pro Seite",
      how: "Rückenlage, Arme nach oben, Hüfte und Knie 90° gebeugt. Den unteren Rücken sanft am Boden halten und langsam einen Arm und das gegenüberliegende Bein absenken, dann zurück.",
    },
  },
  "couch-stretch": {
    min: 4,
    video: {
      en: {
        id: "q_dyy6tzoh4",
        title: "Couch Stretch for Knee Pain - Tips from a Physical Therapist",
        channel: "",
      },
    },
    en: {
      name: "Couch stretch",
      dose: "3 × 45 s per side",
      how: "Kneel with one knee against a wall or sofa, shin up the wall, other foot forward in a lunge. Squeeze the glute of the back leg and lift your torso until the front of the hip stretches.",
    },
    de: {
      name: "Couch Stretch",
      dose: "3 × 45 s pro Seite",
      how: "Ein Knie vor einer Wand oder dem Sofa aufsetzen, Schienbein an der Wand, den anderen Fuß im Ausfallschritt vorn. Gesäß des hinteren Beins anspannen und den Oberkörper aufrichten, bis es vorne an der Hüfte zieht.",
    },
  },
  "split-squat": {
    min: 5,
    video: null,
    en: {
      name: "Split squat",
      dose: "3 × 8–10 per leg",
      how: "Long stride stance, back heel up. Lower straight down until the back knee nearly touches the floor, then push up through the front foot. Hold weights to progress.",
    },
    de: {
      name: "Split Squat",
      dose: "3 × 8–10 pro Bein",
      how: "Weite Schrittstellung, hintere Ferse angehoben. Gerade nach unten senken, bis das hintere Knie fast den Boden berührt, dann über den vorderen Fuß hochdrücken. Steigerung mit Gewichten.",
    },
  },
  "single-leg-rdl": {
    min: 5,
    video: null,
    en: {
      name: "Single-leg Romanian deadlift",
      dose: "3 × 8–10 per leg",
      how: "Stand on one leg, knee soft. Hinge at the hips with a flat back, reaching the other leg behind you until the hamstring stretches, then drive your hips forward to stand.",
    },
    de: {
      name: "Einbeiniges Rumänisches Kreuzheben",
      dose: "3 × 8–10 pro Bein",
      how: "Auf einem Bein stehen, Knie leicht gebeugt. Mit geradem Rücken aus der Hüfte nach vorn beugen und das andere Bein nach hinten strecken, bis der hintere Oberschenkel zieht. Dann die Hüfte nach vorn schieben und aufrichten.",
    },
  },
  "hamstring-bridge": {
    min: 5,
    video: {
      en: {
        id: "L8mMpbP9bDw",
        title: "Single leg hamstring bridge",
        channel: "The MSK Physio",
      },
    },
    en: {
      name: "Heel-on-step hamstring bridge",
      dose: "3 × 10 per side",
      how: "On your back with one heel on a chair or step, knee slightly bent. Press the heel down to lift your hips, pause, lower slowly.",
    },
    de: {
      name: "Hamstring-Brücke mit Ferse auf der Stufe",
      dose: "3 × 10 pro Seite",
      how: "Rückenlage, eine Ferse auf einem Stuhl oder einer Stufe, Knie leicht gebeugt. Die Ferse nach unten drücken und die Hüfte anheben, kurz halten, langsam absenken.",
    },
  },
  "calf-hold": {
    min: 10,
    video: {
      en: {
        id: "MYehmaMlKSs",
        title:
          "Episode 2- Achilles tendinopathy Stage 1: Isometric calf raise exercises",
        channel: "",
      },
    },
    en: {
      name: "Calf raise hold",
      dose: "5 × 30–45 s · 2 min rest",
      how: "Rise onto the balls of both feet, then shift most of your weight onto the painful leg and hold about halfway up, fingertips on a wall. Add a heavy backpack to progress. Use it on sore days or as a warm-up for heavier calf work, keeping pain at 3/10 or less.",
    },
    de: {
      name: "Zehenstand halten",
      dose: "5 × 30–45 s · 2 Min. Pause",
      how: "Auf beide Fußballen hochdrücken, dann das Gewicht großteils auf das schmerzende Bein verlagern und etwa auf halber Höhe halten, Fingerspitzen an der Wand. Mit einem schweren Rucksack steigern. Gut an empfindlichen Tagen oder zum Aufwärmen vor schwererem Wadentraining, der Schmerz bleibt bei höchstens 3/10.",
    },
  },
  "heavy-calf-raise": {
    min: 10,
    video: {
      en: {
        id: "iwkeoXrKXdk",
        title: "Heavy Slow Resistance Heel Raise in Standing",
        channel: "",
      },
    },
    en: {
      name: "Heavy slow calf raise",
      dose: "3 × 15 → 4 × 6 over 12 weeks · 3 times a week",
      how: "On flat floor, start on both legs, then move to one leg and add a loaded backpack or dumbbell, or use a calf machine at the gym. Rise over 3 seconds and lower over 3 seconds, alternating sets with straight and slightly bent knees. Pick a load that makes the last rep hard within the pain rule, and every 2 weeks go a bit heavier with fewer reps.",
    },
    de: {
      name: "Schweres, langsames Wadenheben",
      dose: "3 × 15 → 4 × 6 über 12 Wochen · 3-mal pro Woche",
      how: "Auf flachem Boden beidbeinig beginnen, dann einbeinig und mit beladenem Rucksack oder Kurzhantel, oder im Studio an der Wadenmaschine. In 3 Sekunden hochdrücken und in 3 Sekunden absenken, die Sätze abwechselnd mit gestrecktem und leicht gebeugtem Knie. Das Gewicht so wählen, dass die letzte Wiederholung innerhalb der Schmerzregel schwer ist, und alle 2 Wochen etwas schwerer mit weniger Wiederholungen.",
    },
  },
  "pogo-hop": {
    min: 5,
    video: {
      en: {
        id: "tnTlWfkbCv4",
        title: "Double Leg Pogos with Chris Bramah",
        channel: "",
      },
    },
    en: {
      name: "Pogo hops",
      dose: "3 × 20 · 1 min rest",
      how: "Start only once heavy calf raises feel easy within the pain rule. Hop on the spot on both feet with firm, springy ankles and short, quick contacts on the balls of your feet. Progress to one leg, then to hopping forward.",
    },
    de: {
      name: "Pogo-Sprünge",
      dose: "3 × 20 · 1 Min. Pause",
      how: "Erst beginnen, wenn sich das schwere Wadenheben innerhalb der Schmerzregel leicht anfühlt. Beidbeinig auf der Stelle hüpfen, mit festen, federnden Sprunggelenken und kurzen, schnellen Bodenkontakten auf den Fußballen. Dann auf ein Bein steigern, später vorwärts hüpfen.",
    },
  },
  "fascia-stretch": {
    min: 3,
    video: {
      en: {
        id: "JVS4MzeIBVI",
        title: "NUHS Physiotherapy - Seated Plantar Fascia Stretch",
        channel: "NUHS Physiotherapy",
      },
    },
    en: {
      name: "Plantar fascia stretch",
      dose: "3 × 30 s · 2–3 times a day",
      how: "Sit and cross the painful foot over your other knee. Pull your toes back toward your shin with one hand until you feel a stretch in the arch, and hold. Do one round before your first steps in the morning.",
    },
    de: {
      name: "Dehnung der Plantarfaszie",
      dose: "3 × 30 s · 2–3-mal täglich",
      how: "Im Sitzen den schmerzenden Fuß über das andere Knie legen. Mit einer Hand die Zehen Richtung Schienbein ziehen, bis es im Gewölbe zieht, und halten. Eine Runde morgens schon vor den ersten Schritten machen.",
    },
  },
  "toe-up-heel-raise": {
    min: 8,
    video: null,
    en: {
      name: "Heel raise with a towel under the toes",
      dose: "3 × 12 → 5 × 8 over 4 weeks · every 2nd day",
      how: "Stand on a step on the painful leg, or on both legs at first, with a rolled towel under your toes so they bend upward and fingertips on a wall. Rise over 3 seconds, hold 2 seconds and lower over 3 seconds. When 12 gets easy, add a loaded backpack and do 4 × 10, later 5 × 8.",
    },
    de: {
      name: "Wadenheben mit Handtuch unter den Zehen",
      dose: "3 × 12 → 5 × 8 über 4 Wochen · jeden 2. Tag",
      how: "Mit dem schmerzenden Bein auf eine Stufe stellen, anfangs gern beidbeinig, ein gerolltes Handtuch unter den Zehen, sodass sie nach oben gebeugt sind, Fingerspitzen an der Wand. In 3 Sekunden hochdrücken, 2 Sekunden halten, in 3 Sekunden absenken. Fallen dir 12 leicht, mit beladenem Rucksack 4 × 10, später 5 × 8.",
    },
  },
  "band-foot-turn-in": {
    min: 5,
    video: {
      en: {
        id: "7bb-edQvrzU",
        title: "Ankle Inversion (Tibialis Posterior) Exercise",
        channel: "Endurance Physio",
      },
    },
    en: {
      name: "Banded foot turn-in",
      dose: "3 × 15 · daily",
      how: "Sit with the painful foot flat on a smooth floor and loop a resistance band around the forefoot, tied to something on the outer side of that foot so it pulls the foot outward. Keep the heel still and sweep the forefoot inward against the band over 2 seconds, then let it back out over 3 seconds. Use a stronger band when 15 gets easy.",
    },
    de: {
      name: "Fuß mit Band nach innen drehen",
      dose: "3 × 15 · täglich",
      how: "Im Sitzen den schmerzenden Fuß flach auf einen glatten Boden stellen und ein Widerstandsband um den Vorfuß legen, das an der Außenseite dieses Fußes befestigt ist und ihn nach außen zieht. Die Ferse bleibt am Platz: den Vorfuß in 2 Sekunden gegen das Band nach innen schieben und in 3 Sekunden wieder zurückgleiten lassen. Ein stärkeres Band nehmen, wenn dir 15 leichtfallen.",
    },
  },
  "arch-heel-raise": {
    min: 5,
    video: {
      en: {
        id: "IjoSXiL-dO0",
        title: "Heel Raise With Ball Squeeze - For Posterior Tib Activation",
        channel: "",
      },
    },
    en: {
      name: "Heel raise with arch lift",
      dose: "3 × 15 on both legs → 3 × 10 on one",
      how: "Hold a small ball between your inner ankle bones and squeeze it gently. Rise onto the balls of your feet over 2 seconds with your weight toward the big toes, then lower over 3 seconds. Progress to one leg without the ball, keeping the arch lifted and the ankle from rolling inward.",
    },
    de: {
      name: "Wadenheben mit aufgerichtetem Gewölbe",
      dose: "3 × 15 beidbeinig → 3 × 10 einbeinig",
      how: "Einen kleinen Ball zwischen die Innenknöchel klemmen und leicht zusammendrücken. In 2 Sekunden auf die Fußballen hochdrücken, das Gewicht Richtung Großzehe, dann in 3 Sekunden absenken. Später einbeinig ohne Ball, dabei das Gewölbe aufgerichtet halten und den Knöchel nicht nach innen kippen lassen.",
    },
  },
  "band-eversion": {
    min: 5,
    video: {
      en: {
        id: "xfrncpP5ONQ",
        title: "Ankle Eversion with Resistive Band - Ask Doctor Jo",
        channel: "Ask Doctor Jo",
      },
    },
    en: {
      name: "Banded ankle eversion",
      dose: "3 × 15 per side · 3 s return",
      how: "Sit with your legs straight and loop a band around both forefeet. Keep your heels and knees still, turn the outer edge of one foot outward against the band, then let it return over 3 seconds. Use a stronger band once 15 feel easy.",
    },
    de: {
      name: "Fuß gegen das Band nach außen drehen",
      dose: "3 × 15 pro Seite · 3 s zurück",
      how: "Mit gestreckten Beinen sitzen und ein Band um beide Vorfüße legen. Fersen und Knie bleiben ruhig. Den Außenrand eines Fußes gegen das Band nach außen drehen und in 3 Sekunden zurückführen. Ein stärkeres Band nehmen, sobald 15 leicht gehen.",
    },
  },
  "eversion-hold": {
    min: 8,
    video: {
      en: {
        id: "1VfBKWXVquE",
        title: "Seated isometric ankle eversion resisted with wall",
        channel: "Perfect Balance Clinic",
      },
    },
    en: {
      name: "Eversion hold",
      dose: "5 × 30–45 s · 1 min rest",
      how: "Sit with the outer edge of the sore foot against a wall or a heavy table leg. Push the foot outward into it at about half effort without moving, and hold. Ease off if pain passes 3/10.",
    },
    de: {
      name: "Fuß nach außen drücken und halten",
      dose: "5 × 30–45 s · 1 Min. Pause",
      how: "Im Sitzen den Außenrand des betroffenen Fußes an eine Wand oder ein schweres Tischbein stellen. Den Fuß mit etwa halber Kraft nach außen dagegen drücken, ohne dass er sich bewegt, und halten. Weniger Druck, wenn der Schmerz über 3/10 geht.",
    },
  },
  "hop-stick": {
    min: 4,
    video: {
      en: {
        id: "I9FuUUPT0vE",
        title:
          "Exercises with an Athletic Trainer: Single Leg Hop Diagonal Hop and Stick",
        channel: "Children's Hospital Colorado",
      },
    },
    en: {
      name: "Hop and stick",
      dose: "3 × 8 per side",
      how: "Start once you can stand steadily on that leg for 30 seconds without pain. Hop about 30 cm forward, land softly and hold still for 3 seconds with the knee over your toes. When that feels solid, hop sideways and diagonally, then a little farther.",
    },
    de: {
      name: "Hüpfen und Landung halten",
      dose: "3 × 8 pro Seite",
      how: "Erst beginnen, wenn du 30 Sekunden ruhig und schmerzfrei auf dem Bein stehen kannst. Etwa 30 cm nach vorn hüpfen, weich landen und 3 Sekunden ruhig stehen bleiben, das Knie bleibt über den Zehen. Klappt das sicher, zur Seite und schräg hüpfen, dann etwas weiter.",
    },
  },
  "wall-calf-stretch": {
    min: 3,
    video: {
      en: {
        id: "3de1AjRqpfA",
        title: "NUHS Physiotherapy - Gastrocnemius Stretch",
        channel: "NUHS Physiotherapy",
      },
    },
    en: {
      name: "Straight-knee calf stretch",
      dose: "3 × 30 s per side · daily",
      how: "Stand facing a wall with your hands on it and step one foot back. Keep that knee straight and the heel on the floor, and lean forward until you feel a stretch high in the calf. Hold without bouncing, then switch sides.",
    },
    de: {
      name: "Wadendehnung mit gestrecktem Knie",
      dose: "3 × 30 s pro Seite · täglich",
      how: "Mit den Händen an einer Wand stehen und einen Fuß nach hinten setzen. Knie gestreckt und Ferse am Boden lassen, dann nach vorn lehnen, bis du oben in der Wade eine Dehnung spürst. Ohne Wippen halten, dann die Seite wechseln.",
    },
  },
  "toe-press": {
    min: 3,
    video: null,
    en: {
      name: "Toe press",
      dose: "3 × 10 · 5 s holds",
      how: "Stand tall with your weight over the middle of your feet. Press all your toes, especially the big toe, firmly into the floor without curling them or lifting your heels, hold 5 seconds and relax. Start seated if standing hurts.",
    },
    de: {
      name: "Zehen in den Boden drücken",
      dose: "3 × 10 · 5 s halten",
      how: "Aufrecht stehen, das Gewicht über der Fußmitte. Alle Zehen, vor allem den großen Zeh, fest in den Boden drücken, ohne sie einzukrallen oder die Fersen zu heben. 5 Sekunden halten, dann lösen. Tut das im Stand weh, im Sitzen beginnen.",
    },
  },
  "toe-lift-hold": {
    min: 6,
    video: {
      en: {
        id: "yZ8IeoIxXJQ",
        title: "Isometric Ankle Dorsiflexion Hand Resistance",
        channel: "",
      },
    },
    en: {
      name: "Toe lift hold",
      dose: "5 × 30–45 s · 1 min rest",
      how: "Sit with your foot flat and rest your hand on top of your toes. Push the toes and front of the foot up into your hand without moving, at an effort that keeps pain at 3/10 or less, and hold.",
    },
    de: {
      name: "Zehenheben halten",
      dose: "5 × 30–45 s · 1 Min. Pause",
      how: "Im Sitzen, Fuß flach am Boden, die Hand von oben auf die Zehen legen. Zehen und Vorfuß gegen die Hand anheben, ohne dass sie sich bewegen, und halten. So viel Kraft, dass der Schmerz höchstens bei 3/10 liegt.",
    },
  },
  "wall-toe-raise": {
    min: 4,
    video: {
      en: {
        id: "UmHbtN0iFMg",
        title: "How To Do a Tibialis Anterior Wall Raise",
        channel: "",
      },
    },
    en: {
      name: "Wall toe raise",
      dose: "3 × 15 · 3 s down",
      how: "Lean your back against a wall with your heels about 30 cm in front of it. Lift your toes and the front of both feet as high as you can, then lower over 3 seconds. Progress to one foot at a time.",
    },
    de: {
      name: "Zehenheben an der Wand",
      dose: "3 × 15 · 3 s absenken",
      how: "Mit dem Rücken an eine Wand lehnen, die Fersen etwa 30 cm davor. Zehen und Vorfüße so hoch wie möglich anheben, dann in 3 Sekunden absenken. Später einbeinig.",
    },
  },
  "hip-flexor-hold": {
    min: 6,
    video: {
      en: {
        id: "LOxkaeCcpNQ",
        title: "Hip flexor sitting isometric strengthening",
        channel: "",
      },
    },
    en: {
      name: "Seated hip flexor hold",
      dose: "5 × 30 s per side",
      how: "Sit tall at the front of a chair with both hands on one knee. Lift that foot a few centimetres and press the knee up into your hands at about half effort without moving, then hold without leaning back. Press a little harder each week if pain stays at 3/10 or less.",
    },
    de: {
      name: "Knie im Sitzen hochdrücken und halten",
      dose: "5 × 30 s pro Seite",
      how: "Aufrecht vorn auf die Stuhlkante setzen, beide Hände auf ein Knie. Den Fuß ein paar Zentimeter anheben und das Knie mit etwa halber Kraft gegen die Hände nach oben drücken, ohne dass es sich bewegt. Halten, ohne dich nach hinten zu lehnen, und jede Woche etwas fester drücken, solange der Schmerz höchstens bei 3/10 liegt.",
    },
  },
  "banded-knee-drive": {
    min: 5,
    video: null,
    en: {
      name: "Standing banded knee drive",
      dose: "3 × 10–15 per side",
      how: "Loop a band around one ankle and anchor it low behind you. Stand tall on the other leg with one hand on a wall, lift the knee to hip height in 1 second, hold 2 seconds, then lower over 3 seconds. Use a stronger band when it gets easy.",
    },
    de: {
      name: "Kniehub mit Band im Stand",
      dose: "3 × 10–15 pro Seite",
      how: "Ein Band um einen Knöchel legen und hinter dir knapp über dem Boden befestigen. Aufrecht auf dem anderen Bein stehen, eine Hand an der Wand, das Knie in 1 Sekunde auf Hüfthöhe heben, 2 Sekunden halten und in 3 Sekunden absenken. Ein stärkeres Band nehmen, wenn es leichtfällt.",
    },
  },
  "hip-abduction-hold": {
    min: 7,
    video: null,
    en: {
      name: "Lying hip abduction hold",
      dose: "5 × 30–45 s · 1 min rest",
      how: "Lie on your back, legs straight and hip-width apart, with a belt or band around your lower thighs. Press both legs out into it at about a third of your full effort and hold, without letting the legs roll in. Ease off if pain passes 3/10.",
    },
    de: {
      name: "Beine nach außen drücken und halten",
      dose: "5 × 30–45 s · 1 Min. Pause",
      how: "Rückenlage, Beine gestreckt und hüftbreit, ein Gürtel oder Band um die unteren Oberschenkel. Beide Beine mit etwa einem Drittel deiner Kraft nach außen dagegen drücken und halten, ohne dass die Beine nach innen rollen. Weniger Druck, wenn der Schmerz über 3/10 geht.",
    },
  },
  "banded-side-step": {
    min: 4,
    video: {
      en: {
        id: "kTPW2LiibXo",
        title: "Lateral Walks",
        channel: "Physio Logic",
      },
    },
    en: {
      name: "Banded side step",
      dose: "3 × 10 steps each way",
      how: "Loop a mini band just above your knees. Stand with feet hip-width apart and knees soft, then take slow steps sideways with your pelvis level and toes pointing forward. Don't let your feet come together.",
    },
    de: {
      name: "Seitschritte mit Miniband",
      dose: "3 × 10 Schritte pro Richtung",
      how: "Ein Miniband knapp oberhalb der Knie um die Beine legen. Hüftbreit stehen, Knie leicht gebeugt, und langsam seitwärts gehen. Das Becken bleibt gerade, die Zehen zeigen nach vorn und die Füße kommen nie ganz zusammen.",
    },
  },
  clamshell: {
    min: 5,
    video: {
      en: {
        id: "hQupQ9mJZFw",
        title: "How to Guide: Banded Clamshell",
        channel: "",
      },
    },
    en: {
      name: "Banded clamshell",
      dose: "3 × 12–15 per side",
      how: "Lie on your side with hips and knees bent, heels together and a mini band just above your knees. Lift the top knee without rolling your pelvis back, hold 2 seconds, then lower over 3 seconds.",
    },
    de: {
      name: "Clamshell mit Band",
      dose: "3 × 12–15 pro Seite",
      how: "Seitlage, Hüfte und Knie gebeugt, Fersen zusammen, ein Miniband knapp oberhalb der Knie. Das obere Knie anheben, ohne das Becken nach hinten zu drehen, 2 Sekunden halten und in 3 Sekunden absenken.",
    },
  },
  "hamstring-bridge-hold": {
    min: 7,
    video: {
      en: {
        id: "10FzCesw6Rs",
        title: "Hamstring bridge — isometric hold",
        channel: "",
      },
    },
    en: {
      name: "Hamstring bridge hold",
      dose: "5 × 30–45 s · 1 min rest",
      how: "Lie on your back with both heels on a chair or step, knees slightly bent. Press your heels down and lift your hips until they line up with your knees and shoulders, then hold. Progress to one leg.",
    },
    de: {
      name: "Hamstring-Brücke halten",
      dose: "5 × 30–45 s · 1 Min. Pause",
      how: "Rückenlage, beide Fersen auf einem Stuhl oder einer Stufe, Knie leicht gebeugt. Die Fersen nach unten drücken und die Hüfte anheben, bis sie mit Knien und Schultern eine Linie bildet, dann halten. Später einbeinig.",
    },
  },
  "slow-rdl": {
    min: 10,
    video: null,
    en: {
      name: "Heavy slow Romanian deadlift",
      dose: "3–4 × 6–10 · 3 s down, 3 s up",
      how: "Hold dumbbells or a kettlebell, feet hip-width, knees soft. Push your hips back with a flat back and lower the weight along your thighs only as far as the pain rule allows, then stand up. Go a little deeper and heavier every 1–2 weeks.",
    },
    de: {
      name: "Schweres, langsames Rumänisches Kreuzheben",
      dose: "3–4 × 6–10 · 3 s runter, 3 s hoch",
      how: "Kurzhanteln oder eine Kettlebell halten, Füße hüftbreit, Knie leicht gebeugt. Mit geradem Rücken die Hüfte nach hinten schieben und das Gewicht an den Oberschenkeln entlang nur so weit absenken, wie es die Schmerzregel erlaubt, dann aufrichten. Alle 1–2 Wochen etwas tiefer und schwerer.",
    },
  },
  "two-leg-calf-raise": {
    min: 4,
    video: {
      en: {
        id: "cqDMYUaIXvw",
        title: "Calf raises two legs",
        channel: "Rehab My Patient",
      },
    },
    en: {
      name: "Two-leg calf raise",
      dose: "3 × 15 · 3 s down · daily",
      how: "Start about 2 days after the strain if walking feels OK. Stand on flat floor with fingertips on a wall, rise onto the balls of both feet over 2 seconds and lower over 3 seconds. Each day, shift a little more weight onto the injured leg within the pain rule, until you can do the raises on that leg alone.",
    },
    de: {
      name: "Beidbeiniges Wadenheben",
      dose: "3 × 15 · 3 s absenken · täglich",
      how: "Etwa 2 Tage nach der Zerrung beginnen, wenn Gehen gut klappt. Auf flachem Boden stehen, Fingerspitzen an der Wand, in 2 Sekunden auf beide Fußballen hochdrücken und in 3 Sekunden absenken. Jeden Tag innerhalb der Schmerzregel etwas mehr Gewicht auf das verletzte Bein verlagern, bis du es auf diesem Bein allein schaffst.",
    },
  },
  "reverse-nordic": {
    min: 4,
    video: null,
    en: {
      name: "Reverse Nordic",
      dose: "2–3 × 6–8 · 3 s down",
      how: "Kneel upright on a soft mat, knees hip-width, and squeeze your glutes so your body stays straight from knees to shoulders. Lean back slowly as one unit, only as far as you can control without pain, then pull yourself back up with your thighs. Start once split squats are pain-free, and lean a little further back over the weeks.",
    },
    de: {
      name: "Reverse Nordic",
      dose: "2–3 × 6–8 · 3 s runter",
      how: "Aufrecht auf eine weiche Matte knien, Knie hüftbreit, und das Gesäß anspannen, damit der Körper von den Knien bis zu den Schultern gerade bleibt. Langsam als Ganzes nach hinten lehnen, nur so weit, wie du es schmerzfrei kontrollierst, dann mit den Oberschenkeln wieder hochziehen. Erst beginnen, wenn Split Squats schmerzfrei gehen, und über die Wochen etwas weiter zurücklehnen.",
    },
  },
  "adductor-squeeze": {
    min: 6,
    video: {
      en: {
        id: "Hz1mzJksXJY",
        title: "Module 1: Adductor Squeeze 45 degrees",
        channel: "",
      },
    },
    en: {
      name: "Adductor squeeze hold",
      dose: "5 × 30 s · 1 min rest",
      how: "Lie on your back, knees bent, with a ball or firm pillow between your knees. Squeeze steadily at about half effort, keeping pain at 3/10 or less, hold, then relax slowly. Squeeze a little harder each week as it settles.",
    },
    de: {
      name: "Ball zwischen den Knien zusammendrücken",
      dose: "5 × 30 s · 1 Min. Pause",
      how: "Rückenlage, Knie aufgestellt, ein Ball oder festes Kissen zwischen den Knien. Gleichmäßig mit etwa halber Kraft zusammendrücken, sodass der Schmerz höchstens bei 3/10 liegt, halten und langsam lösen. Jede Woche etwas fester drücken, wenn es ruhiger wird.",
    },
  },
  "copenhagen-adduction": {
    min: 5,
    video: {
      en: {
        id: "nhGK-DxiGBE",
        title: "Short Lever Adductor Copenhagen Plank",
        channel: "",
      },
    },
    en: {
      name: "Copenhagen adduction (knee supported)",
      dose: "2–3 × 5–10 per side · 3 times a week",
      how: "Lie on your side on one forearm with the sore leg on top, its knee resting on a bench or sturdy chair and the bottom leg free underneath. Press the top knee down to lift your hips into a straight line, bring the bottom leg up to the bench, then lower both over 3 seconds. Start with 2 sets of 5, or with 15-second holds if lifting hurts, and rest the top ankle on the bench instead of the knee once 3 × 10 is easy.",
    },
    de: {
      name: "Copenhagen-Adduktion (Knie aufgelegt)",
      dose: "2–3 × 5–10 pro Seite · 3-mal pro Woche",
      how: "Seitlage auf dem Unterarm, das schmerzende Bein oben. Das obere Knie liegt auf einer Bank oder einem stabilen Stuhl, das untere Bein hängt frei darunter. Das obere Knie nach unten drücken, die Hüfte in eine gerade Linie heben, das untere Bein zur Bank führen und dann beides in 3 Sekunden absenken. Mit 2 Sätzen à 5 beginnen, bei Schmerzen stattdessen mit 15 Sekunden Halten, und erst den Knöchel statt des Knies auflegen, wenn 3 × 10 leichtfällt.",
    },
  },
  "hamstring-extender": {
    min: 4,
    video: {
      en: {
        id: "n8KAMzi2gCk",
        title: "Hamstring Rehab exercise 1",
        channel: "",
      },
    },
    en: {
      name: "Hamstring extender",
      dose: "3 × 12 · twice a day",
      how: "Lie on your back and hold the thigh of the sore leg with both hands, hip bent to about 90°. Slowly straighten the knee until you feel a mild pull, stop short of pain, then bend it again. Start once brisk walking is pain-free, and never bounce or force the stretch.",
    },
    de: {
      name: "Kniestrecken in Rückenlage (Extender)",
      dose: "3 × 12 · 2-mal täglich",
      how: "Rückenlage, den Oberschenkel des schmerzenden Beins mit beiden Händen halten, Hüfte etwa 90° gebeugt. Das Knie langsam strecken, bis ein leichtes Ziehen kommt, kurz vor dem Schmerz stoppen und wieder beugen. Erst beginnen, wenn zügiges Gehen schmerzfrei ist, und nie federn oder die Dehnung erzwingen.",
    },
  },
  "hamstring-glider": {
    min: 3,
    video: null,
    en: {
      name: "Hamstring glider",
      dose: "3 × 4 · every 3rd day",
      how: "Hold onto a support with your weight on the heel of the sore leg, knee slightly bent. Slide the other foot straight back on a towel or slider until you feel a mild pull in the sore hamstring, stopping before pain, then pull yourself back up with your arms. Start once the extender is pain-free, and slide a little further and faster over the weeks.",
    },
    de: {
      name: "Gleitender Ausfallschritt nach hinten (Glider)",
      dose: "3 × 4 · jeden 3. Tag",
      how: "An einer Stütze festhalten, das Gewicht auf der Ferse des schmerzenden Beins, Knie leicht gebeugt. Den anderen Fuß auf einem Handtuch oder Slider gerade nach hinten gleiten lassen, bis es hinten im schmerzenden Oberschenkel leicht zieht, vor dem Schmerz stoppen und mithilfe der Arme zurück in den Stand kommen. Erst beginnen, wenn der Extender schmerzfrei geht, und über die Wochen etwas weiter und zügiger gleiten.",
    },
  },
  "back-extension": {
    min: 4,
    video: null,
    en: {
      name: "Prone back extension",
      dose: "3 × 10–15 · 2 s holds",
      how: "Lie face down, arms by your sides. Squeeze your glutes and lift your chest a few centimetres off the floor, neck long and eyes on the floor, hold 2 seconds and lower slowly. Stay within the pain rule, and when 3 × 15 feels easy, put your hands by your temples or move to a back-extension bench.",
    },
    de: {
      name: "Rückenstrecken in Bauchlage",
      dose: "3 × 10–15 · 2 s halten",
      how: "Bauchlage, Arme neben dem Körper. Gesäß anspannen und den Oberkörper ein paar Zentimeter vom Boden abheben, Nacken lang, Blick zum Boden, 2 Sekunden halten und langsam absenken. Bleib dabei innerhalb der Schmerzregel, und wenn 3 × 15 leichtfällt, nimm die Hände an die Schläfen oder wechsle an die Hyperextensionsbank.",
    },
  },
  "glute-bridge": {
    min: 4,
    video: {
      en: {
        id: "XudFwCwxOUg",
        title: "NUH Physiotherapy - Bridging",
        channel: "NUH Physiotherapy",
      },
    },
    en: {
      name: "Glute bridge",
      dose: "3 × 12 · 3 s holds",
      how: "On your back, knees bent, feet hip-width apart. Gently brace your stomach, push through your heels and lift your hips until shoulders, hips and knees line up, hold 3 seconds and lower slowly. Move on to the single-leg version when 3 × 12 feels easy within the pain rule.",
    },
    de: {
      name: "Gesäßbrücke",
      dose: "3 × 12 · 3 s halten",
      how: "Rückenlage, Knie gebeugt, Füße hüftbreit. Bauch leicht anspannen, über die Fersen drücken und das Becken heben, bis Schultern, Hüfte und Knie eine Linie bilden, 3 Sekunden halten und langsam absenken. Wenn 3 × 12 innerhalb der Schmerzregel leichtfällt, zur einbeinigen Variante wechseln.",
    },
  },
};
