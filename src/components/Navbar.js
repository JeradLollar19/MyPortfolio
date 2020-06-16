import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Intro from './Intro';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));



const NavBar = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState();

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar className="MuiAppBar" position="fixed">
                <Toolbar>
                    <a href="#Home">
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <HomeRoundedIcon />
                    </IconButton>
                    </a>
                    <Tabs
                        value={value}
                        indicatorColor="primary"
                        onChange={handleChange}
                    >
                     <a href="#Intro"><Tab label="INTRO" /></a>
                     <a href="#MyWork"><Tab label="PROJECTS" /></a>
                     <a href="#ContactMe"><Tab label="CONTACT ME" /></a>
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    )
}


export default NavBar;