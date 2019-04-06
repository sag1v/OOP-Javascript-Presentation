import React from 'react';
import { Slide } from 'spectacle';
import Header from '../Header';
import Flex from '../Flex';
import CodeBox from '../CodeBox';

const DefaultWrapper = ({ children, className }) => (
    <Slide className={className} fluid={false} transition={["zoom"]} bgColor="primary">
        {children}
    </Slide>
);


const CodeSample = ({ code, title, content, wrapper: Wrapper }) => (
    <Wrapper className="wrappppper">
        <Flex fluid className="my flex">
            <Header spaced>{title}</Header>
            <CodeBox code={code} />
            {content && content}
        </Flex>
    </Wrapper>
);

CodeSample.defaultProps = {
    wrapper: ({children}) => <Flex>{children}</Flex> //DefaultWrapper
};

export default CodeSample;