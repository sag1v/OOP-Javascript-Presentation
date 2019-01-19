import React from 'react';
import Runcode from '../../Runcode';
import code from '!raw-loader!./code';
import content from './contextContent';

export default () => <Runcode code={code} contextContent={content} />