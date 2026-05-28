/* 
ITEM
type: "item",
itemName: "lockpick",
itemDescription: "A small improvised lockpick. Might come in handy."

LOCKED EXIT
type: "locked_exit",
to: "lab1",
requiredItem: "lockpick",
lockedMessage: "The door is sealed. I could probably pick this lock if I had something thin enough."

*/



export const scenes = {

    // tittle

    tittle0: {
        id: "tittle0",
        background: "scenes/tittles/tittle0.png",
        buttons: [
            {
                id: "tittle0-1",
                x: 33, y: 37,
                width: 34, height: 13,
                type: "exit",
                to: "tittle1"
            },
            {
                id: "tittle0-credits",
                x: 33, y: 37,
                width: 34, height: 13,
                type: "exit",
                to: "tittle1"
            },
            {
                id: "debug-to-outside",
                x: 0, y: 0,
                width: 10, height: 10,
                type: "exit",
                to: "outside1"
            }
        ]
    },
    tittle1: {
        id: "tittle1",
        background: "scenes/tittles/tittle1.png",
        buttons: [
            {
                id: "tittle1-2",
                x: -1, y: -1,
                width: 110, height: 110,
                type: "exit",
                to: "tittle2"
            }
        ]
    },
    tittle2: {
        id: "tittle2",
        background: "scenes/tittles/tittle2.png",
        buttons: [
            {
                id: "tittle2-3",
                x: -1, y: -1,
                width: 110, height: 110,
                type: "exit",
                to: "tittle3"
            }
        ]
    },
    tittle3: {
        id: "tittle3",
        background: "scenes/tittles/tittle3.png",
        buttons: [
            {
                id: "tittle3-4",
                x: -1, y: -1,
                width: 110, height: 110,
                type: "exit",
                to: "tittle4"
            }
        ]
    },
    tittle4: {
        id: "tittle4",
        background: "scenes/tittles/tittle4.png",
        buttons: [
            {
                id: "tittle4-start",
                x: -1, y: -1,
                width: 110, height: 110,
                type: "exit",
                to: "start"
            }
        ]
    },



    start: {
        id: "start",
        background: "scenes/cryolab/scene0.png",
        buttons: [
            {
                id: "start",
                x: 0, y: 0,
                width: 100, height: 100,
                type: "exit",
                to: "lab1"
            }
        ]
    },


    // CRYOLAB


    lab1: {
        id: "lab1",
        background: "scenes/cryolab/lab1.png",
        buttons: [
            {
                id: "lab1-lab2",
                x: 20, y: 30,
                width: 25, height: 30,
                type: "exit",
                to: "lab2"
            },
            {
                id: "lab1-labpc",
                x: 0, y: 20,
                width: 10, height: 60,
                type: "exit",
                to: "labpc"
            },
            {
                id: "lab1-labexit",
                x: 50, y: 30,
                width: 15, height: 30,
                type: "exit",
                to: "labexit"
            },
        ]
    },
    lab2: {
        id: "lab2",
        background: "scenes/cryolab/lab2.png",
        buttons: [
            {
                id: "lab2-lab1FLOWERS",
                x: 55, y: 35,
                width: 25, height: 30,
                type: "exit",
                to: "lab1"
            },
            {
                id: "lab2-labpc",
                x: 90, y: 20,
                width: 10, height: 60,
                type: "exit",
                to: "labpc"
            },
            {
                id: "lab2-labexit",
                x: 20, y: 30,
                width: 25, height: 30,
                type: "exit",
                to: "labexit"
            },
        ]
    },
    lab1flowers: {
        id: "lab1flowers",
        background: "scenes/cryolab/"
    },
    labpc: {
        id: "labpc",
        background: "scenes/cryolab/labpc.png",
        buttons: [
            {
                id: "labpc-lab2",
                x: 20, y: 80,
                width: 60, height: 20,
                type: "exit",
                to: "lab2"
            }
        ]
    },
    labstorage: {
        id: "labstorage",
        background: "scenes/cryolab/labstorage.png",
        buttons: [
            {
                id: "labpc-labexit",
                x: 20, y: 80,
                width: 60, height: 20,
                type: "exit",
                to: "labexit"
            }
        ]
    },
    labexit: {
        id: "labexit",
        background: "scenes/cryolab/labexit.png",
        buttons: [
            {
                id: "labexit-labstorage",
                x: 0, y: 20,
                width: 40, height: 60,
                type: "exit",
                to: "labstorage"
            },
            {
                id: "labexit-dome1",
                x: 60, y: 20,
                width: 40, height: 60,
                type: "exit",
                to: "dome1"
            },
            {
                id: "labexit-lab2",
                x: 20, y: 80,
                width: 60, height: 20,
                type: "exit",
                to: "lab2"
            }
        ]
    },


    // DOME 1
    

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
    },


    // DOME2


    dome2: {
        id: "dome2",
        background: "scenes/dome2/dome2.png",
        buttons: [
            {
                id: "dome2-dome1food",
                x: 20, y: 80,
                width: 60, height: 20,
                type: "exit",
                to: "dome1food"
            },
            {
                id: "dome2-dome2gym",
                x: 10, y: 30,
                width: 20, height: 30,
                type: "exit",
                to: "dome2gym"
            },
            {
                id: "dome2-hab",
                x: 70, y: 30,
                width: 20, height: 30,
                type: "exit",
                to: "hab"
            },
        ]
    },
    dome2gym: {
        id: "dome2gym",
        background: "scenes/dome2/dome2gym.png",
        buttons: [
            {
                id: "dome2gym-dome2billiard",
                x: 50, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "dome2billiard"
            },
            {
                id: "dome2gym-dome2",
                x: 0, y: 80,
                width: 50, height: 20,
                type: "exit",
                to: "dome2"
            },
            {
                id: "dome2gym-INTERACTION1",
                x: 25, y: 25,
                width: 50, height: 50,
                type: "text",
                message: "Wow someone was here benching 120kg. Well due to Mars having lower gravity it feels only like 45kg."
            },
        ]
    },
    dome2billiard: {
    id: "dome2billiard",
    background: "scenes/dome2/dome2billiard.png",
    buttons: [
        {
            id: "dome2billiard-dome2gym",
            x: 0, y: 80,
            width: 50, height: 20,
            type: "exit",
            to: "dome2gym"
        },
        {
            id: "dome2billiard-hab",
            x: 50, y: 80,
            width: 50, height: 20,
            type: "exit",
            to: "hab"
        },
    ]
},


