export const dome2Scenes = {

    dome2: {
        id: "dome2",
        background: "scenes/dome2/dome2.png",
        buttons: [
            {
                id: "dome2-dome1food",
                x: 20, y: 80,
                width: 60, height: 20,
                type: "exit",
                to: "dome1"
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
    }
};