import { useState, useRef, useEffect } from "react";
import Footer from '../components/Footer';
import PageNav from '../components/PageNav';
import { ProjectContainer, ProjectBg, SlideWrapper, SliderButtons, InfoContainer, HexLogo, SlideDes, LinkContainer, LinkItem, Deploy, PrevArrow, NextArrow, PageSlide, PageSlider, PageImage } from './PageElements';

const HexProject = ({ slides }) => {
    const [current, setCurent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)

    useEffect(() => {
        const nextSlide = () => {
            setCurent(current => (current === length - 1 ? 0 : current + 1));
        };

        timeout.current = setTimeout(nextSlide, 4000);

        return function () {
            if(timeout.current) {
                clearTimeout(timeout.current);
            }
        };
    }, [current, length]);

    const nextSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current);
        }
        setCurent(current === length - 1 ? 0 : current + 1);
        // console.log(current)
    };

    const prevSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current);
        }
        setCurent(current === 0 ? length - 1 : current - 1);
    };

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    };

  return (
    <ProjectContainer>
        <PageNav />
        <ProjectBg>
            <SlideWrapper>
                {slides.map((slide, index) => {
                    return (
                        <PageSlide key={index}>
                            {index === current && (
                                <PageSlider>
                                    <PageImage src={slide.image} alt={slide.alt} />
                                </PageSlider>
                            )}
                        </PageSlide>
                    )
                })}
                <SliderButtons>
                    <PrevArrow fontSize='large' onClick={prevSlide}/>
                    <NextArrow fontSize='large' onClick={nextSlide}/>
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