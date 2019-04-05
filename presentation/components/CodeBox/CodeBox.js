import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/line-highlight/prism-line-highlight.css'
import 'prismjs/plugins/line-highlight/prism-line-highlight.js'

import './styles.css';

const CodeStyle = styled.div`
    font-size: 1.4rem;
    max-height: calc(85vh - 20px);
    width: 100%;
`;

const Pre = styled.pre`
    && {
        padding-right: 0.5em;
        font-size: ${({ compactCode }) => compactCode ? '0.9em' : '1em'};
    }
`;

class CodeBox extends React.Component {
    componentDidMount() {
        Prism.highlightAll();
    }

    componentDidUpdate() {
        Prism.highlightAll();
    }

    render() {
        const { code, language, lineNumbers, className, compactCode } = this.props;
        return (
            <CodeStyle>
                <Pre compactCode={compactCode} data-line={lineNumbers} className={`line-numbers ${className}`}><code className={`language-${language}`}>{code}</code></Pre>
            </CodeStyle>
        );
    }
}

CodeBox.propTypes = {
    code: PropTypes.string.isRequired,
    className: PropTypes.string,
    language: PropTypes.string,
    lineNumbers: PropTypes.string
}

CodeBox.defaultProps = {
    language: 'javascript',
    className: ''
}

export default CodeBox;