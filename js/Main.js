import React, { useState, useEffect } from 'react';
import './canvas.css';
import * as Icon from 'react-feather';
import { Button, FormHelperText, Paper } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles, rgbToHex, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';
import Canvas from './Canvas'
import { saveAs } from 'file-saver';
import Ruler from "@scena/react-ruler";
import { red } from '@material-ui/core/colors';


const initialStatePlot = { plotLen: 1219.2, plotWid: 914.4 };

const initialStateRoomName = { room: "" }


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
        margin: theme.spacing(-2),
    },
    buttlarge: {
        minHeight: 60,
        minWidth: 190,
    },
    buttsmall: {
        maxHeight: 45,
        marginRight: 100,
        marginTop: 7,

    },
    buttzoomin: {
        minHeight: 35,
        minWidth: 120,
        marginTop: 7,
        marginRight: 0,
    },
    buttzoomout: {
        minHeight: 35,
        minWidth: 120,
        marginTop: 7,
        marginLeft: 0,
    },

    numberInput: {
        minWidth: 70,
        maxHeight: 10,
    },

    tabGroup: {
        maxWidth: 540,
    },
    tab: {
        minWidth: 130, // a number of your choice
        width: 130, // a number of your choice
    },
    buttDownload: {
        maxHeight: 30,
        marginTop: 15,
    },
    buttClrScr: {
        maxHeight: 30,
        marginTop: 15,
    },
    cssLabel: {
        color: ''
    },
    notchedOutline: {
        borderWidth: '2px',
        borderColor: '!important'
    },
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: `#0099FF !important`,
        }
    },
    cssFocused: {
        borderWidth: '1px',
        borderColor: '#0099FF !important'
    },
    select: {
        '&:before': {
            borderColor: "#0099FF",
        },
        '&:after': {
            borderColor: "#0099FF",
        },
        icon: { color: "#0099FF" },
        label: { color: "#0099FF" },
    },
    icon: {
        fill: "#0099FF",
    },
    inputLabel: {
        color: "lightgray",
        "&$inputFocused": {
            color: "#0099FF"
        }
    },
    underline: {
        '&:before': {
            height: '2px',
            backgroundColor: '#0099FF'
        }
    },

    switchBase: {
        color: '#0099FF',
        "&$checked": {
            color: '#0099FF'
        },
        "&$checked + $track": {
            backgroundColor: '#0099FF'
        }
    },
    checked: {},
    track: {}

}));


var roomid = 4;

