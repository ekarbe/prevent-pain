// Citations. Links go to a PubMed search for the exact title, which keeps working if a DOI moves.
export const sources = {
  willy2019: {
    who: "Willy RW et al.",
    year: 2019,
    title:
      "Patellofemoral pain: clinical practice guidelines linked to the international classification of functioning, disability and health",
    where: "J Orthop Sports Phys Ther 49(9):CPG1–CPG95",
  },
  crossley2016: {
    who: "Crossley KM et al.",
    year: 2016,
    title:
      "2016 Patellofemoral pain consensus statement from the 4th International Patellofemoral Pain Research Retreat, Manchester. Part 2",
    where: "Br J Sports Med 50(14):844–852",
  },
  powers2010: {
    who: "Powers CM",
    year: 2010,
    title:
      "The influence of abnormal hip mechanics on knee injury: a biomechanical perspective",
    where: "J Orthop Sports Phys Ther 40(2):42–51",
  },
  silbernagel2007: {
    who: "Silbernagel KG et al.",
    year: 2007,
    title:
      "Continued sports activity, using a pain-monitoring model, during rehabilitation in patients with Achilles tendinopathy: a randomized controlled study",
    where: "Am J Sports Med 35(6):897–906",
  },
  malliaras2015: {
    who: "Malliaras P et al.",
    year: 2015,
    title:
      "Patellar tendinopathy: clinical diagnosis, load management, and advice for challenging case presentations",
    where: "J Orthop Sports Phys Ther 45(11):887–898",
  },
  rio2015: {
    who: "Rio E et al.",
    year: 2015,
    title:
      "Isometric exercise induces analgesia and reduces inhibition in patellar tendinopathy",
    where: "Br J Sports Med 49(19):1277–1283",
  },
  kongsgaard2009: {
    who: "Kongsgaard M et al.",
    year: 2009,
    title:
      "Corticosteroid injections, eccentric decline squat training and heavy slow resistance training in patellar tendinopathy",
    where: "Scand J Med Sci Sports 19(6):790–802",
  },
  backman2011: {
    who: "Backman LJ, Danielson P",
    year: 2011,
    title:
      "Low range of ankle dorsiflexion predisposes for patellar tendinopathy in junior elite basketball players: a 1-year prospective study",
    where: "Am J Sports Med 39(12):2626–2633",
  },
  fredericson2000: {
    who: "Fredericson M et al.",
    year: 2000,
    title:
      "Hip abductor weakness in distance runners with iliotibial band syndrome",
    where: "Clin J Sport Med 10(3):169–175",
  },
  heiderscheit2011: {
    who: "Heiderscheit BC et al.",
    year: 2011,
    title:
      "Effects of step rate manipulation on joint mechanics during running",
    where: "Med Sci Sports Exerc 43(2):296–302",
  },
  nielsen2012: {
    who: "Nielsen RO et al.",
    year: 2012,
    title: "Training errors and running related injuries: a systematic review",
    where: "Int J Sports Phys Ther 7(1):58–75",
  },
};

export const sourceUrl = (s) =>
  `https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(s.title)}`;
