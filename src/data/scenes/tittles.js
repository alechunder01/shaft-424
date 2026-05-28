export const tittlesScenes = {

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
                x: 33.1, y: 55.6,
                width: 34, height: 13,
                type: "exit",
                to: "credits"
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

    credits: {
        id: "credits",
        background: "scenes/tittles/credits.png",
        buttons: [
            {
                id: "credits-0",
                x: 33, y: 78,
                width: 34, height: 13,
                type: "exit",
                to: "tittle0"
            },
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
    }
};