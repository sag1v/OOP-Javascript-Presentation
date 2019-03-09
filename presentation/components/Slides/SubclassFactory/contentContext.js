import React from 'react';
import uuidv4 from 'uuid/v4';
import Diagram from '../../Diagram';
import { addIf } from '../utils';

const highlightColor = "#31ff00";
const highlightIf = condition => condition ? highlightColor : 'inherit';

const userStoreName = "userLogic";
const memberStoreName = "memberStore";

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

const NestedExecuation = ({
    memory,
    showObj,
    newObjName,
    protoValue,
    newPropName,
    newPropValue,
    showNewProp,
    returnNewObj,
    garbaged,
    showNestedExec,
    noThread,
    bordered
}) => (
        <Diagram
            bordered={bordered}
            garbaged={garbaged}
            hideExecutionContext={noThread}
            memoryItems={[
                <Primitives obj={memory} />,
                ...addIf(showObj,
                    <Diagram.Obj
                        name={newObjName}
                        protoValue={protoValue}
                        props={[
                            ...addIf(showNewProp, <Diagram.PrimitiveMemory name={newPropName} value={newPropValue} />)
                        ]}
                    />
                ),
            ]}
            threadItems={[
                ...addIf(showObj, `${newObjName} = Object.create(${userStoreName})`),
                ...addIf(showNewProp, `${newObjName}.name = ${newPropName}`),
                ...addIf(returnNewObj, `return ${newObjName}`),
                ...addIf(showNestedExec,
                    <NestedExecuation
                        bordered
                        memory={{ name: "John" }}
                        showObj
                        newObjName="newUser"
                        protoValue={userStoreName}
                        newPropName="name"
                        newPropValue="John"
                        showNewProp
                        returnNewObj
                        noThread
                        garbaged={false}
                    />
                )
            ]}
        />
    );

const ToRender = ({
    empty,
    hideCreateMember,
    hideUserStore,
    hideMemberStore,
    memberStoreLinked,
    highlightMemberLink,
    showUser,
    userUndef,
    showCreateUserCommand,
    showCreateUserExec,
    showNewUserObj,
    showNewUserName,
    returnNewUser,
    gcNewUser,
    highlightUser1Link,
    showUserLogicProto,
    showMemberUser,
    memberUserUndef,
    showCreateMemberCommand,
    showCreateMemberExec,
    showNewMemberObj,
    showNewMemberName,
    returnNewMember,
    gcNewMember,
    showCreateUserNestedExec
}) => {
    return (
        <Diagram
            global
            memoryItems={empty ? [] : [
                <Diagram.Func name="createUser" hideObject />,
                ...addIf(!hideUserStore,
                    <Diagram.Obj
                        name={userStoreName}
                        hideProto={!showUserLogicProto}
                        protoValue="Object.prototype"
                        highlightLinkage={highlightIf(highlightUser1Link)}
                        props={[
                            <Diagram.Func
                                hideObject
                                name="sayHi"
                                highlightLinkage={highlightIf(highlightUser1Link)}
                            />
                        ]}
                    />
                ),
                ...addIf(!hideCreateMember,
                    <Diagram.Func
                        name="createGroupMember"
                        hideObject
                    />
                ),
                ...addIf(!hideMemberStore,
                    <Diagram.Obj
                        name={memberStoreName}
                        protoValue={memberStoreLinked ? userStoreName : "Object.prototype"}
                        highlightLinkage={highlightIf(highlightMemberLink)}
                        props={[
                            <Diagram.Func
                                hideObject
                                name="getGroup"
                            />
                        ]}
                    />
                ),
                ...addIf(showUser,
                    <Diagram.Obj
                        name="user1"
                        isUndefined={userUndef}
                        protoValue={userStoreName}
                        highlightLinkage={highlightIf(highlightUser1Link)}
                        props={[
                            <Diagram.PrimitiveMemory name="name" value="Sagiv" />
                        ]}
                    />
                ),
                ...addIf(showMemberUser,
                    <Diagram.Obj
                        name="memberUser"
                        isUndefined={memberUserUndef}
                        protoValue={memberStoreName}
                        highlightLinkage={highlightIf(highlightUser1Link)}
                        props={[
                            <Diagram.PrimitiveMemory name="name" value="John" />,
                            <Diagram.PrimitiveMemory name="groupName" value="customers" />
                        ]}
                    />
                )
            ]}
            threadItems={[
                ...addIf(showCreateUserCommand, "user1 = createUser('Sagiv')"),
                ...addIf(showCreateUserExec,
                    <NestedExecuation
                        memory={{ name: "Sagiv" }}
                        showObj={showNewUserObj}
                        newObjName="newUser"
                        protoValue={userStoreName}
                        newPropName="name"
                        newPropValue="Sagiv"
                        showNewProp={showNewUserName}
                        returnNewObj={returnNewUser}
                        garbaged={gcNewUser}
                    />
                ),

                ...addIf(showCreateMemberCommand, "memberUser = createGroupMember('John', 'customers')"),
                ...addIf(showCreateMemberExec,
                    <NestedExecuation
                        memory={{ name: "John", groupName: "customers" }}
                        showObj={showNewMemberObj}
                        newObjName="newMemberUser "
                        protoValue={userStoreName}
                        newPropName="groupName"
                        newPropValue="customers"
                        showNewProp={showNewMemberName}
                        returnNewObj={returnNewMember}
                        garbaged={gcNewMember}
                        showNestedExec={showCreateUserNestedExec}
                    />
                )
            ]}
        />
    )
}


