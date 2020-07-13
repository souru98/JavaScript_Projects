// Checkpoint 1 | Creating the queen object
let queen = {
        //Create properties. That is the co-ordiates here
        x: 4,
        y: 0
    }
    //  N
    //          ^
    //          |
    //          |
    //          |
    // <------- q ------> E
    //          |
    //          |
    //          |
    //          v


// Checkpoint 2 | Turning the queen
function queenMove(steps, direction) {
    var temp;
    var position;
    switch (direction) {
        case "N":
            temp = queen.y - steps;
            if (boundary(temp) == true) {
                queen.y = temp;
            } else {
                console.log("Queen outside the boundary");
            }
            updateposition(position)
            break;
        case "S":
            temp = queen.y + steps;
            if (boundary(temp) == true) {
                queen.y = temp;
            } else {
                console.log("Queen outside the boundary");
            }
            updateposition(position)
            break;
        case "E":
            temp = queen.x + steps;
            if (boundary(temp) == true) {
                queen.x = temp;
            } else {
                console.log("Queen outside the boundary");
            }
            updateposition(position)
            break;
        case "W":
            temp = queen.x - steps;
            if (boundary(temp) == true) {
                queen.x = temp;
            } else {
                console.log("Queen outside the boundary");
            }
            updateposition(position)
            break;
        case "NE":
            temp = queen.y - steps;
            temp = queen.x + steps;
            if (boundary(temp) == true) {
                queen.y = temp;
                queen.x = temp;
            } else {
                console.log("Queen outside the boundary");
            }
            updateposition(position)
            break;
        case "NW":
            temp = queen.y - steps;
            temp = queen.x - steps;
            if (boundary(temp) == true) {
                queen.y = temp;
                queen.x = temp;
            } else {
                console.log("Queen outside the boundary");
            }
            updateposition(position)
            break;
        case "SE":
            temp = queen.y + steps;
            temp = queen.x + steps;

            if (boundary(temp) == true) {
                queen.y = temp;
                queen.x = temp;
            } else {
                console.log("Queen outside the boundary");
            }
            updateposition(position)
            break;
        case "SW":
            temp = queen.y + steps;
            temp = queen.x - steps;

            if (boundary(temp) == true) {
                queen.y = temp;
                queen.x = temp;
            } else {
                console.log("Queen outside the boundary");
            }
            updateposition(position)

            break;
        default:
            console.log("enter correct data")
    }
}

function boundary(position) {
    if (position > 7 || position < 0) {
        return false;
    } else {
        return true;
    }
}

function updateposition() {
    position = [
        ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
        ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
        ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
        ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
        ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
        ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
        ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]
    ];
    console.log(position[queen.y][queen.x])
}

// // Bonus 1 - Gotta keep her in the battle!

// // Bonus 2 - The queen is more powerful than what you think!

// // Bonus 3 - How about multiple queens?