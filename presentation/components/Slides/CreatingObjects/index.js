import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading, Slide } from 'spectacle';
import WideSlide from '../../WideSlide';
import Flex from '../../Flex';
import CodeBox from '../../CodeBox';
import Diagram from '../../Diagram';
import literal from '!raw-loader!./literalCode';
import dotNotation from '!raw-loader!./dotNotationCode';
import objectCreate from '!raw-loader!./objectCreateCode';
import functionFactory from '!raw-loader!./functionCode';
import contextContent, { createContentKey } from './contextContent';
import { createLineNumberUpdater, MemoryItem } from '../utils';

const lineNumbersArr = Object.entries(contextContent).reduce((acc, next) => {
	acc.push(next.lineNumbers);
	return acc;
}, []);
const updateLineNumber = createLineNumberUpdater(lineNumbersArr);

const Header = styled(Heading)`
    margin-bottom: ${({ spaced }) => spaced ? '15px' : '0'} !important;
`;

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

const CodeSample = ({ createUsing }) => (
	<Slide fluid={false} transition={["zoom"]} bgColor="primary">
		<Flex fluid>
			<Header spaced>{createObjectWith[createUsing].title}</Header>
			<CodeBox code={createObjectWith[createUsing].code} />
		</Flex>
	</Slide>
);

const functionExampleCode = createObjectWith.functionFactory.code;
//const codeAsArray = functionExampleCode.split(/[\r\n]+/);
//const getLineCode = line => codeAsArray[line - 1];

class RunCode extends React.Component {
	state = {
		lineNumbersIdx: 0
	}

	onKeypress = e => {
		this.setState(({ lineNumbersIdx, memoryItems, threadItems }) => {
			const nextLineNumbersIdx = updateLineNumber(e, lineNumbersIdx);
			if (nextLineNumbersIdx === lineNumbersIdx) return;
			return {
				lineNumbersIdx: nextLineNumbersIdx
			}
		});
	}

	componentDidMount() {
		document.addEventListener('keydown', this.onKeypress);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.onKeypress);
	}

	render() {
		const { lineNumbersIdx } = this.state;
		const currentContent = contextContent[lineNumbersIdx];
		const lineNumbers = lineNumbersIdx !== null && currentContent.lineNumbers;
		const DiagramToRender = currentContent.render;
		return (
			<WideSlide transition={["zoom"]} bgColor="primary">
				<Flex rowsDisplay fluid>
					<WideSlide.Side size={0.5}>
						<CodeBox lineNumbers={lineNumbers} code={functionExampleCode} />
					</WideSlide.Side>
					<WideSlide.Side size={1}>
						{DiagramToRender}
					</WideSlide.Side>
				</Flex>
			</WideSlide>
		);
	}
}

const CreatingObjects = ({ createUsing, runCode }) => runCode ? <RunCode /> : <CodeSample createUsing={createUsing} />

const typeKeys = Object.keys(createObjectWith);

CreatingObjects.propTypes = {
	createUsing: PropTypes.oneOf([...typeKeys])
};

export default CreatingObjects;