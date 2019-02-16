import React from 'react';
import uuidv4 from 'uuid/v4';
import Diagram from '../../Diagram';
import { addIf } from '../utils';

const FunctionName = 'CreateUser';
const protoLinkage = `${FunctionName}.prototype`;

const CreateUserDeclaration = ({ hidePrototype }) => (
    <Diagram.Func
        name={FunctionName}
        isCombo={true}
        props={[
            <Diagram.Obj
                hideProto
                name="prototype"
                props={hidePrototype ? [] : [
                    <Diagram.Func name="sayhi" hideObject />
                ]}
            />,
        ]}
    />
);

const Userdeclaration = (props) => (
    <Diagram.Obj name={name} hideProto isUndefined={isUndefined} />
);

const threadItems = ({ name, userName }) => [
    { code: `this = { }`, highlight: true },
    { code: `this.__proto__ = ${protoLinkage}`, highlight: true },
    { code: `this.name = '${name}'` },
    { code: `this.userName = '${userName}'` },
    { code: `return this`, highlight: true }
]

const user1PropsArr = [
    "name: Sagiv",
    'userName: sag1v'
];

const user2PropsArr = [
    "name: John",
    'userName: john77'
];

const UserContextDiagram = ({ hideProtoLinkage, showArgs, name, userName, memoryProps, garbaged, showThreadIndex = 0, showThis }) => {
    return (
        <Diagram
            garbaged={garbaged}
            threadItems={threadItems({ name, userName }).slice(0, showThreadIndex).map(item => <Diagram.CodeLine highlight={item.highlight}>{item.code}</Diagram.CodeLine>)}
            memoryItems={[
                ...addIf(showArgs, <Diagram.PrimitiveMemory name="name" value={name} />),
                ...addIf(showArgs, <Diagram.PrimitiveMemory name="userName" value={userName} />),
                ...addIf(showThis, <Diagram.Obj
                    name="this"
                    protoValue={hideProtoLinkage ? '?' : protoLinkage}
                    props={memoryProps}
                />),
            ]}
        />
    );
}

const ToRender = ({
    hidePrototype,
    hideFunc,
    hideUser1,
    user1Undefined,
    hideUser1Invoke,
    hideUser1Diagram,
    showUser1Args,
    user1PropsIndex = 0,
    user1ShowThreadIndex = 0,
    hideUser1ProtoLinkage,
    showUser1This,
    gcUser1,
    hideUser2,
    user2Undefined,
    hideUser2Invoke,
    hideUser2Diagram,
    showUser2Args,
    user2PropsIndex = 0,
    user2ShowThreadIndex = 0,
    showUser2This,
    gcUser2,
    sayHelloUser1,
    sayHelloUser2
}) => {
    return (
        <Diagram
            global
            memoryItems={[
                ...addIf(!hideFunc, <CreateUserDeclaration hidePrototype={hidePrototype} />),

                ...addIf(!hideUser1, <Diagram.Obj name="user1" isUndefined={user1Undefined} props={user1PropsArr.slice(0, user1PropsIndex)} protoValue={protoLinkage} />),
                ...addIf(!hideUser2, <Diagram.Obj name="user2" isUndefined={user2Undefined} props={user2PropsArr.slice(0, user2PropsIndex)} protoValue={protoLinkage} />)
            ]}
            threadItems={[
                ...addIf(!hideUser1Invoke, <Diagram.CodeLine small>{`User1 = new ${FunctionName}('Sagiv', 'sag1v')`}</Diagram.CodeLine>),
                ...addIf(
                    !hideUser1Diagram,
                    <UserContextDiagram
                        garbaged={gcUser1}
                        name="Sagiv"
                        userName="sag1v"
                        showArgs={showUser1Args}
                        showThis={showUser1This}
                        memoryProps={user1PropsArr.slice(0, user1PropsIndex)}
                        hideProtoLinkage={hideUser1ProtoLinkage}
                        showThreadIndex={user1ShowThreadIndex}
                    />),

                ...addIf(!hideUser2Invoke, <Diagram.CodeLine small>{`User2 = new ${FunctionName}('John', 'john77')`}</Diagram.CodeLine>),
                ...addIf(
                    !hideUser2Diagram,
                    <UserContextDiagram
                        garbaged={gcUser2}
                        name="John"
                        userName="john77"
                        showArgs={showUser2Args}
                        showThis={showUser2This}
                        memoryProps={user2PropsArr.slice(0, user2PropsIndex)}
                        showThreadIndex={user2ShowThreadIndex}
                    />),
                    ...addIf(sayHelloUser1, <Diagram.CodeLine >{`user1.sayHi()`}</Diagram.CodeLine>),
                    ...addIf(sayHelloUser2, <Diagram.CodeLine >{`user2.sayHi()`}</Diagram.CodeLine>),
            ]}
        />
    )
}


