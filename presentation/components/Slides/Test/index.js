import React from 'react';
import {Text, Slide} from 'spectacle';
import Header from '../../Header';
import CodeBox from '../../CodeBox';
import code1 from '!raw-loader!./code1.js';
import code2 from '!raw-loader!./code2.js';
import code3 from '!raw-loader!./code3.js';


const codeArr = [code1, code2, code3];

const Test = ({ codeExample }) => (
    <Slide>
        <Header>{`Test #${codeExample}`}</Header>
        <Text textColor="#fff">Are you sure you know the answers?</Text>
        <CodeBox code={codeArr[codeExample - 1]} />
    </Slide>
);

export default Test;