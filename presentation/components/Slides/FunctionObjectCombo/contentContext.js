import React from 'react';
import uuidv4 from 'uuid/v4';
import Diagram from '../../Diagram';
import { addIf } from '../utils';

const ToRender = ({ empty, hideDouble, showCombo, showSomeProp, showPrototype }) => {
    return (
        <Diagram
            global
            hideExecutionContext
            memoryItems={empty ? [] : [
                ...addIf(
                    !hideDouble,
                    <Diagram.Func 
                        key={uuidv4()}
                        name="double"
                        hideObject={!showCombo}
                        isCombo={showCombo}
                        props={[
                            ...addIf(showPrototype, <Diagram.Obj name="prototype" hideProto/>),
                            ...addIf(showSomeProp, <Diagram.PrimitiveMemory name="someProp" value="Hi there!"/>),
                        ]} 
                            />
                )
            ]}
        />
    )
}


export default [
    { lineNumbers: '  ', render: <ToRender hideDouble /> },
    { lineNumbers: '1-3', render: <ToRender /> },
    { lineNumbers: '5', render: <ToRender /> },
    { lineNumbers: '5', render: <ToRender showCombo /> },
    { lineNumbers: '5', render: <ToRender showCombo showSomeProp /> },
    { lineNumbers: '7', render: <ToRender showCombo showSomeProp /> },
    { lineNumbers: '8', render: <ToRender showCombo showSomeProp /> },
    { lineNumbers: '10', render: <ToRender showCombo showSomeProp showPrototype /> },
    { lineNumbers: ' ', render: <ToRender showCombo showSomeProp showPrototype /> },

];