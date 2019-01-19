import React from 'react';
import uuidv4 from 'uuid/v4';
import Flex from '../../Flex';
import Diagram from '../../Diagram';
import { addIf } from '../utils';

const ToRender = ({ empty, hideDouble, showCombo, showSomeProp }) => {
    return (
        <Diagram
            global
            memoryItems={empty ? [] : [
                ...addIf(
                    !hideDouble,
                    <Diagram.Func key={uuidv4()} name="double" hideObject={!showCombo} isCombo={showCombo} props={[...addIf(showSomeProp, <Diagram.PrimitiveMemory name="someProp" value="Hi there!"/>)]} />
                )
            ]}
            threadItems={empty ? [] : [

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
    { lineNumbers: ' ', render: <ToRender showCombo showSomeProp /> },

];