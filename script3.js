const allTarps = [
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

// Global state and variables
const height = 74;
const chairHeight = 46;
// Degree to radian conversion
const deg2Rad = Math.PI / 180;
// Calculations based on user's height
const sitHeight = height / 2;
const bodyWidth = height * (5 / 16);
const sitDepth = (height * 7) / 32;
const chairDepth = (height * 13) / 32;

// Configuration specific constants (remove?)
const configName = "Lean-To";
const configType = "Lean-To";

let subset = [];
let sleepClr = 0;

// Current config:
// Calculate sleep clearance and output tarps with len + 4 > height
for (let i = 0; i < allTarps.length; i++) {
  for (let j = 0; j < allTarps[i].tarpSizes.length; j++) {
    let len = allTarps[i]["tarpSizes"][j][0];
    sleepClr = len * 12 - height;

    if (sleepClr > 4) {
      let tarpType = allTarps[i]["tarpCategory"] + " " + allTarps[i]["tarpRatio"];

      if (allTarps[i]["tarpSizes"].indexOf(allTarps[i]["tarpSizes"][j]) && !subset.includes(allTarps[i]["tarpSizes"][j])) {
        // Remove tarpType if not needed
        subset.push([allTarps[i]["tarpSizes"][j], tarpType]);
      }
    }
  }
}
console.log("subset: ", subset);

// const configAngles = [30, 50];
const configAngles = [37, 75];

let outputObj = [];
let finalObj = [];

let cover,
  coverClear,
  ridgeHeight,
  sitTarpHtClear,
  chairTarpHtClear = 0;

// Current config:
subset.forEach(item => {
  let len = item[0][0] * 12;
  let wid = item[0][1] * 12;

  for (let i = configAngles[1]; i >= configAngles[0]; i--) {
    let sleepClear = len - height;

    ridgeHt = Math.trunc(Math.round(Math.sin(i * deg2Rad) * (wid * 0.5)));

    // Reduce the ridgeHeight to (height + 6) for really big tarps
    ridgeHeight = Math.min(ridgeHt, height + 6);

    // Calculate different "cover" values based on the 2 ridgeHeight calcs
    if (ridgeHeight === height + 6) {
      cover = Math.round(Math.sqrt(Math.pow(wid, 2) - Math.pow(ridgeHeight, 2)));
    } else {
      cover = Math.round(Math.cos(i * deg2Rad) * wid);
    }

    coverClear = cover - bodyWidth;
    sitTarpHtClear = ridgeHeight - sitHeight;
    chairTarpHtClear = ridgeHeight - chairHeight;

    outputObj = item.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: i });

    // Change the # to < 7 for A-Frame?
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
