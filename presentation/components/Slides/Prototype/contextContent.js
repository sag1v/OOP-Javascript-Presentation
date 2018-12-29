import React from 'react';
import uuidv4 from 'uuid/v4';
import Flex from '../../Flex';
import Diagram from '../../Diagram';
import { addIf } from '../utils';

const newUserProps = ({ name, username }) => [
    <Diagram.PrimitiveMemory key={uuidv4()} name="name" value={name} />,
    <Diagram.PrimitiveMemory key={uuidv4()} name="username" value={username} />,
];

const userLogicStoreProps = [
    <Diagram.Func name="sayHi" hideObject />
];

const protoLinkToName = "userLogicStore";

const user1Args = { name: "Sagiv", username: "sag1v" };
const user2Args = { name: "John", username: "john77" };

const NestedContext = ({ showArgs, argsValues = {}, showNewUser, newUSerPropsIdx = 0, highlightLinkage, garbaged }) => {
    const newUSerPropsToShow = newUserProps({ ...argsValues }).slice(0, newUSerPropsIdx);
    return (
        <Diagram
            garbaged={garbaged}
            memoryItems={!showArgs ? [] : [
                <Diagram.PrimitiveMemory key={uuidv4()} name="name" value={argsValues.name} />,
                <Diagram.PrimitiveMemory key={uuidv4()} name="username" value={argsValues.username} />,
                ...addIf(showNewUser,
                    <Diagram.Obj key={uuidv4()} highlightLinkage={highlightLinkage && 'yellow'} hideProto name="newUser" props={newUSerPropsToShow} />
                )
            ]}
            threadItems={[

            ]}
        />
    );
}

const ToRender = ({
    empty = false,
    hideUserLogicStore,
    showProto,
    hideUserLogicFuncs,
    highlightLinkage1,
    highlightLinkage2,
    hideUser1,
    hideUser2,
    user1Global,
    user2Global,
    hideNested,
    hideNested2,
    showArgs,
    showArgs2,
    showNewUser,
    showNewUser2,
    newUSerPropsIdx,
    newUSerPropsIdx2,
    garbaged,
    garbaged2,
    highlight1,
    highlight2,
    showLinkage1,
    showLinkage2,
    protoValue
}) => {
    const User1 = user1Global ? Diagram.Obj : Diagram.PrimitiveMemory;
    const User2 = user2Global ? Diagram.Obj : Diagram.PrimitiveMemory;
    return (
        <Diagram
            global
            memoryItems={empty ? [] : [
                <Diagram.Func key={uuidv4()} name="createUser" hideObject isCombo={false} />,
                ...addIf(!hideUserLogicStore, <Diagram.Obj highlightLinkage={(highlightLinkage1 || highlightLinkage2) && 'yellow'} name={protoLinkToName} hideProto={!showProto} key={uuidv4()} props={hideUserLogicFuncs ? [] : userLogicStoreProps} />),
                ...addIf(!hideUser1, <User1 highlight={highlight1 ? "#f44336" : ""} highlightLinkage={highlightLinkage1 && garbaged && 'yellow'} hideProto={!showLinkage1} protoValue={protoValue} key={uuidv4()} name="user1" props={user1Global ? newUserProps({ ...user1Args }) : []} />),
                ...addIf(!hideUser2, <User2 highlight={highlight2 ? "#4caf50" : ""} highlightLinkage={highlightLinkage2 && garbaged2 && 'yellow'} hideProto={!showLinkage2} key={uuidv4()} protoValue={protoValue} name="user2" props={user2Global ? newUserProps({ ...user2Args }) : []} />)
            ]}
            threadItems={empty ? [] : [
                ...addIf(!hideNested, <Flex key={uuidv4()}>{`createUser('${user1Args.name}', '${user1Args.username}')`}</Flex>),
                ...addIf(!hideNested,
                    <NestedContext
                        highlightLinkage={highlightLinkage1}
                        garbaged={garbaged}
                        key={uuidv4()}
                        showArgs={showArgs}
                        argsValues={user1Args}
                        showNewUser={showNewUser}
                        newUSerPropsIdx={newUSerPropsIdx}
                    />
                ),

                ...addIf(!hideNested2, <Flex key={uuidv4()}>{`createUser('${user2Args.name}', '${user2Args.username}')`}</Flex>),
                ...addIf(!hideNested2,
                    <NestedContext
                        highlightLinkage={highlightLinkage2}
                        garbaged={garbaged2}
                        key={uuidv4()}
                        showArgs={showArgs2}
                        argsValues={user2Args}
                        showNewUser={showNewUser2}
                        newUSerPropsIdx={newUSerPropsIdx2}
                    />
                )
            ]}
        />
    )
};

