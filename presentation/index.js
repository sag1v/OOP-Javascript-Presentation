import React from "react";

// Import Spectacle Core tags
import {
  Deck,
} from "spectacle";

import { CreatingObjects, Prototype } from './components/Slides';

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
import "normalize.css";

const theme = createTheme({
  primary: "#fff",
  primaryColor: '#444',
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quaternary: "#CECECE"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
  });

export default class Presentation extends React.Component {

  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
        <CreatingObjects createUsing="literal" />
        <CreatingObjects createUsing="dotNotation" />
        <CreatingObjects createUsing="objectCreate" />
        <CreatingObjects createUsing="functionFactory" />
        <CreatingObjects runCode />
        <Prototype />

      </Deck>
    );
  }
}
