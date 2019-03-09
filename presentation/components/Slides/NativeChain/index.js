import React from 'react';
import nativeObjectcode from '!raw-loader!./nativeObjectcode';
import nativeFunctionCode from '!raw-loader!./nativeFunctionCode';
import Runcode from '../../Runcode';
import objectContentContext from './objectContentContext';
import functionContentContext from './functionContentContext';


class NativeChain extends React.Component {
    render() {
        const {showSubClassing} = this.props;
        return (
            showSubClassing
            ? <Runcode code={nativeFunctionCode} contextContent={functionContentContext}/> 
            : <Runcode code={nativeObjectcode} contextContent={objectContentContext}/>
        );
    }
}

export default NativeChain;