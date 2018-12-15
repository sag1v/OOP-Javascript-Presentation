import styled from 'styled-components';
import { Slide } from 'spectacle';
import Flex from './Flex';

const WideSlide = styled(Slide)`
    max-width: ${({ fluid }) => fluid ? '100%' : '1200px'} !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;
    padding: 0 !important;
    transform: scale(0.9) !important;
    text-align: left !important;
    align-self: flex-start;
`;

const Side = styled(Flex)`
  padding: 5px 10px;
  flex: ${props => props.size};
`;

WideSlide.Side = Side;

WideSlide.defaultProps = {
    fluid: true
};

export default WideSlide;
