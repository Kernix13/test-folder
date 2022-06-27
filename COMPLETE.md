# COMPLETED CONFIG CODE BLOCKS FOR LEAN TO'S AND A-FRAMES

Have to figure out common code so that I can use only ONE component file for Each category: 1) Lean-to's, 2) A-Frames, 3) Diagonals, 4) Tents

```js
// variables for all:
const mults = [0, 0.25, 0.333, 0.375, 0.5, 0.667, 0.678, 0.75, 0.857, 1];
const angles = [22.5, 27, 27.5, 30, 33, 33.3, 37, 38, 39, 40, 45, 50, 53, 55, 56, 58, 60, 67.5, 75];
```

# LEAN-TO & BACK WALL LT

1. Lean-to (LT)
1. Back Wall LT
1. A-Frame LT
1. Open Stall (Back Wall A-Frame LT)
1. Flat Roof LT
1. Back Wall Flat Roof LT

## 1 Lean to

```js
// Nested for loop - IDENTICAL FOR NEARLY EVERY CONFIG
let subset = [];
let sleepClr = 0;

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

// WORKS
const configAngles = [30, 50];
let outputObj = [];
let finalObj = [];

let cover,
  coverClear,
  ridgeHeight,
  sitTarpHtClear,
  chairTarpHtClear = 0;

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
```

## 2 Back Wall LT 25

```js
// const configAngles = [30, 50];
// WORKS
subset.forEach(item => {
  let len = item[0][0] * 12;
  let wid = item[0][1] * 12;
  let sleepClear = len - height;

  for (let i = configAngles[1]; i >= configAngles[0]; i--) {
    ridgeHt = Math.trunc(Math.round(Math.sin(i * deg2Rad) * (wid * 0.75) + wid * 0.25));

    // Reduce the ridge line height to (height + 6) for really big tarps
    ridgeHeight = Math.min(ridgeHt, height + 6);

    // Calculate different "cover" values based on the 2 ridgeHeight calcs
    if (ridgeHeight === height + 6) {
      cover = Math.round(Math.sqrt(Math.pow(wid, 2) - Math.pow(ridgeHeight, 2)));
    } else {
      cover = Math.round(Math.cos(i * deg2Rad) * (wid * 0.75));
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
```

## 3 Back Wall LT 33

```js
// const configAngles = [30, 50];
// WORKS
subset.forEach(item => {
  let len = item[0][0] * 12;
  let wid = item[0][1] * 12;
  let sleepClear = len - height;

  for (let i = configAngles[1]; i >= configAngles[0]; i--) {
    ridgeHt = Math.trunc(Math.round(Math.sin(i * deg2Rad) * (wid * 0.667) + wid * 0.333));

    // Reduce the ridgeHeight to (height + 6) for really big tarps
    ridgeHeight = Math.min(ridgeHt, height + 6);

    // Calculate different "cover" values based on the 2 ridgeHeight calcs
    if (ridgeHeight === height + 6) {
      cover = Math.round(Math.sqrt(Math.pow(wid, 2) - Math.pow(ridgeHeight, 2)));
    } else {
      cover = Math.round(Math.cos(i * deg2Rad) * (wid * 0.667));
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
```

# A-FRAME LT & FLAT ROOF LT

1. A-Frame LT
1. Flat Roof LT
1. Back Wall Flat Roof LT
1. Open Stall (Back Wall A-Frame LT)

## 4 A-Frame LT 33

New code:

```js
// WORKS
// const configAngles = [30, 50];
// This assumes the lean angle = a-frame angle, of course that may vary for cover
subset.forEach(item => {
  let len = item[0][0] * 12;
  let wid = item[0][1] * 12;
  let sleepClear = len - height;

  for (let i = configAngles[1]; i >= configAngles[0]; i--) {
    ridgeHt = Math.trunc(Math.round(Math.sin(i * deg2Rad) * (wid * 0.667)));

    // Reduce the ridgeHeight to (height + 6) for really big tarps
    ridgeHeight = Math.min(ridgeHt, height + 6);

    // Calculate different "cover" values based on the 2 ridgeHeight calcs
    if (ridgeHeight === height + 6) {
      cover = Math.round(Math.sqrt(Math.pow(wid, 2) - Math.pow(ridgeHeight, 2)));
    } else {
      cover = Math.round(Math.cos(i * deg2Rad) * wid);
    }

    // FLAT ROOF & A-FRAME CONFIGS do not need the extra equations
    coverClear = cover - bodyWidth;
    sitTarpHtClear = ridgeHeight - sitHeight;
    chairTarpHtClear = ridgeHeight - chairHeight;

    outputObj = item.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: i });

    // Changing the # to 7?
    if (sitTarpHtClear < 4 || chairTarpHtClear < 4) {
      break;
    }
  }
  finalObj.push(outputObj);
});
```

