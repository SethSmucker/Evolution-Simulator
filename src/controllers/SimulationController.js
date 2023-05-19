import Cell from "../creatures/Cell";
import Creature from "../creatures/Creature";

class SimulationController {
    engine;
    render;
    runner;

    constructor() {
        this.init(800, 800);
    }

    init(w, h) {
        this.engine = Matter.Engine.create();
        this.engine.gravity.y = 0;

        this.render = Matter.Render.create({
            element: document.body,
            engine: this.engine,
        });

        this.render.canvas.width = w;
        this.render.canvas.height = h;
        this.render.options.wireframes = false;

        this.engine.timing.timeScale = 1;

        Matter.Render.run(this.render);
        //this.runner = Matter.Runner.create();
        //Matter.Runner.run(this.runner, this.engine);

        //Create world boundaries
        Matter.Composite.add(this.engine.world, [
            Matter.Bodies.rectangle(w / 2, -50, w + 200, 110, {
                isStatic: true,
                render: { fillStyle: "grey" },
            }),
            Matter.Bodies.rectangle(w / 2, w + 50, w + 200, 110, {
                isStatic: true,
                render: { fillStyle: "grey" },
            }),
            Matter.Bodies.rectangle(-50, h / 2, 110, h + 200, {
                isStatic: true,
                render: { fillStyle: "grey" },
            }),
            Matter.Bodies.rectangle(w + 50, h / 2, 110, h + 200, {
                isStatic: true,
                render: { fillStyle: "grey" },
            }),
        ]);
    }

    sim_test_1() {
        let allCreatures = [];

        //Create creature objects and add a reference of each to allCreatures
        for (let i = 0; i < 3; i++) {
            let c = new Creature();
            this.addBody(c.getModel());
            allCreatures.push(c);
        }

        let dt = 16.666;

        setInterval(() => {
            allCreatures.forEach((c) => {
                c.update();
            });

            Matter.Engine.update(this.engine, dt);
        }, dt);
    }

    addBody(body) {
        Matter.Composite.add(this.engine.world, [body]);
    }

    addBodies(bodies) {
        Matter.Composite.add(this.engine.world, bodies);
    }

    spawnCell(x, y, r) {
        let newCell = new Cell(x, y, r);
        newCell.applyForce();
        this.addBody(newCell.getModel());
    }

    //Test Functions
    genCircles(n) {
        for (let i = 0; i < n; i++) {
            this.spawnCell(
                100 + Math.random() * 100,
                100 + Math.random() * 100,
                10
            );
        }
    }
}

export default SimulationController;
