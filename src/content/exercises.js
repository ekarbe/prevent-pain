// Exercise library. `min` is a rough session time (0 = done during runs).
// `video` is a YouTube demo, loaded only after a tap: { id, start?, title, channel }, per language where one exists.
export const exercises = {
  "wall-sit": {
    min: 10,
    video: null,
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
    video: null,
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
    video: null,
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
    video: null,
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
    video: null,
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
    video: null,
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
    video: null,
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
    video: null,
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
    video: null,
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
    video: null,
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
    video: null,
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
    video: null,
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
    video: null,
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
};
