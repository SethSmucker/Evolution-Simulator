class Muscle {
    model;
    tick;
    actionThreshold;

    constructo(cellA, cellB) {
        this.model = this.constraintList.push(
            Matter.Constraint.create({
                bodyA: cellA.getModel(),
                bodyB: cellB.getModel(),
            })
        );
        this.tick = 1;
        this.actionThreshold = 50;
    }

    update() {
        if (this.tick % this.actionThreshold) {
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
