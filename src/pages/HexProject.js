import Footer from '../components/Footer';
import PageNav from '../components/PageNav';
import { ProjectContainer, ProjectBg, SlideWrapper, SliderButtons, InfoContainer, HexLogo, SlideDes, LinkContainer, LinkItem, Deploy, PrevArrow, NextArrow } from './PageElements';

const HexProject = () => {
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
                <HexLogo>
                    HEX: <br />
                    COLOR <br />
                    APP
                </HexLogo>
                <SlideDes>
                    HEX: COLOR APP IS AN APP WHERE USERS CAN ENTER IN A HEX CODE AND THE COLOR API WILL RETURN THE COLOR ASSOCIATED WITH THAT CODE. THIS WAS MY FIRST EVER WEB PROJECT AND I WAS SO EXCITED ABOUT CSS THAT I BUILT THE IMAGE OUT OF CSS SHAPES AND NO IMAGES. IT IS NOT RESPONSIVE, BUT IM PROUD OF IT. I LOVE COLOR SO I MADE MY FIRST PROJECT ABOUT HEX CODES. ENJOY!
                </SlideDes>
                <LinkContainer>
                    <LinkItem href='https://dazzoc.github.io/Hex-Color-App/' target='_blank' rel='noreferrer'>
                        <Deploy>VIEW</Deploy>
                    </LinkItem>
                    <LinkItem href='https://github.com/dazzoc/Hex-Color-App' target='_blank' rel="noreferrer">
                        <Deploy>GITHUB</Deploy>
                    </LinkItem>
                </LinkContainer>
            </InfoContainer>
        </ProjectBg>
        <Footer />
    </ProjectContainer>
  )
}

export default HexProject;