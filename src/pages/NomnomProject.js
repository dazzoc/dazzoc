import Footer from '../components/Footer';
import PageNav from '../components/PageNav';
import Nomnom from '../images/NomNom-logo.svg';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ProjectContainer, ProjectBg, SlideWrapper, SliderButtons, InfoContainer, SlideLogo, SlideDes, LinkContainer, LinkItem, Deploy, PrevArrow, NextArrow } from './PageElements';

const NomnomProject = () => {
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
                <SlideLogo src={Nomnom} alt='nomnom-logo'/>
                <SlideDes>
                    NOMNOM IS A RECIPE APP WHERE USERS CAN ADD, UPDATE, AND DELETE THEIR RECIPES. THEY CAN ALSO SEARCH FOR RANDOM RECIPES FORM THE SPOONACULAR API. IN THIS PROJECT I TOOK ON LEAD FRONTEND DEVELOPER / UX/UI DESIGN. FUN PROJECT WERE I CREATED THE LOGO, WIRE FRAMES, MARKUP & THE FRONTEND ARCHITECHTURE TO CREATE A GOOD USER EXPERIENCE. THIS PROJECT USES THE MERN STACK WITH MONGO DB, EXPRESS, REACT AND NODE.
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

export default NomnomProject;