import { useState, useRef, useEffect } from "react";
import Footer from '../components/Footer';
import PageNav from '../components/PageNav';
import Cue from '../images/cue-01.svg';
import { ProjectContainer, ProjectBg, SlideWrapper, SliderButtons, InfoContainer, SlideLogo, SlideDes, LinkContainer, LinkItem, Deploy, PrevArrow, NextArrow, PageSlide, PageSlider, PageImage } from './PageElements';

const CueProject = ({ slides }) => {
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
                <SlideLogo src={Cue} alt='cue-logo'/>
                <SlideDes>
                    CUE IS A MUSIC TRACKING APP WHERE USERS CAN ADD, UPDATE AND DELETE THE ALBUMS THEY ARE LISTENING TO. USERS CAN ALSO ADD WHAT DEVICE THEY LISTENED ON AND WHAT MOOD THEY WERE IN WHEN LISTENING. THIS APP WAS WRITTEN IN PYTHON AND DJANGO WITH HTML5 AND CSS3 WITH POSTGRESQL DATA BASE. I ENJOYED CREATING THE INTERFACE AND WIRE FRAMING THE PROJECT.
                </SlideDes>
                <LinkContainer>
                    <LinkItem href='https://cuemusicapp.herokuapp.com/' target='_blank'
                    rel='noreferrer'>
                        <Deploy>VIEW</Deploy>
                    </LinkItem>
                    <LinkItem href='https://github.com/dazzoc/CueApp' target='_blank' rel="noreferrer">
                        <Deploy>GITHUB</Deploy>
                    </LinkItem>
                </LinkContainer>
            </InfoContainer>
        </ProjectBg>
        <Footer />
    </ProjectContainer>
  )
}

export default CueProject;