export const chariotScenes = {
    expe1: {
        id: 'expe1',
        background: 'scenes/expedition/expe1.png',
        buttons: [
            {
                id: "expe1-info",
                x: 35, y: 60,
                width: 28, height: 10,
                type: "text",
                message: "There's an autopilot course set to Expedition 23. Overwrite is not possible."
            },
            {
                id: "expe1-drive",
                x: 35, y: 70,
                width: 28, height: 30,
                type: "exit",
                to: "expe2"
            },
            {
                id: "expe1-exit",
                x: 0, y: 20,
                width: 20, height: 60,
                type: "exit",
                to: "hangarVehicle"
            }
        ]
    },
    expe2: {
        id: 'expe2',
        background: 'scenes/expedition/expe2.png',
        buttons: [
            {
                id: "expe2-view",
                x: 40, y: 30,
                width: 35, height: 28,
                type: "text",
                message: "Damn that sunset is beautiful."
            },
            {
                id: "expe2-info",
                x: 35, y: 58,
                width: 30, height: 10,
                type: "text",
                message: "32.1km left | ETA: 1h 16min"
            },
            {
                id: "expe2-drive",
                x: 35, y: 70,
                width: 30, height: 30,
                type: "exit",
                to: "expe3"
            },
        ]
    },
    expe3: {
        id: 'expe3',
        background: 'scenes/expedition/expe3.png',
        buttons: [
            {
                id: "expe3-info",
                x: 38, y: 58,
                width: 30, height: 10,
                type: "text",
                message: "Arrived | High radiation alert"
            },
            {
                id: "expe3-drive",
                x: 40, y: 70,
                width: 30, height: 30,
                type: "exit",
                to: "expe5"
            },
            {
                id: "expe3-expe4",
                x: 0, y: 20,
                width: 20, height: 60,
                type: "exit",
                to: "expe4"
            }
        ]
    },
    expe4: {
        id: 'expe4',
        background: 'scenes/expedition/expe4.png',
        buttons: [
            {
                id: "expe4-expe3",
                x: 60, y: 20,
                width: 40, height: 60,
                type: "exit",
                to: "expe3"
            },
            {
                id: "expe4-bodies",
                x: 10, y: 50,
                width: 50, height: 30,
                type: "exit",
                to: "expe4bodies"
            },
            {
                id: "expe4-moon",
                x: 46, y: 0,
                width: 5, height: 10,
                type: "text",
                message: "That's the one of Mars's moons Phobos. It's much smaller than Earth's moon having a radius of only 11km."
            }

        ]
    },
    expe4bodies: {
        id: 'expe4bodies',
        background: 'scenes/expedition/expe4bodies.png',
        buttons: [
            {
                id: "expe4bodies-expe4",
                x: 25, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "expe4"
            },
            {
                id: "expe4bodies-expe4wreck",
                x: 40, y: 5,
                width: 30, height: 20,
                type: "exit",
                to: "expe4wreck"
            },
            {
                id: "expe4bodies-INFO",
                x: 20, y: 15,
                width: 60, height: 60,
                type: "text",
                message: "That's the androids that were sent to dangerous missions. They are beyond repair."
            },
        ]
    },
    expe4hole: {
        id: 'expe4hole',
        background: 'scenes/expedition/expe4hole.png',
        buttons: [
            {
                id: "expe4hole-expe4bodies",
                x: 25, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "expe4bodies"
            },
            {
                id: "expe4hole-INFO",
                x: 20, y: 15,
                width: 60, height: 60,
                type: "text",
                message: "That looks like molten plutonium. I should get out as fast as possible."
            },
        ]
    },
    expe4wreck: {
        id: 'expe4wreck',
        background: 'scenes/expedition/expe4wreck.png',
        buttons: [
            {
                id: "expe4wreck-expe4bodies",
                x: 25, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "expe4bodies"
            },
            {
                id: "expe4wreck-expe4hole",
                x: 70, y: 0,
                width: 30, height: 40,
                type: "exit",
                to: "expe4hole"
            },
            {
                id: "expe4wreck-NAVIGATIONDATA",
                x: 46, y: 57,
                width: 5, height: 10,
                type: "item",
                itemName: "Navigation Data"
            },
        ]
    },
    expe5: {
        id: 'expe5',
        background: 'scenes/expedition/expe5.png',
        buttons: [
            {
                id: "expe5-info",
                x: 33, y: 58,
                width: 32, height: 12,
                type: "text",
                message: "3.2km left | ETA: 6min"
            },
            {
                id: "expe5-drive",
                x: 33, y: 70,
                width: 32, height: 30,
                type: "exit",
                to: "expe1"
            }
        ]
    },
};