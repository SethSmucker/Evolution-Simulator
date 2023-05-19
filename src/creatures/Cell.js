import { Bodies } from "matter-js";

class Cell {
    model;
    tick;
    actionThreshold;

    constructor(x, y, r) {
        this.model = Bodies.circle(x, y, r);
        this.tick = 1;
        this.actionThreshold = 10000;
    }

    applyForce() {
        Matter.Body.applyForce(
            this.model,
            Matter.Vector.create(this.model.x, this.model.y),
            Matter.Vector.create(
                Math.random() * 0.1 - 0.05,
                Math.random() * 0.1 - 0.05
            )
        );
    }

    update() {
        if (this.tick % this.actionThreshold == 0) {
            this.act();
        }

        this.tick++;
    }

    act() {
        console.log("Cell Act!");
        Matter.Body.applyForce(
            this.model,
            Matter.Vector.create(this.model.x, this.model.y),
            Matter.Vector.create(
                Math.random() * 0.05,
                Math.random() * 0.1 - 0.01
            )
        );
    }

    getModel() {
        return this.model;
    }
}

export default Cell;
