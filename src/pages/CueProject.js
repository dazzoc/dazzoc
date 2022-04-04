import Footer from '../components/Footer';
import PageNav from '../components/PageNav';
import GitHubIcon from '@mui/icons-material/GitHub';
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
                <SlideLogo />
                <SlideDes>
                    
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