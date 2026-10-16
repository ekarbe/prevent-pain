// 30-second self-tests. `pos` describes a result that suggests a weak link, `neg` a result that looks fine.
// `load` is not tied to a link: the plan asks it on every cause.
export const tests = {
  cad: {
    en: {
      name: "Step-rate count",
      how: "On an easy run, count each time your right foot lands for 30 seconds, then multiply by 4.",
      pos: "Under 165 steps per minute",
      neg: "165 or more",
    },
    de: {
      name: "Schrittfrequenz zählen",
      how: "Zähl bei einem lockeren Lauf 30 Sekunden lang, wie oft dein rechter Fuß aufsetzt, und nimm das mal 4.",
      pos: "Unter 165 Schritten pro Minute",
      neg: "165 oder mehr",
    },
  },
  sph: {
    en: {
      name: "Side-plank hold",
      how: "Side plank on your forearm and feet, body in a straight line. Time how long you hold with your hips level, then switch sides.",
      pos: "Under 45 seconds, or one side clearly shorter",
      neg: "45 seconds or more, both sides similar",
    },
    de: {
      name: "Seitstütz halten",
      how: "Seitstütz auf Unterarm und Füßen, der Körper bildet eine Linie. Stopp die Zeit, solange die Hüfte gerade bleibt, dann Seite wechseln.",
      pos: "Unter 45 Sekunden oder eine Seite deutlich kürzer",
      neg: "45 Sekunden oder länger, beide Seiten ähnlich",
    },
  },
  tho: {
    en: {
      name: "Hip flexor test (Thomas test)",
      how: "Sit on the very end of a bed, hug one knee to your chest and roll onto your back. Let the other leg hang. A partner or a phone photo helps.",
      pos: "The hanging thigh lifts above the bed, or the knee straightens",
      neg: "The thigh rests flat and the knee stays bent",
    },
    de: {
      name: "Hüftbeuger-Test (Thomas-Test)",
      how: "Setz dich ganz an die Kante eines Bettes, zieh ein Knie zur Brust und roll dich auf den Rücken. Das andere Bein hängt frei. Eine zweite Person oder ein Handyfoto hilft.",
      pos: "Der hängende Oberschenkel hebt sich über das Bett oder das Knie streckt sich",
      neg: "Der Oberschenkel liegt auf, das Knie bleibt gebeugt",
    },
  },
  sls: {
    en: {
      name: "Single-leg squat in a mirror",
      how: "Stand on the painful leg facing a mirror, arms crossed. Do 5 slow quarter squats and watch your knee and hip.",
      pos: "Knee drifts inside the big toe, or the hip drops",
      neg: "Knee stays over the 2nd toe",
    },
    de: {
      name: "Einbeinige Kniebeuge vor dem Spiegel",
      how: "Stell dich mit dem schmerzenden Bein vor einen Spiegel, Arme verschränkt. Mach 5 langsame Viertel-Kniebeugen und beobachte Knie und Hüfte.",
      pos: "Knie wandert nach innen über den großen Zeh oder die Hüfte sinkt ab",
      neg: "Knie bleibt über der 2. Zehe",
    },
  },
  slb: {
    en: {
      name: "Single-leg bridge count",
      how: "On your back, one foot planted, the other leg pointing up. Lift your hips level and count clean reps until your form breaks.",
      pos: "Fewer than 15, or the hamstring cramps",
      neg: "15 or more on each side",
    },
    de: {
      name: "Einbeinige Brücke zählen",
      how: "Rückenlage, ein Fuß aufgestellt, das andere Bein zeigt nach oben. Hüfte gerade anheben und saubere Wiederholungen zählen, bis die Technik nachlässt.",
      pos: "Weniger als 15 oder der hintere Oberschenkel krampft",
      neg: "15 oder mehr pro Seite",
    },
  },
  sts: {
    en: {
      name: "Single-leg sit-to-stand",
      how: "Sit on a knee-high chair, arms crossed. Stand up on one leg and sit back down slowly. Count clean reps on each side.",
      pos: "Fewer than 10, or clearly fewer than the other side",
      neg: "10 or more on each side",
    },
    de: {
      name: "Einbeiniges Aufstehen vom Stuhl",
      how: "Setz dich auf einen kniehohen Stuhl, Arme verschränkt. Steh auf einem Bein auf und setz dich langsam wieder. Zähl saubere Wiederholungen pro Seite.",
      pos: "Weniger als 10 oder deutlich weniger als die andere Seite",
      neg: "10 oder mehr pro Seite",
    },
  },
  hsb: {
    en: {
      name: "Hamstring bridge count",
      how: "On your back with one heel on a knee-high step, knee slightly bent, the other leg pointing up. Lift and lower your hips until your form breaks.",
      pos: "Fewer than 20, or clearly fewer than the other side",
      neg: "20 or more on each side",
    },
    de: {
      name: "Hamstring-Brücke zählen",
      how: "Rückenlage, eine Ferse auf einer kniehohen Stufe, Knie leicht gebeugt, das andere Bein zeigt nach oben. Hüfte heben und senken, bis die Technik nachlässt.",
      pos: "Weniger als 20 oder deutlich weniger als die andere Seite",
      neg: "20 oder mehr pro Seite",
    },
  },
  cr: {
    en: {
      name: "Single-leg calf raise count",
      how: "Stand on one leg, fingertips on a wall. Rise as high as you can and lower slowly. Count until you can't reach full height.",
      pos: "Fewer than 20, or clearly fewer than the other side",
      neg: "20 or more on both sides",
    },
    de: {
      name: "Einbeiniges Wadenheben zählen",
      how: "Auf einem Bein stehen, Fingerspitzen an der Wand. So hoch wie möglich drücken und langsam absenken. Zählen, bis du die volle Höhe nicht mehr schaffst.",
      pos: "Weniger als 20 oder deutlich weniger als die andere Seite",
      neg: "20 oder mehr auf beiden Seiten",
    },
  },
  ktw: {
    en: {
      name: "Knee-to-wall test",
      how: "Face a wall, foot pointing at it. Lunge until your knee touches the wall with the heel flat. Slide the foot back until you just can't, then measure toe to wall.",
      pos: "Under about 10 cm, or clearly less than the other side",
      neg: "10 cm or more, both sides similar",
    },
    de: {
      name: "Knie-zur-Wand-Test",
      how: "Stell dich vor eine Wand, der Fuß zeigt zur Wand. Schieb das Knie an die Wand, die Ferse bleibt am Boden. Rück den Fuß zurück, bis es gerade nicht mehr geht, und miss Zehe bis Wand.",
      pos: "Unter etwa 10 cm oder deutlich weniger als die andere Seite",
      neg: "10 cm oder mehr, beide Seiten ähnlich",
    },
  },
  bal: {
    en: {
      name: "Balance with eyes closed",
      how: "Stand on one leg, hands on hips, and close your eyes. Time how long you stay steady, then do the same on the other leg.",
      pos: "Clearly shorter or wobblier than on the other leg",
      neg: "About the same as on the other leg",
    },
    de: {
      name: "Gleichgewicht mit geschlossenen Augen",
      how: "Auf einem Bein stehen, Hände an der Hüfte, Augen schließen. Stopp die Zeit, wie lange du ruhig stehst, dann dasselbe auf dem anderen Bein.",
      pos: "Deutlich kürzer oder wackliger als auf dem anderen Bein",
      neg: "Etwa so wie auf dem anderen Bein",
    },
  },
  load: {
    en: {
      name: "Training load",
      how: "Did your weekly distance, speed work or hill running jump in the last 4 weeks? New shoes or a new surface count too.",
      pos: "Yes, something went up or changed",
      neg: "No, training stayed steady",
    },
    de: {
      name: "Trainingsumfang",
      how: "Sind Wochenumfang, Tempotraining oder Hügelläufe in den letzten 4 Wochen gestiegen? Neue Schuhe oder ein neuer Untergrund zählen auch.",
      pos: "Ja, etwas ist gestiegen oder neu",
      neg: "Nein, alles blieb gleich",
    },
  },
};
