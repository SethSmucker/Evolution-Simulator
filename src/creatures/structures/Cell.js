import { Bodies } from "matter-js";

class Cell {
    model;
    tick;
    actionThreshold;

    constructor(x, y, r) {
        this.model = Bodies.circle(x, y, r);
        this.tick = 1;
        this.actionThreshold = Math.floor(Math.random() * 1000 + 100);
    }

    applyForce() {
        Matter.Body.applyForce(
            this.model,
            Matter.Vector.create(this.model.x, this.model.y),
            Matter.Vector.create(
                Math.random() * 0.01,
                Math.random() * 0.01 - 0.05
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
    }

    getModel() {
        return this.model;
    }
}

export default Cell;
