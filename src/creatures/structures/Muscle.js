class Muscle {
    model;
    tick;
    actionThreshold;
    startLength;

    constructor(cellA, cellB) {
        this.model = Matter.Constraint.create({
            bodyA: cellA.getModel(),
            bodyB: cellB.getModel(),
        });

        this.model.damping = 0.2;
        this.startLength = this.model.length;

        this.tick = 1;
        this.actionThreshold = Math.floor(Math.random() * 10 + 100);
    }

    update() {
        this.locomote();
        if (this.tick % this.actionThreshold == 0) {
            this.act();
        }

        this.tick++;
    }

    act() {
        console.log("Muscle Act!");
    }

    locomote() {
        this.model.length =
            this.startLength -
            (Math.sin(this.tick / 10) * this.startLength) / 2;
    }

    getModel() {
        return this.model;
    }
}

export default Muscle;
