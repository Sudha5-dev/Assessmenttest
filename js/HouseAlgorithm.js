var Ideal1 = {
    Be: {
        len: 3.35,
        wid: 3.35,
        Adj: ["Li", "Ba", "Ki", "EH", "Pj", "Cl", "Lf", "SI", "SE"],
        notAdj: ["HT"],
    },
    Ba: {
        len: 1.21,
        wid: 0.91,
        Adj: ["Be", "EH", "Li", "Lf", "SI", "SE", "Ki"],
        notAdj: ["Pj"],
    },
    Li: {
        len: 3.35,
        wid: 3.04,
        Adj: ["EH", "Be", "Ki", "En", "SI", "Ba", "Pj", "HT", "Lf", "P1", "P2"],
        notAdj: [],
    },
    Ki: {
        len: 1.75,
        wid: 1.67,
        Adj: ["Li", "EH", "Be", "SI", "Lf", "SE"],
        notAdj: ["P1", "P2"],
    },
    Cl: {
        len: 1.82,
        wid: 0.61,
        Adj: ["Be", "EH", "Li"],
        notAdj: ["P1", "P2"],
    },
    // Ha:{
    //     len:3.35,
    //     wid:3.04,
    //     Adj:["Be","Ba","Li","Lf","SI","SE","Ki","P1","P2"],
    //     notAdj:[],
    // },
    SE: {
        len: 3,
        wid: 2,
        Adj: ["P1", "P2", "EH"],
        notAdj: [],
    },
    SI: {
        len: 3,
        wid: 2,
        Adj: ["Li", "EH", "Ki", "Lf", "Pj", "St", "HT"],
        notAdj: ["P1", "P2"],
    },
    P2: {
        len: 7,
        wid: 5.5,
        Adj: ["EH", "Li"],
        notAdj: ["Cl"],
    },
    P1: {
        len: 3.5,
        wid: 3,
        Adj: ["EH", "Li"],
        notAdj: ["Cl"],
    },
    Lf: {
        len: 1.5,
        wid: 1.5,
        Adj: ["EH", "Li", "SI", "Ki", "Ba", "Be", "Pj"],
        notAdj: ["St"],
    },
    Pj: {
        len: 2.74,
        wid: 1.82,
        Adj: ["Li", "Be", "Ki", "St", "Lf", "St"],
        notAdj: ["Ba", "P2", "P1", "HT"],
    },
    St: {
        len: 3.04,
        wid: 3.04,
        Adj: ["Be", "Li", "Pj", "Ba"],
        notAdj: ["EH", "HT", "SE", "P2", "P1"],
    },
    HT: {
        len: 5.18,
        wid: 5.18,
        Adj: ["Li", "EH", "SI", "Ba", "Ki", "SE"],
        notAdj: ["Be", "P2", "P1", "Pj"],
    },
    OT: {
        len: 2.74,
        wid: 2.74,
        Adj: ["Be", "EH", "Li", "Ki", "HT", "Pj", "Ba", "SI"],
        notAdj: ["P2", "P1", "SE"],
    },
    EH: {
        len: 3,
        wid: 1.75,
        Adj: ["P2", "P1", "Li", "Ki", "Be",],
        notAdj: ["Ba"],
    },
}


var Ideal2 = {
    Be: {
        len: 3.78,
        wid: 3.35,
        Adj: ["Li", "Ba", "Ki", "EH", "Pj", "Cl", "Lf", "SI", "SE"],
        notAdj: ["HT"],
    },
    Ba: {
        len: 1.21,
        wid: 0.91,
        Adj: ["Be", "EH", "Li", "Lf", "SI", "SE", "Ki"],
        notAdj: ["Pj"],
    },
    Li: {
        len: 4.87,
        wid: 3.35,
        Adj: ["EH", "Be", "Ki", "En", "SI", "Ba", "Pj", "HT", "Lf", "P1", "P2"],
        notAdj: [],
    },
    Ki: {
        len: 2.94,
        wid: 1.85,
        Adj: ["Li", "EH", "Be", "SI", "Lf", "SE"],
        notAdj: ["P1", "P2"],
    },
    Cl: {
        len: 1.82,
        wid: 0.61,
        Adj: ["Be", "EH", "Li"],
        notAdj: ["P1", "P2"],
    },
    // Ha:{
    //     len:4.87,
    //     wid:3.35,
    //     Adj:["Be","Ba","Li","Lf","SI","SE","Ki","P1","P2"],
    //     notAdj:[],
    // },
    SE: {
        len: 3,
        wid: 2,
        Adj: ["P1", "P2", "EH"],
        notAdj: [],
    },
    SI: {
        len: 3,
        wid: 2,
        Adj: ["Li", "EH", "Ki", "Lf", "Pj", "St", "HT"],
        notAdj: ["P1", "P2"],
    },
    P2: {
        len: 7,
        wid: 5.5,
        Adj: ["EH", "Li"],
        notAdj: ["Cl"],
    },
    P1: {
        len: 3.5,
        wid: 3,
        Adj: ["EH", "Li"],
        notAdj: ["Cl"],
    },
    Lf: {
        len: 1.5,
        wid: 1.5,
        Adj: ["EH", "Li", "SI", "Ki", "Ba", "Be", "Pj"],
        notAdj: ["St"],
    },
    Pj: {
        len: 2.74,
        wid: 1.82,
        Adj: ["Li", "Be", "Ki", "St", "Lf", "St"],
        notAdj: ["Ba", "P2", "P1", "HT"],
    },
    St: {
        len: 3.04,
        wid: 3.04,
        Adj: ["Be", "Li", "Pj", "Ba"],
        notAdj: ["EH", "HT", "SE", "P2", "P1"],
    },
    HT: {
        len: 5.18,
        wid: 5.18,
        Adj: ["Li", "EH", "SI", "Ba", "Ki", "SE"],
        notAdj: ["Be", "P2", "P1", "Pj"],
    },
    OT: {
        len: 2.74,
        wid: 2.74,
        Adj: ["Be", "EH", "Li", "Ki", "HT", "Pj", "Ba", "SI"],
        notAdj: ["P2", "P1", "SE"],
    },
    EH: {
        len: 3,
        wid: 1.75,
        Adj: ["P2", "P1", "Li", "Ki", "Be",],
        notAdj: ["Ba"],
    },
}


