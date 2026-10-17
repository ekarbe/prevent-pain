// Interface strings. Content (regions, causes, exercises…) carries its own { en, de } fields.
export const ui = {
  en: {
    back: "Back",
    backLabel: "Back to the previous step",
    skip: "Skip to content",
    steps: ["Where", "Spot", "Feels like", "Plan"],
    stepOf: (n, label) => `Step ${n} of 4 · ${label}`,
    language: "Language",
    toDark: "Switch to dark mode",
    toLight: "Switch to light mode",
    footer:
      "Training tips for running aches, not medical advice. Drafted from published research and not reviewed by a clinician.",
    source: "Source code",
    links: "About the author",

    startTitle: "Before we start",
    startLead:
      "Prevent Pain suggests exercises for overuse aches and stiffness from running. It can't diagnose injuries, so first: does any of this apply to you?",
    flags: [
      "It started with a fall, twist or knock and swelled up quickly",
      "You can't put your full weight on the leg",
      "The joint locks, catches or gives way",
      "It's hot, red and swollen, or you have a fever",
      "Numbness, tingling or pain shooting down the leg",
      "Pain at night or at rest that doesn't ease",
    ],
    startNone: "None of these apply",
    startSome: (n) => `Continue (${n} ticked)`,
    startFine:
      "These are training tips, not medical advice. The content is drafted from published research and has not been reviewed by a clinician.",

    stopTitle: "Get this checked first",
    stopLead:
      "What you ticked can be a sign of an injury that needs a proper examination. Please see a doctor or physiotherapist before you train through it.",
    stopUrgent:
      "Can't put weight on it, or the joint is hot, red and swollen? Go today.",
    stopBack: "Change my answers",
    stopCleared: "A professional has cleared me to train",

    regionTitle: "Where does it hurt?",
    regionLead: "Tap the area. You'll zoom in on the next step.",
    front: "Front",
    backView: "Back",

    spotTitle: (region) => `${region}: where exactly?`,
    spotLead: "Turn the view and tap the spot that hurts most.",
    spotLeadList: "Pick the spot that hurts most.",
    views: {
      front: "Front",
      side: "Outside",
      inside: "Inside",
      back: "Back",
      sole: "Sole",
      profile: "Side",
      top: "Top",
    },
    viewsLabel: "View",
    edges: {
      inner: "inner",
      outer: "outer",
      front: "front",
      back: "back",
      toes: "toes",
      heel: "heel",
      up: "up",
      down: "down",
    },
    spotPick: "Tap the spot that hurts most",
    spotNext: (s) => `Continue: ${s}`,

    causesTitle: "What does it feel like?",
    causesLead:
      "Pick the description that fits best. The medical name is in small print.",
    medName: "Medical name",
    referBadge: "Get it checked",
    none: "None of these sound like me",
    noneText:
      "Then it's worth having it looked at. A physio can usually tell what's going on in one visit.",

    calm: "Calm it, then load it",
    painRule: "Pain rule",
    scale: ["0–3 OK", "4–5 Ease off", "6+ Stop"],
    scaleLabel:
      "Pain scale from 0 to 10: 0 to 3 is OK, 4 to 5 means ease off, 6 and above means stop.",
    ruleText:
      "During exercises and runs, pain up to 3/10 is fine if it has settled by the next morning.",
    loadYes:
      "That may well be the trigger, so follow the running advice above first. Once you build up again, keep any run no more than about 10% longer than your longest run in the past 30 days, and never double it.",
    loadNo:
      "Then training load probably wasn't the trigger. Still follow the running advice above, and keep any run no more than about 10% longer than your longest run in the past 30 days.",
    noLocal:
      "For this one, the fix is mostly further up the chain. Follow the pain rule and start with your chain below.",
    noLocalNoChain:
      "For this one, exercises play little part. Follow the advice above and give it time.",
    chainTitle: "Check your chain",
    chainLead:
      "These areas often add to this problem. Each 30-second self-test shows whether it is a weak link for you.",
    chainLabel: (items) => `Your chain: ${items}`,
    likely: {
      3: "Often involved",
      2: "Sometimes involved",
      1: "Occasionally involved",
    },
    why: "Why it matters",
    test: "Self-test",
    pos: (n) =>
      `Likely a weak link · ${n} exercise${n === 1 ? "" : "s"} added to your week`,
    posNone: "Likely a weak link · the exercises in your week already cover it",
    neg: "Looks fine for now",
    redo: "Redo",
    legend: { none: "Not tested", pos: "Weak link", neg: "Fine", pain: "Pain" },
    weekTitle: "Your week",
    weekLead: (m) =>
      `About ${m} minutes per session. How often to do each one is on its card:`,
    weekLeadRuns: "Build this into your runs:",
    weekEmpty: "Do the self-tests above to add exercises for your weak links.",
    weekAllFine: "No weak links found. Keep to the exercises above.",
    duringRuns: "during runs",
    later: "Later",
    laterNote: "Hold this one back until the pain has settled, then add it.",
    min: "min",
    physioTitle: "See a physio if",
    physio: [
      "There's no clear progress after 6 weeks of following the plan",
      "Pain climbs above 5/10 in daily life or wakes you at night",
      "Swelling, numbness, or a joint that locks or gives way shows up",
    ],
    sources: "Sources",
    share: "Share this plan",
    shared: "Link copied. It opens this exact plan, test results included.",
    sharedFail:
      "Couldn't copy. The link in your address bar opens this exact plan.",
    ex: "Ex.",
    video: "Watch the demo",
    videoNote: "Loads from youtube-nocookie.com only after you tap",
    videoBy: (channel) => `Video: ${channel}`,
    videoTitle: (name) => `Demo video: ${name}`,
    videoNone: "No demo video yet. The steps above cover it.",

    referToday: "See a doctor today",
    referSoon: "Book a doctor or physio appointment",
    referLead:
      "This description fits something that exercise tips shouldn't handle on their own.",
    meanwhile: "Until then",
    referBack: "Pick a different description",

    broken: {
      title: "This page didn't load",
      body: "Something in its content is broken. Pick the area again, and if it keeps happening, please report it on GitHub.",
      action: "Back to the body map",
    },

    titles: {
      start: "Before we start",
      stop: "Get this checked first",
      region: "Where does it hurt?",
      topics: "All topics",
      prevent: "Stay injury-free",
      return: "Back to running after an injury",
    },

    // Search engine titles and descriptions, one per page.
    meta: {
      start: "Running pain: find the cause and the weak links",
      site: "Tap where running hurts, check the weak links in your chain with 30-second self-tests, and get a strength plan. In English and German.",
      stop: "Some symptoms need a doctor or physio before any exercise plan. What to do now.",
      region:
        "Tap where running hurts on a body map: lower back, hip, thigh, knee, shin and calf, ankle and foot.",
      topics:
        "Every running ache and injury Prevent Pain covers, by body region, each with exercises and self-tests for the weak links.",
      prevent:
        "How to stay injury-free as a runner: the single-run rule, two short strength sessions a week, and a quick risk check. Based on published research.",
      return:
        "Coming back to running after an injury: checks to pass first, then a walk-run ladder, with versions for bone stress injuries, calf strains and after having a baby.",
      spot: (region) => `${region} pain from running`,
      spotDesc: (region, spots) =>
        `${region} pain from running: ${spots}. Tap the spot, pick what it feels like and get a plan.`,
      causes: (spot, region) => `${spot} (${region}): what it could be`,
      causesDesc: (spot, names) =>
        `${spot}: ${names}. Pick the description that fits and get exercises and self-tests.`,
      plan: (name) => `${name}: exercises and tips for runners`,
      refer: (name) => `${name}: get it checked`,
    },
    topicsLead:
      "Every ache and injury Prevent Pain covers, by body region. Not sure which one you have? Start with where it hurts.",
    topicsStart: "Start with where it hurts",
    topicsGuides: "Guides",
    youthMark: "under 18",

    referRoutine: "Book a check in the next few weeks",
    youthTitle: "Under 18?",
    youthBadge: "For under-18s",
    youthLead:
      "Growing bones have injuries of their own. These descriptions are for children and teenagers.",
    exitsTitle: "Check this first",
    exitsLead: "If you answer yes to any of these, open that card instead.",
    avoidLabel: "Skip for now",
    stage: {
      1: "Stage 1 · Hold",
      2: "Stage 2 · Slow strength",
      3: "Stage 3 · Springy",
    },
    ladder:
      "These exercises build up in stages: holds, then slow strength work, then springy work, then running. Move up a stage once the current one has stayed within the pain rule for about a week.",
    rtrTitle: "Back to running",
    rtrPlanLead:
      "Still running within the pain rule? Carry on. If you had to stop, come back step by step:",
    rtrReferLead: "Once you've been checked and cleared to run:",
    rtrShow: "Show the steps",
    rtrHide: "Hide the steps",
    gatesTitle: "Pass these checks first",
    phasesTitle: "Then build up",
    phaseNext: "Move on when",
    rtrMore: "More about coming back to running",
    preventNext: "Once it has settled: how to stay injury-free",
    startPrevent: "Not hurting right now? How to stay injury-free",
    ifYes: "If yes",
    blocksTitle: "Your two sessions",
    preventStart: "Something hurts already? Start with where",
  },
  de: {
    back: "Zurück",
    backLabel: "Zurück zum vorherigen Schritt",
    skip: "Zum Inhalt springen",
    steps: ["Wo", "Stelle", "Gefühl", "Plan"],
    stepOf: (n, label) => `Schritt ${n} von 4 · ${label}`,
    language: "Sprache",
    toDark: "Dunkles Design einschalten",
    toLight: "Helles Design einschalten",
    footer:
      "Trainingstipps bei Laufbeschwerden, keine medizinische Beratung. Basiert auf veröffentlichter Forschung, nicht von medizinischem Fachpersonal geprüft.",
    source: "Quellcode",
    links: "Über den Autor",

    startTitle: "Bevor es losgeht",
    startLead:
      "Prevent Pain schlägt Übungen bei Überlastungsbeschwerden und Steifigkeit durchs Laufen vor. Verletzungen kann es nicht erkennen. Trifft etwas hiervon auf dich zu?",
    flags: [
      "Es begann mit einem Sturz, Verdrehen oder Schlag und ist schnell angeschwollen",
      "Du kannst das Bein nicht voll belasten",
      "Das Gelenk blockiert, hakt oder knickt weg",
      "Es ist heiß, gerötet und geschwollen, oder du hast Fieber",
      "Taubheit, Kribbeln oder einschießende Schmerzen ins Bein",
      "Schmerzen nachts oder in Ruhe, die nicht nachlassen",
    ],
    startNone: "Nichts davon trifft zu",
    startSome: (n) => `Weiter (${n} angekreuzt)`,
    startFine:
      "Das sind Trainingstipps, keine medizinische Beratung. Die Inhalte stützen sich auf veröffentlichte Forschung und wurden nicht von medizinischem Fachpersonal geprüft.",

    stopTitle: "Lass das zuerst abklären",
    stopLead:
      "Was du angekreuzt hast, kann auf eine Verletzung hindeuten, die untersucht werden sollte. Bitte geh zum Arzt oder in die Physiotherapie, bevor du weiter trainierst.",
    stopUrgent:
      "Du kannst nicht auftreten oder das Gelenk ist heiß, rot und geschwollen? Dann noch heute.",
    stopBack: "Antworten ändern",
    stopCleared: "Eine Fachperson hat mir Training erlaubt",

    regionTitle: "Wo tut es weh?",
    regionLead: "Tippe auf den Bereich. Im nächsten Schritt zoomst du hinein.",
    front: "Vorne",
    backView: "Hinten",

    spotTitle: (region) => `${region}: wo genau?`,
    spotLead:
      "Dreh die Ansicht und tippe auf die Stelle, die am meisten schmerzt.",
    spotLeadList: "Wähle die Stelle, die am meisten schmerzt.",
    views: {
      front: "Vorne",
      side: "Außen",
      inside: "Innen",
      back: "Hinten",
      sole: "Sohle",
      profile: "Seite",
      top: "Oben",
    },
    viewsLabel: "Ansicht",
    edges: {
      inner: "innen",
      outer: "außen",
      front: "vorne",
      back: "hinten",
      toes: "Zehen",
      heel: "Ferse",
      up: "oben",
      down: "unten",
    },
    spotPick: "Tippe auf die schmerzende Stelle",
    spotNext: (s) => `Weiter: ${s}`,

    causesTitle: "Wie fühlt es sich an?",
    causesLead:
      "Wähle die Beschreibung, die am besten passt. Der Fachbegriff steht klein darunter.",
    medName: "Fachbegriff",
    referBadge: "Abklären lassen",
    none: "Nichts davon passt",
    noneText:
      "Dann lohnt sich eine Untersuchung. In der Physiotherapie lässt sich das meist in einem Termin klären.",

    calm: "Beruhigen, dann belasten",
    painRule: "Schmerzregel",
    scale: ["0–3 OK", "4–5 Reduzieren", "6+ Stopp"],
    scaleLabel:
      "Schmerzskala von 0 bis 10: 0 bis 3 ist in Ordnung, 4 bis 5 heißt reduzieren, ab 6 heißt aufhören.",
    ruleText:
      "Bei Übungen und Läufen ist Schmerz bis 3/10 in Ordnung, wenn er bis zum nächsten Morgen abgeklungen ist.",
    loadYes:
      "Das könnte gut der Auslöser sein, halte dich also zuerst an die Laufhinweise oben. Wenn du wieder aufbaust, sollte kein Lauf mehr als etwa 10 % länger sein als dein längster Lauf der letzten 30 Tage, und keiner doppelt so lang.",
    loadNo:
      "Dann war die Trainingsbelastung wohl nicht der Auslöser. Halte dich trotzdem an die Laufhinweise oben, und kein Lauf sollte mehr als etwa 10 % länger sein als dein längster Lauf der letzten 30 Tage.",
    noLocal:
      "Hier liegt die Lösung meist weiter oben in der Kette. Halte dich an die Schmerzregel und starte mit deiner Kette unten.",
    noLocalNoChain:
      "Hier spielen Übungen kaum eine Rolle. Halte dich an die Hinweise oben und gib dem Ganzen etwas Zeit.",
    chainTitle: "Prüfe deine Kette",
    chainLead:
      "Diese Bereiche tragen oft zu diesem Problem bei. Jeder 30-Sekunden-Selbsttest zeigt, ob es bei dir ein schwaches Glied ist.",
    chainLabel: (items) => `Deine Kette: ${items}`,
    likely: {
      3: "Häufig beteiligt",
      2: "Manchmal beteiligt",
      1: "Gelegentlich beteiligt",
    },
    why: "Warum das zählt",
    test: "Selbsttest",
    pos: (n) =>
      `Wahrscheinlich ein schwaches Glied · ${n} ${n === 1 ? "Übung" : "Übungen"} in deiner Woche ergänzt`,
    posNone:
      "Wahrscheinlich ein schwaches Glied · die Übungen in deiner Woche decken das schon ab",
    neg: "Sieht vorerst gut aus",
    redo: "Neu testen",
    legend: {
      none: "Nicht getestet",
      pos: "Schwaches Glied",
      neg: "In Ordnung",
      pain: "Schmerz",
    },
    weekTitle: "Deine Woche",
    weekLead: (m) =>
      `Etwa ${m} Minuten pro Einheit. Wie oft, steht bei jeder Übung:`,
    weekLeadRuns: "Bau das in deine Läufe ein:",
    weekAllFine:
      "Keine schwachen Glieder gefunden. Bleib bei den Übungen oben.",
    weekEmpty:
      "Mach die Selbsttests oben, um Übungen für deine schwachen Glieder zu ergänzen.",
    duringRuns: "beim Laufen",
    later: "Später",
    laterNote: "Diese Übung erst dazunehmen, wenn der Schmerz abgeklungen ist.",
    min: "Min.",
    physioTitle: "Geh zur Physiotherapie, wenn",
    physio: [
      "es nach 6 Wochen mit dem Plan keinen klaren Fortschritt gibt",
      "der Schmerz im Alltag über 5/10 steigt oder dich nachts weckt",
      "eine Schwellung, Taubheit oder ein blockierendes oder wegknickendes Gelenk dazukommt",
    ],
    sources: "Quellen",
    share: "Plan teilen",
    shared: "Link kopiert. Er öffnet genau diesen Plan, samt Testergebnissen.",
    sharedFail:
      "Kopieren hat nicht geklappt. Der Link in der Adresszeile öffnet genau diesen Plan.",
    ex: "Üb.",
    video: "Demo ansehen",
    videoNote: "Lädt erst nach Tippen von youtube-nocookie.com",
    videoBy: (channel) => `Video: ${channel}`,
    videoTitle: (name) => `Demo-Video: ${name}`,
    videoNone: "Noch kein Demo-Video. Die Schritte oben beschreiben die Übung.",

    referToday: "Heute ärztlich abklären",
    referSoon: "Termin in Arztpraxis oder Physiotherapie vereinbaren",
    referLead:
      "Diese Beschreibung passt zu etwas, das Trainingstipps nicht allein lösen sollten.",
    meanwhile: "Bis dahin",
    referBack: "Andere Beschreibung wählen",

    broken: {
      title: "Diese Seite hat nicht geladen",
      body: "In ihrem Inhalt ist etwas kaputt. Wähle den Bereich noch einmal, und wenn es wieder passiert, melde es bitte auf GitHub.",
      action: "Zurück zur Körperkarte",
    },

    titles: {
      start: "Bevor es losgeht",
      stop: "Lass das zuerst abklären",
      region: "Wo tut es weh?",
      topics: "Alle Themen",
      prevent: "Verletzungen vorbeugen",
      return: "Nach einer Verletzung zurück zum Laufen",
    },

    meta: {
      start: "Schmerzen beim Laufen: Ursache und Schwachstellen finden",
      site: "Tippe an, wo das Laufen schmerzt, prüfe die Schwachstellen deiner Kette mit 30-Sekunden-Tests und hol dir einen Kraftplan. Auf Deutsch und Englisch.",
      stop: "Manche Beschwerden gehören zuerst in ärztliche oder physiotherapeutische Hände. Was du jetzt tun solltest.",
      region:
        "Tippe auf der Körperkarte an, wo das Laufen schmerzt: unterer Rücken, Hüfte, Oberschenkel, Knie, Schienbein und Wade, Sprunggelenk und Fuß.",
      topics:
        "Alle Laufbeschwerden und Verletzungen in Prevent Pain, nach Körperregion, jeweils mit Übungen und Selbsttests für die Schwachstellen.",
      prevent:
        "So bleibst du beim Laufen verletzungsfrei: die Regel für einzelne Läufe, zwei kurze Krafteinheiten pro Woche und ein schneller Risiko-Check. Auf Basis veröffentlichter Forschung.",
      return:
        "Nach einer Verletzung zurück zum Laufen: erst ein paar Tests bestehen, dann Schritt für Schritt vom Gehen zum Laufen, mit eigenen Wegen nach Ermüdungsbrüchen, Wadenzerrungen und nach der Geburt.",
      spot: (region) => `${region}: Schmerzen beim Laufen`,
      spotDesc: (region, spots) =>
        `${region}: Schmerzen beim Laufen. Stellen: ${spots}. Tippe die Stelle an, wähle, wie es sich anfühlt, und hol dir einen Plan.`,
      causes: (spot, region) => `${spot} (${region}): Was dahinterstecken kann`,
      causesDesc: (spot, names) =>
        `${spot}: ${names}. Wähle die passende Beschreibung und hol dir Übungen und Selbsttests.`,
      plan: (name) => `${name}: Übungen und Tipps fürs Laufen`,
      refer: (name) => `${name}: ärztlich abklären`,
    },
    topicsLead:
      "Alle Beschwerden und Verletzungen, die Prevent Pain abdeckt, nach Körperregion. Du weißt nicht, was du hast? Fang damit an, wo es wehtut.",
    topicsStart: "Damit anfangen, wo es wehtut",
    topicsGuides: "Ratgeber",
    youthMark: "unter 18",

    referRoutine: "In den nächsten Wochen abklären lassen",
    youthTitle: "Unter 18?",
    youthBadge: "Für unter 18-Jährige",
    youthLead:
      "Wachsende Knochen haben eigene Verletzungen. Diese Beschreibungen sind für Kinder und Jugendliche.",
    exitsTitle: "Erst das prüfen",
    exitsLead:
      "Wenn du eine dieser Fragen mit Ja beantwortest, öffne lieber diese Karte.",
    avoidLabel: "Vorerst weglassen",
    stage: {
      1: "Stufe 1 · Halten",
      2: "Stufe 2 · Langsame Kraft",
      3: "Stufe 3 · Federnd",
    },
    ladder:
      "Diese Übungen bauen in Stufen aufeinander auf: erst Halteübungen, dann langsame Kraftübungen, dann federnde Übungen, dann Laufen. Geh eine Stufe weiter, wenn die aktuelle etwa eine Woche lang innerhalb der Schmerzregel geblieben ist.",
    rtrTitle: "Zurück zum Laufen",
    rtrPlanLead:
      "Du läufst innerhalb der Schmerzregel weiter? Dann bleib dabei. Musstest du pausieren, steig Schritt für Schritt wieder ein:",
    rtrReferLead: "Sobald du untersucht wurdest und wieder laufen darfst:",
    rtrShow: "Schritte zeigen",
    rtrHide: "Schritte ausblenden",
    gatesTitle: "Erst diese Tests bestehen",
    phasesTitle: "Dann steigern",
    phaseNext: "Weiter, wenn",
    rtrMore: "Mehr zum Wiedereinstieg ins Laufen",
    preventNext: "Wenn es abgeklungen ist: so beugst du Verletzungen vor",
    startPrevent: "Gerade schmerzfrei? So beugst du Verletzungen vor",
    ifYes: "Wenn ja",
    blocksTitle: "Deine zwei Einheiten",
    preventStart: "Es tut schon etwas weh? Fang damit an, wo",
  },
};
