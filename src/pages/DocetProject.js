import { useState, useRef, useEffect } from "react";
import Footer from '../components/Footer';
import PageNav from '../components/PageNav';
import Docet from '../images/DOCET-head-01.svg';
import { ProjectContainer, ProjectBg, SlideWrapper, SliderButtons, InfoContainer, SlideLogo, SlideDes, LinkContainer, LinkItem, Deploy, PrevArrow, NextArrow, PageSlide, PageSlider, PageImage } from './PageElements';

const DocetProject = ({ slides }) => {
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