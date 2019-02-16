import React from 'react';
import styled from 'styled-components';
import Flex from '../../Flex';
import WideSlide from '../../WideSlide';
import newFuncCodeSample from '!raw-loader!./newFuncCodeSample';
import CodeBox from '../../CodeBox';
import indexCollection from './resourceCollection';


const HalfCircle = styled(Flex)`
    transition: color 250ms ease-in-out, box-shadow 100ms ease-in-out;
    cursor: pointer;
    background-color: #fff;
    box-shadow: 0 0 5px 1px #777;
    height: ${({ size }) => `${size * 2}px`};
    width: ${({ size }) => `${size}px`};
    justify-content: center;
    align-items: center;
    font-size: 0.7em;
    font-weight: bold;
    margin: 2px;
    &:hover{
        /* box-shadow: 0 0 2px 2px #777; */
        background-color: #fefefe;
        color: #2196f3;
    }
    &:focus, &:active{
        box-shadow: 0 0 0px 1px #aaa;
        height: ${({ size }) => `${(size - 1) * 2}px`};
    }

    border-top-right-radius: ${({ size, side }) => side === 'right' ? `${size * 2}px` : '0'};
    border-bottom-right-radius: ${({ size, side }) => side === 'right' ? `${size * 2}px` : '0'};

    border-top-left-radius: ${({ size, side }) => side === 'left' ? `${size * 2}px` : '0'};
    border-bottom-left-radius: ${({ size, side }) => side === 'left' ? `${size * 2}px` : '0'};
`;

HalfCircle.defaultProps = { size: 45, side: 'left' }

const Circle = styled(Flex)`
    align-items: center;
    border-radius: 50%;
    padding: 3px;
    box-shadow: 0 0 2px 1px #aaa;
`;

const ButtonWrapper = styled(Flex)`
    font-size: 1.5em;
    justify-content:center;
    align-items: center;
    user-select: none;
    height: 100%;
    max-height: 550px;
`;

const Wrapper = styled(Flex)`
    align-items: flex-start;
`
const Header = styled(Flex)`
    width: 100%;
    align-items: center;
    font-size: 1.7em;
    padding: 3px;
    margin-bottom: 10px;
    border-bottom: 1px solid #aaa;
    max-width: 95%;
    margin: 0 auto;
`

const TitleItem = styled(Flex)`
    width: 100%;
    min-height: 80px;
    justify-content: space-between;
    flex: 1;
`;


const TitleMessage = styled(Flex)`
    font-size: 1.1em;
    justify-content: center;
    padding: 0 10px;
`;

const SplitMoon = ({ leftContent, leftClick, rightContent, rightClick }) => {
    return (
        <Circle rowsDisplay>
            <HalfCircle side="left" onClick={leftClick}>{leftContent}</HalfCircle>
            <HalfCircle side="right" onClick={rightClick}>{rightContent}</HalfCircle>
        </Circle>
    );
}


class ClassFunc extends React.Component {
    state = { currentFileIdx: 0 };

    updateIdx = (val) => () => {
        this.setState(({ currentFileIdx }) => {
            const nextVal = currentFileIdx + val;
            if (nextVal >= 0 && nextVal < indexCollection.length) {
                return {
                    currentFileIdx: currentFileIdx + val
                }
            }
        });
    }

    render() {
        const { currentFileIdx } = this.state;
        const { classFile, classLines, newFuncLines, classMsg, newFuncMsg } = indexCollection[currentFileIdx];
        return (
            <WideSlide>
                <Header>new ⇠⇢ class</Header>
                <Wrapper rowsDisplay fluid>
                    <WideSlide.Side size={1}>
                        <TitleItem rowsDisplay>
                            <TitleMessage>{newFuncMsg}</TitleMessage>
                        </TitleItem>
                        <CodeBox code={newFuncCodeSample} lineNumbers={newFuncLines} />
                    </WideSlide.Side>
                    <ButtonWrapper>
                        <SplitMoon
                            leftContent="⇠"
                            rightContent="⇢"
                            leftClick={this.updateIdx(-1)}
                            rightClick={this.updateIdx(1)}
                        />
                    </ButtonWrapper>
                    <WideSlide.Side size={1}>
                        <TitleItem rowsDisplay>
                            <TitleMessage>{classMsg}</TitleMessage>
                        </TitleItem>
                        <CodeBox code={classFile} lineNumbers={classLines} />
                    </WideSlide.Side>
                </Wrapper>
            </WideSlide >
        );
    }
}

export default ClassFunc