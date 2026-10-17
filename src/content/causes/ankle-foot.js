// ankle-foot causes. Schema: see README "Content model".
export default [
  {
    id: "achilles-mid",
    kind: "plan",
    en: {
      title: "Stiff, aching Achilles a few centimetres above the heel",
      desc: "Stiff and sore on your first steps in the morning and early in a run, often easing once you're warm. The tendon can feel thick or tender 2–6 cm above the heel.",
      name: "Mid-portion Achilles tendinopathy",
      about:
        "The middle of your Achilles tendon has been loaded faster than it could adapt, often after a sudden increase in distance, speed or hills. Calf strength work that gets gradually heavier over 12 weeks or more is the best-supported treatment, and you can often keep running within the pain rule meanwhile. For the heavy stage your plan shows two options, heavy slow calf raises or slow heel drops off a step: do one, not both. They work about equally well, but more people stick with the slow raises. Rest alone rarely fixes it, and calf stretching is only worth adding if your ankle is stiff.",
      load: "Keep running on flat ground within the pain rule, and leave out sprints, hills and jumping drills until the pogo hops in your plan feel easy. If the tendon is stiffer or sorer the next morning, cut your next runs back by about a third.",
    },
    de: {
      title:
        "Steife, schmerzende Achillessehne einige Zentimeter über der Ferse",
      desc: "Morgens bei den ersten Schritten und zu Beginn des Laufs steif und schmerzhaft, warm gelaufen oft besser. Die Sehne kann sich 2–6 cm über der Ferse verdickt oder druckempfindlich anfühlen.",
      name: "Achillessehnen-Tendinopathie im mittleren Abschnitt (Midportion)",
      about:
        "Der mittlere Teil deiner Achillessehne wurde schneller belastet, als er sich anpassen konnte, oft nach einer plötzlichen Steigerung von Umfang, Tempo oder Höhenmetern. Wadentraining, das über 12 Wochen oder länger schrittweise schwerer wird, ist die am besten belegte Behandlung, und oft kannst du dabei innerhalb der Schmerzregel weiterlaufen. Für die schwere Stufe zeigt dein Plan zwei Möglichkeiten, schweres, langsames Wadenheben oder langsames Absenken an der Stufe: Mach eins davon, nicht beides. Beides wirkt etwa gleich gut, beim langsamen Wadenheben bleiben aber mehr Menschen dran. Ruhe allein hilft selten, und Wadendehnen lohnt sich nur bei einem steifen Sprunggelenk.",
      load: "Lauf innerhalb der Schmerzregel auf flachem Untergrund weiter und lass Sprints, Hügel und Sprungübungen weg, bis sich die Pogo-Sprünge aus deinem Plan leicht anfühlen. Ist die Sehne am nächsten Morgen steifer oder empfindlicher, kürze die nächsten Läufe um etwa ein Drittel.",
    },
    local: ["calf-hold", "heavy-calf-raise", "eccentric-heel-drop", "pogo-hop"],
    later: ["pogo-hop", "deficit-calf-raise"],
    linkExercises: {
      calf: ["deficit-calf-raise"],
      ankle: ["wall-calf-stretch"],
    },
    chain: [
      [
        "calf",
        3,
        {
          en: "Your calf and Achilles work together as one spring. If the calf, especially the deep soleus, tires early in a run, the tendon copes less well with the load. Lower calf strength is one of the few risk factors with some evidence behind it. If this test is weak, a heavier calf raise off a step is added for later, once the heavy slow raises feel easy.",
          de: "Wade und Achillessehne arbeiten zusammen wie eine Feder. Ermüdet die Wade, vor allem der tiefe Wadenmuskel (Soleus), früh im Lauf, verkraftet die Sehne die Last schlechter. Geringere Wadenkraft gehört zu den wenigen Risikofaktoren, für die es zumindest etwas Evidenz gibt. Fällt dieser Test schwach aus, kommt für später ein schwereres Wadenheben von der Stufe dazu, sobald das schwere, langsame Wadenheben leichtfällt.",
        },
      ],
      [
        "glutes",
        1,
        {
          en: "Strong glutes share the work of each landing and push-off, which can take some load off the calf and Achilles. In one study, runners with Achilles pain switched their glutes on later in the stride.",
          de: "Kräftige Gesäßmuskeln teilen sich die Arbeit bei Landung und Abdruck, das kann Wade und Achillessehne etwas entlasten. In einer Studie setzten die Gesäßmuskeln bei Laufenden mit Achillessehnenschmerzen später im Schritt ein.",
        },
      ],
      [
        "hipabd",
        1,
        {
          en: "If the side-hip muscles can't keep your pelvis level, the leg and foot tend to roll inward on landing, and the Achilles can be loaded unevenly.",
          de: "Halten die seitlichen Hüftmuskeln das Becken nicht stabil, knicken Bein und Fuß bei der Landung eher nach innen, und die Achillessehne kann ungleichmäßig belastet werden.",
        },
      ],
      [
        "ankle",
        1,
        {
          en: "The 2024 Achilles guideline suggests calf stretching only for people whose ankle doesn't bend up well. If your knee-to-wall test is limited, a daily calf stretch is added; if not, you can leave stretching out.",
          de: "Die Achillessehnen-Leitlinie von 2024 empfiehlt Wadendehnen nur, wenn sich das Sprunggelenk schlecht anziehen lässt. Ist dein Knie-zur-Wand-Test eingeschränkt, kommt eine tägliche Wadendehnung dazu, sonst kannst du aufs Dehnen verzichten.",
        },
      ],
    ],
    sources: [
      "chimenti2024",
      "beyer2015",
      "silbernagel2007",
      "vandervlist2019",
      "franettovichsmith2014",
    ],
  },
  {
    id: "achilles-insertional",
    kind: "plan",
    en: {
      title: "Sore spot right where the Achilles meets the heel bone",
      desc: "Worse running uphill, on stairs, after calf stretches and when a stiff shoe heel presses on it. The sore spot is on the back of the heel bone where the tendon attaches, sometimes with a tender, swollen bump where the shoe rubs, and your first steps in the morning are often stiff.",
      name: "Insertional Achilles tendinopathy",
      about:
        "The tendon is irritated where it attaches to the heel bone, sometimes along with the small fluid sac (bursa) just in front of it and a bony bump on the heel (Haglund's). These get squeezed when your ankle bends up a lot, as on hills or in a deep calf stretch, and rubbed by a stiff heel counter, the firm back of the shoe. Calf strength work on flat floor often helps if you avoid that squeeze early on, and it usually takes a few months, so be patient.",
      load: "Run on flat routes within the pain rule and skip hill and stair sessions for now. A shoe with a bit more heel drop or a small heel lift, and a soft heel counter that doesn't press or rub on the sore spot, can ease it.",
      avoid:
        "Skip calf stretches and lowering your heel below a step, as both squeeze the sore spot against the bone.",
    },
    de: {
      title:
        "Schmerzhafte Stelle genau am Übergang der Achillessehne ins Fersenbein",
      desc: "Schlimmer beim Bergauflaufen, auf Treppen, nach dem Wadendehnen und wenn eine harte Fersenkappe drückt. Die schmerzhafte Stelle liegt hinten am Fersenbein, wo die Sehne ansetzt, manchmal mit einer druckempfindlichen, geschwollenen Verdickung, an der der Schuh reibt, und die ersten Schritte am Morgen sind oft steif.",
      name: "Insertionale Achillessehnen-Tendinopathie (Ansatztendinopathie)",
      about:
        "Die Sehne ist an ihrem Ansatz am Fersenbein gereizt, manchmal zusammen mit dem kleinen Schleimbeutel direkt davor und einem knöchernen Höcker an der Ferse (Haglund-Ferse). Diese Strukturen werden zusammengedrückt, wenn du den Fuß stark anziehst, etwa bergauf oder bei einer tiefen Wadendehnung, und an einer harten Fersenkappe gerieben. Krafttraining für die Wade auf flachem Boden hilft oft, wenn du diesen Druck anfangs vermeidest. Das dauert meist einige Monate, also bleib geduldig.",
      load: "Lauf innerhalb der Schmerzregel auf flachen Strecken und lass Berg- und Treppenläufe vorerst weg. Ein Schuh mit etwas mehr Sprengung oder eine kleine Fersenerhöhung und eine weiche Fersenkappe, die nicht auf die empfindliche Stelle drückt oder daran reibt, können entlasten.",
      avoid:
        "Lass Wadendehnungen und das Absenken der Ferse unter Stufenniveau weg, denn beides drückt die empfindliche Stelle gegen den Knochen.",
    },
    local: ["calf-hold", "heavy-calf-raise", "pogo-hop"],
    later: ["pogo-hop"],
    chain: [
      [
        "glutes",
        1,
        {
          en: "Strong glutes share the work of each landing and push-off, which can take some load off the calf and Achilles. In one study, runners with Achilles pain switched their glutes on later in the stride.",
          de: "Kräftige Gesäßmuskeln teilen sich die Arbeit bei Landung und Abdruck, das kann Wade und Achillessehne etwas entlasten. In einer Studie setzten die Gesäßmuskeln bei Laufenden mit Achillessehnenschmerzen später im Schritt ein.",
        },
      ],
      [
        "hipabd",
        1,
        {
          en: "If the side-hip muscles can't keep your pelvis level, the leg and foot tend to roll inward on landing, and the Achilles can be loaded unevenly.",
          de: "Halten die seitlichen Hüftmuskeln das Becken nicht stabil, knicken Bein und Fuß bei der Landung eher nach innen, und die Achillessehne kann ungleichmäßig belastet werden.",
        },
      ],
    ],
    exits: [
      {
        to: "severs",
        en: "Are you between 8 and 14 and still growing?",
        de: "Bist du zwischen 8 und 14 Jahre alt und noch im Wachstum?",
      },
      {
        to: "calcaneal-bsi-refer",
        en: "Does squeezing both sides of the heel bone hurt, or does the pain build the longer you run?",
        de: "Schmerzt das Fersenbein, wenn du es seitlich zusammendrückst, oder wird der Schmerz beim Laufen immer stärker?",
      },
    ],
    sources: [
      "chimenti2017",
      "jonsson2008",
      "silbernagel2020",
      "franettovichsmith2014",
    ],
  },
  {
    id: "plantar-heel",
    kind: "plan",
    en: {
      title: "Sharp pain under the heel on your first steps",
      desc: "Worst on the first steps in the morning or after sitting, easing as you get moving and coming back after long days on your feet. The tender spot is usually on the inner underside of the heel, where it meets the arch, rather than in the middle of the heel pad.",
      name: "Plantar fasciopathy (plantar fasciitis)",
      about:
        "The thick band under your foot is overloaded where it attaches to the heel and is slow to recover. Stretching, slow heavy strength work for the calf and arch, and sensible running load usually help, though it often takes a few months. A bruised feeling in the middle of the heel that's worst barefoot on hard floors points to the heel fat pad instead.",
      load: "Keep running on softer, flat surfaces within the pain rule, and cut back distance if your first steps the next morning are worse. During the day, avoid going barefoot on hard floors and wear cushioned, supportive shoes.",
    },
    de: {
      title: "Stechender Schmerz unter der Ferse bei den ersten Schritten",
      desc: "Am schlimmsten bei den ersten Schritten morgens oder nach dem Sitzen, wird beim Gehen besser und kommt nach langen Tagen auf den Beinen zurück. Die empfindliche Stelle liegt meist innen an der Unterseite der Ferse, wo sie ins Gewölbe übergeht, und nicht mitten im Fersenpolster.",
      name: "Plantarfasziopathie (Plantarfasziitis)",
      about:
        "Die kräftige Sehnenplatte unter deinem Fuß ist an ihrem Ansatz an der Ferse überlastet und erholt sich nur langsam. Dehnen, langsames, schweres Krafttraining für Wade und Fußgewölbe und eine angepasste Laufbelastung helfen meist, auch wenn es oft einige Monate dauert. Ein Prellungsgefühl mitten unter der Ferse, das barfuß auf harten Böden am schlimmsten ist, deutet eher auf das Fersenpolster hin.",
      load: "Lauf innerhalb der Schmerzregel auf weicherem, flachem Untergrund weiter und kürze den Umfang, wenn die ersten Schritte am nächsten Morgen schlimmer sind. Im Alltag nicht barfuß auf harten Böden gehen, sondern gedämpfte, stützende Schuhe tragen.",
    },
    local: ["fascia-stretch", "toe-up-heel-raise"],
    chain: [
      [
        "ankle",
        3,
        {
          en: "A stiff ankle and tight calf stop the shin from moving freely forward over the foot, so the band under the foot can be pulled harder on every step. Limited ankle bend is one of the better-supported risk factors for heel pain.",
          de: "Ein steifes Sprunggelenk und eine verkürzte Wade lassen das Schienbein schlecht über den Fuß nach vorn kommen. Dann wird die Sehnenplatte unter dem Fuß bei jedem Schritt stärker gespannt. Eingeschränkte Beweglichkeit im Sprunggelenk gehört zu den besser belegten Risikofaktoren für Fersenschmerz.",
        },
      ],
      [
        "foot",
        2,
        {
          en: "The small muscles of the foot help hold up the arch and share the load with the band underneath. In people with heel pain they can be weaker and smaller.",
          de: "Die kleinen Fußmuskeln halten das Gewölbe mit und teilen sich die Last mit der Sehnenplatte darunter. Bei Fersenschmerz können sie schwächer und kleiner sein.",
        },
      ],
      ["calf", 1],
    ],
    exits: [
      {
        to: "severs",
        en: "Are you between 8 and 14 and still growing?",
        de: "Bist du zwischen 8 und 14 Jahre alt und noch im Wachstum?",
      },
      {
        to: "calcaneal-bsi-refer",
        en: "Does squeezing both sides of the heel bone hurt, or does the pain build the longer you run?",
        de: "Schmerzt das Fersenbein, wenn du es seitlich zusammendrückst, oder wird der Schmerz beim Laufen immer stärker?",
      },
      {
        to: "tarsal-tunnel-refer",
        en: "Do you feel burning, tingling or numbness in the heel or the sole?",
        de: "Spürst du Brennen, Kribbeln oder Taubheit an der Ferse oder in der Fußsohle?",
      },
    ],
    sources: [
      "koc2023",
      "morrissey2021",
      "rathleff2015",
      "riddle2003",
      "osborne2019",
    ],
  },
  {
    id: "tib-post",
    kind: "plan",
    en: {
      title: "Ache behind and below the inner ankle bone",
      desc: "Worse on longer runs, uneven ground and when you rise onto tiptoe on that leg, and it can spread into the inner arch. The inner ankle can look puffy, and the arch may sit lower than on the other side.",
      name: "Tibialis posterior tendinopathy",
      about:
        "The tendon that helps hold up your arch runs behind the inner ankle bone and is overloaded. It often settles with steady strength work for this tendon, the calf and the foot, though that can take a few months. See a physio before you keep training if your arch is visibly collapsing or you can no longer do a single-leg heel raise on that side.",
      load: "Run shorter on flat, even ground within the pain rule, and skip trails, cambered roads and speed work for now. A stable, supportive shoe can ease the load on the tendon.",
    },
    de: {
      title: "Dumpfer Schmerz hinter und unter dem Innenknöchel",
      desc: "Schlimmer bei längeren Läufen, auf unebenem Boden und im Zehenstand auf diesem Bein, und er kann bis ins innere Fußgewölbe ziehen. Innen am Knöchel kann es geschwollen aussehen, und das Gewölbe ist manchmal flacher als auf der anderen Seite.",
      name: "Tibialis-posterior-Tendinopathie",
      about:
        "Die Sehne, die dein Fußgewölbe mitträgt, verläuft hinter dem Innenknöchel und ist überlastet. Mit regelmäßigem Krafttraining für diese Sehne, die Wade und den Fuß bessert sie sich oft, das kann aber einige Monate dauern. Lass es in der Physiotherapie untersuchen, bevor du weitertrainierst, wenn dein Gewölbe sichtbar einsinkt oder du auf dieser Seite kein einbeiniges Wadenheben mehr schaffst.",
      load: "Lauf kürzer auf flachem, ebenem Untergrund innerhalb der Schmerzregel und lass Trails, Straßen mit seitlichem Gefälle und Tempotraining vorerst weg. Ein stabiler, stützender Schuh kann die Sehne entlasten.",
    },
    local: ["band-foot-turn-in", "arch-heel-raise"],
    chain: [
      [
        "calf",
        3,
        {
          en: "The tibialis posterior helps the calf lift your heel. If the calf is weak, this much smaller tendon can end up doing more of each push-off. Fewer single-leg heel raises on the painful side are a typical finding.",
          de: "Der Tibialis posterior hilft der Wade, die Ferse anzuheben. Ist die Wade schwach, kann mehr vom Abdruck an dieser viel kleineren Sehne hängen bleiben. Typisch ist, dass auf der schmerzhaften Seite weniger einbeinige Wadenheben gelingen.",
        },
      ],
      [
        "foot",
        2,
        {
          en: "The small foot muscles work with the tibialis posterior to hold up the arch. When they can't keep up, the arch can sag and the tendon is pulled tighter around the inner ankle bone on every step.",
          de: "Die kleinen Fußmuskeln halten zusammen mit dem Tibialis posterior das Gewölbe. Kommen sie nicht hinterher, kann das Gewölbe absinken, und die Sehne wird bei jedem Schritt stärker um den Innenknöchel gespannt.",
        },
      ],
      ["hipabd", 1],
    ],
    exits: [
      {
        to: "navicular-bsi-refer",
        en: "Is a coin-sized bony spot on top of the inner midfoot tender, with pain starting earlier each run?",
        de: "Ist oben innen am Mittelfuß eine münzgroße Knochenstelle empfindlich, und kommt der Schmerz jedes Mal früher?",
      },
      {
        to: "ankle-bsi-refer",
        en: "Is it a deep, bony ache in the inner ankle bone itself that builds when you run or hop?",
        de: "Ist es ein tiefer Knochenschmerz im Innenknöchel selbst, der beim Laufen oder Hüpfen zunimmt?",
      },
      {
        to: "tarsal-tunnel-refer",
        en: "Do you feel burning, tingling or numbness behind the inner ankle bone or in the sole?",
        de: "Spürst du Brennen, Kribbeln oder Taubheit hinter dem Innenknöchel oder in der Fußsohle?",
      },
    ],
    sources: ["ross2018", "kulig2009", "ross2021", "kulig2011"],
  },
  {
    id: "ankle-instability",
    kind: "plan",
    en: {
      title: "Unsteady ankle that rolls or gives way on uneven ground",
      desc: "For an ankle that has rolled or given way again and again since one or more older sprains. Trails, kerbs and quick turns feel risky, and the front and outside of the ankle can ache after runs. If you've just rolled it, the card for a fresh ankle sprain fits better.",
      name: "Chronic ankle instability (CAI)",
      about:
        "After a sprain, the outer ligaments can stay a little loose, and the ankle's balance reflexes and outer muscles often don't fully recover, so it can keep rolling. Balance and strength training that gets gradually harder often makes the ankle feel steadier within 4–6 weeks and lowers the risk of the next sprain.",
      load: "Keep running on even, firm ground like roads or a track while you train balance. Bring trails back gradually with short, easy sections, and skip them on days the ankle feels shaky.",
    },
    de: {
      title: "Unsicheres Sprunggelenk, das auf unebenem Boden wegknickt",
      desc: "Für ein Sprunggelenk, das seit einer oder mehreren älteren Bänderverletzungen immer wieder umknickt oder wegknickt. Trails, Bordsteinkanten und schnelle Richtungswechsel fühlen sich riskant an, und vorn und außen am Knöchel kann es nach dem Laufen schmerzen. Bist du gerade erst umgeknickt, passt die Karte zum frischen Umknicken besser.",
      name: "Chronische Sprunggelenkinstabilität (CAI)",
      about:
        "Nach dem Umknicken bleiben die Außenbänder oft etwas locker, und Gleichgewichtsreflexe und seitliche Unterschenkelmuskeln erholen sich häufig nicht ganz, sodass der Fuß leichter wieder umknickt. Gleichgewichts- und Krafttraining, das schrittweise schwieriger wird, macht das Sprunggelenk oft in 4–6 Wochen spürbar stabiler und senkt das Risiko für die nächste Verletzung.",
      load: "Lauf vorerst auf ebenem, festem Untergrund wie Asphalt oder der Laufbahn, während du das Gleichgewicht trainierst. Trails schrittweise mit kurzen, lockeren Abschnitten zurückholen und an Tagen weglassen, an denen sich das Sprunggelenk wackelig anfühlt.",
    },
    local: ["band-eversion", "balance-reach", "hop-stick"],
    chain: [
      [
        "foot",
        3,
        {
          en: "After a sprain, the ankle's sense of position and its balance reflexes often stay below par. The foot can then land slightly turned in and roll before the muscles catch it.",
          de: "Nach dem Umknicken bleiben Lagesinn und Gleichgewichtsreflexe im Sprunggelenk oft eingeschränkt. Der Fuß kann dann leicht nach innen gedreht aufsetzen und wegknicken, bevor die Muskeln ihn abfangen.",
        },
      ],
      [
        "hipabd",
        2,
        {
          en: "Weak side-hip muscles let the pelvis and knee sway when you land, so the ankle has to correct more of the wobble on uneven ground.",
          de: "Schwache seitliche Hüftmuskeln lassen Becken und Knie bei der Landung schwanken. Auf unebenem Boden muss das Sprunggelenk dann mehr davon ausgleichen.",
        },
      ],
      ["ankle", 2],
    ],
    exits: [
      {
        to: "ankle-fracture-refer",
        en: "Did you just roll it again, and can't you take 4 steps or does the tip of an ankle bone hurt to press?",
        de: "Bist du eben wieder umgeknickt und kannst keine 4 Schritte gehen, oder tut eine Knöchelspitze auf Druck weh?",
      },
    ],
    sources: [
      "martin2021",
      "kosik2017",
      "mckeon2008",
      "hupperets2009",
      "thompson2018",
    ],
  },
  {
    id: "peroneal",
    kind: "plan",
    en: {
      title:
        "Ache behind and below the outer ankle bone, worse on sloping roads",
      desc: "Builds on roads that slope to the side, on trails and in tight turns. The tendons just behind the bone are tender to press, and pushing the outer edge of your foot outward against resistance brings it on.",
      name: "Peroneal tendinopathy",
      about:
        "The two tendons behind your outer ankle bone steady the foot against rolling over, and they've had more load than they could adapt to, often after an old sprain. Slow, gradually heavier strengthening often settles them over 2–3 months. Have a physio check it if a tendon clicks or slips over the bone.",
      load: "Run on flat, even ground, and don't always run on the same side of a cambered road. Skip trails and tight turns until flat runs stay within the pain rule, then bring them back gradually.",
    },
    de: {
      title:
        "Ziehen hinter und unter dem Außenknöchel, schlimmer auf schrägen Wegen",
      desc: "Nimmt auf Straßen mit seitlichem Gefälle, auf Trails und in engen Kurven zu. Die Sehnen direkt hinter dem Knochen sind druckempfindlich, und den Fußaußenrand gegen Widerstand nach außen zu drücken löst den Schmerz aus.",
      name: "Peronealsehnen-Tendinopathie",
      about:
        "Die beiden Sehnen hinter deinem Außenknöchel sichern den Fuß gegen das Umknicken und haben mehr Last bekommen, als sie verkraften konnten, häufig nach einer alten Bänderverletzung. Langsames, schrittweise schwereres Krafttraining bringt sie oft in 2–3 Monaten zur Ruhe. Springt oder rutscht eine Sehne über den Knochen, lass das physiotherapeutisch abklären.",
      load: "Lauf auf flachem, ebenem Untergrund und nicht immer auf derselben Straßenseite mit Gefälle. Trails und enge Kurven weglassen, bis flache Läufe innerhalb der Schmerzregel bleiben, dann schrittweise zurückholen.",
    },
    local: ["eversion-hold", "band-eversion", "calf-raise"],
    chain: [
      [
        "foot",
        2,
        {
          en: "When balance is shaky, the peroneal tendons have to catch the foot from rolling over again and again, most of all on trails and cambers.",
          de: "Ist das Gleichgewicht wackelig, müssen die Peronealsehnen den Fuß immer wieder vor dem Umknicken bewahren, vor allem auf Trails und schrägen Wegen.",
        },
      ],
      ["calf", 1],
      ["hipabd", 1],
    ],
    exits: [
      {
        to: "jones-bsi-refer",
        en: "Does one spot on the bone halfway along the outer edge of your foot hurt to press, and does hopping hurt?",
        de: "Schmerzt eine Stelle am Knochen in der Mitte des Fußaußenrands auf Druck, und tut Hüpfen weh?",
      },
      {
        to: "fibula-bsi-refer",
        en: "Does a spot on the bone about a hand's width above the outer ankle bone hurt to press, and does hopping hurt?",
        de: "Schmerzt eine Stelle am Knochen etwa eine Handbreit über dem Außenknöchel auf Druck, und tut Hüpfen weh?",
      },
    ],
    sources: ["davda2017", "deu2022", "heckman2009", "silbernagel2007"],
  },
  {
    id: "metatarsalgia",
    kind: "plan",
    en: {
      title: "Burning or bruised feeling under the ball of the foot",
      desc: "Worse at faster paces, on hard ground and in thin or worn-out shoes, and often eases soon after you stop. It spreads across the ball of the foot rather than sitting in one tender spot on a bone or under a single toe joint, and the toes don't tingle or go numb.",
      name: "Metatarsalgia (forefoot overload)",
      about:
        "The fat pads and joints under the ball of your foot are taking more pressure than they can handle right now, often from speed work, thinner shoes or tight calves. It usually settles with more cushioning, a little less speed for a few weeks, calf stretching and stronger feet. Tingling, numbness or burning that shoots between two toes fits Morton's neuroma better, and swelling under one toe joint, with the toe starting to lift or drift, fits a plantar plate injury.",
      load: "Run easy in cushioned shoes with a roomy toe box, ideally on softer, flat ground. Drop sprints, hard uphill efforts and minimal shoes until easy runs stay within the pain rule.",
    },
    de: {
      title: "Brennen oder Prellungsgefühl unter dem Fußballen",
      desc: "Schlimmer bei schnellem Tempo, auf hartem Boden und in dünnen oder abgelaufenen Schuhen, lässt nach dem Stoppen oft bald nach. Der Schmerz verteilt sich unter dem Fußballen und sitzt nicht an einer druckempfindlichen Stelle auf einem Knochen oder unter einem einzelnen Zehengelenk, und die Zehen kribbeln nicht und werden nicht taub.",
      name: "Metatarsalgie (Vorfußüberlastung)",
      about:
        "Die Fettpolster und Gelenke unter deinem Fußballen bekommen gerade mehr Druck, als sie vertragen, oft durch Tempotraining, dünnere Schuhe oder verkürzte Waden. Meist helfen mehr Dämpfung, für ein paar Wochen etwas weniger Tempo, Wadendehnung und kräftigere Füße. Kribbeln, Taubheit oder Brennen, das zwischen zwei Zehen einschießt, passt eher zu einem Morton-Neurom, eine Schwellung unter einem einzelnen Zehengelenk, bei der sich die Zehe anhebt oder wandert, eher zu einer Verletzung der Plantarplatte.",
      load: "Lauf locker in gut gedämpften Schuhen mit genug Platz für die Zehen, am besten auf weicherem, flachem Untergrund. Sprints, harte Bergaufpassagen und Minimalschuhe weglassen, bis lockere Läufe innerhalb der Schmerzregel bleiben.",
    },
    local: ["wall-calf-stretch", "short-foot", "toe-press"],
    chain: [
      [
        "ankle",
        2,
        {
          en: "Tight calves and a stiff ankle can make the heel lift early, so each step rolls onto the ball of the foot sooner and stays there longer.",
          de: "Verkürzte Waden und ein steifes Sprunggelenk können die Ferse früh abheben lassen. So rollt jeder Schritt früher auf den Fußballen und bleibt dort länger.",
        },
      ],
      [
        "stride",
        2,
        {
          en: "Slightly shorter, quicker steps land each foot more lightly. In one study of healthy runners, a 5% higher step rate lowered the load under the ball of the foot.",
          de: "Etwas kürzere, schnellere Schritte lassen jeden Fuß leichter aufsetzen. In einer Studie mit gesunden Laufenden senkten 5 % mehr Schritte pro Minute die Last unter dem Fußballen.",
        },
      ],
      [
        "calf",
        1,
        {
          en: "As your calves tire late in a run, pressure under the ball of the foot can rise. Calf raises press on the ball of the foot too, so build them up within the pain rule.",
          de: "Ermüden die Waden gegen Ende des Laufs, kann der Druck unter dem Fußballen steigen. Wadenheben drückt ebenfalls auf den Fußballen, steigere es deshalb innerhalb der Schmerzregel.",
        },
      ],
      ["foot", 1],
    ],
    exits: [
      {
        to: "sesamoid-refer",
        en: "Is the pain right under the big-toe knuckle, and worse when you bend the big toe up?",
        de: "Sitzt der Schmerz unter dem Großzehengrundgelenk, und wird er stärker, wenn du den großen Zeh hochbiegst?",
      },
      {
        to: "metatarsal-bsi-refer",
        en: "Does one spot on top of or under a forefoot bone hurt to press, and does hopping on that foot hurt?",
        de: "Schmerzt eine Stelle oben oder unten an einem Mittelfußknochen auf Druck, und tut Hüpfen auf diesem Fuß weh?",
      },
    ],
    sources: ["besse2017", "digiovanni2002", "weist2004", "wellenkotter2014"],
  },
  {
    id: "metatarsal-bsi-refer",
    kind: "refer",
    urgency: "soon",
    en: {
      title: "Pinpoint pain on one forefoot bone that hurts when you hop",
      desc: "Often came on after more mileage, more speed or a switch to thinner shoes. Pressing on top of the bone hurts in one spot, the area can swell, and the ache builds with each run or lingers when you walk.",
      name: "Metatarsal bone stress injury (stress fracture)",
      about:
        "This pattern can mean the bone has been loaded faster than it could rebuild, which can range from a stress reaction to a small crack. Caught early, most heal well within a couple of months of reduced load, but running on it can make it worse. A deep ache higher up on the top or inner side of the midfoot that builds with running needs the same check, because a stress injury of the bone there (navicular) needs prompt care.",
      meanwhile:
        "Stop running and avoid hopping and jumping until a doctor or physio has seen you. Wear firm, cushioned shoes for everyday walking, and cycling or swimming are fine if they don't hurt. If even normal walking hurts, see a doctor within a day or two. Tell them about any recent jump in training, earlier stress injuries, eating too little or missed periods.",
    },
    de: {
      title:
        "Punktueller Schmerz an einem Mittelfußknochen, schlimmer beim Hüpfen",
      desc: "Begann oft nach mehr Kilometern, mehr Tempo oder dem Wechsel auf dünnere Schuhe. Druck von oben auf den Knochen schmerzt an einer Stelle, die Umgebung kann anschwellen, und der Schmerz nimmt mit jedem Lauf zu oder bleibt beim Gehen.",
      name: "Knochenstressverletzung am Mittelfuß (Ermüdungsbruch)",
      about:
        "Dieses Muster kann bedeuten, dass der Knochen schneller belastet wurde, als er sich umbauen konnte. Das reicht von einer Stressreaktion bis zu einem feinen Riss. Früh erkannt heilt das mit weniger Belastung meist innerhalb von etwa zwei Monaten gut aus, Weiterlaufen kann es aber verschlimmern. Ein tiefer Schmerz weiter oben auf dem Fußrücken oder innen am Mittelfuß, der beim Laufen zunimmt, gehört genauso abgeklärt, denn eine Stressverletzung am Kahnbein muss zügig behandelt werden.",
      meanwhile:
        "Hör mit dem Laufen auf und verzichte auf Hüpfen und Springen, bis du ärztlich oder physiotherapeutisch untersucht wurdest. Trag im Alltag feste, gut gedämpfte Schuhe. Radfahren und Schwimmen sind in Ordnung, solange sie nicht wehtun. Tut schon normales Gehen weh, lass dich innerhalb von ein bis zwei Tagen ärztlich untersuchen. Erzähl in der Praxis von kürzlichen Trainingssteigerungen, früheren Stressverletzungen, zu knapper Ernährung oder ausbleibender Periode.",
    },
    warn: ["fuel"],
    rtr: "bone",
    sources: ["warden2014", "hoenig2022", "patel2011", "ridge2013"],
  },
  {
    id: "extensor-tendon",
    kind: "plan",
    en: {
      title: "Ache along the top of the foot, worse with tight laces",
      desc: "Follows the tendons running to the toes rather than one spot on a bone. Often starts after new shoes, tighter lacing or lots of hills, and lifting your toes against resistance brings it on.",
      name: "Extensor tendinopathy (extensor tendonitis)",
      about:
        "The tendons that lift your toes and foot run just under the laces, and pressure from the shoe or extra work on hills can irritate them. Taking pressure off the top of the foot often brings quick relief, and gradual strengthening helps settle the rest.",
      load: "Loosen the laces over the sore area or skip those eyelets, and choose a shoe with a padded tongue. Keep runs easy and mostly flat until they stay within the pain rule, then add hills back gradually.",
    },
    de: {
      title: "Ziehen entlang des Fußrückens, schlimmer bei fester Schnürung",
      desc: "Verläuft entlang der Sehnen zu den Zehen, nicht punktuell auf einem Knochen. Beginnt oft nach neuen Schuhen, festerer Schnürung oder vielen Höhenmetern. Die Zehen gegen Widerstand anzuheben, löst den Schmerz aus.",
      name: "Strecksehnen-Tendinopathie am Fußrücken (Strecksehnenreizung)",
      about:
        "Die Sehnen, die Zehen und Fuß anheben, liegen direkt unter der Schnürung. Druck vom Schuh oder mehr Arbeit am Berg kann sie reizen. Weniger Druck auf dem Fußrücken bringt oft schnell Erleichterung, schrittweiser Kraftaufbau hilft beim Rest.",
      load: "Schnürung über der schmerzenden Stelle lockern oder diese Ösen auslassen und auf eine gepolsterte Zunge achten. Lauf locker und überwiegend flach, bis die Läufe innerhalb der Schmerzregel bleiben, dann Hügel schrittweise zurückholen.",
    },
    local: ["toe-lift-hold", "wall-toe-raise"],
    chain: [
      [
        "ankle",
        2,
        {
          en: "Tight calves and a stiff ankle can make the muscles that lift your foot and toes pull against more resistance on every stride, most of all uphill.",
          de: "Verkürzte Waden und ein steifes Sprunggelenk können dazu führen, dass die Fuß- und Zehenheber bei jedem Schritt gegen mehr Widerstand ziehen müssen, vor allem bergauf.",
        },
      ],
      [
        "stride",
        1,
        {
          en: "Landing heel-first with the foot far in front makes the muscles on the front of the shin and foot work harder to lower the foot after landing. A slightly quicker, shorter stride eases this.",
          de: "Landest du mit der Ferse weit vor dem Körper, müssen die Muskeln vorn an Schienbein und Fuß den Fuß nach der Landung stärker abbremsen. Ein etwas schnellerer, kürzerer Schritt entlastet.",
        },
      ],
    ],
    exits: [
      {
        to: "navicular-bsi-refer",
        en: "Is a coin-sized bony spot on top of the inner midfoot tender, with pain starting earlier each run?",
        de: "Ist oben innen am Mittelfuß eine Knochenstelle druckempfindlich, und kommt der Schmerz bei jedem Lauf früher?",
      },
      {
        to: "metatarsal-bsi-refer",
        en: "Does one spot on a forefoot bone hurt to press, and does hopping on that foot hurt?",
        de: "Schmerzt eine Stelle an einem Mittelfußknochen auf Druck, und tut Hüpfen auf diesem Fuß weh?",
      },
      {
        to: "peroneal-nerve-refer",
        en: "Does the top of your foot go numb or tingle during runs, even with loose laces?",
        de: "Wird dein Fußrücken beim Laufen taub oder kribbelt er, auch bei lockerer Schnürung?",
      },
    ],
    sources: ["hagen2010", "millar2021", "silbernagel2007"],
  },
  {
    id: "navicular-bsi-refer",
    kind: "refer",
    urgency: "soon",
    en: {
      title:
        "Deep ache on top of the inner midfoot that starts earlier each run",
      desc: "A vague ache on top of the midfoot, towards the inside, that can spread into the arch. It starts sooner in each run, lasts longer afterwards and settles quickly with rest. Pressing finds one coin-sized tender spot on the bone, a few centimetres in front of the ankle crease and slightly towards the big-toe side, and loosening your laces doesn't help.",
      name: "Navicular bone stress injury (stress fracture)",
      about:
        "This pattern can mean a bone stress injury of the navicular, a small bone at the top of the arch. It's a high-risk site: the middle of the bone has a poor blood supply, so it heals slowly and can heal badly if you keep running on it. X-rays often look normal at first, so it has often been found late, on average about 4 months after the pain began, and an MRI or CT is usually needed. Caught early, most runners heal well, often after several weeks of keeping weight off the foot, though getting back to running usually takes about 4–5 months.",
      meanwhile:
        "Stop running and hopping now, walk only as much as you need to, and see a sports doctor within a few days. If normal walking hurts, keep weight off the foot, with crutches if you have them, and get seen within a day or two. Swimming and upper-body training are fine if they're pain-free. Tell the doctor about any recent jump in training, earlier stress injuries, eating too little or missed periods.",
      avoid:
        "Skip calf raises, hops and foot drills until a doctor has cleared you, as they all load this bone.",
    },
    de: {
      title:
        "Tiefer Schmerz oben am inneren Mittelfuß, kommt bei jedem Lauf früher",
      desc: "Ein unbestimmter Schmerz oben auf dem Mittelfuß, eher innen, der ins Fußgewölbe ausstrahlen kann. Er setzt mit jedem Lauf früher ein, hält danach länger an und lässt in Ruhe schnell nach. Beim Abtasten findest du eine münzgroße, druckempfindliche Stelle am Knochen, einige Zentimeter vor der Beugefalte des Sprunggelenks und etwas zur Großzehenseite hin, und lockeres Schnüren ändert nichts daran.",
      name: "Knochenstressverletzung am Kahnbein (Ermüdungsbruch)",
      about:
        "Dieses Muster kann auf eine Knochenstressverletzung am Kahnbein hindeuten, einem kleinen Knochen oben am Fußgewölbe. Das ist eine Risikostelle: Die Mitte des Knochens ist schlecht durchblutet, deshalb heilt er langsam und kann schlecht verheilen, wenn du weiterläufst. Auf dem Röntgenbild ist anfangs oft nichts zu sehen, deshalb wurde die Verletzung häufig spät erkannt, im Schnitt etwa 4 Monate nach Beginn der Beschwerden, und meist braucht es ein MRT oder CT. Früh erkannt heilt sie bei den meisten gut, oft nach einigen Wochen, in denen der Fuß nicht belastet wird. Bis zum Wiedereinstieg ins Laufen vergehen aber meist etwa 4–5 Monate.",
      meanwhile:
        "Hör sofort mit Laufen und Hüpfen auf, geh nur so viel wie nötig und lass dich innerhalb weniger Tage sportmedizinisch untersuchen. Tut schon normales Gehen weh, belaste den Fuß nicht, am besten mit Unterarmgehstützen, und lass dich innerhalb von ein bis zwei Tagen untersuchen. Schwimmen und Oberkörpertraining sind in Ordnung, solange sie schmerzfrei sind. Erzähl in der Praxis von kürzlichen Trainingssteigerungen, früheren Stressverletzungen, zu knapper Ernährung oder ausbleibender Periode.",
      avoid:
        "Lass Wadenheben, Sprünge und Fußübungen weg, bis du ärztlich grünes Licht hast, denn sie alle belasten diesen Knochen.",
    },
    exits: [
      {
        to: "ankle-fracture-refer",
        en: "Did it start suddenly when you rolled or twisted your foot, rather than building up over weeks?",
        de: "Hat es plötzlich beim Umknicken oder Verdrehen des Fußes begonnen, statt sich über Wochen aufzubauen?",
      },
    ],
    warn: ["fuel"],
    rtr: "bone",
    sources: ["coris2003", "mcinnis2016", "mallee2015", "hoenig2023"],
  },
  {
    id: "jones-bsi-refer",
    kind: "refer",
    urgency: "soon",
    en: {
      title: "Pinpoint bony pain halfway along the outer edge of the foot",
      desc: "One spot on the long bone just in front of the bump halfway along the outer edge of your foot hurts to press. Pushing off, hopping and running on the outer edge make it worse, and it usually builds over weeks of more running rather than starting with a twist. The tendons behind the outer ankle bone aren't the sore part.",
      name: "Fifth metatarsal bone stress injury (Jones-zone stress fracture)",
      about:
        "This pattern can mean a bone stress injury near the base of the long bone on the outer edge of the foot (fifth metatarsal). It's a high-risk site: this stretch of bone has a poor blood supply, so it heals slowly and is more likely than most foot bones to heal badly, especially if you keep running. A sports doctor will usually arrange an X-ray or MRI and talk through whether a boot and crutches or an operation suits you best. Getting back to running often takes 3 months or more.",
      meanwhile:
        "Stop running and hopping, and walk only as much as you need to, in firm, stiff-soled shoes, until a doctor has seen you within a few days. If walking hurts or makes you limp, keep weight off the foot and get seen within a day or two. Swimming and upper-body training are fine if they're pain-free. Tell the doctor about any recent jump in training, earlier stress injuries, eating too little or missed periods.",
      avoid:
        "Skip calf raises, hops and the band exercises that turn the foot outward until you've been cleared, as they load or pull on this bone.",
    },
    de: {
      title: "Punktueller Knochenschmerz in der Mitte des Fußaußenrands",
      desc: "Eine Stelle am langen Knochen direkt vor dem Höcker in der Mitte des Fußaußenrands ist druckempfindlich. Abdruck, Hüpfen und Laufen über den Außenrand verstärken den Schmerz, und er baut sich meist über Wochen mit mehr Laufen auf, statt mit einem Umknicken zu beginnen. Die Sehnen hinter dem Außenknöchel sind nicht die schmerzende Stelle.",
      name: "Knochenstressverletzung am 5. Mittelfußknochen (Ermüdungsbruch in der Jones-Zone)",
      about:
        "Dieses Muster kann auf eine Knochenstressverletzung nahe der Basis des langen Knochens am Fußaußenrand hindeuten (5. Mittelfußknochen). Das ist eine Risikostelle: Dieser Abschnitt ist schlecht durchblutet, heilt deshalb langsam und verheilt häufiger als die meisten anderen Fußknochen schlecht, vor allem wenn du weiterläufst. In der sportmedizinischen Praxis wird meist geröntgt oder ein MRT gemacht und besprochen, ob ein Walker (Unterschenkelorthese) mit Gehstützen oder eine Operation für dich am besten passt. Bis zum Wiedereinstieg ins Laufen vergehen oft 3 Monate oder mehr.",
      meanwhile:
        "Hör mit Laufen und Hüpfen auf und geh nur so viel wie nötig, in festen Schuhen mit steifer Sohle, bis du innerhalb weniger Tage ärztlich untersucht wurdest. Tut Gehen weh oder hinkst du, belaste den Fuß nicht und lass dich innerhalb von ein bis zwei Tagen untersuchen. Schwimmen und Oberkörpertraining sind in Ordnung, solange sie schmerzfrei sind. Erzähl in der Praxis von kürzlichen Trainingssteigerungen, früheren Stressverletzungen, zu knapper Ernährung oder ausbleibender Periode.",
      avoid:
        "Lass Wadenheben, Sprünge und die Bandübungen, bei denen du den Fuß nach außen drehst, weg, bis du grünes Licht hast, denn sie belasten diesen Knochen oder ziehen an ihm.",
    },
    exits: [
      {
        to: "ankle-fracture-refer",
        en: "Did it start suddenly when you rolled or twisted your foot, rather than building up over weeks?",
        de: "Hat es plötzlich beim Umknicken oder Verdrehen des Fußes begonnen, statt sich über Wochen aufzubauen?",
      },
    ],
    warn: ["fuel"],
    rtr: "bone",
    sources: ["mcinnis2016", "mallee2015", "hoenig2023"],
  },
  {
    id: "sesamoid-refer",
    kind: "refer",
    urgency: "soon",
    en: {
      title: "Pinpoint pain under the big-toe knuckle when you push off",
      desc: "One spot under the big-toe knuckle, on the sole, is sore to press and hurts when you push off, rise onto your toes or bend the big toe up. It usually builds with speed work, hills, thin shoes or forefoot running. The joint isn't stiff, and the pain is underneath it, not on top.",
      name: "Sesamoid pain (sesamoiditis or sesamoid stress fracture)",
      about:
        'Two pea-sized bones sit in the tendons under the big-toe joint and take a lot of load every time you push off. "Sesamoiditis" is a loose label for several problems there, from irritation to a bone stress injury, and these little bones are a high-risk site for stress fractures because they have a poor blood supply and heal slowly. A sports doctor or podiatrist can work out which it is, often with a scan, and the right plan depends on that. It can be slow to settle, so get it checked early rather than running through it.',
      meanwhile:
        "Stop running and hopping, and get it checked within a few days, especially if pressing the spot or hopping on that foot hurts. For walking, wear well-cushioned shoes with a stiff sole, and avoid going barefoot or rising onto your toes. Swimming, and cycling with the arch rather than the ball of the foot on the pedal, are fine if they don't hurt. Tell the doctor about any recent jump in training, earlier stress injuries, eating too little or missed periods.",
      avoid:
        "Skip calf raises, hops and toe exercises that bend the big toe up for now, as they press on these small bones.",
    },
    de: {
      title: "Punktueller Schmerz am Großzehenballen beim Abdruck",
      desc: "Eine Stelle am Großzehenballen, direkt unter dem Grundgelenk, ist druckempfindlich und schmerzt beim Abdruck, im Zehenstand und wenn du den großen Zeh nach oben biegst. Baut sich meist mit Tempotraining, Bergläufen, dünnen Schuhen oder Vorfußlaufen auf. Das Gelenk ist nicht steif, und der Schmerz sitzt darunter, nicht obendrauf.",
      name: "Sesambeinschmerz an der Großzehe (Sesamoiditis oder Ermüdungsbruch des Sesambeins)",
      about:
        "Unter dem Großzehengrundgelenk liegen zwei erbsengroße Knöchelchen in den Sehnen. Sie tragen bei jedem Abdruck viel Last. „Sesamoiditis“ ist ein unscharfer Sammelbegriff für verschiedene Probleme an dieser Stelle, von einer Reizung bis zu einer Knochenstressverletzung, und diese kleinen Knochen gehören zu den Risikostellen für Ermüdungsbrüche, weil sie schlecht durchblutet sind und langsam heilen. In der sportmedizinischen oder orthopädischen Praxis lässt sich klären, was dahintersteckt, oft mit Bildgebung, und danach richtet sich der Plan. Es kann lange dauern, bis es sich beruhigt, deshalb lohnt es sich, es früh abklären zu lassen, statt weiterzulaufen.",
      meanwhile:
        "Hör mit Laufen und Hüpfen auf und lass es innerhalb weniger Tage abklären, vor allem wenn Druck auf die Stelle oder Hüpfen auf diesem Fuß wehtut. Trag zum Gehen gut gedämpfte Schuhe mit steifer Sohle und geh nicht barfuß oder auf Zehenspitzen. Schwimmen und Radfahren mit dem Fußgewölbe statt dem Ballen auf dem Pedal sind in Ordnung, solange sie nicht wehtun. Erzähl in der Praxis von kürzlichen Trainingssteigerungen, früheren Stressverletzungen, zu knapper Ernährung oder ausbleibender Periode.",
      avoid:
        "Lass Wadenheben, Sprünge und Zehenübungen, bei denen sich der große Zeh nach oben biegt, vorerst weg, denn sie drücken auf diese kleinen Knochen.",
    },
    warn: ["fuel"],
    rtr: "bone",
    sources: ["biz2025", "mcinnis2016"],
  },
  {
    id: "mortons-neuroma",
    kind: "plan",
    en: {
      title: "Burning or tingling between two toes, like a pebble in your shoe",
      desc: "Usually between the third and fourth toes. It builds as you run or walk, especially in narrow shoes, can shoot into those two toes or leave them numb, and eases when you take the shoe off and rub your foot. It feels like a nerve rather than a bruise, and no single toe joint is swollen.",
      name: "Morton's neuroma (interdigital neuralgia)",
      about:
        "A small nerve that runs between the ends of two long foot bones gets squeezed and irritated, often by narrow shoes, tight laces or lots of time on your forefoot. Roomier shoes, looser lacing and a small pad just behind the sore spot are the usual first step, although the evidence for any single treatment is weak. If nothing has changed after 6–8 weeks, see a doctor or podiatrist, who can discuss other options. Numbness that spreads beyond two toes, affects both feet or comes with diabetes needs a doctor's check.",
      load: "Run in shoes with a wide toe box, loosen the laces across the forefoot, and try a metatarsal pad placed just behind the painful area, not under it. For a few weeks, cut back speed work and hills, leave racing and minimal shoes aside, and keep easy runs within the pain rule.",
      avoid:
        "Skip narrow or tight shoes, including racing flats and spikes, and calf raises right up onto your toes for now, as squeezing the forefoot and bending the toes far up irritate the nerve.",
    },
    de: {
      title:
        "Brennen oder Kribbeln zwischen zwei Zehen, wie ein Steinchen im Schuh",
      desc: "Meist zwischen dritter und vierter Zehe. Baut sich beim Laufen oder Gehen auf, vor allem in engen Schuhen, kann in diese beiden Zehen einschießen oder sie taub werden lassen und lässt nach, wenn du den Schuh ausziehst und den Fuß ein wenig massierst. Es fühlt sich eher nach Nerv als nach Prellung an, und kein einzelnes Zehengelenk ist geschwollen.",
      name: "Morton-Neurom (Morton-Neuralgie)",
      about:
        "Ein kleiner Nerv zwischen den Köpfchen zweier Mittelfußknochen wird eingeengt und gereizt, oft durch enge Schuhe, feste Schnürung oder viel Laufen über den Vorfuß. Breitere Schuhe, lockerere Schnürung und ein kleines Polster direkt hinter der schmerzenden Stelle sind der übliche erste Schritt, auch wenn die Evidenz für jede einzelne Behandlung schwach ist. Hat sich nach 6–8 Wochen nichts verändert, lass dich ärztlich untersuchen, etwa orthopädisch, dort können weitere Möglichkeiten besprochen werden. Taubheit, die sich über zwei Zehen hinaus ausbreitet, beide Füße betrifft oder bei Diabetes auftritt, gehört ärztlich abgeklärt.",
      load: "Lauf in Schuhen mit breiter Zehenbox, lockere die Schnürung über dem Vorfuß und probier eine Mittelfußpelotte, die direkt hinter der schmerzenden Stelle sitzt, nicht darunter. Fahr Tempotraining und Bergläufe für ein paar Wochen zurück, lass Wettkampf- und Minimalschuhe so lange stehen und halte lockere Läufe innerhalb der Schmerzregel.",
      avoid:
        "Lass enge Schuhe, auch Wettkampfschuhe und Spikes, und Wadenheben bis ganz auf die Zehenspitzen vorerst weg, denn das Zusammendrücken des Vorfußes und starkes Überstrecken der Zehen reizen den Nerv.",
    },
    local: ["toe-press", "short-foot", "wall-calf-stretch"],
    linkExercises: {
      ankle: ["ktw-mob"],
    },
    chain: [
      [
        "stride",
        2,
        {
          en: "Slightly shorter, quicker steps land more lightly and cut the load on the forefoot. In one study of healthy runners, a 5% higher step rate lowered the load under the ball of the foot.",
          de: "Etwas kürzere, schnellere Schritte setzen leichter auf und entlasten den Vorfuß. In einer Studie mit gesunden Laufenden senkten 5 % mehr Schritte pro Minute die Last unter dem Fußballen.",
        },
      ],
      [
        "ankle",
        2,
        {
          en: "Tight calves and a stiff ankle can make the heel lift early, so each step spends longer on the ball of the foot, where the nerve is squeezed.",
          de: "Verkürzte Waden und ein steifes Sprunggelenk können die Ferse früh abheben lassen. Dann bleibt jeder Schritt länger auf dem Fußballen, wo der Nerv eingeengt wird.",
        },
      ],
    ],
    exits: [
      {
        to: "metatarsal-bsi-refer",
        en: "Does one spot on top of a forefoot bone hurt to press, and does hopping on that foot hurt?",
        de: "Schmerzt eine Stelle oben auf einem Mittelfußknochen auf Druck, und tut Hüpfen auf diesem Fuß weh?",
      },
    ],
    sources: [
      "matthews2019",
      "besse2017",
      "wellenkotter2014",
      "digiovanni2002",
    ],
  },
  {
    id: "hallux-rigidus",
    kind: "plan",
    en: {
      title: "Stiff, aching big-toe joint that hurts as you push off",
      desc: "The joint at the base of the big toe feels stiff and sore, bends up less than on the other foot and often has a bony bump on top. It's worse pushing off, running uphill, on your toes and in soft, flexible shoes. The pain sits on top of and around the joint rather than in one spot underneath.",
      name: "Hallux rigidus or limitus (stiff or arthritic big-toe joint)",
      about:
        "The big-toe joint has lost some of its upward bend, often from wear in the joint, and it gets irritated each time you roll over it. In a trial, pain eased with both ready-made insoles and rocker-sole shoes, and gentle mobility and toe strength work may help too, though that evidence is small. It tends to be long-lasting, so think of it as something you can manage rather than cure. A hot, red, swollen joint is different: see a doctor promptly, the same day if you also have a fever or feel unwell, as gout or an infection needs other treatment.",
      load: "Choose shoes with a stiffer or rocker sole and skip very soft, flexible or minimal shoes for now. Run flat routes within the pain rule, cut back hills, strides and running on your toes, and bring them back gradually.",
      avoid:
        "Skip calf raises that take you right up onto your toes and the towel-under-the-toes heel raise for now, because forcing the big toe up irritates the joint.",
    },
    de: {
      title: "Steifes, schmerzendes Großzehengelenk, schlimmer beim Abdruck",
      desc: "Das Gelenk am Ansatz des großen Zehs fühlt sich steif und schmerzhaft an, lässt sich weniger weit nach oben biegen als auf der anderen Seite und hat oft einen knöchernen Höcker obendrauf. Schlimmer beim Abdruck, bergauf, auf Zehenspitzen und in weichen, biegsamen Schuhen. Der Schmerz sitzt oben und rund um das Gelenk, nicht an einer Stelle darunter.",
      name: "Hallux rigidus / Hallux limitus (Arthrose oder Bewegungseinschränkung des Großzehengrundgelenks)",
      about:
        "Das Großzehengrundgelenk hat etwas von seiner Beweglichkeit nach oben verloren, oft durch Verschleiß, und wird bei jedem Abrollen gereizt. In einer Studie ließen die Schmerzen sowohl mit konfektionierten Einlagen als auch mit Schuhen mit Abrollsohle nach, und sanfte Mobilisation und Kräftigung der Zehen können zusätzlich helfen, die Evidenz dafür ist aber dünn. Meist bleibt es längerfristig, sieh es also eher als etwas, das du gut in den Griff bekommen kannst, als etwas, das ausheilt. Ein heißes, rotes, geschwollenes Gelenk ist etwas anderes: Lass es zügig ärztlich abklären, noch am selben Tag, wenn du Fieber hast oder dich krank fühlst, denn Gicht oder eine Infektion brauchen eine andere Behandlung.",
      load: "Wähl Schuhe mit steiferer Sohle oder Abrollsohle und lass sehr weiche, biegsame oder Minimalschuhe vorerst weg. Lauf innerhalb der Schmerzregel auf flachen Strecken, fahr Hügel, Steigerungsläufe und Laufen auf dem Vorfuß zurück und hol sie schrittweise wieder dazu.",
      avoid:
        "Lass Wadenheben bis ganz auf die Zehenspitzen und das Wadenheben mit Handtuch unter den Zehen vorerst weg, denn das starke Überstrecken des großen Zehs reizt das Gelenk.",
    },
    local: ["big-toe-mobilisation", "toe-press"],
    linkExercises: {
      ankle: ["ktw-mob"],
    },
    chain: [
      [
        "foot",
        2,
        {
          en: "The small foot muscles, including the big-toe flexors, help control the roll-off over the big toe. In a small trial, adding big-toe strength work, joint mobilisation and gait training to usual care eased pain and improved how far the joint bends.",
          de: "Die kleinen Fußmuskeln und die Beuger des großen Zehs helfen, das Abrollen über den großen Zeh zu steuern. In einer kleinen Studie linderten zusätzliches Krafttraining für den großen Zeh, Gelenkmobilisation und Gangschulung die Schmerzen und verbesserten die Beweglichkeit des Gelenks.",
        },
      ],
      [
        "ankle",
        1,
        {
          en: "A stiff ankle and tight calves can make the heel lift early, so you roll over the big-toe joint sooner and harder.",
          de: "Ein steifes Sprunggelenk und verkürzte Waden können die Ferse früh abheben lassen, sodass du früher und kräftiger über das Großzehengrundgelenk abrollst.",
        },
      ],
    ],
    exits: [
      {
        to: "sesamoid-refer",
        en: "Is the sore spot on the sole, under the big-toe joint, rather than on top of it?",
        de: "Sitzt die schmerzhafte Stelle an der Sohle unter dem Großzehengrundgelenk statt oben auf dem Gelenk?",
      },
    ],
    sources: ["menz2016", "shamus2004", "digiovanni2002"],
  },
  {
    id: "plantar-plate",
    kind: "plan",
    en: {
      title: "Ache and swelling under the base of the second toe",
      desc: "The joint at the base of one toe, usually the second, is sore to press from below and can look puffy on top. It's worse pushing off, on tiptoe and barefoot, and the toe may slowly lift, drift towards the big toe or stop touching the floor. There's no burning or numbness, and the sore spot is the joint itself, not the bone further back.",
      name: "Plantar plate injury (lesser toe joint instability)",
      about:
        "The plantar plate is a tough pad under the toe joint that holds the toe down and straight, and repeated push-off, especially on your toes or in flexible shoes, can strain or tear it. Taking pressure off the joint with a stiffer shoe and a pad is the usual first step, but there's almost no research on non-surgical care. Have a physio or podiatrist check it early if the toe is drifting or lifting, if the swelling hasn't settled after 4–6 weeks, or if you're under 18, as in teenagers the growing bone at this joint can be the cause.",
      load: "Run easy on flat ground in a stiffer, well-cushioned shoe, and skip minimal shoes, spikes, sprints and hills until it settles. A metatarsal pad placed just behind the sore joint can take pressure off it.",
      avoid:
        "Skip the towel-under-the-toes heel raise, calf raises right up onto your toes, hops and walking barefoot for now, because bending the toe far up strains the plate.",
    },
    de: {
      title: "Schmerz und Schwellung unter dem Grundgelenk der zweiten Zehe",
      desc: "Das Grundgelenk einer Zehe, meist der zweiten, ist von unten druckempfindlich und kann oben geschwollen aussehen. Schlimmer beim Abdruck, auf Zehenspitzen und barfuß, und die Zehe kann sich langsam anheben, zum großen Zeh hin wandern oder den Boden nicht mehr berühren. Es brennt nicht und wird nicht taub, und die schmerzhafte Stelle ist das Gelenk selbst, nicht der Knochen weiter hinten.",
      name: "Verletzung der Plantarplatte (Instabilität des Zehengrundgelenks)",
      about:
        "Die Plantarplatte ist eine kräftige Faserplatte unter dem Zehengrundgelenk, die die Zehe unten und gerade hält, und wiederholter Abdruck, vor allem auf dem Vorfuß oder in biegsamen Schuhen, kann sie überlasten oder einreißen. Ein steiferer Schuh und ein Polster, die das Gelenk entlasten, sind der übliche erste Schritt, zur Behandlung ohne Operation gibt es aber kaum Forschung. Lass es früh physiotherapeutisch oder orthopädisch untersuchen, wenn die Zehe wandert oder sich anhebt, die Schwellung nach 4–6 Wochen nicht abgeklungen ist oder du unter 18 bist, denn bei Jugendlichen kann auch der wachsende Knochen an diesem Gelenk dahinterstecken.",
      load: "Lauf locker auf flachem Untergrund in einem steiferen, gut gedämpften Schuh und lass Minimalschuhe, Spikes, Sprints und Hügel weg, bis es sich beruhigt. Eine Mittelfußpelotte direkt hinter dem schmerzenden Gelenk kann es entlasten.",
      avoid:
        "Lass das Wadenheben mit Handtuch unter den Zehen, Wadenheben bis ganz auf die Zehenspitzen, Sprünge und Barfußgehen vorerst weg, denn das starke Überstrecken der Zehe belastet die Platte.",
    },
    local: ["toe-press", "short-foot"],
    linkExercises: {
      ankle: ["ktw-mob"],
    },
    chain: [
      [
        "ankle",
        2,
        {
          en: "Tight calves and a stiff ankle can make the heel lift early, so each push-off bends the toe joints further and for longer.",
          de: "Verkürzte Waden und ein steifes Sprunggelenk können die Ferse früh abheben lassen. Dann werden die Zehengrundgelenke bei jedem Abdruck stärker und länger überstreckt.",
        },
      ],
      [
        "stride",
        2,
        {
          en: "Slightly shorter, quicker steps land more lightly and shorten each push-off. In one study of healthy runners, a 5% higher step rate lowered the load under the ball of the foot.",
          de: "Etwas kürzere, schnellere Schritte setzen leichter auf und verkürzen jeden Abdruck. In einer Studie mit gesunden Laufenden senkten 5 % mehr Schritte pro Minute die Last unter dem Fußballen.",
        },
      ],
    ],
    exits: [
      {
        to: "metatarsal-bsi-refer",
        en: "Is the sore spot on the bone a little behind the toe joint, and does hopping on that foot hurt?",
        de: "Sitzt die schmerzhafte Stelle am Knochen etwas hinter dem Zehengelenk, und tut Hüpfen auf diesem Fuß weh?",
      },
    ],
    sources: ["park2025", "besse2017", "digiovanni2002", "wellenkotter2014"],
  },
  {
    id: "cuboid-refer",
    kind: "refer",
    urgency: "routine",
    en: {
      title: "Sharp pain on the outer midfoot after a sprain or hard session",
      desc: "Sore on the outer side of the midfoot, between the heel and the bump halfway along the outer edge, often starting after you rolled your ankle or after a hard downhill or track session. Pushing off and walking on the outer edge of the foot hurt, and it can feel as if something is out of place. It tends to start fairly suddenly rather than building over weeks.",
      name: "Cuboid syndrome",
      about:
        "This pattern can fit cuboid syndrome, where a small bone on the outer midfoot and the joints around it are irritated, possibly slightly out of their usual position, often after an ankle sprain. It isn't well understood and there's no definitive test, but a physio or sports doctor can examine it, rule out a fracture or a stress injury, and start treatment you can't do yourself. In small case series it often settled quickly once treated.",
      meanwhile:
        "Book a physio or sports doctor within 1–3 weeks. Until then, run only as much as stays within the pain rule, on flat, even ground in firm, supportive shoes, and skip speed work, hills and trails.",
    },
    de: {
      title: "Stechender Schmerz außen am Mittelfuß, oft nach dem Umknicken",
      desc: "Schmerzt außen am Mittelfuß, zwischen der Ferse und dem Höcker in der Mitte des Fußaußenrands, oft nach dem Umknicken oder nach einem harten Bergablauf oder Bahntraining. Abdruck und Gehen über den Fußaußenrand tun weh, und es kann sich anfühlen, als wäre etwas verrutscht. Beginnt eher recht plötzlich, statt sich über Wochen aufzubauen.",
      name: "Kuboid-Syndrom (Würfelbein-Syndrom)",
      about:
        "Dieses Muster kann zu einem Kuboid-Syndrom passen: Das Würfelbein, ein kleiner Knochen außen am Mittelfuß, und die Gelenke darum sind gereizt und vielleicht leicht aus ihrer gewohnten Stellung geraten, oft nach einem Umknicken. Es ist wenig erforscht und es gibt keinen eindeutigen Test, aber in der Physiotherapie oder sportmedizinischen Praxis kann man es untersuchen, einen Bruch oder eine Stressverletzung ausschließen und eine Behandlung beginnen, die du nicht selbst machen kannst. In kleinen Fallserien besserte es sich danach oft schnell.",
      meanwhile:
        "Mach innerhalb von 1–3 Wochen einen Termin in der Physiotherapie oder sportmedizinischen Praxis. Lauf bis dahin nur so viel, wie die Schmerzregel zulässt, auf flachem, ebenem Untergrund in festen, stützenden Schuhen, und lass Tempotraining, Hügel und Trails weg.",
    },
    exits: [
      {
        to: "ankle-fracture-refer",
        en: "Did it start with rolling your ankle, and does the bony bump halfway along the outer edge hurt to press?",
        de: "Begann es mit einem Umknicken, und tut der Knochenvorsprung in der Mitte des Fußaußenrands auf Druck weh?",
      },
      {
        to: "ankle-fracture-refer",
        en: "Was walking four steps impossible right after you rolled your ankle, or is it impossible now?",
        de: "War es direkt nach dem Umknicken unmöglich, vier Schritte zu gehen, oder ist es das jetzt?",
      },
      {
        to: "jones-bsi-refer",
        en: "Does hopping on that foot hurt, or does the bone just in front of the bump on the outer edge hurt to press?",
        de: "Tut Hüpfen auf diesem Fuß weh, oder schmerzt der Knochen direkt vor dem Vorsprung am Fußaußenrand auf Druck?",
      },
    ],
    sources: ["durall2011", "patterson2006"],
  },
  {
    id: "calcaneal-bsi-refer",
    kind: "refer",
    urgency: "soon",
    en: {
      title: "Deep ache across the heel that builds the longer you run",
      desc: "Often follows a jump in mileage or more running on hard ground. The ache sits deep in the heel bone and spreads across it, rather than in one tender spot under or behind the heel. Squeezing both sides of the heel bone hurts, the pain grows during a run instead of easing, and walking can hurt too.",
      name: "Calcaneal bone stress injury (heel stress fracture)",
      about:
        "This pattern can mean the heel bone has been loaded faster than it could rebuild, which can range from a stress reaction to a small crack. The heel usually counts as a lower-risk site, and most runners heal well with a spell of reduced load. X-rays often look normal at first, so an MRI may be needed to see it, and running through it can make it worse.",
      meanwhile:
        "Stop running and avoid hopping and jumping until a doctor or physio has seen you. Wear cushioned shoes for everyday walking, and cycling or swimming are fine if they don't hurt. If even normal walking hurts, see a doctor within a day or two. Tell them about any recent jump in training, earlier stress injuries, eating too little or missed periods.",
      avoid:
        "Skip barefoot walking on hard floors and heel raises until it's been checked, as both load the heel bone.",
    },
    de: {
      title: "Tiefer Fersenschmerz, der mit jedem Kilometer stärker wird",
      desc: "Folgt oft auf eine Steigerung des Umfangs oder mehr Laufen auf hartem Boden. Der Schmerz sitzt tief im Fersenbein und breitet sich darin aus, statt an einer empfindlichen Stelle unter oder hinter der Ferse zu sitzen. Es tut weh, das Fersenbein von beiden Seiten zusammenzudrücken, der Schmerz nimmt während des Laufs zu, statt nachzulassen, und auch Gehen kann wehtun.",
      name: "Knochenstressverletzung am Fersenbein (Ermüdungsbruch)",
      about:
        "Dieses Muster kann bedeuten, dass das Fersenbein schneller belastet wurde, als es sich umbauen konnte. Das reicht von einer Stressreaktion bis zu einem feinen Riss. Die Ferse gilt meist als Stelle mit geringerem Risiko, und mit einer Phase weniger Belastung heilt die Verletzung in der Regel gut aus. Im Röntgenbild sieht man anfangs oft nichts, deshalb kann ein MRT nötig sein, und Weiterlaufen kann es verschlimmern.",
      meanwhile:
        "Hör mit dem Laufen auf und verzichte auf Hüpfen und Springen, bis du ärztlich oder physiotherapeutisch untersucht wurdest. Trag im Alltag gut gedämpfte Schuhe. Radfahren und Schwimmen sind in Ordnung, solange sie nicht wehtun. Tut schon normales Gehen weh, lass dich innerhalb von ein bis zwei Tagen ärztlich untersuchen. Erzähl in der Praxis von kürzlichen Trainingssteigerungen, früheren Stressverletzungen, zu knapper Ernährung oder ausbleibender Periode.",
      avoid:
        "Lass Barfußgehen auf harten Böden und Wadenheben weg, bis es abgeklärt ist, denn beides belastet das Fersenbein.",
    },
    warn: ["fuel"],
    rtr: "bone",
    sources: ["warden2014", "hoenig2022", "koc2023", "mountjoy2023"],
  },
  {
    id: "heel-fat-pad",
    kind: "plan",
    en: {
      title: "Bruised feeling in the middle of the heel, worse on hard floors",
      desc: "Feels like stepping on a stone, right in the centre of the heel pad. Worse barefoot on hard floors, after long walks or standing and when you land on your heels, and often in both heels. Unlike plantar fasciitis, the first steps in the morning aren't usually the worst, and it doesn't ease once you're warm.",
      name: "Heel fat pad syndrome",
      about:
        "The thick cushion of fat under your heel bone can be bruised or thinner and less springy than it was, so it spreads the pressure of each landing less well. It may be the second most common cause of pain under the heel and is often mistaken for plantar fasciitis, but it's barely researched: there are only a handful of studies and no randomised treatment trials. Extra cushioning, a gel heel cup and less pounding often help, because the main job is protecting the heel while it settles.",
      load: "Run on softer, flat surfaces like grass, a track or smooth forest paths in well-cushioned shoes, and cut back distance or speed if the heel is sorer the next morning. A slightly quicker, shorter step can soften each heel landing.",
      avoid:
        "Skip going barefoot or wearing flat slippers on hard floors, as that often aggravates the heel pad most.",
    },
    de: {
      title:
        "Prellungsgefühl mitten unter der Ferse, schlimmer auf harten Böden",
      desc: "Fühlt sich an, als würdest du auf einen Stein treten, genau in der Mitte des Fersenpolsters. Schlimmer barfuß auf harten Böden, nach langem Gehen oder Stehen und wenn du über die Ferse landest, oft an beiden Fersen. Anders als bei der Plantarfasziitis sind die ersten Schritte am Morgen meist nicht am schlimmsten, und warm gelaufen wird es nicht besser.",
      name: "Fersenpolster-Syndrom (Fersenfettpolster-Syndrom)",
      about:
        "Das dicke Fettpolster unter deinem Fersenbein kann geprellt oder dünner und weniger federnd sein als früher und verteilt den Druck bei jeder Landung dann schlechter. Es ist vielleicht die zweithäufigste Ursache für Schmerzen unter der Ferse und wird oft mit einer Plantarfasziitis verwechselt, ist aber kaum erforscht: Es gibt nur eine Handvoll Studien und keine randomisierten Therapiestudien. Mehr Dämpfung, eine Fersenschale aus Gel und weniger harte Stöße helfen oft, denn im Kern geht es darum, die Ferse zu schützen, bis sie sich beruhigt.",
      load: "Lauf auf weicherem, flachem Untergrund wie Rasen, der Bahn oder glatten Waldwegen in gut gedämpften Schuhen und kürze Umfang oder Tempo, wenn die Ferse am nächsten Morgen empfindlicher ist. Ein etwas schnellerer, kürzerer Schritt kann jede Fersenlandung abmildern.",
      avoid:
        "Lass Barfußgehen oder flache Hausschuhe auf harten Böden weg, denn das setzt dem Fersenpolster oft am meisten zu.",
    },
    local: ["short-foot", "calf-raise"],
    chain: [
      [
        "stride",
        2,
        {
          en: "Long strides land hard on the heel, far in front of your body. A slightly quicker step rate can soften each landing, though nobody has tested this for heel pad pain specifically.",
          de: "Bei langen Schritten landest du hart auf der Ferse, weit vor dem Körper. Eine etwas höhere Schrittfrequenz kann jede Landung weicher machen, auch wenn das speziell beim Fersenpolster-Syndrom noch niemand untersucht hat.",
        },
      ],
      ["calf", 1],
    ],
    exits: [
      {
        to: "severs",
        en: "Are you between 8 and 14 and still growing?",
        de: "Bist du zwischen 8 und 14 Jahre alt und noch im Wachstum?",
      },
      {
        to: "calcaneal-bsi-refer",
        en: "Does squeezing both sides of the heel bone hurt, or does the pain build the longer you run?",
        de: "Schmerzt das Fersenbein, wenn du es seitlich zusammendrückst, oder wird der Schmerz beim Laufen immer stärker?",
      },
      {
        to: "tarsal-tunnel-refer",
        en: "Do you feel burning, tingling or numbness in the heel or the sole?",
        de: "Spürst du Brennen, Kribbeln oder Taubheit an der Ferse oder in der Fußsohle?",
      },
    ],
    sources: ["chang2022", "koc2023"],
  },
  {
    id: "ankle-sprain",
    kind: "plan",
    en: {
      title: "Sharp pain and swelling on the outer ankle after rolling it",
      desc: "Started the moment you rolled over the outside of your foot, on a kerb, a root or a trail, usually in the last few days or weeks. The outer ankle is swollen or bruised and hurts to walk on. If your ankle has kept giving way for months, the card for an unsteady ankle fits better.",
      name: "Lateral ankle sprain (rolled ankle)",
      about:
        "Rolling the foot inward stretches or tears the ligaments on the outside of the ankle. Most sprains heal well if you start walking normally early on, then train balance and strength in steps that get gradually harder. Without that training, the ankle is more likely to roll again. If it isn't clearly getting better after 2–3 weeks, have a physio or sports doctor check it.",
      load: "Walk as normally as you comfortably can from the first days, and swap running for cycling or pool running until brisk walking and hopping on that leg feel fine. A lace-up brace or other ankle support can make walking easier in the first weeks. Then start with short, easy runs on flat, even ground, and bring back trails and quick turns last.",
      avoid:
        "In the first few days, skip heat, massage on the swollen area and hopping drills.",
    },
    de: {
      title:
        "Stechender Schmerz und Schwellung am Außenknöchel nach dem Umknicken",
      desc: "Begann in dem Moment, als du über den Fußaußenrand umgeknickt bist, an einer Bordsteinkante, einer Wurzel oder auf dem Trail, meist vor wenigen Tagen oder Wochen. Außen am Knöchel ist es geschwollen oder blau und tut beim Gehen weh. Knickt dein Sprunggelenk seit Monaten immer wieder weg, passt die Karte zum instabilen Sprunggelenk besser.",
      name: "Außenbandverletzung am Sprunggelenk (Supinationstrauma, Umknicken)",
      about:
        "Beim Umknicken nach innen werden die Bänder außen am Sprunggelenk überdehnt oder reißen ein. Die meisten dieser Verletzungen heilen gut, wenn du früh wieder normal gehst und danach Gleichgewicht und Kraft in Schritten trainierst, die nach und nach schwieriger werden. Ohne dieses Training knickst du leichter erneut um. Wird es nach 2–3 Wochen nicht deutlich besser, lass es physiotherapeutisch oder sportärztlich untersuchen.",
      load: "Geh von den ersten Tagen an so normal, wie es angenehm geht, und ersetze das Laufen durch Radfahren oder Aquajogging, bis zügiges Gehen und Hüpfen auf dem Bein gut klappen. Eine stabilisierende Sprunggelenkbandage oder -orthese kann das Gehen in den ersten Wochen erleichtern. Dann mit kurzen, lockeren Läufen auf flachem, ebenem Untergrund beginnen und Trails und schnelle Richtungswechsel zuletzt zurückholen.",
      avoid:
        "In den ersten Tagen keine Wärme, keine Massage auf der Schwellung und keine Sprungübungen.",
    },
    local: ["balance-reach", "band-eversion", "hop-stick"],
    later: ["hop-stick"],
    chain: [
      [
        "foot",
        3,
        {
          en: "A sprain disturbs the ankle's sense of position and its balance reflexes. Balance training from the first weeks helps recovery, and in a large trial it made repeat sprains less common.",
          de: "Ein Umknicken stört den Lagesinn und die Gleichgewichtsreflexe im Sprunggelenk. Gleichgewichtstraining ab den ersten Wochen hilft bei der Erholung und hat in einer großen Studie erneutes Umknicken seltener gemacht.",
        },
      ],
      [
        "ankle",
        2,
        {
          en: "After a sprain the ankle often doesn't bend up as far for a while, which changes how you land and push off. Getting that bend back is part of the rehab the sprain guideline recommends.",
          de: "Nach dem Umknicken lässt sich das Sprunggelenk oft eine Zeit lang schlechter anziehen. Das verändert Landung und Abdruck. Laut Leitlinie gehört es zur Reha, diese Beweglichkeit zurückzugewinnen.",
        },
      ],
      ["hipabd", 1],
    ],
    exits: [
      {
        to: "ankle-fracture-refer",
        en: "Couldn't you walk 4 steps then or now, or is the tip or back edge of an ankle bone or a midfoot bone tender?",
        de: "Waren oder sind 4 Schritte unmöglich, oder tut Druck auf Knöchelspitze, -hinterkante oder Mittelfuß weh?",
      },
    ],
    sources: ["martin2021", "bachmann2003", "hupperets2009"],
  },
  {
    id: "ankle-fracture-refer",
    kind: "refer",
    urgency: "today",
    en: {
      title: "Bony pain or can't bear weight after rolling your ankle",
      desc: "You rolled or twisted your ankle, and you couldn't take four steps straight after or still can't, or one of these spots hurts to press: the tip of either ankle bone or the back edge of its lowest 6 cm, the bony bump halfway along the outer edge of your foot, or the bony bump on the inner side of the midfoot, in front of and below the inner ankle bone.",
      name: "Possible ankle or midfoot fracture (Ottawa ankle rules)",
      about:
        "Doctors use these checks, the Ottawa ankle rules, to decide who needs an X-ray after a sprain. They pick up almost every fracture, so if none of them applies, a break is unlikely. Soreness in the soft area just in front of the outer ankle bone usually comes from the stretched ligament and isn't one of these checks. If one does apply, it doesn't mean the bone is broken, and most turn out to be sprains, but only an X-ray can tell.",
      meanwhile:
        "Get it X-rayed today at an urgent care clinic, an emergency department or your doctor's practice. Until then, keep weight off the foot as much as you can and keep it raised. Don't run or hop, and don't try to walk through the pain. If the foot looks out of shape, or turns cold, pale or numb, go to an emergency department now.",
    },
    de: {
      title: "Knochenschmerz oder kein Auftreten möglich nach dem Umknicken",
      desc: "Du bist umgeknickt oder hast dir den Fuß verdreht und konntest danach keine vier Schritte gehen oder kannst es immer noch nicht, oder eine dieser Stellen tut auf Druck weh: die Spitze eines der beiden Knöchel oder die Hinterkante ihrer unteren 6 cm, der Knochenvorsprung in der Mitte des Fußaußenrands oder der Knochenvorsprung innen am Mittelfuß, vor und unterhalb des Innenknöchels.",
      name: "Möglicher Knochenbruch an Sprunggelenk oder Mittelfuß (Ottawa Ankle Rules)",
      about:
        "Ärztinnen und Ärzte nutzen diese Kriterien, die Ottawa Ankle Rules, um nach dem Umknicken zu entscheiden, wer geröntgt werden muss. Sie übersehen kaum einen Bruch: Trifft keins davon zu, ist ein Bruch unwahrscheinlich. Druckschmerz in der weichen Stelle direkt vor dem Außenknöchel kommt meist vom überdehnten Band und zählt nicht zu diesen Kriterien. Trifft eins zu, heißt das noch nicht, dass der Knochen gebrochen ist, meist ist es doch eine Bänderverletzung. Klarheit bringt aber nur ein Röntgenbild.",
      meanwhile:
        "Lass es heute noch röntgen, in einer Notfallpraxis, der Notaufnahme oder bei deiner Ärztin oder deinem Arzt. Bis dahin den Fuß so wenig wie möglich belasten und hochlagern. Nicht laufen oder hüpfen und nicht trotz Schmerzen weitergehen. Sieht der Fuß verformt aus oder wird er kalt, blass oder taub, geh sofort in die Notaufnahme.",
    },
    rtr: "none",
    sources: ["bachmann2003", "martin2021"],
  },
  {
    id: "severs",
    kind: "plan",
    youth: true,
    en: {
      title: "Sore heel after running or sport while you're still growing",
      desc: "For runners aged about 8 to 14. The back or bottom of the heel hurts during and after running, jumping or football, and squeezing both sides of the heel hurts. It's often in both heels and eases with rest.",
      name: "Sever's disease (calcaneal apophysitis)",
      about:
        "While you're growing, the back of your heel bone has a softer growth zone where the Achilles tendon pulls, and lots of running and jumping can irritate it. It's common, it isn't harmful, and it gets better with time. In trials, children improved whether they used heel raises, insoles, exercises or simply waited, and heel raises helped only a little in the first month or two.",
      load: "You can keep running and playing if the pain stays mild, up to about 3 out of 10, and is gone by the next morning. On sore days, do less jumping and sprinting, choose grass over hard ground, and wear cushioned trainers rather than flat shoes or spikes. Soft heel cups or small heel raises in your trainers can ease it in the first weeks.",
      avoid:
        "Don't play through heel pain that makes you limp, hurts when you rest or at night, or never goes away: see a doctor with a parent in the next few days, or today if you also have a fever or a red, swollen heel.",
    },
    de: {
      title: "Schmerzende Ferse nach Laufen oder Sport, solange du noch wächst",
      desc: "Für Laufende zwischen etwa 8 und 14 Jahren. Die Ferse tut hinten oder unten beim und nach dem Laufen, Springen oder Fußballspielen weh, und es schmerzt, wenn du sie von beiden Seiten zusammendrückst. Oft sind beide Fersen betroffen, und Pausen helfen.",
      name: "Morbus Sever (Apophysitis calcanei)",
      about:
        "Solange du wächst, hat dein Fersenbein hinten eine weichere Wachstumszone, an der die Achillessehne zieht, und viel Laufen und Springen kann sie reizen. Das ist häufig und harmlos und wird mit der Zeit besser. In Studien ging es Kindern besser, egal ob mit Fersenerhöhung, Einlagen, Übungen oder einfach Abwarten, und eine Fersenerhöhung half nur in den ersten ein, zwei Monaten etwas.",
      load: "Du kannst weiterlaufen und spielen, solange der Schmerz leicht bleibt, höchstens etwa 3 von 10, und am nächsten Morgen weg ist. An schmerzhaften Tagen weniger springen und sprinten, lieber auf Rasen als auf hartem Boden laufen und gedämpfte Sportschuhe statt flacher Schuhe oder Spikes tragen. Gel-Fersenkissen oder kleine Fersenerhöhungen in den Sportschuhen können es in den ersten Wochen lindern.",
      avoid:
        "Spiel nicht weiter, wenn du wegen der Ferse hinkst, sie in Ruhe oder nachts wehtut oder der Schmerz gar nicht mehr weggeht: Geh dann in den nächsten Tagen mit einem Elternteil zum Arzt oder zur Ärztin, bei Fieber oder einer roten, geschwollenen Ferse noch heute.",
    },
    local: ["wall-calf-stretch", "bent-knee-raise"],
    chain: [],
    rtr: "none",
    sources: ["james2016", "wiegerinck2016"],
  },
  {
    id: "posterior-impingement",
    kind: "plan",
    en: {
      title: "Deep pain at the back of the ankle when you point your foot hard",
      desc: "Sits deep at the back of the ankle, in front of the Achilles rather than in it, or deep behind the inner ankle bone. It's worse running downhill, on tiptoe and when you point your foot hard, and squeezing the Achilles itself doesn't hurt. If pressing your big toe down against resistance brings it on, the big-toe tendon is likely involved.",
      name: "Posterior ankle impingement, with or without flexor hallucis longus (FHL) tendinopathy",
      about:
        "When you point your foot fully, bone and soft tissue at the back of the ankle can get pinched, sometimes around a small extra bone, and the tendon that bends your big toe runs right through this area. Lots of downhill or forefoot running can irritate it, and Achilles pain that isn't improving with calf loading sometimes turns out to be this. The evidence is thin, mostly case series, but changing your load and building calf and toe strength in mid-range usually come first. Have a physio or sports doctor check it if it started with a twist, the big toe catches, or it hasn't improved after about 6–8 weeks.",
      load: "Keep running on flat ground within the pain rule, and skip downhill runs, forefoot running and spikes for now. On descents, take short, quick steps instead of reaching with your toes.",
      avoid:
        "Skip full tiptoe raises and pointing your foot hard: keep calf raises to about halfway up for now.",
    },
    de: {
      title: "Tiefer Schmerz hinten im Sprunggelenk beim kräftigen Fußstrecken",
      desc: "Sitzt tief hinten im Sprunggelenk, vor der Achillessehne statt in ihr, oder tief hinter dem Innenknöchel. Schlimmer beim Bergablaufen, im Zehenstand und beim kräftigen Fußstrecken, und die Achillessehne selbst ist beim Zusammendrücken nicht empfindlich. Tut es weh, wenn du den großen Zeh gegen Widerstand nach unten drückst, ist wahrscheinlich die Sehne des langen Großzehenbeugers beteiligt.",
      name: "Hinteres Impingement des oberen Sprunggelenks, mit oder ohne Tendinopathie des langen Großzehenbeugers (FHL)",
      about:
        "Wenn du den Fuß ganz streckst, können Knochen und Weichteile hinten im Sprunggelenk eingeklemmt werden, manchmal rund um ein kleines zusätzliches Knöchelchen, und genau dort verläuft die Sehne, die den großen Zeh beugt. Viel Bergab- oder Vorfußlaufen kann das reizen, und Achillessehnenschmerzen, die mit Wadentraining nicht besser werden, stellen sich manchmal als dieses Problem heraus. Die Evidenz ist dünn, meist Fallserien, aber angepasste Belastung und Kraft für Wade und Zehen im mittleren Bewegungsbereich stehen meist am Anfang. Lass es physiotherapeutisch oder sportärztlich untersuchen, wenn es mit einem Verdrehen begonnen hat, der große Zeh hakt oder es nach etwa 6–8 Wochen nicht besser ist.",
      load: "Lauf innerhalb der Schmerzregel auf flachem Untergrund weiter und lass Bergabläufe, Vorfußlaufen und Spikes vorerst weg. Bergab mit kurzen, schnellen Schritten laufen, statt mit den Zehen nach vorn zu greifen.",
      avoid:
        "Lass vollen Zehenstand und kräftiges Fußstrecken weg: Wadenheben vorerst nur bis etwa zur halben Höhe.",
    },
    local: ["calf-hold", "toe-press", "heavy-calf-raise"],
    linkExercises: {
      calf: [],
    },
    chain: [
      [
        "calf",
        2,
        {
          en: "Strong calves control the push-off and the landing, so the foot is less likely to snap into the pinched position. The calf work in your plan already trains them in mid-range. If rising to full height pinches during the self-test, stop the count there.",
          de: "Kräftige Waden kontrollieren Abdruck und Landung, sodass der Fuß seltener in die eingeklemmte Position schnellt. Das Wadentraining in deinem Plan trainiert sie bereits im mittleren Bereich. Klemmt es beim Selbsttest ganz oben, hör dort mit dem Zählen auf.",
        },
      ],
      ["foot", 1],
      [
        "stride",
        1,
        {
          en: "Long strides downhill make the foot reach and point at every landing. Shorter, quicker steps can take some of the pinch out.",
          de: "Lange Schritte bergab lassen den Fuß bei jeder Landung nach vorn greifen und sich strecken. Kürzere, schnellere Schritte können die Einklemmung etwas entschärfen.",
        },
      ],
    ],
    exits: [
      {
        to: "calcaneal-bsi-refer",
        en: "Does squeezing both sides of the heel bone hurt, or does the pain build the longer you run?",
        de: "Schmerzt das Fersenbein, wenn du es seitlich zusammendrückst, oder wird der Schmerz beim Laufen immer stärker?",
      },
      {
        to: "ankle-bsi-refer",
        en: "Is it a deep, bony ache in the inner ankle bone or inside the ankle that builds when you run or hop?",
        de: "Ist es ein tiefer Knochenschmerz im Innenknöchel oder im Sprunggelenk, der beim Laufen oder Hüpfen zunimmt?",
      },
      {
        to: "tarsal-tunnel-refer",
        en: "Do you feel burning, tingling or numbness behind the inner ankle bone or in the sole?",
        de: "Spürst du Brennen, Kribbeln oder Taubheit hinter dem Innenknöchel oder in der Fußsohle?",
      },
    ],
    sources: ["ribbans2015", "sharpe2020", "lavery2016"],
  },
  {
    id: "anterior-impingement",
    kind: "plan",
    en: {
      title:
        "Pinch at the front of the ankle when your knee goes over your toes",
      desc: "A blocked, pinching pain right at the front of the ankle joint when the shin tips far forward: uphill, on stairs, at the bottom of a lunge or in a deep squat. It comes with that position rather than building through a run, and loosening your laces doesn't change it. It often follows old sprains.",
      name: "Anterior ankle impingement (footballer's ankle)",
      about:
        "When your shin tips far forward over your foot, small bone spurs or thickened soft tissue at the front of the ankle can get pinched between the shinbone and the talus, the bone that sits in the ankle joint. It often follows old sprains or years of repeated deep ankle bending. Research on non-surgical care is thin, but it usually starts with avoiding the pinching position for a while and adjusting shoes and exercises. If that hasn't helped after about 6–8 weeks, or the ankle catches or locks, a sports doctor can discuss other options.",
      load: "Run on flat routes within the pain rule and drop steep hills and stair sessions for now. A shoe with a bit more heel-to-toe drop, or a small heel lift, can reduce how far the ankle bends with each step.",
      avoid:
        "Stop the knee-to-wall test or drill if it pinches at the front of the ankle, and skip deep squats, deep lunges and lowering your heel below a step.",
    },
    de: {
      title:
        "Einklemmen vorn am Sprunggelenk, wenn das Knie über die Zehen geht",
      desc: "Ein blockierender, einklemmender Schmerz direkt vorn am Sprunggelenk, wenn das Schienbein weit nach vorn kippt: bergauf, auf Treppen, ganz unten im Ausfallschritt oder in der tiefen Hocke. Er kommt mit dieser Position und baut sich nicht im Lauf auf, und eine lockerere Schnürung ändert nichts daran. Oft nach früheren Bänderverletzungen.",
      name: "Vorderes Impingement des oberen Sprunggelenks (Footballer's Ankle)",
      about:
        "Kippt das Schienbein weit über den Fuß nach vorn, können kleine Knochenanbauten oder verdicktes Weichgewebe vorn im Sprunggelenk zwischen Schienbein und Sprungbein eingeklemmt werden. Das folgt oft auf frühere Bänderverletzungen oder jahrelanges, wiederholtes tiefes Beugen im Sprunggelenk. Zur Behandlung ohne Operation gibt es wenig Forschung, meist beginnt sie aber damit, die einklemmende Position eine Zeit lang zu meiden und Schuhe und Übungen anzupassen. Hilft das nach etwa 6–8 Wochen nicht oder hakt und blockiert das Sprunggelenk, kann eine Sportärztin oder ein Sportarzt weitere Möglichkeiten besprechen.",
      load: "Lauf innerhalb der Schmerzregel auf flachen Strecken und lass steile Anstiege und Treppentraining vorerst weg. Ein Schuh mit etwas mehr Sprengung oder eine kleine Fersenerhöhung kann verringern, wie weit sich das Sprunggelenk bei jedem Schritt beugt.",
      avoid:
        "Brich den Knie-zur-Wand-Test oder die Übung ab, wenn es vorn am Sprunggelenk einklemmt, und lass tiefe Kniebeugen, tiefe Ausfallschritte und das Absenken der Ferse unter Stufenniveau weg.",
    },
    local: ["heavy-calf-raise", "balance-reach"],
    linkExercises: {
      calf: [],
      ankle: ["bent-knee-raise"],
    },
    chain: [
      [
        "calf",
        2,
        {
          en: "Strong calves can help control how far your shin tips forward on each landing. The heavy calf raises in your plan already train them, on flat floor so the ankle doesn't bend too far.",
          de: "Kräftige Waden können helfen, bei jeder Landung zu kontrollieren, wie weit das Schienbein nach vorn kippt. Das schwere Wadenheben in deinem Plan trainiert sie bereits, auf flachem Boden, damit sich das Sprunggelenk nicht zu weit beugt.",
        },
      ],
      ["foot", 1],
      [
        "ankle",
        1,
        {
          en: "Old sprains often leave the ankle stiff. The usual knee-to-wall drill pushes straight into the pinch, so this plan adds bent-knee calf raises instead. Stop the test if it pinches at the front.",
          de: "Frühere Bänderverletzungen hinterlassen oft ein steifes Sprunggelenk. Die übliche Knie-zur-Wand-Übung drückt aber genau in die Einklemmung, deshalb gibt es hier stattdessen Wadenheben mit gebeugtem Knie. Brich den Test ab, wenn es vorn einklemmt.",
        },
      ],
    ],
    exits: [
      {
        to: "ankle-bsi-refer",
        en: "Is it a deep ache that builds through each run and lingers afterwards, rather than a pinch in one position?",
        de: "Ist es ein tiefer Schmerz, der in jedem Lauf zunimmt und danach anhält, statt in einer Position einzuklemmen?",
      },
    ],
    sources: ["vaseenon2012", "lavery2016", "silbernagel2007"],
  },
  {
    id: "sinus-tarsi",
    kind: "plan",
    en: {
      title: "Ache in the soft hollow just in front of the outer ankle bone",
      desc: "Pressing into the hollow in front of the outer ankle bone hurts, while the tendons behind the bone are fine. It's worse on uneven ground, trails and cambered roads, and the ankle can feel a little unsteady, but the ache is the main problem rather than repeated giving way. It often lingers after a sprain that otherwise healed.",
      name: "Sinus tarsi syndrome",
      about:
        "The sinus tarsi is a small channel between two foot bones, filled with ligaments and fat, and it can stay irritated after a sprain or when the ankle is a bit unstable. Its exact cause is debated and there are no good treatment trials, so this plan borrows what helps unstable ankles: balance and strength training plus firm, stable shoes. If it hasn't improved after about 6–8 weeks, have a physio or sports doctor check it.",
      load: "Run on flat, even ground like roads or a track, and don't always run on the same side of a cambered road. Bring trails back in short, easy sections once flat runs stay within the pain rule.",
    },
    de: {
      title: "Schmerz in der weichen Mulde direkt vor dem Außenknöchel",
      desc: "Druck in die Mulde vor dem Außenknöchel tut weh, die Sehnen hinter dem Knöchel dagegen nicht. Schlimmer auf unebenem Boden, Trails und Straßen mit seitlichem Gefälle, und das Sprunggelenk kann sich etwas unsicher anfühlen, im Vordergrund steht aber der Schmerz, nicht wiederholtes Wegknicken. Oft bleibt es nach einem Umknicken zurück, das sonst gut verheilt ist.",
      name: "Sinus-tarsi-Syndrom",
      about:
        "Der Sinus tarsi ist ein kleiner Kanal zwischen zwei Fußknochen, gefüllt mit Bändern und Fett. Er kann nach dem Umknicken oder bei einem etwas instabilen Sprunggelenk gereizt bleiben. Die genaue Ursache ist umstritten und gute Therapiestudien fehlen, deshalb nutzt dieser Plan, was bei instabilen Sprunggelenken hilft: Gleichgewichts- und Krafttraining und feste, stabile Schuhe. Ist es nach etwa 6–8 Wochen nicht besser, lass es physiotherapeutisch oder sportärztlich untersuchen.",
      load: "Lauf auf flachem, ebenem Untergrund wie Asphalt oder der Bahn und nicht immer auf derselben Straßenseite mit Gefälle. Trails in kurzen, lockeren Abschnitten zurückholen, sobald flache Läufe innerhalb der Schmerzregel bleiben.",
    },
    local: ["eversion-hold", "band-eversion", "balance-reach", "hop-stick"],
    later: ["hop-stick"],
    chain: [
      [
        "foot",
        2,
        {
          en: "Sinus tarsi pain often goes with an ankle that tips a little on landing. Better balance reflexes help the foot land steady on uneven ground.",
          de: "Schmerzen im Sinus tarsi gehen oft mit einem Sprunggelenk einher, das bei der Landung leicht wegkippt. Bessere Gleichgewichtsreflexe helfen dem Fuß, auf unebenem Boden stabil aufzusetzen.",
        },
      ],
      ["calf", 1],
      ["hipabd", 1],
    ],
    exits: [
      {
        to: "ankle-fracture-refer",
        en: "Did you just roll it, and can't you take 4 steps or does the tip of an ankle bone hurt to press?",
        de: "Bist du gerade umgeknickt und kannst keine 4 Schritte gehen, oder tut eine Knöchelspitze auf Druck weh?",
      },
      {
        to: "jones-bsi-refer",
        en: "Does one spot on the bone halfway along the outer edge of your foot hurt to press, and does hopping hurt?",
        de: "Schmerzt eine Stelle am Knochen in der Mitte des Fußaußenrands auf Druck, und tut Hüpfen weh?",
      },
    ],
    sources: ["arshad2021", "martin2021", "kosik2017"],
  },
  {
    id: "ankle-bsi-refer",
    kind: "refer",
    urgency: "soon",
    en: {
      title:
        "Deep bony ache at the inner or front ankle that builds with running",
      desc: "A deep ache in the inner ankle bone itself or deep inside the ankle joint, rather than in the tendons around it or a pinch in one position. It builds with running and hopping, can linger when you walk, and the ankle can swell a little. It often follows a jump in training.",
      name: "Medial malleolus or talus bone stress injury (stress fracture)",
      about:
        "This pattern can mean a bone stress injury in the inner ankle bone, which is the lower end of the shinbone, or in the talus, the bone inside the ankle joint. Both are uncommon, but they count as higher-risk sites because they can heal slowly or become a full break if you keep running, so they need a doctor's check within days. X-rays often look normal early on, so an MRI may be needed.",
      meanwhile:
        "Stop running and avoid hopping and jumping until a doctor has seen you. Walk only as much as you need to. If walking hurts or makes you limp, keep weight off the foot and see a doctor within a day or two. Cycling or swimming are fine if they're completely pain-free. Tell the doctor about any recent jump in training, earlier stress injuries, eating too little or missed periods.",
    },
    de: {
      title:
        "Tiefer Knochenschmerz innen oder vorn am Sprunggelenk beim Laufen",
      desc: "Ein tiefer Schmerz im Innenknöchel selbst oder tief im Sprunggelenk, nicht in den Sehnen drumherum und nicht als Einklemmen in einer bestimmten Position. Er nimmt beim Laufen und Hüpfen zu, kann beim Gehen bleiben, und das Sprunggelenk kann leicht anschwellen. Folgt oft auf eine Trainingssteigerung.",
      name: "Knochenstressverletzung am Innenknöchel oder Sprungbein (Ermüdungsbruch)",
      about:
        "Dieses Muster kann auf eine Knochenstressverletzung am Innenknöchel, dem unteren Ende des Schienbeins, oder am Sprungbein hindeuten, dem Knochen im Sprunggelenk. Beides ist selten, gilt aber als Stelle mit höherem Risiko, weil es langsam heilen oder bei weiterem Laufen zu einem vollständigen Bruch werden kann. Deshalb sollte es innerhalb weniger Tage ärztlich untersucht werden. Im Röntgenbild sieht man anfangs oft nichts, dann kann ein MRT nötig sein.",
      meanwhile:
        "Hör mit dem Laufen auf und verzichte auf Hüpfen und Springen, bis du ärztlich untersucht wurdest. Geh nur so viel wie nötig. Tut Gehen weh oder hinkst du, belaste den Fuß möglichst nicht und lass dich innerhalb von ein bis zwei Tagen ärztlich untersuchen. Radfahren oder Schwimmen sind in Ordnung, wenn sie völlig schmerzfrei sind. Erzähl in der Praxis von kürzlichen Trainingssteigerungen, früheren Stressverletzungen, zu knapper Ernährung oder ausbleibender Periode.",
    },
    exits: [
      {
        to: "ankle-fracture-refer",
        en: "Did it start with a twist or fall, and couldn't you take 4 steps right after it?",
        de: "Hat es mit einem Umknicken oder Sturz begonnen, und konntest du danach keine 4 Schritte gehen?",
      },
    ],
    warn: ["fuel"],
    rtr: "bone",
    sources: ["warden2014", "hoenig2022", "hoenig2023", "mountjoy2023"],
  },
  {
    id: "tarsal-tunnel-refer",
    kind: "refer",
    urgency: "routine",
    en: {
      title: "Burning or tingling behind the inner ankle bone or in the sole",
      desc: "Burning, tingling, pins and needles or numbness behind the inner ankle bone that can spread into the sole or toes, or a burning spot on the inner side of the heel. Often worse after long runs or standing, and sometimes at night. Unlike plantar fasciitis, the first steps in the morning aren't usually the worst.",
      name: "Tarsal tunnel syndrome or Baxter's nerve entrapment",
      about:
        "Nerves run behind the inner ankle bone into the sole, and they can get squeezed there or at the inner heel. Nerve pain under the foot is easy to mistake for plantar fasciitis, and there's little good evidence on how best to treat it, so it's worth having a physio or sports doctor examine it. Treatment usually starts with changes to load, shoes and exercise once the cause is clear.",
      meanwhile:
        "Book a sports physio or sports doctor within the next 1–3 weeks. Until then, keep runs shorter and easy on flat ground, stop a run if the tingling or numbness builds, and make sure your shoes and laces don't press on the inner ankle. See a doctor sooner if the numbness spreads, your foot or toes get weak, both feet are affected, or you have diabetes.",
    },
    de: {
      title:
        "Brennen oder Kribbeln hinter dem Innenknöchel oder in der Fußsohle",
      desc: "Brennen, Kribbeln, Ameisenlaufen oder Taubheit hinter dem Innenknöchel, die bis in Fußsohle oder Zehen ziehen können, oder eine brennende Stelle innen an der Ferse. Oft schlimmer nach langen Läufen oder langem Stehen, manchmal auch nachts. Anders als bei der Plantarfasziitis sind die ersten Schritte am Morgen meist nicht am schlimmsten.",
      name: "Tarsaltunnelsyndrom oder Baxter-Neuropathie (Nerveneinengung an der Ferse)",
      about:
        "Hinter dem Innenknöchel ziehen Nerven in die Fußsohle, die dort oder innen an der Ferse eingeengt werden können. Nervenschmerzen unter dem Fuß werden leicht mit einer Plantarfasziitis verwechselt, und gute Studien zur besten Behandlung gibt es kaum. Deshalb lohnt sich eine Untersuchung in der Physiotherapie oder sportärztlichen Praxis. Behandelt wird meist zuerst mit angepasster Belastung, passenden Schuhen und Übungen, sobald die Ursache klar ist.",
      meanwhile:
        "Vereinbare in den nächsten 1–3 Wochen einen Termin in der Sportphysiotherapie oder sportärztlichen Praxis. Bis dahin kürzer und locker auf flachem Untergrund laufen, einen Lauf abbrechen, wenn Kribbeln oder Taubheit zunehmen, und darauf achten, dass Schuhe und Schnürung nicht auf den Innenknöchel drücken. Geh früher zum Arzt oder zur Ärztin, wenn sich die Taubheit ausbreitet, Fuß oder Zehen schwächer werden, beide Füße betroffen sind oder du Diabetes hast.",
    },
    exits: [
      {
        to: "sciatica-refer",
        en: "Does it come with low back pain, or run down the back of your leg from the buttock?",
        de: "Kommt es zusammen mit Rückenschmerzen, oder zieht es vom Gesäß hinten am Bein herunter?",
      },
    ],
    sources: ["mcsweeney2015", "koc2023"],
  },
];
