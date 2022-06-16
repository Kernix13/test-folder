// I need to import these somehow, they can't be in each config component
const square = [
  [5, 5],
  [6, 6],
  [7, 7],
  [8, 8],
  [9, 9],
  [10, 10]
];

const rectangle = [
  {
    "Rectangle 1:2": [
      [6, 12],
      [7, 14],
      [8, 16],
      [10, 20]
    ]
  },
  {
    rect2to3: [
      [6, 9],
      [8, 12],
      [10, 15],
      [12, 18]
    ]
  },
  {
    rect3to4: [
      [6, 8],
      [9, 12],
      [12, 16]
    ]
  },
  {
    rect3to5: [
      [6, 10],
      [9, 15],
      [12, 20]
    ]
  },
  {
    rect4to5: [
      [4, 5],
      [8, 10],
      [12, 15],
      [16, 20]
    ]
  },
  {
    rectOdd: [
      [5, 7],
      [7, 9]
    ]
  }
];

const allTarps = [
  {
    "Rectangle 1:2": [
      [6, 12],
      [7, 14],
      [8, 16],
      [10, 20]
    ]
  },
  {
    "Rectangle 2:3": [
      [6, 9],
      [8, 12],
      [10, 15],
      [12, 18]
    ]
  },
  {
    "Rectangle 3:4": [
      [6, 8],
      [9, 12],
      [12, 16]
    ]
  },
  {
    "Rectangle 3:5": [
      [6, 10],
      [9, 15],
      [12, 20]
    ]
  },
  {
    "Rectangle 4:5": [
      [4, 5],
      [8, 10],
      [12, 15],
      [16, 20]
    ]
  },
  {
    "Other rectangle": [
      [5, 7],
      [7, 9]
    ]
  },
  {
    Square: [
      [5, 5],
      [6, 6],
      [7, 7],
      [8, 8],
      [9, 9],
      [10, 10]
    ]
  }
];

const tarps = [
  [
    [5, 5],
    [6, 6],
    [7, 7],
    [8, 8],
    [9, 9],
    [10, 10]
  ],
  [
    [6, 12],
    [7, 14],
    [8, 16],
    [9, 18],
    [10, 20]
  ],
  [
    [6, 9],
    [8, 12],
    [10, 15],
    [12, 18]
  ],
  [
    [6, 8],
    [9, 12],
    [12, 16]
  ],
  [
    [6, 10],
    [9, 15],
    [12, 20]
  ],
  [
    [4, 5],
    [8, 10],
    [12, 15],
    [16, 20]
  ],
  [
    [5, 7],
    [7, 9]
  ]
];
// console.log(tarps[1]);

// Global state and variables
const height = 74;
const chairHeight = 46;
const deg2Rad = Math.PI / 180;

// Calculations based on user's height
const sitHeight = height / 2;
const sitDepth = (height * 7) / 32;
const chairDepth = (height * 13) / 32;

// Configuration constants
const configName = "Lean-To";
const configType = "Lean-To";
const configAngles = [30, 60];
const configTarps = [square, rectangle];

let matches = [];
let sleepClear = 0;
for (let i = 0; i < tarps.length; i++) {
  for (let j = 0; j < tarps[i].length; j++) {
    let len = tarps[i][j][0];
    sleepClear = len * 12 - height; // must be > 0
    if (sleepClear > 4) {
      let index = tarps[i].indexOf(tarps[i][j]);
      // need arr.find() I think
      matches.push(tarps[i][j]);
      // console.log(tarps[i][j][0] * 12, tarps[i][j], index);
    }
  }
}
console.log(matches);

let tarpMatches = [];
// let angles = [];
let first = [];
let ridgeLines = [];
let tarpAngles = [];
let importantThings = {};

let cover = 0;
let ridgeHeight = 0;
let ridgeHtClear = 0;
let sitCover = 0;
let sitTarpHt = 0;
let sitTarpHtClear = 0;
let chairCover = 0;
let chairTarpHt = 0;
let chairTarpHtClear = 0;
// let outputObj = {}

matches.forEach(item => {
  let wid = item[1] * 12;
  const angles = [30, 35, 40, 45, 50, 55, 60];
  const angle = 45;
  cover = Math.round(Math.cos(angle * deg2Rad) * wid);
  ridgeHeight = Math.round(Math.sin(angle * deg2Rad) * wid);
  ridgeHtClear = ridgeHeight - sitHeight; // must be > 0
  sitCover = Math.round(cover - sitDepth);
  sitTarpHt = Math.round(Math.tan(angle * deg2Rad) * sitCover);
  sitTarpHtClear = sitTarpHt - sitHeight; // must be > 0
  chairCover = cover - chairDepth;
  chairTarpHt = Math.round(Math.tan(angle * deg2Rad) * chairCover);
  chairTarpHtClear = chairTarpHt - chairHeight; // must be > 0

  let outputObj = item.concat({ wid, sleepClear, ridgeHeight, ridgeHtClear, sitTarpHtClear, chairTarpHtClear });

  if (sitTarpHtClear > 0) {
    // console.log(outputObj);
    // console.log(chairTarpHtClear);
    // return outputObj;
    let outputObj = item.concat({ wid, sleepClear, ridgeHeight, ridgeHtClear, sitTarpHtClear, chairTarpHtClear });
  }
  console.log(outputObj);
  // for (let i = configAngles[0]; i <= configAngles[1]; i++) {
  //   cover = Math.round(Math.cos(i * deg2Rad) * wid);
  //   ridgeHeight = Math.round(Math.sin(i * deg2Rad) * wid);
  //   ridgeHtClear = ridgeHeight - sitHeight; // must be > 0
  //   sitCover = Math.round(cover - sitDepth);
  //   sitTarpHt = Math.round(Math.tan(i * deg2Rad) * sitCover);
  //   sitTarpHtClear = sitTarpHt - sitHeight; // must be > 0
  //   chairCover = cover - chairDepth;
  //   chairTarpHt = Math.round(Math.tan(i * deg2Rad) * chairCover);
  //   chairTarpHtClear = chairTarpHt - chairHeight; // must be > 0

  //   if (sitTarpHtClear > 1) {
  //     ridgeLines.push(ridgeHeight);
  //     tarpMatches.push(matches[item]);
  //     // importantThings = { lineHeight: ridgeLines[j], tarpSizes: tarpMatches[j] };
  //     first.push(tarpMatches.indexOf(matches[item]));
  //   }
  // }
  // console.log(outputObj);
});
// console.log(outputObj);

// How to turn 2 arrays into an object: 1. https://bobbyhadz.com/blog/javascript-create-object-from-two-arrays. 2. https://stackoverflow.com/questions/39127989/create-an-object-from-an-array-of-keys-and-an-array-of-values, 3. https://www.geeksforgeeks.org/how-to-create-an-object-from-two-arrays-in-javascript/, 4. https://www.tutorialspoint.com/how-to-combine-two-arrays-into-an-array-of-objects-in-javascript, 5.
// console.log(importantThings);
// console.log(tarpAngles);

// Variables dependent on for loop or forEach
