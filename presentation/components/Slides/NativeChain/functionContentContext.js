import React from 'react';
import uuidv4 from 'uuid/v4';
import Diagram from '../../Diagram';
import { addIf } from '../utils';

const highlightColor = "#31ff00";
const highlightIf = condition => condition ? highlightColor : 'inherit';

const prototypeName = 'prototype';

const ToRender = ({
    empty,
    showDouble,
    hideDoubleObject,
    showFunction,
    hideFunctionProto,
    showObject,
    highlightFunctionLink,
    highlightObjectLink,
}) => {
    return (
        <Diagram
            global
            hideExecutionContext
            memoryItems={empty ? [] : [
                ...addIf(showDouble,
                    <Diagram.Func
                        name="double"
                        hideObject={hideDoubleObject}
                        highlightLinkage={highlightIf(highlightFunctionLink || highlightObjectLink)}
                        hideProto={false}
                        protoValue={`Function.${prototypeName}`}
                        props={[
                            <Diagram.Obj
                                hideProto
                                name={prototypeName}
                            />
                        ]}
                    />),
                ...addIf(showFunction,
                    <Diagram.Func
                        name="Function"
                        props={[
                            <Diagram.Obj
                                name={prototypeName}
                                hideProto={hideFunctionProto}
                                protoValue={`Object.${prototypeName}`}
                                highlightLinkage={highlightIf(highlightFunctionLink || highlightObjectLink)}
                                props={[
                                    <Diagram.Func key={uuidv4()} name="call" hideObject />,
                                    <Diagram.Func key={uuidv4()} name="apply" hideObject />,
                                    <Diagram.Func key={uuidv4()} name="bind" hideObject />,
                                    <Diagram.Func key={uuidv4()} name="toString" hideObject highlightLinkage={highlightIf(highlightFunctionLink)} />,
                                ]}
                            />
                        ]}
                    />),
                ...addIf(showObject,
                    <Diagram.Func
                        name="Object"
                        isCombo
                        highlightLinkage={highlightIf(highlightObjectLink)}
                        props={[
                            <Diagram.Obj
                                name={prototypeName}
                                protoValue=" null "
                                props={[
                                    <Diagram.Func key={uuidv4()} name="toString" hideObject />,
                                    <Diagram.Func key={uuidv4()} name="valueOf" hideObject />,
                                    <Diagram.Func key={uuidv4()} name="hasOwnProperty" hideObject highlightLinkage={highlightIf(highlightObjectLink)} />,
                                ]}
                            />
                        ]}
                    />)
            ]}
        />
    )
}


export default [
    { lineNumbers: '  ', render: <ToRender empty /> },
    { lineNumbers: '1-3', render: <ToRender showDouble hideDoubleObject /> },
    { lineNumbers: '5', render: <ToRender showDouble hideDoubleObject /> },
    { lineNumbers: '5', render: <ToRender showDouble /> },
    { lineNumbers: '5', render: <ToRender showDouble showFunction hideFunctionProto /> },
    { lineNumbers: '7', render: <ToRender showDouble showFunction hideFunctionProto highlightFunctionLink /> },
    { lineNumbers: '9', render: <ToRender showDouble showFunction hideFunctionProto /> },
    { lineNumbers: '9', render: <ToRender showDouble showFunction /> },
    { lineNumbers: '9', render: <ToRender showDouble showFunction showObject /> },
    { lineNumbers: '11', render: <ToRender showDouble showFunction showObject highlightObjectLink /> },
    { lineNumbers: ' ', render: <ToRender showDouble showFunction showObject /> },
];