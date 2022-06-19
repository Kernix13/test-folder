// It appears sitTarpHt and chairTarpHt are the same for many configs
// Consider global var for diagonal = 2 * len * len

const lean_to = {
  configName: "Lean-To",
  type: "Lean-To",
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

// what about frlt 67 and 75? and should this one be Flat Roof LT 50?
const flat_roof_LT50 = {
  configName: "Flat Roof LT",
  type: "Lean-To",
  angles: [30, 60],
  tarpTypes: [square, rectangle],
  sleepClear: len - height,
  cover(angle) {
    return Math.round(Math.cos(angle * deg2Rad) * (wid * 0.5) + wid * 0.5);
  },
  ridgeHeight(angle) {
    return Math.round(Math.sin(angle * deg2Rad) * (wid * 0.5));
  },
  // get the ridgeHeight at the 50 mark and then test
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  // get the ridgeHeight at the 50 mark and then test
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};
const flat_roof_LT67 = {
  configName: "Flat Roof LT",
  type: "Lean-To",
  angles: [30, 60],
  tarpTypes: [square, rectangle],
  sleepClear: len - height,
  cover(angle) {
    return Math.round(Math.cos(angle * deg2Rad) * (wid * 0.667) + wid * 0.333);
  },
  ridgeHeight(angle) {
    return Math.round(Math.sin(angle * deg2Rad) * (wid * 0.667));
  },
  // get the ridgeHeight at the 2/3rds mark and then test
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  // get the ridgeHeight at the 2/3rds mark and then test
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};
const flat_roof_LT75 = {
  configName: "Flat Roof LT",
  type: "Lean-To",
  angles: [30, 60],
  tarpTypes: [square, rectangle],
  sleepClear: len - height,
  cover(angle) {
    return Math.round(Math.cos(angle * deg2Rad) * (wid * 0.75) + wid * 0.25);
  },
  ridgeHeight(angle) {
    return Math.round(Math.sin(angle * deg2Rad) * (wid * 0.75));
  },
  // get the ridgeHeight at the 75 mark and then test
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  // get the ridgeHeight at the 75 mark and then test
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};

const back_wall_LT25 = {
  configName: "Back Wall LT 25",
  type: "Lean-To",
  angles: [30, 60],
  tarpTypes: [square, rectangle],
  sleepClear: len - height,
  cover(angle) {
    return Math.round(Math.cos(angle * deg2Rad) * (wid * 0.75));
  },
  ridgeHeight(angle) {
    return Math.round(Math.sin(angle * deg2Rad) * (wid * 0.75) + wid * 0.25);
  },
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};

const back_wall_LT33 = {
  configName: "Back Wall LT 33",
  type: "Lean-To",
  angles: [30, 45, 60],
  tarpTypes: [square, rectangle],
  sleepClear: len - height,
  cover(angle) {
    return Math.round(Math.cos(angle * deg2Rad) * (wid * 0.667));
  },
  ridgeHeight(angle) {
    return Math.round(Math.sin(angle * deg2Rad) * (wid * 0.667) + wid * 0.333);
  },
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};

const bwfr_LT25 = {
  configName: "BWFR LT 25",
  type: "Lean-To",
  angles: [30, 45, 60],
  tarpTypes: [square, rectangle],
  sleepClear: len - height,
  cover(angle) {
    return Math.round(Math.cos(angle * deg2Rad) * (wid * 0.5) + wid * 0.25);
  },
  ridgeHeight(angle) {
    return Math.round(Math.sin(angle * deg2Rad) * (wid * 0.5) + wid * 0.25);
  },
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};

const bwfr_LT33 = {
  configName: "BWFR LT 33",
  type: "Lean-To",
  angles: [30, 45, 60],
  tarpTypes: [square, rectangle],
  sleepClear: len - height,
  cover(angle) {
    return Math.round(Math.cos(angle * deg2Rad) * (wid * 0.333) + wid * 0.333);
  },
  ridgeHeight(angle) {
    return Math.round(Math.sin(angle * deg2Rad) * (wid * 0.667) + wid * 0.333);
  },
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};

// Move all A-Frames to under Lean-Tos
const aframe = {
  configName: "A-Frame",
  type: "A-Frame",
  angles: [45, 60],
  tarpTypes: [square, rectangle],
  sleepClear: len - height,
  cover(angle) {
    return Math.round(Math.cos(angle * deg2Rad) * wid);
  },
  ridgeHeight(angle) {
    return Math.round(Math.sin(angle * deg2Rad) * (wid * 0.5));
  },
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};

const tube_tent = {
  configName: "Tube Tent",
  type: "A-Frame",
  angles: [45, 60],
  tarpTypes: [rectangle.rect1to2],
  sleepClear: len - height,
  cover(angle) {
    return Math.round(Math.cos(angle * deg2Rad) * wid * 0.667);
  },
  ridgeHeight(angle) {
    return Math.round(Math.sin(angle * deg2Rad) * wid * 0.333);
  },
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};

const aframe_LT75 = {
  configName: "A-Frame LT 75",
  type: "A-Frame",
  angles: [45, 60],
  tarpTypes: [square, rectangle],
  sleepClear: len - height,
  cover(angle) {
    // Wrong, s\b Math.round(Math.cos(i * deg2Rad) * wid); same as A-frame
    return Math.round(Math.cos(angle * deg2Rad) * wid * 0.75 + Math.cos(angle * deg2Rad) * wid * 0.25);
  },
  ridgeHeight(angle) {
    return Math.round(Math.sin(angle * deg2Rad) * wid * 0.75);
  },
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};

const aframe_LT67 = {
  configName: "A-Frame LT 67",
  type: "A-Frame",
  angles: [45, 60],
  tarpTypes: [square, rectangle],
  sleepClear: len - height,
  cover(angle) {
    // Wrong, s\b Math.round(Math.cos(i * deg2Rad) * wid); same as A-frame
    return Math.round(Math.cos(angle * deg2Rad) * wid * 0.667 + Math.cos(angle * deg2Rad) * wid * 0.333);
  },
  ridgeHeight(angle) {
    return Math.round(Math.sin(angle * deg2Rad) * wid * 0.667);
  },
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};

const open_stall = {
  configName: "Open Stall",
  type: "A-Frame",
  angles: [45, 60],
  tarpTypes: [square, rectangle],
  sleepClear: len - height,
  cover(angle) {
    // not 0.333 *2, but 0.667
    return Math.round(Math.cos(angle * deg2Rad) * wid * 0.333 * 2);
  },
  ridgeHeight(angle) {
    return Math.round(Math.sin(angle * deg2Rad) * wid * 0.333 + wid * 0.333);
  },
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};

const side_wallAF50 = {
  configName: "Side Wall AF",
  type: "A-Frame",
  angles: [45, 60],
  tarpTypes: [square, rectangle],
  sleepClear: len - height,
  cover(angle) {
    return Math.round(Math.cos(angle * deg2Rad) * wid * 0.5);
  },
  ridgeHeight(angle) {
    return Math.round(Math.sin(angle * deg2Rad) * wid * 0.25 + wid * 0.25);
  },
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};

const side_wallAF33 = {
  configName: "Side Wall AF",
  type: "A-Frame",
  angles: [45, 60],
  tarpTypes: [square, rectangle],
  sleepClear: len - height,
  cover(angle) {
    return Math.round(Math.cos(angle * deg2Rad) * wid * 0.333);
  },
  ridgeHeight(angle) {
    return Math.round(Math.sin(angle * deg2Rad) * wid * 0.333 + wid * 0.333);
  },
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};

const open_tube50 = {
  configName: "Open Tube Tent 50",
  type: "A-Frame",
  angles: [30, 60],
  tarpTypes: [rectangle.rect1to2],
  sleepClear: len - height,
  cover(angle) {
    return Math.round(Math.cos(angle * deg2Rad) * wid * 0.5 + Math.cos(angle * deg2Rad) * wid * 0.25);
  },
  ridgeHeight(angle) {
    return Math.round(Math.sin(angle * deg2Rad) * wid * 0.5 + wid * 0.25);
  },
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};

const open_tube33 = {
  configName: "Open Tube Tent 33",
  type: "A-Frame",
  angles: [30, 45, 60, 75],
  tarpTypes: [rectangle.rect1to2],
  sleepClear: len - height,
  // I chose to make it a flat roof: open_tube_fr33
  cover(angle) {
    return Math.round(Math.cos(angle * deg2Rad) * wid * 0.333 + wid * 0.333);
  },
  ridgeHeight(angle) {
    return Math.round(Math.sin(angle * deg2Rad) * wid * 0.333);
  },
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};

// Sleep clearance change
const plow_point = {
  configName: "Plow Point 33",
  type: "Diagonal",
  angles: [33],
  tarpTypes: [square],
  // sleepClear: Math.cos(33 * deg2Rad) * Math.sqrt(2 * len * len) - ht,
  sleepClear(angle) {
    return Math.round(Math.cos(angle * deg2Rad) * Math.sqrt(2 * len * len) - height);
  },
  // Is cover correct? NO!
  cover(angle) {
    return Math.round(Math.cos(angle * deg2Rad) * len * 2);
  },
  ridgeHeight(angle) {
    return Math.round(Math.sin(angle * deg2Rad) * len);
  },
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};

const adirondack = {
  configName: "Adirondack 45",
  type: "Diagonal",
  angles: [45],
  tarpTypes: [square],
  // sleepClear: len / 2 / Math.sin(x) - ht,
  sleepClear(angle) {
    return Math.round(len / 2 / Math.sin(angle * deg2Rad) - height);
  },
  cover(angle) {
    return Math.round(Math.cos(angle * deg2Rad) * Math.sqrt(2 * len * len));
  },
  ridgeHeight(angle) {
    return Math.round(Math.sin(angle * deg2Rad) * Math.sqrt(2 * len * len));
  },
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};

const diamond = {
  configName: "Diamond",
  type: "Diagonal",
  angles: [45, 60],
  tarpTypes: [square],
  // sleepClear: Math.sqrt(2 * len * len) - ht,
  sleepClear(angle) {
    return Math.round(Math.sqrt(2 * len * len) - height);
  },
  cover(angle) {
    return Math.round(Math.cos(angle * deg2Rad) * Math.sqrt(2 * len * len) * 2);
  },
  ridgeHeight(angle) {
    return Math.round((Math.sin(angle * deg2Rad) * Math.sqrt(2 * len * len)) / 2);
  },
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};

const hex_diamond = {
  configName: "Hex Diamond 45",
  type: "Diagonal",
  angles: [45, 60],
  tarpTypes: [square],
  // sleepClear: Math.sqrt(2 * len * len) - ht,
  sleepClear(angle) {
    return Math.round(Math.sqrt(2 * len * len) - height);
  },
  cover(angle) {
    return Math.round(((Math.cos(angle * deg2Rad) * len) / 2) * 2);
  },
  ridgeHeight(angle) {
    return Math.round(((Math.sin(angle * deg2Rad) * len) / 2) * 2);
  },
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};

const half_cone = {
  configName: "Half Cone Fly 22.5",
  type: "Diagonal",
  angles: [22.5],
  tarpTypes: [square],
  // sleepClear: Math.sqrt(2 * len * len),
  sleepClear(angle) {
    return Math.round(Math.sqrt(2 * len * len) - height);
  },
  // my spreadsheet has sin instead of cos and 45 instead of 22.5?
  cover(angle) {
    return Math.round((Math.sin(angle * 2 * deg2Rad) * len) / 2);
  },
  ridgeHeight(angle) {
    return Math.round(Math.sin(angle * deg2Rad) * Math.sqrt(2 * len * len));
  },
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};

const arrowhead = {
  configName: "Arrowhead Wedge 22.5",
  type: "Diagonal",
  angles: [22.5],
  tarpTypes: [square],
  // sleepClear: ridgeHeight? that makes no sense???
  // sleepClear: Math.sqrt(2 * len * len) - ridgeHeight - ht,
  sleepClear(angle) {
    return Math.round(Math.sqrt(2 * len * len) - ridgeHeight - height);
  },
  // my spreadsheet has sin instead of cos and 45 instead of 22.5?
  cover(angle) {
    return Math.round((Math.sin(angle * 2 * deg2Rad) * len) / 2);
  },
  // my spreadsheet has cos instead of sin and 45 instead of 22.5?
  ridgeHeight(angle) {
    return Math.round((Math.cos(angle * 2 * deg2Rad) * len) / 2);
  },
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};

const lavvu = {
  configName: "Lavvu",
  type: "Tent",
  angles: [60],
  tarpTypes: [rectangle.rect1to2],
  sleepClear: wid / 3 - height,
  cover(angle) {
    return Math.round(Math.sin(angle * deg2Rad) * wid * 0.333);
  },
  ridgeHeight(angle) {
    return Math.round(Math.sin(angle * deg2Rad) * len);
  },
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};

const miners = {
  configName: "Miners Tent",
  type: "Tent",
  angles: [67.5],
  tarpTypes: [rectangle],
  // Geek37 double-check my hard-coded #'s
  sleepClear: 0.75 * len - height,
  cover: 0.678 * len,
  ridgeHeight: 0.857 * len,
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};

const bakers = {
  configName: "Bakers WS 27.5",
  type: "Lean-To",
  angles: [27.5],
  tarpTypes: [rectangle],
  sleepClear: wid / 2 - height,
  cover(angle) {
    return Math.round(Math.cos(angle * deg2Rad) * len);
  },
  ridgeHeight(angle) {
    return Math.round(Math.sin(angle * deg2Rad) * len);
  },
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};

const side_wall12 = {
  configName: "Side-Wall LT 1:2",
  type: "Lean-To",
  angles: [60, 33.3],
  tarpTypes: [rectangle],
  sleepClear(angle) {
    return Math.round(wid - (0.375 * height) / (Math.tan(angle[0]) * 2) - height);
  },
  cover(angle) {
    return Math.round(Math.cos(angle[1] * deg2Rad) * len);
  },
  ridgeHeight(angle) {
    return Math.round(Math.sin(angle[1] * deg2Rad) * len);
  },
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};
const side_wall35 = {
  configName: "Side-Wall LT 3:5",
  type: "Lean-To",
  angles: [55, 29],
  tarpTypes: [rectangle],
  sleepClear(angle) {
    return Math.round(wid - (0.375 * height) / (Math.tan(angle[0]) * 2) - height);
  },
  cover(angle) {
    return Math.round(Math.cos(angle[1] * deg2Rad) * len);
  },
  ridgeHeight(angle) {
    return Math.round(Math.sin(angle[1] * deg2Rad) * len);
  },
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};
const side_wall23 = {
  configName: "Side-Wall LT 2:3",
  type: "Lean-To",
  angles: [58, 27],
  tarpTypes: [rectangle],
  sleepClear(angle) {
    return Math.round(wid - (0.375 * height) / (Math.tan(angle[0]) * 2) - height);
  },
  cover(angle) {
    return Math.round(Math.cos(angle[1] * deg2Rad) * len);
  },
  ridgeHeight(angle) {
    return Math.round(Math.sin(angle[1] * deg2Rad) * len);
  },
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};

// Double check angle[0] - they should decrease
const holden45 = {
  configName: "Holden Tent 4:5",
  type: "Lean-To",
  angles: [58, 30],
  tarpTypes: [rectangle],
  sleepClear(angle) {
    return Math.round(wid - (0.375 * height) / (Math.tan(angle[0]) * 2) - height);
  },
  cover(angle) {
    return Math.round(Math.cos(angle[1] * deg2Rad) * len);
  },
  ridgeHeight(angle) {
    return Math.round(Math.sin(angle[1] * deg2Rad) * len);
  },
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};
const holden34 = {
  configName: "Holden Tent 3:4",
  type: "Lean-To",
  angles: [55, 33],
  tarpTypes: [rectangle],
  sleepClear(angle) {
    return Math.round(wid - (0.375 * height) / (Math.tan(angle[0]) * 2) - height);
  },
  cover(angle) {
    return Math.round(Math.cos(angle[1] * deg2Rad) * len);
  },
  ridgeHeight(angle) {
    return Math.round(Math.sin(angle[1] * deg2Rad) * len);
  },
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};
const holden23 = {
  configName: "Holden Tent 2:3",
  type: "Lean-To",
  angles: [56, 38],
  tarpTypes: [square, rectangle],
  sleepClear(angle) {
    return Math.round(wid - (0.375 * height) / (Math.tan(angle[0]) * 2) - height);
  },
  cover(angle) {
    return Math.round(Math.cos(angle[1] * deg2Rad) * len);
  },
  ridgeHeight(angle) {
    return Math.round(Math.sin(angle[1] * deg2Rad) * len);
  },
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};
const holden35 = {
  configName: "Holden Tent 3:5",
  type: "Lean-To",
  angles: [45, 40],
  tarpTypes: [square, rectangle],
  sleepClear(angle) {
    return Math.round(wid - (0.375 * height) / (Math.tan(angle[0]) * 2) - height);
  },
  cover(angle) {
    return Math.round(Math.cos(angle[1] * deg2Rad) * len);
  },
  ridgeHeight(angle) {
    return Math.round(Math.sin(angle[1] * deg2Rad) * len);
  },
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};
const holden12 = {
  configName: "Holden Tent 1:2",
  type: "Lean-To",
  angles: [50, 45],
  tarpTypes: [square, rectangle],
  sleepClear(angle) {
    return Math.round(wid - (0.375 * height) / (Math.tan(angle[0]) * 2) - height);
  },
  cover(angle) {
    return Math.round(Math.cos(angle[1] * deg2Rad) * len);
  },
  ridgeHeight(angle) {
    return Math.round(Math.sin(angle[1] * deg2Rad) * len);
  },
  sitTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * sitCover);
  },
  chairTarpHt(angle) {
    return Math.round(Math.tan(angle * deg2Rad) * chairCover);
  }
};

const allTarps = [
  {
    configName: "Half Pyramid",
    type: "A-Frame",
    angles: [45, 60],
    tarpTypes: [square, rectangle],
    // need 2nd angle for lean - is this a holden tent? What is X?
    sleepClear: len - "X" - height,
    //
    cover: Math.cos(angle) * wid,
    //
    ridgeHeight: Math.sin(angle) * (wid / 2)
  },
  {
    configName: "Tetra",
    type: "Tent",
    angles: [],
    tarpTypes: [rectangle.rect1to2],
    //
    sleepClear: null,
    //
    cover: null,
    //
    ridgeHeight: null
  },
  {
    configName: "Trapezoid",
    type: "Tent",
    angles: [],
    tarpTypes: [square],
    //
    sleepClear: null,
    //
    cover: null,
    //
    ridgeHeight: null
  }
];
export default allTarps;
