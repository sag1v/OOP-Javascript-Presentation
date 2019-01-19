import React from 'react';
import { List, ListItem, } from 'spectacle';
import styled from 'styled-components';
import Flex from '../../Flex';
import WideSlide from '../../WideSlide';
import RunCode from '../../Runcode';
import CodeSample from '../../CodeSample';
import introCode from '!raw-loader!./introCode';
import code from '!raw-loader!./code';

const autoBullets = [
    "CREATE an object",
    "RETURN an object"
];

const assignbullets = [
    "Assign keys to our auto created object",
    "Link the object.__proto__ to our functions object"
]

const title = "The new keyword"

const Description = styled(Flex)`
    text-align: left;
`;

const DescriptionTitle = styled(Flex)`
    font-size: 1.2em;
    font-weight: bold;
`;

const Content = () => (
    <Description>
        <Flex>
            <DescriptionTitle>The "constructor" function will do some stuff for us:</DescriptionTitle>
            <List>
                {autoBullets.map((bullet, i) => <ListItem key={i} textSize="1.1em">{bullet}</ListItem>)}
            </List>
        </Flex>
        <Flex>
            <DescriptionTitle>We need more stuff to do:</DescriptionTitle>
            <List>
                {assignbullets.map((bullet, i) => <ListItem key={i} textSize="1.1em">{bullet}</ListItem>)}
            </List>
        </Flex>
    </Description>
)

export default ({ runCode }) =>
    runCode
        ? (<RunCode code={code} contextContent={[]} />)
        : (
            <WideSlide className="wide">
                <Flex rowsDisplay fluid>
                    <WideSlide.Side size={1} margin="0 10px 0 0">
                        <CodeSample wrapper={Flex} code={introCode} title={title} />
                    </WideSlide.Side>
                    <WideSlide.Side size={1} margin="0 0 0 10px">
                        <Content />
                    </WideSlide.Side>
                </Flex>
            </WideSlide>
        )