export default [
    {
        lineNumbers: ' ',
        render: <ToRender empty />
    },
    {
        lineNumbers: '1-6',
        render: <ToRender hideNested hideNested2 hideUser1 hideUser2 hideUserLogicStore hideUserLogicFuncs />
    },
    {
        lineNumbers: '8-12',
        render: <ToRender hideNested hideNested2 hideUser1 hideUser2 hideUserLogicFuncs />
    },
    {
        lineNumbers: '9-11',
        render: <ToRender hideNested hideNested2 hideUser1 hideUser2 />
    },
    {
        lineNumbers: '14',
        render: <ToRender hideNested hideNested2 hideUser2 />
    },
    {
        lineNumbers: '1',
        render: <ToRender showArgs hideNested2 hideUser2 />
    },
    {
        lineNumbers: '2',
        render: <ToRender showArgs hideNested2 hideUser2 showNewUser />
    },
    {
        lineNumbers: '2',
        render: <ToRender showArgs hideNested2 hideUser2 showNewUser highlightLinkage1 />
    },
    {
        lineNumbers: '3',
        render: <ToRender showArgs hideNested2 hideUser2 showNewUser highlightLinkage1 newUSerPropsIdx={1} />
    },
    {
        lineNumbers: '4',
        render: <ToRender showArgs hideNested2 hideUser2 showNewUser highlightLinkage1 newUSerPropsIdx={2} />
    },
    {
        lineNumbers: '5',
        render: <ToRender showArgs hideNested2 hideUser2 showNewUser highlightLinkage1 newUSerPropsIdx={2} />
    },
    {
        lineNumbers: '14',
        render: <ToRender showArgs hideNested2 hideUser2 showNewUser highlightLinkage1 newUSerPropsIdx={2} user1Global garbaged/>
    },
    {
        lineNumbers: '15',
        render: <ToRender showArgs hideNested2 showNewUser highlightLinkage1 newUSerPropsIdx={2} user1Global garbaged/>
    },
    {
        lineNumbers: '1',
        render: <ToRender showArgs showArgs2 showNewUser highlightLinkage1 newUSerPropsIdx={2} user1Global garbaged/>        
    },
    {
        lineNumbers: '2',
        render: <ToRender showArgs showArgs2 showNewUser showNewUser2 highlightLinkage1 highlightLinkage2 newUSerPropsIdx={2} user1Global garbaged/>         
    },
    {
        lineNumbers: '3',
        render: <ToRender showArgs showArgs2 showNewUser showNewUser2 highlightLinkage1 highlightLinkage2 newUSerPropsIdx={2} newUSerPropsIdx2={1} user1Global garbaged/>         
    },
    {
        lineNumbers: '4',
        render: <ToRender showArgs showArgs2 showNewUser showNewUser2 highlightLinkage1 highlightLinkage2 newUSerPropsIdx={2} newUSerPropsIdx2={2} user1Global garbaged/>                  
    },
    {
        lineNumbers: '5',
        render: <ToRender showArgs showArgs2 showNewUser showNewUser2 highlightLinkage1 highlightLinkage2 newUSerPropsIdx={2} newUSerPropsIdx2={2} user1Global garbaged/>                           
    },
    {
        lineNumbers: '15',
        render: <ToRender showArgs showArgs2 showNewUser showNewUser2 highlightLinkage1 highlightLinkage2 newUSerPropsIdx={2} newUSerPropsIdx2={2} user1Global user2Global garbaged garbaged2/>                                   
    },
    {
        lineNumbers: '16',
        render: <ToRender showArgs showArgs2 showNewUser showNewUser2 highlightLinkage1 highlightLinkage2 newUSerPropsIdx={2} newUSerPropsIdx2={2} user1Global user2Global garbaged garbaged2 />                                   
    },
    {
        lineNumbers: '16',
        render: <ToRender showLinkage1 protoValue={protoLinkToName} showArgs showArgs2 showNewUser showNewUser2 highlightLinkage1 highlightLinkage2 newUSerPropsIdx={2} newUSerPropsIdx2={2} user1Global user2Global garbaged garbaged2 />                                   
    },
    {
        lineNumbers: '17',
        render: <ToRender showLinkage1 protoValue={protoLinkToName} showLinkage2 showArgs showArgs2 showNewUser showNewUser2 highlightLinkage1 highlightLinkage2 newUSerPropsIdx={2} newUSerPropsIdx2={2} user1Global user2Global garbaged garbaged2 />                                   
    },
    {
        lineNumbers: ' ',
        render: <ToRender showLinkage1 protoValue={protoLinkToName} showLinkage2 showArgs showArgs2 showNewUser showNewUser2 highlightLinkage1 highlightLinkage2 newUSerPropsIdx={2} newUSerPropsIdx2={2} user1Global user2Global garbaged garbaged2 />                                   
    },
];