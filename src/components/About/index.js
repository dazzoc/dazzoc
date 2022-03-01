import self from '../../images/about-self.svg';
import { AboutContainer, AboutBg, AboutContent, Row1, Descrip, Row2, Name, Title } from './AboutElements';

function About() {
  return (
    <AboutContainer id='about'>
        <AboutBg>
            <AboutContent>
                <Row1>
                    <Descrip>
                        100% friendly and 110% hardworker. Chris has had a lifetime passion to make things look good and have fun at the same time. With a background in illustration and design, he recently found programming and web development where he is learning everyday.
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