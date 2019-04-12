import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Slide,
  Heading,
  Image,
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
  Questions,
  Test
} from './components/Slides';

import jsLogo from '../assets/jslogo.png';
import gmailLogo from '../assets/gmailLogo.png';
import twitterLogo from '../assets/twitterLogo.png';
import githubLogo from '../assets/githubLogo.png';

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

const OpeningSlide = ({ children }) => (
  <Slide bgColor="#f0db4f" textColor="#1F2022" transition={['slide']}>
    {children}
  </Slide>
);

OpeningSlide.Title = ({ children }) => (
  <StyledHeading bold caps textColor="#1F2022">{children}</StyledHeading>
)

const ClosingSlide = ({ children }) => (
  <Slide bgColor="#1F2022" transition={['slide']}>
    {children}
  </Slide>
);

ClosingSlide.Title = ({ children }) => (
  <StyledHeading bold caps >{children}</StyledHeading>
)

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

const Handle = styled(Flex)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 0.9em;
  font-family: cursive;
`

const SocialLogo = styled(Flex)`
  margin-right: 5px;
  padding-top: 3px;
`

export default class Presentation extends React.Component {

  render() {
    return (
      <Flex>
        <Deck textColor="#fff" bgColor="#1F2022" progress="pacman" transition={["slide"]} transitionDuration={650} theme={theme}>
          <Slide bgColor="#1F2022">
            <StyledHeading>JavaScript OOP</StyledHeading>
            <Image height="250px" src={jsLogo} />
          </Slide>
          <OpeningSlide>
            <OpeningSlide.Title>But first</OpeningSlide.Title>
            <Flex>Why should we care?</Flex>
          </OpeningSlide>
          <Test codeExample={1} />
          <Test codeExample={2} />
          <Test codeExample={3} />
          <ClosingSlide>
            <Flex>now that we care</Flex>
            <ClosingSlide.Title>Let's start!</ClosingSlide.Title>
          </ClosingSlide>
          <OpeningSlide>
            <OpeningSlide.Title>Creating Objects</OpeningSlide.Title>
            <OpeningSlide.Title>{`{ }`}</OpeningSlide.Title>
          </OpeningSlide>
          <CreatingObjects createUsing="literal" />
          <CreatingObjects createUsing="dotNotation" />
          <CreatingObjects createUsing="objectCreate" />
          <CreatingObjects createUsing="functionFactory" />
          <OpeningSlide>
            <OpeningSlide.Title>let's run it</OpeningSlide.Title>
          </OpeningSlide>
          <CreatingObjects runCode />
          <ClosingSlide>
            <ClosingSlide.Title>d  r  y</ClosingSlide.Title>
            <Flex>Dont Repeat Yourself</Flex>
          </ClosingSlide>
          <OpeningSlide>
            <OpeningSlide.Title>the [[prototype]] chain</OpeningSlide.Title>
            <Flex>We actually mean __proto__</Flex>
          </OpeningSlide>
          <Prototype />
          <ClosingSlide >
            <ClosingSlide.Title>cool</ClosingSlide.Title>
            <Flex>But Can we automate some of it?</Flex>
          </ClosingSlide>
          <Questions on="object.Create" />
          <OpeningSlide>
            <OpeningSlide.Title>new</OpeningSlide.Title>
            <Flex>The new key word</Flex>
          </OpeningSlide>
          <NewFunc />
          <OpeningSlide>
            <OpeningSlide.Title>But first</OpeningSlide.Title>
            <Flex>What is a function really?</Flex>
          </OpeningSlide>
          <FunctionObjectCombo />
          <ClosingSlide>
            <ClosingSlide.Title>function</ClosingSlide.Title>
            <Flex>It's really a function + object combo</Flex>
          </ClosingSlide>
          <OpeningSlide>
            <OpeningSlide.Title>invoking with new</OpeningSlide.Title>
            <Flex>a.k.a The constructor function pattern</Flex>
          </OpeningSlide>
          <NewFunc runCode />
          <ClosingSlide>
            <ClosingSlide.Title>nice</ClosingSlide.Title>
            <Flex>But can we do better?</Flex>
          </ClosingSlide>
          <Questions on="new" />
          <OpeningSlide>
            <OpeningSlide.Title>class</OpeningSlide.Title>
            <Flex>some sugar and stuff...</Flex>
            <Flex>since ES2015</Flex>
          </OpeningSlide>
          <ClassFunc />
          <ClosingSlide>
            <ClosingSlide.Title>class</ClosingSlide.Title>
            <Flex>Not that different from a constructor function</Flex>
            <Flex>We will get back to it later on...</Flex>
          </ClosingSlide>
          <OpeningSlide>
            <OpeningSlide.Title>[[prototype]]</OpeningSlide.Title>
            <Flex>Let's walk up the chain</Flex>
          </OpeningSlide>
          <NativeChain />
          <NativeChain showSubClassing />
          <ClosingSlide>
            <ClosingSlide.Title>[[prototype]]</ClosingSlide.Title>
            <Flex>The ability to add links to the chain </Flex>
            <Flex>usually called "sub-classing" </Flex>
          </ClosingSlide>
          <Questions on="[[prototype]]" />
          <OpeningSlide>
            <OpeningSlide.Title>this</OpeningSlide.Title>
            <Flex>Dynamic & Static</Flex>
          </OpeningSlide>
          <This />
          <This showChallenge />
          <Questions on="this" />
          <OpeningSlide>
            <OpeningSlide.Title>sub class</OpeningSlide.Title>
            <Flex>Not the inheritance that you think</Flex>
          </OpeningSlide>
          <ClosingSlide>
            <ClosingSlide.Title>sub class</ClosingSlide.Title>
            <Flex>factory functions</Flex>
          </ClosingSlide>
          <SubclassFactory />
          <ClosingSlide>
            <ClosingSlide.Title>sub class</ClosingSlide.Title>
            <Flex>constructor functions</Flex>
          </ClosingSlide>
          <SubclassConstructor />
          <ClosingSlide>
            <ClosingSlide.Title>sub class</ClosingSlide.Title>
            <Flex>class functions</Flex>
          </ClosingSlide>
          <SubclassClass />
          <ClosingSlide>
            <ClosingSlide.Title>sub class</ClosingSlide.Title>
            <Flex>Not inheritance but rather a linkage</Flex>
          </ClosingSlide>
          <Questions on="sub-classing" />
          <OpeningSlide>
            <OpeningSlide.Title>We are ready!</OpeningSlide.Title>
            <Flex>Bring them questions again...</Flex>
          </OpeningSlide>
          <Test codeExample={1} />
          <Test codeExample={2} />
          <Test codeExample={3} />
          <OpeningSlide>
            <Flex>Hope it was informative</Flex>
            <OpeningSlide.Title>Thank You!</OpeningSlide.Title>
            <Handle className="social-handle">
              <SocialLogo>
                <Image height="25px" src={gmailLogo} />
              </SocialLogo>
              <Flex>sagiv.bengiat@gmail.com</Flex>
            </Handle>
            <Handle className="social-handle">
              <SocialLogo>
                <Image height="25px" src={twitterLogo} />
              </SocialLogo>
              <Flex>@sag1v</Flex>
            </Handle>
            <Handle className="social-handle">
              <SocialLogo>
                <Image height="30px" src={githubLogo} />
              </SocialLogo>
              <Flex>sag1v</Flex>
            </Handle>
          </OpeningSlide>
        </Deck>
        <Signature>@sag1v</Signature>
      </Flex>
    );
  }
}
