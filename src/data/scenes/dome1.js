export const dome1Scenes = {
    
    dome1: {
        id: "dome1",
        background: "scenes/dome1/dome1.png",
        buttons: [
            {
                id: "dome1-labexit",
                x: 35, y: 50,
                width: 25, height: 10,
                type: "exit",
                to: "labexit"
            },
            {
                id: "dome1-dome1lab",
                x: 60, y: 20,
                width: 40, height: 60,
                type: "exit",
                to: "dome1lab"
            },
            {
                id: "dome1-dome1oxygen",
                x: 0, y: 20,
                width: 35, height: 60,
                type: "exit",
                to: "dome1oxygen"
            },
            {
                id: "dome1-dome1garden",
                x: 35, y: 15,
                width: 25, height: 30,
                type: "exit",
                to: "dome1garden"
            },
            {
                id: "dome1-airlock",
                x: 20, y: 80,
                width: 60, height: 20,
                type: "exit",
                to: "airlock"
            },
        ]
    },

    dome1garden: {
        id: "dome1garden",
        background: "scenes/dome1/dome1garden.png",
        buttons: [
            {
                id: "dome1garden-dome1",
                x: 20, y: 80,
                width: 60, height: 20,
                type: "exit",
                to: "dome1"
            },
            {
                id: "dome1garden-INTERACTION1",
                x: 15, y: 25,
                width: 30, height: 30,
                type: "text",
                message: "All the plant here have died, except this weirdly rectangular cactus. Strange..."
            }
        ]
    },

    dome1lab: {
        id: "dome1lab",
        background: "scenes/dome1/dome1lab.png",
        buttons: [
            {
                id: "dome1lab-dome1",
                x: 20, y: 80,
                width: 60, height: 20,
                type: "exit",
                to: "dome1"
            },
            {
                id: "dome1lab-INTERACTION1",
                x: 20, y: 35,
                width: 60, height: 35,
                type: "text",
                message: "This looks like a lab making experiments on all types of now dead plants."
            }
        ]
    },

    dome1oxygen: {
        id: "dome1oxygen",
        background: "scenes/dome1/dome1oxygen.png",
        buttons: [
            {
                id: "dome1oxygen-dome1",
                x: 0, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "dome1"
            },
            {
                id: "dome1oxygen-dome1food",
                x: 50, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "dome1food"
            },
            {
                id: "dome1oxygen-INTERACTION1",
                x: 20, y: 35,
                width: 60, height: 35,
                type: "text",
                message: "Life support: STABLE | Airlock: PRESSURISED | Air pressure IN: 98kPa | Air pressure OUT: 0.6kPa"
            }
        ]
    },

    dome1food: {
        id: "dome1food",
        background: "scenes/dome1/dome1food.png",
        buttons: [
            {
                id: "dome1food-dome1oxygen",
                x: 0, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "dome1oxygen"
            },
            {
                id: "dome1oxygen-INTERACTION1",
                x: 20, y: 35,
                width: 40, height: 35,
                type: "text",
                message: "The food materializer. It doesn't seem to work."
            },
            {
                id: "dome1food-dome2",
                x: 60, y: 25,
                width: 40, height: 50,
                type: "exit",
                to: "dome2"
            },
        ]
    }
};