## 5 A-Frame LT 25

```js
// const configAngles = [30, 50];
// WORKS
// This assumes the lean angle = a-frame angle, of course that will vary for cover
subset.forEach(item => {
  let len = item[0][0] * 12;
  let wid = item[0][1] * 12;
  let sleepClear = len - height;

  for (let i = configAngles[1]; i >= configAngles[0]; i--) {
    ridgeHt = Math.trunc(Math.round(Math.sin(i * deg2Rad) * (wid * 0.75)));

    // Reduce the ridgeHeight to (height + 6) for really big tarps
    ridgeHeight = Math.min(ridgeHt, height + 6);

    // Calculate different "cover" values based on the 2 ridgeHeight calcs
    if (ridgeHeight === height + 6) {
      cover = Math.round(Math.sqrt(Math.pow(wid, 2) - Math.pow(ridgeHeight, 2)));
    } else {
      cover = Math.round(Math.cos(i * deg2Rad) * wid);
    }

    // FLAT ROOF & A-FRAME CONFIGS do not need the extra equations
    coverClear = cover - bodyWidth;
    sitTarpHtClear = ridgeHeight - sitHeight;
    chairTarpHtClear = ridgeHeight - chairHeight;

    outputObj = item.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: i });

    // Changing the # to 7?
    if (sitTarpHtClear < 4 || chairTarpHtClear < 4) {
      break;
    }
  }
  finalObj.push(outputObj);
});
```

## 6 Flat Roof LT 50

```js
// const configAngles = [30, 50];
// WORKS
let outputObj = [];
let finalObj = [];

let cover,
  ridgeHeight,
  sitTarpHtClear,
  chairTarpHtClear = 0;

subset.forEach(item => {
  let len = item[0][0] * 12;
  let wid = item[0][1] * 12;
  let sleepClear = len - height;

  for (let i = configAngles[1]; i >= configAngles[0]; i--) {
    ridgeHt = Math.trunc(Math.round(Math.sin(i * deg2Rad) * (wid * 0.5)));

    // Reduce the ridgeHeight to (height + 6) for really big tarps
    ridgeHeight = Math.min(ridgeHt, height + 6);

    // Calculate different "cover" values based on the 2 ridgeHeight calcs
    if (ridgeHeight === height + 6) {
      cover = Math.round(Math.sqrt(Math.pow(wid * 0.5, 2) - Math.pow(ridgeHeight, 2))) + wid * 0.5;
    } else {
      cover = Math.round(Math.cos(i * deg2Rad) * (wid * 0.5) + wid * 0.5);
    }

    // FLAT ROOF & A-FRAME CONFIGS do not need the extra equations
    coverClear = cover - bodyWidth;
    sitTarpHtClear = ridgeHeight - sitHeight;
    chairTarpHtClear = ridgeHeight - chairHeight;

    outputObj = item.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: i });

    if (sitTarpHtClear < 4 || chairTarpHtClear < 4) {
      break;
    }
  }
  finalObj.push(outputObj);
});
```

## 7 Flat Roof LT 33

