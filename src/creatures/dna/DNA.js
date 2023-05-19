/*

    Needs to save:
        - Muscles between cells
        - Cell type
        - ActionPotential for cells and mucles
        - Modular

*/

//These should still be continuous, no automatic teleporting or infinite speed.
const CURVE_TYPES = {
    0: "Sine",
    1: "Square",
    2: "Triangle",
};

class Cell_DNA {
    cellType;
    maxHealth;
    maxStoredEnergy;
    upkeepCost;
    actionPotential;

    constructor(dna) {
        this.type = dna.type;
        this.actionPotential = dna.actionPotential;
        this.mutationRate = dna.mutationRate;
    }
}

class Muscle_DNA {}

class Creature_DNA {}
