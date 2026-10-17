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
    exits: [
      {
        to: "patellar-dislocation-refer",
        en: "Has your kneecap slipped out of place, even briefly, or does it feel like it shifts sideways?",
        de: "Ist dir die Kniescheibe herausgesprungen, auch nur kurz, oder fühlt es sich an, als rutsche sie seitlich weg?",
      },
      {
        to: "scfe-refer",
        en: "Are you under 18, and do you limp or have hip, groin or thigh pain as well?",
        de: "Bist du unter 18, und hinkst du oder tun dir auch Hüfte, Leiste oder Oberschenkel weh?",
      },
      {
        to: "osgood-schlatter",
        en: "Are you under 16, with a sore bony bump at the top of the shin or a sore lower tip of the kneecap?",
        de: "Bist du unter 16 und tut dir eine Knochenbeule oben am Schienbein oder die Spitze der Kniescheibe weh?",
      },
    ],
    sources: [
      "willy2019",
      "crossley2016",
      "powers2010",
      "silbernagel2007",
      "lenhart2014",
    ],
  },
  {
    id: "patellar-tendon",
    kind: "plan",
    en: {
      title: "Pinpoint pain just below the kneecap",
      desc: "One spot on the tendon at the lower tip of the kneecap is sore to press, and it hurts at the start of a run, eases once warm, then is worse the next day. Jumps, hills and stairs make it flare.",
      name: "Patellar tendinopathy (jumper's knee)",
      about:
        "The tendon below your kneecap has been loaded faster than it could adapt. Tendons get better with gradually heavier loading, in stages: holds as a gentle first load, then slow heavy strength work, then small springy hops before big jumps and hills come back. Rest alone rarely fixes it.",
      load: "Drop jumps, sprints and steep hills for now. Easy flat runs are fine within the pain rule.",
    },
    de: {
      title: "Punktueller Schmerz direkt unter der Kniescheibe",
      desc: "Eine Stelle an der Sehne direkt an der unteren Spitze der Kniescheibe ist druckempfindlich. Es tut zu Beginn des Laufs weh, wird warm besser und ist am nächsten Tag schlimmer, und Sprünge, Hügel und Treppen lassen es aufflammen.",
      name: "Patellasehnen-Tendinopathie (Springerknie)",
      about:
        "Die Sehne unter deiner Kniescheibe wurde schneller belastet, als sie sich anpassen konnte. Sehnen werden durch schrittweise schwerere Belastung in Stufen besser: Halteübungen als sanfter Einstieg, dann langsames, schweres Krafttraining und schließlich kleine, federnde Hüpfer, bevor große Sprünge und Hügel zurückkommen. Ruhe allein hilft selten.",
      load: "Sprünge, Sprints und steile Hügel vorerst weglassen. Lockere, flache Läufe sind innerhalb der Schmerzregel in Ordnung.",
    },
    local: ["spanish-squat", "slow-leg-press", "line-hops"],
    later: ["line-hops"],
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
    exits: [
      {
        to: "osgood-schlatter",
        en: "Are you under 16, with a sore bony bump at the top of the shin or a sore lower tip of the kneecap?",
        de: "Bist du unter 16 und tut dir eine Knochenbeule oben am Schienbein oder die Spitze der Kniescheibe weh?",
      },
    ],
    sources: ["malliaras2015", "kongsgaard2009", "backman2011"],
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
        "The tendon that joins your thigh muscles to the top of the kneecap has been loaded faster than it could adapt, often after more hills, stairs or deep squats than usual. It's much less common than the same problem below the kneecap and is usually treated the same way, in stages: holds in a shallow knee bend as a gentle first load, then slow heavy strength work, then soft landings from small hops before steep descents come back. If it started with a sudden pop and now you can't lift your leg with the knee straight, get it seen today.",
      load: "Easy runs on flat ground are usually fine within the pain rule. Drop steep descents, stair sessions and deep squats or lunges for now, and bring downhill back in short sections once your knee stays calm the next morning.",
    },
    de: {
      title:
        "Punktueller Schmerz über der Kniescheibe bei Treppen und Kniebeugen",
      desc: "Eine Stelle direkt am oberen Rand der Kniescheibe ist druckempfindlich. Das Knie ist zu Beginn des Laufs oft steif, wird warm besser und ist am nächsten Tag schlimmer, vor allem nach Bergabläufen, Treppen oder tiefen Kniebeugen.",
      name: "Quadrizepssehnen-Tendinopathie",
      about:
        "Die Sehne, die deine vordere Oberschenkelmuskulatur oben an der Kniescheibe verankert, wurde schneller belastet, als sie sich anpassen konnte, oft nach ungewohnt vielen Hügeln, Treppen oder tiefen Kniebeugen. Das ist deutlich seltener als dasselbe Problem unterhalb der Kniescheibe und wird meist genauso in Stufen behandelt: Halteübungen mit wenig Kniebeugung als sanfter Einstieg, dann langsames, schweres Krafttraining und schließlich weiche Landungen aus kleinen Hüpfern, bevor steile Abstiege zurückkommen. Hat es mit einem plötzlichen Knall angefangen und kannst du das gestreckte Bein jetzt nicht mehr anheben, lass es heute noch abklären.",
      load: "Lockere Läufe auf flachem Untergrund sind innerhalb der Schmerzregel meist in Ordnung. Steile Abstiege, Treppentraining und tiefe Kniebeugen oder Ausfallschritte vorerst weglassen und Bergabstücke in kurzen Abschnitten wieder einbauen, wenn das Knie am nächsten Morgen ruhig bleibt.",
    },
    local: ["wall-sit", "slow-leg-press", "hop-stick"],
    later: ["hop-stick"],
    linkExercises: {
      glutes: ["single-leg-bridge", "glute-bridge"],
    },
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
    sources: ["malliaras2015", "kongsgaard2009", "heiderscheit2011"],
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
    exits: [
      {
        to: "plateau-bsi-refer",
        en: "Does the pain build run after run, ache even at rest, or hurt when you hop on that leg?",
        de: "Wird der Schmerz von Lauf zu Lauf stärker, tut es auch in Ruhe weh oder schmerzt Hüpfen auf dem Bein?",
      },
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
      desc: "Sore deep in the back of the knee or at its inner or outer edge, often on one spot that hurts to press, and worse running downhill, going down stairs and on long trail runs. Pain at the bony bump on the outer side that flares after sprints or uphill running fits the outer hamstring tendon card better, and a lump behind the knee is worth having checked.",
      name: "Popliteus or distal hamstring tendinopathy",
      about:
        "Usually a tendon at the back of the knee is irritated: the small popliteus, which steadies the bent knee as it brakes on descents, or the lower end of a hamstring. Strength work that gets gradually heavier, plus fewer steep descents for a while, usually settles it. If it started with a twist, or the knee catches, locks or swells, get it checked soon, because a meniscus tear can also hurt here.",
      load: "Keep easy runs on flat, even ground within the pain rule. Cut steep descents and technical trails for now, walk the downhills if you need to, and bring them back in short sections once your knee stays calm the next morning.",
    },
    de: {
      title: "Dumpfer Schmerz in der Kniekehle nach Bergab- oder Trailläufen",
      desc: "Schmerzt tief in der Kniekehle oder an ihrem inneren oder äußeren Rand, oft an einer Stelle, die auf Druck wehtut, und ist beim Bergablaufen, Treppabgehen und auf langen Trails schlimmer. Schmerz am Knochenhöcker außen, der nach Sprints oder Bergaufläufen aufflammt, passt besser zur Karte für die äußere Sehne des hinteren Oberschenkels, und eine Beule in der Kniekehle sollte abgeklärt werden.",
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
    exits: [
      {
        to: "bakers-cyst-refer",
        en: "Has your calf suddenly become swollen, tight or warm, maybe after a lump behind the knee?",
        de: "Ist deine Wade plötzlich geschwollen, prall oder warm geworden, vielleicht nach einer Beule in der Kniekehle?",
      },
      {
        to: "meniscus-refer",
        en: "Did it start with a twist, or does the knee catch, lock or swell?",
        de: "Hat es mit einem Verdrehen angefangen, oder hakt, blockiert oder schwillt das Knie?",
      },
    ],
    sources: [
      "vernillo2017",
      "heiderscheit2011",
      "millar2021",
      "silbernagel2007",
    ],
  },
  {
    id: "hoffa",
    kind: "plan",
    en: {
      title:
        "Ache beside the tendon below the kneecap when you straighten fully",
      desc: "Sore on either side of the thick tendon just below the kneecap, where it can look a little puffy, while pressing on the tendon itself hurts less. Worse when the knee straightens fully, standing with locked knees and running downhill, and jumps or deep squats usually bother it less than tendon or kneecap pain.",
      name: "Infrapatellar fat pad syndrome (Hoffa's syndrome)",
      about:
        "A soft pad of fat sits behind and either side of the tendon below your kneecap. It can get pinched and irritated when the knee snaps fully straight, or past straight, over and over, for example running downhill or standing with locked knees. Avoiding that end position for a while and building thigh strength often settles it, typically within about 2–3 months, although no single programme has been well tested.",
      load: "Keep easy runs on flat ground within the pain rule, with slightly shorter, quicker steps so your knee lands softly bent. Cut downhill running for now and bring it back in short sections once the knee stays calm the next morning.",
      avoid:
        "Skip standing with locked knees, stretches that press the knee straight or past straight, and locking out at the top of squats and presses, because full straightening pinches the fat pad.",
    },
    de: {
      title: "Schmerz neben der Sehne unter der Kniescheibe beim Durchstrecken",
      desc: "Schmerzt links und rechts neben der dicken Sehne direkt unter der Kniescheibe, wo es etwas geschwollen aussehen kann, Druck auf die Sehne selbst tut dagegen weniger weh. Schlimmer, wenn das Knie ganz durchgestreckt wird, beim Stehen mit durchgedrückten Knien und beim Bergablaufen, während Sprünge und tiefe Kniebeugen meist weniger stören als bei Schmerzen an der Sehne oder hinter der Kniescheibe.",
      name: "Hoffa-Syndrom (Reizung des Hoffa-Fettkörpers unter der Kniescheibe)",
      about:
        "Hinter und neben der Sehne unter deiner Kniescheibe liegt ein weiches Fettpolster, der Hoffa-Fettkörper. Er kann eingeklemmt und gereizt werden, wenn das Knie immer wieder ganz oder sogar über die Streckung hinaus durchgedrückt wird, etwa bergab oder beim Stehen mit durchgedrückten Knien. Diese Endstellung eine Zeit lang zu meiden und die Oberschenkelmuskulatur zu kräftigen, bringt es oft zur Ruhe, meist innerhalb von etwa 2–3 Monaten, auch wenn kein einzelnes Programm gut untersucht ist.",
      load: "Lockere Läufe auf flachem Untergrund sind innerhalb der Schmerzregel in Ordnung, am besten mit etwas kürzeren, schnelleren Schritten, damit das Knie leicht gebeugt landet. Bergabläufe vorerst streichen und in kurzen Abschnitten zurückholen, wenn das Knie am nächsten Morgen ruhig bleibt.",
      avoid:
        "Lass Stehen mit durchgedrückten Knien, Dehnungen, die das Knie in die volle Streckung oder darüber hinaus drücken, und das Durchstrecken oben bei Kniebeugen und Beinpresse vorerst weg, denn genau die volle Streckung klemmt den Fettkörper ein.",
    },
    local: ["wall-sit", "split-squat", "hamstring-bridge"],
    chain: [
      [
        "quads",
        3,
        {
          en: "Strong quads let you hold the knee slightly bent under load instead of resting it locked straight, which keeps the fat pad from being pinched.",
          de: "Kräftige vordere Oberschenkelmuskeln halten das Knie unter Last leicht gebeugt, statt es durchgedrückt in die Streckung sacken zu lassen, und schonen so den Fettkörper.",
        },
      ],
      [
        "stride",
        2,
        {
          en: "With long strides your foot lands far in front of you on a nearly straight knee, the position that pinches the fat pad. Slightly shorter, quicker steps lower the load on the knee.",
          de: "Bei langen Schritten landet der Fuß weit vor dem Körper mit fast gestrecktem Knie, genau in der Stellung, die den Fettkörper einklemmt. Etwas kürzere, schnellere Schritte senken die Last auf das Knie.",
        },
      ],
      ["hams", 2],
    ],
    exits: [
      {
        to: "osgood-schlatter",
        en: "Are you under 16, with a sore bony bump at the top of the shin or a sore lower tip of the kneecap?",
        de: "Bist du unter 16 und tut dir eine Knochenbeule oben am Schienbein oder die Spitze der Kniescheibe weh?",
      },
    ],
    sources: ["abelleyralastoria2023", "heiderscheit2011", "silbernagel2007"],
  },
  {
    id: "knee-oa",
    kind: "plan",
    en: {
      title: "Deep, achy, stiff knee that loosens up once you get going",
      desc: "Stiff after sitting or first thing in the morning, usually easing within about half an hour of moving, with an ache that can build after long runs or the next day. Often felt on both sides of the joint, sometimes with crunching, and more common from about 45 or after an old knee injury.",
      name: "Knee osteoarthritis (arthritis of the knee)",
      about:
        "With osteoarthritis the joint surfaces and the tissues around them change, and the knee gets achier, stiffer and less tolerant of sudden jumps in load. Running is not the enemy: in pooled studies, recreational runners had less hip and knee arthritis than inactive people, and in a large study of people over 50 who already had knee arthritis, those who chose to run had no more pain and no faster X-ray changes over 4 years than those who didn't. Guidelines put exercise first, and strength and balance work twice a week for at least 6–8 weeks often eases pain and makes running more comfortable.",
      load: "Keep running as long as it stays within the pain rule, ideally on alternate days and on flat, even or softer surfaces. During a flare, swap some runs for walk-run intervals or cycling rather than stopping altogether.",
      avoid:
        "Don't run on a knee that locks, gives way or hurts at night, and have it checked by a doctor first. If it turns hot and swollen, or you feel feverish or unwell, get it seen the same day.",
    },
    de: {
      title:
        "Tiefer, dumpfer Schmerz im steifen Knie, der beim Bewegen nachlässt",
      desc: "Nach dem Sitzen oder morgens steif, meist besser nach spätestens einer halben Stunde Bewegung, dazu ein Schmerz, der nach langen Läufen oder am nächsten Tag zunehmen kann. Oft an beiden Seiten des Gelenks, manchmal mit Knirschen, und häufiger ab etwa 45 oder nach einer alten Knieverletzung.",
      name: "Kniearthrose (Gonarthrose)",
      about:
        "Bei einer Arthrose verändern sich die Gelenkflächen und das umliegende Gewebe, und das Knie wird schmerzempfindlicher, steifer und verträgt plötzliche Belastungssprünge schlechter. Laufen ist nicht der Feind: In zusammengefassten Studien hatten Freizeitlaufende seltener Hüft- und Kniearthrose als inaktive Menschen, und in einer großen Studie mit Menschen über 50, die schon eine Kniearthrose hatten, zeigten diejenigen, die von sich aus liefen, über 4 Jahre weder mehr Schmerzen noch schnellere Veränderungen im Röntgenbild als die anderen. Leitlinien setzen Training an die erste Stelle, und Kraft- und Gleichgewichtsübungen zweimal pro Woche über mindestens 6–8 Wochen lindern oft die Schmerzen und machen das Laufen angenehmer.",
      load: "Lauf weiter, solange die Schmerzregel hält, am besten jeden zweiten Tag und auf flachem, ebenem oder weicherem Untergrund. Wenn das Knie gerade aufflammt, ersetze lieber einige Läufe durch Geh-Lauf-Intervalle oder Radfahren, statt ganz aufzuhören.",
      avoid:
        "Lauf nicht mit einem Knie, das blockiert, wegknickt oder nachts wehtut, sondern lass es zuerst ärztlich abklären. Wird es heiß und geschwollen oder fühlst du dich fiebrig oder krank, lass es noch am selben Tag untersuchen.",
    },
    local: ["single-leg-sit-to-stand", "step-up", "balance-reach"],
    chain: [
      [
        "quads",
        3,
        {
          en: "Strong quads absorb shock before it reaches the joint surfaces. Weak thigh muscles are common with knee arthritis, and strengthening them is a core part of treatment.",
          de: "Kräftige vordere Oberschenkelmuskeln fangen Stöße ab, bevor sie die Gelenkflächen erreichen. Schwache Oberschenkel sind bei Kniearthrose häufig, und sie zu kräftigen ist ein Kernstück der Behandlung.",
        },
      ],
      ["hipabd", 2],
      [
        "foot",
        2,
        {
          en: "Balance and control drills are a core part of structured knee arthritis programmes, because a steadier leg lands more smoothly and twists less.",
          de: "Gleichgewichts- und Kontrollübungen sind ein Kernstück strukturierter Programme bei Kniearthrose, denn ein stabileres Bein landet ruhiger und verdreht sich weniger.",
        },
      ],
      ["stride", 1],
    ],
    exits: [
      {
        to: "meniscus-refer",
        en: "Did it start with a twist, or does the knee get stuck so it won't fully straighten?",
        de: "Hat es mit einem Verdrehen angefangen, oder bleibt das Knie hängen und lässt sich nicht ganz strecken?",
      },
      {
        to: "plateau-bsi-refer",
        en: "Does a spot on the bone just below the inner knee hurt when you hop, or does it ache at rest or at night?",
        de: "Tut eine Stelle am Knochen knapp unter dem Knie innen beim Hüpfen weh, oder schmerzt sie in Ruhe oder nachts?",
      },
    ],
    sources: ["bannuru2019", "skou2017", "alentorngeli2017", "lo2018"],
  },
  {
    id: "osgood-schlatter",
    kind: "plan",
    youth: true,
    en: {
      title: "Sore bony spot below the kneecap when you run, jump or kneel",
      desc: "For growing runners aged about 9–15: a bony bump at the top of the shin, or the lower tip of the kneecap, is sore to press and may look swollen. It hurts with running, jumping, stairs and kneeling, and eases with rest.",
      name: "Osgood-Schlatter disease or Sinding-Larsen-Johansson syndrome (irritated growth area at the knee)",
      about:
        "While you're growing, the strong tendon below your kneecap pulls on soft growth areas, either at the top of the shin (Osgood-Schlatter) or at the lower tip of the kneecap (Sinding-Larsen-Johansson), and lots of running and jumping can irritate them. It's common, not dangerous, and usually settles as you grow, although that can take months. In one study without a comparison group, 8 in 10 young athletes reported a good result after 12 weeks of a step-by-step activity plan plus knee and hip strength work, so you usually don't have to stop sport completely.",
      load: "Together with a parent or coach, cut running and jumping back to a level that stays within the pain rule, then add a little more every week or two. Go back to full training and races once the top step of your plan feels fine the next day.",
      avoid:
        "Skip kneeling on the sore spot for now. See a doctor with a parent soon if the knee hurts at night or at rest, and today if it's red and hot, you have a fever, or a sudden pop during a jump or sprint left you unable to straighten the knee.",
    },
    de: {
      title:
        "Schmerzende Knochenstelle unter der Kniescheibe beim Laufen, Springen oder Knien",
      desc: "Für Laufende im Wachstum, etwa 9–15 Jahre: Eine Knochenbeule oben am Schienbein oder die untere Spitze der Kniescheibe tut auf Druck weh und kann geschwollen aussehen. Laufen, Springen, Treppen und Knien tun weh, in Ruhe wird es besser.",
      name: "Morbus Osgood-Schlatter oder Sinding-Larsen-Johansson-Syndrom (gereizte Wachstumszone am Knie)",
      about:
        "Im Wachstum zieht die kräftige Sehne unter der Kniescheibe an weichen Wachstumszonen, entweder oben am Schienbein (Osgood-Schlatter) oder an der unteren Spitze der Kniescheibe (Sinding-Larsen-Johansson), und viel Laufen und Springen kann sie reizen. Das ist häufig, nicht gefährlich und geht meist mit dem Wachstum vorbei, auch wenn das Monate dauern kann. In einer Studie ohne Vergleichsgruppe berichteten 8 von 10 jungen Sportlerinnen und Sportlern nach 12 Wochen mit einem Stufenplan für ihre Aktivität und Kraftübungen für Knie und Hüfte von einem guten Ergebnis, du musst also meist nicht ganz mit dem Sport aufhören.",
      load: "Schraub Laufen und Springen gemeinsam mit deinen Eltern oder deinem Trainer oder deiner Trainerin so weit zurück, dass die Schmerzregel hält, und steigere dann alle ein bis zwei Wochen ein kleines Stück. Zurück zum vollen Training und zu Wettkämpfen geht es, wenn sich die oberste Stufe deines Plans auch am nächsten Tag gut anfühlt.",
      avoid:
        "Vermeide vorerst, auf der schmerzenden Stelle zu knien. Geh mit deinen Eltern bald zur Ärztin oder zum Arzt, wenn das Knie nachts oder in Ruhe wehtut, und noch heute, wenn es rot und heiß ist, du Fieber hast oder du nach einem plötzlichen Knall beim Springen oder Sprinten das Knie nicht mehr strecken kannst.",
    },
    local: ["wall-sit", "glute-bridge", "split-squat"],
    later: ["split-squat"],
    chain: [
      ["quads", 2],
      ["glutes", 2],
    ],
    exits: [
      {
        to: "tubercle-avulsion-refer",
        en: "Did a sudden pop at the bony bump below your kneecap leave you unable to straighten the knee or walk normally?",
        de: "Hat es an der Knochenbeule unter der Kniescheibe geknallt, und kannst du das Knie seitdem kaum strecken oder gehen?",
      },
      {
        to: "scfe-refer",
        en: "Do you limp, or do your hip, groin or thigh hurt as well?",
        de: "Hinkst du, oder tun dir auch Hüfte, Leiste oder Oberschenkel weh?",
      },
    ],
    sources: ["rathleff2020", "wilczynski2024"],
  },
  {
    id: "patellar-dislocation-refer",
    kind: "refer",
    urgency: "soon",
    en: {
      title: "Feeling your kneecap slip out of place, often during a twist",
      desc: "The kneecap jumped out to the outer side, either staying out or popping back in, usually as you twisted on a bent knee, and the knee often swells within hours. It can also be a knee that keeps feeling as if the kneecap shifts sideways or gives way.",
      name: "Patellar dislocation or subluxation (kneecap dislocation)",
      about:
        "When the kneecap slips out of its groove, the tissue that holds it on the inner side often tears, and a small piece of cartilage or bone can chip off. A doctor or physio should examine the knee, and a scan is often needed to check for damage. Many people do well with a structured strength programme, but after a first dislocation it slips out again in around 1 in 3 people in some studies, so it's worth talking through the options.",
      meanwhile:
        "Pause running, pivoting and jumping until you've been seen. Walking and easy cycling are fine if they don't hurt or make the knee swell. If the kneecap is still out of place, go to an emergency department now. If the knee is locked, won't straighten or swelled up fast, get it seen today.",
    },
    de: {
      title: "Gefühl, dass die Kniescheibe herausspringt, oft beim Verdrehen",
      desc: "Die Kniescheibe ist nach außen gesprungen und blieb draußen oder rutschte von selbst zurück, meist als du dich auf dem gebeugten Knie gedreht hast, und das Knie schwillt oft innerhalb von Stunden an. Es kann auch ein Knie sein, bei dem sich die Kniescheibe immer wieder seitlich verschiebt oder das Knie wegknickt.",
      name: "Patellaluxation oder -subluxation (Kniescheibenverrenkung)",
      about:
        "Springt die Kniescheibe aus ihrer Gleitrinne, reißt oft das Gewebe, das sie innen hält, und es kann ein kleines Stück Knorpel oder Knochen absplittern. Das Knie sollte ärztlich oder physiotherapeutisch untersucht werden, und oft ist eine Bildgebung nötig, um Schäden zu erkennen. Viele kommen mit gezieltem Krafttraining gut zurecht, doch nach einer ersten Verrenkung springt die Kniescheibe in manchen Studien bei etwa jeder dritten Person erneut heraus, deshalb lohnt es sich, die Möglichkeiten in Ruhe zu besprechen.",
      meanwhile:
        "Pausiere Laufen, Drehbewegungen und Sprünge, bis du untersucht wurdest. Gehen und lockeres Radfahren sind in Ordnung, solange sie nicht wehtun und das Knie nicht anschwillt. Ist die Kniescheibe noch nicht wieder an ihrem Platz, geh sofort in die Notaufnahme. Blockiert das Knie, lässt es sich nicht strecken oder ist es schnell dick geworden, lass es heute noch abklären.",
    },
    sources: ["moiz2018", "smith2015"],
  },
  {
    id: "bakers-cyst-refer",
    kind: "refer",
    urgency: "today",
    en: {
      title: "Tightness behind the knee, then sudden calf pain and swelling",
      desc: "A full, tight feeling or a lump behind the knee, and then a calf that suddenly turns painful, swollen, tight or warm, sometimes with bruising down towards the ankle. It can follow a run, a deep squat or no clear trigger at all.",
      name: "Baker's cyst or ruptured Baker's cyst (popliteal cyst)",
      about:
        "A Baker's cyst is a pocket of joint fluid that bulges out at the back of the knee, often because something inside the knee, such as arthritis or a meniscus tear, keeps the joint irritated. When it bursts, the fluid runs down into the calf, and that can look and feel so much like a blood clot that often only an ultrasound scan can tell them apart, and the two can even happen together. Once a clot is ruled out, a burst cyst usually settles on its own, and the knee problem behind it can then be treated.",
      meanwhile:
        "Get checked today, by your doctor, an urgent care clinic or an emergency department, and ask for an ultrasound scan to rule out a blood clot, even if you already know you have a Baker's cyst. Until then, don't run, and rest with the leg raised. With sudden shortness of breath, chest pain or coughing up blood, call emergency services now. A lump behind the knee with no calf pain or swelling is not urgent: book a physio or doctor within a couple of weeks.",
      avoid:
        "Don't massage, stretch or foam-roll the calf until a blood clot has been ruled out.",
    },
    de: {
      title:
        "Spannung in der Kniekehle, dann plötzlich schmerzende, dicke Wade",
      desc: "Ein volles, gespanntes Gefühl oder eine Beule in der Kniekehle, und dann wird die Wade plötzlich schmerzhaft, geschwollen, prall oder warm, manchmal mit einem Bluterguss Richtung Knöchel. Das kann nach einem Lauf, einer tiefen Hocke oder ganz ohne klaren Auslöser passieren.",
      name: "Baker-Zyste oder geplatzte Baker-Zyste (Poplitealzyste)",
      about:
        "Eine Baker-Zyste ist eine Aussackung mit Gelenkflüssigkeit, die sich in der Kniekehle vorwölbt, oft weil etwas im Knie, etwa eine Arthrose oder ein Meniskusriss, das Gelenk gereizt hält. Platzt sie, läuft die Flüssigkeit in die Wade, und das kann einer Thrombose so ähneln, dass oft nur ein Ultraschall die beiden sicher unterscheiden kann, zumal beides auch gleichzeitig auftreten kann. Ist eine Thrombose ausgeschlossen, beruhigt sich eine geplatzte Zyste meist von selbst, und das Knieproblem dahinter lässt sich dann behandeln.",
      meanwhile:
        "Lass es heute noch abklären, in der Hausarztpraxis, einer Notfallpraxis oder der Notaufnahme, und bitte um einen Ultraschall, um eine Thrombose auszuschließen, auch wenn du schon weißt, dass du eine Baker-Zyste hast. Bis dahin nicht laufen und das Bein hochlegen. Bei plötzlicher Atemnot, Brustschmerzen oder Bluthusten sofort den Notruf 112 wählen. Eine Beule in der Kniekehle ohne Wadenschmerz oder Schwellung ist nicht eilig: Dann reicht ein Termin in der Physiotherapie oder Arztpraxis innerhalb von etwa zwei Wochen.",
      avoid:
        "Wade nicht massieren, dehnen oder mit der Faszienrolle bearbeiten, bis eine Thrombose ausgeschlossen ist.",
    },
    warn: ["clot"],
    sources: ["zmerly2026", "bansal2021"],
  },
  {
    id: "medial-plica",
    kind: "plan",
    en: {
      title:
        "Painful catch or snap at the inner edge of the kneecap as you bend",
      desc: "Sore along the inner edge of the kneecap, with a click, catch or snap as the knee bends and straightens, often worse after long sitting, cycling or lots of squatting. Unlike a meniscus problem, it sits above the joint gap and usually didn't start with a twist or swelling.",
      name: "Medial plica syndrome (irritated fold in the knee lining)",
      about:
        "A plica is a normal fold in the knee's lining, and on the inner side it can thicken and get irritated by lots of repeated bending, so it catches over the thigh bone. Most people do well with the same strength and load programme used for kneecap pain, and in pooled studies this kind of care without surgery did about as well as keyhole surgery after 1–2 years. If painful snapping is still there after about 3 months of steady work, see a sports doctor or orthopaedic specialist.",
      load: "Keep easy runs on flat ground within the pain rule. For a few weeks, cut back on things that bend the knee a lot over and over, such as hills, deep squats, long stair sessions or a bike saddle set too low.",
      avoid:
        "Skip deep squats and long spells of kneeling or sitting with the knee sharply bent for now, because deep bending makes the fold catch.",
    },
    de: {
      title: "Schmerzhaftes Schnappen innen an der Kniescheibe beim Beugen",
      desc: "Schmerzt am inneren Rand der Kniescheibe, dazu ein Klicken, Haken oder Schnappen beim Beugen und Strecken, oft schlimmer nach langem Sitzen, Radfahren oder vielen Kniebeugen. Anders als beim Meniskus liegt es oberhalb des Gelenkspalts und begann meist ohne Verdrehen oder Schwellung.",
      name: "Plica-Syndrom (Plica mediopatellaris, gereizte Schleimhautfalte im Knie)",
      about:
        "Eine Plica ist eine normale Falte der Gelenkschleimhaut, die innen durch viel wiederholtes Beugen verdicken und gereizt werden kann, sodass sie über den Oberschenkelknochen schnappt. Den meisten hilft dasselbe Kraft- und Belastungsprogramm wie bei Schmerzen hinter der Kniescheibe, und in zusammengefassten Studien schnitt diese konservative Behandlung nach 1–2 Jahren etwa so gut ab wie eine Arthroskopie. Schnappt und schmerzt es nach etwa 3 Monaten konsequenten Trainings noch, lass dich sportmedizinisch oder orthopädisch untersuchen.",
      load: "Lockere Läufe auf flachem Untergrund sind innerhalb der Schmerzregel in Ordnung. Reduziere ein paar Wochen lang, was das Knie immer wieder stark beugt, etwa Hügel, tiefe Kniebeugen, lange Treppeneinheiten oder einen zu niedrigen Fahrradsattel.",
      avoid:
        "Tiefe Kniebeugen sowie langes Knien oder Sitzen mit stark gebeugtem Knie vorerst meiden, weil die Falte bei starker Beugung hängen bleibt.",
    },
    local: ["wall-sit", "step-down", "step-up"],
    later: ["split-squat"],
    chain: [
      ["quads", 3],
      ["hipabd", 2],
    ],
    exits: [
      {
        to: "meniscus-refer",
        en: "Did it start with a twist, or does the knee lock, give way or swell?",
        de: "Hat es mit einem Verdrehen angefangen, oder blockiert das Knie, knickt es weg oder schwillt es an?",
      },
      {
        to: "patellar-dislocation-refer",
        en: "Has your kneecap slipped out of place, even briefly, or does it feel like it shifts sideways?",
        de: "Ist dir die Kniescheibe herausgesprungen, auch nur kurz, oder fühlt es sich an, als rutsche sie seitlich weg?",
      },
    ],
    sources: ["franco2025", "blanke2021", "crossley2016", "willy2019"],
  },
  {
    id: "mcl-sprain",
    kind: "plan",
    en: {
      title: "Sore inner knee after a twist or fall, but the knee feels stable",
      desc: "Tender along the inner side of the knee, above or below the joint gap, after a slip, twist or fall, often on a trail. It hurts when the knee is pushed inward, but it doesn't lock, catch or give way and only swells a little, if at all.",
      name: "Medial collateral ligament (MCL) sprain, grade I–II (inner knee ligament sprain)",
      about:
        "The strong ligament on the inner side of the knee has been overstretched, with mild to moderate damage to some of its fibres. Mild and moderate sprains usually heal well without surgery, with gradual loading and strength work. In older studies athletes were back after about 10 days with a mild sprain and about 3 weeks with a moderate one, so expect weeks rather than months.",
      load: "Walking and cycling are fine as soon as they're comfortable, and you can start short, easy runs on flat, even ground once walking is pain-free and a gentle hop doesn't hurt. Bring back trails, cambered roads and sharp turns last.",
      avoid:
        "Skip twisting, pivoting and side-to-side drills for now, and get the knee checked within a few days if it gives way or you felt a pop when it happened, because another ligament may be hurt as well. If you're under 18 and still growing, get it checked within a few days anyway, because at that age the growth plate right next to the ligament can be hurt instead.",
    },
    de: {
      title:
        "Schmerz innen am Knie nach Verdrehen oder Sturz, Knie bleibt stabil",
      desc: "Druckschmerz an der Innenseite des Knies, ober- oder unterhalb des Gelenkspalts, nach einem Ausrutschen, Verdrehen oder Sturz, oft auf dem Trail. Es tut weh, wenn das Knie nach innen gedrückt wird, aber es blockiert nicht, hakt nicht, knickt nicht weg und schwillt höchstens leicht an.",
      name: "Innenbandzerrung oder -teilriss, Grad I–II (Verletzung des medialen Kollateralbands)",
      about:
        "Das kräftige Band an der Innenseite des Knies wurde überdehnt, wobei ein Teil seiner Fasern leicht bis mäßig verletzt ist. Leichte und mittlere Verletzungen heilen meist gut ohne Operation, mit schrittweiser Belastung und Krafttraining. In älteren Studien dauerte die Rückkehr zum Sport bei einer leichten Zerrung etwa 10 Tage und bei einer mittleren etwa 3 Wochen, rechne also eher mit Wochen als mit Monaten.",
      load: "Gehen und Radfahren sind in Ordnung, sobald sie sich gut anfühlen, und mit kurzen, lockeren Läufen auf flachem, ebenem Untergrund kannst du beginnen, wenn Gehen schmerzfrei ist und ein vorsichtiger Hüpfer nicht wehtut. Trails, Wege mit Seitenneigung und enge Kurven kommen zuletzt zurück.",
      avoid:
        "Drehbewegungen, Richtungswechsel und seitliche Sprünge vorerst weglassen, und lass das Knie innerhalb weniger Tage abklären, wenn es wegknickt oder du bei der Verletzung einen Knall gespürt hast, weil dann auch ein anderes Band verletzt sein kann. Bist du unter 18 und noch im Wachstum, lass es in jedem Fall innerhalb weniger Tage abklären, weil in diesem Alter statt des Bands auch die Wachstumsfuge direkt daneben verletzt sein kann.",
    },
    local: ["wall-sit", "step-up", "balance-reach", "hop-stick"],
    later: ["hop-stick", "side-plank"],
    chain: [
      ["quads", 3],
      [
        "hipabd",
        2,
        {
          en: "If the side-hip muscles can't keep your pelvis level, the knee can drift inward on every landing, which stretches the healing ligament on the inner side.",
          de: "Halten die seitlichen Hüftmuskeln das Becken nicht stabil, kann das Knie bei jeder Landung nach innen kippen und das heilende Band an der Innenseite dehnen.",
        },
      ],
      [
        "foot",
        2,
        {
          en: "After a ligament sprain, balance and reactions often drop for a while. Training them helps the knee cope with roots, stones and uneven trails.",
          de: "Nach einer Bandverletzung sind Gleichgewicht und Reaktion oft eine Zeit lang schlechter. Training hilft dem Knie, mit Wurzeln, Steinen und unebenen Trails zurechtzukommen.",
        },
      ],
    ],
    exits: [
      {
        to: "acl-refer",
        en: "When it happened, did you feel a pop, or did the knee swell up within a few hours or give way?",
        de: "Hast du dabei einen Knall gespürt, oder ist das Knie innerhalb weniger Stunden dick geworden oder weggeknickt?",
      },
      {
        to: "meniscus-refer",
        en: "Does the knee catch, or lock so it won't fully straighten?",
        de: "Hakt das Knie, oder blockiert es, sodass es sich nicht ganz strecken lässt?",
      },
      {
        to: "patellar-dislocation-refer",
        en: "Did your kneecap slip out of place when it happened, even if it popped straight back?",
        de: "Ist dir dabei die Kniescheibe herausgesprungen, auch wenn sie gleich zurückgerutscht ist?",
      },
    ],
    sources: ["logerstedt2017", "logerstedt2018"],
  },
  {
    id: "biceps-femoris-tendon",
    kind: "plan",
    en: {
      title:
        "Ache at the outer back of the knee after speed work or uphill runs",
      desc: "Aches at the outer back of the knee near the bony bump just below the joint, sometimes spreading a little above or below it, and a single-leg bridge often brings it on. It eases once warm but is worse afterwards, especially after sprints, uphill running or hard push-offs, while pain from the band on the outside of the knee (ITBS) starts at a set point in the run and doesn't ease as you warm up.",
      name: "Distal biceps femoris tendinopathy (outer hamstring tendon)",
      about:
        "The outer hamstring tendon attaches to the bony bump at the top of the outer shin (the head of the fibula), and fast running, hills and hard push-offs can overload it. There is very little research on this tendon, so this plan borrows the gradual programme that helps hamstring tendon pain higher up: holds first, then slow heavy strength work, while you trim the speed sessions. Most tendon problems settle over weeks to a few months with this kind of loading.",
      load: "Keep easy runs on flat ground within the pain rule, and drop sprints, strides, steep hills and fast downhill running first. Bring speed back in short, easy doses once the knee stays calm the next morning.",
      avoid:
        "Skip hard hamstring stretches and Nordic curls for now, because deep stretching and fast, heavy lengthening can flare an irritated tendon.",
    },
    de: {
      title:
        "Schmerz hinten außen am Knie nach Tempotraining oder Bergaufläufen",
      desc: "Schmerzt hinten an der Knieaußenseite nahe dem Knochenhöcker direkt unter dem Gelenk, manchmal etwas darüber oder darunter, und eine einbeinige Brücke löst den Schmerz oft aus. Warm wird es besser, danach aber schlimmer, vor allem nach Sprints, Bergaufläufen oder kräftigem Abdrücken, während Schmerzen am Band an der Knieaußenseite (ITBS) an einem festen Punkt im Lauf einsetzen und beim Warmlaufen nicht nachlassen.",
      name: "Tendinopathie der distalen Bizeps-femoris-Sehne (äußere Sehne des hinteren Oberschenkels)",
      about:
        "Die äußere Sehne der hinteren Oberschenkelmuskulatur setzt am Knochenhöcker oben außen am Unterschenkel an, dem Wadenbeinköpfchen, und schnelles Laufen, Hügel und kräftiges Abdrücken können sie überlasten. Zu dieser Sehne gibt es kaum Forschung, deshalb übernimmt dieser Plan das schrittweise Programm, das bei Sehnenschmerzen weiter oben am hinteren Oberschenkel hilft: erst Halteübungen, dann langsames, schweres Krafttraining, und dazu weniger Tempoeinheiten. Die meisten Sehnenprobleme bessern sich mit dieser Art Belastung über Wochen bis wenige Monate.",
      load: "Lockere Läufe auf flachem Untergrund sind innerhalb der Schmerzregel in Ordnung. Sprints, Steigerungsläufe, steile Hügel und schnelles Bergablaufen zuerst streichen und Tempo in kleinen, lockeren Portionen zurückholen, wenn das Knie am nächsten Morgen ruhig bleibt.",
      avoid:
        "Kräftiges Dehnen des hinteren Oberschenkels und Nordic Curls vorerst weglassen, weil starke Dehnung und schnelle, schwere Verlängerung eine gereizte Sehne aufflammen lassen können.",
    },
    local: ["hamstring-bridge-hold", "slow-rdl", "hamstring-bridge"],
    later: ["hamstring-bridge"],
    linkExercises: {
      glutes: ["glute-bridge", "step-up"],
    },
    chain: [
      [
        "glutes",
        2,
        {
          en: "Strong glutes do much of the work of pushing off and driving you uphill. When they're weak, the hamstrings take over more of it, and their tendon at the knee pulls harder.",
          de: "Kräftige Gesäßmuskeln leisten einen Großteil der Arbeit beim Abdrücken und bergauf. Sind sie schwach, übernimmt die hintere Oberschenkelmuskulatur mehr davon, und ihre Sehne am Knie zieht stärker.",
        },
      ],
      ["trunk", 1],
    ],
    exits: [
      {
        to: "ptfj-refer",
        en: "Does the bony bump on the outer knee click, shift or feel as if it pops out?",
        de: "Klickt oder verschiebt sich der Knochenhöcker außen am Knie, oder fühlt es sich an, als springe er heraus?",
      },
      {
        to: "peroneal-nerve-refer",
        en: "Do you get tingling or numbness on the top of the foot or down the outer shin?",
        de: "Kribbelt es oder ist es taub auf dem Fußrücken oder an der Außenseite des Schienbeins?",
      },
    ],
    sources: ["goom2016", "millar2021", "silbernagel2007"],
  },
  {
    id: "ptfj-refer",
    kind: "refer",
    urgency: "routine",
    en: {
      title: "Clicking or shifting at the bony bump just below the outer knee",
      desc: "Pain, clicking or a feeling that something shifts or pops out at the bony bump on the outer side, just below the knee joint, worse in squats, twisting or cutting. It can start after a twisting fall on a bent knee or build up without one.",
      name: "Proximal tibiofibular joint instability (unstable joint at the top of the fibula)",
      about:
        "Just below the outer knee, the thin outer shin bone (the fibula) meets the main shin bone in a small joint that can become loose or irritated, often after a twist. It's uncommon and often missed, because it looks like other outer-knee problems, so it's worth having a sports physio or sports doctor examine it, and a scan is sometimes needed. Many cases improve with strength and control work once the diagnosis is clear, but ongoing instability sometimes needs a surgeon's opinion.",
      meanwhile:
        "Book a sports physio or sports doctor within the next 1–3 weeks. Until then, keep running on flat, even ground as long as it stays within the pain rule and nothing clicks or shifts, and skip deep squats, twisting and side-to-side drills. If it started with a fall and the bump now looks out of place, or your outer shin or foot goes numb or weak, get it seen today.",
    },
    de: {
      title:
        "Klicken oder Verrutschen am Knochenhöcker unter der Knieaußenseite",
      desc: "Schmerz, Klicken oder das Gefühl, dass etwas verrutscht oder herausspringt, am Knochenhöcker außen direkt unterhalb des Kniegelenks, schlimmer in der Hocke, bei Drehungen oder Richtungswechseln. Es kann nach einem Sturz mit verdrehtem, gebeugtem Knie beginnen oder sich ohne Unfall entwickeln.",
      name: "Instabilität des proximalen Tibiofibulargelenks (Wadenbeinköpfchen-Instabilität)",
      about:
        "Direkt unterhalb der Knieaußenseite trifft das dünne Wadenbein in einem kleinen Gelenk auf das Schienbein, und dieses Gelenk kann locker oder gereizt sein, oft nach einem Verdrehen. Das ist selten und wird oft übersehen, weil es anderen Problemen an der Knieaußenseite ähnelt, deshalb sollte es in der Sportphysiotherapie oder sportmedizinischen Praxis untersucht werden, manchmal braucht es auch eine Bildgebung. Viele Fälle bessern sich mit Kraft- und Kontrolltraining, sobald die Diagnose klar ist, eine anhaltende Instabilität braucht aber manchmal eine chirurgische Einschätzung.",
      meanwhile:
        "Vereinbare innerhalb der nächsten 1–3 Wochen einen Termin in der Sportphysiotherapie oder sportmedizinischen Praxis. Bis dahin kannst du auf flachem, ebenem Untergrund weiterlaufen, solange die Schmerzregel hält und nichts klickt oder verrutscht, aber tiefe Kniebeugen, Drehbewegungen und seitliche Sprünge lässt du weg. Hat es mit einem Sturz begonnen und steht der Höcker jetzt sichtbar anders, oder werden Unterschenkelaußenseite oder Fuß taub oder schwach, lass es heute noch abklären.",
    },
    sources: ["curatolo2018", "silbernagel2007"],
  },
  {
    id: "acl-refer",
    kind: "refer",
    urgency: "soon",
    en: {
      title: "Pop in the knee on a twist or fall, then swelling and giving way",
      desc: "Happened in one moment, often a slip or fall on a trail, a twist on uneven ground or a sudden stop or turn, and the knee usually swelled up within a few hours. Since then it may feel loose or give way when you turn or step down, unlike an inner-knee sprain, which stays stable and barely swells, or a meniscus tear, which more often catches or locks.",
      name: "Anterior cruciate ligament tear (torn ACL)",
      about:
        "This pattern can fit a tear of the ACL, the ligament in the middle of the knee that stops the shinbone sliding forward and twisting under the thigh, sometimes together with damage to a meniscus or another ligament. A physio or sports doctor can usually tell from a few hands-on tests whether it's likely and whether you need an MRI scan. Many people do well with a structured rehab programme first, and some later choose an operation to rebuild the ligament, especially if the knee keeps giving way or they want to get back to sports with lots of turning, so it's worth talking the options through.",
      meanwhile:
        "Stop running, jumping and sports with turns until you've been seen, ideally within a few days. Walk as much as is comfortable, with crutches if walking hurts, and gently bend and straighten the knee within comfort to keep it moving. Ice wrapped in a cloth and resting with the leg raised can ease the swelling. Get it seen today if the knee is locked so it won't straighten, you can't take 4 steps on it, or it swelled up big and tight within an hour or two.",
      avoid:
        "Skip twisting, pivoting and walking on rough, uneven ground until the knee has been checked, because each time it gives way it can further damage the meniscus or cartilage.",
    },
    de: {
      title: "Knall im Knie beim Verdrehen oder Sturz, dann dick und instabil",
      desc: "Passierte in einem Moment, oft beim Ausrutschen oder Sturz auf dem Trail, beim Verdrehen auf unebenem Boden oder bei einem abrupten Stopp oder Richtungswechsel, und das Knie ist meist innerhalb weniger Stunden angeschwollen. Seitdem fühlt es sich vielleicht wackelig an oder knickt beim Drehen oder Hinuntersteigen weg, anders als bei einer Innenbandzerrung, bei der das Knie stabil bleibt und kaum anschwillt, oder bei einem Meniskusriss, bei dem das Knie eher hakt oder blockiert.",
      name: "Ruptur des vorderen Kreuzbands (Kreuzbandriss)",
      about:
        "Dieses Muster kann zu einem Riss des vorderen Kreuzbands passen, des Bandes in der Mitte des Knies, das verhindert, dass das Schienbein unter dem Oberschenkel nach vorn rutscht oder sich wegdreht, manchmal zusammen mit einer Verletzung des Meniskus oder eines anderen Bandes. In der Physiotherapie oder sportmedizinischen Praxis lässt sich mit ein paar Handgriffen meist klären, ob das wahrscheinlich ist und ob es ein MRT braucht. Viele kommen zunächst mit einem gezielten Rehaprogramm gut zurecht, und manche entscheiden sich später für eine Operation, bei der das Band ersetzt wird, vor allem wenn das Knie immer wieder wegknickt oder sie zu Sportarten mit vielen Richtungswechseln zurückwollen. Es lohnt sich also, die Möglichkeiten in Ruhe zu besprechen.",
      meanwhile:
        "Pausiere Laufen, Springen und Sport mit Richtungswechseln, bis du untersucht wurdest, am besten innerhalb weniger Tage. Geh so viel, wie es angenehm ist, bei Schmerzen mit Unterarmgehstützen, und beuge und strecke das Knie sanft im angenehmen Bereich, damit es beweglich bleibt. Kühlen mit in ein Tuch gewickeltem Eis und Hochlagern können die Schwellung lindern. Lass es heute noch abklären, wenn das Knie blockiert und sich nicht strecken lässt, du keine 4 Schritte darauf schaffst oder es innerhalb von ein, zwei Stunden stark und prall angeschwollen ist.",
      avoid:
        "Verzichte auf Drehbewegungen, Richtungswechsel und Gehen auf unebenem Gelände, bis das Knie untersucht ist, denn jedes Wegknicken kann Meniskus oder Knorpel zusätzlich schädigen.",
    },
    exits: [
      {
        to: "patellar-dislocation-refer",
        en: "Did your kneecap slip out of place when it happened, even if it popped straight back?",
        de: "Ist dir dabei die Kniescheibe herausgesprungen, auch wenn sie gleich zurückgerutscht ist?",
      },
    ],
    sources: ["logerstedt2017", "filbay2019"],
  },
  {
    id: "tubercle-avulsion-refer",
    kind: "refer",
    urgency: "today",
    youth: true,
    en: {
      title: "Sudden pop below the kneecap on a jump, now hard to straighten",
      desc: "You're under 18 and felt a sudden pop and sharp pain at the bony bump below your kneecap while taking off for a jump, landing or sprinting. The knee swells quickly, and straightening it, lifting the straight leg or walking is hard, unlike Osgood-Schlatter, which builds up slowly and lets you keep walking.",
      name: "Tibial tubercle avulsion fracture (growth area below the kneecap pulled off)",
      about:
        "Near the end of your growth spurt, the growth area at the top of the shin where the kneecap tendon attaches can be weaker than the tendon, and one very hard pull of the thigh muscle can tear off a piece of bone there. It's rare, mostly affects teenage boys during sport, especially jumping, and can happen with or without earlier Osgood-Schlatter pain. It needs an X-ray today, and the piece usually has to be fixed back in place with an operation, but the outlook is good: in one large review almost every bone healed and nearly all teens in the studies that checked got back to sport, although some needed a second operation later.",
      meanwhile:
        "Stop sport straight away, don't try to walk it off, and go to an emergency department now with a parent. Keep the leg as still as you can, straight or slightly bent, whichever is more comfortable, and use crutches or get help to move. Ice wrapped in a cloth can ease the pain. If the shin below the knee swells up tight, the pain keeps getting worse even when you keep still, or your foot tingles, goes numb or turns pale or cold, call emergency services, or tell the staff at once if you're already there.",
      avoid:
        "Don't force the knee straight, kneel on it or test it with jumps until an X-ray has checked the bone.",
    },
    de: {
      title:
        "Knall unter der Kniescheibe beim Absprung, Knie kaum noch zu strecken",
      desc: "Du bist unter 18 und hast beim Absprung, bei der Landung oder beim Sprinten plötzlich einen Knall und einen scharfen Schmerz an der Knochenbeule unter der Kniescheibe gespürt. Das Knie schwillt schnell an, und es fällt dir schwer, es zu strecken, das gestreckte Bein anzuheben oder zu gehen, anders als bei Osgood-Schlatter, das sich langsam aufbaut und bei dem du weiter gehen kannst.",
      name: "Ausrissfraktur der Tuberositas tibiae (Wachstumszone unter der Kniescheibe abgerissen)",
      about:
        "Gegen Ende des Wachstumsschubs kann die Wachstumszone oben am Schienbein, an der die Kniescheibensehne ansetzt, schwächer sein als die Sehne selbst, und ein einziger sehr kräftiger Zug des Oberschenkelmuskels kann dort ein Knochenstück abreißen. Das ist selten, betrifft vor allem Jungen im Teenageralter beim Sport, besonders beim Springen, und kann mit oder ohne frühere Osgood-Schlatter-Beschwerden auftreten. Es braucht heute noch ein Röntgenbild, und meist muss das Knochenstück operativ wieder befestigt werden, die Aussichten sind aber gut: In einer großen Übersichtsarbeit heilte fast jeder Knochen, und fast alle Jugendlichen in den Studien, die das erfasst hatten, kehrten zum Sport zurück, manche brauchten allerdings später eine zweite Operation.",
      meanwhile:
        "Hör sofort mit dem Sport auf, lauf nicht weiter und lass dich gleich von einem Elternteil in die Notaufnahme bringen. Halte das Bein möglichst ruhig, gestreckt oder leicht gebeugt, je nachdem, was angenehmer ist, und nimm Unterarmgehstützen oder lass dir helfen. Kühlen mit in ein Tuch gewickeltem Eis kann den Schmerz lindern. Schwillt das Schienbein unter dem Knie prall an, wird der Schmerz auch in Ruhe immer stärker oder kribbelt dein Fuß, wird er taub, blass oder kalt, wähl den Notruf 112, oder sag sofort dem Personal Bescheid, wenn du schon dort bist.",
      avoid:
        "Zwing das Knie nicht in die Streckung, knie nicht darauf und teste es nicht mit Sprüngen, bis ein Röntgenbild den Knochen geprüft hat.",
    },
    sources: ["kalifis2023", "delosreyes2023"],
  },
  {
    id: "plateau-bsi-refer",
    kind: "refer",
    urgency: "soon",
    en: {
      title:
        "Ache on the bone just below the inner knee that builds run by run",
      desc: "The bone just below the inner side of the knee joint is sore to press, hopping on that leg hurts there, and the ache builds during each run and then with walking too, often after more running or a new training block. Unlike knee arthritis it doesn't loosen up once you're moving, and unlike tendon pain in the same spot it gets worse from run to run and can ache at rest or at night.",
      name: "Bone stress injury of the proximal tibia or medial tibial plateau (stress fracture just below the knee)",
      about:
        "This pattern can mean the top of the shinbone, just below the knee joint, has been loaded faster than it could rebuild, ranging from a stress reaction to a small crack. In older runners or those with thinner bones a crack can also form under fairly normal loads (an insufficiency fracture), and because early X-rays often look normal, it can be mistaken for a meniscus, tendon or arthritis problem until an MRI shows it. Caught early, it usually heals with less impact and a gradual return over weeks to a few months, and a doctor should also check your bone health and whether you eat enough for your training.",
      meanwhile:
        "Stop running and avoid hopping and jumping until a doctor or physio has seen you, ideally within a few days. Walking is fine if it doesn't hurt, and cycling or swimming keep you fit if they're pain-free. If even normal walking hurts or the knee aches at rest, see a doctor within a day or two and use crutches until then. Tell them about any recent jump in training, earlier stress fractures, low bone density, eating too little or missed periods.",
      avoid:
        "Skip deep squats, lunges and hopping until it has been checked, because they put a lot of load on the top of the shinbone.",
    },
    de: {
      title: "Knochenschmerz innen unter dem Knie, der mit jedem Lauf zunimmt",
      desc: "Der Knochen knapp unterhalb der Innenseite des Kniegelenks ist druckempfindlich, Hüpfen auf dem Bein tut dort weh, und der Schmerz nimmt bei jedem Lauf zu und später auch beim Gehen, oft nach mehr Laufen oder einem neuen Trainingsblock. Anders als bei einer Kniearthrose lässt er nicht nach, wenn du in Bewegung bist, und anders als ein Sehnenschmerz an derselben Stelle wird er von Lauf zu Lauf stärker und kann auch in Ruhe oder nachts wehtun.",
      name: "Knochenstressverletzung am Tibiakopf oder medialen Tibiaplateau (Ermüdungsbruch knapp unter dem Knie)",
      about:
        "Dieses Muster kann bedeuten, dass das obere Schienbein knapp unter dem Kniegelenk schneller belastet wurde, als es sich umbauen konnte, von einer Stressreaktion bis zu einem feinen Riss. Bei älteren Laufenden oder geringerer Knochendichte kann ein solcher Riss auch schon bei üblicher Belastung entstehen (Insuffizienzfraktur), und weil frühe Röntgenbilder oft unauffällig sind, kann er für ein Meniskus-, Sehnen- oder Arthroseproblem gehalten werden, bis ein MRT ihn zeigt. Früh erkannt heilt es meist mit weniger Stoßbelastung und einem schrittweisen Wiedereinstieg über Wochen bis wenige Monate, und dabei sollte auch ärztlich geprüft werden, wie es um deine Knochen steht und ob du genug für dein Training isst.",
      meanwhile:
        "Hör mit dem Laufen auf und verzichte auf Hüpfen und Springen, bis du ärztlich oder physiotherapeutisch untersucht wurdest, am besten innerhalb weniger Tage. Gehen ist in Ordnung, solange es nicht wehtut, und Radfahren oder Schwimmen halten dich fit, wenn sie schmerzfrei sind. Tut schon normales Gehen weh oder schmerzt das Knie in Ruhe, lass dich innerhalb von ein bis zwei Tagen ärztlich untersuchen und nimm bis dahin Unterarmgehstützen. Erzähl in der Praxis von kürzlichen Trainingssteigerungen, früheren Ermüdungsbrüchen, geringer Knochendichte, zu knapper Ernährung oder ausbleibender Periode.",
      avoid:
        "Verzichte auf tiefe Kniebeugen, Ausfallschritte und Hüpfen, bis es abgeklärt ist, denn sie belasten das obere Schienbein stark.",
    },
    warn: ["fuel"],
    rtr: "bone",
    sources: ["warden2014", "hoenig2022", "mountjoy2023", "eldesouky2025"],
  },
];
