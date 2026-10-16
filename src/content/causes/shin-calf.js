// shin-calf causes. Schema: see README "Content model".
export default [
  {
    id: "mtss",
    kind: "plan",
    en: {
      title: "Diffuse ache along the inner shin, worst early in a run",
      desc: "Tender over a stretch of 5 cm or more on the lower inner shin. It often eases once you're warm, then aches afterwards or the next morning, and usually follows more mileage or speed.",
      name: "Medial tibial stress syndrome (shin splints)",
      about:
        "The shinbone and the tissue along its inner edge are getting more load than they can handle right now. It's very common in runners and usually settles with a graded return to running, backed by calf strength work, though that can take a few months. If the pain narrows to one spot, or aches at rest or at night, stop running and get it checked.",
      load: "Run only as far and as fast as the pain rule allows, often about half your usual weekly distance for 2–3 weeks, on flat, even ground and without speed work. Build distance back up before adding pace.",
    },
    de: {
      title: "Flächiger Schmerz innen am Schienbein, vor allem zu Laufbeginn",
      desc: "Druckempfindlich auf einer Länge von 5 cm oder mehr an der unteren Schienbeininnenkante. Wird nach dem Einlaufen oft besser, schmerzt danach oder am nächsten Morgen und tritt meist nach mehr Kilometern oder mehr Tempo auf.",
      name: "Mediales Tibiakantensyndrom (Schienbeinkantensyndrom)",
      about:
        "Das Schienbein und das Gewebe an seiner Innenkante bekommen gerade mehr Last, als sie verkraften. Das ist bei Laufenden sehr häufig und bessert sich meist mit einem stufenweisen Wiedereinstieg ins Laufen, unterstützt durch Krafttraining für die Waden, auch wenn das einige Monate dauern kann. Zieht sich der Schmerz auf eine Stelle zusammen oder tut es in Ruhe oder nachts weh, hör mit dem Laufen auf und lass es abklären.",
      load: "Lauf nur so weit und so schnell, wie die Schmerzregel es zulässt. Oft heißt das 2–3 Wochen etwa der halbe Wochenumfang, auf flachem, ebenem Untergrund und ohne Tempotraining. Erst den Umfang wieder aufbauen, dann das Tempo.",
    },
    local: ["bent-knee-raise", "calf-raise"],
    chain: [
      [
        "calf",
        3,
        {
          en: "When your calves tire early in a run, less of each landing is absorbed by muscle and more goes into the shinbone. Studies have found less calf endurance in people with shin splints than in those without.",
          de: "Ermüden die Waden früh im Lauf, fängt der Muskel weniger von jeder Landung ab und mehr Last geht ins Schienbein. Studien fanden bei Menschen mit Schienbeinkantensyndrom weniger Kraftausdauer in den Waden als bei anderen.",
        },
      ],
      ["foot", 2],
      ["stride", 2],
      [
        "hipabd",
        1,
        {
          en: "In one small study, runners who went on to develop shin splints showed more hip drop while running. When the pelvis drops, the thigh and shin turn inward and the inner edge of the bone can take more load.",
          de: "In einer kleinen Studie zeigten Laufende, die später ein Schienbeinkantensyndrom bekamen, ein stärker absinkendes Becken beim Laufen. Sinkt das Becken ab, drehen Oberschenkel und Schienbein nach innen, und die Innenkante des Knochens kann mehr Last abbekommen.",
        },
      ],
    ],
    sources: [
      "winters2020",
      "moen2012",
      "mattock2021",
      "reinking2017",
      "becker2018",
      "edwards2009",
    ],
  },
  {
    id: "tibia-bsi-refer",
    kind: "refer",
    urgency: "soon",
    en: {
      title: "Pinpoint pain on the shinbone that hurts when you hop",
      desc: "Tender in one spot on the inner or front edge of the bone, smaller than about 5 cm. Hopping on that leg hurts, and it can ache when you walk, at rest or at night. It often builds over a few weeks of more running.",
      name: "Tibial bone stress injury (stress reaction or stress fracture)",
      about:
        "This pattern can mean the shinbone has been loaded faster than it could rebuild, which can range from a stress reaction to a small crack. Caught early, many runners are back to running within about 6–8 weeks, sometimes longer, with less load and a gradual return, but running through it can make it worse. A sore spot on the front edge of the bone heals more slowly and needs a doctor to see it within days.",
      meanwhile:
        "Stop running and avoid hopping and jumping until a doctor or physio has seen you. Walking is fine if it doesn't hurt, and cycling, swimming or pool running keep you fit if they're pain-free. If even normal walking hurts, see a doctor within a day or two. Tell them about any recent jump in training, earlier stress injuries, eating too little or missed periods.",
    },
    de: {
      title: "Punktueller Schmerz am Schienbeinknochen, schlimmer beim Hüpfen",
      desc: "Druckschmerz an einer Stelle an der Innen- oder Vorderkante des Knochens, kleiner als etwa 5 cm. Hüpfen auf dem Bein tut weh, und es kann beim Gehen, in Ruhe oder nachts schmerzen. Baut sich oft über einige Wochen mit mehr Laufen auf.",
      name: "Knochenstressverletzung am Schienbein (Stressreaktion oder Ermüdungsbruch)",
      about:
        "Dieses Muster kann bedeuten, dass das Schienbein schneller belastet wurde, als es sich umbauen konnte. Das kann von einer Stressreaktion bis zu einem feinen Riss reichen. Früh erkannt laufen viele mit weniger Belastung und schrittweisem Wiedereinstieg nach etwa 6–8 Wochen wieder, manchmal dauert es länger. Weiterlaufen kann es aber verschlimmern. Eine schmerzhafte Stelle an der Vorderkante des Knochens heilt langsamer und sollte innerhalb weniger Tage ärztlich untersucht werden.",
      meanwhile:
        "Hör mit dem Laufen auf und verzichte auf Hüpfen und Springen, bis du ärztlich oder physiotherapeutisch untersucht wurdest. Gehen ist in Ordnung, solange es nicht wehtut, und Radfahren, Schwimmen oder Aquajogging halten dich fit, wenn sie schmerzfrei sind. Tut schon normales Gehen weh, lass dich innerhalb von ein bis zwei Tagen ärztlich untersuchen. Erzähl in der Praxis von kürzlichen Trainingssteigerungen, früheren Stressverletzungen, zu knapper Ernährung oder ausbleibender Periode.",
    },
    sources: [
      "warden2014",
      "warden2021",
      "hoenig2022",
      "hoenig2023",
      "milgrom2021",
      "mountjoy2023",
    ],
  },
  {
    id: "tib-ant",
    kind: "plan",
    en: {
      title:
        "Aching, tender muscle on the front of the shin after hills or speed",
      desc: "Hurts when you press on the muscle or lift your foot against resistance, and lingers after the run rather than fading soon after you stop. Often follows more hills, downhill or speed, new shoes or tightly tied laces.",
      name: "Tibialis anterior overload or tendinopathy (anterior shin splints)",
      about:
        "The muscle that lifts your foot and lowers it at each landing has been worked harder than it's used to. It often settles within a few weeks with less of the load that set it off and gradual strength work for the muscle. If the pain sits in one spot on the bone rather than in the muscle, or hopping hurts, stop running and hopping and get it checked soon: a stress injury on the front of the shinbone is one of the slower-healing kinds.",
      load: "Drop hills, downhill and speed sessions for 2–3 weeks and keep easy, flat runs within the pain rule. If it's sore under the laces, loosen them or skip the eyelets over the sore spot.",
    },
    de: {
      title: "Dumpfer Muskelschmerz vorn am Schienbein nach Hügeln oder Tempo",
      desc: "Tut weh, wenn du auf den Muskel drückst oder den Fuß gegen Widerstand anhebst, und hält nach dem Lauf an, statt bald nach dem Stoppen abzuklingen. Folgt oft auf mehr Hügel, Bergabläufe oder Tempo, neue Schuhe oder eine zu feste Schnürung.",
      name: "Überlastung oder Tendinopathie des Tibialis anterior (vorderer Schienbeinmuskel)",
      about:
        "Der Muskel, der deinen Fuß anhebt und bei jeder Landung abbremst, musste mehr leisten als gewohnt. Wenn du die auslösende Belastung verringerst und den Muskel schrittweise kräftigst, beruhigt er sich oft innerhalb weniger Wochen. Sitzt der Schmerz punktuell am Knochen statt im Muskel oder tut Hüpfen weh, hör mit Laufen und Hüpfen auf und lass es bald abklären, denn eine Stressverletzung vorn am Schienbein heilt besonders langsam.",
      load: "Für 2–3 Wochen Hügel, Bergabläufe und Tempoeinheiten weglassen. Lockere, flache Läufe sind innerhalb der Schmerzregel in Ordnung. Drückt es unter den Schnürsenkeln, locker schnüren oder die Ösen über der schmerzhaften Stelle auslassen.",
    },
    local: ["toe-lift-hold", "wall-toe-raise"],
    chain: [
      [
        "stride",
        2,
        {
          en: "Landing heel-first with your foot far in front of you makes the front shin muscle work harder, both to lift the foot before landing and to lower it after. Downhill running exaggerates this, and a slightly quicker, shorter stride eases it.",
          de: "Landest du mit der Ferse weit vor dem Körper, muss der vordere Schienbeinmuskel mehr arbeiten: Er hebt den Fuß vor der Landung an und senkt ihn danach ab. Bergab verstärkt sich das, ein etwas schnellerer, kürzerer Schritt entlastet.",
        },
      ],
      [
        "foot",
        1,
        {
          en: "In a flatter foot, the front shin muscle works harder at each landing to help hold up the arch, which adds to its load.",
          de: "Bei einem flacheren Fuß arbeitet der vordere Schienbeinmuskel bei jeder Landung stärker mit, um das Gewölbe zu halten. Das erhöht seine Last.",
        },
      ],
    ],
    sources: [
      "brewer2012",
      "vernillo2017",
      "valencia2023",
      "murley2009",
      "hagen2010",
      "millar2021",
    ],
  },
  {
    id: "compartment-refer",
    kind: "refer",
    urgency: "soon",
    en: {
      title: "Tight, burning shin that builds at the same point in every run",
      desc: "Builds in the front or outer shin after a predictable time or distance, can bring numbness on top of the foot or a slapping foot, and eases within about 15–30 minutes of stopping. Between runs the leg usually feels normal, and both legs can be affected.",
      name: "Chronic exertional compartment syndrome (CECS)",
      about:
        "The shin muscles sit in tight sleeves of tissue, and in some runners they swell so much during exercise that the pressure inside squeezes muscles and nerves. A sports doctor or physio can assess it, and a pressure test after exercise is often used to confirm it. Learning to land further forward on your foot helps some runners, and surgery is an option if that doesn't work.",
      meanwhile:
        "Stop at the first sign of tightness rather than pushing through, and swap runs for cycling or swimming if they don't bring it on. Note when it starts, how long it lasts and any numbness, for your appointment. If pain keeps building after you stop, the shin turns hard, swollen and very painful, or numbness or a weak foot doesn't wear off, go to an emergency department straight away.",
    },
    de: {
      title:
        "Spannen und Brennen im Schienbein, immer zur gleichen Zeit im Lauf",
      desc: "Baut sich vorn oder außen am Schienbein nach vorhersehbarer Zeit oder Strecke auf, kann den Fußrücken taub machen oder den Fuß aufklatschen lassen und lässt innerhalb von etwa 15–30 Min. nach dem Stoppen nach. Zwischen den Läufen fühlt sich das Bein meist normal an, und es können beide Beine betroffen sein.",
      name: "Chronisches belastungsinduziertes Kompartmentsyndrom (Logensyndrom)",
      about:
        "Die Schienbeinmuskeln liegen in straffen Bindegewebshüllen. Bei manchen Laufenden schwellen sie unter Belastung so stark an, dass der Druck darin Muskeln und Nerven einengt. Eine sportmedizinische oder physiotherapeutische Untersuchung gibt erste Klarheit, eine Druckmessung nach Belastung sichert meist die Diagnose. Weiter vorn auf dem Fuß zu landen hilft manchen Laufenden, sonst ist eine Operation möglich.",
      meanwhile:
        "Hör beim ersten Spannungsgefühl auf, statt weiterzulaufen, und ersetze Läufe durch Radfahren oder Schwimmen, wenn das keine Beschwerden auslöst. Notier dir für den Termin, wann es anfängt, wie lange es anhält und ob etwas taub wird. Nimmt der Schmerz nach dem Stoppen weiter zu, wird das Schienbein hart, geschwollen und sehr schmerzhaft oder gehen Taubheit oder Schwäche im Fuß nicht weg, geh sofort in die Notaufnahme.",
    },
    sources: ["buerba2019", "rajasekaran2016", "diebal2012", "helmhout2015"],
  },
  {
    id: "calf-strain",
    kind: "plan",
    en: {
      title: "Sudden tightness or a twinge in the calf during a run",
      desc: "Started mid-run, often when pushing off, speeding up or running uphill. You can still walk, but rising onto your toes or stretching the calf hurts, more so with the knee bent if the deeper soleus muscle is strained.",
      name: "Mild calf strain (gastrocnemius or soleus)",
      about:
        "A small part of the calf muscle has been overstretched or slightly torn under load. Mild strains usually heal within a few weeks, and starting gentle loading after about 2 days often gets you back sooner than waiting a week or more. If it felt like a kick or a pop, or you can't rise onto your toes on that leg, get it seen today, as it can be a bigger tear or an Achilles rupture. With a large bruise or if you can't walk normally, get it checked before you train on it.",
      load: "Pause running, walk as much as is comfortable and skip hard stretching for the first days. Restart once brisk walking, 15 single-leg calf raises and 10 hops on that leg are pain-free, with walk-run intervals on flat ground every other day, building time before speed or hills.",
    },
    de: {
      title: "Plötzliches Ziehen oder Stechen in der Wade beim Laufen",
      desc: "Begann mitten im Lauf, oft beim Abdrücken, Beschleunigen oder bergauf. Gehen klappt noch, aber Zehenstand oder Dehnen der Wade tun weh, bei einer Zerrung des tiefen Wadenmuskels (Soleus) vor allem mit gebeugtem Knie.",
      name: "Leichte Wadenzerrung (Gastrocnemius oder Soleus)",
      about:
        "Ein kleiner Teil des Wadenmuskels wurde unter Last überdehnt oder leicht eingerissen. Leichte Zerrungen heilen meist innerhalb weniger Wochen, und beginnst du nach etwa 2 Tagen mit sanfter Belastung, bist du oft schneller zurück als nach einer Woche oder mehr Schonung. Fühlte es sich wie ein Tritt oder Knall an oder kannst du dich auf dem Bein nicht auf die Zehen stellen, lass es noch heute untersuchen, denn das kann ein größerer Riss oder ein Achillessehnenriss sein. Bei einem großen Bluterguss oder wenn du nicht normal gehen kannst, lass es abklären, bevor du damit trainierst.",
      load: "Laufpause, aber so viel gehen, wie es angenehm ist, und in den ersten Tagen nicht kräftig dehnen. Wieder einsteigen, sobald zügiges Gehen, 15-mal einbeiniges Wadenheben und 10 Hüpfer auf dem Bein schmerzfrei klappen, mit Geh-Lauf-Intervallen auf flachem Untergrund jeden zweiten Tag. Erst die Dauer steigern, dann Tempo oder Hügel.",
    },
    local: ["two-leg-calf-raise", "bent-knee-raise"],
    chain: [
      [
        "calf",
        3,
        {
          en: "Calf strains often come back, especially when the calf hasn't regained its full strength and endurance. Hold off on this test until you can do 15 pain-free single-leg raises, and stop counting at the first pain. Before full training, aim for 20 or more, level with the other side.",
          de: "Wadenzerrungen kommen oft wieder, vor allem wenn die Wade ihre volle Kraft und Ausdauer noch nicht zurückhat. Mach den Test erst, wenn du 15 einbeinige Wiederholungen schmerzfrei schaffst, und hör beim ersten Schmerz auf zu zählen. Ziel vor dem vollen Training: 20 oder mehr, so viele wie auf der anderen Seite.",
        },
      ],
      [
        "ankle",
        1,
        {
          en: "The ankle can stay stiff after a calf strain. Once walking is comfortable, gently regaining your knee-to-wall range lets the calf lengthen through each stride without being pulled at the end of its range.",
          de: "Nach einer Wadenzerrung kann das Sprunggelenk steif bleiben. Sobald Gehen angenehm ist, hilft es, die Knie-zur-Wand-Weite behutsam zurückzugewinnen. Dann kann sich die Wade bei jedem Schritt verlängern, ohne am Ende ihres Spielraums zu zerren.",
        },
      ],
    ],
    later: ["calf-raise"],
    sources: ["green2017", "green2022", "bayer2017", "dixon2009"],
  },
];
