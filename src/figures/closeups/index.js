import lowerBack from "./lower-back.js";
import hip from "./hip.js";
import thigh from "./thigh.js";
import knee from "./knee.js";
import shinCalf from "./shin-calf.js";
import ankleFoot from "./ankle-foot.js";

// Close-up figure per region. A region without one falls back to the spot list alone.
export const closeups = {
  "lower-back": lowerBack,
  hip,
  thigh,
  knee,
  "shin-calf": shinCalf,
  "ankle-foot": ankleFoot,
};
