import React, { useState } from 'react'
import './canvas.css'
import { Button, FormHelperText, Paper } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { HouseTree } from '../HouseAlgorithm'
import 'ruler.js/dist/ruler.min.css'
import 'ruler.js/dist/ruler.min.js'
import { Stage, Sprite, Graphics, Text, Container } from '@inlet/react-pixi';
import { TextStyle } from '@pixi/text'


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '6ch',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(2),
    },
    margin: {
        margin: theme.spacing(1),
    },
    buttlarge: {
        marginTop: 480,
        marginLeft: 265,
        minHeight: 60,
        minWidth: 190,

    },
    buttlargecanvas: {
        marginTop: 480,
        marginLeft: 265,
        minHeight: 60,
        minWidth: 190,

    },
    buttsmall: {
        marginTop: 10,
        maxHeight: 40,

    }
}));


// var Input={
//     Rooms:[["Ki",2.5,1.7],["Be",3.8,3.09],["Ba",2.85,1.75],["Li",4.00,3.00],["Be",3.8,3.09]],
// }

function getBestPlan(Input, iter, x1, y1, x2, y2, offset, vastu, road) {
    let result = [];
    // console.log(Input);
    for (let i = 0; i < iter; i++) {

        let MyHouse = new HouseTree(Input.Rooms.length, Input.Rooms);

        MyHouse.GenerateRandomTree();
        MyHouse.GenerateRandomRoomConfig();
        MyHouse.PlaceRoomsInTree();
        MyHouse.CalculateProportions();

        let valid = MyHouse.CalculateScore(x1, y1, x2, y2, offset, vastu, road)[2];
        let score = Math.floor(MyHouse.CalculateScore(x1, y1, x2, y2, offset, vastu, road)[0]);
        let rooms = MyHouse.CalculateScore(x1, y1, x2, y2, offset, vastu, road)[1];

        let arr = [score, rooms];

        if (valid) result.push(arr);
    }

    if (result.length === 0) return -1;

    let res = result[0];

    for (let j = 1; j < result.length; j++) {
        // console.log(res[0]);
        if (result[j][0] > res[0]) {
            res = result[j];
        }
    }
    // result.sort();
    // console.log(result);
    // console.log(res)
    return res

}

function Insect(x1, x2, x3, x4) {
    if (Math.max(x1, x3) <= Math.min(x2, x4)) return true;

    return false;
}

function Intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
    if (Insect(x1, x2, x3, x4) && Insect(y1, y2, y3, y4)) return true;

    return false;
}