```js
// const configAngles = [30, 50];
// WORKS
let outputObj = [];
let finalObj = [];

subset.forEach(item => {
  let len = item[0][0] * 12;
  let wid = item[0][1] * 12;
  let sleepClear = len - height;

  for (let i = configAngles[1]; i >= configAngles[0]; i--) {
    ridgeHt = Math.trunc(Math.round(Math.sin(i * deg2Rad) * (wid * 0.667)));

    // Reduce the ridgeHeight to (height + 6) for really big tarps
    ridgeHeight = Math.min(ridgeHt, height + 6);

    // Calculate different "cover" values based on the 2 ridgeHeight calcs
    if (ridgeHeight === height + 6) {
      cover = Math.round(Math.sqrt(Math.pow(wid * 0.667, 2) - Math.pow(ridgeHeight, 2))) + wid * 0.333;
    } else {
      cover = Math.round(Math.cos(i * deg2Rad) * (wid * 0.667) + wid * 0.333);
    }

    // FLAT ROOF & A-FRAME CONFIGS do not need the extra equations
    coverClear = cover - bodyWidth;
    sitTarpHtClear = ridgeHeight - sitHeight;
    chairTarpHtClear = ridgeHeight - chairHeight;

    outputObj = item.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: i });

    if (sitTarpHtClear < 4 || chairTarpHtClear < 4) {
      break;
    }
  }
  finalObj.push(outputObj);
});
```

## 8 Flat Roof LT 25

```js
// const configAngles = [30, 50];
// WORKS
let outputObj = [];
let finalObj = [];

subset.forEach(item => {
  let len = item[0][0] * 12;
  let wid = item[0][1] * 12;
  let sleepClear = len - height;

  for (let i = configAngles[1]; i >= configAngles[0]; i--) {
    ridgeHt = Math.trunc(Math.round(Math.sin(i * deg2Rad) * (wid * 0.75)));

    // Reduce the ridgeHeight to (height + 6) for really big tarps
    ridgeHeight = Math.min(ridgeHt, height + 6);

    // Calculate different "cover" values based on the 2 ridgeHeight calcs
    if (ridgeHeight === height + 6) {
      cover = Math.round(Math.sqrt(Math.pow(wid * 0.75, 2) - Math.pow(ridgeHeight, 2))) + wid * 0.25;
    } else {
      cover = Math.round(Math.cos(i * deg2Rad) * (wid * 0.75) + wid * 0.25);
    }

    // FLAT ROOF & A-FRAME CONFIGS do not need the extra equations
    coverClear = cover - bodyWidth;
    sitTarpHtClear = ridgeHeight - sitHeight;
    chairTarpHtClear = ridgeHeight - chairHeight;

    outputObj = item.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: i });

    if (sitTarpHtClear < 4 || chairTarpHtClear < 4) {
      break;
    }
  }
  finalObj.push(outputObj);
});
```

## 9 Back Wall Flat Roof LT 25

```js
// const configAngles = [30, 50];
// WORKS
subset.forEach(item => {
  let len = item[0][0] * 12;
  let wid = item[0][1] * 12;
  let sleepClear = len - height;

  for (let i = configAngles[1]; i >= configAngles[0]; i--) {
    ridgeHt = Math.trunc(Math.round(Math.sin(i * deg2Rad) * (wid * 0.5) + wid * 0.25));

    // Reduce the ridgeHeight to (height + 6) for really big tarps
    ridgeHeight = Math.min(ridgeHt, height + 6);

    // Calculate different "cover" values based on the 2 ridgeHeight calcs
    if (ridgeHeight === height + 6) {
      cover = Math.round(Math.sqrt(Math.pow(wid * 0.5, 2) - Math.pow(ridgeHeight, 2))) + wid * 0.25;
    } else {
      cover = Math.round(Math.cos(i * deg2Rad) * (wid * 0.5) + wid * 0.25);
    }

    // FLAT ROOF & A-FRAME CONFIGS do not need the extra equations
    coverClear = cover - bodyWidth;
    sitTarpHtClear = ridgeHeight - sitHeight;
    chairTarpHtClear = ridgeHeight - chairHeight;

    outputObj = item.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: i });

    if (sitTarpHtClear < 4 || chairTarpHtClear < 4) {
      break;
    }
  }
  finalObj.push(outputObj);
});
```

## 10 Back Wall Flat Roof LT 33

