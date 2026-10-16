// thigh causes. Schema: see README "Content model".
export default [
  {
    id: "quad-strain",
    kind: "plan",
    en: {
      title:
        "Sudden twinge at the front of the thigh during sprints or strides",
      desc: "Started during a fast effort like strides or a sprint. Stretching the front of the thigh or straightening the knee against resistance hurts, and there's often a tender spot in the muscle.",
      name: "Quadriceps strain, usually of the rectus femoris (pulled quad)",
      about:
        "Some fibres in a front thigh muscle have been overstretched or overloaded at speed, most often in the rectus femoris, which crosses both the hip and the knee. Mild strains often settle within a few weeks, and starting gentle loading after a couple of days tends to get you back sooner than waiting a week or more. If you felt a pop, can feel a dent, see a large bruise or can't walk normally, get it checked before you train.",
      load: "Once brisk walking is pain-free, keep runs short, easy and flat within the pain rule, and drop sprints, strides and hills for now. Skip hard stretches of the front of the thigh for the first 1–2 weeks, and bring relaxed strides back only once easy runs and the exercises are pain-free.",
    },
    de: {
      title:
        "Plötzlicher Stich vorn im Oberschenkel bei Sprints oder Steigerungen",
      desc: "Begann bei einer schnellen Einheit, etwa bei Steigerungsläufen oder einem Sprint. Dehnen der Oberschenkelvorderseite oder Strecken des Knies gegen Widerstand tut weh, und im Muskel gibt es oft eine druckempfindliche Stelle.",
      name: "Zerrung des Quadrizeps, meist des Rectus femoris (Zerrung vorn am Oberschenkel)",
      about:
        "Einige Fasern eines vorderen Oberschenkelmuskels wurden bei hohem Tempo überdehnt oder überlastet, meist im Rectus femoris, der über Hüfte und Knie zieht. Leichte Zerrungen beruhigen sich oft innerhalb weniger Wochen, und beginnst du nach ein paar Tagen mit sanfter Belastung, bist du meist schneller zurück als nach einer Woche oder mehr Schonung. Hast du einen Knall gespürt, tastest du eine Delle, siehst du einen großen Bluterguss oder kannst du nicht normal gehen, lass es abklären, bevor du trainierst.",
      load: "Sobald zügiges Gehen schmerzfrei ist, Läufe kurz, locker und flach halten, innerhalb der Schmerzregel, und Sprints, Steigerungen und Hügel vorerst weglassen. In den ersten 1–2 Wochen die Oberschenkelvorderseite nicht kräftig dehnen und Steigerungsläufe erst wieder einbauen, wenn lockere Läufe und die Übungen schmerzfrei gehen.",
    },
    local: ["wall-sit", "split-squat", "reverse-nordic"],
    chain: [
      [
        "hipflex",
        2,
        {
          en: "The rectus femoris also bends your hip, so stiff hip flexors pull it long under load at the back of every fast stride. Wait with this test and the stretch until straightening your knee against resistance no longer hurts, usually 1–2 weeks or more, then stretch only to a mild pull.",
          de: "Der Rectus femoris beugt auch die Hüfte. Sind die Hüftbeuger steif, wird er am Ende jedes schnellen Schritts unter Last in die Länge gezogen. Warte mit dem Test und der Dehnung, bis das Strecken des Knies gegen Widerstand nicht mehr wehtut, meist 1–2 Wochen oder länger, und dehne dann nur bis zu einem leichten Ziehen.",
        },
      ],
      ["trunk", 1],
    ],
    later: ["couch-stretch"],
    sources: ["mendiguchia2013", "bayer2017", "silbernagel2007"],
  },
  {
    id: "femur-bsi-refer",
    kind: "refer",
    urgency: "soon",
    en: {
      title: "Deep, vague ache in the thigh that builds with each run",
      desc: "Came on gradually, often after a jump in training. You can't find one sore spot in the muscle, it can ache after runs or at night, and hopping on that leg often hurts.",
      name: "Femoral shaft bone stress injury (stress fracture of the thigh bone)",
      about:
        "This pattern can mean a bone stress injury in the shaft of the thigh bone, where the bone has been loaded faster than it could rebuild. It's less risky than one at the hip, but it can get worse if you keep running, and X-rays often look normal early on, so an MRI is usually needed to see it. Caught early, most runners heal well with a few months of reduced load and a gradual return.",
      meanwhile:
        "Stop running and hopping until you've been seen. Walking, cycling and swimming are fine if they don't hurt. If walking hurts or makes you limp, or the pain moves into the groin, see a doctor today. If you can't put weight on the leg or the pain suddenly gets much worse, go to an emergency department now. Tell them about any recent jump in training, earlier stress injuries, eating too little or missed periods.",
    },
    de: {
      title:
        "Tiefer, diffuser Schmerz im Oberschenkel, der mit jedem Lauf zunimmt",
      desc: "Begann schleichend, oft nach einer Trainingssteigerung. Eine einzelne schmerzende Stelle im Muskel findest du nicht, nach dem Laufen oder nachts kann es wehtun, und Hüpfen auf dem Bein schmerzt oft.",
      name: "Knochenstressverletzung am Oberschenkelschaft (Ermüdungsbruch)",
      about:
        "Dieses Muster kann auf eine Knochenstressverletzung am Schaft des Oberschenkelknochens hindeuten: Der Knochen wurde schneller belastet, als er sich umbauen konnte. Sie ist weniger heikel als eine am Schenkelhals, kann sich beim Weiterlaufen aber verschlimmern. Das Röntgenbild ist anfangs oft unauffällig, meist braucht es ein MRT. Früh erkannt heilt sie bei den meisten Laufenden mit einigen Monaten weniger Belastung und einem schrittweisen Wiedereinstieg gut aus.",
      meanwhile:
        "Hör mit Laufen und Hüpfen auf, bis du untersucht wurdest. Gehen, Radfahren und Schwimmen sind in Ordnung, solange sie nicht wehtun. Tut Gehen weh, hinkst du oder wandert der Schmerz in die Leiste, lass dich noch heute ärztlich untersuchen. Kannst du das Bein gar nicht belasten oder wird der Schmerz plötzlich viel stärker, geh sofort in die Notaufnahme. Erzähl bei der Untersuchung von kürzlichen Trainingssteigerungen, früheren Stressverletzungen, zu knapper Ernährung oder ausbleibender Periode.",
    },
    sources: ["warden2014", "hoenig2022", "hoenig2023"],
  },
  {
    id: "adductor-strain",
    kind: "plan",
    en: {
      title: "Pulling pain high in the inner thigh with speed or quick turns",
      desc: "Hurts when you squeeze your knees together, speed up, change direction or run hills and trails. The muscle at the top of the inner thigh is often tender to press.",
      name: "Adductor-related groin pain (groin strain)",
      about:
        "The muscles that pull your legs together run from the pubic bone down the inner thigh, and speed work, hills, trails and quick turns can overload or mildly strain them. Strength work that builds from simple squeezes to the Copenhagen exercise often settles it and can lower the chance of it coming back. If it aches at night, hopping on that leg hurts or the pain sits deep in the groin, get it checked soon, as the pubic bone or the hip joint can cause similar pain.",
      load: "Keep easy runs on flat, even ground within the pain rule, and drop sprints, hills, trails and sharp turns for now. Bring speed back step by step once squeezing your knees together no longer hurts.",
    },
    de: {
      title:
        "Ziehen oben innen am Oberschenkel bei Tempo und Richtungswechseln",
      desc: "Tut weh, wenn du die Knie zusammendrückst, beschleunigst, die Richtung wechselst oder Hügel und Trails läufst. Der Muskel oben an der Oberschenkelinnenseite ist oft druckempfindlich.",
      name: "Adduktorenbedingter Leistenschmerz (Adduktorenzerrung)",
      about:
        "Die Muskeln, die deine Beine zusammenführen, ziehen vom Schambein an der Oberschenkelinnenseite nach unten. Tempotraining, Hügel, Trails und schnelle Richtungswechsel können sie überlasten oder leicht zerren. Krafttraining, das vom einfachen Zusammendrücken bis zur Copenhagen-Übung aufbaut, bringt es oft zur Ruhe und kann das Risiko senken, dass es wiederkommt. Schmerzt es nachts, tut Hüpfen auf dem Bein weh oder sitzt der Schmerz tief in der Leiste, lass es bald abklären, denn Schambein oder Hüftgelenk können ähnliche Schmerzen verursachen.",
      load: "Lockere Läufe auf flachem, ebenem Untergrund innerhalb der Schmerzregel laufen, Sprints, Hügel, Trails und scharfe Richtungswechsel vorerst weglassen. Das Tempo schrittweise zurückholen, sobald das Zusammendrücken der Knie nicht mehr wehtut.",
    },
    local: ["adductor-squeeze", "copenhagen-adduction"],
    chain: [
      [
        "trunk",
        2,
        {
          en: "Your lower abs and your adductors pull on the pubic bone from above and below. When your trunk can't steady the pelvis, the adductors take more of the strain on every push-off and turn.",
          de: "Untere Bauchmuskeln und Adduktoren ziehen von oben und unten am Schambein. Kann der Rumpf das Becken nicht stabil halten, fangen die Adduktoren bei jedem Abdruck und jeder Richtungsänderung mehr Zug ab.",
        },
      ],
      ["hipabd", 1],
    ],
    sources: ["weir2015", "tyler2014"],
  },
  {
    id: "tfl-overload",
    kind: "plan",
    en: {
      title: "Tight, achy band along the outer thigh after long runs",
      desc: "Builds up on long runs or cambered roads and feels tight or achy rather than sharp. It stays above the knee, and pressing along the outer thigh is often sore.",
      name: "Tensor fasciae latae and iliotibial band overload (tight IT band)",
      about:
        "The small muscle at the front of your outer hip (TFL) and the long band it pulls on are working overtime, often because the bigger side-hip muscles tire and let your thigh drift inward. Foam rolling may ease the tight feeling for a while but is unlikely to change the band itself, so side-hip strength work is usually the better use of your time. It often settles within a few weeks, but numbness, tingling or burning on the outer thigh points to an irritated nerve instead, so get that checked.",
      load: "Keep running within the pain rule, but shorten your long run for 1–2 weeks. Run on flat paths or switch sides on cambered roads, and go easy on long downhills.",
    },
    de: {
      title:
        "Spannung und dumpfer Schmerz außen am Oberschenkel nach langen Läufen",
      desc: "Baut sich bei langen Läufen oder auf Straßen mit seitlichem Gefälle auf und fühlt sich eher gespannt und dumpf als stechend an. Der Schmerz bleibt oberhalb des Knies, und Druck entlang der Oberschenkelaußenseite tut oft weh.",
      name: "Überlastung von Tensor fasciae latae und Tractus iliotibialis (verspanntes IT-Band)",
      about:
        "Der kleine Muskel vorn an der Hüftaußenseite (TFL) und das lange Band, an dem er zieht, sind im Dauereinsatz, oft weil die größeren seitlichen Hüftmuskeln ermüden und der Oberschenkel nach innen driftet. Faszienrollen kann das Spannungsgefühl kurz lindern, dürfte das Band selbst aber kaum verändern, deshalb nutzt du deine Zeit mit Kraftübungen für die seitliche Hüfte meist besser. Oft beruhigt es sich innerhalb weniger Wochen. Taubheit, Kribbeln oder Brennen außen am Oberschenkel sprechen eher für einen gereizten Nerv, das solltest du abklären lassen.",
      load: "Lauf innerhalb der Schmerzregel weiter, aber kürz den langen Lauf für 1–2 Wochen. Lauf auf flachen Wegen oder wechsle auf Straßen mit Gefälle die Seite, und lass es bei langen Bergabpassagen ruhig angehen.",
    },
    local: ["side-abduction", "banded-side-step"],
    chain: [
      [
        "hipabd",
        3,
        {
          en: "When the glute med tires, the smaller TFL has to work harder to keep your pelvis level, and the band it pulls on tightens along the outer thigh on every stride.",
          de: "Ermüdet der Gluteus medius, muss der kleinere TFL mehr arbeiten, um das Becken gerade zu halten. Das Band, an dem er zieht, spannt sich dann bei jedem Schritt an der Oberschenkelaußenseite stärker.",
        },
      ],
      [
        "stride",
        2,
        {
          en: "With long, slow strides your thigh drops further inward after you land, which pulls the band tighter. A slightly quicker step, about 5–10% more steps per minute, reduces that inward drop.",
          de: "Bei langen, langsamen Schritten sinkt der Oberschenkel nach der Landung weiter nach innen und spannt das Band stärker. Eine etwas höhere Schrittfrequenz, etwa 5–10 % mehr Schritte pro Minute, verringert das.",
        },
      ],
      ["trunk", 1],
    ],
    sources: ["fredericson2000", "heiderscheit2011", "nielsen2012"],
  },
  {
    id: "hamstring-strain",
    kind: "plan",
    en: {
      title: "Sudden twinge at the back of the thigh during faster running",
      desc: "Came on during strides, sprints or a fast finish, and you could still walk normally. Stretching the hamstring or bending the knee against resistance hurts, and there's often a tender spot in the muscle.",
      name: "Hamstring strain (pulled hamstring)",
      about:
        "Some fibres in your hamstrings were overloaded while braking your swinging leg at speed. It's one of the most common injuries in fast running, and after a mild strain you're often back to full speed within a few weeks. Lengthening exercises and a gradual return to speed can get you back sooner, and adding trunk work may lower the chance of it coming back.",
      load: "Run easy and flat once brisk walking is pain-free, within the pain rule, and skip hard hamstring stretches for the first 1–2 weeks. Bring speed back in steps, from relaxed strides at about 60–70% up to full speed over 1–3 weeks, and only go faster when the last pace still felt fine the next morning.",
    },
    de: {
      title: "Plötzlicher Stich hinten am Oberschenkel bei schnellerem Laufen",
      desc: "Begann bei Steigerungsläufen, Sprints oder einem schnellen Endspurt, und du konntest danach noch normal gehen. Dehnen der hinteren Oberschenkel oder Beugen des Knies gegen Widerstand tut weh, und im Muskel gibt es oft eine druckempfindliche Stelle.",
      name: "Zerrung der hinteren Oberschenkelmuskulatur (Hamstring-Zerrung)",
      about:
        "Einige Fasern deiner hinteren Oberschenkelmuskeln wurden überlastet, als sie das schwingende Bein bei hohem Tempo abgebremst haben. Das ist eine der häufigsten Verletzungen bei schnellem Laufen, und nach einer leichten Zerrung bist du oft nach einigen Wochen wieder voll im Tempo. Übungen, die den Muskel in verlängerter Position kräftigen, und ein schrittweiser Weg zurück zum Tempo können die Rückkehr beschleunigen. Zusätzliches Rumpftraining kann das Risiko eines Rückfalls senken.",
      load: "Locker und flach laufen, sobald zügiges Gehen schmerzfrei ist, innerhalb der Schmerzregel, und die hinteren Oberschenkel in den ersten 1–2 Wochen nicht kräftig dehnen. Das Tempo stufenweise zurückholen, von lockeren Steigerungen mit etwa 60–70 % bis zum vollen Tempo über 1–3 Wochen, und erst schneller werden, wenn sich das letzte Tempo auch am nächsten Morgen gut angefühlt hat.",
    },
    local: ["hamstring-extender", "single-leg-rdl", "hamstring-glider"],
    chain: [
      [
        "trunk",
        3,
        {
          en: "Your hamstrings are anchored to your pelvis. If it tips and wobbles at speed, they're pulled longer while they brake the leg. In one small trial, adding trunk stability and agility work to rehab led to fewer repeat strains.",
          de: "Die hinteren Oberschenkelmuskeln setzen oben am Becken an. Kippt und wackelt es bei hohem Tempo, werden sie beim Abbremsen des Beins stärker in die Länge gezogen. In einer kleinen Studie gab es weniger Rückfälle, wenn die Reha zusätzlich Rumpf- und Koordinationsübungen enthielt.",
        },
      ],
      [
        "glutes",
        2,
        {
          en: "Your glutes and hamstrings share the job of driving your hip back, so weak glutes leave the hamstrings more of every push-off. Wait to do this test until brisk walking is pain-free, and stop if the hamstring hurts or cramps.",
          de: "Gesäß und hintere Oberschenkel teilen sich die Arbeit, die Hüfte zu strecken. Sind die Gesäßmuskeln schwach, übernehmen die hinteren Oberschenkel mehr von jedem Abdruck. Mach den Test erst, wenn zügiges Gehen schmerzfrei ist, und hör auf, wenn der hintere Oberschenkel wehtut oder krampft.",
        },
      ],
    ],
    sources: [
      "martin2022",
      "askling2014",
      "askling2013",
      "sherry2004",
      "hickey2020",
    ],
  },
];
