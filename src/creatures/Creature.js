import { Composite, Bodies } from "matter-js";
import Cell from "./Cell";

class Creature {
    model;
    cellList;
    constraintList;

    constructor() {
        this.cellList = [];
        this.cellList.push(new Cell(100, 200, 20));
        this.cellList.push(new Cell(200, 200, 10));
        this.cellList.push(new Cell(300, 200, 50));

        this.muscleList = [];
        this.muscleList.push(
            Matter.Constraint.create({
                bodyA: this.cellList[1].getModel(),
                bodyB: this.cellList[2].getModel(),
            })
        );

        x.applyForce();
        y.applyForce();
    }

    getModel() {
        let bod,
            con = [];
        this.cellList.forEach((c) => bod.push(c.getModel()));

        return Composite.create({
            bodies: bod,
            constraints: this.constraintList,
        });
    }

    update() {
        console.log(this.model);
        this.model.allBodies.forEach((c) => {
            c.applyForce();
        });
    }
}

export default Creature;
