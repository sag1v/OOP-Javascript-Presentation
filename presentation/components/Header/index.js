import { Heading } from 'spectacle';
import styled from 'styled-components';

export default styled(Heading)`
    margin-bottom: ${({ spaced }) => spaced ? '15px' : '0'} !important;
    text-align: ${({ align }) => align || 'inherit'};
    font-size: ${({ fontSize }) => `${fontSize}em` || 'inherit'} !important;
`;