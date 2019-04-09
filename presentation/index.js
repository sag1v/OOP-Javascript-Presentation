import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Slide,
  Text,
  Heading,
  Image,
  List,
  ListItem
} from "spectacle";

import {
  CreatingObjects,
  Prototype,
  NewFunc,
  FunctionObjectCombo,
  ClassFunc,
  NativeChain,
  This,
  SubclassFactory,
  SubclassConstructor,
  SubclassClass,
  Questions
} from './components/Slides';

import jsLogo from '../assets/jslogo.png';


// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
import "normalize.css";
import styled from "react-emotion";
import Flex from "./components/Flex";


const theme = createTheme({
  primary: "#1F2022",
  primaryColor: '#444',
  secondary: "#fff",
  tertiary: "#fff",
  quaternary: "#CECECE"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
  });

  const StyledHeading = styled(Heading)`
    color: ${({ textColor }) => textColor ? textColor : '#fff'};
`;

const OpeningSlide = ({ title, children }) => (
  <Slide bgColor="#f0db4f" textColor="#1F2022" transition={['slide']}>
    {title && <StyledHeading bold caps textColor="#1F2022">{title}</StyledHeading>}
    {children}
  </Slide>
);

const ClosingSlide = ({ title, children }) => (
  <Slide bgColor="#1F2022" transition={['slide']}>
    {title && <StyledHeading bold caps >{title}</StyledHeading>}
    {children}
  </Slide>
);

const Signature = styled(Flex)`
  position: fixed;
  color: #fff;
  z-index: 99999;
  font-size: 0.5em;
  opacity: 0.2;
  bottom: 20px;
  left: 20px;
  font-family: cursive;
`;

export default class Presentation extends React.Component {

  render() {
    return (
      <Flex>
        <Deck textColor="#fff" bgColor="#1F2022" progress="pacman" transition={["slide"]} transitionDuration={650} theme={theme}>
          <Slide bgColor="#1F2022">
            <StyledHeading>JavaScript OOP</StyledHeading>
            <Image height="250px" src={jsLogo} />
          </Slide>
          <OpeningSlide title="Creating Objects">
            <StyledHeading bold caps textColor="#1F2022">{`{ }`}</StyledHeading>
          </OpeningSlide>
          <CreatingObjects createUsing="literal" />
          <CreatingObjects createUsing="dotNotation" />
          <CreatingObjects createUsing="objectCreate" />
          <CreatingObjects createUsing="functionFactory" />
          <OpeningSlide title="let's run it" />
          <CreatingObjects runCode />
          <ClosingSlide title="d  r  y">
            <Flex>Dont Repeat Yourself</Flex>
          </ClosingSlide>
          <OpeningSlide title="the [[prototype]] chain">
            <Flex>We actually mean __proto__</Flex>
          </OpeningSlide>
          <Prototype />
          <ClosingSlide title="really??">
            <Flex>Can't we automate this?</Flex>
          </ClosingSlide>
          <Questions on="object.Create"/>
          <OpeningSlide title="new">
            <Flex>The new key word</Flex>
          </OpeningSlide>
          <NewFunc />
          <OpeningSlide title="But first">
            <Flex>What is a function really?</Flex>
          </OpeningSlide>
          <FunctionObjectCombo />
          <ClosingSlide title="function">
            <Flex>It's really a function + object combo</Flex>
          </ClosingSlide>
          <OpeningSlide title="invoking with new">
            <Flex>a.k.a The constructor function pattern</Flex>
          </OpeningSlide>
          <NewFunc runCode />
          <ClosingSlide title="nice">
            <Flex>But can we do better?</Flex>
          </ClosingSlide>
          <Questions on="new"/>
          <OpeningSlide title="class">
            <Flex>some sugar and stuff...</Flex>
            <Flex>since ES2015</Flex>
          </OpeningSlide>
          <ClassFunc />
          <ClosingSlide title="class">
            <Flex>We will get back to it...</Flex>
          </ClosingSlide>
          <OpeningSlide title="[[prototype]]">
            <Flex>Let's walk up the chain</Flex>
          </OpeningSlide>
          <NativeChain />
          <NativeChain showSubClassing />
          <ClosingSlide title="[[prototype]]">
            <Flex>We can add links to the chain </Flex>
            <Flex>usually called "sub-classing" </Flex>
          </ClosingSlide>
          <Questions on="[[prototype]]"/>
          <OpeningSlide title="this">
            <Flex>The golden rules</Flex>
          </OpeningSlide>
          <This />
          <This showChallenge />
          <Questions on="this"/>
          <OpeningSlide title="sub class">
            <Flex>Not the inheritance that you think</Flex>
          </OpeningSlide>
          <ClosingSlide title="sub class">
            <Flex>factory functions</Flex>
          </ClosingSlide>
          <SubclassFactory />
          <ClosingSlide title="sub class">
            <Flex>constructor functions</Flex>
          </ClosingSlide>
          <SubclassConstructor />
          <ClosingSlide title="sub class">
            <Flex>class functions</Flex>
          </ClosingSlide>
          <SubclassClass />
          <Questions on="sub-classing"/>
        </Deck>
        <Signature>@sag1v</Signature>
      </Flex>
    );
  }
}
