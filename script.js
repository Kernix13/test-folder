// I need to import these, they can't be in each config component
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

console.log(allTarps[0]);

const tarps = [
  [
    [6, 12],
    [7, 14],
    [8, 16],
    [9, 18],
    [10, 20]
  ],
  [
    [6, 10],
    [9, 15],
    [12, 20]
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
    [4, 5],
    [8, 10],
    [12, 15],
    [16, 20]
  ],
  [
    [5, 7],
    [7, 9]
  ],
  [
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
const configAngles = [30, 45];
const configTarps = [square, rectangle];

let matches = [];
let subset = [];
let outputObj = [];
let finalObj = [];
let sleepClr = 0;
for (let i = 0; i < tarps.length; i++) {
  for (let j = 0; j < tarps[i].length; j++) {
    let len = tarps[i][j][0];
    sleepClr = len * 12 - height; // must be > 0
    if (sleepClr > 4) {
      // REMOVE MATCHES?
      matches.push(tarps[i][j]);
      if (tarps[i].indexOf(tarps[i][j]) && !subset.includes(tarps[i][j])) {
        subset.push(tarps[i][j]);

        /* I commented the break out because I want "all" the tarps */
        // if (tarps[i].includes(subset[i])) {
        //   break;
        // }
      }
    }
  }
}

let tarpMatches = [];
// let angles = [];
let first = [];
let ridgeLines = [];
let tarpAngles = [];
let importantThings = {};

let cover = 0;
let ridgeHeight = 0;
let sitCover = 0;
let sitTarpHt = 0;
let sitTarpHtClear = 0;
let chairCover = 0;
let chairTarpHt = 0;
let chairTarpHtClear = 0;

subset.forEach(item => {
  let wid = item[1] * 12;
  let len = item[0] * 12;

  for (let angle = configAngles[1]; angle >= configAngles[0]; angle--) {
    let sleepClear = len - height;
    cover = Math.round(Math.cos(angle * deg2Rad) * wid);
    ridgeHt = Math.round(Math.sin(angle * deg2Rad) * wid);
    // ridgeHeight = Math.round(Math.sin(angle * deg2Rad) * wid);
    ridgeHeight = Math.min(ridgeHt, height + 6);

    // **** NEED TO RECALCULATE THESE 3 IF RIDGEHEIGHT = HEIGHT + 6 WHICH MEANS COVER HAS TO BE RECALULATED AS WELL
    sitCover = Math.round(cover - (sitDepth + 3));
    sitTarpHt = Math.round(Math.tan(angle * deg2Rad) * sitCover);
    sitTarpHtClear = sitTarpHt - sitHeight; // must be > 0

    chairCover = cover - chairDepth;
    chairTarpHt = Math.round(Math.tan(angle * deg2Rad) * chairCover);
    chairTarpHtClear = chairTarpHt - chairHeight; // ideally > 0

    // Changing the # gives a different angle
    if (sitTarpHtClear > 3) {
      outputObj = [item].concat({ sleepClear, cover, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle });
      // How do I break when first angle matches requirements?
      // No I want the smallest angle possible or else the ridgeline will be too high -
      // if (ridgeHeight > height + 3) {

      // }
    }
  }
  finalObj.push(outputObj);
});
// GOT IT!
console.log(finalObj);

finalObj.forEach(item => {
  if (item.length !== 0) {
    console.log(item);
  }
  // new cover = need new angle as opposite (ridgeheight) / hyp, then use that angle to find cover, then calcualte sitTarpHtClear
});
