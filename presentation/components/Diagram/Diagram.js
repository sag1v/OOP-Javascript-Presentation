import React from 'react';
import styled from 'styled-components';
import Flex from '../Flex';
import Curly from '../Curly';
import { MemoryItem } from '../Slides/utils';

const Wrapper = styled(Flex)`
    position: relative;
    border: 1px solid #aaa;
    width: 100%;
    height: 100%;
    min-height: 70px;
    background-color: #272822;
    color: #fff;
    font-size: 0.8em;
    margin: ${({ spaced }) => spaced ? '10px 0' : '0'};
    &::after{
        content: '${({ garbaged }) => garbaged ? 'X' : ''}';
        height: ${({ garbaged }) => garbaged ? '100%' : '0'};
        width: ${({ garbaged }) => garbaged ? '100%' : '0'};
        position: absolute;
        background-color: ${({ garbaged }) => garbaged ? 'rgba(0,0,0,0.95)' : 'transparent'};
        color: #E91E63;
        font-size: 8em;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Block = styled(Flex)`
    border: 1px solid #ddd;
    padding: 0 5px 5px 5px;
    flex: ${({ size }) => size};
`;

const Header = styled(Flex)`
    padding: 5px 5px;
    border-bottom: 1px solid #ccc;
`;

const Proto = styled(Flex)`
    border-top: 1px dashed #777;
    margin: 10px 0;
    padding-top: 5px;
`;

const PropName = styled(Flex)`
    margin-right: 7px;
    color: ${({ highlightColor }) => highlightColor || 'inherit'};
`;

const ObjectProp = styled(Flex)`
    justify-content: center;
`;

const MemoryItemsWrapper = styled(Flex)`
     > div{
         margin: 1px 0;
         border-top: 1px solid #333;
         padding: 3px 0;
     }
`;

const ObjectMemory = ({ name, props = [], hideProto, protoValue, isCombo, highlight, highlightLinkage }) => (
    <Flex rowsDisplay bgColor={highlight}>
        {!isCombo && <PropName highlightColor={highlightLinkage}>{`${name}: `}</PropName>}
        <Flex rowsDisplay>
            <Flex>
                <Curly empty={hideProto && props.length === 0} />
            </Flex>
            <ObjectProp className="objProp">
                {props.map((p, i) => <Flex key={i}>{p}</Flex>)}
                {!hideProto && (
                    <Proto rowsDisplay>
                        <PropName>__proto__:</PropName>
                        <PropName highlightColor={highlightLinkage}>{protoValue}</PropName>
                    </Proto>)
                }
            </ObjectProp>
            <Flex>
                <Curly closing empty={hideProto && props.length === 0} />
            </Flex>
        </Flex>
    </Flex>
);

const WrapedMemory = styled(Flex)`
    border-left: ${({ hideObject }) => hideObject ? 'none' : '1px solid #07ff00'};
    padding-left: ${({ hideObject }) => hideObject ? '0' : '5px'};
    margin-bottom: ${({ hideObject }) => hideObject ? '0' : '5px'};
`;

const FuncMemory = ({ name, props, hideObject, highlightLinkage, isCombo = true }) => (
    <WrapedMemory hideObject={hideObject}>
        <Flex rowsDisplay>
            <PropName highlightColor={highlightLinkage}>{`${name}: `}</PropName>
            <Flex>[ ƒ ]</Flex>
        </Flex>
        {!hideObject && (
            <Flex>
                <Flex>+</Flex>
                <ObjectMemory isCombo={isCombo} hideProto name={name} props={props} />
            </Flex>
        )}
    </WrapedMemory>
);

const PrimitiveMemory = ({ name, value, highlightLinkage }) => (
    <Flex rowsDisplay>
        <PropName highlightColor={highlightLinkage}>{name}: </PropName>
        {value ? <Flex>{value}</Flex> : <Flex>_ _ _</Flex>}
    </Flex>
);

const Diagram = ({ global, threadItems, memoryItems, garbaged }) => {
    const typeOfContext = global ? 'Global' : 'Local';
    return (
        <Wrapper rowsDisplay spaced={!global} garbaged={garbaged}>
            <Block size={1.3}>
                <Header>
                    {`${typeOfContext} Execution Thread`}
                </Header>
                <Flex>
                    {threadItems}
                </Flex>
            </Block>
            <Block size={1}>
                <Header>{`${typeOfContext} Memory`}</Header>
                <MemoryItemsWrapper className="sagiiv">
                    {memoryItems}
                </MemoryItemsWrapper>
            </Block>
        </Wrapper>
    )
};


Diagram.Obj = ObjectMemory;
Diagram.Func = FuncMemory;
Diagram.PrimitiveMemory = PrimitiveMemory;

export default Diagram;