```js
// const configAngles = [30, 50];
// WORKS
subset.forEach(item => {
  let len = item[0][0] * 12;
  let wid = item[0][1] * 12;
  let sleepClear = len - height;

  for (let i = configAngles[1]; i >= configAngles[0]; i--) {
    ridgeHt = Math.trunc(Math.round(Math.sin(i * deg2Rad) * (wid * 0.333) + wid * 0.333));

    // Reduce the ridgeHeight to (height + 6) for really big tarps
    ridgeHeight = Math.min(ridgeHt, height + 6);

    // Calculate different "cover" values based on the 2 ridgeHeight calcs
    if (ridgeHeight === height + 6) {
      cover = Math.round(Math.sqrt(Math.pow(wid * 0.333, 2) - Math.pow(ridgeHeight, 2))) + wid * 0.333;
    } else {
      cover = Math.round(Math.cos(i * deg2Rad) * (wid * 0.333) + wid * 0.333);
    }

    // FLAT ROOF & A-FRAME CONFIGS do not need the extra equations
    coverClear = cover - bodyWidth;
    sitTarpHtClear = ridgeHeight - sitHeight;
    chairTarpHtClear = ridgeHeight - chairHeight;

    outputObj = item.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: i });

    if (sitTarpHtClear < 4 || chairTarpHtClear < 4) {
      break;
    }
  }
  finalObj.push(outputObj);
});
```

## 11 Open Stall

```js
// WORKS
const configAngles = [30, 60];
// This assumes the lean angle = a-frame angle, of course that may vary for cover
// Rectangle 1:2 only
subset.forEach(item => {
  let len = item[0][0] * 12;
  let wid = item[0][1] * 12;
  let sleepClear = len - height;

  for (let i = configAngles[1]; i >= configAngles[0]; i--) {
    ridgeHt = Math.trunc(Math.round(Math.sin(i * deg2Rad) * (wid * 0.333) + wid * 0.333));

    // Reduce the ridgeHeight to (height + 6) for really big tarps
    ridgeHeight = Math.min(ridgeHt, height + 6);

    // Calculate different "cover" values based on the 2 ridgeHeight calcs
    if (ridgeHeight === height + 6) {
      cover = Math.round(Math.sqrt(Math.pow(wid, 2) - Math.pow(ridgeHeight, 2)));
    } else {
      cover = Math.round(Math.cos(i * deg2Rad) * (wid * 0.667));
    }

    // FLAT ROOF & A-FRAME CONFIGS do not need the extra equations
    coverClear = cover - bodyWidth;
    sitTarpHtClear = ridgeHeight - sitHeight;
    chairTarpHtClear = ridgeHeight - chairHeight;

    outputObj = item.concat({ sleepClear, cover, coverClear, ridgeHeight, sitTarpHtClear, chairTarpHtClear, angle: i });

    if (sitTarpHtClear < 4 || chairTarpHtClear < 4) {
      break;
    }
  }
  finalObj.push(outputObj);
});
```

# A-FRAMES

These will be very similar to Lean-To (but make the condition + 6?)

1. A-Frame
1. Side Wall A-Frame (**50**, 33)

## 12 A-Frame

```js
// Note: const configAngles = [45, 75];
// WORKS!
const configAngles = [37, 75];

subset.forEach(item => {
  let len = item[0][0] * 12;
  let wid = item[0][1] * 12;
  let sleepClear = len - height;

  for (let i = configAngles[1]; i >= configAngles[0]; i--) {
    ridgeHt = Math.trunc(Math.round(Math.sin(i * deg2Rad) * (wid * 0.5)));

    // Reduce the ridgeHeight to (height + 6) for really big tarps
    ridgeHeight = Math.min(ridgeHt, height + 6);

    // Calculate different "cover" values based on the 2 ridgeHeight calcs
    if (ridgeHeight === height + 6) {
      cover = Math.round(Math.sqrt(Math.pow(wid, 2) - Math.pow(ridgeHeight, 2)));
    } else {
      cover = Math.round(Math.cos(i * deg2Rad) * wid);
    }

    // FLAT ROOF & A-FRAME CONFIGS do not need the extra equations
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
```

## 13 Side-WAll AF 50

