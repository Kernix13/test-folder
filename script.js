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

// CONFIGURATION ANGLES WILL VARY BY CONFIG CATEGORY
const configAngles = [30, 50];
// const configAngles = [37, 75];

// Configuration specific constants (remove?)
const configName = "Lean-To";
const configType = "Lean-To";

let subset = [];
let sleepClr = 0;

let outputObj = [];
let finalObj = [];

let cover,
  coverClear,
  ridgeHeight,
  sitTarpHtClear,
  chairTarpHtClear = 0;

// THIS DOES NOT CHANGE EXCEPT FOR A FEW CONFIGS: I will need a different component for when the code block below changes

// Calculate sleep clearance and output tarps with len + 4 > height
for (let i = 0; i < allTarpSizes.length; i++) {
  for (let j = 0; j < allTarpSizes[i].tarpSizes.length; j++) {
    let len = allTarpSizes[i]["tarpSizes"][j][0];
    sleepClr = len * 12 - height;

    if (sleepClr > 4) {
      let tarpType = allTarpSizes[i]["tarpCategory"] + " " + allTarpSizes[i]["tarpRatio"];

      if (allTarpSizes[i]["tarpSizes"].indexOf(allTarpSizes[i]["tarpSizes"][j]) && !subset.includes(allTarpSizes[i]["tarpSizes"][j])) {
        // Remove tarpType if not needed
        subset.push([allTarpSizes[i]["tarpSizes"][j], tarpType]);
      }
    }
  }
}
console.log("subset: ", subset);

// I think I need a sub-component folder with the specifics, in the component folder I need this and the code block above, but how do I not have the following code block throw an error when it will have variables standing in for the values which will be in the sub-components?

// RIDGEHEIGHT AND COVER ARE THE ONLY VALUES THAT CHANGE FOR EACH CONFIG, AND THEY DO CHANGE FOR EVERY CONFIG - HOW TO I PREVERT DUPLICATE CODE?
// Current config:
// console.log("Lean-To");
subset.forEach(item => {
  let len = item[0][0] * 12;
  let wid = item[0][1] * 12;
  let sleepClear = len - height;

  for (let i = configAngles[1]; i >= configAngles[0]; i--) {
    ridgeHt = Math.trunc(Math.round(Math.sin(i * deg2Rad) * wid));

    // Reduce the ridgeHeight to (height + 6) for really big tarps
    ridgeHeight = Math.min(ridgeHt, height + 6);

    // Calculate different "cover" values based on the 2 ridgeHeight calcs
    if (ridgeHeight === height + 6) {
      cover = Math.round(Math.sqrt(Math.pow(wid, 2) - Math.pow(ridgeHeight, 2)));
    } else {
      cover = Math.round(Math.cos(i * deg2Rad) * wid);
    }

    let sitCover = Math.round(cover - (sitDepth + 3));
    let chairCover = Math.max(Math.round(cover - (chairDepth + 3)), 0);

    let sitTarpHt = Math.round(Math.tan(i * deg2Rad) * sitCover);
    let chairTarpHt = Math.round(Math.tan(i * deg2Rad) * chairCover);

    coverClear = cover - bodyWidth;
    sitTarpHtClear = sitTarpHt - sitHeight;
    chairTarpHtClear = chairTarpHt - chairHeight;

    outputObj = item.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: i });

    if (sitTarpHtClear < 4 || chairTarpHtClear < 4) {
      break;
    }
  }
  finalObj.push(outputObj);
});
// GOT IT!
console.log(finalObj);

// finalObj.forEach(item => {
//   if (!item[2]) {
//     console.log(item);
//   }
// });
