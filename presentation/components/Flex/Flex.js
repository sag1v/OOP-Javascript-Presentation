import React from 'react';
import styled from 'styled-components';

export default styled.div(props => ({
    display: 'flex',
    height: props.fluid ? '100%' : 'auto',
    flexDirection: props.rowsDisplay ? 'row' : 'column',
    flex: props.size,
    backgroundColor: props.bgColor ? props.bgColor : 'transparent',
    flexWrap: props.flexWrap ? 'wrap' : 'nowrap',
    alignItems: props.flexAlign ? props.flexAlign : 'inherit'
}));