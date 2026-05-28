export const outsideScenes = {

    airlock: {
    id: "airlock",
    background: "scenes/outside/airlock.png",
    buttons: [
            {
                id: "airlock-dome1",
                x: 30, y: 20,
                width: 20, height: 30,
                type: "exit",
                to: "dome1"
            },
            {
                id: "airlock-outside1",
                x: 55, y: 30,
                width: 45, height: 70,
                type: "locked_exit",
                to: "outside1",
                requiredItem: "Spacesuit",
                lockedMessage: "You will need a spacesuit to go outside. The atmosphere is unbreathable, the pressure is too low and the temperature outside is freezing."
            },
        ]
    },

    outside1: {
        id: "outside1",
        background: "scenes/outside/outside1.png",
        buttons: [
            {
                id: "outside1-airlock",
                x: 50, y: 40,
                width: 20, height: 20,
                type: "exit",
                to: "airlock"
            },
            {
                id: "outside1-outside2",
                x: 0, y: 20,
                width: 20, height: 60,
                type: "exit",
                to: "outside2"
            },
        ]
    },

    outside2: {
        id: "outside2",
        background: "scenes/outside/outside2.png",
        buttons: [
            {
                id: "outside2-comms",
                x: 80, y: 30,
                width: 20, height: 50,
                type: "exit",
                to: "comms"
            },
            {
                id: "outside2-hangarVehicle",
                x: 0, y: 30,
                width: 35, height: 50,
                type: "exit",
                to: "hangarVehicle"
            },
            {
                id: "outside2-outside3",
                x: 40, y: 30,
                width: 30, height: 30,
                type: "exit",
                to: "outside3"
            },
            {
                id: "outside2-outside1",
                x: 25, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "outside1"
            },
        ]
    },

    hangarVehicle: {
        id: "hangarVehicle",
        background: "scenes/outside/hangarVehicle.png",
        buttons: [
            {
                id: "hangarVehicle-outside2",
                x: 25, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "outside2"
            },
            {
                id: "hangarVehicle-chariot",
                x: 40, y: 30,
                width: 20, height: 35,
                type: "exit",
                to: "chariot"
            },
        ]
    },

    comms: {
        id: "comms",
        background: "scenes/outside/comms.png",
        buttons: [
            {
                id: "comms-outside2",
                x: 25, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "outside2"
            },
        ]
    },

    outside3: {
        id: "outside3",
        background: "scenes/outside/outside3.png",
        buttons: [
            {
                id: "outside3-outside2",
                x: 25, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "outside2"
            },
            {
                id: "outside3-rocketOutside",
                x: 25, y: 10,
                width: 10, height: 40,
                type: "exit",
                to: "rocketoutside"
            },
        ]
    },
};