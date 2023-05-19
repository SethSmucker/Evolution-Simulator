import { Composite, Bodies } from "matter-js";
import Cell from "./structures/Cell";
import Muscle from "./structures/Muscle";

class Creature {
    model; // Does the creature really need this? It's a composite which is good but it might be unnecessary. Could be useful to get all parts at once
    cellList;
    muscleList;

    dna;

    constructor(dna) {
        this.dna = dna;

        this.cellList = [];
        this.cellList.push(new Cell(100, 200, 10));
        this.cellList.push(new Cell(200, 200, 10));
        this.cellList.push(new Cell(300, 200, 10));

        this.muscleList = [];
        this.muscleList.push(new Muscle(this.cellList[1], this.cellList[2]));
        this.muscleList.push(new Muscle(this.cellList[0], this.cellList[2]));

        let allBodies = [];
        let allConstraints = [];
        this.cellList.forEach((c) => {
            allBodies.push(c.getModel());
        });
        this.muscleList.forEach((m) => {
            allConstraints.push(m.getModel());
        });

        this.model = Composite.create({
            bodies: allBodies,
            constraints: allConstraints,
        });
    }

    getModel() {
        return this.model;
    }

    update() {
        //update all creatures and cells
        this.cellList.forEach((c) => {
            c.update();
        });
        this.muscleList.forEach((m) => {
            m.update();
        });
    }
}

export default Creature;
