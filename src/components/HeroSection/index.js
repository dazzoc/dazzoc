import workhorses from '../../images/work-horses.svg';
import guy from '../../images/guy.svg';
import crane from '../../images/crane-01.svg';
import cranearm from '../../images/crane-arm.svg';
import hook from '../../images/hook.svg';
import { HeroContainer, HeroBg, HeroContent, TopRow, BottomRow, Workhorses, Guy } from './HeroElements';

function HeroSection() {
  return (
    <HeroContainer id='hero'>
        <HeroBg>
            <HeroContent>
                <TopRow>
                    <img src={hook} alt="hook" className='hook'/>
                    <img src={cranearm} alt="cranearm" className='crane-arm'/>
                    <img src={crane} alt="crane" className='crane'/>
                </TopRow>
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