import React from 'react'
import WideSlide from '../../WideSlide';
import thisRulesImage from '../../../../assets/this-rules.png';
import CodeBox from "../../CodeBox";
import Flex from "../../Flex";
import Header from '../../Header';
import { Image } from 'spectacle';
import styled from 'react-emotion';

import code1 from '!raw-loader!./challenges/1.js';
import code2 from '!raw-loader!./challenges/2.js';
import code3 from '!raw-loader!./challenges/3.js';
import code4 from '!raw-loader!./challenges/4.js';
import code5 from '!raw-loader!./challenges/5.js';
import code6 from '!raw-loader!./challenges/6.js';
import code7 from '!raw-loader!./challenges/7.js';
import code8 from '!raw-loader!./challenges/8.js';
import code9 from '!raw-loader!./challenges/9.js';


const codes = [code1, code2, code3, code4, code5, code6, code7, code8, code9];

const Wrapper = styled(Flex)`
  margin-top: 30px;
`;

const RulesOnly = () => (
  <React.Fragment>
    <Header align="center">what is this?</Header>
    <Image src={thisRulesImage} />
  </React.Fragment>
);

const WithChallenge = ({ index }) => (
  <React.Fragment>
    <Header align="center">The "this" Challenge</Header>
    <Wrapper rowsDisplay fluid>
      <Flex size={0.6} fluid>
        <Header fontSize={1} align="center">{`challenge #${index + 1}`}</Header>
        <CodeBox code={codes[index]} />
      </Flex>
      <Flex size={1}>
        <Image src={thisRulesImage} />
      </Flex>
    </Wrapper>
  </React.Fragment>
);

class This extends React.Component {

  state = { index: 0 };

  componentDidMount() {
    if(this.props.showChallenge){
      document.addEventListener('keydown', this.updateIndex);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.updateIndex);
  }

  updateIndex = e => {
    const isUp = e.keyCode === 38;
    const isDown = e.keyCode === 40;

    this.setState(({ index }) => {
      if (isUp) {
        if (index > 0) {
          return { index: index - 1 };
        }
      }
      else if (isDown) {
        if (index < codes.length - 1) {
          return { index: index + 1 };
        }
      }
    });
  }

  render() {
    const { showChallenge } = this.props;
    const { index } = this.state;
    return (
      <WideSlide>
        <div ref={ref => this.container = ref}>
          {showChallenge ? <WithChallenge index={index} /> : <RulesOnly />}
        </div>
      </WideSlide>
    )
  }
}

/**
 * 
 *           <Slide>
            <StyledHeading>what is this?</StyledHeading>
            <Image src={thisRulesImage} />
          </Slide>
          <Slide>
            <StyledHeading>this challenge</StyledHeading>
            <Flex rowsDisplay fluid>
              <Flex size={1.5} fluid>
                <CodeBox />
              </Flex>
              <Flex size={1}>
                <Image src={thisRulesImage} />
              </Flex>
            </Flex>
          </Slide>
 * 
 * 
 */
export default This;