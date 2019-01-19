import React from 'react';
import PropTypes from 'prop-types';
import CodeSample from '../../CodeSample';
import Runcode from '../../Runcode';
import literal from '!raw-loader!./literalCode';
import dotNotation from '!raw-loader!./dotNotationCode';
import objectCreate from '!raw-loader!./objectCreateCode';
import functionFactory from '!raw-loader!./functionCode';
import contextContent from './contextContent';


const createObjectWith = {
	literal: {
		title: "Object Literal",
		code: literal
	},
	dotNotation: {
		title: "Dot Notation",
		code: dotNotation
	},
	objectCreate: {
		title: "Object.create",
		code: objectCreate
	},
	functionFactory: {
		title: "Automating",
		code: functionFactory
	},
};


const functionExampleCode = createObjectWith.functionFactory.code;

const CreatingObjects = ({ createUsing, runCode }) => runCode
	? <Runcode code={functionExampleCode} contextContent={contextContent} />
	: <CodeSample code={createObjectWith[createUsing].code} title={createObjectWith[createUsing].title} />

const typeKeys = Object.keys(createObjectWith);

CreatingObjects.propTypes = {
	createUsing: PropTypes.oneOf([...typeKeys])
};

export default CreatingObjects;