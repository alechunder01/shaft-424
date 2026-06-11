export const shaftScenes = {
    elevatordown: {
        id: "elevatordown",
        background: "scenes/shaft/elevatordown.webp",
        ambientSound: "sounds/wind_shaft.mp3",
        buttons: [
            {
                id: "elevatordown-shaft",
                x: 65, y: 20,
                width: 20, height: 60,
                type: "exit",
                to: "shaft1"
            },
            {
                id: "elevatordown-elevatorup",
                x: 33, y: 65,
                width: 10, height: 15,
                type: "exit",
                to: "elevatorup",
                sound: "sounds/elevatorcreak.mp3"
            },
        ]
    },

    shaft1: {
        id: "shaft1",
        background: "scenes/shaft/shaft1.webp",
        ambientSound: "sounds/wind_shaft.mp3",
        buttons: [
            {
                id: "shaft1-elevator",
                x: 25, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "elevatordown"
            },
            {
                id: "shaft1-boxes",
                x: 0, y: 60,
                width: 25, height: 40,
                type: "exit",
                to: "shaftboxes"
            },
            {
                id: "shaft1-pump",
                x: 60, y: 30,
                width: 30, height: 50,
                type: "exit",
                to: "shaftpump"
            },
        ]
    },

    shaft2: {
        id: "shaft2",
        background: "scenes/shaft/shaft2.webp",
        ambientSound: "sounds/wind_shaft.mp3",
        buttons: [
            {
                id: "shaft2-pump",
                x: 25, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "shaftpump"
            },
            {
                id: "shaft2-shaftmine",
                x: 50, y: 40,
                width: 20, height: 20,
                type: "exit",
                to: "shaftmine",
            },
            {
                id: "shaft2-INTERACTION",
                x: 15, y: 55,
                width: 35, height: 20,
                type: "item",
                itemName: "Palladium Ore",
            },
        ]
    },

    shaftboxes: {
        id: "shaftboxes",
        background: "scenes/shaft/shaftboxes.webp",
        ambientSound: "sounds/wind_shaft.mp3",
        buttons: [
            {
                id: "boxes-shaft1",
                x: 25, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "shaft1"
            },
            {
                id: "boxes-INTERACTION",
                x: 25, y: 25,
                width: 50, height: 40,
                type: "text",
                message: "All kind of industrial boxes. I can't open them."
            },
        ]
    },

    shaftmine: {
        id: "shaftmine",
        background: "scenes/shaft/shaftmine.webp",
        ambientSound: "sounds/wind_shaft.mp3",
        buttons: [
            {
                id: "shaftmine-shaft2",
                x: 25, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "shaft2"
            },
            {
                id: "shaftmine-shaftmine2",
                x: 35, y: 25,
                width: 25, height: 35,
                type: "exit",
                to: "shaftmine2",
                sound: "sounds/cavenoise.mp3"
            },
        ]
    },

    shaftmine2: {
        id: "shaftmine2",
        background: "scenes/shaft/shaftmine2.webp",
        ambientSound: "sounds/wind_shaft.mp3",
        buttons: [
            {
                id: "shaftmine2-shaftmine",
                x: 25, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "shaftmine"
            },
            {
                id: "shaftmine2-INTERACTION",
                x: 35, y: 25,
                width: 25, height: 35,
                type: "text",
                message: "That's an old mining tunel. I should'nt go further. Who knows what could be there..."
            },
        ]
    },

    shaftore: {
        id: "shaftore",
        background: "scenes/shaft/shaftore.webp",
        ambientSound: "sounds/wind_shaft.mp3",
        buttons: [
            {
                id: "ore-pump",
                x: 25, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "shaftpump"
            },
            {
                id: "ore-INTERACTION1",
                x: 35, y: 25,
                width: 25, height: 35,
                type: "text",
                message: "That's an old mining tunel. There's even some untouched Palladium here.\nOnly what I see is worths millions..."
            },
            {
                id: "ore-INTERACTION2",
                x: 30, y: 60,
                width: 35, height: 20,
                type: "item",
                itemName: "Palladium Ore",
            },
        ]
    },

    shaftpump: {
        id: "shaftpump",
        background: "scenes/shaft/shaftpump.webp",
        ambientSound: "sounds/wind_shaft.mp3",
        buttons: [
            {
                id: "pump-shaft1",
                x: 25, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "shaft1"
            },
            {
                id: "pump-workstation",
                x: 20, y: 30,
                width: 30, height: 50,
                type: "exit",
                to: "shaftworkstation"
            },
            {
                id: "pump-shaft2",
                x: 80, y: 30,
                width: 20, height: 50,
                type: "exit",
                to: "shaft2"
            },
            {
                id: "pump-ore",
                x: 50, y: 45,
                width: 15, height: 15,
                type: "exit",
                to: "shaftore"
            }
        ]
    },

    shaftworkstation: {
        id: "shaftworkstation",
        background: "scenes/shaft/shaftworkstation.webp",
        ambientSound: "sounds/wind_shaft.mp3",
        buttons: [
            {
                id: "workstation-INTERACTION",
                x: 15, y: 30,
                width: 35, height: 30,
                type: "text",
                message: "The magma pump seems to be working. It's the generator on the surface that shut itself off."
            },
            {
                id: "workstation-keycard",
                x: 58, y: 50,
                width: 10, height: 10,
                type: "item",
                itemName: "Keycard"
            },
            {
                id: "workstation-pump",
                x: 25, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "shaftpump"
            },
        ]
    },
};