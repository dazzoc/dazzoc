import { Description } from '@mui/icons-material';
import { AboutContainer, AboutBg, AboutContent, Row1, H1, Row2, Name, Title } from './AboutElements';

function About() {
  return (
    <AboutContainer>
        <AboutBg>
            <AboutContent>
                <Row1>
                    <H1>
                        100% friendly and 110% hardworker. Chris has had a lifetime passion to make things look good and have fun at the same time. With a background in illustration and design, he recently found programming and web development where he is learning everyday.
                    </H1>
                </Row1>
                <Row2>
                    <Name>Chris Dazzo</Name>
                    <Title>Developer | Designer | Illustrator</Title>
                </Row2>
            </AboutContent>
        </AboutBg>
    </AboutContainer>
  )
}

export default About;