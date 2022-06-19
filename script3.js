// I need to import these, they can't be in each config component

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

// console.log(allTarps[0].tarpSizes);

// Global state and variables
const height = 74;
const chairHeight = 46;
// Degree to radian conversion
const deg2Rad = Math.PI / 180;
// Calculations based on user's height
const sitHeight = height / 2;
const sitDepth = (height * 7) / 32;
const chairDepth = (height * 13) / 32;

// Configuration specific constants
const configName = "Lean-To";
const configType = "Lean-To";
const configAngles = [30, 60];

let subset = [];
let subset2 = [];
let sleepClr = 0;

// Calculate sleep clearance and output tarps with len + 4 > height
for (let i = 0; i < allTarps.length; i++) {
  for (let j = 0; j < allTarps[i].tarpSizes.length; j++) {
    let len = allTarps[i]["tarpSizes"][j][0];
    sleepClr = len * 12 - height;

    if (sleepClr > 4) {
      let tarpType = allTarps[i]["tarpCategory"] + " " + allTarps[i]["tarpRatio"];

      if (allTarps[i]["tarpSizes"].indexOf(allTarps[i]["tarpSizes"][j]) && !subset.includes(allTarps[i]["tarpSizes"][j])) {
        subset.push([allTarps[i]["tarpSizes"][j], tarpType]);
        // subset2.push(allTarps[i]["tarpSizes"][j]);

        // subset2 may be the better option, just grab the ratio and category at the end

        /* I commented the break out because I want "all" the allTarps */
        // if (allTarps[i].includes(subset[i])) {
        //   break;
        // }
      }
    }
  }
}
console.log("subset: ", subset);
// console.log(allTarps);

let outputObj = [];
let finalObj = [];

let cover,
  ridgeHeight,
  sitTarpHtClear,
  chairTarpHtClear = 0;

// may need another for loop instead of forEach
subset.forEach(item => {
  let len = item[0][0] * 12;
  let wid = item[0][1] * 12;

  for (let i = configAngles[1]; i >= configAngles[0]; i--) {
    let sleepClear = len - height;

    ridgeHt = Math.trunc(Math.round(Math.sin(i * deg2Rad) * wid));

    // Have to reduce the ridgeline height for really big tarps
    ridgeHeight = Math.min(ridgeHt, height + 6);

    // Calculate different "cover" values based on the 2 ridgeHeight calcs
    if (ridgeHeight === height + 6) {
      cover = Math.round(Math.sqrt(Math.pow(wid, 2) - Math.pow(ridgeHeight, 2)));
    } else {
      cover = Math.round(Math.cos(i * deg2Rad) * wid);
    }

    let sitCover = Math.round(cover - (sitDepth + 3));
    let chairCover = Math.round(cover - (chairDepth + 3));

    let sitTarpHt = Math.round(Math.tan(i * deg2Rad) * sitCover);
    let chairTarpHt = Math.round(Math.tan(i * deg2Rad) * chairCover);

    sitTarpHtClear = sitTarpHt - sitHeight;
    chairTarpHtClear = chairTarpHt - chairHeight;

    // Changing the # gives a different angle - this is fucked up, I changed it to 5 which knocked out 7 x 7 but still 21 arrays and no 7x7, 7 x 9 repeats - WTF? forEach?
    if (sitTarpHtClear > 20) {
      // outputObj = [item].concat({ sleepClear, cover, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: i, fuck: "fuck" });
      outputObj = item;
    }
  }
  finalObj.push(outputObj);
});
// GOT IT!
console.log(finalObj);

// forEach is not good for this
finalObj.forEach(item => {
  let finalOutput = [];
  if (item.length !== 0) {
    finalOutput.push(item);
    // console.log(item);
  }
  // new cover = need new angle as opposite (ridgeheight) / hyp, then use that angle to find cover, then calcualte sitTarpHtClear
});

// WHENE/WHERE DO I GET TARP TYPES S\A Rectangle 1:2?
