import React from 'react';
import uuidv4 from 'uuid/v4';
import Diagram from '../../Diagram';
import { addIf } from '../utils';

const highlightColor = "#31ff00";
const highlightIf = condition => condition ? highlightColor : '';

const userfuncName = "User";
const groupUserFuncName = "GroupUser";

const ToRender = ({
    showUser,
    showUserPrototype,
    showGroupUser,
    showGroupUserPrototype,
    showUserProto,
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
    showThisGroupNameMemberUser,
    showUserCallThisContext,
    showThisNameMemberUser,
    gcCallUser
}) => (
        <Diagram
            global
            memoryItems={[
                ...addIf(showUser,
                    <Diagram.Func
                        isClass
                        name={userfuncName}
                        hideProto={!showUserProto}
                        protoValue="Function.prototype"
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
                        isClass
                        name={groupUserFuncName}
                        hideProto={false}
                        protoValue={userfuncName}
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
                            gcCallUser
                                ? <Diagram.Obj
                                    name="this"
                                    protoValue={`${groupUserFuncName}.prototype`}
                                    props={[
                                        <Diagram.PrimitiveMemory name="name" value="John" />,
                                        ...addIf(showThisGroupNameMemberUser, <Diagram.PrimitiveMemory name="groupName" value="customers" />),
                                    ]}
                                />
                                : <Diagram.PrimitiveMemory name="this" value="--Uninitialized--" />
                        ]}
                        threadItems={[
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
    { lineNumbers: '1-8', render: <ToRender showUser showUserPrototype /> },
    { lineNumbers: '12-22', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto /> },
    { lineNumbers: '12-22', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUserProto /> },
    /* create user1 */
    { lineNumbers: '26', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUser1 user1Undef showUser1thread showUserProto /> },
    { lineNumbers: '2', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUser1 user1Undef showUser1thread showUser1Context showUserProto /> },
    { lineNumbers: '3', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUser1 user1Undef showUser1thread showUser1Context showThisNameUser1 showUserProto /> },
    { lineNumbers: '26', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUser1 showUser1thread showUser1Context showThisNameUser1 gcUser1Context showUserProto /> },
    /* EOF create user1 */
    { lineNumbers: '27', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUser1 highlightUser1Chain showUser1thread showUser1Context showThisNameUser1 gcUser1Context showUserProto /> },
    /* create group member */
    { lineNumbers: '29', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUser1 showUser1thread showUser1Context showMemberUser memberUserUndef showThisNameUser1 gcUser1Context showUserProto /> },
    { lineNumbers: '13', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUser1 showUser1thread showUser1Context showMemberUser memberUserUndef showThisNameUser1 showMemberUserContext gcUser1Context showUserProto /> },
    { lineNumbers: '15', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUser1 showUser1thread showUser1Context showMemberUser memberUserUndef showMemberUserContext showThisNameUser1 gcUser1Context showUserProto /> },
    { lineNumbers: '2', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUser1 showUser1thread showUser1Context showMemberUser memberUserUndef showMemberUserContext showThisNameUser1 gcUser1Context showUserCallThisContext showUserProto /> },
    { lineNumbers: '3', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUser1 showUser1thread showUser1Context showMemberUser memberUserUndef showMemberUserContext showThisNameUser1 gcUser1Context showUserCallThisContext showThisNameMemberUser showUserProto /> },
    { lineNumbers: '15', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUser1 showUser1thread showUser1Context showMemberUser memberUserUndef showMemberUserContext showThisNameUser1 gcUser1Context showUserCallThisContext showThisNameMemberUser gcCallUser showUserProto /> },
    { lineNumbers: '17', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUser1 showUser1thread showUser1Context showMemberUser memberUserUndef showMemberUserContext showThisNameUser1 gcUser1Context showUserCallThisContext showThisNameMemberUser gcCallUser showThisGroupNameMemberUser showUserProto /> },
    { lineNumbers: '29', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUser1 showUser1thread showUser1Context showMemberUser showThisNameUser1 showMemberUserContext gcUser1Context showUserCallThisContext showThisNameMemberUser showThisGroupNameMemberUser gcCallUser gcMemberUserContext showThisGroupNameMemberUser showUserProto /> },
    /* EOF create group member */
    { lineNumbers: '30', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUser1 showUser1thread showUser1Context showMemberUser highlightGroupUserChain showMemberUserContext showThisNameUser1 gcUser1Context showUserCallThisContext showThisNameMemberUser showThisGroupNameMemberUser gcCallUser gcMemberUserContext showThisGroupNameMemberUser showUserProto /> },
    { lineNumbers: '31', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUser1 showUser1thread showUser1Context showMemberUser highlightSubChainMemberUser showMemberUserContext showThisNameUser1 gcUser1Context showUserCallThisContext showThisNameMemberUser showThisGroupNameMemberUser gcCallUser gcMemberUserContext showThisGroupNameMemberUser showUserProto /> },
    { lineNumbers: ' ', render: <ToRender showUser showUserPrototype showGroupUser showGroupUserPrototype mutateGroupProto showUser1 showUser1thread showUser1Context showMemberUser showThisNameUser1 showMemberUserContext gcUser1Context showUserCallThisContext showThisNameMemberUser showThisGroupNameMemberUser gcCallUser gcMemberUserContext showThisGroupNameMemberUser showUserProto /> },
];