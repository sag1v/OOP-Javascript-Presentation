import React from 'react';
import WideSlide from '../../WideSlide';
import Flex from '../../Flex';
import CodeBox from '../../CodeBox';
import contextContent from './contextContent';
import { createLineNumberUpdater } from '../utils';
import prototypeCode from '!raw-loader!./code';

const lineNumbersArr = Object.entries(contextContent).reduce((acc, next) => {
    acc.push(next.lineNumbers);
    return acc;
}, []);
const updateLineNumber = createLineNumberUpdater(lineNumbersArr);

const functionExampleCode = prototypeCode;

class RunCode extends React.Component {
    state = {
        lineNumbersIdx: 0
    }

    onKeypress = e => {
        this.setState(({ lineNumbersIdx }) => {
            const nextLineNumbersIdx = updateLineNumber(e, lineNumbersIdx);
            if (nextLineNumbersIdx === lineNumbersIdx) return;
            return {
                lineNumbersIdx: nextLineNumbersIdx
            }
        });
    }

    componentDidMount() {
        document.addEventListener('keydown', this.onKeypress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeypress);
    }

    render() {
        const { lineNumbersIdx } = this.state;
        const currentContent = contextContent[lineNumbersIdx];
        const lineNumbers = lineNumbersIdx !== null && currentContent.lineNumbers;
        const DiagramToRender = currentContent.render;
        return (
            <WideSlide transition={["zoom"]} bgColor="primary">
                <Flex rowsDisplay fluid>
                    <WideSlide.Side size={0.5}>
                        <CodeBox lineNumbers={lineNumbers} code={functionExampleCode} />
                    </WideSlide.Side>
                    <WideSlide.Side size={1}>
                        {DiagramToRender}
                    </WideSlide.Side>
                </Flex>
            </WideSlide>
        );
    }
}



export default RunCode;