export default [
    { lineNumbers: ' ', render: <ToRender empty /> },
    { lineNumbers: '1-5', render: <ToRender hideUserStore hideCreateMember hideMemberStore /> },
    { lineNumbers: '6-10', render: <ToRender hideCreateMember hideMemberStore /> },
    { lineNumbers: '12-17', render: <ToRender hideMemberStore /> },
    { lineNumbers: '18-22', render: <ToRender /> },
    { lineNumbers: '23', render: <ToRender /> },
    { lineNumbers: '23', render: <ToRender memberStoreLinked /> },
    { lineNumbers: '23', render: <ToRender memberStoreLinked highlightMemberLink /> },
    { lineNumbers: '25', render: <ToRender memberStoreLinked showUser userUndef showCreateUserCommand /> },
    { lineNumbers: '1', render: <ToRender memberStoreLinked showUser userUndef showCreateUserCommand showCreateUserExec /> },
    { lineNumbers: '2', render: <ToRender memberStoreLinked showUser userUndef showCreateUserCommand showCreateUserExec showNewUserObj /> },
    { lineNumbers: '3', render: <ToRender memberStoreLinked showUser userUndef showCreateUserCommand showCreateUserExec showNewUserObj showNewUserName /> },
    { lineNumbers: '3', render: <ToRender memberStoreLinked showUser userUndef showCreateUserCommand showCreateUserExec showNewUserObj showNewUserName returnNewUser /> },
    { lineNumbers: '4', render: <ToRender memberStoreLinked showUser userUndef showCreateUserCommand showCreateUserExec showNewUserObj showNewUserName returnNewUser /> },
    { lineNumbers: '25', render: <ToRender memberStoreLinked showUser showCreateUserCommand showCreateUserExec showNewUserObj showNewUserName returnNewUser gcNewUser /> },
    { lineNumbers: '26', render: <ToRender memberStoreLinked showUser showCreateUserCommand showCreateUserExec showNewUserObj showNewUserName returnNewUser gcNewUser highlightUser1Link /> },
    /****** group member ******/
    {
        lineNumbers: '28', render:
            <ToRender
                memberStoreLinked
                showUser
                showCreateUserCommand
                showCreateUserExec
                showNewUserObj
                showNewUserName
                returnNewUser
                gcNewUser
                showMemberUser
                memberUserUndef
                showCreateMemberCommand
            />
    },
    {
        lineNumbers: '12', render:
            <ToRender
                memberStoreLinked
                showUser
                showCreateUserCommand
                showCreateUserExec
                showNewUserObj
                showNewUserName
                returnNewUser
                gcNewUser
                showMemberUser
                memberUserUndef
                showCreateMemberCommand
                showCreateMemberExec
            />
    },
    {
        lineNumbers: '13', render:
            <ToRender
                memberStoreLinked
                showUser
                showCreateUserCommand
                showCreateUserExec
                showNewUserObj
                showNewUserName
                returnNewUser
                gcNewUser
                showMemberUser
                memberUserUndef
                showCreateMemberCommand
                showCreateMemberExec
                showCreateUserNestedExec
            />
    },
    { lineNumbers: ' ', render: <ToRender memberStoreLinked /> },
];