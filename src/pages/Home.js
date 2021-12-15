import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
import { CssBaseline } from '@mui/material';
import './styles/home.css'

const useStyles=makeStyles((theme)=>({
appbar:{
    fontFamily:'nunito',
}

    ,root:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'115vh',
    fontSize: 300,
   
    backgroundImage:`url(${process.env.PUBLIC_URL+'/assests/pic1.jpg'})`,
    backgroundRepeat:"no-repeat",
    backgroundSize: 'cover',
},
    colorText: {
    color:'#000000',
},
}));
export default function Home(){

    const classes=useStyles();
    return <div className={classes.root}>
    <CssBaseline/>
    <div>
    <h1>
    <span className={classes.colorText}>Welcome to this Daycare!</span>
    </h1>
    </div>
    </div>;
   
}
