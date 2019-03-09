import React from 'react';
import code from '!raw-loader!./code';
import Runcode from '../../Runcode';
import contentContext from './contentContext';


class SubclassFactory extends React.Component {
    render() {
        return <Runcode code={code} contextContent={contentContext}/>;
    }
}

export default SubclassFactory;