import Footer from '../components/Footer';
import PageNav from '../components/PageNav';
import { ProjectContainer, ProjectBg, SlideWrapper, SliderButtons, SlideLogo, SlideDes, PrevArrow, NextArrow } from './PageElements';

const DocetProject = () => {
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
            <SlideLogo />
            <SlideDes>
                
            </SlideDes>
        </ProjectBg>
        <Footer />
    </ProjectContainer>
  )
}

export default DocetProject;