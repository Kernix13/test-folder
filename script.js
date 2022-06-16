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
console.log(rectangle.rect4to5);

// Global state and variables
const height = 74;
const chairHeight = 46;
const deg2Rad = Math.PI / 180;

// Calculations based on user's height
const sitHeight = height / 2;
const sitDepth = (height * 7) / 32;
const chairDepth = (height * 13) / 32;

// These need to be dynamic
const tarpSize = [96, 120];
const angle = 30;
const len = tarpSize[0];
const wid = tarpSize[1];

const sleepClear = len - height; // must be > 0

// I need a component for EACH configuration, then I need to use a for loop for first square tarps, then rectangle tarps, but also a nested for loop to test incrementally the min angle to the max angle
function mainCalc() {}
const lean_to = {
  configName: "Lean-To",
  type: "Lean-To",
  // for loop
  angles: [30, 60],
  tarpTypes: [square, rectangle],
  sleepClear: len - height,
  cover(angle) {
    return Math.round(Math.cos(angle * deg2Rad) * wid);
  },
  ridgeHeight(angle) {
    return Math.round(Math.sin(angle * deg2Rad) * wid);
  },
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};

const cover = lean_to.cover(lean_to.angles[0]);
const ridgeHt = lean_to.ridgeHeight(lean_to.angles[0]);
const ridgeHtClear = ridgeHt - sitHeight; // must be > 0

// sitCover is to determine the height of the tarp at the user's sitHeight
const sitCover = Math.round(cover - sitDepth);
const sitTarpHt = lean_to.sitTarpHt(lean_to.angles[0]);
const sitTarpHtClear = sitTarpHt - sitHeight; // must be > 0

// chairCover is to determine the height of the tarp at the user's chairHeight
const chairCover = cover - chairDepth;
const chairTarpHt = lean_to.chairTarpHt(lean_to.angles[0]);
const chairTarpHtClear = chairTarpHt - chairHeight; // must be > 0

console.log(lean_to.angles);
console.log(square[1][0]);

let matches = [];
let match = [];
function something() {
  for (let i = lean_to.angles[0]; i <= lean_to.angles[1]; i++) {
    square.forEach((item, index) => {
      let len = square[index][0];
      let wid = square[index][1];
      const sleepClear = len * 12 - height; // must be > 0

      if (i === 45 && sleepClear > 0) {
        matches.push(square.indexOf(item));
        match = square[Math.min(matches)];
        console.log("match 1: " + match);
        return match;
      }
      console.log("match 2: " + match);
    });
    console.log("match 3: " + match);
  }
  console.log("match 4: " + match);
  return match;
}
// Why can't I get it?
console.log(something());
