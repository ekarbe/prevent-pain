// 30-second self-tests. `pos` describes a result that suggests a weak link, `neg` a result that looks fine.
// `load` is not tied to a link: the plan asks it on every cause.
// Thresholds: calf raises after Hébert-Losier et al. 2017 (medians 24 men, 21 women; ±6 reps between days),
// hamstring bridge after Freckleton et al. 2014 (heel at knee height), load after Frandsen et al. 2025.
export const tests = {
  cad: {
    en: {
      name: "Step-rate count",
      how: "On an easy run, count each time your right foot lands for 30 seconds, then multiply by 4. The cut-off is only a rough guide, because step rate rises with speed and differs with leg length. In lab studies, raising your own rate by 5–10% lowered the load on the knees and hips.",
      pos: "Under about 165 steps per minute",
      neg: "About 165 or more",
    },
    de: {
      name: "Schrittfrequenz zählen",
      how: "Zähl bei einem lockeren Lauf 30 Sekunden lang, wie oft dein rechter Fuß aufsetzt, und nimm das mal 4. Die Grenze ist nur ein grober Richtwert, weil die Schrittfrequenz mit dem Tempo steigt und von der Beinlänge abhängt. In Laborstudien senkten 5–10 % mehr Schritte als die eigene Frequenz die Last auf Knie und Hüfte.",
      pos: "Unter etwa 165 Schritten pro Minute",
      neg: "Etwa 165 oder mehr",
    },
  },
  sph: {
    en: {
      name: "Side-plank hold",
      how: "Side plank on your forearm and feet, body in a straight line. Time how long you hold with your hips level, then switch sides.",
      pos: "One side clearly shorter, or under 30 seconds",
      neg: "Both sides similar, 30 seconds or more",
    },
    de: {
      name: "Seitstütz halten",
      how: "Seitstütz auf Unterarm und Füßen, der Körper bildet eine Linie. Stopp die Zeit, solange die Hüfte gerade bleibt, dann Seite wechseln.",
      pos: "Eine Seite deutlich kürzer oder unter 30 Sekunden",
      neg: "Beide Seiten ähnlich, 30 Sekunden oder länger",
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
      how: "On your back with one heel on a box or chair at knee height (about 50–60 cm), knee slightly bent, the other leg pointing up. Lift your hips all the way and lower them, counting until your form breaks.",
      pos: "Fewer than 20, or clearly fewer than the other side",
      neg: "20 or more on each side",
    },
    de: {
      name: "Hamstring-Brücke zählen",
      how: "Rückenlage, eine Ferse auf einer Box oder einem Stuhl in Kniehöhe (etwa 50–60 cm), Knie leicht gebeugt, das andere Bein zeigt nach oben. Hüfte ganz hochdrücken, wieder senken und zählen, bis die Technik nachlässt.",
      pos: "Weniger als 20 oder deutlich weniger als die andere Seite",
      neg: "20 oder mehr pro Seite",
    },
  },
  cr: {
    en: {
      name: "Single-leg calf raise count",
      how: "Stand on one leg, fingertips on a wall. Rise as high as you can and lower slowly. Count until you can't reach full height.",
      pos: "Fewer than 20, or at least 6 fewer than the other side",
      neg: "20 or more on both sides, and within 5 of each other",
    },
    de: {
      name: "Einbeiniges Wadenheben zählen",
      how: "Auf einem Bein stehen, Fingerspitzen an der Wand. So hoch wie möglich drücken und langsam absenken. Zählen, bis du die volle Höhe nicht mehr schaffst.",
      pos: "Weniger als 20 oder mindestens 6 weniger als die andere Seite",
      neg: "20 oder mehr auf beiden Seiten, höchstens 5 Unterschied",
    },
  },
  ktw: {
    en: {
      name: "Knee-to-wall test",
      how: "Face a wall, foot pointing at it. Lunge until your knee touches the wall with the heel flat. Slide the foot back until you just can't, then measure toe to wall. Compare both sides, and stop if it pinches at the front of the ankle.",
      pos: "Clearly less than the other side, or under about 10 cm",
      neg: "Both sides similar, about 10 cm or more",
    },
    de: {
      name: "Knie-zur-Wand-Test",
      how: "Stell dich vor eine Wand, der Fuß zeigt zur Wand. Schieb das Knie an die Wand, die Ferse bleibt am Boden. Rück den Fuß zurück, bis es gerade nicht mehr geht, und miss Zehe bis Wand. Teste beide Seiten und hör auf, wenn es vorne im Sprunggelenk zwickt.",
      pos: "Deutlich weniger als die andere Seite oder unter etwa 10 cm",
      neg: "Beide Seiten ähnlich, etwa 10 cm oder mehr",
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
  cph: {
    en: {
      name: "Copenhagen side-plank hold",
      how: "Lie on your side on one forearm, top knee resting on a chair or bench, bottom leg hanging free. Lift your hips into a straight line and hold for up to 30 seconds, then switch sides. Stop as soon as your groin hurts, and skip the test while a recent groin strain still hurts when you squeeze your knees together.",
      pos: "Groin pain, under 15 seconds, or one side clearly shorter",
      neg: "Pain-free, 15 seconds or more, sides similar",
    },
    de: {
      name: "Copenhagen-Seitstütz halten",
      how: "Seitlage auf dem Unterarm, das obere Knie liegt auf einem Stuhl oder einer Bank, das untere Bein hängt frei. Hüfte in eine gerade Linie heben und bis zu 30 Sekunden halten, dann Seite wechseln. Hör sofort auf, wenn die Leiste schmerzt, und lass den Test weg, solange eine frische Leistenzerrung beim Zusammendrücken der Knie noch wehtut.",
      pos: "Leistenschmerz, unter 15 Sekunden oder eine Seite deutlich kürzer",
      neg: "Schmerzfrei, 15 Sekunden oder länger, Seiten ähnlich",
    },
  },
  load: {
    en: {
      name: "Training load",
      how: "In the last 4 weeks, was any run more than about 10% longer than your longest run in the 30 days before it? Or did you add more speed work or hills, or switch shoes or running surface?",
      pos: "Yes, at least one of these",
      neg: "No, none of these",
    },
    de: {
      name: "Trainingsbelastung",
      how: "War in den letzten 4 Wochen ein Lauf mehr als etwa 10 % länger als dein längster Lauf in den 30 Tagen davor? Oder hast du mehr Tempotraining oder Hügel eingebaut oder Schuhe oder Untergrund gewechselt?",
      pos: "Ja, mindestens eins davon",
      neg: "Nein, nichts davon",
    },
  },
};
