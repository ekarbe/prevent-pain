// knee causes. Schema: see README "Content model".
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
      name: "Patellofemorales Schmerzsyndrom (vorderer Knieschmerz)",
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
      load: "Stricter than the pain rule for this one: run only as long as it stays pain-free, then stop. Avoid downhill and running on the same side of a cambered road.",
    },
    de: {
      title: "Stechender Schmerz außen am Knie, der mitten im Lauf beginnt",
      desc: "Setzt nach vorhersehbarer Zeit oder Strecke ein, wird bergab schlimmer und lässt nach dem Stoppen bald nach.",
      name: "Iliotibiales Bandsyndrom (ITBS, Läuferknie)",
      about:
        "Gewebe an der Knieaußenseite wird bei jeder Beugung um etwa 30° zusammengedrückt, tausendfach pro Lauf. Weniger Last und mehr Hüftkontrolle bringen es meist zur Ruhe.",
      load: "Hier gilt mehr als die Schmerzregel: Lauf nur so lange, wie es schmerzfrei bleibt, dann aufhören. Bergab und immer dieselbe Straßenseite mit Gefälle meiden.",
    },
    local: ["hip-abduction-hold", "side-abduction", "banded-side-step"],
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
  {
    id: "quad-tendon",
    kind: "plan",
    en: {
      title: "Pinpoint pain just above the kneecap on stairs and squats",
      desc: "One spot right at the top edge of the kneecap is sore to press. It's often stiff at the start of a run, eases once warm and is worse the next day, especially after downhill running, stairs or deep squats.",
      name: "Quadriceps tendinopathy",
      about:
        "The tendon that joins your thigh muscles to the top of the kneecap has been loaded faster than it could adapt, often after more hills, stairs or deep squats than usual. It's much less common than the same problem below the kneecap and is usually treated the same way: strength work that gets gradually heavier, with only shallow knee bends at first. If it started with a sudden pop and now you can't lift your leg with the knee straight, get it seen today.",
      load: "Easy runs on flat ground are usually fine within the pain rule. Drop steep descents, stair sessions and deep squats or lunges for now, and bring downhill back in short sections once your knee stays calm the next morning.",
    },
    de: {
      title:
        "Punktueller Schmerz über der Kniescheibe bei Treppen und Kniebeugen",
      desc: "Eine Stelle direkt am oberen Rand der Kniescheibe ist druckempfindlich. Das Knie ist zu Beginn des Laufs oft steif, wird warm besser und ist am nächsten Tag schlimmer, vor allem nach Bergabläufen, Treppen oder tiefen Kniebeugen.",
      name: "Quadrizepssehnen-Tendinopathie",
      about:
        "Die Sehne, die deine vordere Oberschenkelmuskulatur oben an der Kniescheibe verankert, wurde schneller belastet, als sie sich anpassen konnte, oft nach ungewohnt vielen Hügeln, Treppen oder tiefen Kniebeugen. Das ist deutlich seltener als dasselbe Problem unterhalb der Kniescheibe und wird meist genauso behandelt: mit Krafttraining, das schrittweise schwerer wird, anfangs nur mit wenig Kniebeugung. Hat es mit einem plötzlichen Knall angefangen und kannst du das gestreckte Bein jetzt nicht mehr anheben, lass es heute noch abklären.",
      load: "Lockere Läufe auf flachem Untergrund sind innerhalb der Schmerzregel meist in Ordnung. Steile Abstiege, Treppentraining und tiefe Kniebeugen oder Ausfallschritte vorerst weglassen und Bergabstücke in kurzen Abschnitten wieder einbauen, wenn das Knie am nächsten Morgen ruhig bleibt.",
    },
    local: ["wall-sit", "slow-leg-press"],
    chain: [
      [
        "glutes",
        2,
        {
          en: "Strong glutes take a share of the braking on stairs and descents. Weak ones can leave more of it to the quads, so the tendon above the kneecap has to pull harder.",
          de: "Kräftige Gesäßmuskeln übernehmen auf Treppen und bergab einen Teil der Bremsarbeit. Sind sie schwach, bleibt mehr davon an den vorderen Oberschenkeln hängen, und die Sehne über der Kniescheibe muss stärker ziehen.",
        },
      ],
      [
        "stride",
        2,
        {
          en: "With long strides the foot lands far in front of you and the knee bends deeper, so the quad tendon brakes harder, most of all downhill. A slightly higher step rate lowers the load your knee absorbs on each landing.",
          de: "Bei langen Schritten landet der Fuß weit vor dem Körper und das Knie beugt stärker, sodass die Quadrizepssehne härter bremsen muss, vor allem bergab. Eine etwas höhere Schrittfrequenz senkt die Last, die dein Knie bei jeder Landung abfängt.",
        },
      ],
      ["ankle", 1],
      ["calf", 1],
    ],
    sources: ["malliaras2015", "rio2015", "kongsgaard2009", "heiderscheit2011"],
    linkExercises: {
      glutes: ["single-leg-bridge", "glute-bridge"],
    },
  },
  {
    id: "pes-anserine",
    kind: "plan",
    en: {
      title: "Tender ache on the inner knee, a little below the joint",
      desc: "One spot on the inner side of the upper shin bone, two or three finger widths below the inner joint gap, is sore to press. It's worse on stairs, getting up from a chair and at night with your knees touching, but the knee doesn't catch, lock or give way.",
      name: "Pes anserine tendinopathy or bursitis (pes anserine syndrome)",
      about:
        "Three tendons from the front, inner and back of the thigh join just below the inner knee, over a small fluid-filled cushion (bursa), and a jump in distance or hills can irritate them. Less load for a while plus gradually more strength around the hip and knee usually settles it, and a pillow between your knees at night often helps. If the pain builds run after run, aches even at rest, or hopping on that leg hurts, stop running and get it checked soon, because a stress injury at the top of the shin bone can feel similar.",
      load: "Keep easy runs on flat ground within the pain rule. Skip hills and routes with lots of stairs for now, and hold your weekly distance steady rather than adding to it until the spot is no longer sore the next morning.",
    },
    de: {
      title: "Druckschmerz innen am Knie, etwas unterhalb des Gelenkspalts",
      desc: "Eine Stelle innen am oberen Schienbein, zwei bis drei Fingerbreit unter dem inneren Gelenkspalt, ist druckempfindlich. Schlimmer auf Treppen, beim Aufstehen vom Stuhl und nachts, wenn die Knie aneinanderliegen. Das Knie hakt aber nicht, blockiert nicht und knickt nicht weg.",
      name: "Pes-anserinus-Tendinopathie oder -Bursitis (Pes-anserinus-Syndrom)",
      about:
        "Knapp unterhalb des Knies setzen innen drei Sehnen von der Vorder-, Innen- und Rückseite des Oberschenkels über einem kleinen Schleimbeutel am Schienbein an, und deutlich mehr Umfang oder Hügel als gewohnt können sie reizen. Eine Zeit lang weniger Belastung und schrittweise mehr Kraft rund um Hüfte und Knie bringen es meist zur Ruhe, nachts hilft oft ein Kissen zwischen den Knien. Wird der Schmerz von Lauf zu Lauf stärker, tut es auch in Ruhe weh oder schmerzt Hüpfen auf dem Bein, hör mit dem Laufen auf und lass es bald abklären, denn eine Stressverletzung oben am Schienbein kann sich ähnlich anfühlen.",
      load: "Lockere Läufe auf flachem Untergrund sind innerhalb der Schmerzregel in Ordnung. Hügel und Strecken mit vielen Treppen vorerst meiden und den Wochenumfang halten statt steigern, bis die Stelle am nächsten Morgen nicht mehr druckempfindlich ist.",
    },
    local: ["hamstring-bridge-hold", "hamstring-bridge", "step-down"],
    chain: [
      [
        "hipabd",
        2,
        {
          en: "If the side-hip muscles can't hold your pelvis level, the knee can drift inward on every landing. That puts extra tension on the tendons that attach on the inner side, just below the joint.",
          de: "Halten die seitlichen Hüftmuskeln das Becken nicht stabil, kann das Knie bei jeder Landung nach innen kippen. Das setzt die Sehnen, die innen knapp unter dem Gelenk ansetzen, zusätzlich unter Spannung.",
        },
      ],
      ["stride", 1],
      [
        "foot",
        1,
        {
          en: "When the arch collapses, the shin turns inward and the knee can be drawn into a knock-kneed angle, which adds strain to the tendons on the inner side.",
          de: "Sinkt das Fußgewölbe ein, dreht sich das Schienbein nach innen und das Knie kann in eine X-Bein-Stellung geraten. Das belastet die Sehnen an der Knieinnenseite zusätzlich.",
        },
      ],
    ],
    sources: [
      "powers2010",
      "heiderscheit2011",
      "millar2021",
      "silbernagel2007",
      "warden2014",
    ],
  },
  {
    id: "meniscus-refer",
    kind: "refer",
    urgency: "soon",
    en: {
      title: "Sharp pain in the inner knee joint after a twist",
      desc: "Hurts right at the inner joint gap, in deep squats and when you twist on that leg, and the knee may catch, lock, give way or swell. In runners over about 40 it can also build up without a clear twist.",
      name: "Medial meniscus tear (torn knee cartilage)",
      about:
        "This pattern can fit an injury to the meniscus, the rubbery cartilage pad between the thigh bone and the shin bone. A physio or sports doctor can usually tell with a few tests whether that's likely and whether you need a scan. Many tears, especially wear-related ones, settle well with a structured exercise programme, while a knee that truly locks or keeps giving way may also need a surgeon's opinion.",
      meanwhile:
        "Pause running, and avoid twisting, pivoting, deep squats and kneeling until you've been seen. Walking and easy cycling are fine if they don't hurt or make the knee swell. If the knee is stuck and won't straighten fully, it swelled up within a few hours of the twist, or you can't put weight on it, get it seen today.",
    },
    de: {
      title: "Stechender Schmerz innen im Kniegelenk nach einem Verdrehen",
      desc: "Tut direkt am inneren Gelenkspalt weh, in der tiefen Hocke und wenn du dich auf dem Bein drehst, und das Knie kann haken, blockieren, wegknicken oder anschwellen. Bei Laufenden ab etwa 40 kann es sich auch ohne klares Verdrehen nach und nach entwickeln.",
      name: "Innenmeniskusläsion (Meniskusriss)",
      about:
        "Dieses Muster kann zu einer Verletzung des Meniskus passen, der gummiartigen Knorpelscheibe zwischen Oberschenkel und Schienbein. In der Physiotherapie oder sportmedizinischen Praxis lässt sich mit ein paar Tests meist klären, ob das wahrscheinlich ist und ob es eine Bildgebung braucht. Viele Risse, vor allem verschleißbedingte, bessern sich gut mit einem gezielten Übungsprogramm, während ein Knie, das wirklich blockiert oder immer wieder wegknickt, auch eine chirurgische Einschätzung brauchen kann.",
      meanwhile:
        "Pausiere das Laufen und meide Drehbewegungen, Richtungswechsel, tiefes Hocken und Knien, bis es abgeklärt ist. Gehen und lockeres Radfahren sind in Ordnung, solange sie nicht wehtun und das Knie nicht anschwillt. Hängt das Knie fest und lässt sich nicht ganz strecken, ist es innerhalb weniger Stunden nach dem Verdrehen dick geworden oder kannst du nicht auftreten, lass es heute noch abklären.",
    },
    sources: ["logerstedt2018", "kise2016"],
  },
  {
    id: "back-knee",
    kind: "plan",
    en: {
      title: "Ache at the back of the knee after downhill or trail runs",
      desc: "Sore at the inner or outer edge of the back of the knee, often on one spot that hurts to press, and worse running downhill, going down stairs and on long trail runs. A soft lump or swelling behind the knee doesn't fit this picture and is worth having checked.",
      name: "Popliteus or distal hamstring tendinopathy",
      about:
        "Usually a tendon at the back of the knee is irritated: the small popliteus, which steadies the bent knee as it brakes on descents, or the lower end of a hamstring. Strength work that gets gradually heavier, plus fewer steep descents for a while, usually settles it. If it started with a twist, or the knee catches, locks or swells, get it checked soon, because a meniscus tear can also hurt here.",
      load: "Keep easy runs on flat, even ground within the pain rule. Cut steep descents and technical trails for now, walk the downhills if you need to, and bring them back in short sections once your knee stays calm the next morning.",
    },
    de: {
      title: "Dumpfer Schmerz in der Kniekehle nach Bergab- oder Trailläufen",
      desc: "Schmerzt am inneren oder äußeren Rand der Kniekehle, oft an einer Stelle, die auf Druck wehtut, und ist beim Bergablaufen, Treppabgehen und auf langen Trails schlimmer. Eine weiche Beule oder Schwellung in der Kniekehle passt nicht dazu und sollte abgeklärt werden.",
      name: "Popliteus- oder distale Hamstring-Tendinopathie",
      about:
        "Meist ist eine Sehne in der Kniekehle gereizt: die des kleinen Kniekehlenmuskels (Popliteus), der das gebeugte Knie beim Bremsen bergab stabilisiert, oder das untere Ende eines hinteren Oberschenkelmuskels. Krafttraining, das schrittweise schwerer wird, und eine Zeit lang weniger steile Abstiege bringen es meist zur Ruhe. Hat es mit einem Verdrehen angefangen oder hakt, blockiert oder schwillt das Knie, lass es bald abklären, denn auch ein Meniskusriss kann hier wehtun.",
      load: "Lockere Läufe auf flachem, ebenem Untergrund sind innerhalb der Schmerzregel in Ordnung. Steile Abstiege und technische Trails vorerst meiden, bergab notfalls gehen und die Abstiege in kurzen Abschnitten zurückholen, wenn das Knie am nächsten Morgen ruhig bleibt.",
    },
    local: ["hamstring-bridge-hold", "hamstring-bridge", "step-down"],
    chain: [
      [
        "stride",
        2,
        {
          en: "Long strides downhill land further in front of you, so the bent knee brakes harder and the tendons at the back of the knee work harder to steady it. Quicker, shorter steps downhill can spread that load.",
          de: "Bei langen Schritten bergab landet der Fuß weiter vor dem Körper. Das gebeugte Knie muss härter bremsen, und die Sehnen in der Kniekehle müssen es stärker stabilisieren. Kürzere, schnellere Schritte bergab können diese Last verteilen.",
        },
      ],
      ["glutes", 2],
      ["quads", 1],
      ["foot", 1],
    ],
    sources: [
      "vernillo2017",
      "heiderscheit2011",
      "millar2021",
      "silbernagel2007",
    ],
  },
];
