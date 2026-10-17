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
    exits: [
      {
        to: "tibia-bsi-refer",
        en: "Is it now one pinpoint spot on the bone that hurts when you hop, or does it ache at rest or at night?",
        de: "Ist es jetzt eine punktuelle Stelle am Knochen, die beim Hüpfen wehtut, oder schmerzt es in Ruhe oder nachts?",
      },
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
        "This pattern can mean the shinbone has been loaded faster than it could rebuild, which can range from a stress reaction to a small crack. Caught early, a sore spot on the inner edge usually heals with less load and a gradual return, and many runners are running again within about 6–8 weeks, sometimes longer, but running through it can make it worse. A spot on the sharp front ridge of the shin, usually in the middle third and worse when you jump, is a higher-risk type: it heals slowly and can need 4–6 months without running or jumping or sometimes surgery, so a doctor should see it within days.",
      meanwhile:
        "Stop running and avoid hopping and jumping until a doctor or physio has seen you. Walking is fine if it doesn't hurt, and cycling, swimming or pool running keep you fit if they're pain-free. If even normal walking hurts, see a doctor within a day or two. Tell them about any recent jump in training, earlier stress injuries, eating too little or missed periods.",
    },
    de: {
      title: "Punktueller Schmerz am Schienbeinknochen, schlimmer beim Hüpfen",
      desc: "Druckschmerz an einer Stelle an der Innen- oder Vorderkante des Knochens, kleiner als etwa 5 cm. Hüpfen auf dem Bein tut weh, und es kann beim Gehen, in Ruhe oder nachts schmerzen. Baut sich oft über einige Wochen mit mehr Laufen auf.",
      name: "Knochenstressverletzung am Schienbein (Stressreaktion oder Ermüdungsbruch)",
      about:
        "Dieses Muster kann bedeuten, dass das Schienbein schneller belastet wurde, als es sich umbauen konnte. Das kann von einer Stressreaktion bis zu einem feinen Riss reichen. Früh erkannt heilt eine schmerzhafte Stelle an der Innenkante meist mit weniger Belastung und schrittweisem Wiedereinstieg, und viele laufen nach etwa 6–8 Wochen wieder, manchmal dauert es länger. Weiterlaufen kann es aber verschlimmern. Eine Stelle an der scharfen Vorderkante des Schienbeins, meist im mittleren Drittel und schlimmer beim Springen, ist eine Form mit höherem Risiko: Sie heilt langsam und kann 4–6 Monate weitgehende Schonung oder manchmal eine Operation brauchen, deshalb sollte sie innerhalb weniger Tage ärztlich untersucht werden.",
      meanwhile:
        "Hör mit dem Laufen auf und verzichte auf Hüpfen und Springen, bis du ärztlich oder physiotherapeutisch untersucht wurdest. Gehen ist in Ordnung, solange es nicht wehtut, und Radfahren, Schwimmen oder Aquajogging halten dich fit, wenn sie schmerzfrei sind. Tut schon normales Gehen weh, lass dich innerhalb von ein bis zwei Tagen ärztlich untersuchen. Erzähl in der Praxis von kürzlichen Trainingssteigerungen, früheren Stressverletzungen, zu knapper Ernährung oder ausbleibender Periode.",
    },
    warn: ["fuel"],
    rtr: "bone",
    sources: [
      "warden2014",
      "warden2021",
      "hoenig2022",
      "hoenig2023",
      "milgrom2021",
      "mountjoy2023",
      "jasty2021",
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
    exits: [
      {
        to: "tibia-bsi-refer",
        en: "Does one spot on the bone itself hurt to press, rather than the muscle, or does hopping on that leg hurt?",
        de: "Tut eher eine Stelle direkt am Knochen auf Druck weh als der Muskel, oder schmerzt Hüpfen auf dem Bein?",
      },
      {
        to: "compartment-refer",
        en: "Does a tight, burning shin build at the same point in every run, maybe with a numb or slapping foot?",
        de: "Spannt und brennt das Schienbein immer zur gleichen Zeit im Lauf, teils mit taubem oder aufklatschendem Fuß?",
      },
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
        "The shin muscles sit in tight sleeves of tissue, and in some runners they swell so much during exercise that the pressure inside squeezes muscles and nerves. A sports doctor or physio can assess it, and a pressure test after exercise is often used to confirm it; they should also check for popliteal artery entrapment, a squeezed artery behind the knee that can feel very similar. Learning to land further forward on your foot helps some runners, and surgery is an option if that doesn't work.",
      meanwhile:
        "Stop at the first sign of tightness rather than pushing through, and swap runs for cycling or swimming if they don't bring it on. Note when it starts, how long it lasts and any numbness, for your appointment. If pain keeps building after you stop, the shin turns hard, swollen and very painful, or numbness or a weak foot doesn't wear off, go to an emergency department straight away.",
    },
    de: {
      title:
        "Spannen und Brennen im Schienbein, immer zur gleichen Zeit im Lauf",
      desc: "Baut sich vorn oder außen am Schienbein nach vorhersehbarer Zeit oder Strecke auf, kann den Fußrücken taub machen oder den Fuß aufklatschen lassen und lässt innerhalb von etwa 15–30 Min. nach dem Stoppen nach. Zwischen den Läufen fühlt sich das Bein meist normal an, und es können beide Beine betroffen sein.",
      name: "Chronisches belastungsinduziertes Kompartmentsyndrom (Logensyndrom)",
      about:
        "Die Schienbeinmuskeln liegen in straffen Bindegewebshüllen. Bei manchen Laufenden schwellen sie unter Belastung so stark an, dass der Druck darin Muskeln und Nerven einengt. Eine sportmedizinische oder physiotherapeutische Untersuchung gibt erste Klarheit, eine Druckmessung nach Belastung sichert meist die Diagnose. Dabei sollte auch an eine Einklemmung der Kniekehlenarterie (PAES) gedacht werden, die sich sehr ähnlich anfühlen kann. Weiter vorn auf dem Fuß zu landen hilft manchen Laufenden, sonst ist eine Operation möglich.",
      meanwhile:
        "Hör beim ersten Spannungsgefühl auf, statt weiterzulaufen, und ersetze Läufe durch Radfahren oder Schwimmen, wenn das keine Beschwerden auslöst. Notier dir für den Termin, wann es anfängt, wie lange es anhält und ob etwas taub wird. Nimmt der Schmerz nach dem Stoppen weiter zu, wird das Schienbein hart, geschwollen und sehr schmerzhaft oder gehen Taubheit oder Schwäche im Fuß nicht weg, geh sofort in die Notaufnahme.",
    },
    exits: [
      {
        to: "paes-refer",
        en: "Is the tightness mainly in the calf, or does your foot turn cold or pale during runs?",
        de: "Spannt es vor allem in der Wade, oder wird dein Fuß beim Laufen kalt oder blass?",
      },
    ],
    sources: [
      "buerba2019",
      "rajasekaran2016",
      "diebal2012",
      "helmhout2015",
      "hislop2014",
      "edwards2005",
    ],
  },
  {
    id: "calf-strain",
    kind: "plan",
    en: {
      title: "Sudden twinge high in the calf when pushing off or speeding up",
      desc: "Started mid-run with a sudden pull, often during speed work, on a hill or in a quick push-off. It sits in the upper or inner calf, you can still walk without much of a limp, and a calf raise with the knee straight hurts more than one with the knee bent.",
      name: "Mild calf strain (gastrocnemius)",
      about:
        "A small part of the big, visible calf muscle has been overstretched or slightly torn under load. Mild strains usually heal within a few weeks, and starting gentle loading after about 2 days often gets you back sooner than waiting a week or more. If it felt like a kick or a shot, or you're limping or a large bruise appears, the tennis leg card fits better; if you can't rise onto your toes on that leg at all, get it seen today, as it can be an Achilles rupture.",
      load: "Pause running, walk as much as is comfortable and skip hard stretching for the first days. Start the walk-run steps under Back to running once you pass its checks, on flat ground and never two running days in a row at first, building time before speed or hills. Before full training, aim for 30 single-leg calf raises within about 10% of the other side.",
    },
    de: {
      title:
        "Plötzliches Ziehen oben in der Wade beim Abdrücken oder Beschleunigen",
      desc: "Begann mitten im Lauf mit einem plötzlichen Ziehen, oft bei Tempoeinheiten, am Hügel oder bei einem schnellen Abdruck. Es sitzt in der oberen oder inneren Wade, du kannst noch ohne deutliches Hinken gehen, und Wadenheben mit gestrecktem Knie tut mehr weh als mit gebeugtem.",
      name: "Leichte Wadenzerrung (Gastrocnemius)",
      about:
        "Ein kleiner Teil des großen, sichtbaren Wadenmuskels wurde unter Last überdehnt oder leicht eingerissen. Leichte Zerrungen heilen meist innerhalb weniger Wochen, und beginnst du nach etwa 2 Tagen mit sanfter Belastung, bist du oft schneller zurück als nach einer Woche oder mehr Schonung. Fühlte es sich wie ein Tritt oder Schlag an, hinkst du oder zeigt sich ein großer Bluterguss, passt die Karte zum Tennisbein besser. Kannst du dich auf dem Bein gar nicht auf die Zehen stellen, lass es noch heute untersuchen, denn das kann ein Achillessehnenriss sein.",
      load: "Laufpause, aber so viel gehen, wie es angenehm ist, und in den ersten Tagen nicht kräftig dehnen. Steig mit den Geh-Lauf-Schritten unter „Zurück zum Laufen“ wieder ein, sobald du die Tests dort bestehst, auf flachem Untergrund und anfangs nie an zwei Tagen hintereinander. Erst die Dauer steigern, dann Tempo oder Hügel. Vor dem vollen Training sollten 30 Wiederholungen einbeiniges Wadenheben klappen, höchstens etwa 10 % weniger als auf der anderen Seite.",
    },
    local: ["two-leg-calf-raise", "calf-raise", "deficit-calf-raise"],
    later: ["calf-raise", "deficit-calf-raise"],
    chain: [
      [
        "calf",
        3,
        {
          en: "Calf strains often come back, especially when the calf hasn't regained its full strength and endurance. Hold off on this test until you can do 15 pain-free single-leg raises, and stop counting at the first pain. Before full training, aim for 30 or more, within about 10% of the other side.",
          de: "Wadenzerrungen kommen oft wieder, vor allem wenn die Wade ihre volle Kraft und Ausdauer noch nicht zurückhat. Mach den Test erst, wenn du 15 einbeinige Wiederholungen schmerzfrei schaffst, und hör beim ersten Schmerz auf zu zählen. Ziel vor dem vollen Training: 30 oder mehr, höchstens etwa 10 % weniger als auf der anderen Seite.",
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
    exits: [
      {
        to: "achilles-rupture-refer",
        en: "Did it feel like a kick just above the heel, and now you can't rise onto your toes on that leg at all?",
        de: "War es wie ein Tritt knapp über der Ferse, und kannst du dich auf dem Bein gar nicht auf die Zehen stellen?",
      },
      {
        to: "paes-refer",
        en: "Does the 'strain' keep coming back at the same point in runs, sometimes with a cold or numb foot?",
        de: "Kommt die „Zerrung“ immer wieder zur gleichen Zeit im Lauf, manchmal mit kaltem oder taubem Fuß?",
      },
      {
        to: "bakers-cyst-refer",
        en: "Is the whole calf swollen or warm, or did you notice a lump behind the knee first?",
        de: "Ist die ganze Wade geschwollen oder warm, oder hattest du vorher eine Beule in der Kniekehle bemerkt?",
      },
    ],
    rtr: "calf",
    warn: ["clot"],
    sources: ["green2017", "green2022", "green2020", "bayer2017", "dixon2009"],
  },
  {
    id: "soleus-strain",
    kind: "plan",
    en: {
      title: "Deep ache low in the calf that built up late in a run",
      desc: "Often creeps in towards the end of a long or steady run rather than with one sharp twinge, and sits deep in the lower or outer calf. A calf raise with the knee bent hurts more than one with the knee straight, and the calf often feels tight and sore the next morning.",
      name: "Soleus strain (deep calf strain)",
      about:
        "The soleus is the deep, flat calf muscle under the bigger one you can see. It works hardest with the knee bent and takes a large share of every stride, so it tends to give way to fatigue late in a run; in elite Australian football it was by far the most commonly strained calf muscle, though runners have been studied less. Mild strains usually settle within a few weeks with calf strength work that gets gradually heavier, but they come back easily if you return before the calf has its full strength back.",
      load: "Pause running, walk as much as is comfortable and skip hard stretching for the first days. Start the walk-run steps under Back to running once you pass its checks, with short intervals on flat ground and never two running days in a row at first. Before full training, hills or speed, aim for 30 single-leg calf raises within about 10% of the other side, with bent-knee raises close to the other side too.",
      avoid:
        "In the first weeks back, skip long, slow, steady jogs, which keep the deep calf working without a break; short walk-run intervals are easier on it.",
    },
    de: {
      title: "Tiefer Schmerz in der unteren Wade, der spät im Lauf aufkam",
      desc: "Kommt oft schleichend gegen Ende eines langen oder gleichmäßigen Laufs statt mit einem plötzlichen Stich und sitzt tief in der unteren oder äußeren Wade. Wadenheben mit gebeugtem Knie tut mehr weh als mit gestrecktem, und am nächsten Morgen fühlt sich die Wade oft fest und schmerzhaft an.",
      name: "Soleuszerrung (Zerrung des Schollenmuskels)",
      about:
        "Der Schollenmuskel (Soleus) ist der tiefe, flache Wadenmuskel unter dem größeren, sichtbaren. Er arbeitet vor allem bei gebeugtem Knie und trägt bei jedem Schritt einen großen Teil der Last, deshalb gibt er oft spät im Lauf unter Ermüdung nach. Bei Profis im Australian Football war er mit Abstand der am häufigsten gezerrte Wadenmuskel, Laufende sind weniger gut untersucht. Leichte Zerrungen heilen meist innerhalb weniger Wochen mit Krafttraining für die Wade, das schrittweise schwerer wird, kommen aber leicht wieder, wenn du zu früh einsteigst, bevor die Wade ihre volle Kraft zurückhat.",
      load: "Laufpause, aber so viel gehen, wie es angenehm ist, und in den ersten Tagen nicht kräftig dehnen. Steig mit den Geh-Lauf-Schritten unter „Zurück zum Laufen“ wieder ein, sobald du die Tests dort bestehst, mit kurzen Intervallen auf flachem Untergrund und anfangs nie an zwei Tagen hintereinander. Vor vollem Training, Hügeln oder Tempo sollten 30 Wiederholungen einbeiniges Wadenheben klappen, höchstens etwa 10 % weniger als auf der anderen Seite, und auch mit gebeugtem Knie fast so viele wie auf der anderen Seite.",
      avoid:
        "In den ersten Wochen lange, langsame Dauerläufe weglassen, weil sie die tiefe Wade ohne Pause arbeiten lassen; kurze Geh-Lauf-Intervalle schonen sie mehr.",
    },
    local: [
      "soleus-wall-hold",
      "bent-knee-raise",
      "deficit-calf-raise",
      "pogo-hop",
    ],
    later: ["deficit-calf-raise", "pogo-hop", "calf-raise", "ktw-mob"],
    chain: [
      [
        "calf",
        3,
        {
          en: "Calf strains often come back when the calf hasn't regained its full strength and endurance. Hold off on this test until 15 single-leg raises are pain-free, stop counting at the first pain, and compare bent-knee raises side to side as well, since they work the soleus more. Before full training, aim for 30 or more, within about 10% of the other side.",
          de: "Wadenzerrungen kommen oft wieder, wenn die Wade ihre volle Kraft und Ausdauer noch nicht zurückhat. Mach den Test erst, wenn 15 einbeinige Wiederholungen schmerzfrei klappen, hör beim ersten Schmerz auf zu zählen und vergleich auch das Wadenheben mit gebeugtem Knie zwischen beiden Seiten, weil es den Soleus stärker fordert. Ziel vor dem vollen Training: 30 oder mehr, höchstens etwa 10 % weniger als auf der anderen Seite.",
        },
      ],
      [
        "ankle",
        1,
        {
          en: "A soleus strain often leaves the ankle stiff in the knee-to-wall position, because that position stretches the soleus. Once walking is comfortable, win the range back gently rather than forcing it.",
          de: "Nach einer Soleuszerrung bleibt das Sprunggelenk in der Knie-zur-Wand-Position oft steif, weil diese Position den Soleus dehnt. Sobald Gehen angenehm ist, die Beweglichkeit behutsam zurückgewinnen, statt sie zu erzwingen.",
        },
      ],
    ],
    exits: [
      {
        to: "paes-refer",
        en: "Does it come on at the same point in every run and fade within minutes, sometimes with a cold or numb foot?",
        de: "Kommt es immer zur gleichen Zeit im Lauf und ist nach Minuten wieder weg, manchmal mit kaltem oder taubem Fuß?",
      },
      {
        to: "tibia-bsi-refer",
        en: "Does one spot on the inner edge of the shinbone hurt to press, rather than the muscle behind it?",
        de: "Tut eher eine Stelle an der Innenkante des Schienbeins auf Druck weh als der Muskel dahinter?",
      },
      {
        to: "fibula-bsi-refer",
        en: "Does one spot on the bone on the outer lower leg hurt to press, rather than the muscle?",
        de: "Tut eher eine Stelle am Knochen außen am Unterschenkel auf Druck weh als der Muskel?",
      },
    ],
    warn: ["clot"],
    rtr: "calf",
    sources: ["green2020", "green2022", "dixon2009", "bayer2017"],
  },
  {
    id: "tennis-leg",
    kind: "plan",
    en: {
      title: "Sudden shot or kick in the upper inner calf, then a limp",
      desc: "It hit during a push-off, often uphill or when speeding up, and can feel like being kicked from behind, sometimes with a pop. Walking hurts at first and you may limp, and bruising can spread towards the ankle over the next days. It's most common from middle age on.",
      name: "Tennis leg (tear of the inner head of the gastrocnemius)",
      about:
        "This is usually a tear in the inner head of the big calf muscle where muscle turns into tendon, and despite the name it happens to runners too. It's usually treated without surgery: compression, walking as early as is comfortable, then calf strength work that gets gradually heavier; expect at least 3 weeks before running again, longer for bigger tears. Have it checked by a doctor or physio in the first days, and today if the whole calf swells, feels tense or warm, or turns red, because a blood clot can feel similar: in one scan study, about 1 in 10 people thought to have tennis leg had a clot instead.",
      load: "Pause running. Walk as much as is comfortable from the first days, with a compression sleeve or bandage, and a small heel lift in your shoe can make walking easier at first. Start the walk-run steps under Back to running once you pass its checks, on flat ground and every other day; before full training, hills or speed, aim for 30 single-leg calf raises within about 10% of the other side.",
      avoid:
        "No hard stretching, massage or heat on the calf in the first days, and leave out hills and speed work until the calf has passed the 30-raise mark.",
    },
    de: {
      title:
        "Plötzlicher Schlag wie ein Tritt innen oben in der Wade, dann Hinken",
      desc: "Kam beim Abdrücken, oft bergauf oder beim Beschleunigen, und fühlt sich an wie ein Tritt von hinten, manchmal mit einem Knall. Gehen tut anfangs weh und du hinkst vielleicht, in den Tagen danach kann sich ein Bluterguss Richtung Knöchel ausbreiten. Am häufigsten ab dem mittleren Alter.",
      name: "Tennisbein (Muskelfaserriss am inneren Gastrocnemiuskopf)",
      about:
        "Meist ist der innere Kopf des großen Wadenmuskels am Übergang vom Muskel zur Sehne eingerissen, und trotz des Namens trifft das auch Laufende. Behandelt wird es meist ohne Operation: Kompression, so früh wie angenehm gehen, dann Krafttraining für die Wade, das schrittweise schwerer wird. Rechne mit mindestens 3 Wochen bis zum ersten Lauf, bei größeren Rissen länger. Lass es in den ersten Tagen ärztlich oder physiotherapeutisch anschauen, und noch heute, wenn die ganze Wade anschwillt, prall oder warm wird oder sich rötet, denn eine Thrombose kann sich ähnlich anfühlen: In einer Ultraschallstudie hatte etwa jede zehnte Person mit Verdacht auf Tennisbein stattdessen eine Thrombose.",
      load: "Laufpause. Ab den ersten Tagen so viel gehen, wie es angenehm ist, mit Kompressionsstrumpf oder -bandage, und ein kleiner Fersenkeil im Schuh kann das Gehen anfangs erleichtern. Steig mit den Geh-Lauf-Schritten unter „Zurück zum Laufen“ wieder ein, sobald du die Tests dort bestehst, auf flachem Untergrund und jeden zweiten Tag. Vor vollem Training, Hügeln oder Tempo sollten 30 Wiederholungen einbeiniges Wadenheben klappen, höchstens etwa 10 % weniger als auf der anderen Seite.",
      avoid:
        "In den ersten Tagen die Wade nicht kräftig dehnen, massieren oder wärmen, und Hügel und Tempo erst wieder einbauen, wenn die Wade die 30 Wiederholungen schafft.",
    },
    local: ["two-leg-calf-raise", "calf-raise", "deficit-calf-raise"],
    later: ["calf-raise", "deficit-calf-raise", "ktw-mob"],
    chain: [
      [
        "calf",
        3,
        {
          en: "A torn calf takes time to regain its full strength, and coming back short of it can raise the risk of a repeat. Hold off on this test until 15 single-leg raises are pain-free, and stop counting at the first pain. Before full training, aim for 30 or more, within about 10% of the other side.",
          de: "Eine eingerissene Wade braucht Zeit, bis sie ihre volle Kraft zurückhat, und ein zu früher Wiedereinstieg kann das Risiko eines erneuten Risses erhöhen. Mach den Test erst, wenn 15 einbeinige Wiederholungen schmerzfrei klappen, und hör beim ersten Schmerz auf zu zählen. Ziel vor dem vollen Training: 30 oder mehr, höchstens etwa 10 % weniger als auf der anderen Seite.",
        },
      ],
      [
        "ankle",
        1,
        {
          en: "The ankle often stiffens while you limp on a torn calf. Once walking is comfortable, gently regaining your knee-to-wall range lets the calf lengthen through each stride without being pulled at the end of its range.",
          de: "Solange du mit der eingerissenen Wade hinkst, wird das Sprunggelenk oft steif. Sobald Gehen angenehm ist, hilft es, die Knie-zur-Wand-Weite behutsam zurückzugewinnen. Dann kann sich die Wade bei jedem Schritt verlängern, ohne am Ende ihres Spielraums zu zerren.",
        },
      ],
    ],
    exits: [
      {
        to: "achilles-rupture-refer",
        en: "Did the kick or snap hit low, just above the heel, and now you can't rise onto your toes on that leg at all?",
        de: "Traf dich der Schlag knapp über der Ferse, und kannst du dich auf dem Bein gar nicht auf die Zehen stellen?",
      },
      {
        to: "bakers-cyst-refer",
        en: "Is the whole calf swollen or warm, or did you notice a lump behind the knee before the calf pain?",
        de: "Ist die ganze Wade geschwollen oder warm, oder war vor dem Wadenschmerz eine Beule in der Kniekehle?",
      },
    ],
    warn: ["clot", "rupture"],
    rtr: "calf",
    sources: [
      "delgado2002",
      "dixon2009",
      "green2022",
      "green2017",
      "bayer2017",
    ],
  },
  {
    id: "cramps",
    kind: "plan",
    en: {
      title: "Sudden hard cramp in the calf late in a long run or race",
      desc: "The muscle suddenly locks into a hard, painful knot, often in the last part of a long run or in a race run faster than you trained for. It lets go within seconds to minutes once you stop and stretch, rather than coming back at the same point on every run, and afterwards the calf may feel tender for a day but not injured.",
      name: "Exercise-associated muscle cramps (EAMC)",
      about:
        "A cramp is a sudden, involuntary contraction that won't let go. The old idea that it's mainly about losing water and salt is disputed: tired muscles, running faster or longer than you've trained for, and having had cramps before seem to matter at least as much. When one hits, stop and gently stretch the muscle until it releases, as in the calf stretch below; to prevent the next one, look at your own pattern rather than simply drinking more.",
      load: "Keep running as usual. If cramps keep striking late in long runs or races, build your long runs and race-pace sessions up more gradually, start races at a pace you've actually trained for, and add calf strength work twice a week.",
      avoid:
        "Skip running and see a doctor if cramps keep coming at rest or with muscle weakness, or started after a new medicine such as a statin.",
    },
    de: {
      title:
        "Plötzlicher Wadenkrampf gegen Ende eines langen Laufs oder Rennens",
      desc: "Der Muskel zieht sich plötzlich zu einem harten, schmerzhaften Knoten zusammen, oft im letzten Teil eines langen Laufs oder in einem Rennen, das schneller war als dein Training. Er löst sich innerhalb von Sekunden bis Minuten, sobald du stehen bleibst und dehnst, statt bei jedem Lauf zur gleichen Zeit wiederzukommen, und danach kann die Wade einen Tag lang empfindlich sein, fühlt sich aber nicht verletzt an.",
      name: "Belastungsassoziierte Muskelkrämpfe (Wadenkrampf beim Laufen)",
      about:
        "Ein Krampf ist eine plötzliche, unwillkürliche Muskelanspannung, die nicht loslässt. Die alte Vorstellung, dass vor allem Flüssigkeits- und Salzverlust dahinterstecken, ist umstritten: Ermüdete Muskeln, ein schnelleres oder längeres Rennen als im Training und frühere Krämpfe scheinen mindestens genauso wichtig zu sein. Kommt ein Krampf, bleib stehen und dehne den Muskel sanft, bis er sich löst, so wie bei der Wadendehnung unten. Um dem nächsten vorzubeugen, schau dir dein eigenes Muster an, statt einfach mehr zu trinken.",
      load: "Lauf ganz normal weiter. Kommen die Krämpfe immer wieder spät in langen Läufen oder Rennen, steigere lange Läufe und Einheiten im Renntempo behutsamer, geh Rennen in einem Tempo an, das du im Training auch gelaufen bist, und mach zweimal pro Woche Krafttraining für die Waden.",
      avoid:
        "Pausiere mit dem Laufen und lass es ärztlich abklären, wenn Krämpfe immer wieder in Ruhe oder mit Muskelschwäche kommen oder nach einem neuen Medikament wie einem Statin begonnen haben.",
    },
    local: ["calf-raise", "bent-knee-raise", "wall-calf-stretch"],
    chain: [],
    exits: [
      {
        to: "paes-refer",
        en: "Does a cramp-like pain hit at the same point in every run, sometimes with a cold, pale or numb foot?",
        de: "Kommt ein krampfartiger Schmerz immer zur gleichen Zeit im Lauf, manchmal mit kaltem, blassem oder taubem Fuß?",
      },
    ],
    rtr: "none",
    warn: ["collapse"],
    sources: ["miller2022", "schwellnus2011"],
  },
  {
    id: "paes-refer",
    kind: "refer",
    urgency: "routine",
    en: {
      title: "Cramp-like calf tightness at the same point in every run",
      desc: "Builds in the calf, sometimes into the arch, after a predictable time or distance, and fades within a few minutes of stopping. The foot may turn cold, pale, tingly or numb while it lasts. It's most typical in young, muscular runners, and rest days, stretching or calf work don't stop it coming back.",
      name: "Popliteal artery entrapment syndrome (PAES)",
      about:
        "In some people, a calf muscle or a band of tissue behind the knee squeezes the main artery to the lower leg when the calf works hard, so the muscles run short of blood during runs. It's rare and often first mistaken for repeated strains, cramps or compartment syndrome, so it needs a sports doctor or a blood vessel specialist, who usually tests the blood flow while you push your foot down against resistance. Once it's confirmed, an operation to free the artery often lets athletes get back to hard training.",
      meanwhile:
        "Book a sports doctor within the next 1–3 weeks and note when it starts, how long it lasts and any colour change or numbness in the foot. Until then, stop each run as soon as the tightness starts rather than pushing through, and keep fit with cycling or swimming if they don't bring it on. If the foot goes pale or numb during runs, book sooner, within days. If it stays cold, white, painful or numb at rest, go to an emergency department straight away.",
      avoid:
        "Skip running through the tightness to 'loosen it up': stretching, massage or more calf training won't free a squeezed artery.",
    },
    de: {
      title:
        "Krampfartiges Spannen in der Wade, immer zur gleichen Zeit im Lauf",
      desc: "Baut sich nach vorhersehbarer Zeit oder Strecke in der Wade auf, manchmal bis ins Fußgewölbe, und klingt wenige Minuten nach dem Stoppen ab. Der Fuß kann dabei kalt, blass oder taub werden oder kribbeln. Typisch bei jungen, muskulösen Laufenden, und Pausentage, Dehnen oder Wadentraining verhindern nicht, dass es wiederkommt.",
      name: "Popliteales Entrapment-Syndrom (PAES, Einklemmung der Kniekehlenarterie)",
      about:
        "Bei manchen Menschen drückt ein Wadenmuskel oder ein Gewebestrang in der Kniekehle die Hauptschlagader zum Unterschenkel ab, wenn die Wade kräftig arbeitet, sodass die Muskeln beim Laufen zu wenig Blut bekommen. Das ist selten und wird anfangs oft für wiederkehrende Zerrungen, Krämpfe oder ein Logensyndrom gehalten. Die Abklärung gehört in sportmedizinische oder gefäßmedizinische Hände, meist wird dabei die Durchblutung gemessen, während du den Fuß gegen Widerstand nach unten drückst. Ist es bestätigt, ermöglicht eine Operation, die die Arterie befreit, oft die Rückkehr zu hartem Training.",
      meanwhile:
        "Vereinbare innerhalb der nächsten 1–3 Wochen einen Termin in einer sportmedizinischen Praxis und notier dir, wann es anfängt, wie lange es anhält und ob der Fuß die Farbe ändert oder taub wird. Bis dahin jeden Lauf beim ersten Spannungsgefühl beenden, statt weiterzulaufen, und mit Radfahren oder Schwimmen fit bleiben, wenn das keine Beschwerden auslöst. Wird der Fuß beim Laufen blass oder taub, lass dich schon innerhalb weniger Tage untersuchen. Bleibt er auch in Ruhe kalt, weiß, schmerzhaft oder taub, geh sofort in die Notaufnahme.",
      avoid:
        "Nicht durch das Spannen hindurchlaufen, um es „lockerzulaufen“: Dehnen, Massage oder mehr Wadentraining befreien keine eingeklemmte Arterie.",
    },
    sources: ["hislop2014", "edwards2005"],
  },
  {
    id: "fibula-bsi-refer",
    kind: "refer",
    urgency: "soon",
    en: {
      title: "Pinpoint pain low on the outer leg bone that hurts when you hop",
      desc: "One spot on the bone, usually a hand's width or so above the outer ankle bone, is sore to press, and hopping on that leg hurts. It gets worse run by run, can ache when you walk, and often follows a jump in training. Tingling or numbness without a sore spot on the bone points to a nerve instead.",
      name: "Fibular bone stress injury (stress reaction or stress fracture)",
      about:
        "This pattern can mean the thin outer bone of the lower leg has been loaded faster than it could rebuild. The lower fibula is one of the lower-risk sites: most runners heal with less load while staying on their feet, and in pooled studies athletes returned to sport after about 8 weeks on average, though times varied widely. A doctor should confirm it, as early X-rays often look normal and an MRI may be needed, and check your bone health and fuelling, especially if it isn't your first stress injury.",
      meanwhile:
        "Stop running and avoid hopping and jumping until a doctor or physio has seen you, ideally within a few days. Walking is fine if it doesn't hurt, and cycling, swimming or pool running keep you fit if they're pain-free. If even normal walking hurts, see a doctor within a day or two. Tell them about any recent jump in training, earlier stress injuries, eating too little or missed periods.",
    },
    de: {
      title: "Punktueller Schmerz unten am Wadenbein, schlimmer beim Hüpfen",
      desc: "Eine Stelle am Knochen, meist etwa eine Handbreit über dem Außenknöchel, ist druckempfindlich, und Hüpfen auf dem Bein tut weh. Es wird von Lauf zu Lauf schlimmer, kann beim Gehen schmerzen und folgt oft auf eine Trainingssteigerung. Kribbeln oder Taubheit ohne druckschmerzhafte Stelle am Knochen sprechen eher für einen Nerv.",
      name: "Knochenstressverletzung am Wadenbein (Stressreaktion oder Ermüdungsbruch der Fibula)",
      about:
        "Dieses Muster kann bedeuten, dass der dünne äußere Unterschenkelknochen schneller belastet wurde, als er sich umbauen konnte. Das untere Wadenbein gehört zu den Stellen mit geringerem Risiko: Die meisten heilen mit weniger Belastung, ohne das Bein ganz schonen zu müssen, und in zusammengefassten Studien kehrten Sporttreibende im Schnitt nach etwa 8 Wochen zurück, mit großer Spannweite. Lass es ärztlich bestätigen, weil frühe Röntgenbilder oft unauffällig sind und manchmal ein MRT nötig ist, und dabei auch Knochengesundheit und Energieversorgung prüfen, vor allem wenn es nicht deine erste Stressverletzung ist.",
      meanwhile:
        "Hör mit dem Laufen auf und verzichte auf Hüpfen und Springen, bis du ärztlich oder physiotherapeutisch untersucht wurdest, am besten innerhalb weniger Tage. Gehen ist in Ordnung, solange es nicht wehtut, und Radfahren, Schwimmen oder Aquajogging halten dich fit, wenn sie schmerzfrei sind. Tut schon normales Gehen weh, lass dich innerhalb von ein bis zwei Tagen ärztlich untersuchen. Erzähl in der Praxis von kürzlichen Trainingssteigerungen, früheren Stressverletzungen, zu knapper Ernährung oder ausbleibender Periode.",
    },
    exits: [
      {
        to: "ankle-fracture-refer",
        en: "Did it start suddenly with a twist or fall, rather than building up over weeks of running?",
        de: "Hat es plötzlich mit einem Umknicken oder Sturz begonnen, statt sich über Wochen beim Laufen aufzubauen?",
      },
    ],
    warn: ["fuel"],
    rtr: "bone",
    sources: ["hoenig2023", "warden2014", "hoenig2022", "mountjoy2023"],
  },
  {
    id: "peroneal-nerve-refer",
    kind: "refer",
    urgency: "routine",
    en: {
      title: "Tingling or numbness on the top of the foot or outer shin",
      desc: "Burning, tingling or numbness over the top of the foot, along its outer edge or down the outer lower leg, often building during runs. There may be a tender bulge on the outer shin about a hand's width above the ankle, and tight laces, a stiff shoe tongue, tight socks or crossing your legs can set it off. Pressing on the bone itself usually doesn't hurt.",
      name: "Peroneal (fibular) or sural nerve entrapment (pinched nerve in the lower leg)",
      about:
        "A small nerve that supplies the skin of the foot can be squeezed where it comes through the tough tissue of the outer lower leg, often about 10 cm above the ankle, or pressed from outside by laces, a shoe tongue or tight socks. The nerve along the outer edge of the foot (sural nerve), and higher up the nerve that wraps around the outer knee, can be irritated in a similar way. A sports physio or doctor can usually tell from an exam; taking pressure off the nerve is the first step, and if it keeps coming back, a doctor can discuss other options, including an operation.",
      meanwhile:
        "Book a sports physio or doctor within the next 1–3 weeks. Until then, loosen your laces or skip the eyelets over the sore area, choose socks and shoes that don't press there, avoid crossing your legs, and shorten runs that bring it on. If your foot starts to slap, drag or catch the toes, the numbness spreads or both legs are affected, see a doctor within a day or two. If both legs get weak, or you notice numbness around the groin or buttocks or new trouble with your bladder or bowel, go to an emergency department now.",
    },
    de: {
      title:
        "Kribbeln oder Taubheit auf dem Fußrücken oder außen am Unterschenkel",
      desc: "Brennen, Kribbeln oder Taubheit auf dem Fußrücken, an der Fußaußenkante oder außen am Unterschenkel, oft zunehmend während des Laufens. Manchmal tastest du außen am Unterschenkel, etwa eine Handbreit über dem Knöchel, eine empfindliche Vorwölbung, und eine feste Schnürung, eine harte Schuhzunge, enge Socken oder übereinandergeschlagene Beine können es auslösen. Druck auf den Knochen selbst tut meist nicht weh.",
      name: "Engpasssyndrom des Nervus peroneus (fibularis) oder des Nervus suralis (eingeklemmter Nerv am Unterschenkel)",
      about:
        "Ein kleiner Hautnerv des Fußes kann eingeengt werden, wo er außen am Unterschenkel durch die straffe Muskelhülle tritt, oft etwa 10 cm über dem Knöchel, oder von außen durch Schnürsenkel, Schuhzunge oder enge Socken gedrückt werden. Ähnlich gereizt werden können der Nerv an der Fußaußenkante (Nervus suralis) und weiter oben der Nerv, der sich außen unterhalb des Knies um das Wadenbeinköpfchen windet. In der Physiotherapie oder sportmedizinischen Praxis lässt sich das meist durch eine Untersuchung klären. Der erste Schritt ist, den Druck vom Nerv zu nehmen, und kommt es immer wieder, kann eine Ärztin oder ein Arzt mit dir weitere Möglichkeiten besprechen, bis hin zu einer Operation.",
      meanwhile:
        "Vereinbare innerhalb der nächsten 1–3 Wochen einen Termin in der Physiotherapie oder sportmedizinischen Praxis. Bis dahin locker schnüren oder die Ösen über der empfindlichen Stelle auslassen, Socken und Schuhe wählen, die dort nicht drücken, die Beine nicht übereinanderschlagen und Läufe verkürzen, die es auslösen. Beginnt dein Fuß aufzuklatschen, zu schleifen oder mit den Zehen hängen zu bleiben, breitet sich die Taubheit aus oder sind beide Beine betroffen, lass dich innerhalb von ein bis zwei Tagen ärztlich untersuchen. Werden beide Beine schwach, oder bemerkst du Taubheit im Schritt- oder Gesäßbereich oder neue Probleme mit Blase oder Darm, geh sofort in die Notaufnahme.",
    },
    exits: [
      {
        to: "sciatica-refer",
        en: "Does it come with low back pain, or run down from the buttock into the leg?",
        de: "Kommt es zusammen mit Kreuzschmerzen oder zieht es vom Gesäß ins Bein hinunter?",
      },
      {
        to: "compartment-refer",
        en: "Does it come with a tight, burning shin that builds at the same point in every run?",
        de: "Kommt es mit einem gespannten, brennenden Schienbein, das sich immer zur gleichen Zeit im Lauf aufbaut?",
      },
    ],
    sources: ["mccrory2002", "edwards2005"],
  },
];
