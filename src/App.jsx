import React from "react";
import { makeStyles } from "@material-ui/core";
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import MyWork from './components/MyWork';
import Contact from './components/Contact';

function App() {
  //configuración inicial para dar estilos/ copy page in components
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <About title="About me" id="about" dark={true} />
      <Skills title="My Coding Journey" id="skills" dark={false} />
      <MyWork title="My Work" id="work" dark={true} />
      <Contact title="Get in touch" id="contact" dark={false} />
    </div>
  );
}

//configuración para uso de hook
//obtenemos theme (objeto con clases)
const useStyles = makeStyles((theme) => ({
  //aquí creamos las clases
  root: {

  },
}));

export default App;
