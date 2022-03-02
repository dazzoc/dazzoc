import w from '../../images/w-01.svg';
import e from '../../images/e-01.svg';
import l from '../../images/l-01.svg';
import c from '../../images/c-01.svg';
import o from '../../images/o-01.svg';
import m from '../../images/m-01.svg';
import { HeroContainer, HeroBg, HeroContent, } from './HeroElements';

function HeroSection() {
  return (
    <HeroContainer id='hero'>
        <HeroBg>
            <HeroContent>
                <img src={w} alt="w" className='welcome'/>
                <img src={e} alt="e" className='welcome'/>
                <img src={l} alt="l" className='welcome'/>
                <img src={c} alt="c" className='welcome'/>
                <img src={o} alt="o" className='welcome'/>
                <img src={m} alt="m" className='welcome'/>
                <img src={e} alt="e" className='welcome'/>
            </HeroContent>
        </HeroBg>
    </HeroContainer>
  )
}

export default HeroSection;