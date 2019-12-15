const fs = require('fs');
fs.readFile('input.txt', 'utf8', function readFile(err, data) {
  if (err) throw err;
  hoover(data);
});

function hoover(data) {
  const instructions = data.trim().split('\n');
  const gridSize = {
    "x": parseInt(instructions[0].split(" ")[0]),
    "y": parseInt(instructions[0].split(" ")[1]),
  };
  let hooverLocation = {
    "x": parseInt(instructions[1].split(" ")[0]),
    "y": parseInt(instructions[1].split(" ")[1]),
    "cleaned": 0,
    "valid": true
  };
  let patches = instructions.slice(2, -1);
  let patchLocations = patches.map((patch) => {
    return {
      "x": parseInt(patch.split(" ")[0]),
      "y": parseInt(patch.split(" ")[1]),
      "clean": false,
      "valid": true
    };
  });
  const hooverMovements = {
    "directions": instructions[instructions.length - 1].split(''),
    "valid": true
  }
  inputValidity(gridSize, hooverLocation, patchLocations, hooverMovements);
  return move(gridSize, hooverLocation, patchLocations, hooverMovements);
}

function inputValidity(gridSize, hooverLocation, patchLocations, hooverMovements) {
  const hooverOutOfGrid = hooverLocation.x >= gridSize.x || hooverLocation.y >= gridSize.y;
  if (hooverOutOfGrid) {
    hooverLocation.valid = false;
    throw new Error("The hoover is outside your room dimensions. Please input a new location within the room");
  };

  patchLocations.forEach((patch) => {
    if (patch.x >= gridSize.x || patch.y >= gridSize.y) {
      patch.valid = false;
      throw new Error(`The dirt patch at (${patch.x},${patch.x}) is outside your room dimensions. Please input a new location within the room`);
    };
  });

  const validDirections = ["N", "S", "E", "W"];
  hooverMovements.directions.forEach((direction) => {
    if (!validDirections.includes(direction)) {
      hooverMovements.valid = false;
      throw new Error(`Your direction ${direction} is invalid. Please input either N, S, E or W`);
    };
  });
}

function move(gridSize, hooverLocation, patchLocations, hooverMovements) {
  hooverMovements.directions.forEach((direction) => {
    // hoover can't go above y = 4
    if (direction == "N" && hooverLocation.y != gridSize.y - 1) {
      hooverLocation.y += 1;
    // hoover can't go below x= 0
    } else if (direction == "S" && hooverLocation.y != 0) {
      hooverLocation.y -= 1;
    // hoover can't go above x = 4
    } else if (direction == "E" && hooverLocation.x != gridSize.x - 1) {
      hooverLocation.x += 1;
    // hoover can't go below x= 0
    } else if (direction == "W" && hooverLocation.x != 0) {
      hooverLocation.x -= 1;
    } else {};
    clean(hooverLocation, patchLocations);
  });
  //Final Hoover Position:
  // console.log(hooverLocation.x, hooverLocation.y);
  // Patches cleaned:
  // console.log(hooverLocation.cleaned);
  return `${hooverLocation.x} ${hooverLocation.y}\n${hooverLocation.cleaned}`;
}

function clean(hooverLocation, patchLocations) {
  patchLocations.forEach((patch) => {
    if (patch.clean == false && hooverLocation.x == patch.x && hooverLocation.y == patch.y) {
      hooverLocation.cleaned += 1;
      patch.clean = true;
    };
  });
}

module.exports = hoover;

