// Consider using this ONLY for all LT configs and A-Frame and Side Wall A-Frame

// I need this in a separate file by itself and to replace all_tarps.js with changes from arrays indices to objects props
const allTarpSizes = [
  {
    tarpCategory: "Rectangle",
    tarpRatio: "1:2",
    tarpSizes: [
      [6, 12],
      [7, 14],
      [8, 16],
      [10, 20]
    ]
  },
  {
    tarpCategory: "Rectangle",
    tarpRatio: "3:5",
    tarpSizes: [
      [6, 10],
      [9, 15],
      [12, 20]
    ]
  },
  {
    tarpCategory: "Rectangle",
    tarpRatio: "2:3",
    tarpSizes: [
      [6, 9],
      [8, 12],
      [10, 15],
      [12, 18]
    ]
  },
  {
    tarpCategory: "Rectangle",
    tarpRatio: "3:4",
    tarpSizes: [
      [6, 8],
      [9, 12],
      [12, 16]
    ]
  },
  {
    tarpCategory: "Rectangle",
    tarpRatio: "4:5",
    tarpSizes: [
      [4, 5],
      [8, 10],
      [12, 15],
      [16, 20]
    ]
  },
  {
    tarpCategory: "Rectangle",
    tarpRatio: "Odd",
    tarpSizes: [
      [5, 7],
      [7, 9]
    ]
  },
  {
    tarpCategory: "Square",
    tarpRatio: "1:1",
    tarpSizes: [
      [5, 5],
      [6, 6],
      [7, 7],
      [8, 8],
      [9, 9],
      [10, 10],
      [12, 12],
      [15, 15],
      [20, 20]
    ]
  }
];

// Global state / variables, have these in index.js in useState and the context provider
const height = 74;
const bodyWidth = height * (5 / 16);
const chairHeight = 46;
const chairDepth = (height * 13) / 32;

// Calculations based on user's height, have these calcs in index.js
const sitHeight = height / 2;
const sitDepth = (height * 7) / 32;

// Degree to radian conversion, have this in index.js
const deg2Rad = Math.PI / 180;

// Configuration specific constants (remove?)
const configName = "Lean-To";
const configType = "Lean-To";

let subset = [];
let sleepClr = 0;

// THIS DOES NOT CHANGE EXCEPT FOR A FEW CONFIGS: I will need a different component for when the code block below changes
// console.log(allTarpSizes[0]["tarpSizes"][0][1]);
// Calculate sleep clearance and output tarps with len + 4 > height
// exclude odd & squares tarps, the last 2 objects
for (let i = 0; i < allTarpSizes.length - 2; i++) {
  for (let j = 0; j < allTarpSizes[i].tarpSizes.length; j++) {
    let len = allTarpSizes[i]["tarpSizes"][j][0];
    sleepClr = len * 12 - height;

    if (sleepClr > 4) {
      let tarpType = allTarpSizes[i]["tarpCategory"] + " " + allTarpSizes[i]["tarpRatio"];
      subset.push([allTarpSizes[i]["tarpSizes"][j], tarpType]);
    }
  }
}
console.log("subset: ", subset);

let outputObj = [];
let finalObj = [];

let cover,
  coverClear,
  ridgeHeight,
  sitTarpHtClear,
  chairTarpHtClear = 0;

// CONFIGURATION ANGLES WILL VARY BY CONFIG CATEGORY
// const configAngles = [75, 30];
// const configAngles = [45, 60];
const configAngles = [60, 33.3];

// RIDGEHEIGHT AND COVER ARE THE ONLY VALUES THAT CHANGE FOR EACH CONFIG
// console.log("Current config: Lean-To");

subset.forEach(item => {
  let len = item[0][0] * 12;
  let wid = item[0][1] * 12;

  let sleepClear = Math.round(wid - (0.375 * height) / (Math.tan(configAngles[0]) * 2) - height);

  ridgeHt = Math.round(Math.sin(configAngles[1] * deg2Rad) * len);
  // Reduce the ridgeline height for really big tarps
  ridgeHeight = Math.min(ridgeHt, height + 6);

  // Calculate different "cover" values based on the 2 ridgeHeight calcs
  if (ridgeHeight === height + 6) {
    cover = Math.round(Math.sqrt(Math.pow(wid, 2) - Math.pow(ridgeHeight, 2)));
  } else {
    cover = Math.round(Math.cos(configAngles[1] * deg2Rad) * len);
  }

  let sitCover = Math.round(cover - (sitDepth + 3));
  let chairCover = Math.round(cover - (chairDepth + 3));

  let sitTarpHt = Math.round(Math.tan(configAngles[1] * deg2Rad) * sitCover);
  let chairTarpHt = Math.round(Math.tan(configAngles[1] * deg2Rad) * chairCover);

  sitTarpHtClear = sitTarpHt - sitHeight;
  chairTarpHtClear = chairTarpHt - chairHeight;

  outputObj = item.concat({ sleepClear, cover, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: configAngles[1] });

  finalObj.push(outputObj);
});
// GOT IT!
console.log(finalObj);

// finalObj.forEach(item => {
//   if (!item[2]) {
//     console.log(item);
//   }
// });
