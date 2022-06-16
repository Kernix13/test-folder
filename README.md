# Temporary Notes

NOTE: ignore this repo - this is where I work on things before adding them to my other repos. I push it from time to time in the event my laptop dies. I do it this way becaue I do not want to clutter up the repos for my projects. Plus, it;s June 16th 2022 and IE ended yesterday. I've been having a lot of problems... so I want to make sure my work is backed-up.

Currently, I am working on my Tarp Configurations project...

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
