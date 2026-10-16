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
        "The middle of your Achilles tendon has been loaded faster than it could adapt, often after a sudden increase in distance, speed or hills. Calf strength work that gets gradually heavier over 12 weeks or more usually helps, and you can often keep running within the pain rule meanwhile. Rest alone rarely fixes it.",
      load: "Keep running on flat ground within the pain rule, and leave out sprints, hills and jumping drills until the pogo hops in your plan feel easy. If the tendon is stiffer or sorer the next morning, cut your next runs back by about a third.",
    },
    de: {
      title:
        "Steife, schmerzende Achillessehne einige Zentimeter über der Ferse",
      desc: "Morgens bei den ersten Schritten und zu Beginn des Laufs steif und schmerzhaft, warm gelaufen oft besser. Die Sehne kann sich 2–6 cm über der Ferse verdickt oder druckempfindlich anfühlen.",
      name: "Achillessehnen-Tendinopathie im mittleren Abschnitt (Midportion)",
      about:
        "Der mittlere Teil deiner Achillessehne wurde schneller belastet, als er sich anpassen konnte, oft nach einer plötzlichen Steigerung von Umfang, Tempo oder Höhenmetern. Wadentraining, das über 12 Wochen oder länger schrittweise schwerer wird, hilft meist, und oft kannst du dabei innerhalb der Schmerzregel weiterlaufen. Ruhe allein hilft selten.",
      load: "Lauf innerhalb der Schmerzregel auf flachem Untergrund weiter und lass Sprints, Hügel und Sprungübungen weg, bis sich die Pogo-Sprünge aus deinem Plan leicht anfühlen. Ist die Sehne am nächsten Morgen steifer oder empfindlicher, kürze die nächsten Läufe um etwa ein Drittel.",
    },
    local: ["calf-hold", "heavy-calf-raise", "pogo-hop"],
    chain: [
      [
        "calf",
        3,
        {
          en: "Your calf and Achilles work together as one spring. If the calf, especially the deep soleus, tires early in a run, the tendon copes less well with the load. Lower calf strength is one of the few risk factors with some evidence behind it.",
          de: "Wade und Achillessehne arbeiten zusammen wie eine Feder. Ermüdet die Wade, vor allem der tiefe Wadenmuskel (Soleus), früh im Lauf, verkraftet die Sehne die Last schlechter. Geringere Wadenkraft gehört zu den wenigen Risikofaktoren, für die es zumindest etwas Evidenz gibt.",
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
    ],
    sources: [
      "chimenti2024",
      "beyer2015",
      "silbernagel2007",
      "vandervlist2019",
      "franettovichsmith2014",
    ],
    later: ["pogo-hop"],
    linkExercises: {
      calf: [],
    },
  },
  {
    id: "achilles-insertional",
    kind: "plan",
    en: {
      title: "Sore spot right where the Achilles meets the heel bone",
      desc: "Worse running uphill, on stairs, after calf stretches and when a stiff shoe heel presses on it. There can be a tender bump at the back of the heel, and your first steps in the morning are often stiff.",
      name: "Insertional Achilles tendinopathy",
      about:
        "The tendon is irritated where it attaches to the heel bone, and it gets squeezed against the bone when your ankle bends up a lot, as on hills or in a deep calf stretch. Calf strength work often helps if you avoid that squeeze early on: do calf raises on flat floor, and don't drop your heel below a step or stretch the calf hard. It usually takes a few months, so be patient.",
      load: "Run on flat routes within the pain rule and skip hill and stair sessions for now. A shoe with a bit more heel drop and a heel collar that doesn't press on the sore spot can ease it.",
    },
    de: {
      title:
        "Schmerzhafte Stelle genau am Übergang der Achillessehne ins Fersenbein",
      desc: "Schlimmer beim Bergauflaufen, auf Treppen, nach dem Wadendehnen und wenn eine harte Fersenkappe drückt. Hinten an der Ferse kann eine druckempfindliche Verdickung zu tasten sein, und die ersten Schritte am Morgen sind oft steif.",
      name: "Insertionale Achillessehnen-Tendinopathie (Ansatztendinopathie)",
      about:
        "Die Sehne ist an ihrem Ansatz am Fersenbein gereizt und wird dort gegen den Knochen gedrückt, wenn du den Fuß stark anziehst, etwa bergauf oder bei einer tiefen Wadendehnung. Krafttraining für die Wade hilft oft, wenn du diesen Druck anfangs vermeidest: Wadenheben nur auf flachem Boden, die Ferse nicht unter Stufenniveau absenken und die Wade nicht kräftig dehnen. Das dauert meist einige Monate, also bleib geduldig.",
      load: "Lauf innerhalb der Schmerzregel auf flachen Strecken und lass Berg- und Treppenläufe vorerst weg. Ein Schuh mit etwas mehr Sprengung und einer Fersenkappe, die nicht auf die empfindliche Stelle drückt, kann sie entlasten.",
    },
    local: ["calf-hold", "heavy-calf-raise", "pogo-hop"],
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
    sources: [
      "chimenti2017",
      "jonsson2008",
      "silbernagel2020",
      "franettovichsmith2014",
    ],
    later: ["pogo-hop"],
  },
  {
    id: "plantar-heel",
    kind: "plan",
    en: {
      title: "Sharp pain under the heel on your first steps",
      desc: "Worst on the first steps in the morning or after sitting, easing as you get moving and coming back after long days on your feet. The tender spot is usually on the inner underside of the heel, where it meets the arch.",
      name: "Plantar fasciopathy (plantar fasciitis)",
      about:
        "The thick band under your foot is overloaded where it attaches to the heel and is slow to recover. Stretching, slow heavy strength work for the calf and arch, and sensible running load usually help, though it often takes a few months. If squeezing the sides of your heel bone hurts, or the pain builds the longer you run instead of easing, stop running and get it checked, as that can point to a bone stress injury.",
      load: "Keep running on softer, flat surfaces within the pain rule, and cut back distance if your first steps the next morning are worse. During the day, avoid going barefoot on hard floors and wear cushioned, supportive shoes.",
    },
    de: {
      title: "Stechender Schmerz unter der Ferse bei den ersten Schritten",
      desc: "Am schlimmsten bei den ersten Schritten morgens oder nach dem Sitzen, wird beim Gehen besser und kommt nach langen Tagen auf den Beinen zurück. Die empfindliche Stelle liegt meist innen an der Unterseite der Ferse, wo sie ins Gewölbe übergeht.",
      name: "Plantarfasziopathie (Plantarfasziitis)",
      about:
        "Die kräftige Sehnenplatte unter deinem Fuß ist an ihrem Ansatz an der Ferse überlastet und erholt sich nur langsam. Dehnen, langsames, schweres Krafttraining für Wade und Fußgewölbe und eine angepasste Laufbelastung helfen meist, auch wenn es oft einige Monate dauert. Tut es weh, wenn du das Fersenbein von beiden Seiten zusammendrückst, oder wird der Schmerz beim Laufen immer stärker statt besser, hör mit dem Laufen auf und lass es abklären, denn das kann auf eine Knochenstressverletzung hindeuten.",
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
        "The tendon that helps hold up your arch runs behind the inner ankle bone and is overloaded. It often settles with steady strength work for this tendon, the calf and the foot, though that can take a few months. See a physio before you keep training if your arch is visibly collapsing, you can no longer do a single-leg heel raise on that side, or a bony spot on top of the foot, a little in front of the inner ankle, hurts to press.",
      load: "Run shorter on flat, even ground within the pain rule, and skip trails, cambered roads and speed work for now. A stable, supportive shoe can ease the load on the tendon.",
    },
    de: {
      title: "Dumpfer Schmerz hinter und unter dem Innenknöchel",
      desc: "Schlimmer bei längeren Läufen, auf unebenem Boden und im Zehenstand auf diesem Bein, und er kann bis ins innere Fußgewölbe ziehen. Innen am Knöchel kann es geschwollen aussehen, und das Gewölbe ist manchmal flacher als auf der anderen Seite.",
      name: "Tibialis-posterior-Tendinopathie",
      about:
        "Die Sehne, die dein Fußgewölbe mitträgt, verläuft hinter dem Innenknöchel und ist überlastet. Mit regelmäßigem Krafttraining für diese Sehne, die Wade und den Fuß bessert sie sich oft, das kann aber einige Monate dauern. Lass es in der Physiotherapie untersuchen, bevor du weitertrainierst, wenn dein Gewölbe sichtbar einsinkt, du auf dieser Seite kein einbeiniges Wadenheben mehr schaffst oder eine knöcherne Stelle oben auf dem Fuß, etwas vor dem Innenknöchel, auf Druck schmerzt.",
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
    sources: ["ross2018", "kulig2009", "ross2021", "kulig2011"],
  },
  {
    id: "ankle-instability",
    kind: "plan",
    en: {
      title: "Unsteady ankle that rolls or gives way on uneven ground",
      desc: "Usually began after one or more sprains. Trails, kerbs and quick turns feel risky, and the front and outside of the ankle can ache after runs.",
      name: "Chronic ankle instability (CAI)",
      about:
        "After a sprain, the outer ligaments can stay a little loose, and the ankle's balance reflexes and outer muscles often don't fully recover, so it can keep rolling. Balance and strength training that gets gradually harder often makes the ankle feel steadier within 4–6 weeks and lowers the risk of the next sprain. If you've just sprained it and can't take four steps, or the bone at the ankle is tender to press, get it checked first.",
      load: "Keep running on even, firm ground like roads or a track while you train balance. Bring trails back gradually with short, easy sections, and skip them on days the ankle feels shaky.",
    },
    de: {
      title: "Unsicheres Sprunggelenk, das auf unebenem Boden wegknickt",
      desc: "Begann meist, nachdem du ein- oder mehrmals umgeknickt bist. Trails, Bordsteinkanten und schnelle Richtungswechsel fühlen sich riskant an, und vorn und außen am Knöchel kann es nach dem Laufen schmerzen.",
      name: "Chronische Sprunggelenkinstabilität (CAI)",
      about:
        "Nach dem Umknicken bleiben die Außenbänder oft etwas locker, und Gleichgewichtsreflexe und seitliche Unterschenkelmuskeln erholen sich häufig nicht ganz, sodass der Fuß leichter wieder umknickt. Gleichgewichts- und Krafttraining, das schrittweise schwieriger wird, macht das Sprunggelenk oft in 4–6 Wochen spürbar stabiler und senkt das Risiko für die nächste Verletzung. Bist du gerade erst umgeknickt und kannst keine vier Schritte gehen, oder ist der Knochen am Knöchel druckempfindlich, lass das zuerst abklären.",
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
        "The two tendons behind your outer ankle bone steady the foot against rolling over, and they've had more load than they could adapt to, often after an old sprain. Slow, gradually heavier strengthening often settles them over 2–3 months. Have a physio check it if a tendon clicks or slips over the bone. If one spot on the bone hurts to press, halfway along the outer edge of your foot or a few centimetres above the outer ankle bone, or hopping hurts, stop running and get it seen soon, as it can be a stress injury.",
      load: "Run on flat, even ground, and don't always run on the same side of a cambered road. Skip trails and tight turns until flat runs stay within the pain rule, then bring them back gradually.",
    },
    de: {
      title:
        "Ziehen hinter und unter dem Außenknöchel, schlimmer auf schrägen Wegen",
      desc: "Nimmt auf Straßen mit seitlichem Gefälle, auf Trails und in engen Kurven zu. Die Sehnen direkt hinter dem Knochen sind druckempfindlich, und den Fußaußenrand gegen Widerstand nach außen zu drücken löst den Schmerz aus.",
      name: "Peronealsehnen-Tendinopathie",
      about:
        "Die beiden Sehnen hinter deinem Außenknöchel sichern den Fuß gegen das Umknicken und haben mehr Last bekommen, als sie verkraften konnten, häufig nach einer alten Bänderverletzung. Langsames, schrittweise schwereres Krafttraining bringt sie oft in 2–3 Monaten zur Ruhe. Springt oder rutscht eine Sehne über den Knochen, lass das physiotherapeutisch abklären. Ist eine Stelle am Knochen druckempfindlich, etwa in der Mitte des Fußaußenrands oder einige Zentimeter über dem Außenknöchel, oder tut Hüpfen weh, hör mit dem Laufen auf und lass es bald untersuchen, denn das kann eine Stressverletzung sein.",
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
    sources: ["davda2017", "deu2022", "heckman2009", "silbernagel2007"],
  },
  {
    id: "metatarsalgia",
    kind: "plan",
    en: {
      title: "Burning or bruised feeling under the ball of the foot",
      desc: "Worse at faster paces, on hard ground and in thin or worn-out shoes, and often eases soon after you stop. It spreads under the ball of the foot rather than sitting in one tender spot on top of a bone.",
      name: "Metatarsalgia (forefoot overload)",
      about:
        "The fat pads and joints under the ball of your foot are taking more pressure than they can handle right now, often from speed work, thinner shoes or tight calves. It usually settles with more cushioning, a little less speed for a few weeks, calf stretching and stronger feet. Tingling or numbness between the toes points to an irritated nerve instead, which a physio should check.",
      load: "Run easy in cushioned shoes with a roomy toe box, ideally on softer, flat ground. Drop sprints, hard uphill efforts and minimal shoes until easy runs stay within the pain rule.",
    },
    de: {
      title: "Brennen oder Prellungsgefühl unter dem Fußballen",
      desc: "Schlimmer bei schnellem Tempo, auf hartem Boden und in dünnen oder abgelaufenen Schuhen, lässt nach dem Stoppen oft bald nach. Der Schmerz verteilt sich unter dem Fußballen und sitzt nicht an einer druckempfindlichen Stelle oben auf einem Knochen.",
      name: "Metatarsalgie (Vorfußüberlastung)",
      about:
        "Die Fettpolster und Gelenke unter deinem Fußballen bekommen gerade mehr Druck, als sie vertragen, oft durch Tempotraining, dünnere Schuhe oder verkürzte Waden. Meist helfen mehr Dämpfung, für ein paar Wochen etwas weniger Tempo, Wadendehnung und kräftigere Füße. Kribbeln oder Taubheit zwischen den Zehen deutet eher auf einen gereizten Nerv hin, das sollte physiotherapeutisch abgeklärt werden.",
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
    sources: ["hagen2010", "millar2021", "silbernagel2007"],
  },
];