```js
// WORKS
const configAngles = [37, 75];
// This assumes the lean angle = a-frame angle, of course that may vary for cover
subset.forEach(item => {
  let len = item[0][0] * 12;
  let wid = item[0][1] * 12;
  let sleepClear = len - height;

  for (let i = configAngles[1]; i >= configAngles[0]; i--) {
    ridgeHt = Math.trunc(Math.round(Math.sin(i * deg2Rad) * (wid * 0.25) + wid * 0.25));

    // Reduce the ridgeHeight to (height + 6) for really big tarps
    ridgeHeight = Math.min(ridgeHt, height + 6);

    // Calculate different "cover" values based on the 2 ridgeHeight calcs
    if (ridgeHeight === height + 6) {
      cover = Math.round(Math.sqrt(Math.pow(wid, 2) - Math.pow(ridgeHeight, 2)));
    } else {
      cover = Math.round(Math.cos(i * deg2Rad) * (wid * 0.5));
    }

    // FLAT ROOF & A-FRAME CONFIGS do not need the extra equations
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
```

## 14 Side-WAll AF 33

```js
// WORKS
const configAngles = [37, 75];
// This assumes the lean angle = a-frame angle, of course that may vary for cover
subset.forEach(item => {
  let len = item[0][0] * 12;
  let wid = item[0][1] * 12;
  let sleepClear = len - height;

  for (let i = configAngles[1]; i >= configAngles[0]; i--) {
    ridgeHt = Math.trunc(Math.round(Math.sin(i * deg2Rad) * (wid * 0.333) + wid * 0.333));

    // Reduce the ridgeHeight to (height + 6) for really big tarps
    ridgeHeight = Math.min(ridgeHt, height + 6);

    // Calculate different "cover" values based on the 2 ridgeHeight calcs
    if (ridgeHeight === height + 6) {
      cover = Math.round(Math.sqrt(Math.pow(wid, 2) - Math.pow(ridgeHeight, 2)));
    } else {
      cover = Math.round(Math.cos(i * deg2Rad) * (wid * 0.333));
    }

    // FLAT ROOF & A-FRAME CONFIGS do not need the extra equations
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
```

# TUBE TENTS

These will be very similar to Lean-To (but make the condition + 6?)

1. Tube Tent
1. Open Tube Tent (C-Fly), (**50**, 33)

## 15 Tube tent

- [x] I will need to grab ONLY the 1:2 rectangle array in the first for loop block
- [x] I need to lose the for loop and just do i = 60
- [ ] I need to group all 1:2 together if there are a lot of similarities (?)

```js
// code
for (let i = 0; i < allTarps[0].tarpSizes.length; i++) {
  let len = allTarps[0]["tarpSizes"][i][0];
  sleepClr = len * 12 - height;

  if (sleepClr > 4) {
    let tarpType = allTarps[0]["tarpCategory"] + " " + allTarps[0]["tarpRatio"];

    if (allTarps[0]["tarpSizes"].indexOf(allTarps[0]["tarpSizes"][i]) && !subset.includes(allTarps[0]["tarpSizes"][i])) {
      // Remove tarpType if not needed
      subset.push([allTarps[0]["tarpSizes"][i], tarpType]);
    }
  }
}
```

## 16 Open Tube Tent 50 (C-Fly 50)

First config with 2 Fixed Angles

```js
// code
```

## 17 Open Tube Tent 33 (C-Fly 33)

2 Fixed Angles

```js
// code
```

# DIAGONAL LEAN-TOS

1. Plow Point
1. Adirondack

Total = 2, cumulative toal = 19

DOUBLE-CHECK ALL DIAGONALS

## 18 Plow Point 33

New Code

```js
// code
```

NOTES

LT, BWLT

```
LT   Ridge = wid * 1.0 + wid * 0
BW25 Ridge = wid * .75 + wid * .25
BW33 Ridge = wid * .667 + wid * .333

LT   cover = wid * 1.0
BW25 cover = wid * .75
BW33 cover = wid * .667
```

AFLT, FRLT

```
AFLT33 Ridge = wid * .667
AFLT25 Ridge = wid * .75
FRLT50 Ridge = wid * .5
FRLT33 Ridge = wid * .667
FRLT25 Ridge = wid * .75

AFLT33 Cover = wid * 1 + wid * 0
AFLT25 Cover = wid * 1 + wid * 0
FRLT50 Cover = wid * .5 + wid * .5
FRLT33 Cover = wid * .667 + wid * .333
FRLT25 Cover = wid * .75 + wid * .25
```
