// lower-back causes. Schema: see README "Content model".
export default [
  {
    id: "lbp-overload",
    kind: "plan",
    en: {
      title: "Stiff, achy low back during or after long runs",
      desc: "Builds up over long or hilly runs, and can feel stiff after sitting or for a few minutes after getting up, easing once you get moving. It's an ache across the low back or beside the spine, on one or both sides, with no pain, numbness or tingling in the leg (if there is, pick the spot for pain spreading into the leg instead).",
      name: "Non-specific low back pain",
      about:
        "Your back is taking more load than it's used to, often after longer or hillier runs or long days of sitting, and usually no single damaged structure is to blame. A one-sided ache right beside the spine that's worse when you arch back or twist may come from the small joints of the spine or the muscle at the side of the low back (quadratus lumborum), but no test reliably tells these apart, and both usually settle the same way. Backs are strong, running even seems to be good for your discs, and staying active with some trunk and hip strength work often settles this kind of ache within a few weeks. Get it checked if it never lets up, even at rest or at night, or if you feel unwell or are losing weight without trying.",
      load: "Keep running within the pain rule and keep moving on other days too, because easy runs and walks usually do your back good. If long or hilly runs break the rule, cut your long run by about a third and pick flatter routes for 1–2 weeks, and break up long sitting.",
      avoid:
        "If you're under 18, or under about 20 and arching back hurts, skip the face-down back lift and other back-bending moves until a doctor has ruled out a stress fracture in the spine.",
    },
    de: {
      title: "Steifer, schmerzender unterer Rücken bei oder nach langen Läufen",
      desc: "Baut sich bei langen oder hügeligen Läufen auf und kann nach dem Sitzen oder in den ersten Minuten nach dem Aufstehen steif sein, wird aber besser, sobald du in Bewegung kommst. Der Schmerz sitzt quer über dem unteren Rücken oder neben der Wirbelsäule, auf einer oder beiden Seiten, und zieht nicht ins Bein, auch Taubheit oder Kribbeln im Bein fehlen (sonst wähle lieber die Stelle für Ausstrahlung ins Bein).",
      name: "Nicht-spezifischer Kreuzschmerz",
      about:
        "Dein Rücken bekommt gerade mehr Belastung, als er gewohnt ist, oft nach längeren oder hügeligeren Läufen oder langen Tagen im Sitzen, und meist steckt keine einzelne verletzte Struktur dahinter. Ein einseitiger Schmerz direkt neben der Wirbelsäule, der beim Zurückbeugen oder Drehen zunimmt, kann von den kleinen Wirbelgelenken oder vom seitlichen Lendenmuskel (Quadratus lumborum) kommen, aber kein Test kann das zuverlässig unterscheiden, und beides bessert sich meist auf dieselbe Weise. Der Rücken ist robust, Laufen scheint den Bandscheiben sogar gutzutun, und Bewegung und etwas Krafttraining für Rumpf und Hüfte bringen diese Art Schmerz oft innerhalb weniger Wochen zur Ruhe. Lass es abklären, wenn der Schmerz nie nachlässt, auch nicht in Ruhe oder nachts, oder wenn du dich krank fühlst oder ungewollt abnimmst.",
      load: "Lauf innerhalb der Schmerzregel weiter und bleib auch an den anderen Tagen in Bewegung, denn lockere Läufe und Spaziergänge tun dem Rücken meist gut. Wird die Schmerzregel bei langen oder hügeligen Läufen verletzt, kürze 1–2 Wochen lang deinen langen Lauf um etwa ein Drittel, wähle flachere Strecken und unterbrich langes Sitzen.",
      avoid:
        "Bist du unter 18, oder unter etwa 20 und tut dir das Zurückbeugen weh, lass das Rückenstrecken in Bauchlage und andere Übungen ins Hohlkreuz weg, bis ein Ermüdungsbruch an der Wirbelsäule ärztlich ausgeschlossen ist.",
    },
    local: ["bird-dog", "back-extension"],
    chain: [
      [
        "trunk",
        3,
        {
          en: "Late in a long run, tired trunk muscles can let your pelvis and spine sway more with every stride, and the muscles beside your spine have to work harder to keep you upright.",
          de: "Gegen Ende eines langen Laufs können müde Rumpfmuskeln Becken und Wirbelsäule bei jedem Schritt stärker schwanken lassen. Die Muskeln neben der Wirbelsäule müssen dann mehr arbeiten, um dich aufrecht zu halten.",
        },
      ],
      [
        "glutes",
        2,
        {
          en: "Your glutes and back muscles share the job of holding your trunk upright as you land and push off. When the glutes tire, the low back can take over more of that work.",
          de: "Gesäß- und Rückenmuskeln teilen sich die Aufgabe, deinen Oberkörper bei Landung und Abdruck aufrecht zu halten. Ermüdet das Gesäß, kann der untere Rücken mehr davon übernehmen.",
        },
      ],
      ["hipabd", 2],
      [
        "hipflex",
        1,
        {
          en: "Stiff hip flexors can tip your pelvis forward and arch your low back at the end of each stride. If this tests stiff, keep your glute squeezed in the couch stretch so your back doesn't arch, and ease off if it hurts in your back.",
          de: "Steife Hüftbeuger können das Becken am Ende jedes Schritts nach vorn kippen und den unteren Rücken ins Hohlkreuz ziehen. Fällt der Test steif aus, halte beim Couch Stretch das Gesäß angespannt, damit der Rücken nicht ins Hohlkreuz geht, und lass nach, wenn es im Rücken wehtut.",
        },
      ],
    ],
    exits: [
      {
        to: "sacral-bsi-refer",
        en: "Does hopping on one leg hurt deep in your low back or buttock?",
        de: "Tut Hüpfen auf einem Bein tief im unteren Rücken oder Gesäß weh?",
      },
      {
        to: "spondylolysis-refer",
        en: "Are you under 18, and does arching backwards or leaning back while standing on one leg hurt?",
        de: "Bist du unter 18 und tut es weh, wenn du ins Hohlkreuz gehst oder dich im Einbeinstand nach hinten lehnst?",
      },
      {
        to: "inflammatory-back-refer",
        en: "Has it lasted over 3 months, with more than 30 minutes of stiffness each morning that eases as you move?",
        de: "Hast du seit über 3 Monaten jeden Morgen über 30 Minuten einen steifen Rücken, der in Bewegung besser wird?",
      },
      {
        to: "sciatica-refer",
        en: "Does pain shoot below the knee, or do you have numbness, tingling or weakness in the leg?",
        de: "Schießt der Schmerz bis unter das Knie, oder hast du Taubheit, Kribbeln oder Schwäche im Bein?",
      },
    ],
    sources: ["oliveira2018", "belavy2017", "nielsen2012", "silbernagel2007"],
  },
  {
    id: "si-joint",
    kind: "plan",
    en: {
      title: "Pinpoint ache at the dimple above one buttock",
      desc: "Worse standing on that leg, on stairs, getting out of a car or rolling over in bed, and it can spread into the buttock. You can usually point to it with one finger just below the belt line (with numbness, tingling or pain below the knee, pick the spot for pain spreading into the leg instead).",
      name: "Sacroiliac joint pain (SI joint pain)",
      about:
        "The joint between the base of your spine and your pelvis is probably irritated. It moves only a tiny amount and doesn't slip out of place, but thousands of one-legged landings per run can make it sore when distance or hills go up quickly, and stronger glutes and trunk muscles plus a gradual return to load often settle it. If hopping on that leg hurts or it aches at rest or at night, stop running and get it checked, as the sacrum at the base of the spine can get a stress injury. Morning stiffness of more than 30 minutes that has crept up over months is also worth a check.",
      load: "Keep easy runs on flat, even ground within the pain rule, and drop sprints, steep hills and cambered roads for now. If the pain rule is broken, cut weekly distance by about a third for 2 weeks.",
    },
    de: {
      title: "Punktueller Schmerz am Grübchen über einer Gesäßhälfte",
      desc: "Schlimmer im Stand auf diesem Bein, auf Treppen, beim Aussteigen aus dem Auto oder beim Umdrehen im Bett, und kann ins Gesäß ausstrahlen. Meist kannst du knapp unterhalb der Gürtellinie mit einem Finger auf die Stelle zeigen (bei Taubheit, Kribbeln oder Schmerzen unterhalb des Knies wähle lieber die Stelle für Ausstrahlung ins Bein).",
      name: "Schmerz im Iliosakralgelenk (ISG-Syndrom)",
      about:
        "Das Gelenk zwischen Kreuzbein und Beckenschaufel ist wahrscheinlich gereizt. Es bewegt sich nur minimal und verrutscht nicht, aber Tausende einbeinige Landungen pro Lauf können es empfindlich machen, wenn Umfang oder Höhenmeter schnell steigen, und kräftigere Gesäß- und Rumpfmuskeln sowie eine schrittweise Belastungssteigerung bringen es oft zur Ruhe. Tut Hüpfen auf diesem Bein weh oder schmerzt es in Ruhe oder nachts, hör mit dem Laufen auf und lass es abklären, denn auch das Kreuzbein kann eine Knochenstressverletzung bekommen. Auch eine Morgensteifigkeit von mehr als 30 Minuten, die sich über Monate eingeschlichen hat, solltest du abklären lassen.",
      load: "Lauf locker auf flachem, ebenem Untergrund innerhalb der Schmerzregel und lass Sprints, steile Anstiege und Straßen mit seitlichem Gefälle vorerst weg. Wird die Schmerzregel verletzt: 2 Wochen etwa ein Drittel weniger Wochenumfang.",
    },
    local: ["glute-bridge", "single-leg-bridge"],
    chain: [
      [
        "glutes",
        3,
        {
          en: "Your big glute muscle runs across the SI joint and helps press it tight each time you land on that leg. When it's weak or slow to switch on, the joint's ligaments can take more of the strain.",
          de: "Der große Gesäßmuskel verläuft über das Iliosakralgelenk hinweg und hilft, es bei jeder Landung auf diesem Bein zusammenzupressen. Ist er schwach oder springt er zu spät an, können die Bänder des Gelenks mehr von der Last abbekommen.",
        },
      ],
      [
        "trunk",
        2,
        {
          en: "Your deep stomach and back muscles help press the base of your spine and your pelvis together, which can steady the SI joint as you land.",
          de: "Die tiefen Bauch- und Rückenmuskeln helfen, Kreuzbein und Becken zusammenzupressen, und können so das Iliosakralgelenk bei der Landung stabilisieren.",
        },
      ],
      ["hipabd", 1],
    ],
    exits: [
      {
        to: "sacral-bsi-refer",
        en: "Does hopping on that leg hurt, or does it ache at rest or at night?",
        de: "Tut Hüpfen auf dem Bein weh, oder schmerzt es in Ruhe oder nachts?",
      },
      {
        to: "spondylolysis-refer",
        en: "Are you under 18, and does arching backwards or leaning back while standing on one leg hurt?",
        de: "Bist du unter 18 und tut es weh, wenn du ins Hohlkreuz gehst oder dich im Einbeinstand nach hinten lehnst?",
      },
      {
        to: "inflammatory-back-refer",
        en: "Has it lasted over 3 months, with over 30 minutes of stiffness each morning or pain that switches sides?",
        de: "Seit über 3 Monaten: Bist du morgens über 30 Minuten steif, oder wechselt der Schmerz die Seite?",
      },
      {
        to: "sciatica-refer",
        en: "Does pain shoot below the knee, or do you have numbness, tingling or weakness in the leg?",
        de: "Schießt der Schmerz bis unter das Knie, oder hast du Taubheit, Kribbeln oder Schwäche im Bein?",
      },
    ],
    sources: ["cohen2005", "warden2014", "hoenig2022", "silbernagel2007"],
  },
  {
    id: "sciatica-refer",
    kind: "refer",
    urgency: "soon",
    en: {
      title: "Shooting or burning pain down the leg, often past the knee",
      desc: "It can come with numbness, pins and needles or a weak leg or foot, and often gets worse when you cough, sneeze, bend forward or sit for a long time. The leg usually hurts more than the back.",
      name: "Lumbar radicular pain (sciatica)",
      about:
        "This pattern usually comes from an irritated nerve root in the low back, most often from a bulging disc, and less often from the sciatic nerve being squeezed deep in the buttock. It sounds alarming, but most people get much better within weeks to a few months without surgery. A physio or doctor should test the strength, reflexes and feeling in your leg to see how the nerve is coping and to plan your way back to running.",
      meanwhile:
        "Keep moving: walking and gentle activity usually help more than bed rest, and break up long sitting. Until you've been seen, skip running and heavy lifting if they send pain or tingling further down the leg or your leg feels weak. If your leg or foot gets weaker, both legs are affected, or you notice numbness around the groin or buttocks or new trouble with your bladder or bowel, go to an emergency department now.",
    },
    de: {
      title:
        "Einschießender oder brennender Schmerz ins Bein, oft bis unters Knie",
      desc: "Kann mit Taubheit, Kribbeln oder Schwäche in Bein oder Fuß einhergehen und wird beim Husten, Niesen, Vorbeugen oder langen Sitzen oft schlimmer. Das Bein schmerzt meist stärker als der Rücken.",
      name: "Lumbale Nervenwurzelreizung (Ischias)",
      about:
        "Dahinter steckt meist eine gereizte Nervenwurzel im unteren Rücken, am häufigsten durch eine vorgewölbte Bandscheibe, seltener ein Ischiasnerv, der tief im Gesäß eingeengt wird. Das klingt beunruhigend, bessert sich aber bei den meisten innerhalb von Wochen bis wenigen Monaten deutlich, ohne Operation. In der Physiotherapie oder ärztlichen Praxis sollten Kraft, Reflexe und Gefühl im Bein geprüft werden, um zu sehen, wie stark der Nerv betroffen ist, und um deinen Weg zurück ins Laufen zu planen.",
      meanwhile:
        "Bleib in Bewegung: Spazierengehen und leichte Aktivität helfen meist mehr als Bettruhe, und unterbrich langes Sitzen. Verzichte bis zur Untersuchung auf Laufen und schweres Heben, wenn Schmerz oder Kribbeln dadurch weiter ins Bein ziehen oder sich das Bein schwach anfühlt. Bei zunehmender Schwäche in Bein oder Fuß, Beschwerden in beiden Beinen, Taubheit im Schritt- oder Gesäßbereich oder neuen Problemen mit Blase oder Darm: sofort in die Notaufnahme.",
    },
    sources: ["jensen2019", "martin2015", "hopayian2018"],
  },
  {
    id: "sacral-bsi-refer",
    kind: "refer",
    urgency: "soon",
    en: {
      title: "Deep ache low in the back or buttock that flares when you hop",
      desc: "Sits deep near the dimple above the buttock or low in one buttock, and often started a few weeks after a jump in distance or intensity. It can feel like a sore SI joint, a stiff back or a tight buttock muscle, but it tends to build from run to run, hopping or landing on that leg hurts, and it can ache when walking, at rest or at night.",
      name: "Sacral bone stress injury (stress fracture of the sacrum)",
      about:
        "This pattern can mean a bone stress injury in the sacrum, the triangular bone at the base of the spine, which is uncommon and easily missed because it feels like ordinary low-back or SI joint pain. Early X-rays often look normal, so an MRI is usually what shows it, and it has been described mostly in women who run long distances, often after a rise in mileage or intensity and sometimes with missed periods or low bone density. It usually heals without surgery once you stop running, although getting back to full training often takes several months.",
      meanwhile:
        "Stop running and hopping now and see a doctor, ideally a sports doctor, within the next few days. Walk only as much as is comfortable, and use crutches for a while if walking hurts or makes you limp. If you can't put weight on the leg or the pain suddenly gets much worse, get seen today. Swimming and cycling are fine if they're completely pain-free. Tell the doctor about any recent jump in training, earlier stress fractures, eating too little or missed periods.",
      avoid:
        "Skip hopping, jumping and one-legged strength exercises until a doctor has checked the bone.",
    },
    de: {
      title: "Tiefer Schmerz unten im Rücken oder Gesäß, schlimmer beim Hüpfen",
      desc: "Sitzt tief am Grübchen über dem Gesäß oder unten in einer Gesäßhälfte und hat oft einige Wochen nach einer Steigerung von Umfang oder Tempo angefangen. Er kann sich wie ein gereiztes Iliosakralgelenk, ein steifer Rücken oder verspannte Gesäßmuskeln anfühlen, nimmt aber meist von Lauf zu Lauf zu, Hüpfen oder Landen auf dem Bein tut weh, und er kann auch beim Gehen, in Ruhe oder nachts schmerzen.",
      name: "Knochenstressverletzung am Kreuzbein (Ermüdungsbruch des Kreuzbeins)",
      about:
        "Dieses Muster kann auf eine Knochenstressverletzung am Kreuzbein hindeuten, dem dreieckigen Knochen am unteren Ende der Wirbelsäule. Sie ist selten und wird leicht übersehen, weil sie sich wie gewöhnlicher Kreuzschmerz oder ein gereiztes Iliosakralgelenk anfühlt und frühe Röntgenbilder oft unauffällig sind. Meist zeigt erst ein MRT die Verletzung. Beschrieben wurde sie vor allem bei Langstreckenläuferinnen, oft nach mehr Umfang oder Intensität und manchmal zusammen mit ausbleibender Periode oder geringer Knochendichte. Sie heilt meist ohne Operation, wenn du mit dem Laufen pausierst, bis zum vollen Training vergehen aber oft mehrere Monate.",
      meanwhile:
        "Hör sofort mit Laufen und Hüpfen auf und lass es in den nächsten Tagen ärztlich abklären, am besten sportmedizinisch. Geh nur so viel, wie es angenehm ist, und nimm vorübergehend Unterarmgehstützen, wenn Gehen wehtut oder du hinkst. Kannst du das Bein nicht belasten oder wird der Schmerz plötzlich viel stärker, lass es heute noch abklären. Schwimmen und Radfahren sind in Ordnung, solange sie völlig schmerzfrei sind. Erzähl bei der Untersuchung von kürzlichen Trainingssteigerungen, früheren Ermüdungsbrüchen, zu knapper Ernährung oder ausbleibender Periode.",
      avoid:
        "Lass Hüpfen, Sprünge und einbeinige Kraftübungen weg, bis der Knochen ärztlich abgeklärt ist.",
    },
    warn: ["fuel"],
    rtr: "bone",
    sources: ["johnson2001", "warden2014", "hoenig2023", "mountjoy2023"],
  },
  {
    id: "spondylolysis-refer",
    kind: "refer",
    urgency: "soon",
    youth: true,
    en: {
      title: "Low-back pain that gets worse when you arch backwards",
      desc: "You're under 18 and have low-back pain, often more on one side, that's worse when you arch backwards, stand on one leg and lean back, or run downhill. It usually doesn't spread down the leg, and it may have come on during a growth spurt or a time of more training.",
      name: "Spondylolysis (stress fracture of the vertebral arch)",
      about:
        "While you're still growing, a small bridge of bone at the back of a lower vertebra, called the pars, can get a stress injury from lots of arching and landing. It's one of the most common causes of low-back pain in young athletes: in one sports clinic study, almost half of the teenage athletes with low-back pain had it, compared with 5% of adults with low-back pain. Found early, it usually gets better with a break from the sports that hurt and a gradual rebuild, and in a review of athletes treated without surgery, about 9 in 10 got back to their previous level, after about four and a half months on average.",
      meanwhile:
        "Stop running, jumping and back-bending exercises until you've been seen, and get it checked by a doctor, together with a parent, within the next few days. Walking and gentle cycling are usually fine if they don't hurt. If pain starts to spread down a leg, or a leg feels numb or weak, get seen as soon as you can.",
      avoid:
        "Skip back-bending moves, such as the face-down back lift or backbends in gymnastics and dance, until a doctor has checked your spine.",
    },
    de: {
      title: "Schmerz im unteren Rücken, der beim Zurückbeugen stärker wird",
      desc: "Du bist unter 18 und hast Schmerzen im unteren Rücken, oft eher auf einer Seite. Sie werden stärker, wenn du ins Hohlkreuz gehst, dich im Einbeinstand nach hinten lehnst oder bergab läufst, strahlen aber meist nicht ins Bein aus, und manchmal haben sie in einem Wachstumsschub oder einer Phase mit mehr Training angefangen.",
      name: "Spondylolyse (Ermüdungsbruch am Wirbelbogen)",
      about:
        "Solange du wächst, kann eine kleine Knochenbrücke hinten an einem unteren Lendenwirbel, die Pars interarticularis, durch viel Zurückbeugen und Landen eine Stressverletzung bekommen. Sie gehört zu den häufigsten Ursachen für Kreuzschmerzen bei jungen Sportlerinnen und Sportlern: In einer Studie aus einer sportmedizinischen Klinik hatte fast die Hälfte der Jugendlichen mit Kreuzschmerzen eine Spondylolyse, bei Erwachsenen mit Kreuzschmerzen waren es 5 %. Früh erkannt bessert sie sich meist mit einer Pause von den Sportarten, die wehtun, und einem schrittweisen Wiederaufbau. In einer Übersichtsarbeit kamen etwa 9 von 10 Betroffenen, die ohne Operation behandelt wurden, auf ihr früheres Niveau zurück, im Schnitt nach etwa viereinhalb Monaten.",
      meanwhile:
        "Hör bis zur Untersuchung mit Laufen, Springen und Übungen ins Hohlkreuz auf und lass es in den nächsten Tagen zusammen mit einem Elternteil ärztlich abklären. Gehen und lockeres Radfahren sind meist in Ordnung, wenn sie nicht wehtun. Zieht der Schmerz ins Bein oder fühlt sich ein Bein taub oder schwach an, lass dich so bald wie möglich untersuchen.",
      avoid:
        "Lass Übungen ins Hohlkreuz weg, etwa das Rückenstrecken in Bauchlage oder Brücken und Rückbeugen im Turnen und Tanzen, bis deine Wirbelsäule ärztlich abgeklärt ist.",
    },
    warn: ["fuel"],
    rtr: "none",
    sources: ["micheli1995", "grazina2019"],
  },
  {
    id: "inflammatory-back-refer",
    kind: "refer",
    urgency: "routine",
    en: {
      title:
        "Stiff, aching low back for months, worse after rest, better moving",
      desc: "It began before about 45, has lasted more than 3 months, and you're stiff for more than 30 minutes after getting up. Unlike a back that's sore from training, it came on gradually without a clear cause, doesn't ease with rest but does with exercise, may wake you in the second half of the night, and can ache deep in one buttock, then the other.",
      name: "Inflammatory back pain (possible axial spondyloarthritis)",
      about:
        "This pattern can point to axial spondyloarthritis (which includes ankylosing spondylitis), an inflammation where the spine meets the pelvis and in the spine itself. It usually starts before 40 and is easily taken for ordinary back pain. No single sign proves it or rules it out, and many people with one or two of these features don't have it, so a GP or rheumatologist puts the picture together from your story, an examination, blood tests and often scans. If it is this, effective treatment exists, and regular exercise is part of it.",
      meanwhile:
        "Keep running and moving if it helps, as it often does with this kind of back pain. Book an appointment with your GP within the next few weeks and say how long it has lasted, how long you're stiff in the morning and whether it wakes you at night. Mention it too if you've had psoriasis, swollen joints or heel pain, or if a close relative has a similar back or joint condition, and ask whether a referral to a rheumatologist makes sense. See a doctor sooner if you feel unwell, have a fever or are losing weight without trying.",
    },
    de: {
      title:
        "Seit Monaten steifer, schmerzender unterer Rücken, schlimmer nach Ruhe, besser in Bewegung",
      desc: "Die Schmerzen haben angefangen, bevor du etwa 45 warst, bestehen seit mehr als 3 Monaten, und morgens bist du länger als 30 Minuten steif. Anders als bei einem vom Training strapazierten Rücken kamen sie schleichend ohne klaren Auslöser, werden durch Ruhe nicht besser, wohl aber durch Bewegung, können dich in der zweiten Nachthälfte wecken und tief in einer Gesäßhälfte sitzen, mal links, mal rechts.",
      name: "Entzündlicher Rückenschmerz (mögliche axiale Spondyloarthritis, z. B. Morbus Bechterew)",
      about:
        "Dieses Muster kann auf eine axiale Spondyloarthritis hindeuten, eine Entzündung an den Iliosakralgelenken und an der Wirbelsäule, zu der auch der Morbus Bechterew gehört. Sie beginnt meist vor dem 40. Lebensjahr und wird leicht für gewöhnliche Rückenschmerzen gehalten. Kein einzelnes Zeichen beweist sie oder schließt sie aus, und viele Menschen mit ein oder zwei dieser Merkmale haben sie nicht. Deshalb setzt die Hausarzt- oder Rheumapraxis das Bild aus Gespräch, Untersuchung, Blutwerten und oft Bildgebung zusammen. Ist es das, gibt es wirksame Behandlungen, und regelmäßige Bewegung gehört dazu.",
      meanwhile:
        "Lauf weiter und bleib in Bewegung, wenn es dir guttut, was bei dieser Art Rückenschmerz oft so ist. Mach in den nächsten Wochen einen Termin in deiner Hausarztpraxis und erzähl, wie lange die Beschwerden schon bestehen, wie lange du morgens steif bist und ob sie dich nachts wecken. Erwähne auch, ob du Schuppenflechte, geschwollene Gelenke oder Fersenschmerzen hattest oder ob jemand in deiner engen Familie eine ähnliche Rücken- oder Gelenkerkrankung hat, und frag, ob eine Überweisung in die Rheumatologie sinnvoll ist. Lass dich früher untersuchen, wenn du dich krank fühlst, Fieber hast oder ungewollt abnimmst.",
    },
    rtr: "none",
    sources: ["nice2017", "rudwaleit2006", "sieper2009"],
  },
  {
    id: "coccydynia",
    kind: "plan",
    en: {
      title: "Sharp or aching tailbone pain when you sit or stand up",
      desc: "Sits right at the bottom of the spine, at the top of the crease between the buttocks, and is worst when you sit, especially leaning back or on hard seats, and as you get up. It often follows a fall onto your bottom, a long ride on a bike saddle or long hours of sitting, and running itself often bothers it little.",
      name: "Coccydynia (tailbone pain)",
      about:
        "The tailbone, the small bone at the very bottom of your spine, or the tissue around it is probably irritated, often after a fall onto your bottom or from pressure during long sitting or cycling. It often eases once the tailbone gets less pressure, but the studies are few and small, so no one can yet say which treatment works best, and no exercise has been shown to fix it: the exercises here simply keep your trunk strong without pressing on the sore spot. See a doctor if it started with a hard fall, if the pain is severe or getting worse, if a red, swollen lump appears at the top of the buttock crease, or if it isn't clearly better after 6–8 weeks.",
      load: "Keep running if it doesn't hurt, as running puts little pressure on the tailbone. When you sit, try a cushion with a cut-out at the back or a wedge cushion that's higher at the back, lean slightly forward and break up long sitting, and swap long bike rides for running, walking or swimming for now.",
      avoid:
        "Skip exercises that press or roll on your tailbone, such as sit-ups or the rowing machine, if they hurt.",
    },
    de: {
      title:
        "Stechender oder dumpfer Steißbeinschmerz beim Sitzen und Aufstehen",
      desc: "Sitzt ganz unten an der Wirbelsäule, am oberen Ende der Gesäßfalte, und ist im Sitzen am schlimmsten, vor allem zurückgelehnt oder auf harten Stühlen, und beim Aufstehen. Oft gehen ein Sturz aufs Gesäß, eine lange Radtour oder viele Stunden Sitzen voraus, und das Laufen selbst stört oft wenig.",
      name: "Kokzygodynie (Steißbeinschmerz)",
      about:
        "Das Steißbein, der kleine Knochen am unteren Ende der Wirbelsäule, oder das Gewebe darum herum ist wahrscheinlich gereizt, oft nach einem Sturz aufs Gesäß oder durch Druck beim langen Sitzen oder Radfahren. Oft wird es besser, wenn das Steißbein weniger Druck abbekommt. Welche Behandlung am besten wirkt, kann die Forschung aber noch nicht sagen, weil es nur wenige und kleine Studien gibt, und auch für Übungen fehlt ein Wirksamkeitsnachweis: Die Übungen hier halten einfach deinen Rumpf kräftig, ohne auf die empfindliche Stelle zu drücken. Lass es ärztlich abklären, wenn es mit einem heftigen Sturz begonnen hat, die Schmerzen stark sind oder zunehmen, sich oben in der Gesäßfalte eine gerötete, geschwollene Beule bildet oder es nach 6–8 Wochen nicht deutlich besser ist.",
      load: "Lauf weiter, wenn es nicht wehtut, denn beim Laufen lastet kaum Druck auf dem Steißbein. Probier im Sitzen ein Sitzkissen mit Aussparung hinten oder ein Keilkissen, das hinten höher ist, lehn dich leicht nach vorn, unterbrich langes Sitzen und ersetz lange Radtouren vorerst durch Laufen, Gehen oder Schwimmen.",
      avoid:
        "Lass Übungen weg, die auf das Steißbein drücken oder darüber rollen, etwa Sit-ups oder das Rudergerät, wenn sie wehtun.",
    },
    local: ["bird-dog", "side-plank"],
    chain: [],
    rtr: "none",
    sources: ["howard2013", "benditz2025"],
  },
];
