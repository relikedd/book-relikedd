import React from 'react'
import { makeStyles, Typography } from "@material-ui/core";

const Contact = ({ title, id, dark }) => {
    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant="h3">{title}</Typography>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    //aquí creamos las clases
    section: {
        minHeight: "100vh"
    },
    sectiondark: {
        background: "#333",
        color: "#fff"
    }
}));

export default Contact
