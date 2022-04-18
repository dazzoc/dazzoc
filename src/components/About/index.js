import self from '../../images/ProfileBW.jpg';
import Star from '../../images/Star-01.svg';
import FunkyStar from '../../images/KrookedStar-01.svg';
import Arrowdown from '../../images/Arrowdown-01.svg';
import { AboutContainer, AboutBg, AboutContent, Top2, Box2, Span2, StarIconAbout, AboutTitle, Row1, Column1, Column2, Descrip, Row2, Name, Title, FunkStar, Info, Bio, BioTitle, ArrowDown1 } from './AboutElements';

function About() {
  return (
    <AboutContainer id='about'>
        <AboutBg>
            <Top2>
                <Box2>
                    <Span2>
                        <StarIconAbout src={Star} alt='Star'/>
                        <AboutTitle>ABOUT</AboutTitle>
                        <StarIconAbout src={Star} alt='Star'/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </Span2>
                    <Span2>
                        <StarIconAbout src={Star} alt='Star'/>
                        <AboutTitle>ABOUT</AboutTitle>
                        <StarIconAbout src={Star} alt='Star'/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </Span2>
                </Box2>
            </Top2>
            <AboutContent>
                <Row1>
                    <Column1>
                        <img src={self} alt="self-port" className='self'/>
                    </Column1>
                    <Column2>
                        <Name>CHRIS DAZZO</Name>
                        <Title>Developer | Designer | Illustrator</Title>
                        <FunkStar src={FunkyStar} alt='FunkyStar'/>
                        <Info>
                            L: CHICAGO, IL <br />
                            <br />
                            T: (+1) 630 9355422 <br />
                            <br />
                            E: DAZZO.CHRIS@GMAIL.COM
                        </Info>
                    </Column2>
                </Row1>
                <Row2>
                    <Bio>
                        <BioTitle>BIO</BioTitle>
                        <ArrowDown1 src={Arrowdown} alt='ArrowDown'/>
                    </Bio>
                    <Descrip>
                        Chris Dazzo is a Developer with a background in design and illustration. He has had a lifetime passion to build things that look good and function seamlessly. He started off re-drawing skateboard logos and building quarter pipes in the driveway. Chris fell in love with programing and web development where he is working and building his skills everyday. 
                    </Descrip>
                </Row2>
            </AboutContent>
        </AboutBg>
    </AboutContainer>
  )
}

export default About;