export const scenes = {
    cryoRoom: {
        id: "mainMenu",
        background: "/mainMenu.png",
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
            }
        ]
    },
};