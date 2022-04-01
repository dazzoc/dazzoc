import w from '../../images/w-01.svg';
import e from '../../images/e-01.svg';
import l from '../../images/l-01.svg';
import c from '../../images/c-01.svg';
import o from '../../images/o-01.svg';
import m from '../../images/m-01.svg';
import CircleGuy from '../../images/CircleGuy.jpg';
import { HeroContainer, HeroBg, HeroContent, HeroImgWrapper, Circle } from './HeroElements';

function HeroSection() {
  return (
    <HeroContainer id='hero'>
        <HeroBg>
            <HeroImgWrapper>
              <Circle src={CircleGuy} alt="CircleGuy" />
            </HeroImgWrapper>
            <HeroContent>
                {/* <img src={w} alt="w" className='welcome' id='w'/>
                <img src={e} alt="e" className='welcome' id='e'/>
                <img src={l} alt="l" className='welcome' id='l'/>
                <img src={c} alt="c" className='welcome' id='c'/>
                <img src={o} alt="o" className='welcome' id='o'/>
                <img src={m} alt="m" className='welcome' id='m'/>
                <img src={e} alt="e" className='welcome' id='e2'/> */}
              
            </HeroContent>
        </HeroBg>
    </HeroContainer>
  )
}

export default HeroSection;