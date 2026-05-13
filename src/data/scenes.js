export const scenes = {
    cryoRoom: {
        id: "cryoRoom",
        background: "/sampleScene.png",
        buttons: [
            {
                id: "cryoText1",
                label: "A personal tablet",

                x: 45,
                y: 60,
                width: 10,
                height: 10,

                type: "text",
                message: "Hello world"
            },
            {
                id: "exit1",
                label: "Go to hallway1",

                x: 80,
                y: 60,
                width: 10,
                height: 10,

                type: "exit",
                to: "hallway1"
            },
            {
                id: "exit1",
                label: "Go to hallway1",

                x: 10,
                y: 10,
                width: 20,
                height: 20,

                type: "text",
                message: "Tohle je tvoje raketa"
            },
        ]
    },
    hallway1: {
        id: "hallway1",
        background: "/hallway1.png", 
        buttons: [
            {
                id: "exitToCryo",
                label: "Exit to cryoRoom",

                x: 3.5,
                y: 55,
                width: 10,
                height: 40,

                type: "exit",
                to: "cryoRoom"
            },
            {
                id: "junk",
                label: "A pile of junk",

                x: 30,
                y: 40,
                width: 40,
                height: 50,

                type: "text",
                message: "That's a big pile of junk. What happened here?"
            },
            {
                id: "exitXXX",
                label: "Go to gayroom",

                x: 45,
                y: 60,
                width: 2.6,
                height: 5,

                type: "exit",
                to: "gayroom"
            },
            {
                id: "exitToHallway2",
                label: "Exit to hallway 2",

                x: 87,
                y: 55,
                width: 10,
                height: 40,

                type: "exit",
                to: "hallway2"
            }
        ]
    },
    hallway2: {
        id: "hallway2",
        background: "/hallway2.png", 
        buttons: [
            {
                id: "exit1",
                label: "Go to hallway1",

                x: 3.5,
                y: 55,
                width: 10,
                height: 40,

                type: "exit",
                to: "hallway1"
            },
            {
                id: "hallwayText1",
                label: "A personal tablet",

                x: 33.2,
                y: 55,
                width: 11,
                height: 13,

                type: "text",
                message: "test 1"
            },
            {
                id: "hallwayText2",
                label: "A personal tablet",

                x: 45.3,
                y: 55,
                width: 11,
                height: 13,

                type: "text",
                message: "test 2"
            },
            {
                id: "hallwayItem1",
                label: "Item",

                x: 63,
                y: 37,
                width: 8,
                height: 30,

                type: "item",
                itemName: "Broken circuit",
                itemDescription: "It doesn't have any use. It's just trash."
            },
        ]
    },
    gayroom: {
        id: 'gayroom',
        background: 'https://i.ytimg.com/vi/wYZux3BMc5k/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgTihCMA8=&rs=AOn4CLCncNWjdVqplyX1cJw2h0Kuy2iH6w',
        buttons: [
            {
                id: "exit1",
                label: "Go to hallway1",

                x: 10,
                y: 60,
                width: 10,
                height: 10,

                type: "exit",
                to: "hallway1"
            }
        ]
    }
};