export default [
    /** user 1 ***********/
    { lineNumbers: '  ', render: <ToRender hideUser1ProtoLinkage hideFunc hidePrototype hideUser1 user1Undefined hideUser1Diagram hideUser1Invoke hideUser2 user2Undefined hideUser2Diagram hideUser2Invoke /> },
    { lineNumbers: '1-4', render: <ToRender hideUser1ProtoLinkage hidePrototype hideUser1 user1Undefined hideUser1Diagram hideUser1Invoke hideUser2 user2Undefined hideUser2Diagram hideUser2Invoke /> },
    { lineNumbers: '6-8', render: <ToRender hideUser1ProtoLinkage hideUser1 user1Undefined hideUser1Diagram hideUser1Invoke hideUser2 user2Undefined hideUser2Diagram hideUser2Invoke /> },
    { lineNumbers: '10', render: <ToRender hideUser1ProtoLinkage user1Undefined hideUser1Diagram hideUser2 user2Undefined hideUser2Diagram hideUser2Invoke /> },
    { lineNumbers: '1', render: <ToRender hideUser1ProtoLinkage user1Undefined hideUser2 user2Undefined hideUser2Diagram hideUser2Invoke /> },
    { lineNumbers: '1', render: <ToRender hideUser1ProtoLinkage showUser1Args user1Undefined hideUser2 user2Undefined hideUser2Diagram hideUser2Invoke /> },
    { lineNumbers: '1', render: <ToRender hideUser1ProtoLinkage user1ShowThreadIndex={1} showUser1Args user1Undefined hideUser2 user2Undefined hideUser2Diagram hideUser2Invoke /> },
    { lineNumbers: '1', render: <ToRender hideUser1ProtoLinkage user1ShowThreadIndex={1} showUser1This showUser1Args user1Undefined hideUser2 user2Undefined hideUser2Diagram hideUser2Invoke /> },
    { lineNumbers: '1', render: <ToRender hideUser1ProtoLinkage user1ShowThreadIndex={2} showUser1This showUser1Args user1Undefined hideUser2 user2Undefined hideUser2Diagram hideUser2Invoke /> },
    { lineNumbers: '1', render: <ToRender user1ShowThreadIndex={2} showUser1This showUser1Args user1Undefined hideUser2 user2Undefined hideUser2Diagram hideUser2Invoke /> },
    { lineNumbers: '2', render: <ToRender user1ShowThreadIndex={3} user1PropsIndex={1} showUser1This showUser1Args user1Undefined hideUser2 user2Undefined hideUser2Diagram hideUser2Invoke /> },
    { lineNumbers: '3', render: <ToRender user1ShowThreadIndex={4} user1PropsIndex={2} showUser1This showUser1Args user1Undefined hideUser2 user2Undefined hideUser2Diagram hideUser2Invoke /> },
    { lineNumbers: '4', render: <ToRender user1ShowThreadIndex={5} user1PropsIndex={2} showUser1This showUser1Args user1Undefined hideUser2 user2Undefined hideUser2Diagram hideUser2Invoke /> },
    { lineNumbers: '10', render: <ToRender gcUser1 user1ShowThreadIndex={5} user1PropsIndex={2} showUser1This showUser1Args hideUser2 user2Undefined hideUser2Diagram hideUser2Invoke /> },
    /** user 2 ***********/
    { lineNumbers: '11', render: <ToRender gcUser1 user1ShowThreadIndex={5} user1PropsIndex={2} showUser1This showUser1Args hideUser2 user2Undefined hideUser2Diagram /> },
    { lineNumbers: '1', render: <ToRender gcUser1 user1ShowThreadIndex={5} user1PropsIndex={2} showUser1This showUser1Args user2Undefined /> },
    { lineNumbers: '1', render: <ToRender gcUser1 user1ShowThreadIndex={5} user1PropsIndex={2} showUser1This showUser1Args user2Undefined showUser2Args/> },
    { lineNumbers: '1', render: <ToRender gcUser1 user1ShowThreadIndex={5} user1PropsIndex={2} showUser1This showUser1Args user2Undefined showUser2Args user2ShowThreadIndex={1} /> },
    { lineNumbers: '1', render: <ToRender gcUser1 user1ShowThreadIndex={5} user1PropsIndex={2} showUser1This showUser1Args user2Undefined showUser2Args user2ShowThreadIndex={2} /> },
    { lineNumbers: '1', render: <ToRender gcUser1 user1ShowThreadIndex={5} user1PropsIndex={2} showUser1This showUser1Args user2Undefined showUser2Args user2ShowThreadIndex={2} showUser2This/> },
    { lineNumbers: '2', render: <ToRender gcUser1 user1ShowThreadIndex={5} user1PropsIndex={2} showUser1This showUser1Args user2Undefined showUser2Args user2ShowThreadIndex={3} showUser2This user2PropsIndex={1} /> },
    { lineNumbers: '3', render: <ToRender gcUser1 user1ShowThreadIndex={5} user1PropsIndex={2} showUser1This showUser1Args user2Undefined showUser2Args user2ShowThreadIndex={4} showUser2This user2PropsIndex={2} /> },
    { lineNumbers: '4', render: <ToRender gcUser1 user1ShowThreadIndex={5} user1PropsIndex={2} showUser1This showUser1Args user2Undefined showUser2Args user2ShowThreadIndex={5} showUser2This user2PropsIndex={2} /> },
    { lineNumbers: '11', render: <ToRender gcUser1 user1ShowThreadIndex={5} user1PropsIndex={2} showUser1This showUser1Args showUser2Args user2ShowThreadIndex={5} showUser2This user2PropsIndex={2} gcUser2/> },
    { lineNumbers: '12', render: <ToRender sayHelloUser1 gcUser1 user1ShowThreadIndex={5} user1PropsIndex={2} showUser1This showUser1Args showUser2Args user2ShowThreadIndex={5} showUser2This user2PropsIndex={2} gcUser2/> },
    { lineNumbers: '13', render:<ToRender sayHelloUser1 sayHelloUser2 gcUser1 user1ShowThreadIndex={5} user1PropsIndex={2} showUser1This showUser1Args showUser2Args user2ShowThreadIndex={5} showUser2This  user2PropsIndex={2} gcUser2/> },

];