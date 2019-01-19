import React from 'react';
import { Slide } from 'spectacle';
import Header from '../Header';
import Flex from '../Flex';
import CodeBox from '../CodeBox';

const DefaultWrapper = ({ children }) => (
    <Slide fluid={false} transition={["zoom"]} bgColor="primary">
        {children}
    </Slide>
);


const CodeSample = ({ code, title, content, wrapper: Wrapper }) => (
    <Wrapper>
        <Flex fluid>
            <Header spaced>{title}</Header>
            <CodeBox code={code} />
            {content && content}
        </Flex>
    </Wrapper>
);

CodeSample.defaultProps = {
    wrapper: DefaultWrapper
};

export default CodeSample;