// Hab


hab: {
    id: "hab",
    background: "scenes/hab/hab.png",
    buttons: [
        {
            id: "habroom",
            x: 20, y: 40,
            width: 15, height: 40,
            type: "exit",
            to: "habroom"
        },
        {
            id: "habdome2",
            x: 25, y: 80,
            width: 50, height: 20,
            type: "exit",
            to: "dome2"
        },
    ]
},
habroom: {
    id: "habroom",
    background: "scenes/hab/habroom.png",
    buttons: [
        {
            id: "habroom-hab",
            x: 20, y: 10,
            width: 15, height: 40,
            type: "exit",
            to: "hab"
        },
        {
            id: "habroom-VIEW",
            x: 80, y: 25,
            width: 20, height: 50,
            type: "exit",
            to: "habroomVIEW"
        },
        {
            id: "habroom-spacesuit",
            x: 40, y: 0,
            width: 20, height: 43,
            type: "item",
            itemName: "Spacesuit"
        },
    ]
},
habroomVIEW: {
    id: "habroomVIEW",
    background: "scenes/hab/habroomVIEW.png",
    buttons: [
        {
            id: "lilly",
            x: 20, y: 70,
            width: 10, height: 20,
            type: "text",
            message: "A small synthetic lilly. Damn I miss my garden back at home."
        },
        {
            id: "habroom",
            x: 40, y: 80,
            width: 50, height: 20,
            type: "exit",
            to: "habroom"
        },
        {
            id: "outside",
            x: 30, y: 20,
            width: 40, height: 60,
            type: "text",
            message: "An entire planet of this. Thousands and thousands of kilometers of emptiness. And in the middle of it all, me, alone..."
        },
    ]
},


// OUTSIDE


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
            width: 20, height: 50,
            type: "exit",
            to: "hangarVehicle"
        },
        {
            id: "outside2-outside3",
            x: 30, y: 30,
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
            id: "outside3-outside4",
            x: 25, y: 50,
            width: 50, height: 20,
            type: "exit",
            to: "outside4"
        },
    ]
},

outside4: {
    id: "outside4",
    background: "scenes/outside/outside4.png",
    buttons: [
        {
            id: "outside4-outside3",
            x: 25, y: 80,
            width: 50, height: 20,
            type: "exit",
            to: "outside3"
        },
        {
            id: "outside4-rocketOutside",
            x: 25, y: 10,
            width: 10, height: 40,
            type: "exit",
            to: "rocketoutside"
        },
    ]
},

rocketoutside: {
    id: "rocketoutside",
    background: "scenes/rocket/rocketoutside.png",
    buttons: [
        {
            id: "rocketoutside-outside4",
            x: 25, y: 80,
            width: 50, height: 20,
            type: "exit",
            to: "outside4"
        },
        {
            id: "rocketoutside-rocketelevator",
            x: 25, y: 80,
            width: 50, height: 20,
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
            x: 25, y: 80,
            width: 50, height: 20,
            type: "exit",
            to: "rocketoutside"
        },
        {
            id: "rocketelevator-rocketairlock",
            x: 25, y: 80,
            width: 50, height: 20,
            type: "exit",
            to: "rocketairlock"
        },
    ]
},

rocketairlock: {
    id: "rocketairlock",
    background: "scenes/rocket/rocketairlock.png",
    buttons: [
        {
            id: "rocketairlock-rocketelevator",
            x: 25, y: 80,
            width: 50, height: 20,
            type: "exit",
            to: "rocketelevator"
        },
        {
            id: "rocketairlock-rocket1",
            x: 25, y: 80,
            width: 50, height: 20,
            type: "exit",
            to: "outside3"
        },
    ]
},

rocket0: {
    id: 'rocket0',
    background: 'scenes/rocket/rocket0.png',
    buttons: []
},

rocket1: {
    id: 'rocket1',
    background: 'scenes/rocket/rocket1.png',
    buttons: []
},

rocket2: {
    id: 'rocket2',
    background: 'scenes/rocket/rocket2.png',
    buttons: []
},

rocket3: {
    id: 'rocket3',
    background: 'scenes/rocket/rocket3.png',
    buttons: []
},

rocket4: {
    id: 'rocket1',
    background: 'scenes/rocket/rocket4.png',
    buttons: []
},

rocket5: {
    id: 'rocket1',
    background: 'scenes/rocket/rocket5.png',
    buttons: []
},


};