import React from 'react';
import uuidv4 from 'uuid/v4';
import Diagram from '../../Diagram';
import { addIf } from '../utils';

const highlightColor = "#31ff00";
const highlightIf = condition => condition ? highlightColor : '';

const userfuncName = "User";
const groupUserFuncName = "GroupUser";

const Primitives = ({ obj }) => (
    <React.Fragment>
        {
            Object.entries(obj)
                .map(([key, value]) => (
                    <Diagram.PrimitiveMemory key={`${key}_${value}`} name={key} value={value} />
                ))
        }
    </React.Fragment>
);


const ToRender = ({
    showUser,
    showUserPrototype,
    showGroupUser,
    showGroupUserPrototype,
    mutateGroupProto,
    showUser1,
    user1Undef,
    showMemberUser,
    memberUserUndef,
    highlightUser1Chain,
    highlightGroupUserChain,
    highlightSubChainMemberUser,
    showUser1thread,
    showUser1Context,
    showThisNameUser1,
    gcUser1Context,
    showMemberUserContext,
    gcMemberUserContext,
    showUserCallThis,
    showThisGroupNameMemberUser,
    showUserCallThisContext,
    showThisNameMemberUser,
    gcCallUser
}) => (
        <Diagram
            global
            memoryItems={[
                ...addIf(showUser,
                    <Diagram.Func name={userfuncName}
                        hideProto
                        highlightLinkage={highlightIf(highlightUser1Chain || highlightSubChainMemberUser)}
                        props={[
                            <Diagram.Obj
                                name="prototype"
                                protoValue="Object.prototype"
                                highlightLinkageNoProto={highlightIf(highlightUser1Chain || highlightSubChainMemberUser)}
                                props={[
                                    ...addIf(showUserPrototype,
                                        <Diagram.Func
                                            name="sayHi"
                                            hideObject
                                            highlightLinkage={highlightIf(highlightUser1Chain || highlightSubChainMemberUser)}
                                        />
                                    )
                                ]}
                            />
                        ]}
                    />
                ),
                ...addIf(showGroupUser,
                    <Diagram.Func
                        name={groupUserFuncName}
                        hideProto
                        highlightLinkage={highlightIf(highlightGroupUserChain || highlightSubChainMemberUser)}
                        props={[
                            <Diagram.Obj
                                name="prototype"
                                protoValue={mutateGroupProto ? `${userfuncName}.prototype` : "Object.prototype"}
                                highlightLinkage={highlightIf(highlightSubChainMemberUser)}
                                highlightLinkageNoProto={highlightIf(highlightGroupUserChain)}
                                props={[
                                    ...addIf(showGroupUserPrototype, <Diagram.Func highlightLinkage={highlightIf(highlightGroupUserChain)} name="getGroup" hideObject />)
                                ]}
                            />
                        ]}
                    />
                ),
                ...addIf(showUser1,
                    <Diagram.Obj
                        isUndefined={user1Undef}
                        name="user1"
                        protoValue={`${userfuncName}.prototype`}
                        highlightLinkage={highlightIf(highlightUser1Chain)}
                        props={[<Diagram.PrimitiveMemory name="name" value="Sagiv" />]}
                    />
                ),
                ...addIf(showMemberUser,
                    <Diagram.Obj
                        isUndefined={memberUserUndef}
                        name="memberUser"
                        protoValue={`${groupUserFuncName}.prototype`}
                        highlightLinkage={highlightIf(highlightGroupUserChain || highlightSubChainMemberUser)}
                        props={[
                            <Diagram.PrimitiveMemory name="name" value="John" />,
                            <Diagram.PrimitiveMemory name="groupName" value="customers" />
                        ]}
                    />
                )
            ]}
            threadItems={[
                ...addIf(showUser1thread, "user1 = new User('Sagiv')"),
                ...addIf(showUser1Context,
                    <Diagram
                        garbaged={gcUser1Context}
                        memoryItems={[
                            <Diagram.PrimitiveMemory name="name" value="Sagiv" />,
                            <Diagram.Obj
                                name="this"
                                protoValue={`${userfuncName}.prototype`}
                                props={[
                                    ...addIf(showThisNameUser1, <Diagram.PrimitiveMemory name="name" value="Sagiv" />)
                                ]}
                            />
                        ]}
                        threadItems={[
                            ...addIf(showThisNameUser1, "this.name = name")
                        ]}
                    />
                ),
                ...addIf(showMemberUser, "memberUser = new GroupUser('John', 'customers')"),
                ...addIf(showMemberUserContext,
                    <Diagram
                        garbaged={gcMemberUserContext}
                        memoryItems={[
                            <Diagram.PrimitiveMemory name="name" value="John" />,
                            <Diagram.PrimitiveMemory name="groupName" value="customers" />,
                            <Diagram.Obj
                                name="this"
                                protoValue={`${groupUserFuncName}.prototype`}
                                props={[
                                    ...addIf(showThisGroupNameMemberUser, <Diagram.PrimitiveMemory name="groupName" value="customers" />),
                                    ...addIf(showThisNameMemberUser, <Diagram.PrimitiveMemory name="name" value="John" />),
                                ]}
                            />
                        ]}
                        threadItems={[
                            ...addIf(showUserCallThis, "User.call(this, name)"),
                            ...addIf(showUserCallThisContext,
                                <Diagram
                                    hideExecutionContext
                                    garbaged={gcCallUser}
                                    memoryItems={[
                                        <Diagram.PrimitiveMemory name="name" value="John" />,
                                        <Diagram.Obj
                                            name="this"
                                            protoValue={`${groupUserFuncName}.prototype`}
                                            props={[
                                                <Diagram.PrimitiveMemory name="groupName" value="customers" />,
                                                ...addIf(showThisNameMemberUser, <Diagram.PrimitiveMemory name="name" value="John" />)
                                            ]}
                                        />
                                    ]}
                                />
                            ),
                            ...addIf('', "this.groupName = groupName")
                        ]}
                    />
                ),
            ]}
        />
    );


