import React from "react";
import { makeStyles } from "@material-ui/core";

function App() {
  //configuración inicial para dar estilos/ copy page in components
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Hola Relikedd'</h1>
    </div>
  );
}

//configuración para uso de hook
//obtenemos theme (objeto con clases)
const useStyles = makeStyles((theme) => ({
  //aquí creamos las clases
  root: {},
}));

export default App;
