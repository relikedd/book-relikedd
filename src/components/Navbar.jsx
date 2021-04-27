import { AppBar, Divider, Drawer, List, ListItem, ListItemIcon, Toolbar } from '@material-ui/core'
import { makeStyles, IconButton } from '@material-ui/core'
import React, { useState } from 'react'
import logo from "../images/Logo-relikedd.png"
import { Link, animateScroll as scroll } from 'react-scroll'
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import BuildTwoToneIcon from '@material-ui/icons/BuildTwoTone'
import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone'
import MenuIcon from '@material-ui/icons/Menu'
import CancelIcon from '@material-ui/icons/Cancel'

const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)

    const links = [
        {
            id: "about",
            text: "Abut me",
            icon: <InfoTwoToneIcon fontSize="large"  />
        },
        {
            id: "skills",
            text: "Skills ",
            icon: <EmojiObjectsIcon fontSize="large" className={classes.light}/>
        },
        {
            id: "work",
            text: "My Work ",
            icon: <BuildTwoToneIcon fontSize="large" />
        },
        {
            id: "contact",
            text: "Contact me ",
            icon: <ContactMailTwoToneIcon fontSize="large" />
        }
    ]
    return (
        <>
            <AppBar position="sticky" className={classes.root}>
                <Toolbar className={classes.toolbar}>
                    <img src={logo} className={classes.logo} alt="Logo" />
                    <List className={classes.menu}>
                        {
                            links.map(({ id, text }, index) => (
                                <Link key={index} to={id} spy={true} activeClass="active" smooth={true} duration={500} offset={-110} >{text}</Link>
                            ))
                        }
                    </List>
                    <IconButton edge="end"
                        className={classes.menubutton}
                        onClick={() => setOpen(!open)} >
                        <MenuIcon fontSize="large" />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <IconButton className={classes.cancelicon} onClick={() => setOpen(!open)}>
                    <CancelIcon fontSize="large"></CancelIcon>
                </IconButton>
                <Divider />
                {
                    links.map(({ id, text, icon }, index) => (
                        <Link className={classes.sidebar} key={index} to={id} spy={true} activeClass="active" smooth={true} duration={500} offset={-110} >
                            <ListItem component="h5">
                                <span>
                                    <ListItemIcon>
                                        {icon}
                                    </ListItemIcon>
                                </span>{text}
                            </ListItem>
                        </Link>
                    ))
                }
            </Drawer>
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    //aquí creamos las clases
    root: {
        background: "#fafafa",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999
    },
    toolbar: {
        display: "flex",
        justifyContent: "flexstart",
        alignItems: "center"
    },
    logo: {
        height: "5rem",
        objectFit: "contain",
        margin: "1rem",
        "&:hover": {
            cursor: "pointer"
        }
    },
    menu: {
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },
        "& a": {
            color: "#333",
            fontSize: "1.4rem",
            fontWeight: "bold",
            marginLeft: theme.spacing(3)
        },
        "& a:hover": {
            cursor: "pointer",
            color: "tomato",
            borderBottom: "3px solid tomato"
        }
    },
    menubutton: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "block",
            color: "tomato",
            position: "absolute",
            top: 0,
            right: 10
        }
    },
    sidebar: {
        width: "40vw",
        [theme.breakpoints.down("")]: {
            width: "60vw"
        },
        "& h5": {
            margin: theme.spacing(10, 0, 0, 4),
            fontSize: "1.4rem",
            color: "#333",
            fontWeight: "bold"
        },
        "& h5:hover": {
            color: "tomato"
        }
    },
    cancelicon: {
        color: "tomato",
        position: "absolute",
        top: 0,
        right: 10
    },
    light:{
        color: "#ffcc00"
    }
}));

export default Navbar
