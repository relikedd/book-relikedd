import React from 'react'
import { Button, Card, CardContent, CardMedia, makeStyles, Typography, CardActions } from "@material-ui/core";
import CvPhoto from '../images/Cv-ehh.png'
import TypeWriterEffect from 'react-typewriter-effect'
import CvPdf from '../images/CV_Eduardo_Hernández.pdf'

const About = ({ title, id, dark }) => {
    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant="h3">{title}</Typography>
                <Card className={classes.card}>
                    <CardMedia image={CvPhoto} className={classes.media} title="picture" />
                    <CardContent className={classes.cardcontent}>
                        <TypeWriterEffect
                            text="Hi, I am Eduardo Hernández"
                            textStyle={{
                                fontSize: "2rem",
                                fontWeight: "700px",
                                color: "tomato"
                            }}
                            startDelay={100}
                            cursorColor="black"
                            typeSpeed={100}
                        />
                        <br/>
                        <TypeWriterEffect
                            text="And i am a Web Developer"
                            textStyle={{
                                fontSize: "1.2rem",
                                fontWeight: "500px",
                                // color: "black"
                            }}
                            startDelay={3000}
                            cursorColor="black"
                            typeSpeed={100}
                        />
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" className={classes.pdfbutton}>
                            <a href={CvPdf} download>
                                Download CV
                        </a>
                        </Button>
                    </CardActions>
                </Card>
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
    },
    sectioncontent: {
        maxWidth: "80vw",
        margin: "0 auto",
    },
    card: {
        height: "70vh",
        display: "flex",
        marginTop: theme.spacing(6),
    },
    media: {
        width: "250px",
        height: "auto",
        objectFit: "cover",
        borderRadius: "10px",
        margin: theme.spacing(5)
    },
    pdfbutton: {
        position: "absolute",
        bottom: "5rem",
        right: "6rem",
        bakckgroundColor: "tomato",
        padding: theme.spacing(3),
        "& hover":{

        }
    }
}));

export default About
