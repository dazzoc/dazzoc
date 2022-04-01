
import CircleGuy from '../../images/CircleGuy.jpg';
import CircleBoxGuy from '../../images/CircleGuyBoxed-01.svg';
import ArrowRight1 from '../../images/ArrowRight-01.svg';
import { HeroContainer, HeroBg, HeroContent, HeroImgWrapper, Circle, CircleBox, Name, NameText, TextWrap, Row, Arrow1, Text } from './HeroElements';

function HeroSection() {
  return (
    <HeroContainer id='hero'>
        <HeroBg>
            <HeroImgWrapper>
              <Circle src={CircleGuy} alt="CircleGuy" />
            </HeroImgWrapper>
            <HeroContent>
              <Row>
                <CircleBox src={CircleBoxGuy} alt='CircleBox'/>
                <Name>
                  <NameText>CHRIS</NameText>
                  <NameText>DAZZO</NameText>
                </Name>
              </Row>
              <TextWrap>
                <Row>
                  <Arrow1 src={ArrowRight1} alt='arrow'/>
                  <Text>WEB DEVELOPMENT</Text>
                </Row>
                <Row>
                  <Arrow1 src={ArrowRight1} alt='arrow'/>
                  <Text>ILLUSTRATION</Text>
                </Row>
                <Row>
                  <Arrow1 src={ArrowRight1} alt='arrow'/>
                  <Text>DESIGN</Text>
                </Row>
              </TextWrap>
            </HeroContent>
        </HeroBg>
    </HeroContainer>
  )
}

export default HeroSection;