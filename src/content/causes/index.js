import lowerBack from "./lower-back.js";
import hip from "./hip.js";
import thigh from "./thigh.js";
import knee from "./knee.js";
import shinCalf from "./shin-calf.js";
import ankleFoot from "./ankle-foot.js";

// Grouped by the region file they live in; a cause can still be offered on spots in other regions.
export const causeFiles = {
  "lower-back": lowerBack,
  hip,
  thigh,
  knee,
  "shin-calf": shinCalf,
  "ankle-foot": ankleFoot,
};

export const causeList = Object.values(causeFiles).flat();
export const causes = Object.fromEntries(causeList.map((c) => [c.id, c]));
