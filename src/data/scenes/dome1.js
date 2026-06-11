export const dome1Scenes = {
    
    dome1: {
        id: "dome1",
        background: "scenes/dome1/dome1.webp",
        buttons: [
            {
                id: "dome1-labexit",
                x: 35, y: 60,
                width: 25, height: 10,
                type: "exit",
                to: "labexit"
            },
            {
                id: "dome1-dome1lab",
                x: 50, y: 47,
                width: 17, height: 10,
                type: "exit",
                to: "dome1lab"
            },
            {
                id: "dome1-infoboard",
                x: 29, y: 45,
                width: 10, height: 13,
                type: "exit",
                to: "infoboard"
            },
            {
                id: "dome1-airlock",
                x: 75, y: 30,
                width: 25, height: 35,
                type: "exit",
                to: "airlock"
            },
            {
                id: "dome1-dome1oxygen",
                x: 20, y: 80,
                width: 60, height: 20,
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
                id: "dome1-dome2",
                x: 10, y: 40,
                width: 13, height: 23,
                type: "exit",
                to: "dome2"
            },
        ]
    },

    infoboard: {
        id: 'infoboard',
        background: 'scenes/dome1/infoboard.webp',
        buttons: [
            {
                id: "infoboard-dome1",
                x: 20, y: 80,
                width: 60, height: 20,
                type: "exit",
                to: "dome1"
            },
        ]
    },

    dome1garden: {
        id: "dome1garden",
        background: "scenes/dome1/dome1garden.webp",
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
                message: "All the plant here have died, except this cactus which is thriving in this arid climate."
            }
        ]
    },

    dome1lab: {
        id: "dome1lab",
        background: "scenes/dome1/dome1lab.webp",
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
                x: 20, y: 45,
                width: 14, height: 18,
                type: "text",
                message: "DNA SEQUENCER\n| TARGET: Solanum tuberosum [GEN-4]\n| ALIGNMENT: 99.4%\n| RAD-MUTATION INDEX: 0.02% (NEGLIGIBLE)"
            },
            {
                id: "dome1lab-INTERACTION2",
                x: 34, y: 45,
                width: 15, height: 18,
                type: "text",
                message: "The plants are dead, but the fungi is still growing. The smell is horid."
            },
            {
                id: "dome1lab-INTERACTION3",
                x: 49, y: 45,
                width: 10, height: 18,
                type: "text",
                message: "The base is located in Hellas Planitia a giant meteorite crater.\nThe meteorite fell here about 4 billions here ago faciliting our job and making half the digging for us.\nThe crust is very thin here only about 10km. There is also a massive vein of Palladium ore that made the Czech Republic rich in the 80s"
            },
            {
                id: "dome1lab-INTERACTION4",
                x: 59, y: 45,
                width: 20, height: 18,
                type: "text",
                message: "BIOLAB MAIN\n| WARNING: HYDROPONIC FLOOD\n| DECAY INDEX: 94%\n| MYCELIUM GROWTH: UNCONTROLLED\n| SPORE DENSITY: HIGH"
            },
        ]
    },

    dome1oxygen: {
        id: "dome1oxygen",
        background: "scenes/dome1/dome1oxygen.webp",
        buttons: [
            {
                id: "dome1oxygen-dome1",
                x: 20, y: 80,
                width: 60, height: 20,
                type: "exit",
                to: "dome1"
            },
            {
                id: "dome1oxygen-INTERACTION1",
                x: 30, y: 35,
                width: 20, height: 35,
                type: "text",
                message: "AREOLOGY MAIN\n| LAT: 12\u00B026'11\" S | LONG: 68\u00B031'44\" W\n| LOCATION: Hellas Planitia\n| ALTITUDE: -7,412m"
            },
            {
                id: "dome1oxygen-INTERACTION2",
                x: 60, y: 35,
                width: 30, height: 35,
                type: "text",
                message: "LIFE SUPPORT MAIN\n| ppO2: 21.2 kPa || ppCO2: 0.40 kPa\n| HUMIDITY: 42%\n| PRESSURE INSIDE: 98kPa\n| CO2_SCRUB: NOMINAL"
            },
        ]
    }
};