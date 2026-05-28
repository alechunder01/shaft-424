/* 

TYPE OF BUTTONS SYNTAX:

EXIT
type: "",
to: ""

MESSAGE
type: "text",
message: ""

ITEM
type: "item",
itemName: "",
itemDescription: ""

LOCKED EXIT
type: "locked_exit",
to: "",
requiredItem: "",
lockedMessage: ""

LOCKED EXIT 2 ITEMS
type: "locked_exit2items",
requiredItem: "",
requiredItem2: "",
lockedMessage: "",
to: ""

*/

import { tittlesScenes } from './scenes/tittles.js';
import { cryolabScenes } from './scenes/cryolab.js';
import { dome1Scenes } from './scenes/dome1.js';
import { dome2Scenes } from './scenes/dome2.js';
import { habScenes } from './scenes/hab.js';
import { outsideScenes } from './scenes/outside.js';
import { rocketScenes } from './scenes/rocket.js';
import { chariotScenes } from './scenes/chariot.js';


export const scenes = {

    ...tittlesScenes,
    ...cryolabScenes,
    ...dome1Scenes,
    ...dome2Scenes,
    ...habScenes,
    ...outsideScenes,
    ...rocketScenes,
    ...chariotScenes

};