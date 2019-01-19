import React from 'react';
import Runcode from '../../Runcode';
import code from '!raw-loader!./code';
import contentContext from './contentContext';

class FunctionObjectCombo extends React.Component {
    
    render() {
        return (
            <Runcode code={code} contextContent={contentContext}/>
        );
    }
}



export default FunctionObjectCombo;