var Ideal3 = {
    Be: {
        len: 3.65,
        wid: 3.35,
        Adj: ["Li", "Ba", "Ki", "EH", "Pj", "Cl", "Lf", "SI", "SE"],
        notAdj: ["HT"],
    },
    Ba: {
        len: 1.21,
        wid: 0.91,
        Adj: ["Be", "EH", "Li", "Lf", "SI", "SE", "Ki"],
        notAdj: ["Pj"],
    },
    Li: {
        len: 6.40,
        wid: 3.65,
        Adj: ["EH", "Be", "Ki", "En", "SI", "Ba", "Pj", "HT", "Lf", "P1", "P2"],
        notAdj: [],
    },
    Ki: {
        len: 2.74,
        wid: 2.13,
        Adj: ["Li", "EH", "Be", "SI", "Lf", "SE"],
        notAdj: ["P1", "P2"],
    },
    Cl: {
        len: 1.82,
        wid: 0.61,
        Adj: ["Be", "EH", "Li"],
        notAdj: ["P1", "P2"],
    },
    // Ha:{
    //     len:6.40,
    //     wid:3.65,
    //     Adj:["Be","Ba","Li","Lf","SI","SE","Ki","P1","P2"],
    //     notAdj:[],
    // },
    SE: {
        len: 3,
        wid: 2,
        Adj: ["P1", "P2", "EH"],
        notAdj: [],
    },
    SI: {
        len: 3,
        wid: 2,
        Adj: ["Li", "EH", "Ki", "Lf", "Pj", "St", "HT"],
        notAdj: ["P1", "P2"],
    },
    P2: {
        len: 7,
        wid: 5.5,
        Adj: ["EH", "Li"],
        notAdj: ["Cl"],
    },
    P1: {
        len: 3.5,
        wid: 3,
        Adj: ["EH", "Li"],
        notAdj: ["Cl"],
    },
    Lf: {
        len: 1.5,
        wid: 1.5,
        Adj: ["EH", "Li", "SI", "Ki", "Ba", "Be", "Pj"],
        notAdj: ["St"],
    },
    Pj: {
        len: 2.74,
        wid: 1.82,
        Adj: ["Li", "Be", "Ki", "St", "Lf", "St"],
        notAdj: ["Ba", "P2", "P1", "HT"],
    },
    St: {
        len: 3.04,
        wid: 3.04,
        Adj: ["Be", "Li", "Pj", "Ba"],
        notAdj: ["EH", "HT", "SE", "P2", "P1"],
    },
    HT: {
        len: 5.18,
        wid: 5.18,
        Adj: ["Li", "EH", "SI", "Ba", "Ki", "SE"],
        notAdj: ["Be", "P2", "P1", "Pj"],
    },
    OT: {
        len: 2.74,
        wid: 2.74,
        Adj: ["Be", "EH", "Li", "Ki", "HT", "Pj", "Ba", "SI"],
        notAdj: ["P2", "P1", "SE"],
    },
    EH: {
        len: 3,
        wid: 1.75,
        Adj: ["P2", "P1", "Li", "Ki", "Be",],
        notAdj: ["Ba"],
    },
}

var Ideal4 = {
    Be: {
        len: 4.11,
        wid: 3.65,
        Adj: ["Li", "Ba", "Ki", "EH", "Pj", "Cl", "Lf", "SI", "SE"],
        notAdj: ["HT"],
    },
    Ba: {
        len: 1.21,
        wid: 0.91,
        Adj: ["Be", "EH", "Li", "Lf", "SI", "SE", "Ki"],
        notAdj: ["Pj"],
    },
    Li: {
        len: 7.39,
        wid: 4.26,
        Adj: ["EH", "Be", "Ki", "En", "SI", "Ba", "Pj", "HT", "Lf", "P1", "P2"],
        notAdj: [],
    },
    Ki: {
        len: 3.50,
        wid: 2.13,
        Adj: ["Li", "EH", "Be", "SI", "Lf", "SE"],
        notAdj: ["P1", "P2"],
    },
    Cl: {
        len: 1.82,
        wid: 0.61,
        Adj: ["Be", "EH", "Li"],
        notAdj: ["P1", "P2"],
    },
    // Ha:{
    //     len:7.39,
    //     wid:4.26,
    //     Adj:["Be","Ba","Li","Lf","SI","SE","Ki","P1","P2"],
    //     notAdj:[],
    // },
    SE: {
        len: 3,
        wid: 2,
        Adj: ["P1", "P2", "EH"],
        notAdj: [],
    },
    SI: {
        len: 3,
        wid: 2,
        Adj: ["Li", "EH", "Ki", "Lf", "Pj", "St", "HT"],
        notAdj: ["P1", "P2"],
    },
    P2: {
        len: 7,
        wid: 5.5,
        Adj: ["EH", "Li"],
        notAdj: ["Cl"],
    },
    P1: {
        len: 3.5,
        wid: 3,
        Adj: ["EH", "Li"],
        notAdj: ["Cl"],
    },
    Lf: {
        len: 1.5,
        wid: 1.5,
        Adj: ["EH", "Li", "SI", "Ki", "Ba", "Be", "Pj"],
        notAdj: ["St"],
    },
    Pj: {
        len: 2.74,
        wid: 1.82,
        Adj: ["Li", "Be", "Ki", "St", "Lf", "St"],
        notAdj: ["Ba", "P2", "P1", "HT"],
    },
    St: {
        len: 3.04,
        wid: 3.04,
        Adj: ["Be", "Li", "Pj", "Ba"],
        notAdj: ["EH", "HT", "SE", "P2", "P1"],
    },
    HT: {
        len: 5.18,
        wid: 5.18,
        Adj: ["Li", "EH", "SI", "Ba", "Ki", "SE"],
        notAdj: ["Be", "P2", "P1", "Pj"],
    },
    OT: {
        len: 2.74,
        wid: 2.74,
        Adj: ["Be", "EH", "Li", "Ki", "HT", "Pj", "Ba", "SI"],
        notAdj: ["P2", "P1", "SE"],
    },
    EH: {
        len: 3,
        wid: 1.75,
        Adj: ["P2", "P1", "Li", "Ki", "Be",],
        notAdj: ["Ba"],
    },
}


export class TreeNode {
    constructor(name, subdivision, proportion, depth) {
        this.name = name;
        this.subdivision = ((depth % 2) === 0) ? 'x' : 'y';
        this.proportion = proportion;
        this.len = null;
        this.width = null;
        this.left = null;
        this.right = null;
        this.depth = depth;
    }
}


export class HouseTree {

    constructor(size, rooms) {
        this.size = 2 * size - 1;
        this.rooms = rooms;
        this.root = null;
    }

