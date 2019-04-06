import React from 'react';
import PropTypes from 'prop-types';
import CodeSample from '../../CodeSample';
import Runcode from '../../Runcode';
import literal from '!raw-loader!./literalCode';
import dotNotation from '!raw-loader!./dotNotationCode';
import objectCreate from '!raw-loader!./objectCreateCode';
import functionFactoryExampleCode from '!raw-loader!./functionFactoryExampleCode';
import functionCode from '!raw-loader!./functionCode';
import contextContent from './contextContent';
import WideSlide from '../../WideSlide';
import { Slide, Appear, Text } from 'spectacle';


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
		title: "Factory Functions",
		code: functionFactoryExampleCode
	},
};


const functionExampleCode = functionCode;

const CreatingObjects = ({ createUsing, runCode }) => runCode
	? <Runcode code={functionExampleCode} contextContent={contextContent} />
	: (
		<Slide className="WideSlide" fluid>
			<CodeSample
				code={createObjectWith[createUsing].code}
				title={createObjectWith[createUsing].title}
			/>
		</Slide>
	);

const typeKeys = Object.keys(createObjectWith);

CreatingObjects.propTypes = {
	createUsing: PropTypes.oneOf([...typeKeys])
};

export default CreatingObjects;