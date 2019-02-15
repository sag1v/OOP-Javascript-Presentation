import React from 'react';
import styled from 'styled-components';
import leftBracket from '../../../assets/left_bracket.png';

const Curly = styled.div`
    flex: 1;
    border-style: ${({ empty }) => empty ? 'none' : 'solid'};
    border-width: ${({ empty }) => empty ? '0' : '1px 0 1px 20px'};
    border-image: ${({ empty }) => empty ? '' : `url(${leftBracket}) 1 100% stretch`};
    padding-left: ${({ empty }) => empty ? '0' : '2px'};
    transform: ${({ empty, closing }) => closing && !empty ? `rotate(180deg)` : 'rotate(0)'};
    margin: ${({ empty }) => empty ? '0 20px 0 0' : '0'};
    min-height: 30px;
    &:after{
        content: '${({ empty, closing }) => empty ? (closing ? '}' : '{') : ''}';
    }
`;

export default Curly;