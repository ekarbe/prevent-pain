// Shared guides. `returnToRun`: coming back to running, one variant per injury type (a cause picks one with `rtr`).
// `prevent`: the "Stay injury-free" page. Exercise ids in `blocks` come from exercises.js.
export const returnToRun = {
  sources: [
    "lorenz2020",
    "warden2014",
    "warden2021",
    "hoenig2023",
    "green2022",
    "goom2019",
    "christopher2024",
    "silbernagel2007",
    "frandsen2025",
  ],
  standard: {
    en: {
      title: "After a muscle, tendon or joint problem",
      lead: "This is a common structure drawn from published return-to-running programmes, not a tested programme. Pass the checks, then build from walk-run intervals to 30 minutes of easy running, keeping to the pain rule throughout. If a session breaks the rule, drop back one step for a few days.",
      gates: [
        "Walk briskly for 30 minutes with pain no higher than 2/10 and no limp.",
        "Hop 10 times on each leg with pain no higher than 2/10.",
        "Do 10 slow single-leg squats on each leg, knee staying over your 2nd toe, pain no higher than 2/10.",
        "Do at least 20 single-leg calf raises on each leg, the weaker side no more than about 10% behind.",
        "Tendon problem: you've done the holds and the heavy, slow stage within the pain rule.",
      ],
      phases: [
        {
          name: "Weeks 1–2",
          what: "3 sessions a week, never on back-to-back days: 5 minutes of brisk walking, then 6–8 × (1 min jog, 1–2 min walk), then 5 minutes of walking.",
          next: "the session and the next morning stay within the pain rule, twice in a row",
        },
        {
          name: "Weeks 3–4",
          what: "5–6 × (3–4 min jog, 1 min walk), still with a day off running in between.",
          next: "the session and the next morning stay within the pain rule, twice in a row",
        },
        {
          name: "Weeks 5–6",
          what: "Continuous easy running on alternate days, building from 20 to 30 minutes. Then add a 4th day, which means your first back-to-back days.",
          next: "30 minutes of easy running feels comfortable",
        },
        {
          name: "From week 7",
          what: "Add strides, then tempo runs. Raise either time or pace in a week, never both, and keep any run no more than about 10% longer than your longest run in the past 30 days.",
          next: "any symptoms have settled by the day after each new step",
        },
      ],
    },
    de: {
      title: "Nach Muskel-, Sehnen- oder Gelenkbeschwerden",
      lead: "Das ist ein gängiger Aufbau, abgeleitet aus veröffentlichten Programmen für den Wiedereinstieg, kein geprüftes Programm. Erst die Tests bestehen, dann vom Wechsel aus Gehen und Joggen bis zu 30 Minuten lockerem Dauerlauf steigern, immer innerhalb der Schmerzregel. Hält eine Einheit die Regel nicht ein, geh für ein paar Tage einen Schritt zurück.",
      gates: [
        "30 Minuten zügig gehen, mit Schmerzen von höchstens 2/10 und ohne zu hinken.",
        "10-mal auf jedem Bein hüpfen, mit Schmerzen von höchstens 2/10.",
        "10 langsame einbeinige Kniebeugen pro Bein, das Knie bleibt über der 2. Zehe, Schmerzen höchstens 2/10.",
        "Mindestens 20-mal einbeiniges Wadenheben pro Bein, die schwächere Seite höchstens etwa 10 % dahinter.",
        "Bei Sehnenbeschwerden: Halteübungen und die schwere, langsame Stufe innerhalb der Schmerzregel geschafft.",
      ],
      phases: [
        {
          name: "Wochen 1–2",
          what: "3 Einheiten pro Woche, nie an zwei Tagen hintereinander: 5 Min. zügig gehen, dann 6–8 × (1 Min. joggen, 1–2 Min. gehen), zum Schluss 5 Min. gehen.",
          next: "die Einheit und der nächste Morgen zweimal in Folge innerhalb der Schmerzregel bleiben",
        },
        {
          name: "Wochen 3–4",
          what: "5–6 × (3–4 Min. joggen, 1 Min. gehen), weiterhin mit einem lauffreien Tag dazwischen.",
          next: "die Einheit und der nächste Morgen zweimal in Folge innerhalb der Schmerzregel bleiben",
        },
        {
          name: "Wochen 5–6",
          what: "Lockerer Dauerlauf jeden zweiten Tag, von 20 auf 30 Minuten steigern. Dann einen 4. Lauftag ergänzen, damit läufst du zum ersten Mal an zwei Tagen hintereinander.",
          next: "sich 30 Minuten lockerer Dauerlauf gut anfühlen",
        },
        {
          name: "Ab Woche 7",
          what: "Erst Steigerungsläufe, dann Tempoläufe ergänzen. Pro Woche entweder Dauer oder Tempo steigern, nie beides, und kein Lauf sollte mehr als etwa 10 % länger sein als dein längster Lauf der letzten 30 Tage.",
          next: "sich etwaige Beschwerden nach jedem neuen Schritt bis zum nächsten Tag beruhigt haben",
        },
      ],
    },
  },
  bone: {
    en: {
      title: "After a bone stress injury",
      lead: "Start only once a doctor has cleared you. This is a common graded structure for bone, not a tested programme, and it's stricter than the standard steps: everything must be pain-free, not just within the usual 3/10 pain rule, and there's a rest day between run days. If pain comes back, stop, take a rest day and go back one step. If bone pain lingers, or you have pain at rest or at night, see your doctor again. As a rough guide, pooled studies report a return to sport after about 6 weeks for the inner shin, 8 weeks for the fibula (the thin bone on the outside of the lower leg) and 3.5–4 months for the femoral neck or the navicular in the midfoot, with wide differences between people, so the steps may take longer than the weeks shown.",
      gates: [
        "A doctor has cleared you to start running.",
        "Brisk 30-minute walks are completely pain-free, during and the next day.",
        "Hopping 10 times on each leg is pain-free.",
        "You can do at least 20 single-leg calf raises on each leg without pain, the weaker side no more than about 10% behind.",
      ],
      phases: [
        {
          name: "Weeks 1–2",
          what: "3 sessions a week with a rest day in between: 6–8 × (1 min jog, 1–2 min walk).",
          next: "two sessions in a row, and the mornings after them, are completely pain-free",
        },
        {
          name: "Weeks 3–4",
          what: "5–6 × (3–4 min jog, 1 min walk), still with a rest day between sessions.",
          next: "two sessions in a row, and the mornings after them, are completely pain-free",
        },
        {
          name: "Weeks 5–6",
          what: "Continuous easy running, building from 20 to 30 minutes, still only every other day. Raise time, not pace.",
          next: "30 minutes of easy running is pain-free",
        },
        {
          name: "From week 7",
          what: "Still every other day, add pace: strides first, then tempo. Once that's pain-free, add a 4th day, which means your first back-to-back days. Raise time or pace in a week, never both.",
          next: "there's no bone pain during runs or the next day",
        },
      ],
    },
    de: {
      title: "Nach einer Knochenstressverletzung",
      lead: "Fang erst an, wenn du ärztlich grünes Licht bekommen hast. Das ist ein gängiger, abgestufter Aufbau für Knochen, kein geprüftes Programm, und er ist strenger als die Standardschritte: Alles muss schmerzfrei sein, nicht nur innerhalb der üblichen Schmerzregel bis 3/10, und zwischen zwei Lauftagen liegt ein Ruhetag. Kommt der Schmerz zurück, hör auf, leg einen Ruhetag ein und geh einen Schritt zurück. Hält der Knochenschmerz an oder hast du Schmerzen in Ruhe oder nachts, geh noch einmal zur Ärztin oder zum Arzt. Als grobe Orientierung zeigen zusammengefasste Studien eine Rückkehr zum Sport nach etwa 6 Wochen an der Schienbeininnenkante, nach 8 Wochen am Wadenbein und nach 3,5–4 Monaten am Schenkelhals oder am Kahnbein des Fußes, mit großen Unterschieden von Mensch zu Mensch. Die Schritte können also länger dauern als die angegebenen Wochen.",
      gates: [
        "Du hast ärztlich grünes Licht zum Laufen bekommen.",
        "Zügiges Gehen über 30 Minuten ist völlig schmerzfrei, auch am nächsten Tag.",
        "10-mal Hüpfen auf jedem Bein ist schmerzfrei.",
        "Mindestens 20-mal einbeiniges Wadenheben pro Bein ohne Schmerzen, die schwächere Seite höchstens etwa 10 % dahinter.",
      ],
      phases: [
        {
          name: "Wochen 1–2",
          what: "3 Einheiten pro Woche mit einem Ruhetag dazwischen: 6–8 × (1 Min. joggen, 1–2 Min. gehen).",
          next: "zwei Einheiten in Folge samt dem Morgen danach völlig schmerzfrei bleiben",
        },
        {
          name: "Wochen 3–4",
          what: "5–6 × (3–4 Min. joggen, 1 Min. gehen), weiterhin mit einem Ruhetag zwischen den Einheiten.",
          next: "zwei Einheiten in Folge samt dem Morgen danach völlig schmerzfrei bleiben",
        },
        {
          name: "Wochen 5–6",
          what: "Lockerer Dauerlauf, von 20 auf 30 Minuten steigern, weiterhin nur jeden zweiten Tag. Die Dauer steigern, nicht das Tempo.",
          next: "30 Minuten lockerer Dauerlauf schmerzfrei sind",
        },
        {
          name: "Ab Woche 7",
          what: "Weiterhin jeden zweiten Tag, jetzt das Tempo: erst Steigerungsläufe, dann Tempoläufe. Ist das schmerzfrei, einen 4. Lauftag ergänzen, damit läufst du zum ersten Mal an zwei Tagen hintereinander. Pro Woche entweder Dauer oder Tempo steigern, nie beides.",
          next: "der Knochen beim Laufen und am nächsten Tag schmerzfrei bleibt",
        },
      ],
    },
  },
  calf: {
    en: {
      title: "After a calf strain",
      lead: "The calf needs some strength before you jog again and more before you run hard. The 30-raise target and the running rules come from a study that interviewed 20 expert sports clinicians, not from trials, and the walk-run steps are a common structure, not a tested programme.",
      gates: [
        "Walk briskly for 30 minutes with pain no higher than 2/10 and no limp.",
        "Do at least 20 single-leg calf raises from flat ground on the injured side with pain no higher than 2/10.",
        "Hop 10 times on the injured leg with pain no higher than 2/10.",
      ],
      phases: [
        {
          name: "Weeks 1–2",
          what: "3 sessions a week, never on back-to-back days: 6–8 × (1 min jog, 1–2 min walk). Keep the jog relaxed, not a slow shuffle, and do your calf exercises after the run, not before.",
          next: "the session and the next morning stay within the pain rule twice in a row, with no new tightness in the calf",
        },
        {
          name: "Weeks 3–4",
          what: "5–6 × (3–4 min jog, 1 min walk), still with a day off running in between.",
          next: "the session and the next morning stay within the pain rule, twice in a row",
        },
        {
          name: "Weeks 5–6",
          what: "Continuous easy running on alternate days, building from 20 to 30 minutes, then a 4th day.",
          next: "30 minutes of easy running feels comfortable",
        },
        {
          name: "From week 7",
          what: "Before adding hills, strides and faster running, do at least 30 single-leg calf raises on the injured side, no more than about 10% fewer than on the other side. Then add them one at a time. Raise time or pace in a week, never both.",
          next: "the calf feels normal the day after each new step",
        },
      ],
    },
    de: {
      title: "Nach einer Wadenzerrung",
      lead: "Die Wade braucht etwas Kraft, bevor du wieder joggst, und mehr, bevor du schnell läufst. Die Vorgabe von 30 Wiederholungen beim Wadenheben und die Laufregeln stammen aus einer Befragung von 20 erfahrenen Fachleuten aus Sportmedizin und Sportphysiotherapie, nicht aus kontrollierten Studien. Die Geh-Lauf-Schritte sind ein gängiger Aufbau, kein geprüftes Programm.",
      gates: [
        "30 Minuten zügig gehen, mit Schmerzen von höchstens 2/10 und ohne zu hinken.",
        "Mindestens 20-mal einbeiniges Wadenheben vom flachen Boden auf der verletzten Seite, mit Schmerzen von höchstens 2/10.",
        "10-mal auf dem verletzten Bein hüpfen, mit Schmerzen von höchstens 2/10.",
      ],
      phases: [
        {
          name: "Wochen 1–2",
          what: "3 Einheiten pro Woche, nie an zwei Tagen hintereinander: 6–8 × (1 Min. joggen, 1–2 Min. gehen). Locker joggen, aber nicht schlurfen, und die Wadenübungen nach dem Lauf machen, nicht davor.",
          next: "die Einheit und der nächste Morgen zweimal in Folge innerhalb der Schmerzregel bleiben, ohne neues Ziehen in der Wade",
        },
        {
          name: "Wochen 3–4",
          what: "5–6 × (3–4 Min. joggen, 1 Min. gehen), weiterhin mit einem lauffreien Tag dazwischen.",
          next: "die Einheit und der nächste Morgen zweimal in Folge innerhalb der Schmerzregel bleiben",
        },
        {
          name: "Wochen 5–6",
          what: "Lockerer Dauerlauf jeden zweiten Tag, von 20 auf 30 Minuten steigern, dann ein 4. Lauftag.",
          next: "sich 30 Minuten lockerer Dauerlauf gut anfühlen",
        },
        {
          name: "Ab Woche 7",
          what: "Bevor du Hügel, Steigerungsläufe und schnelleres Laufen ergänzt: mindestens 30-mal einbeiniges Wadenheben auf der verletzten Seite, höchstens etwa 10 % weniger als auf der anderen Seite. Dann eins nach dem anderen ergänzen. Pro Woche entweder Dauer oder Tempo steigern, nie beides.",
          next: "sich die Wade am Tag nach jedem neuen Schritt normal anfühlt",
        },
      ],
    },
  },
  postpartum: {
    en: {
      title: "After having a baby",
      lead: "A 2019 UK guideline written by physios suggests a graded start from about 12 weeks after birth, once you pass its strength and impact checks. These are expert targets, not tested cut-offs, and a 2024 expert consensus favours an individual timeline over a fixed date. Leaking, heaviness, a dragging feeling or pain at any point means not yet: see a pelvic health physio, ideally before you start anyway.",
      gates: [
        "It's been about 12 weeks or more since the birth.",
        "20 single-leg calf raises on each side.",
        "20 single-leg bridges on each side.",
        "20 single-leg sit-to-stands from a chair on each side.",
        "20 side-lying leg raises on each side.",
        "Walk briskly for 30 minutes without leaking, heaviness or pain.",
        "Jog on the spot for 1 minute without leaking, heaviness or pain.",
        "Hop on the spot 10 times on each leg without leaking, heaviness or pain.",
      ],
      phases: [
        {
          name: "Weeks 1–2",
          what: "3 short sessions a week on alternate days: 6–8 × (1 min jog, 1–2 min walk). Keep up your pelvic floor and strength exercises.",
          next: "there's no leaking, heaviness or pain during or after, twice in a row",
        },
        {
          name: "Weeks 3–4",
          what: "5–6 × (3–4 min jog, 1 min walk), still with a day off in between.",
          next: "there's no leaking, heaviness or pain during or after, twice in a row",
        },
        {
          name: "Weeks 5–6",
          what: "Continuous easy running on alternate days, building from 20 to 30 minutes.",
          next: "30 minutes feels comfortable and symptom-free",
        },
        {
          name: "From week 7",
          what: "Add a 4th day, then pace. Build time before speed, and raise only one of them in a week.",
          next: "you stay free of symptoms the day after",
        },
      ],
    },
    de: {
      title: "Nach der Geburt",
      lead: "Eine britische Physiotherapie-Leitlinie von 2019 rät zu einem schrittweisen Einstieg ab etwa 12 Wochen nach der Geburt, sobald du ihre Kraft- und Belastungstests bestehst. Das sind Expertenempfehlungen, keine geprüften Grenzwerte, und ein Expertenkonsens von 2024 setzt eher auf einen individuellen Zeitplan als auf ein festes Datum. Treten dabei oder später Urinverlust, ein Schwere- oder Druckgefühl oder Schmerzen auf, heißt das: noch nicht. Lass dich dann in einer Beckenboden-Physiotherapie untersuchen, am besten ohnehin schon vor dem Start.",
      gates: [
        "Die Geburt liegt etwa 12 Wochen oder länger zurück.",
        "20-mal einbeiniges Wadenheben pro Seite.",
        "20 einbeinige Brücken pro Seite.",
        "20-mal einbeinig vom Stuhl aufstehen pro Seite.",
        "20-mal seitliches Beinheben im Liegen pro Seite.",
        "30 Minuten zügig gehen, ohne Urinverlust, Schweregefühl oder Schmerzen.",
        "1 Minute auf der Stelle joggen, ohne Urinverlust, Schweregefühl oder Schmerzen.",
        "10-mal auf jedem Bein auf der Stelle hüpfen, ohne Urinverlust, Schweregefühl oder Schmerzen.",
      ],
      phases: [
        {
          name: "Wochen 1–2",
          what: "3 kurze Einheiten pro Woche, jeden zweiten Tag: 6–8 × (1 Min. joggen, 1–2 Min. gehen). Beckenboden- und Krafttraining weiterführen.",
          next: "zweimal in Folge weder währenddessen noch danach Urinverlust, Schweregefühl oder Schmerzen auftreten",
        },
        {
          name: "Wochen 3–4",
          what: "5–6 × (3–4 Min. joggen, 1 Min. gehen), weiterhin mit einem Tag Pause dazwischen.",
          next: "zweimal in Folge weder währenddessen noch danach Urinverlust, Schweregefühl oder Schmerzen auftreten",
        },
        {
          name: "Wochen 5–6",
          what: "Lockerer Dauerlauf jeden zweiten Tag, von 20 auf 30 Minuten steigern.",
          next: "sich 30 Minuten gut und beschwerdefrei anfühlen",
        },
        {
          name: "Ab Woche 7",
          what: "Einen 4. Lauftag ergänzen, dann das Tempo. Erst die Dauer, dann das Tempo steigern, pro Woche nur eins von beiden.",
          next: "du auch am Tag danach beschwerdefrei bist",
        },
      ],
    },
  },
};

