// Knee causes. Schema: see README "Content model".
export default [
  {
    id: "pfp",
    kind: "plan",
    en: {
      title: "Dull ache around or behind the kneecap",
      desc: "Worse on stairs (especially going down), squatting, running downhill, or after sitting a long time with bent knees.",
      name: "Patellofemoral pain (runner's knee)",
      about:
        "The joint behind your kneecap is getting more load than it's ready for right now. It's the most common knee problem in runners and usually settles with smarter load plus stronger quads and hips.",
      load: "Keep running on flat ground. If the pain rule is broken, skip downhill and cut weekly distance by about a third for 2 weeks.",
    },
    de: {
      title: "Dumpfer Schmerz rund um oder hinter der Kniescheibe",
      desc: "Schlimmer auf Treppen (vor allem abwärts), in der Hocke, beim Bergablaufen oder nach langem Sitzen mit gebeugten Knien.",
      name: "Patellofemorales Schmerzsyndrom (Läuferknie)",
      about:
        "Das Gelenk hinter deiner Kniescheibe bekommt gerade mehr Last, als es verträgt. Es ist das häufigste Knieproblem bei Laufenden und bessert sich meist mit angepasster Belastung und kräftigeren Oberschenkel- und Hüftmuskeln.",
      load: "Lauf weiter auf flachem Untergrund. Wird die Schmerzregel verletzt: 2 Wochen kein Bergab und etwa ein Drittel weniger Wochenumfang.",
    },
    local: ["wall-sit", "step-down"],
    chain: [
      [
        "hipabd",
        3,
        {
          en: "If the side-hip muscles can't keep your pelvis level, the thigh drops inward and the knee follows on every stride, pressing the kneecap against the outer groove.",
          de: "Halten die seitlichen Hüftmuskeln das Becken nicht stabil, sinkt der Oberschenkel nach innen und das Knie folgt bei jedem Schritt. Das drückt die Kniescheibe gegen die äußere Gleitrinne.",
        },
      ],
      ["quads", 3],
      ["ankle", 2],
      ["stride", 2],
      ["foot", 1],
    ],
    sources: ["willy2019", "crossley2016", "powers2010", "silbernagel2007"],
  },
  {
    id: "patellar-tendon",
    kind: "plan",
    en: {
      title: "Pinpoint pain just below the kneecap",
      desc: "Hurts at the start of a run, eases once warm, then is worse the next day. Jumps, hills and stairs make it flare.",
      name: "Patellar tendinopathy (jumper's knee)",
      about:
        "The tendon below your kneecap has been loaded faster than it could adapt. Tendons get better with slow, gradually heavier loading. Rest alone rarely fixes it.",
      load: "Drop jumps, sprints and steep hills for now. Easy flat runs are fine within the pain rule.",
    },
    de: {
      title: "Punktueller Schmerz direkt unter der Kniescheibe",
      desc: "Tut zu Beginn des Laufs weh, wird warm besser und ist am nächsten Tag schlimmer. Sprünge, Hügel und Treppen verstärken ihn.",
      name: "Patellasehnen-Tendinopathie (Springerknie)",
      about:
        "Die Sehne unter deiner Kniescheibe wurde schneller belastet, als sie sich anpassen konnte. Sehnen werden durch langsame, schrittweise schwerere Belastung besser. Ruhe allein hilft selten.",
      load: "Sprünge, Sprints und steile Hügel vorerst weglassen. Lockere, flache Läufe sind innerhalb der Schmerzregel in Ordnung.",
    },
    local: ["spanish-squat", "slow-leg-press"],
    chain: [
      [
        "ankle",
        3,
        {
          en: "A stiff ankle stops the shin from tipping forward when you land, so the knee has to bend more and the patellar tendon brakes harder.",
          de: "Ein steifes Sprunggelenk lässt das Schienbein bei der Landung nicht nach vorn kippen. Das Knie muss stärker beugen und die Patellasehne härter bremsen.",
        },
      ],
      ["calf", 2],
      [
        "glutes",
        2,
        {
          en: "Strong glutes share the work of absorbing each landing. Weak ones push more of it onto the quads and the patellar tendon.",
          de: "Kräftige Gesäßmuskeln teilen sich die Landearbeit. Schwache schieben mehr davon auf die vorderen Oberschenkel und die Patellasehne.",
        },
      ],
    ],
    sources: ["malliaras2015", "rio2015", "kongsgaard2009", "backman2011"],
  },
  {
    id: "itbs",
    kind: "plan",
    en: {
      title: "Sharp pain on the outside of the knee that starts mid-run",
      desc: "Kicks in at a predictable time or distance, gets worse downhill, and fades soon after you stop.",
      name: "Iliotibial band syndrome (ITBS)",
      about:
        "Tissue on the outside of the knee gets squeezed each time the knee bends through about 30°, thousands of times per run. Lowering that load and building hip control usually settles it.",
      load: "Run only as long as it stays pain-free, then stop. Avoid downhill and running on the same side of a cambered road.",
    },
    de: {
      title: "Stechender Schmerz außen am Knie, der mitten im Lauf beginnt",
      desc: "Setzt nach vorhersehbarer Zeit oder Strecke ein, wird bergab schlimmer und lässt nach dem Stoppen bald nach.",
      name: "Iliotibiales Bandsyndrom (ITBS)",
      about:
        "Gewebe an der Knieaußenseite wird bei jeder Beugung um etwa 30° zusammengedrückt, tausendfach pro Lauf. Weniger Last und mehr Hüftkontrolle bringen es meist zur Ruhe.",
      load: "Lauf nur so lange, wie es schmerzfrei bleibt, dann aufhören. Bergab und immer dieselbe Straßenseite mit Gefälle meiden.",
    },
    local: [],
    chain: [
      [
        "hipabd",
        3,
        {
          en: "When the side-hip muscles tire, the thigh drops inward and the band on the outside of the knee gets pulled tighter over the bone on every stride.",
          de: "Ermüden die seitlichen Hüftmuskeln, sinkt der Oberschenkel nach innen und das Band an der Knieaußenseite wird bei jedem Schritt straffer über den Knochen gezogen.",
        },
      ],
      ["stride", 3],
      ["foot", 1],
    ],
    sources: ["fredericson2000", "heiderscheit2011", "silbernagel2007"],
  },
];