    GenerateRandomTreeHelper(root, TreeSize, depth) {

        if (TreeSize.s === this.size) return root;

        if (root === null) {
            let x = Math.random()
            if (x < 0.5) x = 0;
            else x = 1;
            if (x) root = new TreeNode("Ro", 'x', Math.floor((Math.random() * 100)) / 100, depth);
            else root = new TreeNode("Ro", 'y', Math.floor((Math.random() * 100)) / 100, depth);
            TreeSize.s += 1;
        }

        if (root.left === null) {
            let x = Math.random()
            if (x < 0.5) x = 0;
            else x = 1;

            if (x === 1) {
                let x = Math.random()
                if (x < 0.5) x = 0;
                else x = 1;
                if (x) root.left = new TreeNode("Ro", 'x', Math.floor((Math.random() * 100)) / 100, depth + 1);
                else root.left = new TreeNode("Ro", 'y', Math.floor((Math.random() * 100)) / 100, depth + 1);
                TreeSize.s += 1;

                x = Math.random()
                if (x < 0.5) x = 0;
                else x = 1;
                if (x) root.right = new TreeNode("Ro", 'x', Math.floor((Math.random() * 100)) / 100, depth + 1);
                else root.right = new TreeNode("Ro", 'y', Math.floor((Math.random() * 100)) / 100, depth + 1);
                TreeSize.s += 1;

                root.left = this.GenerateRandomTreeHelper(root.left, TreeSize, depth + 1)
                root.right = this.GenerateRandomTreeHelper(root.right, TreeSize, depth + 1)


            }

        }
        else {
            root.left = this.GenerateRandomTreeHelper(root.left, TreeSize, depth + 1);
            root.right = this.GenerateRandomTreeHelper(root.right, TreeSize, depth + 1);
        }

        return root;
    }


    GenerateRandomTree() {
        let TreeSize = { s: 0 };
        while (TreeSize.s !== this.size) {
            this.root = this.GenerateRandomTreeHelper(this.root, TreeSize, 0)
        }
        // console.log(TreeSize.s);
        //   console.log(this.root);

    }





