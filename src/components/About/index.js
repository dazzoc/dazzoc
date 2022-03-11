import self from '../../images/about-self.svg';
import { AboutContainer, AboutBg, AboutContent, Row1, Descrip, Row2, Name, Title } from './AboutElements';

function About() {
  return (
    <AboutContainer id='about'>
        <AboutBg>
            <AboutContent>
                <Row1>
                    <Descrip>
                        Chris Dazzo is a Developer with a background in design and illustration. He has had a lifetime passion to build things that look good and function seamlessly. He started off re-drawing skateboard logo and building quarter pipes in the driveway. Chris fell in love with programing and web development where he is working and building his skills everyday. 
                    </Descrip>
                </Row1>
                <Row2>
                    <img src={self} alt="self-port" className='self'/>
                    <Name>Chris Dazzo</Name>
                    <Title>Developer | Designer | Illustrator</Title>
                </Row2>
            </AboutContent>
        </AboutBg>
    </AboutContainer>
  )
}

export default About;