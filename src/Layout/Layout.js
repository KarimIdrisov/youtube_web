import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Navbar from "../Layout/Navbar"
import Sidebar from "../Layout/Sidebar"
import VideoSidebar from "./VideoSidebar";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1,
    }
}));

export default function Layout(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open)
    }

    if(props.children.type.name === "Main" || props.children.type.name === "SearchMain") {
        return (
            <div className={classes.root}>
                <Navbar handleClick={handleClick}/>
                <Sidebar open={open}/>
                {props.children}
            </div>
        );
    }
    return (
            <div className={classes.root}>
                <Navbar handleClick={handleClick}/>
                <VideoSidebar handleClick={handleClick} open={!open}/>
                {props.children}
            </div>
        );
}
