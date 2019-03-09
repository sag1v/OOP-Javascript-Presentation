import React from 'react';
import uuidv4 from 'uuid/v4';
import Diagram from '../../Diagram';
import { addIf } from '../utils';

const highlightColor = "#31ff00";
const highlightIf = condition => condition ? highlightColor : 'inherit';

const ToRender = ({
    empty,
    showUser,
    hideUserProto,
    showNativeObject,
    highlightName,
    highlightProtoLinkage,
    highlightNull
 }) => {
    return (
        <Diagram
            global
            hideExecutionContext
            memoryItems={empty ? [] : [
                ...addIf(
                    showUser,
                    <Diagram.Obj
                        hideProto={hideUserProto}
                        protoValue="Object.prototype"
                        name="user"
                        highlightLinkage={highlightIf(highlightProtoLinkage)}
                        props={[
                            <Diagram.PrimitiveMemory
                                highlightLinkage={highlightIf(highlightName)}
                                name="name" value="sagiv"
                            />
                        ]}
                    />

                ),
                ...addIf(
                    showNativeObject,
                    <Diagram.Func
                        name="Object"
                        isCombo
                        props={[
                            <Diagram.Obj
                                name="prototype"
                                protoValue="null"
                                highlightLinkage={highlightIf(highlightNull)}
                                props={[
                                    <Diagram.Func highlightLinkage={highlightIf(highlightProtoLinkage)} key={uuidv4()} name="hasOwnProperty" hideObject />,
                                    <Diagram.Func key={uuidv4()} name="toString" hideObject />,
                                    <Diagram.Func key={uuidv4()} name="valueOf" hideObject />
                                ]}
                            />
                        ]}
                    />

                )
            ]}
        />
    )
}


export default [
    { lineNumbers: '  ', render: <ToRender empty /> },
    { lineNumbers: '1-3', render: <ToRender showUser hideUserProto /> },
    { lineNumbers: '5', render: <ToRender showUser hideUserProto highlightName /> },
    { lineNumbers: '6', render: <ToRender showUser hideUserProto /> },
    { lineNumbers: '6', render: <ToRender showUser /> },
    { lineNumbers: '8', render: <ToRender showUser showNativeObject highlightProtoLinkage/> },
    { lineNumbers: '10', render: <ToRender showUser showNativeObject /> },
    { lineNumbers: '10', render: <ToRender showUser showNativeObject highlightNull /> },
    { lineNumbers: ' ', render: <ToRender showUser showNativeObject /> },
];