const Canvas = React.memo((props) => {

    const [cnt, setCnt] = useState(0);
    const [rooms, setRooms] = useState([]);
    const [score, setScore] = useState(0);
    // const [valid, setValid] = useState(1);


    const { plotDim, Input, newHousePlan, scale, vastu, road } = props;

    const classes = useStyles();



    // console.log(Input);

    var roomsArray = { Rooms: [] };

    for (let i = 0; i < Input.length; i++) {

        let arr = [];
        arr.push("name");
        arr.push(Input[i].len + Input[i].inlen * 0.0833333);
        arr.push(Input[i].wid + Input[i].inwid * 0.0833333);

        if (Input[i].name === "Bedroom (Be)") arr[0] = "Be";
        else if (Input[i].name === "Bathroom (Ba)") arr[0] = "Ba";
        else if (Input[i].name === "Living (Li)") arr[0] = "Li";
        else if (Input[i].name === "Kitchen (Ki)") arr[0] = "Ki";
        else if (Input[i].name === "Closet (Cl)") arr[0] = "Cl";
        else if (Input[i].name === "Hall (Ha)") arr[0] = "Ha";
        else if (Input[i].name === "Stair External (SE)") arr[0] = "SE";
        else if (Input[i].name === "Stair Internal (SI)") arr[0] = "SI";
        else if (Input[i].name === "2 car parking (P2)") arr[0] = "P2";
        else if (Input[i].name === "1 car parking (P1)") arr[0] = "P1";
        else if (Input[i].name === "Lift (Lf)") arr[0] = "Lf";
        else if (Input[i].name === "Puja room (Pj)") arr[0] = "Pj";
        else if (Input[i].name === "Study room (St)") arr[0] = "St";
        else if (Input[i].name === "Home Theatre (HT)") arr[0] = "HT";
        else if (Input[i].name === "Open Terrace (OT)") arr[0] = "OT";
        else if (Input[i].name === "Entrance Hall (EH)") arr[0] = "EH";

        if (Input[i].check === true) roomsArray.Rooms.push(arr);
    }

    var offset = 91.44;

    // var dir=["N","E","S","W"];

    // var rndInd=Math.floor(Math.random()*dir.length);

    // var directionOffset=dir[rndInd];

    var x1 = 60, y1 = 35, x2 = (x1 + plotDim.plotLen - 2 * offset), y2 = (y1 + plotDim.plotWid - 2 * offset);


    var Plan, valid = 1;

    if (roomsArray.Rooms.length > 1 && cnt !== newHousePlan) {


        // roomsArray.Rooms.push(["En",9.84,5.74])

        if (!vastu)
            Plan = getBestPlan(roomsArray, 10000, x1, y1, x2, y2, offset, vastu, road);
        else
            Plan = getBestPlan(roomsArray, 30000, x1, y1, x2, y2, offset, vastu, road);

        if (Plan === -1 && cnt !== newHousePlan) {
            valid = 0;
        }
        else {

            valid = 1;
            let scorecopy = Plan[0];
            let roomscopy = Plan[1];

            if (cnt !== newHousePlan) {
                setRooms(roomscopy);
                setScore(scorecopy);
                setCnt(newHousePlan);
            }
        }

    }


    var shiftx = (scale < 1) ? (20 * (1 - scale)) : (80 * (scale - 1));
    var shifty = (scale < 1) ? 0 : (90 * (scale - 1));

    var roadShiftx = 0, roadShifty = 0, xroad, yroad, roadlen, roadwid;

    if (road === 'N') {
        roadShifty += 60;
        xroad = x1 - offset; yroad = y1 - offset - 200; roadlen = x2 - x1 + 2 * offset; roadwid = 182.88;
    }
    else if (road === 'W') {
        roadShiftx += 60;
        xroad = x1 - offset - 200; yroad = y1 - offset; roadlen = 182.88; roadwid = y2 - y1 + 2 * offset;
    }
    else if (road === 'E') {
        xroad = x2 + offset + 16.16; yroad = y1 - offset; roadlen = 182.88; roadwid = y2 - y1 + 2 * offset;
    }
    else if (road === 'S') {
        xroad = x1 - offset; yroad = y2 + offset + 16.16; roadlen = x2 - x1 + 2 * offset; roadwid = 182.88;
    }

    var roadArray = [road];
    // console.log(rooms);
    if (valid === 0) {
        return (
            <div className="container offset-sm-1">
                <h4>Sorry, no valid plan generated, please try again</h4>
            </div>
        )
    }
    else if (roomsArray.Rooms.length > 1) {
        return (
            <div>

                {/* <Ruler type="vertical" /> */}

                {/* <div>
                    <Ruler type="horizontal" width={1000} height={25}/>
                </div> */}

                {/* <Ruler type="horizontal" width={0} height={0} zoom={1}/> */}

                <Stage options={{ backgroundAlpha: 0, preserveDrawingBuffer: true }} height={469} width={694} id="c">
                    <Graphics draw={(g) => {
                        g.clear()
                        g.beginFill(0xffffff, 1);
                        g.drawRect(0, 0, 1008, 717);
                        g.endFill();
                    }} />

                    {/* <Graphics draw={(g)=>{
                        g.clear()
                        g.beginFill(0x000000, 1);
                        g.drawRect(xroad, yroad, xroad+roadlen, yroad+roadwid);
                        g.endFill();
                    }}/> */}

                    <Sprite scale={{ x: 0.25, y: 0.25 }} image="https://media.istockphoto.com/vectors/compass-vector-id503891738?k=6&m=503891738&s=612x612&w=0&h=5oVWFpcfiYnhhpRx4bXapyQlGT4n8rkdzazXGA8uqHI=" x={562} y={339} />

                    <Container x={45 + shiftx + roadShiftx} y={30 + shifty + roadShifty} scale={{ x: 0.34 * scale, y: 0.335 * scale }}>

                        {/* <Graphics draw={(g)=>{
                        g.clear()
                        g.beginFill(0xffffff, 1);
                        g.drawRect(0, 0, 1008, 717);
                        g.endFill();
                    }}/> */}

                        {/* <Sprite  scale={{ x:0.7, y:0.7 }} image="https://media.istockphoto.com/vectors/compass-vector-id503891738?k=6&m=503891738&s=612x612&w=0&h=5oVWFpcfiYnhhpRx4bXapyQlGT4n8rkdzazXGA8uqHI=" x={1390} y={855} /> */}


                        <Graphics draw={(g) => {
                            g.clear()
                            g.lineStyle(4, 0x000000, 1);
                            g.moveTo(x1 - offset, y2 + offset);
                            g.lineTo(x2 + offset, y2 + offset);
                            g.lineTo(x2 + offset, y1 - offset);
                            g.lineTo(x1 - offset, y1 - offset);
                            g.lineTo(x1 - offset, y2 + offset);
                        }} />


                        <Graphics draw={(g) => {
                            g.clear()
                            g.beginFill(0xbcc2c0, 1);
                            g.drawRect(xroad, yroad, roadlen, roadwid);
                            g.endFill();
                        }} />

                        {
                            roadArray.map((val, index) => {

                                let sz = 18 / (0.35 * scale);
                                if (val === 'N') {

                                    return (
                                        <Text key={index} text="Road"
                                            x={xroad + roadlen / 2 - sz}
                                            y={yroad + roadwid / 2 - sz}
                                            style={new TextStyle({
                                                fontFamily: 'Arial', fontSize: 18 / (0.35 * scale), fill: 0x000000,
                                            })}
                                        />

                                    )

                                }
                                else {

                                    return (
                                        <Text key={index} text="Road"
                                            x={xroad + roadlen / 2 - sz}
                                            y={yroad + roadwid / 2 - sz}
                                            style={new TextStyle({
                                                fontFamily: 'Arial', fontSize: 18 / (0.35 * scale), fill: 0x000000,
                                            })}
                                        />

                                    )

                                }
                            })
                        }




                        {rooms.map((e, index) => {
                            let len = e[3] - e[1], wid = e[4] - e[2];
                            let cx = e[1] + (e[3] - e[1]) / 2;
                            let cy = e[2] + (e[4] - e[2]) / 2;
                            let radii = len / 22 + wid / 22;


                            let c
                            if (e[0] === "Be") c = 0xFEE0FF
                            if (e[0] === "Ki" || e[0] === "Di") c = 0xE1FFC1
                            if (e[0] === "Cl" || e[0] === "P1" || e[0] === "P2" || e[0] === "Lf") c = 0xC1C0E0
                            if (e[0] === "Ba") c = 0xC1FEFF
                            if (e[0] === "Be") c = 0xFEE080
                            if (e[0] === "Li" || e[0] === "Ha") c = 0xF74646
                            if (e[0] === "SE" || e[0] === "SI") c = 0x793F0D
                            if (e[0] === "Pj") c = 0x800080
                            if (e[0] === "St") c = 0x808000
                            if (e[0] === "HT") c = 0x008080
                            if (e[0] === "OT" || e[0] === "EH") c = 0xFEE0E2

                            return (
                                <Graphics key={index} draw={(g) => {
                                    g.clear()
                                    g.beginFill(c, 1);
                                    g.drawRect(e[1], e[2], len, wid);
                                    g.endFill();

                                    g.lineStyle(4, 0x000000, 9);
                                    g.drawRect(e[1], e[2], len, wid);

                                    g.lineStyle(4, 0x000000, 1);
                                    g.drawCircle(cx, cy, 40 / (1.1 * scale));
                                    // <Text text={e[0]}
                                    //     x={cx-8}
                                    //     y={cy-8}
                                    //     style={new TextStyle({
                                    //         fontFamily : 'Arial', fontSize: 15, strokeThickness: 5,fill : 0xffffff,
                                    //     })}
                                    // />
                                }} />

                            )
                        })}

                        {rooms.map((e, index) => {
                            let len = e[3] - e[1], wid = e[4] - e[2];
                            let cx = e[1] + (e[3] - e[1]) / 2;
                            let cy = e[2] + (e[4] - e[2]) / 2;
                            let radii = len / 300 + wid / 300;

                            return (
                                <Text key={index} text={e[0]}
                                    x={cx - 11 / (0.4 * scale)}
                                    y={cy - 9 / (0.4 * scale)}
                                    style={new TextStyle({
                                        fontFamily: 'Arial', fontSize: 18 / (0.4 * scale), fill: 0x000000,
                                    })}
                                />

                            )
                        })}

                        {rooms.map((e, index) => {
                            let len = e[3] - e[1], wid = e[4] - e[2];
                            let cx = e[1] + (e[3] - e[1]) / 2;
                            let cy = e[2] + (e[4] - e[2]) / 2;

                            if (e[0] === "Be") {
                                return (
                                    <Sprite key={index} scale={{ x: len * 0.0005, y: wid * 0.0005 }} image="https://i.postimg.cc/vm52ZvpK/bed-trans-3.png" x={e[1]} y={e[2] + wid / 3.2} />
                                )
                            }

                            if (e[0] === "Li") {
                                return (
                                    <Sprite key={index} scale={{ x: len * 0.0003, y: wid * 0.0003 }} image="https://i.postimg.cc/yxYGfx6P/sofa-dining.png" x={e[1] + len / 2.7} y={e[2]} />

                                )
                            }


                            if (e[0] === "Ki") {
                                return (
                                    <Sprite key={index} scale={{ x: len * 0.0007, y: wid * 0.0007 }} image="https://i.postimg.cc/Pr3118W5/kitchen.png" x={e[1]} y={e[4] - wid / 1.8} />
                                )
                            }


                            if (e[0] === "Ba") {
                                return (
                                    <Sprite key={index} scale={{ x: len * 0.0004, y: wid * 0.0004 }} image="https://i.postimg.cc/TYCBmQN5/toilet.png" x={e[1] + len / 2.7} y={e[2]} />
                                )
                            }

                        })}

                        {rooms.map((e, index) => {
                            let len = e[3] - e[1], wid = e[4] - e[2];
                            let cx = e[1] + (e[3] - e[1]) / 2;
                            let cy = e[2] + (e[4] - e[2]) / 2;

                            if (e[0] === "Li") {
                                return (
                                    <Sprite key={index} scale={{ x: len * 0.0002, y: wid * 0.0002 }} image="https://i.postimg.cc/MT9rRpd2/sofa-tran-thick.png" x={e[1] + len / 2.65} y={e[4] - wid / 6} />

                                )
                            }

                        })}

                        {rooms.map((e, index) => {
                            let len = e[3] - e[1], wid = e[4] - e[2];
                            let cx = e[1] + (e[3] - e[1]) / 2;
                            let cy = e[2] + (e[4] - e[2]) / 2;

                            if (e[0] === "EH") {

                                if (road === 'W') {
                                    return (
                                        <Sprite key={index} rotation={Math.PI / 2} scale={{ x: len * 0.0005, y: wid * 0.0005 }} image="https://i.postimg.cc/MTWf8WcN/entrance-door-png-2.png" x={e[1] + wid / 9} y={e[2] + wid / 2.7} />

                                    )
                                }
                                else if (road === 'S') {
                                    return (
                                        <Sprite key={index} scale={{ x: len * 0.0005, y: wid * 0.0005 }} image="https://i.postimg.cc/MTWf8WcN/entrance-door-png-2.png" x={e[1] + len / 2.65} y={e[4] - wid / 9} />

                                    )
                                }
                                else if (road === 'N') {
                                    return (
                                        <Sprite key={index} rotation={Math.PI} scale={{ x: len * 0.0005, y: wid * 0.0005 }} image="https://i.postimg.cc/MTWf8WcN/entrance-door-png-2.png" x={e[1] + len / 1.6} y={e[2] + wid / 9} />

                                    )
                                }
                                else {
                                    return (
                                        <Sprite key={index} rotation={3 * Math.PI / 2} scale={{ x: len * 0.0005, y: wid * 0.0005 }} image="https://i.postimg.cc/MTWf8WcN/entrance-door-png-2.png" x={e[3] - wid / 10} y={e[2] + wid / 2} />

                                    )
                                }

                                // else if(Intersect(e[1],e[2],e[3],e[4],x1,y2,x2,y2)

                            }

                        })}
                        {/* <Sprite image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png" x={50} y={50} /> */}
                        {/* <Drawplan root={Plan[1]} x1={0} y1={y1} x2={x2} y2={y2}/> */}
                        {/* <Graphics draw={(g)=>{
                        g.beginFill(0xC1C0E0, 1);
                        g.drawRect(x1, y1, 100, 100);
                        g.endFill();
    
                        g.lineStyle(1, 0x000000, 1);
                        g.drawRect(x1,y1,200,200);
    
                        g.lineStyle(1, 0x000000, 1);
                        g.drawCircle(x1+100, y1+100, 16);
                    }}/> */}

                    </Container>
                </Stage>



                {/* <div>
                <Button className={classes.buttlargecanvas}  onClick={(e)=>{  
                        e.preventDefault();
                }} variant="contained" color="primary" size="small" type="submit">Generate More Plan</Button>
                </div> */}

                <div>
                    <p>{score}</p>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                {/* <Button className={classes.buttlarge}  onClick={(e)=>{  
                        e.preventDefault();
                }} variant="contained" color="primary" size="small" type="submit">Generate More Plan</Button> */}
            </div>
        )
    }
})

export default Canvas