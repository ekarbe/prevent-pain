// lower-back causes. Schema: see README "Content model".
export default [
  {
    id: "lbp-overload",
    kind: "plan",
    en: {
      title: "Stiff, achy low back during or after long runs",
      desc: "Builds up over long or hilly runs, feels stiff after sitting or first thing in the morning, and eases once you get moving. It's a broad ache across the low back or beside the spine, with no pain, numbness or tingling in the leg (if there is, pick the spot for pain spreading into the leg instead).",
      name: "Non-specific low back pain",
      about:
        "Your back is taking more load than it's used to, often after longer or hillier runs or long days of sitting, and usually no single damaged structure is to blame. Backs are strong, running even seems to be good for your discs, and staying active with some trunk and hip strength work often settles this kind of ache within a few weeks. Get it checked if it never lets up, even at rest or at night, if you feel unwell or are losing weight without trying, or if morning stiffness of more than 30 minutes has crept up over months.",
      load: "Keep running within the pain rule and keep moving on other days too, because easy runs and walks usually do your back good. If long or hilly runs break the rule, cut your long run by about a third and pick flatter routes for 1–2 weeks, and break up long sitting.",
    },
    de: {
      title: "Steifer, schmerzender unterer Rücken bei oder nach langen Läufen",
      desc: "Baut sich bei langen oder hügeligen Läufen auf, ist nach dem Sitzen oder morgens nach dem Aufstehen steif und wird besser, sobald du in Bewegung kommst. Der Schmerz ist flächig, sitzt quer über dem unteren Rücken oder neben der Wirbelsäule und zieht nicht ins Bein, auch Taubheit oder Kribbeln im Bein fehlen (sonst wähle lieber die Stelle für Ausstrahlung ins Bein).",
      name: "Nicht-spezifischer Kreuzschmerz",
      about:
        "Dein Rücken bekommt gerade mehr Belastung, als er gewohnt ist, oft nach längeren oder hügeligeren Läufen oder langen Tagen im Sitzen, und meist steckt keine einzelne verletzte Struktur dahinter. Der Rücken ist robust, Laufen scheint den Bandscheiben sogar gutzutun, und Bewegung und etwas Krafttraining für Rumpf und Hüfte bringen diese Art Schmerz oft innerhalb weniger Wochen zur Ruhe. Lass es abklären, wenn der Schmerz nie nachlässt, auch nicht in Ruhe oder nachts, wenn du dich krank fühlst oder ungewollt abnimmst oder wenn sich über Monate eine Morgensteifigkeit von mehr als 30 Minuten eingeschlichen hat.",
      load: "Lauf innerhalb der Schmerzregel weiter und bleib auch an den anderen Tagen in Bewegung, denn lockere Läufe und Spaziergänge tun dem Rücken meist gut. Wird die Schmerzregel bei langen oder hügeligen Läufen verletzt, kürze 1–2 Wochen lang deinen langen Lauf um etwa ein Drittel, wähle flachere Strecken und unterbrich langes Sitzen.",
    },
    local: ["bird-dog", "back-extension"],
    chain: [
      [
        "trunk",
        3,
        {
          en: "Late in a long run, tired trunk muscles can let your pelvis and spine sway more with every stride, and the muscles beside your spine have to work harder to keep you upright.",
          de: "Gegen Ende eines langen Laufs können müde Rumpfmuskeln Becken und Wirbelsäule bei jedem Schritt stärker schwanken lassen. Die Muskeln neben der Wirbelsäule müssen dann mehr arbeiten, um dich aufrecht zu halten.",
        },
      ],
      [
        "glutes",
        2,
        {
          en: "Your glutes and back muscles share the job of holding your trunk upright as you land and push off. When the glutes tire, the low back can take over more of that work.",
          de: "Gesäß- und Rückenmuskeln teilen sich die Aufgabe, deinen Oberkörper bei Landung und Abdruck aufrecht zu halten. Ermüdet das Gesäß, kann der untere Rücken mehr davon übernehmen.",
        },
      ],
      ["hipabd", 2],
      [
        "hipflex",
        1,
        {
          en: "Stiff hip flexors can tip your pelvis forward and arch your low back at the end of each stride. If this tests stiff, keep your glute squeezed in the couch stretch so your back doesn't arch, and ease off if it hurts in your back.",
          de: "Steife Hüftbeuger können das Becken am Ende jedes Schritts nach vorn kippen und den unteren Rücken ins Hohlkreuz ziehen. Fällt der Test steif aus, halte beim Couch Stretch das Gesäß angespannt, damit der Rücken nicht ins Hohlkreuz geht, und lass nach, wenn es im Rücken wehtut.",
        },
      ],
    ],
    sources: ["nielsen2012", "silbernagel2007"],
  },
  {
    id: "si-joint",
    kind: "plan",
    en: {
      title: "Pinpoint ache at the dimple above one buttock",
      desc: "Worse standing on that leg, on stairs, getting out of a car or rolling over in bed, and it can spread into the buttock. You can usually point to it with one finger just below the belt line (with numbness, tingling or pain below the knee, pick the spot for pain spreading into the leg instead).",
      name: "Sacroiliac joint pain (SI joint pain)",
      about:
        "The joint between the base of your spine and your pelvis is probably irritated. It moves only a tiny amount and doesn't slip out of place, but thousands of one-legged landings per run can make it sore when distance or hills go up quickly, and stronger glutes and trunk muscles plus a gradual return to load often settle it. If hopping on that leg hurts or it aches at rest or at night, stop running and get it checked, as the sacrum at the base of the spine can get a stress injury. Morning stiffness of more than 30 minutes that has crept up over months is also worth a check.",
      load: "Keep easy runs on flat, even ground within the pain rule, and drop sprints, steep hills and cambered roads for now. If the pain rule is broken, cut weekly distance by about a third for 2 weeks.",
    },
    de: {
      title: "Punktueller Schmerz am Grübchen über einer Gesäßhälfte",
      desc: "Schlimmer im Stand auf diesem Bein, auf Treppen, beim Aussteigen aus dem Auto oder beim Umdrehen im Bett, und kann ins Gesäß ausstrahlen. Meist kannst du knapp unterhalb der Gürtellinie mit einem Finger auf die Stelle zeigen (bei Taubheit, Kribbeln oder Schmerzen unterhalb des Knies wähle lieber die Stelle für Ausstrahlung ins Bein).",
      name: "Schmerz im Iliosakralgelenk (ISG-Syndrom)",
      about:
        "Das Gelenk zwischen Kreuzbein und Beckenschaufel ist wahrscheinlich gereizt. Es bewegt sich nur minimal und verrutscht nicht, aber Tausende einbeinige Landungen pro Lauf können es empfindlich machen, wenn Umfang oder Höhenmeter schnell steigen, und kräftigere Gesäß- und Rumpfmuskeln sowie eine schrittweise Belastungssteigerung bringen es oft zur Ruhe. Tut Hüpfen auf diesem Bein weh oder schmerzt es in Ruhe oder nachts, hör mit dem Laufen auf und lass es abklären, denn auch das Kreuzbein kann eine Knochenstressverletzung bekommen. Auch eine Morgensteifigkeit von mehr als 30 Minuten, die sich über Monate eingeschlichen hat, solltest du abklären lassen.",
      load: "Lauf locker auf flachem, ebenem Untergrund innerhalb der Schmerzregel und lass Sprints, steile Anstiege und Straßen mit seitlichem Gefälle vorerst weg. Wird die Schmerzregel verletzt: 2 Wochen etwa ein Drittel weniger Wochenumfang.",
    },
    local: ["glute-bridge", "single-leg-bridge"],
    chain: [
      [
        "glutes",
        3,
        {
          en: "Your big glute muscle runs across the SI joint and helps press it tight each time you land on that leg. When it's weak or slow to switch on, the joint's ligaments can take more of the strain.",
          de: "Der große Gesäßmuskel verläuft über das Iliosakralgelenk hinweg und hilft, es bei jeder Landung auf diesem Bein zusammenzupressen. Ist er schwach oder springt er zu spät an, können die Bänder des Gelenks mehr von der Last abbekommen.",
        },
      ],
      [
        "trunk",
        2,
        {
          en: "Your deep stomach and back muscles help press the base of your spine and your pelvis together, which can steady the SI joint as you land.",
          de: "Die tiefen Bauch- und Rückenmuskeln helfen, Kreuzbein und Becken zusammenzupressen, und können so das Iliosakralgelenk bei der Landung stabilisieren.",
        },
      ],
      ["hipabd", 1],
    ],
    sources: ["warden2014", "hoenig2022", "silbernagel2007"],
  },
  {
    id: "sciatica-refer",
    kind: "refer",
    urgency: "soon",
    en: {
      title: "Shooting or burning pain down the leg, often past the knee",
      desc: "It can come with numbness, pins and needles or a weak leg or foot, and often gets worse when you cough, sneeze, bend forward or sit for a long time. The leg usually hurts more than the back.",
      name: "Lumbar radicular pain (sciatica)",
      about:
        "This pattern usually comes from an irritated nerve root in the low back, most often from a bulging disc, and less often from the sciatic nerve being squeezed deep in the buttock. It sounds alarming, but most people get much better within weeks to a few months without surgery. A physio or doctor should test the strength, reflexes and feeling in your leg to see how the nerve is coping and to plan your way back to running.",
      meanwhile:
        "Keep moving: walking and gentle activity usually help more than bed rest, and break up long sitting. Until you've been seen, skip running and heavy lifting if they send pain or tingling further down the leg or your leg feels weak. If your leg or foot gets weaker, both legs are affected, or you notice numbness around the groin or buttocks or new trouble with your bladder or bowel, go to an emergency department now.",
    },
    de: {
      title:
        "Einschießender oder brennender Schmerz ins Bein, oft bis unters Knie",
      desc: "Kann mit Taubheit, Kribbeln oder Schwäche in Bein oder Fuß einhergehen und wird beim Husten, Niesen, Vorbeugen oder langen Sitzen oft schlimmer. Das Bein schmerzt meist stärker als der Rücken.",
      name: "Lumbale Nervenwurzelreizung (Ischias)",
      about:
        "Dahinter steckt meist eine gereizte Nervenwurzel im unteren Rücken, am häufigsten durch eine vorgewölbte Bandscheibe, seltener ein Ischiasnerv, der tief im Gesäß eingeengt wird. Das klingt beunruhigend, bessert sich aber bei den meisten innerhalb von Wochen bis wenigen Monaten deutlich, ohne Operation. In der Physiotherapie oder ärztlichen Praxis sollten Kraft, Reflexe und Gefühl im Bein geprüft werden, um zu sehen, wie stark der Nerv betroffen ist, und um deinen Weg zurück ins Laufen zu planen.",
      meanwhile:
        "Bleib in Bewegung: Spazierengehen und leichte Aktivität helfen meist mehr als Bettruhe, und unterbrich langes Sitzen. Verzichte bis zur Untersuchung auf Laufen und schweres Heben, wenn Schmerz oder Kribbeln dadurch weiter ins Bein ziehen oder sich das Bein schwach anfühlt. Bei zunehmender Schwäche in Bein oder Fuß, Beschwerden in beiden Beinen, Taubheit im Schritt- oder Gesäßbereich oder neuen Problemen mit Blase oder Darm: sofort in die Notaufnahme.",
    },
    sources: ["martin2015", "hopayian2018"],
  },
];
