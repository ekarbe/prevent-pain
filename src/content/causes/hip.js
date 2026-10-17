// hip causes. Schema: see README "Content model".
export default [
  {
    id: "hip-flexor",
    kind: "plan",
    en: {
      title: "Pulling pain at the front of the hip when you lift your knee",
      desc: "Hurts when you lift your knee against resistance, sprint, run uphill or stretch the front of the hip. Easy flat running is usually bearable, and the ache doesn't build from run to run.",
      name: "Iliopsoas or rectus femoris strain or tendinopathy (hip flexor strain)",
      about:
        "One of the muscles that lift your thigh, the deep iliopsoas or the rectus femoris at the front of the thigh, is strained or its tendon is irritated. Sprints, strides and hills load them hardest, so a recent jump in speed work is a common trigger. Easing off the speed for a while and hip flexor strength work that gets gradually heavier usually settle it, often within a few weeks.",
      load: "Drop sprints, strides and hill repeats, and keep easy runs on flat ground within the pain rule. Skip hard hip flexor stretches for the first 1–2 weeks, and bring speed back step by step once lifting your knee against resistance no longer hurts.",
    },
    de: {
      title: "Ziehender Schmerz vorn an der Hüfte, wenn du das Knie anhebst",
      desc: "Tut weh, wenn du das Knie gegen Widerstand anhebst, sprintest, bergauf läufst oder die Hüftvorderseite dehnst. Lockeres Laufen in der Ebene geht meist, und der Schmerz nimmt nicht von Lauf zu Lauf zu.",
      name: "Zerrung oder Tendinopathie von Iliopsoas oder Rectus femoris (Hüftbeugerzerrung)",
      about:
        "Einer der Muskeln, die deinen Oberschenkel anheben, ist gezerrt oder seine Sehne gereizt: der tiefe Iliopsoas oder der Rectus femoris vorn am Oberschenkel. Sprints, Steigerungen und Hügel fordern sie am stärksten, deshalb ist plötzlich mehr Tempotraining ein häufiger Auslöser. Eine Zeit lang weniger Tempo und Krafttraining für die Hüftbeuger, das schrittweise schwerer wird, bringen es meist zur Ruhe, oft innerhalb weniger Wochen.",
      load: "Sprints, Steigerungen und Bergintervalle weglassen und lockere Läufe auf flacher Strecke innerhalb der Schmerzregel laufen. In den ersten 1–2 Wochen die Hüftbeuger nicht kräftig dehnen und das Tempo erst schrittweise zurückholen, wenn das Knieanheben gegen Widerstand nicht mehr wehtut.",
    },
    local: ["hip-flexor-hold", "banded-knee-drive"],
    later: ["couch-stretch"],
    chain: [
      [
        "trunk",
        2,
        {
          en: "The deep hip flexor runs from your lower spine to the thigh. When your trunk can't hold the pelvis steady, it has to help stabilise as well as swing the leg forward, so it can tire sooner.",
          de: "Der tiefe Hüftbeuger zieht von der Lendenwirbelsäule zum Oberschenkel. Hält der Rumpf das Becken nicht stabil, muss er zusätzlich stabilisieren, statt nur das Bein nach vorn zu bringen, und kann früher ermüden.",
        },
      ],
      [
        "hipflex",
        2,
        {
          en: "Stiff hip flexors are pulled long under load at the back of every stride. Hold off on this test and the couch stretch until lifting your knee against resistance no longer hurts, usually 1–2 weeks or more. Then start gently, only to a mild pull.",
          de: "Steife Hüftbeuger werden am Ende jedes Schritts unter Last in die Länge gezogen. Mach den Test und den Couch Stretch erst, wenn das Knieanheben gegen Widerstand nicht mehr wehtut, meist nach 1–2 Wochen oder länger. Dann sanft beginnen, nur bis zu einem leichten Ziehen.",
        },
      ],
      ["stride", 1],
    ],
    exits: [
      {
        to: "apophyseal-avulsion-refer",
        en: "Are you under 18, and did it start with a sudden pop at the front of the hip during a sprint or kick?",
        de: "Bist du unter 18 und hat es mit einem plötzlichen Knall vorn an der Hüfte beim Sprint oder Schuss begonnen?",
      },
      {
        to: "scfe-refer",
        en: "Are you under 18, with a limp or with groin, thigh or knee pain for over a week?",
        de: "Bist du unter 18, mit Hinken oder Leisten-, Oberschenkel- oder Knieschmerzen seit über einer Woche?",
      },
      {
        to: "hip-bsi-refer",
        en: "Does the ache build with every run, or does hopping on that leg hurt?",
        de: "Wird der Schmerz mit jedem Lauf stärker, oder tut Hüpfen auf dem Bein weh?",
      },
    ],
    sources: ["weir2015", "tyler2014", "mendiguchia2013"],
  },
  {
    id: "hip-joint-refer",
    kind: "refer",
    urgency: "soon",
    en: {
      title: "Deep pinch in the groin when you squat deep or sit for long",
      desc: "Pinches when you bend the hip far, as in a deep squat, putting on socks or getting out of a car, and aches after long sitting. Clicking, catching or a feeling that the hip locks can come with it.",
      name: "Femoroacetabular impingement or labral tear (hip impingement)",
      about:
        "This pattern can come from the hip joint itself. The ball and socket can pinch at the rim when the hip bends far (impingement), and the ring of cartilage around the socket (labrum) can get irritated or torn. From about 45, osteoarthritis (gradual changes in the joint) can cause a similar ache and stiffness. A physio or sports doctor can usually tell with a few tests, sometimes plus imaging, and a structured exercise programme of at least 3 months is the usual first step.",
      meanwhile:
        "Avoid what brings on the pinch: deep squats, low seats, crossing your legs and twisting on that leg. Easy runs on flat ground are usually fine if they don't provoke it. If the ache builds with every run or hopping on that leg hurts, stop running and see a doctor today.",
    },
    de: {
      title: "Tiefes Zwicken in der Leiste bei tiefer Hocke oder langem Sitzen",
      desc: "Zwickt, wenn du die Hüfte stark beugst, etwa in der tiefen Hocke, beim Anziehen der Socken oder beim Aussteigen aus dem Auto, und schmerzt nach langem Sitzen. Klicken, Hängenbleiben oder das Gefühl, dass die Hüfte blockiert, können dazukommen.",
      name: "Femoroazetabuläres Impingement oder Labrumläsion (Hüftimpingement)",
      about:
        "Dieses Muster kann vom Hüftgelenk selbst kommen. Kopf und Pfanne können am Rand aneinanderstoßen, wenn die Hüfte stark gebeugt wird (Impingement), und der Knorpelring um die Pfanne (Labrum) kann gereizt oder eingerissen sein. Ab etwa 45 kann auch eine beginnende Arthrose ähnliche Schmerzen und Steifigkeit machen. In der Physiotherapie oder sportmedizinischen Praxis lässt sich das meist mit ein paar Tests klären, manchmal mit Bildgebung, und ein gezieltes Übungsprogramm über mindestens 3 Monate ist in der Regel der erste Schritt.",
      meanwhile:
        "Meide, was das Zwicken auslöst: tiefe Hocke, niedrige Sitze, übereinandergeschlagene Beine und Drehen auf dem Standbein. Lockere Läufe in der Ebene sind meist in Ordnung, solange sie es nicht auslösen. Nimmt der Schmerz mit jedem Lauf zu oder tut Hüpfen auf dem Bein weh, hör mit dem Laufen auf und lass es heute noch ärztlich abklären.",
    },
    exits: [
      {
        to: "scfe-refer",
        en: "Are you under 18, with a limp or with groin, thigh or knee pain for over a week?",
        de: "Bist du unter 18, mit Hinken oder Leisten-, Oberschenkel- oder Knieschmerzen seit über einer Woche?",
      },
      {
        to: "hip-bsi-refer",
        en: "Does the ache build with every run, or does hopping on that leg hurt?",
        de: "Wird der Schmerz mit jedem Lauf stärker, oder tut Hüpfen auf dem Bein weh?",
      },
    ],
    sources: ["griffin2016", "kemp2020", "enseki2023"],
  },
  {
    id: "hip-bsi-refer",
    kind: "refer",
    urgency: "today",
    en: {
      title:
        "Deep ache in the groin or high inner thigh that builds with every run",
      desc: "Often starts after a jump in training. It comes on earlier and lingers longer with each run, hopping on that leg hurts, and it can ache at night or at rest.",
      name: "Femoral neck bone stress injury (stress fracture)",
      about:
        "This pattern can mean a bone stress injury in the neck of the thigh bone, just below the ball of the hip joint. It's uncommon, but it's one of the few spots where a stress injury can become a full break if you keep running, so it needs checking quickly. Caught early, most runners heal well, though X-rays often look normal at first and an MRI is usually needed to see it.",
      meanwhile:
        "Stop running and hopping now. Walk only as much as you need to, and if walking hurts or makes you limp, keep weight off that leg until you've been seen, with crutches if you have them. If you can't put weight on the leg at all, or the pain suddenly gets much worse, go to an emergency department now. Tell the doctor about any recent jump in training, earlier stress injuries, eating too little or missed periods.",
    },
    de: {
      title:
        "Tiefer Schmerz in Leiste oder Innenschenkel, mit jedem Lauf stärker",
      desc: "Beginnt oft nach einer Trainingssteigerung. Setzt mit jedem Lauf früher ein und hält länger an, Hüpfen auf dem Bein tut weh, und auch nachts oder in Ruhe kann es schmerzen.",
      name: "Knochenstressverletzung am Schenkelhals (Ermüdungsbruch)",
      about:
        "Dieses Muster kann auf eine Knochenstressverletzung am Schenkelhals hindeuten, direkt unterhalb des Hüftkopfs. Sie ist selten, aber an dieser Stelle kann daraus ein vollständiger Bruch werden, wenn du weiterläufst, deshalb muss sie schnell abgeklärt werden. Früh erkannt heilt sie bei den meisten Laufenden gut, auch wenn das Röntgenbild anfangs oft unauffällig ist und erst ein MRT sie zeigt.",
      meanwhile:
        "Hör sofort mit Laufen und Hüpfen auf. Geh nur so viel wie nötig, und wenn Gehen wehtut oder du hinkst, belaste das Bein bis zur Untersuchung nicht, am besten mit Unterarmgehstützen. Kannst du das Bein gar nicht belasten oder wird der Schmerz plötzlich viel stärker, geh sofort in die Notaufnahme. Erzähl bei der Untersuchung von kürzlichen Trainingssteigerungen, früheren Stressverletzungen, zu knapper Ernährung oder ausbleibender Periode.",
    },
    warn: ["fuel"],
    rtr: "bone",
    sources: ["robertson2017", "warden2014", "hoenig2023"],
  },
  {
    id: "gluteal-tendinopathy",
    kind: "plan",
    en: {
      title:
        "Ache on the bony point of the outer hip, worse lying on that side",
      desc: "Worse lying on that side, sitting with crossed legs, climbing stairs or standing on one leg. The bony point on the outside of the hip is usually tender to press.",
      name: "Gluteal tendinopathy (greater trochanteric pain syndrome)",
      about:
        "The tendons of your side-hip muscles are irritated where they attach to the bony point on the outside of your hip, and they get squeezed against the bone when your thigh drops in across your body or you lie on that side. Knowing what squeezes the tendon is a key part of treatment: in a large trial, advice on avoiding that squeeze plus side-hip strength work that builds step by step helped more than an injection or waiting it out, and still beat the injection for overall improvement a year later. At night, sleep on the other side with a pillow between your knees.",
      load: "Keep running on flat ground within the pain rule, avoid cambered roads and steep hills for now, and don't let your feet cross toward the midline. If the outer hip aches more the next morning, shorten your next runs by about a third.",
      avoid:
        "Skip crossing your legs, standing with your weight hanging on one hip, lying on the sore side and stretches that pull the leg across your body, because they squeeze the tendon against the bone.",
    },
    de: {
      title:
        "Schmerz außen am Hüftknochen, schlimmer beim Liegen auf dieser Seite",
      desc: "Schlimmer beim Liegen auf dieser Seite, mit übereinandergeschlagenen Beinen, auf Treppen oder im Einbeinstand. Der Knochenvorsprung außen an der Hüfte ist meist druckempfindlich.",
      name: "Gluteale Tendinopathie (Trochanter-major-Schmerzsyndrom)",
      about:
        "Die Sehnen deiner seitlichen Hüftmuskeln sind dort gereizt, wo sie am Knochenvorsprung außen an der Hüfte ansetzen, und sie werden gegen den Knochen gedrückt, wenn der Oberschenkel nach innen über die Körpermitte wandert oder du auf dieser Seite liegst. Zu wissen, was die Sehne zusammendrückt, ist ein wichtiger Teil der Behandlung: In einer großen Studie half Beratung zum Vermeiden dieses Drucks plus schrittweise aufbauendes Krafttraining für die seitliche Hüfte besser als eine Spritze oder Abwarten und schnitt auch nach einem Jahr beim Gesamtergebnis besser ab als die Spritze. Schlaf nachts auf der anderen Seite mit einem Kissen zwischen den Knien.",
      load: "Lauf innerhalb der Schmerzregel auf flachem Untergrund weiter, meide vorerst Straßen mit seitlichem Gefälle und steile Hügel und setz die Füße beim Laufen nicht über die Mittellinie. Schmerzt die Hüfte am nächsten Morgen mehr, die nächsten Läufe um etwa ein Drittel kürzen.",
      avoid:
        "Schlag die Beine nicht übereinander, häng im Stehen nicht in einer Hüfte, lieg nicht auf der schmerzhaften Seite und lass Dehnungen weg, die das Bein quer über den Körper ziehen, denn all das drückt die Sehne gegen den Knochen.",
    },
    local: [
      "hip-abduction-hold",
      "standing-abduction-hold",
      "banded-side-step",
      "step-up",
    ],
    later: ["side-abduction"],
    chain: [
      [
        "hipabd",
        3,
        {
          en: "When the side-hip muscles can't keep your pelvis level, the thigh drops inward and presses the tendon against the bone on every stride. If this tests weak, add the side-lying leg raises only once the holds feel easy, and start each lift with the top leg level with your hip, never hanging down toward the floor. Start the side plank from your knees and leave it out if it brings on the outer-hip ache.",
          de: "Halten die seitlichen Hüftmuskeln das Becken nicht gerade, sinkt der Oberschenkel nach innen und drückt die Sehne bei jedem Schritt gegen den Knochen. Fällt der Test schwach aus, nimm das seitliche Beinheben erst dazu, wenn das Halten leichtfällt, und beginne jede Wiederholung mit dem oberen Bein auf Hüfthöhe, nie nach unten hängend. Den Seitstütz auf den Knien beginnen und weglassen, wenn er den Schmerz außen an der Hüfte auslöst.",
        },
      ],
      [
        "stride",
        2,
        {
          en: "A slightly higher step rate can reduce how far your thigh drops inward with each landing, the very movement that squeezes this tendon.",
          de: "Eine etwas höhere Schrittfrequenz kann verringern, wie weit der Oberschenkel bei jeder Landung nach innen sinkt. Genau diese Bewegung drückt auf die Sehne.",
        },
      ],
      [
        "trunk",
        1,
        {
          en: "A steady trunk keeps your pelvis level over the standing leg. Do the side-plank test from your knees on the painful side, and stop at the first outer-hip ache.",
          de: "Ein stabiler Rumpf hält das Becken über dem Standbein waagerecht. Mach den Seitstütz-Test auf der schmerzhaften Seite von den Knien aus und hör beim ersten Ziehen außen an der Hüfte auf.",
        },
      ],
    ],
    sources: ["grimaldi2015", "mellor2018", "grimaldi2017", "heiderscheit2011"],
  },
  {
    id: "deep-gluteal",
    kind: "plan",
    en: {
      title: "Deep ache in the buttock, worse after long sitting",
      desc: "Worse after long sitting, at faster paces and uphill, and the middle of the buttock is often tender to press. No pain below the knee and no numbness or tingling (with either of those, pick the card for shooting or burning pain down the leg).",
      name: "Deep gluteal syndrome (piriformis syndrome)",
      about:
        "Small muscles deep in your buttock, such as the piriformis, steady your hip on every stride and can get overworked and sensitive. The sciatic nerve runs right past them, which may be why long sitting makes the area sore. Building strength in the hip and buttock muscles often helps more than stretching alone, and if it hasn't improved after several weeks, a physio or sports doctor can check for other causes, such as a narrow gap between the sit bone and the thigh bone (ischiofemoral impingement).",
      load: "Keep easy runs at a relaxed pace and drop intervals, sprints and steep hills for now. When sitting, stand up every 30 minutes and take your wallet out of your back pocket.",
    },
    de: {
      title: "Tiefer Schmerz im Gesäß, schlimmer nach langem Sitzen",
      desc: "Schlimmer nach langem Sitzen, bei schnellerem Tempo und bergauf, und die Mitte des Gesäßes ist oft druckempfindlich. Keine Schmerzen unterhalb des Knies, weder Taubheit noch Kribbeln (sonst passt die Karte für einschießenden oder brennenden Schmerz ins Bein besser).",
      name: "Tiefes Glutealsyndrom (Piriformis-Syndrom)",
      about:
        "Kleine Muskeln tief im Gesäß, etwa der Piriformis, stabilisieren deine Hüfte bei jedem Schritt und können überlastet und empfindlich werden. Der Ischiasnerv verläuft direkt daneben, was erklären könnte, warum langes Sitzen die Stelle reizt. Kräftigung der Hüft- und Gesäßmuskeln hilft oft mehr als Dehnen allein, und bessert es sich nach einigen Wochen nicht, kann die Physiotherapie oder eine sportmedizinische Praxis nach anderen Ursachen suchen, etwa einer Enge zwischen Sitzbein und Oberschenkelknochen (ischiofemorales Impingement).",
      load: "Lockere Läufe in entspanntem Tempo laufen und Intervalle, Sprints und steile Anstiege vorerst weglassen. Beim Sitzen alle 30 Minuten aufstehen und das Portemonnaie aus der Gesäßtasche nehmen.",
    },
    local: ["clamshell", "single-leg-bridge", "step-down"],
    chain: [
      [
        "hipabd",
        2,
        {
          en: "When the side-hip muscles tire, the thigh drops and turns inward on each landing, and the small rotators deep in your buttock have to work harder to hold it.",
          de: "Ermüden die seitlichen Hüftmuskeln, sinkt der Oberschenkel bei jeder Landung nach innen und dreht ein. Die kleinen Rotatoren tief im Gesäß müssen dann mehr arbeiten, um ihn zu halten.",
        },
      ],
      [
        "glutes",
        2,
        {
          en: "Your big glute muscle does most of the work at faster paces and uphill. When it's weak, the smaller muscles underneath it take on more.",
          de: "Bei höherem Tempo und bergauf leistet der große Gesäßmuskel den Großteil der Arbeit. Ist er schwach, übernehmen die kleineren Muskeln darunter mehr.",
        },
      ],
      ["trunk", 1],
    ],
    exits: [
      {
        to: "sciatica-refer",
        en: "Does pain shoot below the knee, or do you have numbness, tingling or weakness in the leg?",
        de: "Schießt der Schmerz bis unter das Knie, oder hast du Taubheit, Kribbeln oder Schwäche im Bein?",
      },
      {
        to: "sacral-bsi-refer",
        en: "Does hopping on that leg hurt deep in the buttock or low back, or does it ache at night?",
        de: "Tut Hüpfen auf dem Bein tief im Gesäß oder unteren Rücken weh, oder schmerzt es nachts?",
      },
    ],
    sources: ["hopayian2018", "martin2015", "tonley2010"],
  },
  {
    id: "proximal-hamstring",
    kind: "plan",
    en: {
      title: "Deep pain at the sit bone, worse on hard chairs",
      desc: "Worse sitting on hard chairs, running uphill or fast, and bending forward with straight legs. It builds up gradually over weeks rather than starting with a sudden pop.",
      name: "Proximal hamstring tendinopathy (high hamstring tendinopathy)",
      about:
        "The tendon that anchors your hamstrings to the sit bone is irritated, often after more speed work, hills or a jump in distance. It gets pressed against the bone when your hip bends far forward, which is why sitting and hamstring stretches hurt. Hamstring work that starts with holds in positions that keep the hip fairly straight, then gets gradually heavier, often settles it, though it can take a few months.",
      load: "Keep easy runs on flat ground within the pain rule, and drop speed work, hills and long strides for now. Sit on a cushion and get up every 30 minutes.",
      avoid:
        "Skip hamstring stretches such as toe touches, deep forward bends and deep lunges for now, because bending far at the hip presses the tendon against the bone.",
    },
    de: {
      title: "Tiefer Schmerz am Sitzbein, schlimmer auf harten Stühlen",
      desc: "Schlimmer beim Sitzen auf harten Stühlen, beim Bergauf- oder schnellen Laufen und beim Vorbeugen mit gestreckten Beinen. Es baut sich allmählich über Wochen auf und beginnt nicht mit einem plötzlichen Knall.",
      name: "Proximale Hamstring-Tendinopathie (Sehnenreizung am Sitzbein)",
      about:
        "Die Sehne, mit der deine hinteren Oberschenkelmuskeln am Sitzbein ansetzen, ist gereizt, oft nach mehr Tempotraining, Hügeln oder einer plötzlichen Steigerung des Wochenumfangs. Sie wird gegen den Knochen gedrückt, wenn du die Hüfte stark beugst, deshalb tun Sitzen und Dehnen der hinteren Oberschenkel weh. Training, das mit Halteübungen bei fast gestreckter Hüfte beginnt und dann schrittweise schwerer wird, bringt sie oft zur Ruhe, kann aber einige Monate dauern.",
      load: "Lockere Läufe auf flacher Strecke innerhalb der Schmerzregel laufen und Tempotraining, Hügel und lange Schritte vorerst weglassen. Auf einem Kissen sitzen und alle 30 Minuten aufstehen.",
      avoid:
        "Lass Dehnungen der hinteren Oberschenkel wie Zehenberühren, tiefes Vorbeugen und tiefe Ausfallschritte vorerst weg, denn starkes Beugen der Hüfte drückt die Sehne gegen den Knochen.",
    },
    local: ["prone-leg-curl-hold", "long-lever-bridge", "slow-rdl"],
    later: ["slow-rdl"],
    linkExercises: {
      glutes: ["single-leg-bridge"],
    },
    chain: [
      [
        "glutes",
        2,
        {
          en: "Your glutes and hamstrings share the job of driving the hip back. When the glutes are weak, the hamstrings and their tendon at the sit bone take on more of every push-off.",
          de: "Gesäß und hintere Oberschenkel teilen sich die Arbeit, die Hüfte zu strecken. Sind die Gesäßmuskeln schwach, übernehmen die hinteren Oberschenkel und ihre Sehne am Sitzbein mehr von jedem Abdruck.",
        },
      ],
      [
        "trunk",
        2,
        {
          en: "If your pelvis tips forward as you run, the sit bone moves away from the knee and the hamstring tendon is pulled tighter on every stride.",
          de: "Kippt dein Becken beim Laufen nach vorn, entfernt sich das Sitzbein vom Knie und die Sehne am Sitzbein wird bei jedem Schritt stärker gespannt.",
        },
      ],
      ["stride", 1],
    ],
    exits: [
      {
        to: "hamstring-avulsion-refer",
        en: "Did it start suddenly with a pop at the sit bone, followed by bruising or trouble walking?",
        de: "Begann es plötzlich mit einem Knall am Sitzbein, gefolgt von einem Bluterguss oder Problemen beim Gehen?",
      },
      {
        to: "apophyseal-avulsion-refer",
        en: "Are you under 18, and did it start with a sudden pop at the sit bone during a sprint or jump?",
        de: "Bist du unter 18 und hat es mit einem plötzlichen Knall am Sitzbein beim Sprint oder Sprung begonnen?",
      },
    ],
    sources: ["goom2016", "nasser2021", "fredericson2005"],
  },
  {
    id: "pubic-ramus-bsi-refer",
    kind: "refer",
    urgency: "soon",
    en: {
      title: "Groin ache near the pubic bone that builds with every run",
      desc: "Sits low in the groin or inner thigh, close to where the inner-thigh muscles attach to the pelvis, and the bone there is often tender to press. It can feel like a groin strain, but it comes on earlier with each run, standing or hopping on that leg hurts, and it can ache at rest or at night.",
      name: "Pubic ramus bone stress injury (stress fracture of the pubic bone)",
      about:
        "This pattern can mean a bone stress injury in the lower arm of the pubic bone, where the inner-thigh muscles pull. It's uncommon, was described mainly in women who run long distances, is easily mistaken for a groin strain and is often missed on a first X-ray, so an MRI or bone scan may be needed. It usually heals well once you stop running until the pain has gone and then build back up gradually.",
      meanwhile:
        "Stop running and hopping now and see a doctor within the next few days. Walk only as much as is comfortable, and use crutches if walking hurts or makes you limp. If you can't put weight on the leg or the pain suddenly gets much worse, get seen today. Tell the doctor about any recent jump in training, earlier stress injuries, eating too little or missed periods.",
      avoid:
        "Skip groin stretches and inner-thigh strength exercises until a doctor has checked the bone.",
    },
    de: {
      title: "Leistenschmerz nahe am Schambein, der mit jedem Lauf zunimmt",
      desc: "Sitzt tief in der Leiste oder an der Oberschenkelinnenseite, nahe dem Ansatz der Adduktoren am Becken, und der Knochen dort ist oft druckempfindlich. Es kann sich wie eine Leistenzerrung anfühlen, setzt aber mit jedem Lauf früher ein, Stehen oder Hüpfen auf dem Bein tut weh, und es kann auch in Ruhe oder nachts schmerzen.",
      name: "Knochenstressverletzung am Schambeinast (Ermüdungsbruch am Schambein)",
      about:
        "Dieses Muster kann auf eine Knochenstressverletzung am unteren Schambeinast hindeuten, dort, wo die Adduktoren ziehen. Sie ist selten, wurde vor allem bei Läuferinnen auf langen Strecken beschrieben, wird leicht für eine Leistenzerrung gehalten und auf dem ersten Röntgenbild oft übersehen, deshalb braucht es manchmal ein MRT oder eine Knochenszintigrafie. Sie heilt meist gut, wenn du mit dem Laufen pausierst, bis der Schmerz weg ist, und danach schrittweise wieder einsteigst.",
      meanwhile:
        "Hör sofort mit Laufen und Hüpfen auf und lass es in den nächsten Tagen ärztlich abklären. Geh nur so viel, wie es angenehm ist, und nimm Unterarmgehstützen, wenn Gehen wehtut oder du hinkst. Kannst du das Bein nicht belasten oder wird der Schmerz plötzlich viel stärker, lass es heute noch abklären. Erzähl bei der Untersuchung von kürzlichen Trainingssteigerungen, früheren Stressverletzungen, zu knapper Ernährung oder ausbleibender Periode.",
      avoid:
        "Lass Dehnungen der Leiste und Kräftigungsübungen für die Oberschenkelinnenseite weg, bis der Knochen ärztlich abgeklärt ist.",
    },
    exits: [
      {
        to: "hip-bsi-refer",
        en: "Does the ache sit deep in the front of the hip rather than low near the pubic bone?",
        de: "Sitzt der Schmerz eher tief vorn in der Hüfte als unten am Schambein?",
      },
    ],
    warn: ["fuel"],
    rtr: "bone",
    sources: ["pavlov1982", "hoenig2023", "warden2014", "mountjoy2023"],
  },
  {
    id: "osteitis-pubis-refer",
    kind: "refer",
    urgency: "soon",
    en: {
      title: "Ache right on the pubic bone, often spreading into both groins",
      desc: "The bony front of the pelvis, in the middle just above the genitals, is tender to press. It builds over weeks, flares with running, sprinting, kicking, sit-ups and getting out of bed or a car, and can spread into both groins or inner thighs.",
      name: "Pubic-related groin pain (osteitis pubis)",
      about:
        "This pattern points to the pubic bones and the joint between them at the front of the pelvis, which can get irritated by the repeated pull of the tummy and inner-thigh muscles. At home it can't be told apart from a stress fracture of the pubic bone, so it needs a doctor's check, often with an MRI. Treatment is usually a gradual rehab programme guided by a physio, although good studies are lacking and recovery is often slow.",
      meanwhile:
        "Stop running, kicking and sprinting, and see a doctor within the next few days. Walking, cycling and swimming are fine if they don't hurt. If you have a fever or chills or feel unwell, see a doctor today, because a rare infection of the pubic bone can cause similar pain.",
      avoid:
        "Skip sit-ups, groin stretches and Copenhagen adduction until a doctor has checked the bone.",
    },
    de: {
      title: "Schmerz direkt am Schambein, oft in beide Leisten ausstrahlend",
      desc: "Die knöcherne Vorderseite des Beckens, mittig direkt über dem Genitalbereich, ist druckempfindlich. Der Schmerz baut sich über Wochen auf, wird beim Laufen, bei Sprints, Schussbewegungen und Sit-ups sowie beim Aufstehen aus dem Bett oder Aussteigen aus dem Auto stärker und kann in beide Leisten oder Oberschenkelinnenseiten ausstrahlen.",
      name: "Schambeinbezogener Leistenschmerz (Osteitis pubis, Schambeinentzündung)",
      about:
        "Dieses Muster weist auf die Schambeine und ihre Verbindung vorn am Becken hin, die durch den wiederholten Zug von Bauch- und Adduktorenmuskeln gereizt werden können. Zu Hause lässt sich das nicht von einem Ermüdungsbruch am Schambein unterscheiden, deshalb gehört es ärztlich abgeklärt, oft mit einem MRT. Behandelt wird meist mit einem schrittweisen Reha-Programm unter physiotherapeutischer Anleitung, auch wenn gute Studien fehlen und die Heilung oft langsam verläuft.",
      meanwhile:
        "Hör mit Laufen, Sprints und Schussbewegungen auf und lass es in den nächsten Tagen ärztlich abklären. Gehen, Radfahren und Schwimmen sind in Ordnung, solange sie nicht wehtun. Hast du Fieber oder Schüttelfrost oder fühlst du dich krank, lass es heute noch ärztlich abklären, denn eine seltene Infektion des Schambeins kann ähnliche Schmerzen machen.",
      avoid:
        "Lass Sit-ups, Leistendehnungen und die Copenhagen-Adduktion weg, bis der Knochen ärztlich abgeklärt ist.",
    },
    exits: [
      {
        to: "pubic-ramus-bsi-refer",
        en: "Does it ache at rest or at night, or does hopping on that leg hurt?",
        de: "Schmerzt es in Ruhe oder nachts, oder tut Hüpfen auf dem Bein weh?",
      },
    ],
    sources: ["weir2015", "choi2011", "pavlov1982"],
  },
  {
    id: "hamstring-avulsion-refer",
    kind: "refer",
    urgency: "soon",
    en: {
      title:
        "Sudden pop at the sit bone, then bruising down the back of the thigh",
      desc: "Started with a sharp pop high at the back of the thigh during a sprint, a slip or a forced split. Walking and sitting are hard, and a large bruise often spreads down the thigh within a day or two.",
      name: "Proximal hamstring avulsion (hamstring tendons torn off the sit bone)",
      about:
        "This pattern can mean the hamstring tendons have torn away from the sit bone, which is a different injury from a strain in the muscle. Depending on how far the tendons have pulled away, a surgeon may suggest repairing them, and in reviews, repair within about 4–6 weeks has been linked to fewer re-tears and other problems, such as nerve symptoms, than later repair. In one review, 77% of people were back at their previous level of sport after surgery, on average about 6 months later.",
      meanwhile:
        "Stop running and see a doctor within days, not weeks, and ask whether you need a scan and a specialist's opinion. Walk only as much as you need to, use crutches if walking hurts, and sit on a cushion so you're not pressing on the sit bone. Mention straight away any numbness, tingling or weakness in the leg or foot.",
      avoid:
        "Skip stretching, massage and heat on the back of the thigh until it has been checked.",
    },
    de: {
      title:
        "Plötzlicher Knall am Sitzbein, dann Bluterguss hinten am Oberschenkel",
      desc: "Begann mit einem scharfen Knall hoch hinten am Oberschenkel, beim Sprint, beim Ausrutschen oder bei einem unfreiwilligen Spagat. Gehen und Sitzen fallen schwer, und oft breitet sich innerhalb von ein, zwei Tagen ein großer Bluterguss am Oberschenkel nach unten aus.",
      name: "Proximaler Hamstring-Abriss (Sehnenausriss am Sitzbeinhöcker)",
      about:
        "Dieses Muster kann bedeuten, dass die hinteren Oberschenkelsehnen vom Sitzbein abgerissen sind, was eine andere Verletzung ist als eine Zerrung im Muskel. Je nachdem, wie weit sich die Sehnen zurückgezogen haben, kann eine Operation sinnvoll sein, und in Übersichtsarbeiten ging eine Operation innerhalb von etwa 4–6 Wochen mit weniger erneuten Rissen und anderen Problemen wie Nervenbeschwerden einher als eine spätere. In einer Übersichtsarbeit erreichten 77 % nach der Operation wieder ihr früheres sportliches Niveau, im Schnitt nach etwa 6 Monaten.",
      meanwhile:
        "Hör mit dem Laufen auf, lass es innerhalb von Tagen, nicht Wochen, ärztlich abklären und frag nach Bildgebung und einer fachärztlichen Einschätzung. Geh nur so viel wie nötig, nimm Unterarmgehstützen, wenn Gehen wehtut, und setz dich auf ein Kissen, damit kein Druck auf das Sitzbein kommt. Sprich Taubheit, Kribbeln oder Schwäche in Bein oder Fuß sofort an.",
      avoid:
        "Verzichte auf Dehnen, Massage und Wärme am hinteren Oberschenkel, bis es abgeklärt ist.",
    },
    exits: [
      {
        to: "apophyseal-avulsion-refer",
        en: "Are you under 18? In teens, a pop at the sit bone can tear off a piece of growing bone.",
        de: "Bist du unter 18? Bei Jugendlichen kann ein Knall am Sitzbein ein Stück wachsenden Knochen abreißen.",
      },
    ],
    sources: ["coughlin2020", "akhtar2026", "harris2011"],
  },
  {
    id: "apophyseal-avulsion-refer",
    kind: "refer",
    urgency: "today",
    youth: true,
    en: {
      title: "Sudden pop at a bony point of the hip during a sprint or kick",
      desc: "You're under 18 and felt a sharp pop at the front of the hip, on the bony point at the front of the pelvis or at the sit bone while sprinting, kicking or jumping. Now walking, lifting the leg or sitting hurts, and one bony spot is sore to press.",
      name: "Pelvic apophyseal avulsion fracture (growth zone pulled off by a muscle)",
      about:
        "While you're still growing, the spots where big muscles attach to the pelvis are growth zones that are weaker than the tendons pulling on them. A sudden hard pull can tear off a small piece of bone there, most often just below the bony point at the front of the pelvis, at the sit bone or at that bony point itself. Many heal with rest and a careful rebuild, but a piece that has moved far may need an operation, so it needs an X-ray.",
      meanwhile:
        "Stop sport and get it seen today with a parent, especially if you can't walk normally. Use crutches if walking hurts, and don't stretch, run or test the leg until an X-ray has checked the bone.",
    },
    de: {
      title: "Plötzlicher Knall am Becken beim Sprint, Schuss oder Sprung",
      desc: "Du bist unter 18 und hast beim Sprinten, bei einem Schuss oder beim Springen einen scharfen Knall vorn an der Hüfte, am vorstehenden Beckenknochen vorn oder am Sitzbein gespürt. Jetzt tun Gehen, Beinanheben oder Sitzen weh, und eine Knochenstelle ist druckempfindlich.",
      name: "Apophysenausriss am Becken (Ausrissfraktur an einer Wachstumszone)",
      about:
        "Solange du wächst, sind die Stellen, an denen große Muskeln am Becken ansetzen, Wachstumszonen, die schwächer sind als die Sehnen, die an ihnen ziehen. Ein plötzlicher, kräftiger Zug kann dort ein kleines Knochenstück abreißen, am häufigsten knapp unter dem vorstehenden Beckenknochen vorn, am Sitzbein oder an diesem Knochenvorsprung selbst. Viele heilen mit Schonung und vorsichtigem Aufbau, ein weit verschobenes Stück kann aber eine Operation brauchen, deshalb ist ein Röntgenbild nötig.",
      meanwhile:
        "Hör mit dem Sport auf und lass es heute noch zusammen mit einem Elternteil abklären, vor allem wenn du nicht normal gehen kannst. Nimm Unterarmgehstützen, wenn Gehen wehtut, und dehne, lauf oder teste das Bein nicht, bis ein Röntgenbild den Knochen geprüft hat.",
    },
    sources: ["eberbach2017", "vadhera2022"],
  },
  {
    id: "scfe-refer",
    kind: "refer",
    urgency: "today",
    youth: true,
    en: {
      title: "Limp with groin, thigh or knee pain for more than a week",
      desc: "You're under 18 and have been limping, or had an ache in the groin, the thigh or only the knee, for more than a week, usually without a clear injury. It can come and go, and you may still be able to walk and run on it.",
      name: "Slipped capital femoral epiphysis (SCFE, slipped growth plate at the hip)",
      about:
        "In growing teenagers, often between about 10 and 16, the ball at the top of the thigh bone can slip on its growth plate. The pain often shows up in the thigh or knee rather than the hip, so it's easily missed: in one review of 102 young patients, the diagnosis seemed to have been missed in primary care in about half. Found early, it can be treated before the slip gets worse, and X-rays of the hips are the key test, even if only the knee hurts.",
      meanwhile:
        "Stop running and sport and get seen today with a parent. Keep weight off the leg as much as you can, with crutches if you have them, until a doctor has checked it, and ask for X-rays of the hips even if only your knee hurts. If you suddenly can't put weight on the leg at all, go to an emergency department now.",
    },
    de: {
      title:
        "Hinken, Leisten-, Oberschenkel- oder Knieschmerz seit über einer Woche",
      desc: "Du bist unter 18 und hinkst seit mehr als einer Woche oder hast so lange Schmerzen in Leiste, Oberschenkel oder nur im Knie, meist ohne klare Verletzung. Die Beschwerden können kommen und gehen, und vielleicht kannst du trotzdem noch gehen und laufen.",
      name: "Epiphyseolysis capitis femoris (Hüftkopfgleiten bei Jugendlichen)",
      about:
        "Bei Jugendlichen im Wachstum, oft zwischen etwa 10 und 16, kann der Hüftkopf oben am Oberschenkelknochen auf seiner Wachstumsfuge abrutschen. Der Schmerz zeigt sich oft im Oberschenkel oder Knie statt in der Hüfte und wird deshalb leicht übersehen: In einer Auswertung von 102 jungen Betroffenen war die Diagnose bei etwa der Hälfte in der Haus- oder Kinderarztpraxis offenbar zunächst übersehen worden. Früh erkannt lässt es sich behandeln, bevor es weiter abrutscht, und Röntgenbilder der Hüften sind die entscheidende Untersuchung, auch wenn nur das Knie wehtut.",
      meanwhile:
        "Hör mit Laufen und Sport auf und lass es heute noch zusammen mit einem Elternteil abklären. Belaste das Bein bis zur Untersuchung so wenig wie möglich, am besten mit Unterarmgehstützen, und bitte um Röntgenbilder der Hüften, auch wenn nur das Knie wehtut. Kannst du das Bein plötzlich gar nicht mehr belasten, geh sofort in die Notaufnahme.",
    },
    sources: ["green2005", "pavone2023"],
  },
  {
    id: "hip-oa",
    kind: "plan",
    en: {
      title:
        "Stiff, achy hip or groin after rest, with diagnosed hip arthritis",
      desc: "Stiff for a short while after sitting or first thing in the morning, and putting on socks or cutting your toenails is harder than it was. The ache builds on long runs and eases with gentle movement. This card is for hip arthritis a doctor or physio has already diagnosed.",
      name: "Hip osteoarthritis (hip arthritis)",
      about:
        "With hip arthritis, the cartilage and the tissues around the joint change, and the hip gets stiffer and less tolerant of sudden jumps in load. Recreational running isn't linked to more hip or knee arthritis, and exercise is the first treatment guidelines recommend. Regular strength work for the hip and thigh, for example two or three times a week for at least 2–3 months, often eases pain and stiffness.",
      load: "Running isn't off limits, but there's little research on how best to run with hip arthritis, so let the pain rule guide you. Choose softer, even surfaces, split one long run into two shorter ones on different days, and shorten the next run by about a third if the hip is stiffer or sorer the next morning.",
      avoid:
        "Skip deep squats and lunges that pinch at the front of the hip while it's flaring.",
    },
    de: {
      title:
        "Steife, schmerzende Hüfte oder Leiste nach Ruhe, bei bekannter Hüftarthrose",
      desc: "Nach dem Sitzen oder morgens eine Weile steif, und Socken anziehen oder Fußnägel schneiden fällt schwerer als früher. Der Schmerz nimmt bei langen Läufen zu und lässt bei sanfter Bewegung nach. Diese Karte ist für eine Hüftarthrose, die ärztlich oder physiotherapeutisch bereits festgestellt wurde.",
      name: "Hüftarthrose (Coxarthrose)",
      about:
        "Bei einer Hüftarthrose verändern sich der Knorpel und das Gewebe rund um das Gelenk, und die Hüfte wird steifer und verträgt plötzliche Belastungssprünge schlechter. Freizeitlaufen geht nicht mit mehr Hüft- oder Kniearthrose einher, und Bewegungstherapie ist die erste Behandlung, die Leitlinien empfehlen. Regelmäßiges Krafttraining für Hüfte und Oberschenkel, zum Beispiel zwei- bis dreimal pro Woche über mindestens 2–3 Monate, lindert Schmerz und Steifigkeit oft.",
      load: "Laufen ist nicht verboten, aber es gibt kaum Forschung dazu, wie man mit Hüftarthrose am besten läuft, also richte dich nach der Schmerzregel. Wähle weichen, ebenen Untergrund, teile einen langen Lauf in zwei kürzere an verschiedenen Tagen auf und kürze den nächsten Lauf um etwa ein Drittel, wenn die Hüfte am nächsten Morgen steifer ist oder mehr schmerzt.",
      avoid:
        "Lass tiefe Kniebeugen und Ausfallschritte, die vorn in der Hüfte zwicken, weg, solange sie gereizt ist.",
    },
    local: [
      "glute-bridge",
      "side-abduction",
      "single-leg-sit-to-stand",
      "step-up",
    ],
    chain: [
      [
        "hipabd",
        3,
        {
          en: "People with hip arthritis often have weaker side-hip muscles. Stronger ones help hold the pelvis steady over the standing leg on every landing, which can take some strain off the joint.",
          de: "Bei Hüftarthrose sind die seitlichen Hüftmuskeln oft schwächer. Kräftigere halten das Becken bei jeder Landung stabiler über dem Standbein, was das Gelenk etwas entlasten kann.",
        },
      ],
      ["glutes", 2],
      ["quads", 2],
    ],
    exits: [
      {
        to: "hip-joint-refer",
        en: "Is this your first bout of hip pain and no one has examined it, or does the hip catch or lock?",
        de: "Ist das dein erster Hüftschmerz, den noch niemand untersucht hat, oder hakt oder blockiert die Hüfte?",
      },
      {
        to: "hip-bsi-refer",
        en: "Is this a new ache that builds with every run, or has hopping on that leg started to hurt?",
        de: "Ist das ein neuer Schmerz, der mit jedem Lauf stärker wird, oder tut Hüpfen auf dem Bein neuerdings weh?",
      },
    ],
    sources: ["nice2022", "holden2023", "alentorngeli2017"],
  },
  {
    id: "inguinal-groin",
    kind: "plan",
    en: {
      title: "Ache just above the groin crease, worse with sit-ups or coughing",
      desc: "Sits just above the groin fold, usually on one side, and flares with sprinting, sudden turns, sit-ups, coughing or sneezing. There's no lump, and neither the pubic bone itself nor the inner-thigh muscle is the sorest spot to press.",
      name: "Inguinal-related groin pain (sports hernia, inguinal disruption)",
      about:
        "The muscles and tendons of the lower tummy wall are overloaded where they attach around the groin, and despite the name sports hernia there's no true hernia. Trunk and inner-thigh strength work over 3–6 months is the usual first step, although good studies on which exercises work best are lacking. If that hasn't helped, a sports doctor or surgeon can discuss other options.",
      load: "Easy runs on flat ground are usually fine within the pain rule. Drop sprints, hills and sharp turns for now, and bring speed back gradually once coughing, sneezing and getting out of bed no longer hurt.",
      avoid:
        "Skip sit-ups and crunches for now. See a doctor if you notice a lump or bulge in the groin.",
    },
    de: {
      title:
        "Schmerz knapp über der Leistenfalte, schlimmer bei Sit-ups oder Husten",
      desc: "Sitzt knapp über der Leistenfalte, meist einseitig, und verstärkt sich bei Sprints, schnellen Richtungswechseln, Sit-ups, Husten oder Niesen. Es ist keine Beule tastbar, und am druckempfindlichsten sind weder das Schambein selbst noch der Muskel an der Oberschenkelinnenseite.",
      name: "Leistenkanalbezogener Leistenschmerz (Sportlerleiste, weiche Leiste)",
      about:
        "Muskeln und Sehnen der unteren Bauchwand sind dort überlastet, wo sie rund um die Leiste ansetzen, und trotz des Begriffs Sportlerhernie liegt kein echter Leistenbruch vor. Krafttraining für Rumpf und Oberschenkelinnenseite über 3–6 Monate ist der übliche erste Schritt, auch wenn gute Studien dazu fehlen, welche Übungen am besten wirken. Hilft das nicht, kannst du in einer sportmedizinischen oder chirurgischen Sprechstunde über andere Möglichkeiten sprechen.",
      load: "Lockere Läufe auf flachem Untergrund sind innerhalb der Schmerzregel meist in Ordnung. Sprints, Hügel und scharfe Richtungswechsel vorerst weglassen und das Tempo schrittweise zurückholen, wenn Husten, Niesen und Aufstehen aus dem Bett nicht mehr wehtun.",
      avoid:
        "Lass Sit-ups und Crunches vorerst weg. Lass eine Beule oder Vorwölbung in der Leiste ärztlich abklären.",
    },
    local: [
      "adductor-squeeze",
      "dead-bug",
      "side-plank",
      "copenhagen-adduction",
    ],
    later: ["copenhagen-adduction"],
    warn: ["hernia"],
    chain: [
      [
        "trunk",
        3,
        {
          en: "Your lower tummy muscles anchor around the groin. When your trunk can't steady the pelvis, they take more strain on every stride, sprint and turn.",
          de: "Die unteren Bauchmuskeln setzen rund um die Leiste an. Kann der Rumpf das Becken nicht stabil halten, bekommen sie bei jedem Schritt, Sprint und Richtungswechsel mehr Zug ab.",
        },
      ],
      [
        "adductors",
        2,
        {
          en: "The inner-thigh muscles pull on the same area from below. Rehab programmes for longstanding groin pain train them together with the trunk.",
          de: "Die Adduktoren ziehen von unten am selben Bereich. Reha-Programme für länger bestehende Leistenschmerzen trainieren sie zusammen mit dem Rumpf.",
        },
      ],
    ],
    exits: [
      {
        to: "osteitis-pubis-refer",
        en: "Is the bony front of your pelvis tender to press, in the middle just above the genitals?",
        de: "Ist die knöcherne Vorderseite des Beckens mittig über dem Genitalbereich druckempfindlich?",
      },
      {
        to: "pubic-ramus-bsi-refer",
        en: "Does it ache at rest or at night, or does standing or hopping on that leg hurt?",
        de: "Schmerzt es in Ruhe oder nachts, oder tut Stehen oder Hüpfen auf dem Bein weh?",
      },
      {
        to: "scfe-refer",
        en: "Are you under 18, with a limp or with groin, thigh or knee pain for over a week?",
        de: "Bist du unter 18, mit Hinken oder Leisten-, Oberschenkel- oder Knieschmerzen seit über einer Woche?",
      },
    ],
    sources: ["weir2015", "sheen2014", "holmich1999"],
  },
  {
    id: "snapping-hip",
    kind: "plan",
    en: {
      title: "Snapping or clunking at the front or outside of the hip",
      desc: "You feel or hear a snap deep in the groin as you lift or lower your leg, or over the bony point on the outside of the hip as you run or climb stairs. It's often painless, and the hip doesn't catch, lock or give way.",
      name: "Snapping hip syndrome (coxa saltans)",
      about:
        "A tendon flicks over a bony bump as the hip moves: at the front it's usually the deep hip flexor tendon, on the outside the thick band of tissue over the hip bone. Snapping that doesn't hurt is harmless and needs no treatment. When it aches, easing off the moves that set it off and building hip strength usually help, and most painful cases settle within 6–12 months.",
      load: "Keep running within the pain rule. For now, cut back on hills, high-knee drills and anything else that sets off a painful snap, and bring them back gradually.",
      avoid:
        "Skip making the hip snap on purpose to check on it, and keep each exercise within a range that doesn't set off a painful snap.",
    },
    de: {
      title: "Schnappen oder Klacken vorn oder außen an der Hüfte",
      desc: "Du spürst oder hörst ein Schnappen tief in der Leiste, wenn du das Bein hebst oder senkst, oder über dem Knochenvorsprung außen an der Hüfte beim Laufen oder Treppensteigen. Oft tut es nicht weh, und die Hüfte hakt nicht, blockiert nicht und knickt nicht weg.",
      name: "Schnappende Hüfte (Coxa saltans)",
      about:
        "Eine Sehne springt bei Hüftbewegungen über einen Knochenvorsprung: vorn meist die Sehne des tiefen Hüftbeugers, außen der kräftige Bindegewebsstreifen über dem Hüftknochen. Schmerzloses Schnappen ist harmlos und braucht keine Behandlung. Tut es weh, hilft es meist, die auslösenden Bewegungen zu reduzieren und die Hüfte zu kräftigen, und die meisten schmerzhaften Fälle beruhigen sich innerhalb von 6–12 Monaten.",
      load: "Lauf innerhalb der Schmerzregel weiter. Hügel, Kniehebeläufe und alles andere, was ein schmerzhaftes Schnappen auslöst, vorerst reduzieren und schrittweise zurückholen.",
      avoid:
        "Lass die Hüfte nicht absichtlich schnappen, um es zu testen, und halte jede Übung in einem Bewegungsumfang, der kein schmerzhaftes Schnappen auslöst.",
    },
    local: [
      "hip-flexor-hold",
      "side-abduction",
      "banded-knee-drive",
      "side-plank",
    ],
    chain: [
      [
        "hipabd",
        2,
        {
          en: "For snapping on the outside: when the side-hip muscles tire, the thigh drops inward and pulls the band tighter over the bony point.",
          de: "Bei Schnappen außen: Ermüden die seitlichen Hüftmuskeln, sinkt der Oberschenkel nach innen und zieht den Streifen straffer über den Knochenvorsprung.",
        },
      ],
      [
        "hipflex",
        2,
        {
          en: "For snapping at the front: stiff hip flexors may make the tendon flick harder. Stretch only to a mild pull, and stop if the stretch itself makes the hip snap.",
          de: "Bei Schnappen vorn: Steife Hüftbeuger können die Sehne stärker springen lassen. Dehne nur bis zu einem leichten Ziehen und hör auf, wenn die Dehnung selbst das Schnappen auslöst.",
        },
      ],
      ["trunk", 1],
    ],
    exits: [
      {
        to: "hip-joint-refer",
        en: "Does the hip catch, lock or give way, or do you feel a sharp pinch deep in the groin?",
        de: "Hakt, blockiert oder knickt die Hüfte weg, oder spürst du ein scharfes Zwicken tief in der Leiste?",
      },
    ],
    sources: ["walker2021", "griffin2016"],
  },
  {
    id: "pelvic-floor",
    kind: "plan",
    en: {
      title: "Leaking urine or a heavy, dragging feeling low down when you run",
      desc: "A few drops or more leak when you run, jump, cough or sneeze, or your pelvis feels heavy or dragging during or after runs, often more so late in a long run. If you've recently had a baby, the card on running after birth fits better.",
      name: "Stress urinary incontinence or pelvic floor dysfunction (bladder leakage when running)",
      about:
        "The muscles that close off the bladder and support the pelvic organs may not hold up fully against the repeated impact of running. It's very common, especially in women who run, and it isn't something you just have to live with. Pelvic floor muscle training is the first treatment to try, and a pelvic health physio can check how your muscles work, often with an internal exam, and tailor a programme to you.",
      load: "You don't need to stop running. Shorter runs, an easier pace and fewer steep downhills may reduce leaking while you train your pelvic floor, and you can build back up as control improves.",
      avoid:
        "Skip heavy lifting and jumping that bring on leaking or a dragging feeling, and see a doctor if you feel a bulge, have pelvic pain or notice blood in your urine.",
    },
    de: {
      title: "Urinverlust oder Schwere- und Druckgefühl im Becken beim Laufen",
      desc: "Beim Laufen, Springen, Husten oder Niesen gehen ein paar Tropfen oder mehr Urin ab, oder das Becken fühlt sich während oder nach dem Laufen schwer oder nach unten gezogen an, oft gegen Ende langer Läufe. Hast du vor Kurzem ein Kind bekommen, passt die Karte zum Laufen nach der Geburt besser.",
      name: "Belastungsinkontinenz oder Beckenbodendysfunktion (Blasenschwäche beim Laufen)",
      about:
        "Die Muskeln, die die Blase verschließen und die Beckenorgane stützen, halten den wiederholten Stößen beim Laufen womöglich nicht ganz stand. Das ist sehr häufig, vor allem bei Läuferinnen, und nichts, womit du dich abfinden musst. Beckenbodentraining ist die Behandlung der ersten Wahl, und in einer auf den Beckenboden spezialisierten Physiotherapie lässt sich prüfen, wie deine Muskeln arbeiten, oft mit einer inneren Untersuchung, und ein Programm auf dich abstimmen.",
      load: "Du musst nicht mit dem Laufen aufhören. Kürzere Läufe, ein lockereres Tempo und weniger steile Bergabpassagen können den Urinverlust verringern, während du den Beckenboden trainierst, und mit besserer Kontrolle kannst du wieder steigern.",
      avoid:
        "Lass schweres Heben und Sprünge weg, die Urinverlust oder ein Druckgefühl auslösen, und lass dich ärztlich untersuchen, wenn du eine Vorwölbung spürst, Schmerzen im Becken hast oder Blut im Urin bemerkst.",
    },
    local: ["pelvic-floor-training"],
    chain: [],
    rtr: "none",
    warn: ["leak"],
    sources: ["goldstick2014", "dumoulin2018"],
  },
  {
    id: "postpartum-return",
    kind: "plan",
    en: {
      title: "Getting back to running after having a baby",
      desc: "For the months after a vaginal birth or a caesarean, with or without symptoms. Leaking, a heavy or dragging feeling, or pain during the checks or your first runs are signs to see a pelvic health physio first.",
      name: "Postnatal return to running",
      about:
        "Pregnancy and birth change your pelvic floor, tummy muscles and strength, so starting too soon can bring on leaking, heaviness or pain. A 2019 UK guideline advises a pelvic health check for everyone, ideally around 6 weeks after birth. It suggests a graded start from about 12 weeks once you can do 20 single-leg calf raises, single-leg bridges, single-leg sit-to-stands and side-lying leg raises per side, jog on the spot for a minute and hop 10 times on each leg, all without symptoms. These targets are expert advice rather than tested cut-offs, and a 2024 expert consensus favours an individual timeline over a fixed date.",
      load: "Walk, and do the strength and pelvic floor work first. Once the checks feel easy, start with short walk-run sessions on alternate days, raise time before pace, and drop back a step if leaking, heaviness or pain appears.",
      avoid:
        "Skip running and jumping while they bring on leaking, heaviness or pain, and get it checked by a pelvic health physio.",
    },
    de: {
      title: "Nach der Geburt wieder mit dem Laufen anfangen",
      desc: "Für die Monate nach einer vaginalen Geburt oder einem Kaiserschnitt, mit oder ohne Beschwerden. Urinverlust, ein Schwere- oder Druckgefühl oder Schmerzen bei den Tests oder den ersten Läufen sind ein Zeichen, zuerst eine Beckenboden-Physiotherapie aufzusuchen.",
      name: "Wiedereinstieg ins Laufen nach der Geburt (postpartal)",
      about:
        "Schwangerschaft und Geburt verändern Beckenboden, Bauchmuskeln und Kraft, deshalb kann ein zu früher Start Urinverlust, ein Schweregefühl oder Schmerzen auslösen. Eine britische Leitlinie von 2019 empfiehlt allen eine Untersuchung des Beckenbodens, idealerweise etwa 6 Wochen nach der Geburt. Sie rät zu einem schrittweisen Einstieg ab etwa 12 Wochen, sobald du pro Seite je 20 Wiederholungen einbeiniges Wadenheben, einbeinige Brücke, einbeiniges Aufstehen vom Stuhl und seitliches Beinheben schaffst, eine Minute auf der Stelle joggen und 10-mal auf jedem Bein hüpfen kannst, alles ohne Beschwerden. Diese Werte sind Expertenempfehlungen und keine geprüften Grenzwerte, und ein Expertenkonsens von 2024 setzt eher auf einen individuellen Zeitplan als auf ein festes Datum.",
      load: "Erst gehen und Kraft- sowie Beckenbodentraining machen. Wenn die Tests leichtfallen, mit kurzen Geh-Lauf-Einheiten an jedem zweiten Tag beginnen, erst die Dauer, dann das Tempo steigern und einen Schritt zurückgehen, wenn Urinverlust, Schweregefühl oder Schmerzen auftreten.",
      avoid:
        "Lass Laufen und Springen weg, solange sie Urinverlust, ein Schweregefühl oder Schmerzen auslösen, und lass es in einer Beckenboden-Physiotherapie abklären.",
    },
    local: ["pelvic-floor-training", "single-leg-sit-to-stand"],
    chain: [
      [
        "glutes",
        3,
        {
          en: "The postnatal guideline asks for 20 single-leg bridges on each side before you run, so aim for 20 clean reps per side here.",
          de: "Die Leitlinie für den Wiedereinstieg nach der Geburt verlangt vor dem Laufen 20 einbeinige Brücken pro Seite, peil hier also 20 saubere Wiederholungen pro Seite an.",
        },
      ],
      [
        "hipabd",
        3,
        {
          en: "The guideline checks these muscles with 20 side-lying leg raises per side. Even if the mirror squat looks fine, make sure you can do 20 clean raises on each side before you run.",
          de: "Die Leitlinie prüft diese Muskeln mit 20 Beinhebungen im Seitliegen pro Seite. Auch wenn die Kniebeuge vor dem Spiegel gut aussieht, solltest du vor dem Laufen 20 saubere Wiederholungen pro Seite schaffen.",
        },
      ],
      [
        "quads",
        3,
        {
          en: "The guideline asks for 20 single-leg sit-to-stands on each side, so aim for 20 clean reps per side before you run.",
          de: "Die Leitlinie verlangt 20-mal einbeiniges Aufstehen vom Stuhl pro Seite, peil also vor dem Laufen 20 saubere Wiederholungen pro Seite an.",
        },
      ],
      [
        "calf",
        3,
        {
          en: "The guideline asks for 20 single-leg calf raises on each side. Your calves absorb a large share of every landing.",
          de: "Die Leitlinie verlangt 20-mal einbeiniges Wadenheben pro Seite. Die Waden fangen einen großen Teil jeder Landung ab.",
        },
      ],
    ],
    rtr: "postpartum",
    sources: ["goom2019", "christopher2024", "goldstick2014"],
  },
];
