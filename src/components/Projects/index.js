import nomnom from '../../images/NomNom-logo.svg';
import cue from '../../images/cue-01.svg';
import docet from '../../images/DOCET-head-01.svg';
import Star from '../../images/Star-01.svg';
import { ProjectsContainer, ProjectsBg, ProjectsContent, Top, Box, StarIcon, WorkTitle, WorkContainer, WorkRow, Worklink, Hex } from './ProjectElements';

function Projects() {
  return (
    <ProjectsContainer id='work'>
        <ProjectsBg>
                <Top>
                    <Box>
                        <StarIcon src={Star} alt='Star'/>
                        <WorkTitle>PROJECTS</WorkTitle>
                        <StarIcon src={Star} alt='Star'/>
                    </Box>
                </Top>
            <ProjectsContent>
                <WorkContainer>
                    <WorkRow>
                        <Worklink href='https://nom-nom.netlify.app/' target="_blank" rel="noreferrer">
                            <img src={ nomnom } alt="NomNom" className='nomnom-logo'/>
                        </Worklink>
                        <Worklink href='https://cuemusicapp.herokuapp.com/' target="_blank" rel="noreferrer">
                            <img src={ cue } alt="Cue" className='cue-logo'/>
                        </Worklink>
                    </WorkRow>
                    <WorkRow>
                        <Worklink href='https://docet.herokuapp.com/' target="_blank" rel="noreferrer">
                            <img src={ docet } alt="Docet" className='docet-logo'/>
                        </Worklink>
                        <Worklink href='https://dazzoc.github.io/Hex-Color-App/' target="_blank" rel="noreferrer">
                            <Hex>HEX: <br />
                                COLOR <br />
                                APP <br />
                            </Hex>
                        </Worklink>
                    </WorkRow>
                </WorkContainer>
            </ProjectsContent>
        </ProjectsBg>
    </ProjectsContainer>
  )
}

export default Projects;