    GenerateRandomRoomConfig() {

        var currentIndex = this.rooms.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = this.rooms[currentIndex];
            this.rooms[currentIndex] = this.rooms[randomIndex];
            this.rooms[randomIndex] = temporaryValue;
        }
    }



    PlaceRoomsInorder(number, root) {
        if (root === null) return;
        if (root.left !== null) this.PlaceRoomsInorder(number, root.left)

        if (root.left === null && root.right === null) {
            root.name = this.rooms[number.val][0];
            root.proportion = null;
            root.len = this.rooms[number.val][1];
            root.width = this.rooms[number.val][2];
            number.val += 1;
        }

        if (root.right !== null) this.PlaceRoomsInorder(number, root.right)
    }

    PlaceRoomsInTree() {
        //   console.log(this.root);
        let number = { val: 0 }
        this.PlaceRoomsInorder(number, this.root);
    }


    IsLeaf(root) {
        if (root === null) return false;

        if ((root.left === null) && (root.right === null)) return true;

        return false;
    }


    CalculateProportionsPostorder(root) {

        let left, right;

        if (this.IsLeaf(root.left) && this.IsLeaf(root.right)) {
            root.proportion = Math.floor((root.left.width / (root.right.width + root.left.width)) * 100) / 100;
            if (root.left.len > root.right.len) return root.left.len;
            else return root.right.len;
        }
        else if (this.IsLeaf(root.left)) {
            right = this.CalculateProportionsPostorder(root.right)
            root.proportion = Math.floor((root.left.width / (right + root.left.width)) * 100) / 100;
            return root.left.len;

        }
        else if (this.IsLeaf(root.right)) {

            left = this.CalculateProportionsPostorder(root.left)
            root.proportion = Math.floor((left / (root.right.width + left)) * 100) / 100;
            return root.right.width;

        }
        else {
            left = this.CalculateProportionsPostorder(root.left);
            right = this.CalculateProportionsPostorder(root.right);
            root.proportion = Math.floor((left / (right + left)) * 100) / 100;
            return left + right;
        }

    }


    CalculateProportions() {
        this.CalculateProportionsPostorder(this.root);
    }



    PrintInorder() {
        return;
    }

    PrintHouse() {
        this.PrintInorder(this.root)
    }




    roomsDimensions(root, x1, y1, x2, y2, roomsArray) {

        if (root === null) return;

        if (this.IsLeaf(root)) {
            roomsArray.a.push([root.name, x1, y1, x2, y2]);
            return;
        }

        if (root.subdivision === 'x') {
            let len = x2 - x1;
            this.roomsDimensions(root.left, x1, y1, x1 + root.proportion * len, y2, roomsArray);
            this.roomsDimensions(root.right, x1 + root.proportion * len, y1, x2, y2, roomsArray);
        }
        else {
            let len = y2 - y1;
            this.roomsDimensions(root.left, x1, y1 + len - (root.proportion * len), x2, y2, roomsArray);
            this.roomsDimensions(root.right, x1, y1, x2, y1 + len - (root.proportion * len), roomsArray);

        }

    }




    Insect(x1, x2, x3, x4) {
        if (Math.max(x1, x3) <= Math.min(x2, x4)) return true;

        return false;
    }

    Intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
        if (this.Insect(x1, x2, x3, x4) && this.Insect(y1, y2, y3, y4)) return true;

        return false;
    }

    CalculateScore(x1, y1, x2, y2, offset, vastu, road) {

        let valid = 1;
        let roomsArray = { a: [] }
        this.roomsDimensions(this.root, x1, y1, x2, y2, roomsArray);

        let rooms = roomsArray.a;
        let score = 100;

        let plotlen = Math.abs(x2 - x1) + 2 * offset;
        let plotwid = Math.abs(y2 - y1) + 2 * offset;

        let plotarea = (plotlen / 100) * (plotwid / 100);

        if (plotarea <= 65) {
            for (let i = 0; i < rooms.length; i++) {

                if (rooms[i][0] === "EH" && road === 'N') {
                    if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1, x2, y1)) { valid = 0; break; }
                }
                else if (rooms[i][0] === "EH" && road === 'E') {
                    if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x2, y1, x2, y2)) { valid = 0; break; }
                }
                else if (rooms[i][0] === "EH" && road === 'S') {
                    if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y2, x2, y2)) { valid = 0; break; }
                }
                else if (rooms[i][0] === "EH" && road === 'W') {
                    if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1, x1, y2)) { valid = 0; break; }
                }
                // if(rooms[i][0]==="EH"){
                //     if(!this.Intersect(rooms[i][1],rooms[i][2],rooms[i][3],rooms[i][4],x1,y1,x2,y1)
                //     && !this.Intersect(rooms[i][1],rooms[i][2],rooms[i][3],rooms[i][4],x1,y1,x1,y2)
                //     && !this.Intersect(rooms[i][1],rooms[i][2],rooms[i][3],rooms[i][4],x1,y2,x2,y2)
                //     && !this.Intersect(rooms[i][1],rooms[i][2],rooms[i][3],rooms[i][4],x2,y1,x2,y2)){valid=0;break;}
                // }


                if (vastu) {
                    if (rooms[i][0] === "Be") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1 + 2 * plotwid / 3, x1 + plotlen / 3, y2)  //South-west
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1 + plotwid / 3, x1 + plotlen / 3, y1 + 2 * plotwid / 3)  //West
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1 + plotwid / 3, x2, y1 + 2 * plotwid / 3)) { valid = 0; break; }  // East
                    }
                    else if (rooms[i][0] === "Ba") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1, x1 + plotlen / 3, y1 + plotwid / 3)  //North-West
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1, x2, y1 + plotwid / 3) //North-East
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + plotlen / 3, y1 + 2 * plotwid / 3, x1 + 2 * plotlen / 3, y2)) { valid = 0; break; }//South

                    }
                    else if (rooms[i][0] === "Li") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + plotlen / 3, y1, x1 + 2 * plotlen / 3, y1 + plotwid / 3) //North
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1 + plotwid / 3, x2, y1 + 2 * plotwid / 3)) { valid = 0; break; } //East
                    }
                    else if (rooms[i][0] === "Ki") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1, x1 + plotlen / 3, y1 + plotwid / 3) //North-West
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y2 + 2 * plotwid / 3, x2, y2)) { valid = 0; break; } //South-East
                    }
                    else if (rooms[i][0] === "Ha") {
                        if (this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1, x2, y1)
                            || this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x2, y1, x2, y2)
                            || this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y2, x2, y2)
                            || this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1, x1, y2)) { valid = 0; break; }
                    }
                    else if (rooms[i][0] === "SE") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1 + 2 * plotwid / 3, x1 + plotlen / 3, y2) //South-West
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + plotlen / 3, y1 + 2 * plotwid / 3, x1 + 2 * plotlen / 3, y2) //South
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1 + plotwid / 3, x1 + plotlen / 3, y1 + 2 * plotwid / 3)) { valid = 0; break; } //West
                    }
                    else if (rooms[i][0] === "SI") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1 + 2 * plotwid / 3, x1 + plotlen / 3, y2)//South-West
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + plotlen / 3, y1 + 2 * plotwid / 3, x1 + 2 * plotlen / 3, y2)//South
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1 + plotwid / 3, x1 + plotlen / 3, y1 + 2 * plotwid / 3)) { valid = 0; break; }//West
                    }
                    else if (rooms[i][0] === "P2") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + plotlen / 3, y1, x1 + 2 * plotlen / 3, y1 + plotwid / 3) //North
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1 + plotwid / 3, x2, y1 + 2 * plotwid / 3) //East
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1, x2, y1 + plotwid / 3)) { valid = 0; break; } //North-East
                    }
                    else if (rooms[i][0] === "P1") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + plotlen / 3, y1, x1 + 2 * plotlen / 3, y1 + plotwid / 3)//North
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1 + plotwid / 3, x2, y1 + 2 * plotwid / 3) //East
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1, x2, y1 + plotwid / 3)) { valid = 0; break; } //North-East
                    }
                    else if (rooms[i][0] === "Pj") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1, x2, y1 + plotwid / 3)) { valid = 0; break; } //North-East
                    }
                    else if (rooms[i][0] === "St") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1 + plotwid / 3, x2, y1 + 2 * plotwid / 3) //East
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1, x2, y1 + plotwid / 3)) { valid = 0; break; } //North-East
                    }
                    else if (rooms[i][0] === "HT") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y2 + 2 * plotwid / 3, x2, y2) //South-East
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + plotlen / 3, y1 + 2 * plotwid / 3, x1 + 2 * plotlen / 3, y2)) { valid = 0; break; } //South
                    }
                    else if (rooms[i][0] === "OT") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1 + plotwid / 3, x2, y1 + 2 * plotwid / 3) //East
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + plotlen / 3, y1, x1 + 2 * plotlen / 3, y1 + plotwid / 3) //North
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1, x2, y1 + plotwid / 3)) { valid = 0; break; } //North-East
                    }
                    if (rooms[i][0] === "EH") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1, x2, y1)
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x2, y1, x2, y1)
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x2, y1, x2, y2)
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1, x1, y1)
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x2, y2, x2, y2)) { valid = 0; break; }
                    }
                }

                let len = (rooms[i][3] - rooms[i][1]) / 100;
                let wid = (rooms[i][4] - rooms[i][2]) / 100;

                if (len < wid) {
                    [len, wid] = [wid, len];
                }

                if (rooms[i][0] === "Be") {
                    if ((len > Ideal1[rooms[i][0]].len) || (Math.abs(len - Ideal1[rooms[i][0]].len) > 0.1 * Ideal1[rooms[i][0]].len)) score -= 3 * Math.pow(len - Ideal1[rooms[i][0]].len, 2);
                    if ((wid > Ideal1[rooms[i][0]].wid) || (Math.abs(wid - Ideal1[rooms[i][0]].wid) > 0.1 * Ideal1[rooms[i][0]].wid)) score -= 3 * Math.pow(wid - Ideal1[rooms[i][0]].wid, 2);
                }
                else if (rooms[i][0] === "Li" || rooms[i][0] === "Ki") {
                    if ((len > Ideal1[rooms[i][0]].len) || (Math.abs(len - Ideal1[rooms[i][0]].len) > 0.1 * Ideal1[rooms[i][0]].len)) score -= 2 * Math.pow(len - Ideal1[rooms[i][0]].len, 2);
                    if ((wid > Ideal1[rooms[i][0]].wid) || (Math.abs(wid - Ideal1[rooms[i][0]].wid) > 0.1 * Ideal1[rooms[i][0]].wid)) score -= 2 * Math.pow(wid - Ideal1[rooms[i][0]].wid, 2);
                }
                else {
                    if ((len > Ideal1[rooms[i][0]].len) || (Math.abs(len - Ideal1[rooms[i][0]].len) > 0.1 * Ideal1[rooms[i][0]].len)) score -= 1 * Math.pow(len - Ideal1[rooms[i][0]].len, 2);
                    if ((wid > Ideal1[rooms[i][0]].wid) || (Math.abs(wid - Ideal1[rooms[i][0]].wid) > 0.1 * Ideal1[rooms[i][0]].wid)) score -= 1 * Math.pow(wid - Ideal1[rooms[i][0]].wid, 2);
                }


                for (let j = 0; j < rooms.length; j++) {
                    if (i === j) continue;

                    if (this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], rooms[j][1], rooms[j][2], rooms[j][3], rooms[j][4])) {

                        let res = Ideal1[rooms[i][0]].Adj.find((val) => { return val === rooms[j][0] });
                        let res2 = Ideal1[rooms[i][0]].notAdj.find((val) => { return val === rooms[j][0] });


                        if (res2 != undefined) {
                            valid = 0;
                            break;
                        }

                        // console.log(`checking ${rooms[i][0]}  to ${rooms[j][0]}`, res);

                        if (res == undefined) score += 0;
                        else {
                            let ind;
                            for (let k = 0; k < Ideal1[rooms[i][0]].Adj.length; k++) {
                                if (Ideal1[rooms[i][0]].Adj[k] === rooms[j][0]) { ind = k; break; }
                            }
                            if (ind === 0 || ind === 1) score += 10;
                            else {
                                let p = 8 - ind;
                                if (p < 1) p = 1;
                                score += p;
                            }
                            // console.log(`${rooms[i][0]} is adjacent to ${rooms[j][0]}`)
                        }

                    }

                }
                if (valid === 0) break;
            }

        }
        else if (plotarea > 65 && plotarea <= 121) {
            for (let i = 0; i < rooms.length; i++) {

                if (rooms[i][0] === "EH" && road === 'N') {
                    if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1, x2, y1)) { valid = 0; break; }
                }
                else if (rooms[i][0] === "EH" && road === 'E') {
                    if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x2, y1, x2, y2)) { valid = 0; break; }
                }
                else if (rooms[i][0] === "EH" && road === 'S') {
                    if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y2, x2, y2)) { valid = 0; break; }
                }
                else if (rooms[i][0] === "EH" && road === 'W') {
                    if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1, x1, y2)) { valid = 0; break; }
                }

                // if(rooms[i][0]==="EH"){
                //     if(!this.Intersect(rooms[i][1],rooms[i][2],rooms[i][3],rooms[i][4],x1,y1,x2,y1)
                //     && !this.Intersect(rooms[i][1],rooms[i][2],rooms[i][3],rooms[i][4],x1,y1,x1,y2)
                //     && !this.Intersect(rooms[i][1],rooms[i][2],rooms[i][3],rooms[i][4],x1,y2,x2,y2)
                //     && !this.Intersect(rooms[i][1],rooms[i][2],rooms[i][3],rooms[i][4],x2,y1,x2,y2)){valid=0;break;}
                // }

                if (vastu) {
                    if (rooms[i][0] === "Be") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1 + 2 * plotwid / 3, x1 + plotlen / 3, y2)  //South-west
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1 + plotwid / 3, x1 + plotlen / 3, y1 + 2 * plotwid / 3)  //West
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1 + plotwid / 3, x2, y1 + 2 * plotwid / 3)) { valid = 0; break; }  // East
                    }
                    else if (rooms[i][0] === "Ba") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1, x1 + plotlen / 3, y1 + plotwid / 3)  //North-West
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1, x2, y1 + plotwid / 3) //North-East
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + plotlen / 3, y1 + 2 * plotwid / 3, x1 + 2 * plotlen / 3, y2)) { valid = 0; break; }//South

                    }
                    else if (rooms[i][0] === "Li") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + plotlen / 3, y1, x1 + 2 * plotlen / 3, y1 + plotwid / 3) //North
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1 + plotwid / 3, x2, y1 + 2 * plotwid / 3)) { valid = 0; break; } //East
                    }
                    else if (rooms[i][0] === "Ki") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1, x1 + plotlen / 3, y1 + plotwid / 3) //North-West
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y2 + 2 * plotwid / 3, x2, y2)) { valid = 0; break; } //South-East
                    }
                    else if (rooms[i][0] === "Ha") {
                        if (this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1, x2, y1)
                            || this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x2, y1, x2, y2)
                            || this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y2, x2, y2)
                            || this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1, x1, y2)) { valid = 0; break; }
                    }
                    else if (rooms[i][0] === "SE") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1 + 2 * plotwid / 3, x1 + plotlen / 3, y2) //South-West
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + plotlen / 3, y1 + 2 * plotwid / 3, x1 + 2 * plotlen / 3, y2) //South
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1 + plotwid / 3, x1 + plotlen / 3, y1 + 2 * plotwid / 3)) { valid = 0; break; } //West
                    }
                    else if (rooms[i][0] === "SI") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1 + 2 * plotwid / 3, x1 + plotlen / 3, y2)//South-West
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + plotlen / 3, y1 + 2 * plotwid / 3, x1 + 2 * plotlen / 3, y2)//South
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1 + plotwid / 3, x1 + plotlen / 3, y1 + 2 * plotwid / 3)) { valid = 0; break; }//West
                    }
                    else if (rooms[i][0] === "P2") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + plotlen / 3, y1, x1 + 2 * plotlen / 3, y1 + plotwid / 3) //North
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1 + plotwid / 3, x2, y1 + 2 * plotwid / 3) //East
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1, x2, y1 + plotwid / 3)) { valid = 0; break; } //North-East
                    }
                    else if (rooms[i][0] === "P1") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + plotlen / 3, y1, x1 + 2 * plotlen / 3, y1 + plotwid / 3)//North
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1 + plotwid / 3, x2, y1 + 2 * plotwid / 3) //East
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1, x2, y1 + plotwid / 3)) { valid = 0; break; } //North-East
                    }
                    else if (rooms[i][0] === "Pj") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1, x2, y1 + plotwid / 3)) { valid = 0; break; } //North-East
                    }
                    else if (rooms[i][0] === "St") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1 + plotwid / 3, x2, y1 + 2 * plotwid / 3) //East
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1, x2, y1 + plotwid / 3)) { valid = 0; break; } //North-East
                    }
                    else if (rooms[i][0] === "HT") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y2 + 2 * plotwid / 3, x2, y2) //South-East
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + plotlen / 3, y1 + 2 * plotwid / 3, x1 + 2 * plotlen / 3, y2)) { valid = 0; break; } //South
                    }
                    else if (rooms[i][0] === "OT") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1 + plotwid / 3, x2, y1 + 2 * plotwid / 3) //East
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + plotlen / 3, y1, x1 + 2 * plotlen / 3, y1 + plotwid / 3) //North
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1, x2, y1 + plotwid / 3)) { valid = 0; break; } //North-East
                    }
                    if (rooms[i][0] === "EH") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1, x2, y1)
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x2, y1, x2, y1)
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x2, y1, x2, y2)
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1, x1, y1)
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x2, y2, x2, y2)) { valid = 0; break; }
                    }
                }

                let len = (rooms[i][3] - rooms[i][1]) / 100;
                let wid = (rooms[i][4] - rooms[i][2]) / 100;

                if (len < wid) {
                    [len, wid] = [wid, len];
                }

                if (rooms[i][0] === "Be") {
                    if ((len > Ideal2[rooms[i][0]].len) || (Math.abs(len - Ideal2[rooms[i][0]].len) > 0.1 * Ideal2[rooms[i][0]].len)) score -= 3 * Math.pow(len - Ideal2[rooms[i][0]].len, 2);
                    if ((wid > Ideal2[rooms[i][0]].wid) || (Math.abs(wid - Ideal2[rooms[i][0]].wid) > 0.1 * Ideal2[rooms[i][0]].wid)) score -= 3 * Math.pow(wid - Ideal2[rooms[i][0]].wid, 2);
                }
                else if (rooms[i][0] === "Li" || rooms[i][0] === "Ki") {
                    if ((len > Ideal2[rooms[i][0]].len) || (Math.abs(len - Ideal2[rooms[i][0]].len) > 0.1 * Ideal2[rooms[i][0]].len)) score -= 2 * Math.pow(len - Ideal2[rooms[i][0]].len, 2);
                    if ((wid > Ideal2[rooms[i][0]].wid) || (Math.abs(wid - Ideal2[rooms[i][0]].wid) > 0.1 * Ideal2[rooms[i][0]].wid)) score -= 2 * Math.pow(wid - Ideal2[rooms[i][0]].wid, 2);
                }
                else {
                    if ((len > Ideal2[rooms[i][0]].len) || (Math.abs(len - Ideal2[rooms[i][0]].len) > 0.1 * Ideal2[rooms[i][0]].len)) score -= 1 * Math.pow(len - Ideal2[rooms[i][0]].len, 2);
                    if ((wid > Ideal2[rooms[i][0]].wid) || (Math.abs(wid - Ideal2[rooms[i][0]].wid) > 0.1 * Ideal2[rooms[i][0]].wid)) score -= 1 * Math.pow(wid - Ideal2[rooms[i][0]].wid, 2);
                }

                for (let j = 0; j < rooms.length; j++) {
                    if (i === j) continue;

                    if (this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], rooms[j][1], rooms[j][2], rooms[j][3], rooms[j][4])) {

                        let res = Ideal2[rooms[i][0]].Adj.find((val) => { return val === rooms[j][0] });
                        let res2 = Ideal2[rooms[i][0]].notAdj.find((val) => { return val === rooms[j][0] });


                        if (res2 != undefined) {
                            valid = 0;
                            break;
                        }

                        // console.log(`checking ${rooms[i][0]}  to ${rooms[j][0]}`, res);

                        if (res == undefined) score += 0;
                        else {
                            let ind;
                            for (let k = 0; k < Ideal2[rooms[i][0]].Adj.length; k++) {
                                if (Ideal2[rooms[i][0]].Adj[k] === rooms[j][0]) { ind = k; break; }
                            }
                            if (ind === 0 || ind === 1) score += 10;
                            else {
                                let p = 8 - ind;
                                if (p < 1) p = 1;
                                score += p;
                            }
                            // console.log(`${rooms[i][0]} is adjacent to ${rooms[j][0]}`)
                        }

                    }

                }
                if (valid === 0) break;
            }

        }
        else if (plotarea > 121 && plotarea <= 185) {
            for (let i = 0; i < rooms.length; i++) {

                if (rooms[i][0] === "EH" && road === 'N') {
                    if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1, x2, y1)) { valid = 0; break; }
                }
                else if (rooms[i][0] === "EH" && road === 'E') {
                    if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x2, y1, x2, y2)) { valid = 0; break; }
                }
                else if (rooms[i][0] === "EH" && road === 'S') {
                    if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y2, x2, y2)) { valid = 0; break; }
                }
                else if (rooms[i][0] === "EH" && road === 'W') {
                    if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1, x1, y2)) { valid = 0; break; }
                }

                // if(rooms[i][0]==="EH"){
                //     if(!this.Intersect(rooms[i][1],rooms[i][2],rooms[i][3],rooms[i][4],x1,y1,x2,y1)
                //     && !this.Intersect(rooms[i][1],rooms[i][2],rooms[i][3],rooms[i][4],x1,y1,x1,y2)
                //     && !this.Intersect(rooms[i][1],rooms[i][2],rooms[i][3],rooms[i][4],x1,y2,x2,y2)
                //     && !this.Intersect(rooms[i][1],rooms[i][2],rooms[i][3],rooms[i][4],x2,y1,x2,y2)){valid=0;break;}
                // }

                if (vastu) {
                    if (rooms[i][0] === "Be") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1 + 2 * plotwid / 3, x1 + plotlen / 3, y2)  //South-west
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1 + plotwid / 3, x1 + plotlen / 3, y1 + 2 * plotwid / 3)  //West
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1 + plotwid / 3, x2, y1 + 2 * plotwid / 3)) { valid = 0; break; }  // East
                    }
                    else if (rooms[i][0] === "Ba") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1, x1 + plotlen / 3, y1 + plotwid / 3)  //North-West
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1, x2, y1 + plotwid / 3) //North-East
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + plotlen / 3, y1 + 2 * plotwid / 3, x1 + 2 * plotlen / 3, y2)) { valid = 0; break; }//South

                    }
                    else if (rooms[i][0] === "Li") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + plotlen / 3, y1, x1 + 2 * plotlen / 3, y1 + plotwid / 3) //North
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1 + plotwid / 3, x2, y1 + 2 * plotwid / 3)) { valid = 0; break; } //East
                    }
                    else if (rooms[i][0] === "Ki") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1, x1 + plotlen / 3, y1 + plotwid / 3) //North-West
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y2 + 2 * plotwid / 3, x2, y2)) { valid = 0; break; } //South-East
                    }
                    else if (rooms[i][0] === "Ha") {
                        if (this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1, x2, y1)
                            || this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x2, y1, x2, y2)
                            || this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y2, x2, y2)
                            || this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1, x1, y2)) { valid = 0; break; }
                    }
                    else if (rooms[i][0] === "SE") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1 + 2 * plotwid / 3, x1 + plotlen / 3, y2) //South-West
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + plotlen / 3, y1 + 2 * plotwid / 3, x1 + 2 * plotlen / 3, y2) //South
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1 + plotwid / 3, x1 + plotlen / 3, y1 + 2 * plotwid / 3)) { valid = 0; break; } //West
                    }
                    else if (rooms[i][0] === "SI") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1 + 2 * plotwid / 3, x1 + plotlen / 3, y2)//South-West
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + plotlen / 3, y1 + 2 * plotwid / 3, x1 + 2 * plotlen / 3, y2)//South
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1 + plotwid / 3, x1 + plotlen / 3, y1 + 2 * plotwid / 3)) { valid = 0; break; }//West
                    }
                    else if (rooms[i][0] === "P2") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + plotlen / 3, y1, x1 + 2 * plotlen / 3, y1 + plotwid / 3) //North
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1 + plotwid / 3, x2, y1 + 2 * plotwid / 3) //East
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1, x2, y1 + plotwid / 3)) { valid = 0; break; } //North-East
                    }
                    else if (rooms[i][0] === "P1") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + plotlen / 3, y1, x1 + 2 * plotlen / 3, y1 + plotwid / 3)//North
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1 + plotwid / 3, x2, y1 + 2 * plotwid / 3) //East
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1, x2, y1 + plotwid / 3)) { valid = 0; break; } //North-East
                    }
                    else if (rooms[i][0] === "Pj") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1, x2, y1 + plotwid / 3)) { valid = 0; break; } //North-East
                    }
                    else if (rooms[i][0] === "St") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1 + plotwid / 3, x2, y1 + 2 * plotwid / 3) //East
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1, x2, y1 + plotwid / 3)) { valid = 0; break; } //North-East
                    }
                    else if (rooms[i][0] === "HT") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y2 + 2 * plotwid / 3, x2, y2) //South-East
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + plotlen / 3, y1 + 2 * plotwid / 3, x1 + 2 * plotlen / 3, y2)) { valid = 0; break; } //South
                    }
                    else if (rooms[i][0] === "OT") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1 + plotwid / 3, x2, y1 + 2 * plotwid / 3) //East
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + plotlen / 3, y1, x1 + 2 * plotlen / 3, y1 + plotwid / 3) //North
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1, x2, y1 + plotwid / 3)) { valid = 0; break; } //North-East
                    }
                    if (rooms[i][0] === "EH") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1, x2, y1)
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x2, y1, x2, y1)
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x2, y1, x2, y2)
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1, x1, y1)
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x2, y2, x2, y2)) { valid = 0; break; }
                    }
                }

                let len = (rooms[i][3] - rooms[i][1]) / 100;
                let wid = (rooms[i][4] - rooms[i][2]) / 100;

                if (len < wid) {
                    [len, wid] = [wid, len];
                }


                if (rooms[i][0] === "Be") {
                    if ((len > Ideal3[rooms[i][0]].len) || (Math.abs(len - Ideal3[rooms[i][0]].len) > 0.1 * Ideal3[rooms[i][0]].len)) score -= 3 * Math.pow(len - Ideal3[rooms[i][0]].len, 2);
                    if ((wid > Ideal3[rooms[i][0]].wid) || (Math.abs(wid - Ideal3[rooms[i][0]].wid) > 0.1 * Ideal3[rooms[i][0]].wid)) score -= 3 * Math.pow(wid - Ideal3[rooms[i][0]].wid, 2);
                }
                else if (rooms[i][0] === "Li" || rooms[i][0] === "Ki") {
                    if ((len > Ideal3[rooms[i][0]].len) || (Math.abs(len - Ideal3[rooms[i][0]].len) > 0.1 * Ideal3[rooms[i][0]].len)) score -= 2 * Math.pow(len - Ideal3[rooms[i][0]].len, 2);
                    if ((wid > Ideal3[rooms[i][0]].wid) || (Math.abs(wid - Ideal3[rooms[i][0]].wid) > 0.1 * Ideal3[rooms[i][0]].wid)) score -= 2 * Math.pow(wid - Ideal3[rooms[i][0]].wid, 2);
                }
                else {
                    if ((len > Ideal3[rooms[i][0]].len) || (Math.abs(len - Ideal3[rooms[i][0]].len) > 0.1 * Ideal3[rooms[i][0]].len)) score -= 1 * Math.pow(len - Ideal3[rooms[i][0]].len, 2);
                    if ((wid > Ideal3[rooms[i][0]].wid) || (Math.abs(wid - Ideal3[rooms[i][0]].wid) > 0.1 * Ideal3[rooms[i][0]].wid)) score -= 1 * Math.pow(wid - Ideal3[rooms[i][0]].wid, 2);
                }

                for (let j = 0; j < rooms.length; j++) {
                    if (i === j) continue;

                    if (this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], rooms[j][1], rooms[j][2], rooms[j][3], rooms[j][4])) {

                        let res = Ideal3[rooms[i][0]].Adj.find((val) => { return val === rooms[j][0] });
                        let res2 = Ideal3[rooms[i][0]].notAdj.find((val) => { return val === rooms[j][0] });


                        if (res2 != undefined) {
                            valid = 0;
                            break;
                        }

                        // console.log(`checking ${rooms[i][0]}  to ${rooms[j][0]}`, res);

                        if (res == undefined) score += 0;
                        else {
                            let ind;
                            for (let k = 0; k < Ideal3[rooms[i][0]].Adj.length; k++) {
                                if (Ideal3[rooms[i][0]].Adj[k] === rooms[j][0]) { ind = k; break; }
                            }
                            if (ind === 0 || ind === 1) score += 10;
                            else {
                                let p = 8 - ind;
                                if (p < 1) p = 1;
                                score += p;
                            }
                            // console.log(`${rooms[i][0]} is adjacent to ${rooms[j][0]}`)
                        }

                    }

                }
                if (valid === 0) break;
            }

        }
        else {
            for (let i = 0; i < rooms.length; i++) {

                if (rooms[i][0] === "EH" && road === 'N') {
                    if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1, x2, y1)) { valid = 0; break; }
                }
                else if (rooms[i][0] === "EH" && road === 'E') {
                    if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x2, y1, x2, y2)) { valid = 0; break; }
                }
                else if (rooms[i][0] === "EH" && road === 'S') {
                    if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y2, x2, y2)) { valid = 0; break; }
                }
                else if (rooms[i][0] === "EH" && road === 'W') {
                    if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1, x1, y2)) { valid = 0; break; }
                }

                // if(rooms[i][0]==="EH"){
                //     if(!this.Intersect(rooms[i][1],rooms[i][2],rooms[i][3],rooms[i][4],x1,y1,x2,y1)
                //     && !this.Intersect(rooms[i][1],rooms[i][2],rooms[i][3],rooms[i][4],x1,y1,x1,y2)
                //     && !this.Intersect(rooms[i][1],rooms[i][2],rooms[i][3],rooms[i][4],x1,y2,x2,y2)
                //     && !this.Intersect(rooms[i][1],rooms[i][2],rooms[i][3],rooms[i][4],x2,y1,x2,y2)){valid=0;break;}
                // }

                if (vastu) {
                    if (rooms[i][0] === "Be") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1 + 2 * plotwid / 3, x1 + plotlen / 3, y2)  //South-west
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1 + plotwid / 3, x1 + plotlen / 3, y1 + 2 * plotwid / 3)  //West
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1 + plotwid / 3, x2, y1 + 2 * plotwid / 3)) { valid = 0; break; }  // East
                    }
                    else if (rooms[i][0] === "Ba") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1, x1 + plotlen / 3, y1 + plotwid / 3)  //North-West
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1, x2, y1 + plotwid / 3) //North-East
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + plotlen / 3, y1 + 2 * plotwid / 3, x1 + 2 * plotlen / 3, y2)) { valid = 0; break; }//South

                    }
                    else if (rooms[i][0] === "Li") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + plotlen / 3, y1, x1 + 2 * plotlen / 3, y1 + plotwid / 3) //North
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1 + plotwid / 3, x2, y1 + 2 * plotwid / 3)) { valid = 0; break; } //East
                    }
                    else if (rooms[i][0] === "Ki") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1, x1 + plotlen / 3, y1 + plotwid / 3) //North-West
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y2 + 2 * plotwid / 3, x2, y2)) { valid = 0; break; } //South-East
                    }
                    else if (rooms[i][0] === "Ha") {
                        if (this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1, x2, y1)
                            || this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x2, y1, x2, y2)
                            || this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y2, x2, y2)
                            || this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1, x1, y2)) { valid = 0; break; }
                    }
                    else if (rooms[i][0] === "SE") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1 + 2 * plotwid / 3, x1 + plotlen / 3, y2) //South-West
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + plotlen / 3, y1 + 2 * plotwid / 3, x1 + 2 * plotlen / 3, y2) //South
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1 + plotwid / 3, x1 + plotlen / 3, y1 + 2 * plotwid / 3)) { valid = 0; break; } //West
                    }
                    else if (rooms[i][0] === "SI") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1 + 2 * plotwid / 3, x1 + plotlen / 3, y2)//South-West
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + plotlen / 3, y1 + 2 * plotwid / 3, x1 + 2 * plotlen / 3, y2)//South
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1 + plotwid / 3, x1 + plotlen / 3, y1 + 2 * plotwid / 3)) { valid = 0; break; }//West
                    }
                    else if (rooms[i][0] === "P2") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + plotlen / 3, y1, x1 + 2 * plotlen / 3, y1 + plotwid / 3) //North
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1 + plotwid / 3, x2, y1 + 2 * plotwid / 3) //East
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1, x2, y1 + plotwid / 3)) { valid = 0; break; } //North-East
                    }
                    else if (rooms[i][0] === "P1") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + plotlen / 3, y1, x1 + 2 * plotlen / 3, y1 + plotwid / 3)//North
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1 + plotwid / 3, x2, y1 + 2 * plotwid / 3) //East
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1, x2, y1 + plotwid / 3)) { valid = 0; break; } //North-East
                    }
                    else if (rooms[i][0] === "Pj") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1, x2, y1 + plotwid / 3)) { valid = 0; break; } //North-East
                    }
                    else if (rooms[i][0] === "St") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1 + plotwid / 3, x2, y1 + 2 * plotwid / 3) //East
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1, x2, y1 + plotwid / 3)) { valid = 0; break; } //North-East
                    }
                    else if (rooms[i][0] === "HT") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y2 + 2 * plotwid / 3, x2, y2) //South-East
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + plotlen / 3, y1 + 2 * plotwid / 3, x1 + 2 * plotlen / 3, y2)) { valid = 0; break; } //South
                    }
                    else if (rooms[i][0] === "OT") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1 + plotwid / 3, x2, y1 + 2 * plotwid / 3) //East
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + plotlen / 3, y1, x1 + 2 * plotlen / 3, y1 + plotwid / 3) //North
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1 + 2 * plotlen / 3, y1, x2, y1 + plotwid / 3)) { valid = 0; break; } //North-East
                    }
                    if (rooms[i][0] === "EH") {
                        if (!this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1, x2, y1)
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x2, y1, x2, y1)
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x2, y1, x2, y2)
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x1, y1, x1, y1)
                            && !this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], x2, y2, x2, y2)) { valid = 0; break; }
                    }
                }

                let len = (rooms[i][3] - rooms[i][1]) / 100;
                let wid = (rooms[i][4] - rooms[i][2]) / 100;

                if (len < wid) {
                    [len, wid] = [wid, len];
                }


                if (rooms[i][0] === "Be") {
                    if ((len > Ideal4[rooms[i][0]].len) || (Math.abs(len - Ideal4[rooms[i][0]].len) > 0.1 * Ideal4[rooms[i][0]].len)) score -= 3 * Math.pow(len - Ideal4[rooms[i][0]].len, 2);
                    if ((wid > Ideal4[rooms[i][0]].wid) || (Math.abs(wid - Ideal4[rooms[i][0]].wid) > 0.1 * Ideal4[rooms[i][0]].wid)) score -= 3 * Math.pow(wid - Ideal4[rooms[i][0]].wid, 2);
                }
                else if (rooms[i][0] === "Li" || rooms[i][0] === "Ki") {
                    if ((len > Ideal4[rooms[i][0]].len) || (Math.abs(len - Ideal4[rooms[i][0]].len) > 0.1 * Ideal4[rooms[i][0]].len)) score -= 2 * Math.pow(len - Ideal4[rooms[i][0]].len, 2);
                    if ((wid > Ideal4[rooms[i][0]].wid) || (Math.abs(wid - Ideal4[rooms[i][0]].wid) > 0.1 * Ideal4[rooms[i][0]].wid)) score -= 2 * Math.pow(wid - Ideal4[rooms[i][0]].wid, 2);
                }
                else {
                    if ((len > Ideal4[rooms[i][0]].len) || (Math.abs(len - Ideal4[rooms[i][0]].len) > 0.1 * Ideal4[rooms[i][0]].len)) score -= 1 * Math.pow(len - Ideal4[rooms[i][0]].len, 2);
                    if ((wid > Ideal4[rooms[i][0]].wid) || (Math.abs(wid - Ideal4[rooms[i][0]].wid) > 0.1 * Ideal4[rooms[i][0]].wid)) score -= 1 * Math.pow(wid - Ideal4[rooms[i][0]].wid, 2);
                }

                for (let j = 0; j < rooms.length; j++) {
                    if (i === j) continue;

                    if (this.Intersect(rooms[i][1], rooms[i][2], rooms[i][3], rooms[i][4], rooms[j][1], rooms[j][2], rooms[j][3], rooms[j][4])) {

                        let res = Ideal4[rooms[i][0]].Adj.find((val) => { return val === rooms[j][0] });
                        let res2 = Ideal4[rooms[i][0]].notAdj.find((val) => { return val === rooms[j][0] });


                        if (res2 != undefined) {
                            valid = 0;
                            break;
                        }

                        // console.log(`checking ${rooms[i][0]}  to ${rooms[j][0]}`, res);

                        if (res == undefined) score += 0;
                        else {
                            let ind;
                            for (let k = 0; k < Ideal4[rooms[i][0]].Adj.length; k++) {
                                if (Ideal4[rooms[i][0]].Adj[k] === rooms[j][0]) { ind = k; break; }
                            }
                            if (ind === 0 || ind === 1) score += 10;
                            else {
                                let p = 8 - ind;
                                if (p < 1) p = 1;
                                score += p;
                            }
                            // console.log(`${rooms[i][0]} is adjacent to ${rooms[j][0]}`)
                        }

                    }

                }
                if (valid === 0) break;
            }

        }

        //    for(let i=0;i<rooms.length;i++){

        //       let len= (rooms[i][3]-rooms[i][1])/100;
        //       let wid= (rooms[i][4]-rooms[i][2])/100;

        //       score-=2*Math.pow(len-Ideal[rooms[i][0]].len,2);
        //       score-=2*Math.pow(wid-Ideal[rooms[i][0]].wid,2);

        //        for(let j=0;j<rooms.length;j++){
        //           if(i===j)continue;

        //           if(this.Intersect(rooms[i][1],rooms[i][2],rooms[i][3],rooms[i][4],rooms[j][1],rooms[j][2],rooms[j][3],rooms[j][4])){

        //               let res = Ideal[rooms[i][0]].Adj.find((val)=>{return val===rooms[j][0]});

        //               // console.log(`checking ${rooms[i][0]}  to ${rooms[j][0]}`, res);

        //               if(res==undefined)score+=0;
        //               else {
        //                   score+=5;
        //                   // console.log(`${rooms[i][0]} is adjacent to ${rooms[j][0]}`)
        //               }

        //           }

        //        }
        //    }

        return [score, rooms, valid];

    }

}