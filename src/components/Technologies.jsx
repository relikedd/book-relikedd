import React from 'react'
import Reactjs from '../assets/img/React-logo.png'
import Html from '../assets/img/Html-logo.png'
import Css from '../assets/img/Css-logo.png'
import JS from '../assets/img/Js-logo.png'
import Firebase from '../assets/img/Firebase-logo.png'
import Sql from '../assets/img/Sql-logo.png'
import { Timeline, TimelineConnector, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@material-ui/lab'
import { Typography, makeStyles } from '@material-ui/core'
// import classes from '*.module.css'


const Technologies = () => {
    const classes = useStyles();
    const skills = [
        {
            year: "2020",
            src: Reactjs,
            title: "ReactJs",
            starts: 3,
        },
        {
            year: "2019",
            src: Html,
            title: "HTML",
            starts: 3,
        },
        {
            year: "2018",
            src: Css,
            title: "Css",
            starts: 3,
        },
        {
            year: "2017",
            src: JS,
            title: "JS",
            starts: 3,
        },
        {
            year: "2016",
            src: Firebase,
            title: "Firebase",
            starts: 3,
        },
        {
            year: "2015",
            src: Sql,
            title: "Sql",
            starts: 3,
        },
    ]


    return (
        <Timeline align="left">
            {
                skills.map(({ year, src, title, stars }, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent>
                            <Typography variant="h6" color="textSecondary">
                                {year}
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            {/* <TimelineDot> */}
                                <img src={src} alt="imagen" className={classes.customlogo} />
                            {/* </TimelineDot> */}
                            <TimelineConnector />
                        </TimelineSeparator>

                    </TimelineItem>
                ))
            }
        </Timeline>
    )
}

const useStyles = makeStyles((theme) => ({
    //aquí creamos las clases
    customlogo: {
        width: "40px",
    },
}))


export default Technologies
