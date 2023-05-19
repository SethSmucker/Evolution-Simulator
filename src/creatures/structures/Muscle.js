import { MUSCLE_TYPE_METADATA } from "../CreatureUtil";

class Muscle {
    model;
    tick = 1;
    speed;
    startLength;
    muscle_type;

    constructor(cellA, cellB, dna) {
        this.model = Matter.Constraint.create({
            bodyA: cellA.getModel(),
            bodyB: cellB.getModel(),
            render: MUSCLE_TYPE_METADATA[dna.muscle_type]["style"],
        });

        this.muscle_type = dna.muscle_type;
        this.startLength = this.model.length;
        this.speed = dna.speed;
    }

    update() {
        if (this.muscle_type == "Moving") {
            this.actionMoving();
        } else {
            this.actionStatic();
        }

        this.tick++;
    }

    actionStatic() {}

    actionMoving() {
        this.model.length =
            this.startLength -
            (Math.sin(this.tick * (this.speed / 1000)) * this.startLength) / 2;
    }

    getModel() {
        return this.model;
    }
}

export default Muscle;
