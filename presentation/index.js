import React from "react";
import styled from 'styled-components';
// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Code,
  Layout,
  Fit,
  Fill,
  CodePane
} from "spectacle";

import Flex from './components/Flex';
import WideSlide from './components/WideSlide';
import CodeBox from './components/CodeBox';
import Diagram from './components/Diagram';

import CreatingObjects from './components/Slides/CreatingObjects';

// Import theme
import createTheme from "spectacle/lib/themes/default";

import code from '!raw-loader!./code';

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

  state = {
    threadItems: [],
    memoryItems: [<Diagram.Obj key='somekey' name="test" props={['key: value', 'key: [ ƒ ] + {...}', 'key: value']} />]
  }

  threadChildren = () => (
    <Flex>
      <div>
        const x = 8;
      </div>
      <Diagram threadChildren={<CodePane source={code} bgColor="#fff"></CodePane>} />
    </Flex>
  )

  render() {
    const { memoryItems } = this.state;
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
        <CreatingObjects createUsing="literal" />
        <CreatingObjects createUsing="dotNotation" />
        <CreatingObjects createUsing="objectCreate" />
        <CreatingObjects createUsing="functionFactory" />
        <CreatingObjects runCode />

        <WideSlide transition={["zoom"]} bgColor="primary">
          <Flex rowsDisplay fluid>
            <WideSlide.Side size={0.5}>
              <CodeBox lineNumbers='1,3' code={code} />
            </WideSlide.Side>
            <WideSlide.Side size={1}>
              <Diagram global threadChildren={this.threadChildren()} memoryChildren={memoryItems} />
            </WideSlide.Side>
          </Flex>
        </WideSlide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
