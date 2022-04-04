import Footer from '../components/Footer';
import PageNav from '../components/PageNav';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ProjectContainer, ProjectBg, SlideWrapper, SliderButtons, InfoContainer, SlideLogo, SlideDes, LinkContainer, LinkItem, Deploy, PrevArrow, NextArrow } from './PageElements';

const HexProject = () => {
  return (
    <ProjectContainer>
        <PageNav />
        <ProjectBg>
            <SlideWrapper>

                <SliderButtons>
                    <PrevArrow />
                    <NextArrow />
                </SliderButtons>
            </SlideWrapper>
            <InfoContainer>
                <SlideLogo />
                <SlideDes>
                    
                </SlideDes>
                <LinkContainer>
                    <LinkItem>
                        <GitHubIcon />
                    </LinkItem>
                    <LinkItem>
                        <Deploy>VIEW</Deploy>
                    </LinkItem>
                </LinkContainer>
            </InfoContainer>
        </ProjectBg>
        <Footer />
    </ProjectContainer>
  )
}

export default HexProject;