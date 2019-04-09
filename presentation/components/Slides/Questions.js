import React from 'react';
import styled from 'styled-components';
import { Image, Slide } from 'spectacle';
import Header from '../Header';
import Flex from '../Flex';
import questionsImg from '../../../assets/pulp1.png'

const Wrapper = styled(Flex)`

`

const Questions = ({on}) => (
    <Wrapper>
        <Slide>
            <Header>{`Questions on ${on}?`}</Header>
            <Image height={500} src={questionsImg} />
        </Slide>
    </Wrapper>
);

export default Questions;