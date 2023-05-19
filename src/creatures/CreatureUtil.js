export function getRandomDNAValue() {
    return Math.floor(Math.random() * 100 + 1);
}

export function getRandomActionThreshold() {
    return Math.floor(Math.random() * 100 + 100);
}

export function getRandomSafeXY() {
    return {
        x: Math.floor(Math.random() * 600) + 100,
        y: Math.floor(Math.random() * 600) + 100,
    };
}

export function getRandomCellType() {
    return CELL_TYPES[
        Math.floor(Math.random() * Object.keys(CELL_TYPES).length)
    ];
}

export function getRandomMuscleType() {
    return MUSCLE_TYPES[
        Math.floor(Math.random() * Object.keys(MUSCLE_TYPES).length)
    ];
}

export const CELL_TYPES = {
    0: "Core", //Holds all energy from the creature and gives it out. Allows for reproduction.
    1: "Basic", //Does nothing other than exist
    2: "Gripper", //Turns on and off, gripping the floor
    3: "Consumer", //Consumes any food found on the ground
    4: "Spike", //Deals damage to anything it collides with. Down the line, change damage with speed
    // 4: "Sensor", for the future
};

export const MUSCLE_TYPES = {
    0: "Static",
    1: "Moving",
};

export const CELL_TYPE_METADATA = {
    Core: { style: { fillStyle: "#DAA520" } },
    Basic: { style: { fillStyle: "#AAAAAA" } },
    Gripper: { style: { fillStyle: "#9370DB" } },
    Consumer: { style: { fillStyle: "#EA55D3" } },
    Spike: { style: { fillStyle: "#FF6347" } },
};

export const MUSCLE_TYPE_METADATA = {
    Static: { style: { strokeStyle: "#EEEEEE" } },
    Moving: { style: { strokeStyle: "red" } },
};
