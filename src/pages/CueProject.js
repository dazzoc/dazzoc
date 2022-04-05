import Footer from '../components/Footer';
import PageNav from '../components/PageNav';
import GitHubIcon from '@mui/icons-material/GitHub';
import Cue from '../images/cue-01.svg';
import { ProjectContainer, ProjectBg, SlideWrapper, SliderButtons, InfoContainer, SlideLogo, SlideDes, LinkContainer, LinkItem, Deploy, PrevArrow, NextArrow } from './PageElements';

const CueProject = () => {
  return (
    <ProjectContainer>
        <PageNav />
        <ProjectBg>
            <SlideWrapper>

                <SliderButtons>
                    <PrevArrow fontSize='large'/>
                    <NextArrow fontSize='large'/>
                </SliderButtons>
            </SlideWrapper>
            <InfoContainer>
                <SlideLogo src={Cue} alt='cue-logo'/>
                <SlideDes>
                    CUE IS A MUSIC TRACKING APP WHERE USERS CAN ADD, UPDATE AND DELETE THE ALBUMS THEY ARE LISTENING TO. USERS CAN ALSO ADD WHAT DEVICE THEY LISTENED ON AND WHAT MOOD THEY WERE IN WHEN LISTENING. THIS APP WAS WRITTEN IN PYTHON AND DJANGO WITH HTML5 AND CSS3 WITH POSTGRESQL DATA BASE. I ENJOYED CREATING THE INTERFACE AND WIRE FRAMING THE PROJECT.
                </SlideDes>
                <LinkContainer>
                    <LinkItem href='https://github.com/dazzoc/CueApp' target='_blank' rel="noreferrer">
                        <GitHubIcon />
                    </LinkItem>
                    <LinkItem href='https://cuemusicapp.herokuapp.com/' target='_blank'
                    rel='noreferrer'>
                        <Deploy>VIEW</Deploy>
                    </LinkItem>
                </LinkContainer>
            </InfoContainer>
        </ProjectBg>
        <Footer />
    </ProjectContainer>
  )
}

export default CueProject;