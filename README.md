# Temporary Notes

NOTE: ignore this repo - this is where I work on things before adding them to my other repos. I push it from time to time in the event my laptop dies. I do it this way becaue I do not want to clutter up the repos for my projects. Plus, it;s June 16th 2022 and IE ended yesterday. I've been having a lot of problems... so I want to make sure my work is backed-up.

Currently, I am working on my React Tarp Configurations project, however this only has the JavaScript...

## Tarp Configs TO-DO

1. Exit out of an array with the first element that meets the requirement - DONE USING BREAK - WRONG, i DO WANT TO RETURN THE SMALLEST TARP TO THE LARGEST TARP BECAUSE i WANT THE RIDGELINE FOR ALL SINCE i DO NOT KNOW WHAT TARP SIZE THE USER HAS
1. Exit out of a for loop iteration when requirement is met - BREAK???

```js
if (tarps[i].indexOf(tarps[i][j]) && !subset.includes(tarps[i][j]) && !subset.includes(tarps[i][j - 1]))
```

Most important calculations

1. `ridgeHeight`: this is the height to set your ridgeline so that you can sit under the tarp, and maybe sit in a chair
1. `sitTarpHtClear`: space above your head and the tarp when sitting - must be > 0
1. `sleepClear`: clearance from tarp edges from your head and feet
1. `cover`: distance from back of tarp to front of tarp

Old equations:

```js
const tarpSize = [96, 120];
const angle = 30;
const len = tarpSize[0];
const wid = tarpSize[1];

const ridgeHt = Math.round(tarpSize[1] * tarpSin);
const cover = Math.round(tarpSize[1] * tarpCos);

const tarpCos = Math.cos(angle * deg2Rad);
const tarpSin = Math.sin(angle * deg2Rad);
const tarpTan = Math.tan(angle * deg2Rad);

const chairDepth = 30;

const sitTarpHt = Math.round(tarpTan * sitCover);
const chairTarpHt = Math.round(tarpTan * chairCover);

const sleepClear = (len - height) / 2;
```

## How to turn 2 arrays into an object

1. https://bobbyhadz.com/blog/javascript-create-object-from-two-arrays.
2. https://stackoverflow.com/questions/39127989/create-an-object-from-an-array-of-keys-and-an-array-of-values,
3. https://www.geeksforgeeks.org/how-to-create-an-object-from-two-arrays-in-javascript/,
4. https://www.tutorialspoint.com/
5. how-to-combine-two-arrays-into-an-array-of-objects-in-javascript,

Removed this from the nested for loop:

```js
if (allTarpSizes[i]["tarpSizes"].indexOf(allTarpSizes[i]["tarpSizes"][j]) && !subset.includes(allTarpSizes[i]["tarpSizes"][j])) {
  // Remove tarpType if not needed
  subset.push([allTarpSizes[i]["tarpSizes"][j], tarpType]);
}
```

### useId

```jsx
import {useId} from 'react';
const id = useId();

// in jsx
<input id={id} type="text">
```

NOTE: **Forest tent** should be added to this list as well as **Half Pyramid**, both of which are A-Frames and variations of each other -

| Config  | Sleep clear.   | Cover width             | Edge height             |
| :------ | :------------- | :---------------------- | :---------------------- |
| Plow Pt | `cos(x)*diag`  | `cos(x) * len * 2`      | `sin(x) * len`          |
| Adir    | `hyp - ht`     | `cos(x) * hyp`          | `sin(x) * hyp`          |
| Dia     | `diag - ht`    | `(cos(x)*diag/2) * 2`   | `sin(X)*(diag / 2)`     |
| Hex Dia | `diag - ht`    | `(cos(45)*(len/2)) * 2` | `(sin(45)*(len/2)) * 2` |
| Lavvu   | `wid / 3 - ht` | `sin(60)*(wid / 3)`     | `sin(x)*wid / 3`        |
| Miners  | `.75*len - ht` | `0.678 * len`           | `0.857 * len`           |

NEXT: Arrowhead Wedge 22.5, Half Cone Fly 22.5 | Side-Wall 1:2 60° 33.3°, Side-Wall 3:5 55° 29°, Side-Wall 2:3 58° 27° | Holden Tent 4:5 58° 30°, Holden Tent 3:4 55° 33°, Holden Tent 2:3 56° 38°, Holden Tent 3:5 45° 40°, Holden Tent 1:2 50° 45° | Tetra, Trapezoid | Bakers WS 27.5 |

For ALL Side Wall LT and Holden Tent configs, sleepClear = `wid - (0.375ht/tan(x)*2)`, Cover = `cos(y) * len`, and ridgeHeight = `sin(y) * len`

Notes:

- Side-Wall LT - 33.3 deg lean for a 1:2 ratio tarp, sides create a 60 deg angle, folds are at the 1/3 marks on ridgeline so opening is 1/3 if sides are 90 deg to the ground ->
  - MY CALCULATIONS ARE DEAD ON FOR THIS ONE - RE-CHECK HOLDEN AND BAKER WIND SHED CALCS
  - `x` for sleep clearance is 60 degrees, `y` for cover & height is 33.3 degrees
- 1:2 ration only configs: Lavvu, Tetra, Tube-Tent,
- **Plow point** sleep clearance = `cos(x) * diag` | COVER - by eye, find equation
- **Adirondack** sleep clearance = lean hypotenuse<sup>\*</sup> (hyp) = `(len/2) / sin(x) – (ht)`
- **Holden Tents: how to calculate sleep length?**
- Miner's Tent lean angle = 67.5 degrees. The decimals are approximations based on small model measurements. The actual geometry is 3D and so is too complicated for me to get the actual #'s. Always round up with this one.
- Arrowhead Wedge lean angle = 22.5
- Half Cone Fly lean angle = 22.5
