import { Composite, Bodies } from "matter-js";
import Cell from "./structures/Cell";
import Muscle from "./structures/Muscle";
import {
    getRandomActionThreshold,
    getRandomCellType,
    getRandomDNAValue,
    getRandomMuscleType,
} from "./CreatureUtil";

class Creature {
    model; // Does the creature really need this? It's a composite which is good but it might be unnecessary. Could be useful to get all parts at once
    cell_list;
    muscle_list;

    dna;

    constructor(x_center, y_center, dna) {
        this.dna = dna;

        this.cell_list = [];
        this.cell_list.push(
            new Cell(x_center, y_center, {
                x_offset: Math.random() * 100 - 50,
                y_offset: Math.random() * 100 - 50,
                cell_type: getRandomCellType(),
                action_threshold: getRandomActionThreshold(),
            })
        );
        this.cell_list.push(
            new Cell(x_center, y_center, {
                x_offset: Math.random() * 100 - 50,
                y_offset: Math.random() * 100 - 50,
                cell_type: getRandomCellType(),
                action_threshold: getRandomActionThreshold(),
            })
        );
        this.cell_list.push(
            new Cell(x_center, y_center, {
                x_offset: Math.random() * 100 - 50,
                y_offset: Math.random() * 100 - 50,
                cell_type: getRandomCellType(),
                action_threshold: getRandomActionThreshold(),
            })
        );

        this.muscle_list = [];
        this.muscle_list.push(
            new Muscle(this.cell_list[1], this.cell_list[2], {
                muscle_type: getRandomMuscleType(),
                speed: getRandomDNAValue(),
            })
        );
        this.muscle_list.push(
            new Muscle(this.cell_list[0], this.cell_list[2], {
                muscle_type: getRandomMuscleType(),
                speed: getRandomDNAValue(),
            })
        );

        let allBodies = [];
        let allConstraints = [];
        this.cell_list.forEach((c) => {
            allBodies.push(c.getModel());
        });
        this.muscle_list.forEach((m) => {
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
        this.cell_list.forEach((c) => {
            c.update();
        });
        this.muscle_list.forEach((m) => {
            m.update();
        });
    }
}

export default Creature;
