import nomnom from '../../images/NomNom-logo.svg';
import cue from '../../images/cue-01.svg';
import { ProjectsContainer, ProjectsBg, ProjectsContent, Top, Box, WorkTitle, WorkContainer, Worklink, Hex } from './ProjectElements';

function Projects() {
  return (
    <ProjectsContainer>
        <ProjectsBg>
            <ProjectsContent>
                <Top>
                    <Box>
                        <WorkTitle>Work</WorkTitle>
                    </Box>
                </Top>
                <WorkContainer>
                    <Worklink href='https://nom-nom.netlify.app/' target="_blank" rel="noreferrer">
                        <img src={ nomnom } alt="NomNom" className='nomnom-logo'/>
                    </Worklink>
                    <Worklink href='https://cuemusicapp.herokuapp.com/' target="_blank" rel="noreferrer">
                        <img src={ cue } alt="Cue" className='cue-logo'/>
                    </Worklink>
                    <Worklink href='https://docet.herokuapp.com/' target="_blank" rel="noreferrer">
                        <img src={ nomnom } alt="Docet" className='docet-logo'/>
                    </Worklink>
                    <Worklink href='https://dazzoc.github.io/Hex-Color-App/' target="_blank" rel="noreferrer">
                        <Hex>HEX: <br />
                            COLOR <br />
                            APP <br />
                        </Hex>
                    </Worklink>
                </WorkContainer>
            </ProjectsContent>
        </ProjectsBg>
    </ProjectsContainer>
  )
}

export default Projects;