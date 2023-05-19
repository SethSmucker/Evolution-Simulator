import { Bodies } from "matter-js";
import { CELL_TYPE_METADATA } from "../CreatureUtil";

class Cell {
    model;
    tick = 1;
    action_threshold;
    cell_type;
    gripper_on_density;
    gripper_off_density;
    gripper_toggle;

    constructor(x_center, y_center, dna) {
        this.action_threshold = dna.action_threshold;
        this.cell_type = dna.cell_type;
        this.model = Bodies.circle(
            x_center + dna.x_offset,
            y_center + dna.y_offset,
            10,
            { render: CELL_TYPE_METADATA[dna.cell_type]["style"] }
        );
        this.gripper_toggle = false;
        this.gripper_off_density = 0.00001;
        this.gripper_on_density = 0.01;
    }

    update() {
        if (this.cell_type == "Core") {
            this.actionCore();
        } else if (this.cell_type == "Basic") {
            this.actionBasic();
        } else if (this.cell_type == "Gripper") {
            this.actionGripper();
        } else if (this.cell_type == "Consumer") {
            this.actionConsumer();
        } else if (this.cell_type == "Spike") {
            this.actionSpike();
        }

        this.tick++;
        console.log(this.tick);
    }

    actionCore() {}

    actionBasic() {}

    actionGripper() {
        if (this.tick % this.action_threshold == 0) {
            if (this.gripper_toggle == false) {
                Matter.Body.setDensity(this.model, this.gripper_off_density);
                this.model.render.opacity = 0.2;
            } else {
                Matter.Body.setDensity(this.model, this.gripper_on_density);
                this.model.render.opacity = 1;
            }
            this.gripper_toggle = !this.gripper_toggle;
        }
    }

    actionConsumer() {}

    actionSpike() {}

    getModel() {
        return this.model;
    }
}

export default Cell;
