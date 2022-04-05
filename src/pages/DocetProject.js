import Footer from '../components/Footer';
import PageNav from '../components/PageNav';
import Docet from '../images/DOCET-head-01.svg';
import { ProjectContainer, ProjectBg, SlideWrapper, SliderButtons, InfoContainer, SlideLogo, SlideDes, LinkContainer, LinkItem, Deploy, PrevArrow, NextArrow } from './PageElements';

const DocetProject = () => {
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
                <SlideLogo src={Docet} alt='Docet-logo'/>
                <SlideDes>
                    DOCET IS A TO-DO LIST APP WHERE USERS CAN ADD THINGS THEY NEED TO GET DONE. A WAY TO KEEP TRACK OF THINGS BASED ON URGENCY AND USERS CAN UPDATE IS THEY NEED TO AND DELETE WHEN DONE. THIS PROJECT USES NODE, EXPRESS, HTML5 AND CSS3. I WANTED THE APP TO BE CLEAN AND SIMPLE TO USE BUT FUN TO USE AT THE SAME TIME.
                </SlideDes>
                <LinkContainer>
                    <LinkItem href='https://docet.herokuapp.com/items' target='_blank' rel='noreferrer'>
                        <Deploy>VIEW</Deploy>
                    </LinkItem>
                    <LinkItem href='https://github.com/dazzoc/To-Do-App' target='_blank' rel="noreferrer">
                        <Deploy>GITHUB</Deploy>
                    </LinkItem>
                </LinkContainer>
            </InfoContainer>
        </ProjectBg>
        <Footer />
    </ProjectContainer>
  )
}

export default DocetProject;