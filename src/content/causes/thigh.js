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
    local: ["wall-sit", "split-squat", "reverse-nordic", "a-skips"],
    chain: [
      [
        "hipflex",
        2,
        {
          en: "The rectus femoris also bends your hip, so stiff hip flexors pull it long under load at the back of every fast stride. Hold off on this test and the stretch until straightening your knee against resistance no longer hurts, usually 1–2 weeks or more, then stretch only to a mild pull.",
          de: "Der Rectus femoris beugt auch die Hüfte. Sind die Hüftbeuger steif, wird er am Ende jedes schnellen Schritts unter Last in die Länge gezogen. Warte mit dem Test und der Dehnung, bis das Strecken des Knies gegen Widerstand nicht mehr wehtut, meist 1–2 Wochen oder länger, und dehne dann nur bis zu einem leichten Ziehen.",
        },
      ],
      ["trunk", 1],
    ],
    later: ["couch-stretch", "a-skips"],
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
    exits: [
      {
        to: "hip-bsi-refer",
        en: "Does it hurt deep in the groin, or does walking make you limp?",
        de: "Schmerzt es tief in der Leiste, oder hinkst du beim Gehen?",
      },
      {
        to: "scfe-refer",
        en: "Are you under 18, with a limp or with groin, thigh or knee pain for over a week?",
        de: "Bist du unter 18, mit Hinken oder Leisten-, Oberschenkel- oder Knieschmerzen seit über einer Woche?",
      },
    ],
    warn: ["fuel"],
    rtr: "bone",
    sources: ["warden2014", "hoenig2022", "hoenig2023"],
  },
  {
    id: "adductor-strain",
    kind: "plan",
    en: {
      title: "Pulling pain high in the inner thigh, sudden or slowly building",
      desc: "It can start suddenly in a sprint or quick turn, or creep up over weeks of speed work, hills or trails. Squeezing your knees together hurts, and the sorest spot is the muscle at the top of the inner thigh rather than the middle of the pubic bone or the area above the groin crease.",
      name: "Adductor-related groin pain (groin strain, adductor tendinopathy)",
      about:
        "The muscles that pull your legs together run from the pubic bone down the inner thigh, and speed work, hills, trails and quick turns can strain them suddenly or overload their tendons bit by bit. Strength work usually helps most: in a trial with athletes who'd had groin pain for months, an active programme for the inner thigh, hip and trunk worked better than passive treatment, and building up from simple squeezes to the Copenhagen exercise, working toward 3 sets of 10, may also help keep it from coming back. If it isn't clearly better after 6–8 weeks of steady work, see a sports doctor or physio to check for other causes. One rare cause is a trapped nerve, which tends to start during runs and spread down the inner thigh, sometimes with tingling.",
      load: "Keep easy runs on flat, even ground within the pain rule, and drop sprints, hills, trails and sharp turns for now. Bring speed back step by step once squeezing your knees together and the Copenhagen exercise no longer hurt.",
      avoid:
        "After a sudden strain, skip hard groin stretches for the first 1–2 weeks, and massage or heat for the first few days.",
    },
    de: {
      title: "Ziehen oben innen am Oberschenkel, plötzlich oder schleichend",
      desc: "Kann plötzlich bei einem Sprint oder schnellen Richtungswechsel beginnen oder sich über Wochen mit Tempotraining, Hügeln oder Trails aufbauen. Die Knie zusammenzudrücken tut weh, und am empfindlichsten ist der Muskel oben an der Oberschenkelinnenseite, nicht die Mitte des Schambeins oder der Bereich über der Leistenfalte.",
      name: "Adduktorenbedingter Leistenschmerz (Adduktorenzerrung, Adduktorentendinopathie)",
      about:
        "Die Muskeln, die deine Beine zusammenführen, ziehen vom Schambein an der Oberschenkelinnenseite nach unten. Tempotraining, Hügel, Trails und schnelle Richtungswechsel können sie plötzlich zerren oder ihre Sehnen nach und nach überlasten. Krafttraining hilft meist am besten: In einer Studie mit Sportlern, die seit Monaten Leistenschmerzen hatten, wirkte ein aktives Programm für Oberschenkelinnenseite, Hüfte und Rumpf besser als passive Behandlung, und der Aufbau vom einfachen Zusammendrücken bis zur Copenhagen-Übung mit dem Ziel 3 × 10 kann womöglich auch Rückfällen vorbeugen. Wird es nach 6–8 Wochen konsequenten Trainings nicht deutlich besser, lass es sportärztlich oder physiotherapeutisch abklären, um andere Ursachen auszuschließen. Selten steckt ein eingeengter Nerv dahinter. Dann beginnt der Schmerz typischerweise beim Laufen und strahlt an der Oberschenkelinnenseite nach unten aus, manchmal mit Kribbeln.",
      load: "Lockere Läufe auf flachem, ebenem Untergrund innerhalb der Schmerzregel laufen, Sprints, Hügel, Trails und scharfe Richtungswechsel vorerst weglassen. Das Tempo schrittweise zurückholen, sobald das Zusammendrücken der Knie und die Copenhagen-Übung nicht mehr wehtun.",
      avoid:
        "Verzichte nach einer plötzlichen Zerrung in den ersten 1–2 Wochen auf kräftiges Dehnen der Leiste und in den ersten Tagen auf Massage und Wärme.",
    },
    local: ["adductor-squeeze", "copenhagen-adduction"],
    chain: [
      [
        "adductors",
        3,
        {
          en: "Here the inner-thigh muscles are the sore tissue itself, so this test tracks your progress: aim for a pain-free hold that's about the same on both sides before you bring speed back. Wait to try it until squeezing a ball between your knees no longer hurts.",
          de: "Hier sind die Adduktoren selbst das schmerzende Gewebe, deshalb zeigt dir der Test deinen Fortschritt: Ziel ist ein schmerzfreies Halten, das auf beiden Seiten etwa gleich lang gelingt, bevor du wieder Tempo machst. Probier ihn erst, wenn das Zusammendrücken eines Balls zwischen den Knien nicht mehr wehtut.",
        },
      ],
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
    exits: [
      {
        to: "hip-bsi-refer",
        en: "Does hopping on that leg hurt deep in the groin or high in the inner thigh?",
        de: "Tut Hüpfen auf dem Bein tief in der Leiste oder oben an der Oberschenkelinnenseite weh?",
      },
      {
        to: "pubic-ramus-bsi-refer",
        en: "Does standing or hopping on that leg hurt near the pubic bone, or does it ache at rest or at night?",
        de: "Tut Stehen oder Hüpfen auf dem Bein am Schambein weh, oder schmerzt es in Ruhe oder nachts?",
      },
      {
        to: "osteitis-pubis-refer",
        en: "Is the bony front of your pelvis tender to press, in the middle just above the genitals?",
        de: "Ist die knöcherne Vorderseite des Beckens mittig über dem Genitalbereich druckempfindlich?",
      },
    ],
    sources: [
      "weir2015",
      "holmich1999",
      "fernandezgalvan2026",
      "tyler2014",
      "bradshaw1997",
    ],
  },
  {
    id: "tfl-overload",
    kind: "plan",
    en: {
      title: "Tight, achy band along the outer thigh after long runs",
      desc: "Builds up on long runs or cambered roads and feels like a deep, tight ache rather than sharp pain or a burning patch on the skin. It stays above the knee, and pressing along the outer thigh is often sore.",
      name: "Tensor fasciae latae and iliotibial band overload (tight IT band)",
      about:
        "The small muscle at the front of your outer hip (TFL) and the long band it pulls on are working overtime, often because the bigger side-hip muscles tire and let your thigh drift inward. Foam rolling may ease the tight feeling for a while but is unlikely to change the band itself, so side-hip strength work is usually the better use of your time. It often settles within a few weeks. Burning, tingling or numbness on the skin of the outer thigh points to a pinched skin nerve instead, which has its own card.",
      load: "Keep running within the pain rule, but shorten your long run for 1–2 weeks. Run on flat paths or switch sides on cambered roads, and go easy on long downhills.",
    },
    de: {
      title:
        "Spannung und dumpfer Schmerz außen am Oberschenkel nach langen Läufen",
      desc: "Baut sich bei langen Läufen oder auf Straßen mit seitlichem Gefälle auf und fühlt sich eher tief, gespannt und dumpf an als stechend oder wie ein brennender Fleck auf der Haut. Der Schmerz bleibt oberhalb des Knies, und Druck entlang der Oberschenkelaußenseite tut oft weh.",
      name: "Überlastung von Tensor fasciae latae und Tractus iliotibialis (verspanntes IT-Band)",
      about:
        "Der kleine Muskel vorn an der Hüftaußenseite (TFL) und das lange Band, an dem er zieht, sind im Dauereinsatz, oft weil die größeren seitlichen Hüftmuskeln ermüden und der Oberschenkel nach innen driftet. Faszienrollen kann das Spannungsgefühl kurz lindern, dürfte das Band selbst aber kaum verändern, deshalb nutzt du deine Zeit mit Kraftübungen für die seitliche Hüfte meist besser. Oft beruhigt es sich innerhalb weniger Wochen. Brennen, Kribbeln oder Taubheit auf der Haut außen am Oberschenkel sprechen eher für einen eingeengten Hautnerv, dafür gibt es eine eigene Karte.",
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
        "Some fibres in your hamstrings were overloaded while braking your swinging leg at speed, and after a mild strain you're often back to full speed within a few weeks. In trials with athletes, three lengthening exercises (the extender, the diver and the glider) got people back sooner than conventional rehab, and starting them gently in the first days seems as safe as waiting. A strain high up just below the sit bone often involves the tendon and can take about twice as long, so see a physio if it isn't clearly improving within 2–3 weeks.",
      load: "Run easy and flat once brisk walking is pain-free, within the pain rule. Bring speed back in steps, from relaxed strides at about 60–70% up to full speed over 1–3 weeks, and only go faster when the last pace still felt fine the next morning.",
      avoid:
        "Skip hard hamstring stretches for the first 1–2 weeks, massage or heat for the first few days, and the Nordic curl until you're back to full speed without pain.",
    },
    de: {
      title: "Plötzlicher Stich hinten am Oberschenkel bei schnellerem Laufen",
      desc: "Begann bei Steigerungsläufen, Sprints oder einem schnellen Endspurt, und du konntest danach noch normal gehen. Dehnen der hinteren Oberschenkel oder Beugen des Knies gegen Widerstand tut weh, und im Muskel gibt es oft eine druckempfindliche Stelle.",
      name: "Zerrung der hinteren Oberschenkelmuskulatur (Hamstring-Zerrung)",
      about:
        "Einige Fasern deiner hinteren Oberschenkelmuskeln wurden überlastet, als sie das schwingende Bein bei hohem Tempo abgebremst haben. Nach einer leichten Zerrung bist du oft nach einigen Wochen wieder voll im Tempo. In Studien im Leistungssport brachten drei Übungen, die den Muskel in verlängerter Position kräftigen (Extender, Diver und Glider), die Betroffenen schneller zurück in den Sport als herkömmliche Reha, und behutsam schon in den ersten Tagen damit anzufangen, scheint genauso sicher zu sein wie abzuwarten. Eine Zerrung hoch oben direkt unter dem Sitzbein betrifft oft die Sehne und kann etwa doppelt so lange dauern. Bessert sie sich nach 2–3 Wochen nicht deutlich, lass sie physiotherapeutisch anschauen.",
      load: "Locker und flach laufen, sobald zügiges Gehen schmerzfrei ist, innerhalb der Schmerzregel. Das Tempo stufenweise zurückholen, von lockeren Steigerungen mit etwa 60–70 % bis zum vollen Tempo über 1–3 Wochen, und erst schneller werden, wenn sich das letzte Tempo auch am nächsten Morgen gut angefühlt hat.",
      avoid:
        "Verzichte in den ersten 1–2 Wochen auf kräftiges Dehnen der hinteren Oberschenkel, in den ersten Tagen auf Massage und Wärme und auf den Nordic Hamstring Curl, bis du wieder schmerzfrei volles Tempo laufen kannst.",
    },
    local: [
      "hamstring-extender",
      "hamstring-diver",
      "hamstring-glider",
      "nordic-curl",
    ],
    later: ["nordic-curl"],
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
    exits: [
      {
        to: "hamstring-avulsion-refer",
        en: "Did it start with a pop right at the sit bone, followed by a large bruise or trouble walking or sitting?",
        de: "Begann es mit einem Knall direkt am Sitzbein, gefolgt von einem großen Bluterguss oder Problemen beim Gehen oder Sitzen?",
      },
      {
        to: "apophyseal-avulsion-refer",
        en: "Are you under 18, and did it start with a sudden pop at the sit bone during a sprint or jump?",
        de: "Bist du unter 18 und hat es mit einem plötzlichen Knall am Sitzbein beim Sprint oder Sprung begonnen?",
      },
    ],
    sources: [
      "martin2022",
      "askling2014",
      "askling2013",
      "vermeulen2022",
      "sherry2004",
      "hickey2020",
      "vandyk2019",
      "freckleton2014",
    ],
  },
  {
    id: "meralgia",
    kind: "plan",
    en: {
      title: "Burning, tingling or numb patch on the outer front of the thigh",
      desc: "It's on the skin rather than deep in the muscle, often feels like sunburn or pins and needles, and doesn't make the leg weak. It tends to build with long standing or walking, or with a tight waistband, belt or hip pack, and to ease when you sit.",
      name: "Meralgia paresthetica (pinched skin nerve of the outer thigh)",
      about:
        "A nerve that only carries feeling from the skin of the outer thigh can get squeezed where it leaves the pelvis, just inside the bony point at the front of your hip. It doesn't affect your muscles and often eases once the pressure is off, so treatment starts with simple steps and only moves on if those don't help. Tight waistbands, belts and hip packs are commonly blamed, though that rests on clinical experience more than on studies. If it hasn't eased after about 6–8 weeks, see a doctor.",
      load: "You can usually keep running as normal. Carry water in your hand or a vest instead of a waist belt, wear shorts with a soft, wide waistband, and shorten a run if the burning builds and lingers afterwards.",
      avoid:
        "Skip tight waistbands, belts and hip packs that press just inside the bony point at the front of your hip, and see a doctor if your leg feels weak, the numbness spreads or back pain comes with it.",
    },
    de: {
      title: "Brennen, Kribbeln oder Taubheit vorn außen am Oberschenkel",
      desc: "Sitzt auf der Haut statt tief im Muskel, fühlt sich oft wie Sonnenbrand oder Ameisenlaufen an und macht das Bein nicht schwach. Nimmt meist bei langem Stehen oder Gehen oder bei engem Hosenbund, Gürtel oder Hüfttasche zu und lässt im Sitzen nach.",
      name: "Meralgia paraesthetica (eingeengter Hautnerv an der Oberschenkelaußenseite)",
      about:
        "Ein Nerv, der nur für das Gefühl in der Haut an der Oberschenkelaußenseite zuständig ist, kann dort eingeengt werden, wo er das Becken verlässt, knapp innen neben dem vorderen Knochenvorsprung der Hüfte. Er versorgt keine Muskeln, und die Beschwerden lassen oft nach, sobald der Druck weg ist. Deshalb beginnt die Behandlung mit einfachen Maßnahmen und geht nur weiter, wenn diese nicht helfen. Enge Hosenbünde, Gürtel und Hüfttaschen gelten als typische Auslöser, das beruht allerdings eher auf Praxiserfahrung als auf Studien. Hat es nach etwa 6–8 Wochen nicht nachgelassen, lass es ärztlich abklären.",
      load: "Normal weiterlaufen ist meist in Ordnung. Trag Wasser in der Hand oder in einer Laufweste statt in einem Trinkgürtel, wähle Shorts mit weichem, breitem Bund und kürz einen Lauf ab, wenn das Brennen zunimmt und danach anhält.",
      avoid:
        "Verzichte auf enge Hosenbünde, Gürtel und Hüfttaschen, die knapp innen neben den vorderen Knochenvorsprung der Hüfte drücken, und lass dich ärztlich untersuchen, wenn sich das Bein schwach anfühlt, die Taubheit sich ausbreitet oder Rückenschmerzen dazukommen.",
    },
    local: [],
    chain: [],
    exits: [
      {
        to: "sciatica-refer",
        en: "Do you also have back pain or a weak leg, or does the tingling or numbness spread beyond the outer thigh?",
        de: "Hast du auch Rückenschmerzen oder ein schwaches Bein, oder reichen Kribbeln oder Taubheit über die Oberschenkelaußenseite hinaus?",
      },
    ],
    rtr: "none",
    sources: ["scholz2023", "grossman2001"],
  },
  {
    id: "quad-contusion",
    kind: "plan",
    en: {
      title:
        "Deep, bruised ache in the front of the thigh after a knock or fall",
      desc: "Started with a direct blow, like a fall onto a rock or root on a trail or a collision. The thigh feels bruised, tight or swollen and bending the knee hurts, unlike a strain, which starts mid-stride without a knock.",
      name: "Quadriceps contusion (dead leg, bruised thigh muscle)",
      about:
        "The knock has crushed some muscle fibres against the thigh bone, and bleeding inside the muscle makes it tight and stiff. Keeping the knee bent as far as is comfortable, up to about 120° with the heel drawn toward your bottom, for most of the first 24 hours seems to shorten recovery (a loose elastic wrap can help hold it), and after that you gently win back knee bend first, then strength. Most bruised thighs heal well, but if a firm, painful lump is still there or growing after 2–3 weeks, see a doctor, because after a hard knock bone sometimes forms inside the muscle (myositis ossificans).",
      load: "Don't run for the first few days, and see a physio or doctor if you still can't bend the knee to a right angle after 24 hours. Once you walk without limping and can bend the knee nearly as far as on the other side, start with short, easy runs on flat ground within the pain rule, and bring back speed, hills and trails once a slow single-leg sit-to-stand feels as strong as on the other leg.",
      avoid:
        "Skip massage, heat, alcohol and hard stretching for the first few days, never massage a firm lump, and go to an emergency department now if the thigh turns very tense and swollen with pain that keeps getting worse, or you can't bear weight on it.",
    },
    de: {
      title:
        "Tiefer Prellungsschmerz vorn im Oberschenkel nach Stoß oder Sturz",
      desc: "Begann mit einem direkten Stoß, etwa bei einem Sturz auf Stein oder Wurzel im Gelände oder bei einem Zusammenprall. Der Oberschenkel fühlt sich geprellt, fest oder geschwollen an, und das Beugen des Knies tut weh, anders als bei einer Zerrung, die ohne Stoß mitten im Schritt beginnt.",
      name: "Quadrizepskontusion (Oberschenkelprellung, Pferdekuss)",
      about:
        "Der Stoß hat Muskelfasern gegen den Oberschenkelknochen gequetscht, und die Einblutung im Muskel macht ihn fest und steif. Hältst du das Knie in den ersten 24 Stunden möglichst durchgehend so weit gebeugt, wie es gut auszuhalten ist, bis etwa 120° mit der Ferse Richtung Gesäß, scheint das die Heilung zu verkürzen (eine locker gewickelte elastische Binde hilft, die Beugung zu halten). Danach holst du dir behutsam erst die Kniebeugung und dann die Kraft zurück. Meist heilt eine Prellung gut aus. Ist aber nach 2–3 Wochen noch eine feste, schmerzhafte Verhärtung da oder wird sie größer, lass das ärztlich abklären, denn nach einem harten Stoß bildet sich manchmal Knochen im Muskel (Myositis ossificans).",
      load: "In den ersten Tagen nicht laufen, und kannst du das Knie nach 24 Stunden noch nicht bis zum rechten Winkel beugen, lass es physiotherapeutisch oder ärztlich anschauen. Sobald du ohne Hinken gehst und das Knie fast so weit beugen kannst wie auf der anderen Seite, mit kurzen, lockeren Läufen auf flacher Strecke innerhalb der Schmerzregel beginnen. Tempo, Hügel und Trails erst wieder einbauen, wenn sich langsames einbeiniges Aufstehen vom Stuhl so kräftig anfühlt wie auf der anderen Seite.",
      avoid:
        "Verzichte in den ersten Tagen auf Massage, Wärme, Alkohol und kräftiges Dehnen, massiere eine Verhärtung nie, und geh sofort in die Notaufnahme, wenn der Oberschenkel sehr prall und geschwollen wird und der Schmerz immer weiter zunimmt oder du das Bein nicht belasten kannst.",
    },
    local: ["heel-slide", "wall-sit", "split-squat"],
    chain: [],
    exits: [
      {
        to: "scfe-refer",
        en: "Are you under 18, with a limp that lasts more than a week or pain in the groin as well?",
        de: "Bist du unter 18, mit Hinken seit über einer Woche oder zusätzlich Schmerzen in der Leiste?",
      },
    ],
    sources: ["aronen2006", "kary2010"],
  },
];
