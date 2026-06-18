export const bodyData = {
  "lower-back": {
    label: "Lower Back",
    description:
      "Common area for fatigue and tightness in runners due to core weakness or tight hip flexors.",
    causes: [
      {
        id: "back-apt",
        title: "Anterior Pelvic Tilt / Tight Hip Flexors",
        description: "Tight hip flexors pull the pelvis forward, placing excessive strain on the lower back muscles.",
        exercises: [
          {
            name: "Couch Stretch",
            reps: "3 sets, 45s hold",
            instructions: "Place one knee against a wall or couch, step the other leg forward into a lunge, and raise your torso upright until you feel a deep stretch in the front of your hip and thigh.",
            source: { name: "Squat University", url: "https://squatuniversity.com/2020/07/01/how-to-fix-tight-hip-flexors/" }
          },
          {
            name: "Glute Bridges",
            reps: "3 sets of 12 reps",
            instructions: "Lie on your back with knees bent and feet flat on the floor. Squeeze your glutes and push through your heels to lift your hips until your body forms a straight line from shoulders to knees.",
            source: { name: "OrthoInfo", url: "https://orthoinfo.aaos.org/en/recovery/spine-conditioning-program/" }
          }
        ]
      },
      {
        id: "back-core",
        title: "Core Instability / Weakness",
        description: "Weak deep core muscles, like the transverse abdominis, fail to stabilize the spine during running impact.",
        exercises: [
          {
            name: "Bird Dog",
            reps: "3 sets of 10 per side",
            instructions: "Start on hands and knees. Extend one arm straight forward and the opposite leg straight back. Hold for 2 seconds, keeping your hips level and core tight, then return.",
            source: { name: "McGill Spine Rehab", url: "https://www.backfitpro.com/mcgill-big-3-back-exercises/" }
          },
          {
            name: "Plank",
            reps: "3 sets, 30-60s hold",
            instructions: "Rest on your forearms and toes. Keep your body in a straight line, pulling your belly button toward your spine and squeezing your glutes.",
            source: { name: "Harvard Health", url: "https://www.health.harvard.edu/healthbeat/core-exercises-why-and-how-to-do-them" }
          }
        ]
      }
    ]
  },
  hips: {
    label: "Hips & Glutes",
    description:
      "The power engine of running. Weakness here causes issues downstream (knees/ankles).",
    causes: [
      {
        id: "hips-glute-med",
        title: "Gluteus Medius Weakness (Trendelenburg)",
        description: "Weak side glute muscles lead to hip drop, which can cause knee pain or IT band syndrome.",
        exercises: [
          {
            name: "Clamshells",
            reps: "3 sets of 15 per side",
            instructions: "Lie on your side with hips at 45 degrees and knees bent at 90 degrees. Keeping your feet together, raise your top knee as high as possible without rotating your pelvis.",
            source: { name: "Squat University", url: "https://squatuniversity.com/2015/10/29/how-to-activate-your-glutes/" }
          },
          {
            name: "Side-Lying Leg Raises",
            reps: "3 sets of 12 per side",
            instructions: "Lie on your side with legs straight. Lift your top leg up and slightly backward, keeping your toe pointed slightly down to isolate the glutes.",
            source: { name: "OrthoInfo", url: "https://orthoinfo.aaos.org/en/recovery/hip-conditioning-program/" }
          }
        ]
      },
      {
        id: "hips-it-band",
        title: "IT Band Syndrome / Tight TFL",
        description: "Lateral hip friction caused by poor hip stability and tightness in the Tensor Fasciae Latae (TFL).",
        exercises: [
          {
            name: "Standing Hip Abduction",
            reps: "3 sets of 15 reps",
            instructions: "Stand tall, hold a stable surface. Keep your leg straight and toe pointed forward, lift your outer leg out to the side, then slowly lower.",
            source: { name: "Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/21967-it-band-syndrome" }
          },
          {
            name: "Single-Leg Glute Bridge",
            reps: "3 sets of 8-10 per side",
            instructions: "Lie on your back with knees bent. Lift one leg straight up, then push through the heel of the grounded foot to lift your hips. Squeeze glutes at the top.",
            source: { name: "Runner's World", url: "https://www.runnersworld.com/health-injuries/a20836561/it-band-syndrome-treatment/" }
          }
        ]
      }
    ]
  },
  thighs: {
    label: "Upper Leg (Quads/Hams)",
    description: "The primary shock absorbers and propellers.",
    causes: [
      {
        id: "thighs-hamstring",
        title: "Hamstring Strain / Eccentric Weakness",
        description: "Hamstrings are vulnerable during the terminal swing phase of running when they must decelerate the leg.",
        exercises: [
          {
            name: "Single-Leg Romanian Deadlift",
            reps: "3 sets of 10 per side",
            instructions: "Stand on one leg, hinge forward at the hips while extending the other leg straight behind you. Keep your back flat and squeeze the hamstring/glute to return to standing.",
            source: { name: "Squat University", url: "https://squatuniversity.com/2020/04/10/how-to-rehab-a-hamstring-strain/" }
          },
          {
            name: "Glute-Ham Slider Curls",
            reps: "3 sets of 8 reps",
            instructions: "Lie on your back, knees bent, heels on sliders or a towel. Lift hips into a bridge, then slowly slide your heels out until legs are straight. Pull heels back in by squeezing hamstrings.",
            source: { name: "Runner's World", url: "https://www.runnersworld.com/training/a20846874/hamstring-exercises-for-runners/" }
          }
        ]
      },
      {
        id: "thighs-quad",
        title: "Quadriceps Tendinopathy / Tightness",
        description: "Repetitive loading of the patellar tendon due to quad weakness or stiffness, common after running downhill.",
        exercises: [
          {
            name: "Spanish Squat",
            reps: "3 sets of 30-45s hold",
            instructions: "Loop a heavy resistance band behind your knees and anchor it in front. Stand back to tension the band, then lower into a half squat, keeping shins vertical and leaning torso forward slightly.",
            source: { name: "Physiopedia", url: "https://www.physio-pedia.com/Patellar_Tendinopathy" }
          },
          {
            name: "Bulgarian Split Squat",
            reps: "3 sets of 8-10 per side",
            instructions: "Place one foot behind you on a bench or chair. Step the other foot forward, lower your hips until your back knee is just above the floor, then push through your front heel.",
            source: { name: "Squat University", url: "https://squatuniversity.com/2017/08/17/the-bulgarian-split-squat/" }
          }
        ]
      }
    ]
  },
  knees: {
    label: "Knees",
    description: "The most common site of injury for runners.",
    causes: [
      {
        id: "knees-runners",
        title: "Patellofemoral Pain Syndrome (Runner's Knee)",
        description: "Improper tracking of the kneecap, often caused by weak quads (specifically the VMO) and weak hip rotators.",
        exercises: [
          {
            name: "Step-Downs",
            reps: "3 sets of 12 reps",
            instructions: "Stand on a step or small box. Slowly lower your opposite heel toward the floor by bending the supporting leg, ensuring the knee stays aligned with your foot and doesn't collapse inward.",
            source: { name: "Squat University", url: "https://squatuniversity.com/2017/04/13/how-to-fix-runners-knee/" }
          },
          {
            name: "Straight Leg Raises",
            reps: "3 sets of 15 reps",
            instructions: "Lie on your back with one leg bent, the other straight. Tighten the thigh muscle of the straight leg and lift it about 12 inches off the floor. Hold for 2 seconds, then lower slowly.",
            source: { name: "OrthoInfo", url: "https://orthoinfo.aaos.org/en/recovery/knee-conditioning-program/" }
          }
        ]
      },
      {
        id: "knees-tendinitis",
        title: "Patellar Tendinitis (Jumper's Knee)",
        description: "Inflammation of the patellar tendon linking the kneecap to the shinbone due to repetitive loading.",
        exercises: [
          {
            name: "Isometric Wall Sit",
            reps: "3 sets of 45s hold",
            instructions: "Lean against a wall and lower into a squat position with knees at 90 degrees. Hold this position to load the patellar tendon isometrically, which provides an analgesic (pain-relieving) effect.",
            source: { name: "BJSM Journal", url: "https://bjsm.bmj.com/content/49/19/1277" }
          },
          {
            name: "Goblet Squats",
            reps: "3 sets of 10 reps",
            instructions: "Hold a weight close to your chest. Keep your chest up and feet shoulder-width apart. Lower into a squat, driving your knees outward over your toes, then push back up.",
            source: { name: "OrthoInfo", url: "https://orthoinfo.aaos.org/en/recovery/knee-conditioning-program/" }
          }
        ]
      }
    ]
  },
  calves: {
    label: "Calves & Shins",
    description: "Absorbs 2-3x bodyweight on every step.",
    causes: [
      {
        id: "calves-shin",
        title: "Shin Splints (Medial Tibial Stress Syndrome)",
        description: "Repetitive stress on the shinbone and connective tissues, common when increasing mileage too quickly.",
        exercises: [
          {
            name: "Tibialis Raises",
            reps: "3 sets of 20 reps",
            instructions: "Lean your back against a wall, heels about 12 inches away. Lift your toes and feet off the ground as high as possible, holding for a second at the top to strengthen the tibialis anterior muscle.",
            source: { name: "Squat University", url: "https://squatuniversity.com/2019/08/29/how-to-fix-shin-splints/" }
          },
          {
            name: "Calf Stretching (Gastroc & Soleus)",
            reps: "3 sets of 30s per side",
            instructions: "Step one leg back, keeping the heel down and knee straight (gastrocnemius stretch). Repeat with the back knee slightly bent (soleus stretch) to target deeper calf muscles.",
            source: { name: "OrthoInfo", url: "https://orthoinfo.aaos.org/en/recovery/foot-and-ankle-conditioning-program/" }
          }
        ]
      },
      {
        id: "calves-achilles",
        title: "Achilles Tendinopathy / Calf Strain",
        description: "Micro-tears in the Achilles tendon or calf muscles, often from excessive forefoot striking or running uphill.",
        exercises: [
          {
            name: "Alfredson Eccentric Heel Drops",
            reps: "3 sets of 15 reps",
            instructions: "Stand on the edge of a step on both toes. Lift your unaffected foot, then slowly lower your heel below the step level using only the injured leg (take 3-4 seconds to lower).",
            source: { name: "Physiopedia", url: "https://www.physio-pedia.com/Achilles_Tendinopathy" }
          },
          {
            name: "Soleus Calf Raises",
            reps: "3 sets of 15 reps",
            instructions: "Sit with a weight on your knees. Lift your heels off the floor by pushing through the balls of your feet. Since the knees are bent, this isolates the deep soleus muscle.",
            source: { name: "Squat University", url: "https://squatuniversity.com/2018/11/17/rehab-for-achilles-tendon-pain/" }
          }
        ]
      }
    ]
  },
  ankles: {
    label: "Ankles & Feet",
    description: "The foundation of the running chain.",
    causes: [
      {
        id: "ankles-plantar",
        title: "Plantar Fasciitis",
        description: "Inflammation of the thick band of tissue running across the bottom of the foot, causing sharp heel pain.",
        exercises: [
          {
            name: "Rathleff Protocol (Toe-Elevated Heel Raises)",
            reps: "3 sets of 10 reps, every other day",
            instructions: "Place a rolled towel under your toes on a step. Perform heel raises: rise for 3s, hold for 2s at the top, and take 3s to slowly lower down.",
            source: { name: "Physiopedia", url: "https://www.physio-pedia.com/Plantar_Fasciitis" }
          },
          {
            name: "Plantar Fascia Stretch",
            reps: "3 sets, 30s hold",
            instructions: "Sit down, cross your foot over the opposite knee. Grab your toes and pull them back toward your shin until you feel a stretch in the arch of your foot. Massage the arch with your thumb.",
            source: { name: "OrthoInfo", url: "https://orthoinfo.aaos.org/en/diseases--conditions/plantar-fasciitis-and-bone-spurs/" }
          }
        ]
      },
      {
        id: "ankles-instability",
        title: "Chronic Ankle Instability / Sprain Recovery",
        description: "Weakened lateral ligaments from past ankle sprains, leading to poor balance and landing mechanics.",
        exercises: [
          {
            name: "Single-Leg Balance",
            reps: "3 sets of 30-45s per side",
            instructions: "Stand on one foot on a flat surface, keeping your hip level and knee slightly bent. To increase difficulty, close your eyes or stand on a cushion/balance disc.",
            source: { name: "OrthoInfo", url: "https://orthoinfo.aaos.org/en/recovery/foot-and-ankle-conditioning-program/" }
          },
          {
            name: "Banded Ankle Eversion",
            reps: "3 sets of 15 reps",
            instructions: "Wrap a resistance band around your feet. Keeping your heels still, push the outer edge of your foot outward against the band to strengthen peroneal muscles.",
            source: { name: "APTA ChoosePT", url: "https://www.choosept.com/guide/physical-therapy-guide-ankle-sprain" }
          }
        ]
      }
    ]
  }
};
