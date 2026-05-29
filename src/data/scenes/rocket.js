export const rocketScenes = {

    rocketoutside: {
    id: "rocketoutside",
    background: "scenes/rocket/rocketoutside.png",
    buttons: [
            {
                id: "rocketoutside-outside4",
                x: 25, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "outside3"
            },
            {
                id: "rocketoutside-rocketelevator",
                x: 40, y: 65,
                width: 15, height: 15,
                type: "exit",
                to: "rocketelevator"
            },
        ]
    },

    rocketelevator: {
        id: "rocketelevator",
        background: "scenes/rocket/rocketelevator.png",
        buttons: [
            {
                id: "rocketelevator-rocketoutside",
                x: 65, y: 30,
                width: 30, height: 60,
                type: "exit",
                to: "rocketoutside"
            },
            {
                id: "rocketelevator-rocketelevatorup",
                x: 40, y: 35,
                width: 20, height: 20,
                type: "exit",
                to: "rocketelevatorup"
            },
        ]
    },

    rocketelevatorup: {
        id: 'rocketelevatorup',
        background: 'scenes/rocket/rocketelevatorup.png',
        buttons: [
            {
                id: "rocketelevatorup-rocketairlock",
                x: 5, y: 30,
                width: 40, height: 50,
                type: "exit",
                to: "rocketairlock"
            },
            {
                id: "rocketelevatorup-rocketelevator",
                x: 55, y: 45,
                width: 20, height: 20,
                type: "exit",
                to: "rocketelevator"
            },
        ]
    },

    rocketairlock: {
        id: "rocketairlock",
        background: "scenes/rocket/rocketairlock.png",
        buttons: [
            {
                id: "rocketairlock-rocketelevator",
                x: 80, y: 30,
                width: 20, height: 60,
                type: "exit",
                to: "rocketelevatorup"
            },
            {
                id: "rocketairlock-rocket1",
                x: 0, y: 30,
                width: 20, height: 60,
                type: "exit",
                to: "rocket1"
            },
        ]
    },

    rocket0: {
        id: 'rocket0',
        background: 'scenes/rocket/rocket0.png',
        buttons: [
            {
                id: "rocket0-rocket1",
                x: 25, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "rocket1"
            },
        ]
    },

    rocket1: {
        id: 'rocket1',
        background: 'scenes/rocket/rocket1.png',
        buttons: [
            {
                id: "rocket1-rocketairlock",
                x: 10, y: 20,
                width: 30, height: 60,
                type: "exit",
                to: "rocketairlock"
            },
            {
                id: "rocket1-rocket0",
                x: 48, y: 50,
                width: 10, height: 10,
                type: "exit",
                to: "rocket0"
            },
            {
                id: "rocket1-rocket2",
                x: 55, y: 0,
                width: 30, height: 20,
                type: "exit",
                to: "rocket2"
            },
        ]
    },

    rocket2: {
        id: 'rocket2',
        background: 'scenes/rocket/rocket2.png',
        buttons: [
            {
                id: "rocket2-rocket1",
                x: 25, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "rocket1"
            },
            {
                id: "rocket2-rocket3",
                x: 25, y: 0,
                width: 50, height: 20,
                type: "exit",
                to: "rocket3"
            },
        ]
    },

    rocket3: {
        id: 'rocket3',
        background: 'scenes/rocket/rocket3.png',
        buttons: [
            {
                id: "rocket3-rocket2",
                x: 25, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "rocket2"
            },
            {
                id: "rocket3-rocket4",
                x: 25, y: 0,
                width: 50, height: 20,
                type: "exit",
                to: "rocket4"
            },
        ]
    },

    rocket4: {
        id: 'rocket4',
        background: 'scenes/rocket/rocket4.png',
        buttons: [
            {
                id: "rocket4-rocket3",
                x: 25, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "rocket3"
            },
            {
                id: "rocket4-rocket5",
                x: 25, y: 0,
                width: 50, height: 20,
                type: "exit",
                to: "rocket5"
            },
        ]
    },

    rocket5: {
        id: 'rocket5',
        background: 'scenes/rocket/rocket5.png',
        buttons: [
            {
                id: "rocket5-rocket4",
                x: 25, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "rocket4"
            },
            {
                id: "rocket5-launch",
                x: 40, y: 45,
                width: 20, height: 10,
                type: "locked_exit2items",
                requiredItem: "Navigation Data",
                requiredItem2: "Fuel Cell",
                lockedMessage: "You will need the Navigation Data and a Fuel Cell to get back to Earth.",
                to: "end-launch"
            },
        ]
    },
};