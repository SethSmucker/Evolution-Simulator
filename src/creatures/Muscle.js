class Muscle {
    model;
    tick;
    actionThreshold;

    constructor(cellA, cellB) {
        this.model = Matter.Constraint.create({
            bodyA: cellA.getModel(),
            bodyB: cellB.getModel(),
        });

        this.tick = 1;
        this.actionThreshold = 5000;
    }

    update() {
        if (this.tick % this.actionThreshold == 0) {
            this.act();
        }

        this.tick++;
    }

    act() {
        console.log("Muscle Act!");
    }

    getModel() {
        return this.model;
    }
}

export default Muscle;
