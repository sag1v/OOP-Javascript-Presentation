import React from 'react';
import styled from 'styled-components';
import Flex from '../../Flex';
import WideSlide from '../../WideSlide';
import RunCode from '../../Runcode';
import contextContent from './contentContext';
import CodeSample from '../../CodeSample';
import introCode from '!raw-loader!./introCode';
import code from '!raw-loader!./code';

const autoBullets = [
    "CREATE an object",
    "RETURN an object"
];

const assignbullets = [
    "Assign keys to our auto created object",
    "Link the obj.__proto__ to our functions object"
]

const title = "The new keyword"

const Description = styled(Flex)`
    text-align: left;
    padding: 15px;
    background-color: transparent;
    box-shadow: 0 0 2px 1px #aaa;
`;

const DescriptionTitle = styled(Flex)`
    font-size: 0.9em;
    font-weight: 400;
`;

const List = styled.ul`
    font-size: 0.7em;
    margin-top: 10px;
    margin-bottom: 25px;
`;

const ListItem = styled.li``;

const Content = () => (
    <Description>
        <Flex>
            <DescriptionTitle>The "new" key will do some stuff for us:</DescriptionTitle>
            <List>
                {autoBullets.map((bullet, i) => <ListItem key={i}>{bullet}</ListItem>)}
            </List>
        </Flex>
        <Flex>
            <DescriptionTitle>We need more stuff to do:</DescriptionTitle>
            <List>
                {assignbullets.map((bullet, i) => <ListItem key={i}>{bullet}</ListItem>)}
            </List>
        </Flex>
    </Description>
)

export default ({ runCode }) =>
    runCode
        ? (<RunCode code={code} contextContent={contextContent} />)
        : (
            <WideSlide className="wide">
                <Flex rowsDisplay fluid>
                    <WideSlide.Side size={1} margin="0 10px 0 0">
                        <CodeSample wrapper={Flex} code={introCode} title={title} />
                    </WideSlide.Side>
                    <WideSlide.Side size={0.5} margin="130px 0 0 10px">
                        <Content />
                    </WideSlide.Side>
                </Flex>
            </WideSlide>
        )