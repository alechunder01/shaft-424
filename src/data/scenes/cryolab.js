export const cryolabScenes = {

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
    }
};