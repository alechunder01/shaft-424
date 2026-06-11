export const outsideScenes = {

    airlock: {
    id: "airlock",
    background: "scenes/outside/airlock.webp",
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
                lockedMessage: "You will need a spacesuit to go outside. The atmosphere is unbreathable, the pressure is too low and the temperature outside is freezing.",
                sound: 'sounds/airlock.mp3'
            },
        ]
    },

    outside1: {
        id: "outside1",
        background: "scenes/outside/outside1.webp",
        ambientSound: "sounds/wind_outside.mp3",
        buttons: [
            {
                id: "outside1-airlock",
                x: 50, y: 40,
                width: 20, height: 20,
                type: "exit",
                to: "airlock",
                sound: 'sounds/airlock.mp3'
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
        background: "scenes/outside/outside2.webp",
        ambientSound: "sounds/wind_outside.mp3",
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
        background: "scenes/outside/hangarVehicle.webp",
        ambientSound: "sounds/wind_outside.mp3",
        buttons: [
            {
                id: "hangarVehicle-outside2",
                x: 25, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "outside2"
            },
            {
                id: "hangarVehicle-expe1",
                x: 40, y: 30,
                width: 20, height: 35,
                type: "exit",
                to: "expe1",
                sound: "sounds/airlocksmall.mp3"
            },
        ]
    },

    comms: {
        id: "comms",
        background: "scenes/outside/comms.webp",
        ambientSound: "sounds/wind_outside.mp3",
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
        background: "scenes/outside/outside3.webp",
        ambientSound: "sounds/wind_outside.mp3",
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
            {
                id: "outside3-outside4",
                x: 50, y: 40,
                width: 20, height: 20,
                type: "exit",
                to: "outside4"
            },
        ]
    },
    
    outside4: {
        id: "outside4",
        background: "scenes/outside/outside4.webp",
        ambientSound: "sounds/wind_outside.mp3",
        buttons: [
            {
                id: "outside4-outside3",
                x: 25, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "outside3"
            },
            {
                id: "outside4-elevatorcontrol",
                x: 5, y: 30,
                width: 30, height: 40,
                type: "exit",
                to: "elevatorcontrol"
            },
            {
                id: "outside4-outside5",
                x: 40, y: 40,
                width: 30, height: 40,
                type: "exit",
                to: "outside5"
            },
        ]
    },

    elevatorcontrol: {
        id: "elevatorcontrol",
        background: "scenes/outside/elevatorcontrol.webp",
        ambientSound: "sounds/wind_outside.mp3",
        buttons: [
            {
                id: "elevatorcontrol-outside4",
                x: 25, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "outside4"
            },
            {
                id: "elevatorcontrol-INTERACTION1",
                x: 20, y: 25,
                width: 20, height: 20,
                type: "text",
                message: "SHAFT ELEVATOR\n| POWER: EMERGENCY\n| POSITION: UP\n| DEPTH: 11456.2m"
            },
        ]
    },

    outside5: {
        id: "outside5",
        background: "scenes/outside/outside5.webp",
        ambientSound: "sounds/wind_outside.mp3",
        buttons: [
            {
                id: "outside5-outside4",
                x: 25, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "outside4"
            },
            {
                id: "outside5-boxarea",
                x: 85, y: 10,
                width: 15, height: 80,
                type: "exit",
                to: "boxarea"
            },
            {
                id: "outside5-generators",
                x: 60, y: 35,
                width: 10, height: 30,
                type: "exit",
                to: "generatorsoff"
            },
            {
                id: "outside5-elevatorbridge",
                x: 5, y: 10,
                width: 25, height: 80,
                type: "exit",
                to: "elevatorbridge"
            },
        ]
    },

    boxarea: {
        id: "boxarea",
        background: "scenes/outside/boxarea.webp",
        ambientSound: "sounds/wind_outside.mp3",
        buttons: [
            {
                id: "boxarea-outside5",
                x: 25, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "outside5"
            },
        ]
    },

    generatorsoff: {
        id: "generatorsoff",
        background: "scenes/outside/generatorsoff.webp",
        ambientSound: "sounds/wind_outside.mp3",
        buttons: [
            {
                id: "generatorsoff-outside5",
                x: 25, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "outside5"
            },
            {
                id: "turnon",
                x: 37.5, y: 38,
                width: 25, height: 20,
                type: "locked_exit",
                to: "generatorson",
                requiredItem: "Keycard",
                lockedMessage: "For turning the generators on you will need a keycard.",
                sound: "sound/turnon.mp3"
            }
        ]
    },

    generatorson: {
        id: "generatorson",
        background: "scenes/outside/generatorson.webp",
        ambientSound: "sounds/wind_outside_generators.mp3",
        buttons: [
            {
                id: "generatorson-outside5",
                x: 25, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "outside5"
            },
            {
                id: "fuelcell",
                x: 41, y: 70,
                width: 20, height: 15,
                type: "item",
                itemName: "Fuel Cell"
            }
        ]
    },
    
    elevatorbridge: {
        id: "elevatorbridge",
        background: "scenes/outside/elevatorbridge.webp",
        ambientSound: "sounds/wind_outside.mp3",
        buttons: [
            {
                id: "elevatorbridge-INTERACTION1",
                x: 10, y: 60,
                width: 40, height: 40,
                type: "text",
                message: "Holyy that's deep..."
            },
            {
                id: "elevatorbridge-outside5",
                x: 60, y: 80,
                width: 25, height: 20,
                type: "exit",
                to: "outside5"
            },
            {
                id: "elevatorbridge-elevatorup",
                x: 50, y: 10,
                width: 20, height: 30,
                type: "exit",
                to: "elevatorup"
            },
        ]
    },

    elevatorup: {
        id: "elevatorup",
        background: "scenes/outside/elevatorup.webp",
        ambientSound: "sounds/wind_outside.mp3",
        buttons: [
            {
                id: "elevatorup-elevatorbridge",
                x: 85, y: 10,
                width: 15, height: 80,
                type: "exit",
                to: "elevatorbridge"
            },
            {
                id: "elevatorup-elevatordown",
                x: 40, y: 55,
                width: 10, height: 15,
                type: "exit",
                to: "elevatordown",
                sound: "sounds/elevatorcreak.mp3"
            },
        ]
    }
};