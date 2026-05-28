export const habScenes = {

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
    }
};