export const prevent = {
  blocks: [
    {
      id: "foot",
      exercises: [
        "short-foot",
        "toe-yoga",
        "toe-spread",
        "calf-raise",
        "bent-knee-raise",
        "balance-reach",
      ],
    },
    {
      id: "hip",
      exercises: [
        "split-squat",
        "step-down",
        "single-leg-bridge",
        "side-plank",
        "nordic-curl",
      ],
    },
  ],
  sources: [
    "frandsen2025",
    "buist2008",
    "nielsen2014a",
    "lauersen2018",
    "wu2024",
    "taddei2020",
    "chan2018",
    "heiderscheit2011",
    "nielsen2014b",
    "malisoux2020",
    "malisoux2015",
    "yeung2011",
    "lappe2008",
    "mountjoy2023",
    "goldberg2025",
    "vanderworp2015",
    "fokkema2019",
    "cloosterman2022",
  ],
  en: {
    title: "Stay injury-free",
    lead: "Most running injuries come from overuse, not accidents. Nothing removes the risk completely, but on current evidence three habits are your best bet: keep each run in proportion to your recent runs, do two strength sessions a week, and act on your personal risk factors.",
    ruleTitle: "The single-run rule",
    rule: "Keep any run no more than about 10% longer than your longest run in the past 30 days, and never double it.",
    ruleNote:
      "In 5,205 runners tracked with GPS watches for 18 months, the overuse injury rate rose once a single run was more than 10% longer than their longest run of the previous 30 days, and was roughly twice as high when a run was over double that length. Week-to-week changes in total distance did not predict injury, and in a trial with 532 beginners a programme built on the classic 10%-a-week rule did not prevent injuries. The large study was observational, with self-reported injuries, so treat the rule as a good guide, not a guarantee. After a break your longest recent run is short, so the rule restarts you small.",
    strengthTitle: "Two strength sessions a week",
    strength:
      "Do both blocks below twice a week for at least 8 weeks, then keep it going. Together they take about 30–40 minutes, and you can do them on different days as long as each block gets done twice a week. When every set feels easy, make it harder one step at a time: two legs to one leg, then added weight such as a backpack, then slower lowering. The honest pitch: in trials across sports, mostly not running, strength training cut injuries by about two-thirds, but in runners a review of 9 trials found no clear overall effect, and most of those trials were low quality. Foot training is the exception: in one trial, runners who did 8 weeks of foot and ankle exercises were injured less than half as often over a year (14% against 33%). So strength work may lower your risk, and it's low-risk to try.",
    blocks: {
      foot: {
        title: "Block 1: foot and calf",
        note: "Start every session with these. They follow the idea of the foot programme that lowered injuries in that trial, though they're not a copy of its exact exercises. Runners in the trial trained 3 times a week, so a third short foot session is a good extra if you have time.",
      },
      hip: {
        title: "Block 2: hip and thigh",
        note: "These build the muscles that steady your pelvis and knee and brake each landing. The Nordic curl is optional: it suits runners with past hamstring strains or who do sprint work, and whether it prevents injuries in runners hasn't been tested.",
      },
    },
    risksTitle: "Your risk check",
    risksLead:
      "These are the main risk factors, from the best evidence to the weakest. A yes doesn't mean you'll get injured. It shows you where to be careful.",
    risks: [
      {
        q: "Were you injured in the last 12 months?",
        a: "Previous injury is the most consistent risk factor. Stick closely to the single-run rule and make the strength sessions your priority.",
      },
      {
        q: "In the last 4 weeks, was any run more than about 10% longer than your longest run in the 30 days before it?",
        a: "Bring your next long runs back in line with the single-run rule. Runs that broke it went with more injuries in the large study.",
      },
      {
        q: "Have you had a stress fracture, missed or irregular periods, restrictive eating or recent weight loss?",
        a: "These can be signs of low energy availability (REDs), which weakens bone. Men can be affected too. See a sports doctor and make sure you eat enough to cover your training.",
      },
      {
        q: "Are you sleeping poorly most nights?",
        a: "Poorer sleep went with more running injuries in a study of 339 runners. After a few poor nights, keep runs easy or shorter and move hard sessions. That's a sensible precaution, not a tested rule.",
      },
      {
        q: "In the last 4 weeks, did your weekly distance jump by more than 30% from one week to the next?",
        a: "Build more gradually. In beginners, jumps like this showed a trend toward more knee, hip and shin injuries, but it wasn't statistically clear, so treat it as a soft warning.",
      },
      {
        q: "Have you recently switched to new shoes, or to carbon-plated racing shoes?",
        a: "Bring them in gradually, with a few shorter runs first, and keep carbon-plated shoes for races and key sessions. The evidence here is weak, but going gradually costs nothing.",
      },
    ],
    topics: [
      {
        title: "Shoes",
        text: "Choose shoes that feel comfortable, and change models gradually. Picking shoes by foot type or pronation isn't supported: in 927 beginners running in neutral shoes, a moderately rolled-in foot didn't raise the risk. In one trial of 848 runners the harder of two shoes went with more injuries than the softer one, and in an observational study runners who rotated between different pairs were injured less often. Black toenails often mean the shoe is too short or your foot slides forward: leave about a thumb's width in front of your longest toe and lace so your foot doesn't slide, especially downhill. A dark streak under a nail that appears without a knock or a long run should be checked by a doctor.",
      },
      {
        title: "Stretching",
        text: "Stretching doesn't prevent running injuries: a Cochrane review of 6 trials with 5,130 people found no clear effect. Keep it as a mobility tool when a self-test shows a stiff spot, like the hip flexors or ankle, or simply because it feels good. A short warm-up of easy jogging and a few drills or strides gets you ready to run, even though it isn't proven to prevent injuries.",
      },
      {
        title: "Running form",
        text: "Try to land softer and quieter. In a trial with 320 beginners, two weeks of gait retraining with live feedback on landing impact cut injuries over a year from 38% to 16%; an app can't give that feedback, so this cue is only an inference from the trial. In lab studies, raising your step rate by 5–10% lowered the load on the knee, and at 10% on the hip too, so use it as a tool for knee or hip pain rather than a rule for everyone. Don't switch to forefoot running to prevent injuries: no trial supports it.",
      },
      {
        title: "Sleep",
        text: "In a 6-month study of 339 runners, poorer sleep quality went with a higher injury risk. That's an association, not proof, but it's a useful warning sign. After a few poor nights, keep runs easy or shorter and move hard sessions.",
      },
      {
        title: "Bone and fuel",
        text: "Bones adapt to running when you eat enough to cover your training. Under-fuelling (REDs) weakens bone in women and men, and a previous stress fracture is one of its warning signs. Get enough calcium and vitamin D from food and sunlight, with supplements if a doctor finds you low: in 5,201 female Navy recruits (not runners), daily calcium and vitamin D supplements lowered stress fractures from 6.6% to 5.3%. Missed periods, restrictive eating or unplanned weight loss are reasons to see a sports doctor.",
      },
      {
        title: "What doesn't work on its own",
        text: "In two large trials, online prevention advice on its own did not reduce injuries. The programmes that worked were active and specific, and in runners, supervised programmes did better in an after-the-fact sub-analysis. So make a plan: put your two strength sessions in your calendar, check long runs against the single-run rule, and redo your self-tests after 4 and 8 weeks to see your progress.",
      },
    ],
  },
  de: {
    title: "Verletzungen vorbeugen",
    lead: "Die meisten Laufverletzungen entstehen durch Überlastung, nicht durch Unfälle. Ganz ausschließen lässt sich das Risiko nie, aber nach heutigem Wissen sind drei Gewohnheiten der beste Ansatz: jeden Lauf im Verhältnis zu deinen letzten Läufen halten, zweimal pro Woche Krafttraining machen und auf deine persönlichen Risikofaktoren reagieren.",
    ruleTitle: "Die Regel für einzelne Läufe",
    rule: "Mach keinen Lauf mehr als etwa 10 % länger als deinen längsten Lauf der letzten 30 Tage, und lauf nie doppelt so lang.",
    ruleNote:
      "Bei 5.205 Laufenden, deren Läufe 18 Monate lang per GPS-Uhr erfasst wurden, stieg die Rate an Überlastungsverletzungen, sobald ein einzelner Lauf mehr als 10 % länger war als der längste Lauf der 30 Tage davor, und sie war etwa doppelt so hoch, wenn ein Lauf über doppelt so lang war. Wie stark sich der Wochenumfang von Woche zu Woche veränderte, sagte Verletzungen nicht voraus, und in einer Studie mit 532 Menschen, die gerade mit dem Laufen anfingen, verhinderte ein Plan nach der klassischen Regel, pro Woche höchstens 10 % zu steigern, keine Verletzungen. Die große Studie war eine Beobachtungsstudie mit selbst gemeldeten Verletzungen, nimm die Regel also als gute Richtschnur, nicht als Garantie. Nach einer Pause ist dein längster Lauf der letzten 30 Tage kurz, so fängst du mit der Regel automatisch klein wieder an.",
    strengthTitle: "Zweimal pro Woche Krafttraining",
    strength:
      "Mach beide Blöcke unten zweimal pro Woche, mindestens 8 Wochen lang, und bleib danach dran. Zusammen dauern sie etwa 30–40 Minuten, und du kannst sie auch an verschiedenen Tagen machen, solange jeder Block zweimal pro Woche drankommt. Fühlen sich alle Sätze leicht an, steigere Schritt für Schritt: von zwei Beinen auf ein Bein, dann mit Zusatzgewicht wie einem Rucksack, dann langsameres Absenken. Ehrlich gesagt: In Studien aus vielen Sportarten, meist nicht Laufen, gab es mit Krafttraining etwa zwei Drittel weniger Verletzungen, bei Laufenden fand eine Übersicht über 9 Studien dagegen keinen klaren Gesamteffekt, und die meisten dieser Studien waren von geringer Qualität. Die Ausnahme ist Fußtraining: In einer Studie verletzten sich Laufende, die 8 Wochen lang Fuß- und Sprunggelenkübungen machten, innerhalb eines Jahres weniger als halb so oft (14 % gegenüber 33 %). Krafttraining kann dein Risiko also senken, und ausprobieren schadet nicht.",
    blocks: {
      foot: {
        title: "Block 1: Fuß und Wade",
        note: "Beginne jede Einheit damit. Die Übungen folgen der Idee des Fußprogramms, das in dieser Studie Verletzungen senkte, sind aber keine Kopie der genauen Übungsliste. In der Studie wurde 3-mal pro Woche trainiert, eine dritte kurze Fußeinheit ist also ein gutes Extra, wenn du Zeit hast.",
      },
      hip: {
        title: "Block 2: Hüfte und Oberschenkel",
        note: "Diese Übungen kräftigen die Muskeln, die Becken und Knie stabilisieren und jede Landung abbremsen. Der Nordic Hamstring Curl ist optional: Er passt zu Laufenden mit früheren Zerrungen hinten am Oberschenkel oder mit Sprinttraining, und ob er bei Laufenden Verletzungen vorbeugt, ist nicht untersucht.",
      },
    },
    risksTitle: "Dein Risiko-Check",
    risksLead:
      "Das sind die wichtigsten Risikofaktoren, von den am besten bis zu den am schwächsten belegten. Ein Ja heißt nicht, dass du dich verletzen wirst. Es zeigt dir, wo du aufpassen solltest.",
    risks: [
      {
        q: "Warst du in den letzten 12 Monaten verletzt?",
        a: "Eine frühere Verletzung ist der am durchgängigsten belegte Risikofaktor. Halte dich genau an die Regel für einzelne Läufe und gib den Krafteinheiten Vorrang.",
      },
      {
        q: "War in den letzten 4 Wochen ein Lauf mehr als etwa 10 % länger als dein längster Lauf in den 30 Tagen davor?",
        a: "Bring deine nächsten langen Läufe wieder in Einklang mit der Regel für einzelne Läufe. Läufe, die sie brachen, gingen in der großen Studie mit mehr Verletzungen einher.",
      },
      {
        q: "Hattest du schon einen Ermüdungsbruch, bleibt deine Periode aus oder ist sie unregelmäßig, schränkst du dein Essen stark ein oder hast du in letzter Zeit abgenommen?",
        a: "Das können Zeichen einer geringen Energieverfügbarkeit (REDs) sein, die die Knochen schwächt. Auch Männer können betroffen sein. Lass dich sportmedizinisch beraten und iss genug, um dein Training abzudecken.",
      },
      {
        q: "Schläfst du in den meisten Nächten schlecht?",
        a: "Schlechterer Schlaf ging in einer Studie mit 339 Laufenden mit mehr Laufverletzungen einher. Lauf nach ein paar schlechten Nächten lockerer oder kürzer und verschiebe harte Einheiten. Das ist eine sinnvolle Vorsicht, keine geprüfte Regel.",
      },
      {
        q: "Ist dein Wochenumfang in den letzten 4 Wochen von einer Woche zur nächsten um mehr als 30 % gestiegen?",
        a: "Steigere langsamer. Bei Einsteigerinnen und Einsteigern zeigten solche Sprünge einen Trend zu mehr Knie-, Hüft- und Schienbeinbeschwerden, der aber statistisch nicht eindeutig war. Nimm es also als sanfte Warnung.",
      },
      {
        q: "Bist du vor Kurzem auf neue Schuhe oder auf Carbon-Wettkampfschuhe umgestiegen?",
        a: "Gewöhn dich schrittweise daran, mit ein paar kürzeren Läufen zuerst, und heb Carbon-Schuhe für Wettkämpfe und wichtige Einheiten auf. Die Belege dafür sind schwach, aber schrittweise umzusteigen kostet nichts.",
      },
    ],
    topics: [
      {
        title: "Laufschuhe",
        text: "Wähle Schuhe, die sich bequem anfühlen, und wechsle das Modell schrittweise. Schuhe nach Fußtyp oder Pronation auszuwählen, ist nicht belegt: Bei 927 Einsteigerinnen und Einsteigern in Neutralschuhen erhöhte ein mäßig nach innen knickender Fuß das Risiko nicht. In einer Studie mit 848 Laufenden ging der härtere von zwei Schuhen mit mehr Verletzungen einher als der weichere, und in einer Beobachtungsstudie verletzten sich Laufende seltener, die abwechselnd verschiedene Paare trugen. Schwarze Zehennägel bedeuten oft, dass der Schuh zu kurz ist oder der Fuß nach vorn rutscht: Lass vor der längsten Zehe etwa eine Daumenbreite Platz und schnür so, dass der Fuß nicht rutscht, vor allem bergab. Ein dunkler Streifen unter einem Nagel, der ohne Stoß oder langen Lauf auftaucht, gehört ärztlich abgeklärt.",
      },
      {
        title: "Dehnen",
        text: "Dehnen beugt Laufverletzungen nicht vor: Ein Cochrane-Review mit 6 Studien und 5.130 Teilnehmenden fand keinen klaren Effekt. Nutze es als Beweglichkeitstraining, wenn ein Selbsttest eine steife Stelle zeigt, etwa an Hüftbeugern oder Sprunggelenk, oder einfach, weil es dir guttut. Ein kurzes Aufwärmen mit lockerem Traben und ein paar Lauf-ABC-Übungen oder Steigerungsläufen macht dich bereit fürs Laufen, auch wenn es Verletzungen nicht nachweislich verhindert.",
      },
      {
        title: "Laufstil",
        text: "Versuch, weicher und leiser aufzusetzen. In einer Studie mit 320 Einsteigerinnen und Einsteigern senkte ein zweiwöchiges Laufstiltraining mit direkter Rückmeldung zur Aufprallbelastung die Verletzungen über ein Jahr von 38 % auf 16 %; eine App kann diese Rückmeldung nicht geben, der Hinweis ist also nur aus dieser Studie abgeleitet. In Laborstudien senkte eine um 5–10 % höhere Schrittfrequenz die Belastung des Knies, bei 10 % auch die der Hüfte. Nutze sie also gezielt bei Knie- oder Hüftbeschwerden statt als Regel für alle. Stell nicht zur Vorbeugung auf Vorfußlaufen um: Keine Studie stützt das.",
      },
      {
        title: "Schlaf",
        text: "In einer 6-monatigen Studie mit 339 Laufenden ging schlechtere Schlafqualität mit einem höheren Verletzungsrisiko einher. Das ist ein Zusammenhang, kein Beweis, aber ein nützliches Warnzeichen. Lauf nach ein paar schlechten Nächten lockerer oder kürzer und verschiebe harte Einheiten.",
      },
      {
        title: "Knochen und Energie",
        text: "Knochen passen sich ans Laufen an, wenn du genug isst, um dein Training abzudecken. Zu wenig Energie (REDs) schwächt die Knochen bei Frauen und Männern, und ein früherer Ermüdungsbruch ist eines der Warnzeichen. Achte auf genug Kalzium und Vitamin D aus Ernährung und Sonnenlicht, mit Präparaten, wenn ärztlich ein Mangel festgestellt wird: Bei 5.201 Rekrutinnen der US-Marine (keine Läuferinnen) senkten tägliche Kalzium- und Vitamin-D-Präparate die Ermüdungsbrüche von 6,6 % auf 5,3 %. Eine ausbleibende Periode, stark eingeschränktes Essen oder ungewollter Gewichtsverlust sind Gründe, dich sportmedizinisch untersuchen zu lassen.",
      },
      {
        title: "Was allein nicht wirkt",
        text: "In zwei großen Studien senkten Online-Tipps zur Vorbeugung allein die Verletzungen nicht. Gewirkt haben aktive, gezielte Programme, und bei Laufenden schnitten betreute Programme in einer nachträglichen Teilauswertung besser ab. Mach also einen Plan: Trag dir die zwei Krafteinheiten in den Kalender ein, prüf lange Läufe anhand der Regel für einzelne Läufe und wiederhole deine Selbsttests nach 4 und 8 Wochen, um deine Fortschritte zu sehen.",
      },
    ],
  },
};
