import workhorses from '../../images/work-horses.svg';
import guy from '../../images/guy.svg';
import { HeroContainer, HeroBg, HeroContent, BottomRow, Workhorses, Guy } from './HeroElements';

function HeroSection() {
  return (
    <HeroContainer id='hero'>
        <HeroBg>
            <HeroContent>
                <BottomRow>
                    <Guy>
                        <img src={guy} alt="guy" className='guy'/>
                    </Guy>
                    <Workhorses>
                        <img src={workhorses} alt="work-horses" className='work-horses'/>
                        <div className="worklight1"></div>
                        <div className="worklight2"></div>
                    </Workhorses>
                </BottomRow>
            </HeroContent>
        </HeroBg>
    </HeroContainer>
  )
}

export default HeroSection;