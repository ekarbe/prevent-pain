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
          en: "Stiff hip flexors are pulled long under load at the back of every stride. If this tests stiff, wait with the couch stretch until lifting your knee against resistance no longer hurts, usually 1–2 weeks or more. Then start gently, only to a mild pull.",
          de: "Steife Hüftbeuger werden am Ende jedes Schritts unter Last in die Länge gezogen. Fällt der Test steif aus, warte mit dem Couch Stretch, bis das Knieanheben gegen Widerstand nicht mehr wehtut, meist 1–2 Wochen oder länger. Dann sanft beginnen, nur bis zu einem leichten Ziehen.",
        },
      ],
      ["stride", 1],
    ],
    later: ["couch-stretch"],
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
        "This pattern can come from the hip joint itself. The ball and socket can pinch at the rim when the hip bends far (impingement), and the ring of cartilage around the socket (labrum) can get irritated or torn. A physio or sports doctor can usually tell with a few tests, sometimes plus imaging, and a structured exercise programme of at least 3 months is the usual first step.",
      meanwhile:
        "Avoid what brings on the pinch: deep squats, low seats, crossing your legs and twisting on that leg. Easy runs on flat ground are usually fine if they don't provoke it. If the ache builds with every run or hopping on that leg hurts, stop running and see a doctor today.",
    },
    de: {
      title: "Tiefes Zwicken in der Leiste bei tiefer Hocke oder langem Sitzen",
      desc: "Zwickt, wenn du die Hüfte stark beugst, etwa in der tiefen Hocke, beim Anziehen der Socken oder beim Aussteigen aus dem Auto, und schmerzt nach langem Sitzen. Klicken, Hängenbleiben oder das Gefühl, dass die Hüfte blockiert, können dazukommen.",
      name: "Femoroazetabuläres Impingement oder Labrumläsion (Hüftimpingement)",
      about:
        "Dieses Muster kann vom Hüftgelenk selbst kommen. Kopf und Pfanne können am Rand aneinanderstoßen, wenn die Hüfte stark gebeugt wird (Impingement), und der Knorpelring um die Pfanne (Labrum) kann gereizt oder eingerissen sein. In der Physiotherapie oder sportmedizinischen Praxis lässt sich das meist mit ein paar Tests klären, manchmal mit Bildgebung, und ein gezieltes Übungsprogramm über mindestens 3 Monate ist in der Regel der erste Schritt.",
      meanwhile:
        "Meide, was das Zwicken auslöst: tiefe Hocke, niedrige Sitze, übereinandergeschlagene Beine und Drehen auf dem Standbein. Lockere Läufe in der Ebene sind meist in Ordnung, solange sie es nicht auslösen. Nimmt der Schmerz mit jedem Lauf zu oder tut Hüpfen auf dem Bein weh, hör mit dem Laufen auf und lass es heute noch ärztlich abklären.",
    },
    sources: ["griffin2016", "kemp2020", "enseki2023"],
  },
  {
    id: "hip-bsi-refer",
    kind: "refer",
    urgency: "today",
    en: {
      title:
        "Deep ache in the groin or front of the hip that builds with every run",
      desc: "Often starts after a jump in training. It comes on earlier and lingers longer with each run, hopping on that leg hurts, and it can ache at night or at rest.",
      name: "Femoral neck bone stress injury (stress fracture)",
      about:
        "This pattern can mean a bone stress injury in the neck of the thigh bone, just below the ball of the hip joint. It's uncommon, but it's one of the few spots where a stress injury can become a full break if you keep running, so it needs checking quickly. Caught early, most runners heal well, though X-rays often look normal at first and an MRI is usually needed to see it.",
      meanwhile:
        "Stop running and hopping now. Walk only as much as you need to, and if walking hurts or makes you limp, keep weight off that leg until you've been seen, with crutches if you have them. If you can't put weight on the leg at all, or the pain suddenly gets much worse, go to an emergency department now. Tell the doctor about any recent jump in training, earlier stress injuries, eating too little or missed periods.",
    },
    de: {
      title: "Tiefer Schmerz in Leiste oder Hüfte, der mit jedem Lauf zunimmt",
      desc: "Beginnt oft nach einer Trainingssteigerung. Setzt mit jedem Lauf früher ein und hält länger an, Hüpfen auf dem Bein tut weh, und auch nachts oder in Ruhe kann es schmerzen.",
      name: "Knochenstressverletzung am Schenkelhals (Ermüdungsbruch)",
      about:
        "Dieses Muster kann auf eine Knochenstressverletzung am Schenkelhals hindeuten, direkt unterhalb des Hüftkopfs. Sie ist selten, aber an dieser Stelle kann daraus ein vollständiger Bruch werden, wenn du weiterläufst, deshalb muss sie schnell abgeklärt werden. Früh erkannt heilt sie bei den meisten Laufenden gut, auch wenn das Röntgenbild anfangs oft unauffällig ist und erst ein MRT sie zeigt.",
      meanwhile:
        "Hör sofort mit Laufen und Hüpfen auf. Geh nur so viel wie nötig, und wenn Gehen wehtut oder du hinkst, belaste das Bein bis zur Untersuchung nicht, am besten mit Unterarmgehstützen. Kannst du das Bein gar nicht belasten oder wird der Schmerz plötzlich viel stärker, geh sofort in die Notaufnahme. Erzähl bei der Untersuchung von kürzlichen Trainingssteigerungen, früheren Stressverletzungen, zu knapper Ernährung oder ausbleibender Periode.",
    },
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
        "The tendons of your side-hip muscles are irritated where they attach to the bony point on the outside of your hip. They get squeezed against the bone when you lie on that side and whenever your thigh drops in across your body, as when you cross your legs, hang on one hip or do stretches that pull the leg across. Avoiding that squeeze, sleeping on the other side with a pillow between your knees and side-hip strength work that builds step by step usually help more than waiting it out.",
      load: "Keep running on flat ground within the pain rule, avoid cambered roads and steep hills for now, and don't let your feet cross toward the midline. If the outer hip aches more the next morning, shorten your next runs by about a third.",
    },
    de: {
      title:
        "Schmerz außen am Hüftknochen, schlimmer beim Liegen auf dieser Seite",
      desc: "Schlimmer beim Liegen auf dieser Seite, mit übereinandergeschlagenen Beinen, auf Treppen oder im Einbeinstand. Der Knochenvorsprung außen an der Hüfte ist meist druckempfindlich.",
      name: "Gluteale Tendinopathie (Trochanter-major-Schmerzsyndrom)",
      about:
        "Die Sehnen deiner seitlichen Hüftmuskeln sind dort gereizt, wo sie am Knochenvorsprung außen an der Hüfte ansetzen. Sie werden gegen den Knochen gedrückt, wenn du auf dieser Seite liegst und sobald der Oberschenkel nach innen über die Körpermitte wandert, etwa beim Übereinanderschlagen der Beine, wenn du im Stehen in einer Hüfte hängst oder bei Dehnungen, die das Bein quer über den Körper ziehen. Meist helfen drei Dinge mehr als Abwarten: diesen Druck meiden, auf der anderen Seite mit einem Kissen zwischen den Knien schlafen und die seitliche Hüfte schrittweise kräftigen.",
      load: "Lauf innerhalb der Schmerzregel auf flachem Untergrund weiter, meide vorerst Straßen mit seitlichem Gefälle und steile Hügel und setz die Füße beim Laufen nicht über die Mittellinie. Schmerzt die Hüfte am nächsten Morgen mehr, die nächsten Läufe um etwa ein Drittel kürzen.",
    },
    local: ["hip-abduction-hold", "banded-side-step", "step-up"],
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
      ["trunk", 1],
    ],
    later: ["side-abduction"],
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
        "Small muscles deep in your buttock, such as the piriformis, steady your hip on every stride and can get overworked and sensitive. The sciatic nerve runs right past them, which may be why long sitting makes the area sore. Building strength in the hip and buttock muscles often helps more than stretching alone.",
      load: "Keep easy runs at a relaxed pace and drop intervals, sprints and steep hills for now. When sitting, stand up every 30 minutes and take your wallet out of your back pocket.",
    },
    de: {
      title: "Tiefer Schmerz im Gesäß, schlimmer nach langem Sitzen",
      desc: "Schlimmer nach langem Sitzen, bei schnellerem Tempo und bergauf, und die Mitte des Gesäßes ist oft druckempfindlich. Keine Schmerzen unterhalb des Knies, weder Taubheit noch Kribbeln (sonst passt die Karte für einschießenden oder brennenden Schmerz ins Bein besser).",
      name: "Tiefes Glutealsyndrom (Piriformis-Syndrom)",
      about:
        "Kleine Muskeln tief im Gesäß, etwa der Piriformis, stabilisieren deine Hüfte bei jedem Schritt und können überlastet und empfindlich werden. Der Ischiasnerv verläuft direkt daneben, was erklären könnte, warum langes Sitzen die Stelle reizt. Kräftigung der Hüft- und Gesäßmuskeln hilft oft mehr als Dehnen allein.",
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
    sources: ["hopayian2018", "martin2015", "tonley2010"],
  },
  {
    id: "proximal-hamstring",
    kind: "plan",
    en: {
      title: "Deep pain at the sit bone, worse on hard chairs",
      desc: "Worse sitting on hard chairs, running uphill or fast, and bending forward with straight legs. It usually builds up over weeks, so if it started suddenly with a pop or bruising, get it checked before you train.",
      name: "Proximal hamstring tendinopathy (high hamstring tendinopathy)",
      about:
        "The tendon that anchors your hamstrings to the sit bone is irritated, often after more speed work, hills or a jump in distance. It gets pressed against the bone when your hip bends far forward, which is why sitting and hamstring stretches hurt. Hamstring work that starts with holds and gets gradually heavier often settles it, though it can take a few months.",
      load: "Keep easy runs on flat ground within the pain rule, and drop speed work, hills and long strides for now. Sit on a cushion, get up every 30 minutes, and skip deep hamstring stretches like toe touches.",
    },
    de: {
      title: "Tiefer Schmerz am Sitzbein, schlimmer auf harten Stühlen",
      desc: "Schlimmer beim Sitzen auf harten Stühlen, beim Bergauf- oder schnellen Laufen und beim Vorbeugen mit gestreckten Beinen. Es baut sich meist über Wochen auf. Begann es plötzlich mit einem Knall oder einem Bluterguss, lass es vor dem nächsten Training abklären.",
      name: "Proximale Hamstring-Tendinopathie (Sehnenreizung am Sitzbein)",
      about:
        "Die Sehne, mit der deine hinteren Oberschenkelmuskeln am Sitzbein ansetzen, ist gereizt, oft nach mehr Tempotraining, Hügeln oder einer plötzlichen Steigerung des Wochenumfangs. Sie wird gegen den Knochen gedrückt, wenn du die Hüfte stark beugst, deshalb tun Sitzen und Dehnen der hinteren Oberschenkel weh. Training, das mit Halteübungen beginnt und schrittweise schwerer wird, bringt sie oft zur Ruhe, kann aber einige Monate dauern.",
      load: "Lockere Läufe auf flacher Strecke innerhalb der Schmerzregel laufen und Tempotraining, Hügel und lange Schritte vorerst weglassen. Auf einem Kissen sitzen, alle 30 Minuten aufstehen und tiefe Dehnungen der hinteren Oberschenkel auslassen, etwa das Berühren der Zehen mit gestreckten Beinen.",
    },
    local: ["hamstring-bridge-hold", "hamstring-bridge", "slow-rdl"],
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
    sources: ["goom2016", "nasser2021", "fredericson2005"],
  },
];
