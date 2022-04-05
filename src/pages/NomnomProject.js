import { useState, useRef, useEffect } from "react";
import Footer from '../components/Footer';
import PageNav from '../components/PageNav';
import Nomnom from '../images/NomNom-logo.svg';
import { ProjectContainer, ProjectBg, SlideWrapper, SliderButtons, InfoContainer, SlideLogo, SlideDes, LinkContainer, LinkItem, Deploy, PrevArrow, NextArrow, PageSlide, PageSlider, PageImage } from './PageElements';

const NomnomProject = ({ slides }) => {
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
                <SlideLogo src={Nomnom} alt='nomnom-logo'/>
                <SlideDes>
                    NOMNOM IS A RECIPE APP WHERE USERS CAN ADD, UPDATE, AND DELETE THEIR RECIPES. THEY CAN ALSO SEARCH FOR RANDOM RECIPES FORM THE SPOONACULAR API. IN THIS PROJECT I TOOK ON LEAD FRONTEND DEVELOPER / UX/UI DESIGN. FUN PROJECT WERE I CREATED THE LOGO, WIRE FRAMES, MARKUP & THE FRONTEND ARCHITECTURE TO CREATE A GOOD USER EXPERIENCE. THIS PROJECT USES THE MERN STACK WITH MONGO DB, EXPRESS, REACT AND NODE.
                </SlideDes>
                <LinkContainer>
                    <LinkItem href='https://nom-nom.netlify.app/' target='_blank' rel='noreferrer'>
                        <Deploy>VIEW</Deploy>
                    </LinkItem>
                    <LinkItem href='https://github.com/youngking509/nom-nom-frontend' target='_blank' rel="noreferrer">
                        <Deploy>GITHUB</Deploy>
                    </LinkItem>
                </LinkContainer>
            </InfoContainer>
        </ProjectBg>
        <Footer />
    </ProjectContainer>
  )
}

export default NomnomProject;