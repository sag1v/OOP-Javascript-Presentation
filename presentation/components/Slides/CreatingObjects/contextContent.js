import React from 'react';
import uuidv4 from 'uuid/v4';
import Flex from '../../Flex';
import Diagram from '../../Diagram';
import {addIf} from '../utils';

const newUserProps = ({name, username}) => [
    <Diagram.PrimitiveMemory key={uuidv4()} name="name" value={name} />,
    <Diagram.PrimitiveMemory key={uuidv4()} name="username" value={username} />,
    <Diagram.Func key={uuidv4()} name="sayHi" hideObject />
];

const user1Args = {name: "Sagiv", username: "sag1v"};
const user2Args = {name: "John", username: "john77"};

const NestedContext = ({ showArgs, argsValues = {}, showNewUser, newUSerPropsIdx = 0, garbaged }) => {
    const newUSerPropsToShow = newUserProps({...argsValues}).slice(0, newUSerPropsIdx);
    return (
        <Diagram
            garbaged={garbaged}
            memoryItems={!showArgs ? [] : [
                <Diagram.PrimitiveMemory key={uuidv4()} name="name" value={argsValues.name} />,
                <Diagram.PrimitiveMemory key={uuidv4()} name="username" value={argsValues.username} />,
                ...addIf(showNewUser,
                    <Diagram.Obj key={uuidv4()} hideProto name="newUser" props={newUSerPropsToShow} />
                )
            ]}
            threadItems={[

            ]}
        />
    );
}

const ToRender = ({
    empty = false,
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
    highlight2
}) => {
    const User1 = user1Global ? Diagram.Obj : Diagram.PrimitiveMemory;
    const User2 = user2Global ? Diagram.Obj : Diagram.PrimitiveMemory;
    return (
        <Diagram
            global
            memoryItems={empty ? [] : [
                <Diagram.Func key={uuidv4()} name="createUser" hideObject isCombo={false} />,
                ...addIf(!hideUser1, <User1 highlight={highlight1 ? "#f44336" : ""} hideProto key={uuidv4()} name="user1" props={user1Global ? newUserProps({...user1Args}) : []} />),
                ...addIf(!hideUser2, <User2 highlight={highlight2 ? "#4caf50" : ""} hideProto key={uuidv4()} name="user2" props={user2Global ? newUserProps({...user2Args}) : []} />)
            ]}
            threadItems={empty ? [] : [
                ...addIf(!hideNested, <Flex key={uuidv4()}>{`createUser('${user1Args.name}', '${user1Args.username}')`}</Flex>),
                ...addIf(!hideNested,
                    <NestedContext
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
        lineNumbers: '1-9',
        render: <ToRender hideNested hideNested2 hideUser1 hideUser2 />
    },
    {
        lineNumbers: '11',
        render: <ToRender hideNested hideNested2 hideUser2 />
    },
    {
        lineNumbers: '1',
        render: <ToRender showArgs hideNested2 hideUser2 />
    },
    {
        lineNumbers: '2',
        render: <ToRender showArgs showNewUser hideNested2 hideUser2 />
    },
    {
        lineNumbers: '3',
        render: <ToRender showArgs showNewUser newUSerPropsIdx={1} hideNested2 hideUser2 />
    },
    {
        lineNumbers: '4',
        render: <ToRender showArgs showNewUser newUSerPropsIdx={2} hideNested2 hideUser2 />
    },
    {
        lineNumbers: '5-7',
        render: <ToRender showArgs showNewUser newUSerPropsIdx={3} hideNested2 hideUser2 />
    },
    {
        lineNumbers: '8,11',
        render: <ToRender showArgs showNewUser user1Global newUSerPropsIdx={3} garbaged hideNested2 hideUser2 />
    },
    {
        lineNumbers: '12',
        render: <ToRender showArgs showNewUser user1Global newUSerPropsIdx={3} garbaged hideNested2 />
    },
    {
        lineNumbers: '1',
        render: <ToRender showArgs showNewUser user1Global newUSerPropsIdx={3} garbaged showArgs2 />
    },
    {
        lineNumbers: '2',
        render: <ToRender showArgs showNewUser user1Global newUSerPropsIdx={3} garbaged showArgs2 showNewUser2 />
    },
    {
        lineNumbers: '3',
        render: <ToRender showArgs showNewUser user1Global newUSerPropsIdx={3} garbaged showArgs2 showNewUser2 newUSerPropsIdx2={1} />
    },
    {
        lineNumbers: '4',
        render: <ToRender showArgs showNewUser user1Global newUSerPropsIdx={3} garbaged showArgs2 showNewUser2 newUSerPropsIdx2={2} />
    },
    {
        lineNumbers: '5-7',
        render: <ToRender showArgs showNewUser user1Global newUSerPropsIdx={3} garbaged showArgs2 showNewUser2 newUSerPropsIdx2={3} />
    },
    {
        lineNumbers: '8,12',
        render: <ToRender showArgs showNewUser user1Global newUSerPropsIdx={3} garbaged showArgs2 showNewUser2 user2Global newUSerPropsIdx2={3} garbaged2 />
    },
    {
        lineNumbers: '13',
        render: <ToRender showArgs showNewUser user1Global newUSerPropsIdx={3} garbaged showArgs2 showNewUser2 user2Global newUSerPropsIdx2={3} garbaged2 highlight1/>
    },
    {
        lineNumbers: '14',
        render: <ToRender showArgs showNewUser user1Global newUSerPropsIdx={3} garbaged showArgs2 showNewUser2 user2Global newUSerPropsIdx2={3} garbaged2 highlight2/>
    },
];