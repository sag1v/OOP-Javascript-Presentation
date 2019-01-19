import React from 'react';
import WideSlide from '../WideSlide';
import Flex from '../Flex';
import CodeBox from '../CodeBox';
import { createLineNumberUpdater } from '../Slides/utils';


class RunCode extends React.Component {

    static defaultProps = {
        contextContent: {},
        code: ''
    }

    state = {
        lineNumbersIdx: 0
    }

    lineNumberUpdater = createLineNumberUpdater(this.props.contextContent)

    onKeypress = e => {

        this.setState(({ lineNumbersIdx }) => {
            const nextLineNumbersIdx = this.lineNumberUpdater(e, lineNumbersIdx);
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
        const { contextContent, code } = this.props;
        const currentContent = contextContent[lineNumbersIdx];
        const lineNumbers = lineNumbersIdx !== null && currentContent && currentContent.lineNumbers;
        const DiagramToRender = currentContent && currentContent.render;
        return (
            <WideSlide transition={["zoom"]} bgColor="primary">
                <Flex rowsDisplay fluid>
                    <WideSlide.Side size={0.5}>
                        <CodeBox lineNumbers={lineNumbers} code={code} />
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