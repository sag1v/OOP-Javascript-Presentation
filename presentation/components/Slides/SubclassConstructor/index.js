import React from 'react';
import code from '!raw-loader!./code';
import Runcode from '../../Runcode';
import contentContext from './contentContext';


class SubclassConstructor extends React.Component {
    render() {
        return <Runcode compactCode code={code} contextContent={contentContext}/>;
    }
}

export default SubclassConstructor;