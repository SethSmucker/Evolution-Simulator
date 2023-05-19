/*

    Needs to save:
        - Muscles between cells
        - Cell type
        - ActionPotential for cells and mucles
        - Modular

*/

const CELL_TYPES = {
    0: { name: "Core", actionFunction: () => {} }, //Holds all energy from the creature and gives it out. Allows for reproduction.
    1: "Basic", //Does nothing other than exist
    2: "Gripper", //Turns on and off, gripping the floor
    3: "Consumer", //Consumes any food found on the ground
    4: "Spike", //Deals damage to anything it collides with. Down the line, change damage with speed
    // 4: "Sensor", for the future
};

const MUSCLE_TYPES = {
    0: "Static",
    1: "Moving",
};

//These should still be continuous, no automatic teleporting or infinite speed.
const CURVE_TYPES = {
    0: "Sine",
    1: "Square",
    2: "Triangle",
};

class Cell_DNA {
    type = "basic";
    actionPotential = 100;
    mutationRate = 5; //one in X

    constructor(dna) {
        this.type = dna.type;
        this.actionPotential = dna.actionPotential;
    }
}

class Muscle_DNA {}

class Creature_DNA {}

let MUSCLE_DNA = {
    type: "static",
    actionPotential: 100,
    curve: "sine",
};

let CREATURE_DNA = {
    cells: [],
    muscles: [[]],
};
