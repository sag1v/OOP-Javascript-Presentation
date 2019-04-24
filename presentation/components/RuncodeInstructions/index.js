
import styled from 'styled-components';
import Flex from '../Flex';

const Instructions = styled(Flex)`
  flex-direction: row;
  font-size: 0.42em;
  padding: 0 15px;
  padding-bottom: 5px;
`;

Instructions.Block = styled(Flex)`
  padding: 0 5px;
`;

export default Instructions;