export default [
    { lineNumbers: ' ', render: <ToRender /> },
    { lineNumbers: '1-3', render: <ToRender showUser /> },
    { lineNumbers: '5-7', render: <ToRender showUser showUserPrototype /> },
    { lineNumbers: '11-14', render: <ToRender showUser showUserPrototype showGroupUser /> },
    { lineNumbers: '16-18', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype /> },
    { lineNumbers: '20', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto /> },
    /* create user1 */
    { lineNumbers: '24', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUser1 user1Undef showUser1thread /> },
    { lineNumbers: '1', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUser1 user1Undef showUser1thread showUser1Context /> },
    { lineNumbers: '2', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUser1 user1Undef showUser1thread showUser1Context showThisNameUser1 /> },
    { lineNumbers: '24', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUser1 showUser1thread showUser1Context showThisNameUser1 gcUser1Context /> },
    /* EOF create user1 */
    { lineNumbers: '25', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUser1 highlightUser1Chain showUser1thread showUser1Context showThisNameUser1 gcUser1Context /> },
    /* create group member */
    { lineNumbers: '27', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUser1 showUser1thread showUser1Context showMemberUser memberUserUndef showThisNameUser1 gcUser1Context /> },
    { lineNumbers: '11', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUser1 showUser1thread showUser1Context showMemberUser memberUserUndef showThisNameUser1 showMemberUserContext gcUser1Context /> },
    { lineNumbers: '12', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUser1 showUser1thread showUser1Context showMemberUser memberUserUndef showMemberUserContext showThisNameUser1 gcUser1Context showThisGroupNameMemberUser /> },
    { lineNumbers: '13', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUser1 showUser1thread showUser1Context showMemberUser memberUserUndef showUserCallThis showMemberUserContext showThisNameUser1 gcUser1Context showThisGroupNameMemberUser /> },
    { lineNumbers: '1', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUser1 showUser1thread showUser1Context showMemberUser memberUserUndef showUserCallThis showMemberUserContext showThisNameUser1 gcUser1Context showUserCallThisContext showThisGroupNameMemberUser /> },
    { lineNumbers: '2', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUser1 showUser1thread showUser1Context showMemberUser memberUserUndef showUserCallThis showMemberUserContext showThisNameUser1 gcUser1Context showUserCallThisContext showThisNameMemberUser showThisGroupNameMemberUser /> },
    { lineNumbers: '13', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUser1 showUser1thread showUser1Context showMemberUser memberUserUndef showUserCallThis showMemberUserContext showThisNameUser1 gcUser1Context showUserCallThisContext showThisNameMemberUser gcCallUser showThisGroupNameMemberUser /> },
    { lineNumbers: '27', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUser1 showUser1thread showUser1Context showMemberUser showUserCallThis showThisNameUser1 showMemberUserContext gcUser1Context showUserCallThisContext showThisNameMemberUser showThisGroupNameMemberUser gcCallUser gcMemberUserContext showThisGroupNameMemberUser /> },
    /* EOF create group member */
    { lineNumbers: '28', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUser1 showUser1thread showUser1Context showMemberUser highlightGroupUserChain showUserCallThis showMemberUserContext showThisNameUser1 gcUser1Context showUserCallThisContext showThisNameMemberUser showThisGroupNameMemberUser gcCallUser gcMemberUserContext showThisGroupNameMemberUser /> },
    { lineNumbers: '29', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUser1 showUser1thread showUser1Context showMemberUser highlightSubChainMemberUser showUserCallThis showMemberUserContext showThisNameUser1 gcUser1Context showUserCallThisContext showThisNameMemberUser showThisGroupNameMemberUser gcCallUser gcMemberUserContext showThisGroupNameMemberUser /> },
    { lineNumbers: ' ', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUser1 showUser1thread showUser1Context showMemberUser showUserCallThis showThisNameUser1 showMemberUserContext gcUser1Context showUserCallThisContext showThisNameMemberUser showThisGroupNameMemberUser gcCallUser gcMemberUserContext showThisGroupNameMemberUser /> },
];