const Main = () => {
    alert(1);
    const [bhk, setBHK] = useState(0);
    const [plot, setPlot] = useState(initialStatePlot);
    const [scale, setScale] = useState(1);
    const [roomName, setRoomName] = useState(initialStateRoomName);

    const [roomInput, setRoomInput] = useState([{ check: true, id: 0, name: "Bedroom (Be)", len: 12, inlen: 4, wid: 10, inwid: 11 }, { check: true, id: 1, name: "Living (Li)", len: 15, inlen: 11, wid: 10, inwid: 11 }, { check: true, id: 2, name: "Kitchen (Ki)", len: 9, inlen: 7, wid: 6, inwid: 0 }, { check: true, id: 3, name: "Bathroom (Ba)", len: 3, inlen: 11, wid: 2, inwid: 11 }, { check: true, id: 4, name: "Entrance Hall (EH)", len: 9, inlen: 10, wid: 5, inwid: 8 },]);
    const [newPlan, setNewPlan] = useState(1);
    const [cntTrue, setcntTrue] = useState(5);

    const [vastu, setVastu] = useState(false);

    const [road, setRoad] = React.useState('N');
    const [ftORmm, setFtORmm] = React.useState(false);

    const handleChange = (e) => {
        console.log(e.target.value);
        // if(e.target.name==="plotLen"&&e.target.value>=20){
        //     let sc=1-(e.target.value-20)/10;
        //     setScale(sc);
        //     console.log(sc);
        // }

        // if(e.target.name==="plotLen"&&e.target.value<=600){
        //     let sc=1
        //     setScale(sc);
        //     console.log(sc);
        // }


        setPlot({ ...plot, [e.target.name]: 30.48 * parseInt(e.target.value, 10) });

        let x = newPlan + 1;
        setNewPlan(x);
    }

    const handleChange2 = (e) => {
        setRoomName({ ...roomName, [e.target.name]: e.target.value });

    }

    // const handleChange3 = (e) => {
    //     let roomInputCopy=roomInput;

    //     for(let i=0;i<roomInput)

    // }


    const classes = useStyles();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (roomName.room === "") alert('please select a room')
        else {

            let len, wid, inlen, inwid;
            if (roomName.room === "Bedroom (Be)") { len = 12; inlen = 4; wid = 10; inwid = 11 }
            else if (roomName.room === "Bathroom (Ba)") { len = 3; inlen = 11; wid = 2; inwid = 11 }
            else if (roomName.room === "Living (Li)") { len = 15; inlen = 11; wid = 10; inwid = 11 }
            else if (roomName.room === "Kitchen (Ki)") { len = 9; inlen = 7; wid = 6; inwid = 0 }
            else if (roomName.room === "Closet (Cl)") { len = 5; inlen = 11; wid = 2; inwid = 0 }
            else if (roomName.room === "Hall (Ha)") { len = 15; inlen = 11; wid = 10; inwid = 11 }
            else if (roomName.room === "Stair External (SE)") { len = 9; inlen = 10; wid = 6; inwid = 6 }
            else if (roomName.room === "Stair Internal (SI)") { len = 9; inlen = 10; wid = 6; inwid = 6 }
            else if (roomName.room === "2 car parking (P2)") { len = 22; inlen = 11; wid = 18; inwid = 0 }
            else if (roomName.room === "1 car parking (P1)") { len = 11; inlen = 5; wid = 9; inwid = 10 }
            else if (roomName.room === "Lift (Lf)") { len = 4; inlen = 11; wid = 4; inwid = 11 }
            else if (roomName.room === "Puja room (Pj)") { len = 9; inlen = 0; wid = 6; inwid = 0 }
            else if (roomName.room === "Study room (St)") { len = 10; inlen = 0; wid = 10; inwid = 0 }
            else if (roomName.room === "Home Theatre (HT)") { len = 17; inlen = 0; wid = 17; inwid = 0 }
            else if (roomName.room === "Open Terrace (OT)") { len = 9; inlen = 0; wid = 9; inwid = 0 }
            else if (roomName.room === "Entrance Hall (EH)") { len = 9; inlen = 10; wid = 5; inwid = 8 }
            roomid += 1;
            setRoomInput([...roomInput, { check: true, id: roomid, name: roomName.room, len: len, inlen: inlen, wid: wid, inwid: inwid }])
            let x = newPlan + 1;
            setNewPlan(x);
        }

    }

    const handleSubmit2 = (e) => {
        e.preventDefault();
        let x = newPlan + 1;

        setNewPlan(x);

    }

    const handleChange3 = (event) => {
        setRoad(event.target.value);
        let x = newPlan + 1;

        setNewPlan(x);
        // console.log(road);
    };

    const roomname = ["Bedroom (Be)", "Living (Li)", "Kitchen (Ki)", "Bathroom (Ba)", "Entrance Hall (EH)", "Closet (Cl)", "Stair External (SE)", "Stair Internal (SI)", "2 car parking (P2)", "1 car parking (P1)", "Lift (Lf)", "Puja room (Pj)", "Study room (St)", "Home Theatre (HT)", "Open Terrace (OT)"]


    return (

        <div className="bgcolor">


            <a id="link"></a>



            {/* <div className="container ">
                <h1 className="text-center mx-auto mt-3 mb-5">INDUS FLOOR PLAN GENERATOR</h1>
            </div> */}

            <div className="container row ">

                <div className="mx-auto col-md-6  bgindus">

                    <h1 className="text-right   mb-5">INDUS</h1>

                    <div class="container row mb-3" style={{ marginTop: "-40px" }}>
                        <Paper square style={{ backgroundColor: "#EBEBEB" }}>
                            <Tabs
                                value={bhk}
                                style={{ color: "#0099FF" }}
                                TabIndicatorProps={{ style: { backgroundColor: "#0099FF" } }}
                                indicatorColor="primary"
                                variant='scrollable'
                                textColor="primary"
                                className={classes.tabGroup}
                                onChange={(e, val) => {
                                    if (val === 0) {
                                        // document.getElementById("clearButton").click();
                                        setRoomInput([{ check: true, id: roomid + 1, name: "Bedroom (Be)", len: 12, inlen: 4, wid: 10, inwid: 11 }, { check: true, id: roomid + 2, name: "Living (Li)", len: 15, inlen: 11, wid: 10, inwid: 11 }, { check: true, id: roomid + 3, name: "Kitchen (Ki)", len: 9, inlen: 7, wid: 6, inwid: 0 }, { check: true, id: roomid + 4, name: "Bathroom (Ba)", len: 3, inlen: 11, wid: 2, inwid: 11 }, { check: true, id: roomid + 5, name: "Entrance Hall (EH)", len: 9, inlen: 10, wid: 5, inwid: 8 },])
                                        roomid += 5;
                                        setcntTrue(5);
                                        let x = newPlan + 1;
                                        setNewPlan(x);
                                    }
                                    else if (val === 1) {
                                        setRoomInput([{ check: true, id: roomid + 1, name: "Bedroom (Be)", len: 12, inlen: 4, wid: 10, inwid: 11 }, { check: true, id: roomid + 2, name: "Living (Li)", len: 15, inlen: 11, wid: 10, inwid: 11 }, { check: true, id: roomid + 3, name: "Kitchen (Ki)", len: 9, inlen: 7, wid: 6, inwid: 0 }, { check: true, id: roomid + 4, name: "Bathroom (Ba)", len: 3, inlen: 11, wid: 2, inwid: 11 }, { check: true, id: roomid + 5, name: "Entrance Hall (EH)", len: 9, inlen: 10, wid: 5, inwid: 8 }, { check: true, id: roomid + 6, name: "Bedroom (Be)", len: 12, inlen: 4, wid: 10, inwid: 11 }, { check: true, id: roomid + 7, name: "Bathroom (Ba)", len: 3, inlen: 11, wid: 2, inwid: 11 },])
                                        roomid += 7;
                                        setcntTrue(7);

                                        let x = newPlan + 1;
                                        setNewPlan(x);
                                    }
                                    else if (val === 2) {
                                        setRoomInput([{ check: true, id: roomid + 1, name: "Bedroom (Be)", len: 12, inlen: 4, wid: 10, inwid: 11 }, { check: true, id: roomid + 2, name: "Living (Li)", len: 15, inlen: 11, wid: 10, inwid: 11 }, { check: true, id: roomid + 3, name: "Kitchen (Ki)", len: 9, inlen: 7, wid: 6, inwid: 0 }, { check: true, id: roomid + 4, name: "Bathroom (Ba)", len: 3, inlen: 11, wid: 2, inwid: 11 }, { check: true, id: roomid + 5, name: "Entrance Hall (EH)", len: 9, inlen: 10, wid: 5, inwid: 8 }, { check: true, id: roomid + 6, name: "Bedroom (Be)", len: 12, inlen: 4, wid: 10, inwid: 11 }, { check: true, id: roomid + 7, name: "Bathroom (Ba)", len: 3, inlen: 11, wid: 2, inwid: 11 }, { check: true, id: roomid + 8, name: "Bedroom (Be)", len: 12, inlen: 4, wid: 10, inwid: 11 }, { check: true, id: roomid + 9, name: "Bathroom (Ba)", len: 3, inlen: 11, wid: 2, inwid: 11 }])
                                        roomid += 9;
                                        setcntTrue(9);

                                        let x = newPlan + 1;
                                        setNewPlan(x);
                                    }
                                    else if (val === 3) {
                                        setRoomInput([{ check: true, id: roomid + 1, name: "Bedroom (Be)", len: 12, inlen: 4, wid: 10, inwid: 11 }, { check: true, id: roomid + 2, name: "Living (Li)", len: 15, inlen: 11, wid: 10, inwid: 11 }, { check: true, id: roomid + 3, name: "Kitchen (Ki)", len: 9, inlen: 7, wid: 6, inwid: 0 }, { check: true, id: roomid + 4, name: "Bathroom (Ba)", len: 3, inlen: 11, wid: 2, inwid: 11 }, { check: true, id: roomid + 5, name: "Entrance Hall (EH)", len: 9, inlen: 10, wid: 5, inwid: 8 }, { check: true, id: roomid + 6, name: "Bedroom (Be)", len: 12, inlen: 4, wid: 10, inwid: 11 }, { check: true, id: roomid + 7, name: "Bathroom (Ba)", len: 3, inlen: 11, wid: 2, inwid: 11 }, { check: true, id: roomid + 8, name: "Bedroom (Be)", len: 12, inlen: 4, wid: 10, inwid: 11 }, { check: true, id: roomid + 9, name: "Bathroom (Ba)", len: 3, inlen: 11, wid: 2, inwid: 11 }, { check: true, id: roomid + 10, name: "Bedroom (Be)", len: 12, inlen: 4, wid: 10, inwid: 11 }, { check: true, id: roomid + 11, name: "Bathroom (Ba)", len: 3, inlen: 11, wid: 2, inwid: 11 }])
                                        roomid += 11;
                                        setcntTrue(11);

                                        let x = newPlan + 1;
                                        setNewPlan(x);
                                    }
                                    setBHK(val);
                                }}
                                aria-label="disabled tabs example"

                            >
                                <Tab classes={{ root: classes.tab }} style={{ color: "#0099FF", fontSize: "15px", fontFamily: "Montserrat", fontWeight: "700", }} label="1BHK" />
                                <Tab classes={{ root: classes.tab }} style={{ color: "#0099FF", fontSize: "15px", fontFamily: "Montserrat", fontWeight: "700", }} label="2BHK" />
                                <Tab classes={{ root: classes.tab }} style={{ color: "#0099FF", fontSize: "15px", fontFamily: "Montserrat", fontWeight: "700", }} label="3BHK" />
                                <Tab classes={{ root: classes.tab }} style={{ color: "#0099FF", fontSize: "15px", fontFamily: "Montserrat", fontWeight: "700", }} label="4BHK" />
                            </Tabs>
                        </Paper>
                    </div>

                    <div className="container row mt-1 " style={{ marginLeft: "10px" }}>
                        <span className="mr-5 mt-3" style={{ fontSize: "15px", fontFamily: "Montserrat", fontWeight: "700", }}>Road</span>
                        <FormControl className={classes.formControl} size="small">
                            {/* <InputLabel id="demo-simple-select-outlined-label"></InputLabel> */}
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={road}
                                onChange={handleChange3}
                                label="Road"
                                inputProps={{
                                    classes: {
                                        icon: classes.icon,

                                    },
                                }}
                            >
                                <MenuItem value={'N'}>North</MenuItem>
                                <MenuItem value={'E'}>East</MenuItem>
                                <MenuItem value={'S'}>South</MenuItem>
                                <MenuItem value={'W'}>West</MenuItem>

                            </Select>
                        </FormControl>


                        <span className="ml-5 mt-2 mr-2" style={{ fontSize: "15px", fontFamily: "Montserrat", fontWeight: "700", }}>ft</span>
                        <FormControlLabel
                            style={{ color: "#0099FF" }}
                            control={
                                <Switch
                                    checked={ftORmm}
                                    style={{ color: "#0099FF" }}
                                    focusVisibleClassName={classes.focusVisible}
                                    disableRipple
                                    classes={{
                                        root: classes.root,
                                        switchBase: classes.switchBase,
                                        thumb: classes.thumb,
                                        track: classes.track,
                                        checked: classes.checked
                                    }}
                                    onChange={(e) => {
                                        setFtORmm(!ftORmm);
                                    }}
                                    name="checkedB"

                                />
                            }
                            label=""
                        />
                        <span className="mt-2" style={{ marginLeft: "-20px", fontSize: "15px", fontFamily: "Montserrat", fontWeight: "700", }}>mm</span>

                    </div>

                    <form className={classes.root} noValidate autoComplete="off">
                        <div className="row mt-2">

                            <div className="col-md-5 justify-content-center align-middle mt-4">
                                <h6 className="text-center" style={{ fontSize: "15px", fontFamily: "Montserrat", fontWeight: "700", }}>Plot Dimensions(ft)</h6>
                            </div>

                            <div className="col-md-4">

                                <TextField
                                    className={classes.numberInput}
                                    // style={{backgroundColor:"#EBEBEB",borderRadius:"0px"}}
                                    id="filled-number"
                                    label="length(ft)"
                                    type="number"
                                    name="plotLen"
                                    defaultValue="40"
                                    InputProps={{ inputProps: { min: 0 } }}
                                    onChange={handleChange}
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.cssLabel,
                                            focused: classes.cssFocused,
                                        },
                                    }}
                                    InputProps={{
                                        classes: {
                                            root: classes.cssOutlinedInput,
                                            focused: classes.cssFocused,
                                            notchedOutline: classes.notchedOutline,
                                        },
                                        inputMode: "numeric"
                                    }}
                                    variant="outlined"
                                    size="small"
                                />


                            </div>

                            <div className="col-md-3">
                                <TextField
                                    className={classes.numberInput}
                                    // style={{backgroundColor:"#EBEBEB",borderRadius:"5px"}}
                                    id="standard-number"
                                    label="width(ft)"
                                    type="number"
                                    name="plotWid"
                                    defaultValue="30"
                                    InputProps={{ inputProps: { min: 0 } }}
                                    onChange={handleChange}
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.cssLabel,
                                            focused: classes.cssFocused,
                                        },
                                    }}
                                    InputProps={{
                                        classes: {
                                            root: classes.cssOutlinedInput,
                                            focused: classes.cssFocused,
                                            notchedOutline: classes.notchedOutline,
                                        },
                                        inputMode: "numeric"
                                    }}
                                    variant="outlined"
                                    size="small"
                                />
                            </div>

                        </div>

                    </form>

                    {/* <div className="container mt-4">
                        <FormControl component="fieldset">
                        <RadioGroup row aria-label="road" name="road" defaultValue="top"value={road} onChange={handleChange3}>
                        <span className="mr-5 mt-2" style={{marginLeft:"10px" ,fontSize:"15px",fontFamily:"Montserrat", fontWeight:"700",}}>Road</span>
                            <FormControlLabel value="N" control={<Radio color="primary"style ={{color: "#0099FF",}} />} label={<span style={{fontSize:"15px",fontFamily:"Montserrat", fontWeight:"400",}}>North</span>} />
                            <FormControlLabel value="E" control={<Radio color="primary" style ={{color: "#0099FF",}}/>} label={<span style={{fontSize:"15px",fontFamily:"Montserrat", fontWeight:"400",}}>East</span>} />
                            <FormControlLabel value="S" control={<Radio color="primary" style ={{color: "#0099FF",}}/>} label={<span style={{fontSize:"15px",fontFamily:"Montserrat", fontWeight:"400",}}>South</span>} />
                            <FormControlLabel value="W" control={<Radio color="primary" style ={{color: "#0099FF",}}/>} label={<span style={{fontSize:"15px",fontFamily:"Montserrat", fontWeight:"400",}}>West</span>} />
                        </RadioGroup>
                        </FormControl>
                    </div> */}



                    <form className="container" onSubmit={handleSubmit}>


                        <div className="container row mt-4">
                            <span style={{ fontSize: "15px", fontFamily: "Montserrat", fontWeight: "700", marginLeft: "10px" }}> Room Details</span>
                        </div>

                        <div className="row">

                            <div className=" col-md-3">
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-mutiple-name-label" style={{ fontSize: "15px", fontFamily: "Montserrat", fontWeight: "400", }}>Select Room</InputLabel>
                                    <Select
                                        labelId="demo-mutiple-name-label"
                                        id="demo-mutiple-name"
                                        name="room"
                                        onChange={handleChange2}
                                        inputProps={{
                                            classes: {
                                                icon: classes.icon,

                                            },
                                        }}
                                        input={<Input />}
                                    >
                                        {roomname.map((room, index) => (
                                            <MenuItem key={index} value={room} >
                                                <span style={{ fontSize: "15px", fontFamily: "Montserrat", fontWeight: "400", }}>{room}</span>
                                            </MenuItem>
                                        ))}

                                    </Select>
                                </FormControl>
                            </div>

                            <div className="col-md-3 ml-5" style={{ marginTop: "27px" }}>
                                <Button variant="contained" color="primary" size="small" type="submit" style={{ backgroundColor: "#0099FF", fontSize: "12px", fontFamily: "Montserrat", fontWeight: "700", }}>Add </Button>
                            </div>

                            <div className="col-md-1 mt-3">
                                <Checkbox
                                    // checked={}
                                    onChange={(e) => {
                                        setVastu(!vastu);
                                        let x = newPlan + 1;
                                        setNewPlan(x);
                                    }}
                                    color="primary"
                                    style={{
                                        color: "#0099FF",
                                    }}
                                    size="small"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />

                            </div>
                            <div className="col-md-2 " style={{ marginTop: "26px" }}>
                                <h6 style={{ fontSize: "15px", fontFamily: "Montserrat", fontWeight: "700", }}>Vastu</h6>
                            </div>

                        </div>
                    </form>


                    <form onSubmit={handleSubmit2} className={classes.root} noValidate autoComplete="off">
                        {(cntTrue < 2) ? <p className="container" style={{ color: "red", size: "5px", marginLeft: "0px", marginTop: "10px", fontSize: "15px", fontFamily: "Montserrat", fontWeight: "500", }} >*Select at least 2 rooms</p> : <p></p>}

                        <div className="container row">

                            <div className="col-md-2">

                            </div>
                            <div className="col-md-4 ml-md-5">
                                <h6 style={{ textAlign: 'left' }} style={{ fontSize: "13px", fontFamily: "Montserrat", fontWeight: "400", }}>Length</h6>
                            </div>
                            <div className="col-md-4 ml-4">
                                <h6 style={{ fontSize: "13px", fontFamily: "Montserrat", fontWeight: "400", }}>Width</h6>
                            </div>


                        </div>
                        {

                            roomInput.map((room) => {

                                return (

                                    <div key={room.id} className="row">

                                        <div className="col-md-1">
                                            <Checkbox
                                                // checked={room.checked}
                                                defaultChecked
                                                id={`${room.id}`}
                                                style={{
                                                    color: "#0099FF",
                                                }}
                                                onChange={(e) => {
                                                    // e.preventDefault();
                                                    let roomInputCopy = roomInput;

                                                    for (let i = 0; i < roomInputCopy.length; i++) {
                                                        if (roomInputCopy[i].id === room.id) {
                                                            roomInputCopy[i].check = !roomInputCopy[i].check;
                                                            break;
                                                        }
                                                    }
                                                    // console.log(roomInputCopy);
                                                    setRoomInput(roomInputCopy);
                                                    let x = newPlan + 1;
                                                    setNewPlan(x);
                                                    let cnt = 0;

                                                    for (let i = 0; i < roomInput.length; i++) {
                                                        if (roomInput[i].check === true) cnt++;
                                                    }

                                                    setcntTrue(cnt);

                                                }}
                                                color="primary"
                                                size="small"
                                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                            />
                                        </div>

                                        <div className="col-md-2 justify-content-left mt-2">
                                            <h6 className="" style={{ fontSize: "15px", fontFamily: "Montserrat", fontWeight: "500", }}>{room.name}</h6>
                                        </div>

                                        <div className="col-md-4">

                                            <TextField
                                                id="standard-number"
                                                style={{ backgroundColor: "#EBEBEB", borderRadius: "5px", Color: "#0099FF", }}
                                                label="ft"
                                                type="number"
                                                name={`${room.id}len`}
                                                defaultValue={room.len}
                                                InputProps={{ inputProps: { min: 1 } }}
                                                onChange={(e) => {
                                                    let roomInputCopy = roomInput;

                                                    for (let i = 0; i < roomInputCopy.length; i++) {
                                                        if (roomInputCopy[i].id === room.id) {
                                                            roomInputCopy[i].len = parseInt(e.target.value);
                                                            break;
                                                        }
                                                    }

                                                    setRoomInput(roomInputCopy);
                                                    // console.log(roomInput);
                                                }}
                                                InputLabelProps={{
                                                    classes: {
                                                        root: classes.cssLabel,
                                                        focused: classes.cssFocused,
                                                    },
                                                }}
                                                InputProps={{
                                                    classes: {
                                                        root: classes.cssOutlinedInput,
                                                        focused: classes.cssFocused,
                                                        notchedOutline: classes.notchedOutline,
                                                    },
                                                    inputMode: "numeric"
                                                }}
                                                size="small"
                                                variant="outlined"

                                            />
                                            <TextField
                                                id="outlined-number"
                                                style={{ backgroundColor: "#EBEBEB", borderRadius: "5px" }}
                                                label="in"
                                                type="number"
                                                name={`${room.id}inlen`}
                                                defaultValue={room.inlen}
                                                onChange={(e) => {
                                                    let roomInputCopy = roomInput;

                                                    for (let i = 0; i < roomInputCopy.length; i++) {
                                                        if (roomInputCopy[i].id === room.id) {
                                                            roomInputCopy[i].inlen = parseInt(e.target.value);
                                                            break;
                                                        }
                                                    }

                                                    setRoomInput(roomInputCopy);
                                                    // console.log(roomInput);
                                                }}
                                                InputLabelProps={{
                                                    classes: {
                                                        root: classes.cssLabel,
                                                        focused: classes.cssFocused,
                                                    },
                                                }}
                                                InputProps={{
                                                    classes: {
                                                        root: classes.cssOutlinedInput,
                                                        focused: classes.cssFocused,
                                                        notchedOutline: classes.notchedOutline,
                                                    },
                                                    inputMode: "numeric"
                                                }}
                                                size="small"
                                                variant="outlined"
                                            />

                                        </div>

                                        <div className="col-md-4">
                                            <TextField
                                                id="standard-number"
                                                style={{ backgroundColor: "#EBEBEB", borderRadius: "5px" }}
                                                label="ft"
                                                type="number"
                                                name={`${room.id}wid`}
                                                defaultValue={room.wid}
                                                InputProps={{ inputProps: { min: 1 } }}
                                                onChange={(e) => {
                                                    let roomInputCopy = roomInput;

                                                    for (let i = 0; i < roomInputCopy.length; i++) {
                                                        if (roomInputCopy[i].id === room.id) {
                                                            roomInputCopy[i].wid = parseInt(e.target.value);
                                                            break;
                                                        }
                                                    }

                                                    setRoomInput(roomInputCopy);
                                                    // console.log(roomInput);
                                                }}
                                                InputLabelProps={{
                                                    classes: {
                                                        root: classes.cssLabel,
                                                        focused: classes.cssFocused,
                                                    },
                                                }}
                                                InputProps={{
                                                    classes: {
                                                        root: classes.cssOutlinedInput,
                                                        focused: classes.cssFocused,
                                                        notchedOutline: classes.notchedOutline,
                                                    },
                                                    inputMode: "numeric"
                                                }}
                                                size="small"
                                                variant="outlined"
                                            />
                                            <TextField
                                                id="outlined-number"
                                                style={{ backgroundColor: "#EBEBEB", borderRadius: "5px" }}
                                                label="in"
                                                type="number"
                                                name={`${room.id}inwid`}
                                                defaultValue={room.inwid}
                                                onChange={(e) => {
                                                    let roomInputCopy = roomInput;

                                                    for (let i = 0; i < roomInputCopy.length; i++) {
                                                        if (roomInputCopy[i].id === room.id) {
                                                            roomInputCopy[i].inwid = parseInt(e.target.value);
                                                            break;
                                                        }
                                                    }

                                                    setRoomInput(roomInputCopy);
                                                    // console.log(roomInput);
                                                }}
                                                InputLabelProps={{
                                                    classes: {
                                                        root: classes.cssLabel,
                                                        focused: classes.cssFocused,
                                                    },
                                                }}
                                                InputProps={{
                                                    classes: {
                                                        root: classes.cssOutlinedInput,
                                                        focused: classes.cssFocused,
                                                        notchedOutline: classes.notchedOutline,
                                                    },
                                                    inputMode: "numeric"
                                                }}
                                                size="small"
                                                variant="outlined"
                                            />
                                        </div>

                                        <div className="col-md-1 mt-1">
                                            {/* <Button  onClick={(e)=>{
                                            e.preventDefault();
                                            let roomInputCopy=[];

                                                    for(let i=0;i<roomInput.length;i++){
                                                        if(roomInput[i].id===room.id){
                                                            continue;
                                                        }
                                                        else{
                                                            roomInputCopy.push(roomInput[i]);
                                                        }
                                                    }

                                            setRoomInput(roomInputCopy);

                                        }} variant="contained" color="primary" size="small" type="submit">D</Button> */}

                                            <IconButton
                                                onClick={(e) => {
                                                    e.preventDefault();

                                                    let roomInputCopy = [];

                                                    for (let i = 0; i < roomInput.length; i++) {
                                                        if (roomInput[i].id === room.id) {
                                                            continue;
                                                        }
                                                        else {
                                                            roomInputCopy.push(roomInput[i]);
                                                        }
                                                    }

                                                    setRoomInput(roomInputCopy);

                                                }}
                                                aria-label="delete" className={classes.margin}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </div>

                                    </div>


                                )


                            })
                        }


                        <div className="mt-3 mb-3 offset-md-1">

                            {(roomInput.length > 1) ? (<Button variant="contained" color="primary" size="small" type="submit" style={{ backgroundColor: "#0099FF", fontSize: "12px", fontFamily: "Montserrat", fontWeight: "700", }}>Update Dimensions</Button>) : (<div></div>)}

                        </div>

                    </form>


                </div>






                <div className="col col-md-6 ">
                    <h1 className="text-left   mb-5 textwh">FLOOR PLAN GENERATOR</h1>
                    <div id="r" style={{ marginTop: "-40px" }}>

                        <div className="" style={{ height: "25px", width: "670px", marginLeft: "25px" }}>
                            <Ruler type="horizontal" width={670 / scale} height={25} unit={10} zoom={10.3} />
                        </div>

                        <div style={{ height: "472px", width: "25px", position: "absolute" }}>
                            <Ruler type="vertical" width={25} height={472 / scale} unit={10} zoom={10.3} />
                        </div>
                        {(roomInput.length > 1) ? <Canvas road={road} vastu={vastu} scale={scale} plotDim={plot} Input={roomInput} newHousePlan={newPlan} /> : <div></div>}

                    </div>

                    <div className="row mt-2 mb-3 d-flex justify-content-center " style={{ marginLeft: "140px" }}>

                        <ButtonGroup style={{ marginTop: "-10px" }} color="primary" aria-label="outlined primary button group">
                            <Button className={classes.buttzoomin} style={{ backgroundColor: "#6666ff" }} onClick={(e) => {
                                e.preventDefault();
                                let sc = scale + 0.1;
                                setScale(sc);
                            }} variant="contained" color="primary" size="small" type="submit"><Icon.ZoomIn /></Button>

                            <Button className={classes.buttzoomout} onClick={(e) => {
                                e.preventDefault();
                                if (scale > 0.002) {
                                    let sc = (scale < 0.2) ? scale - 0.005 : scale - 0.1;
                                    setScale(sc);
                                }
                            }} size="small" type="submit"><Icon.ZoomOut color="rgb(102, 102, 255)" /></Button>
                        </ButtonGroup>


                    </div>

                    <div className="container row d-flex justify-content-center" style={{ marginLeft: "80px", marginTop: "-8px" }}>

                        <div className="col-md-4 mx-auto d-flex  justify-content-center">
                            <Button className={classes.buttClrScr} style={{ backgroundColor: "#6666ff" }} id="clearButton" onClick={(e) => {
                                e.preventDefault();

                                let roomInputCopy = roomInput;

                                for (let i = 0; i < roomInputCopy.length; i++) {
                                    // console.log(document.getElementById(`${roomInputCopy[i].id}`));
                                    if (roomInputCopy[i].check === true) {
                                        document.getElementById(`${roomInputCopy[i].id}`).click();
                                    }
                                    // console.log(document.getElementById(`${roomInputCopy[i].id}`));
                                }

                                setRoomInput(roomInputCopy);
                                setScale(1);
                                let x = newPlan + 1;
                                setNewPlan(x);


                            }} variant="contained" color="primary" size="small" type="submit"><span style={{ fontSize: "13px", fontFamily: "Montserrat", fontWeight: "700", }}>Clear Screen</span></Button>

                        </div>

                        <div className="col-md-4 mx-auto d-flex  justify-content-center">
                            <Button className={classes.buttlarge} style={{ backgroundColor: "#0099FF" }} onClick={(e) => {
                                e.preventDefault();
                                let x = newPlan + 1;
                                setNewPlan(x);

                            }} variant="contained" color="primary" size="small" type="submit"><span style={{ fontSize: "13px", fontFamily: "Montserrat", fontWeight: "700", }}>Generate More Plan</span></Button>

                        </div>

                        <div className="col-md-4  d-flex  justify-content-center">
                            <Button className={classes.buttDownload} style={{ backgroundColor: "black" }} download="YourFileName.jpg" onClick={(e) => {
                                e.preventDefault();

                                if (roomInput.length > 1) {
                                    var canvas = document.getElementById("c");
                                    // var img    = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
                                    // window.location.href=img;
                                    if (canvas !== null) {
                                        var link = document.getElementById('link');
                                        link.setAttribute('download', 'FloorPlan.jpeg');
                                        link.setAttribute('href', canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream"));
                                        link.click();
                                    }
                                    // console.log(img);
                                    // window.open(url);

                                    // document.write('<img src="'+img+'"/>');
                                }
                            }} variant="contained" color="primary" size="small" type="submit"><span style={{ fontSize: "13px", fontFamily: "Montserrat", fontWeight: "700", }}>Download</span> <Icon.Download /></Button>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Main
