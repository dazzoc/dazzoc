import nomnom from '../../images/NomNom-logo.svg';
import cue from '../../images/cue-01.svg';
import docet from '../../images/DOCET-head-01.svg';
import Star from '../../images/Star-01.svg';
import { ProjectsContainer, ProjectsBg, ProjectsContent, Top, Box, Span, StarIcon, WorkTitle, WorkContainer, WorkRow, Worklink, Hex } from './ProjectElements';

function Projects() {
  return (
    <ProjectsContainer id='work'>
        <ProjectsBg>
                <Top>
                    <Box>
                        <Span>
                            <StarIcon src={Star} alt='Star'/>
                            <WorkTitle>PROJECTS</WorkTitle>
                            <StarIcon src={Star} alt='Star'/>
                            &nbsp;
                        </Span>
                        <Span>
                            <StarIcon src={Star} alt='Star'/>
                            <WorkTitle>PROJECTS</WorkTitle>
                            <StarIcon src={Star} alt='Star'/>
                            &nbsp;
                        </Span>
                    </Box>
                </Top>
            <ProjectsContent>
                <WorkContainer>
                    <WorkRow>
                        <Worklink to="/nomnom">
                            <img src={ nomnom } alt="NomNom" className='nomnom-logo'/>
                        </Worklink>
                        <Worklink to="/cue">
                            <img src={ cue } alt="Cue" className='cue-logo'/>
                        </Worklink>
                    </WorkRow>
                    <WorkRow>
                        <Worklink to="/docet">
                            <img src={ docet } alt="Docet" className='docet-logo'/>
                        </Worklink>
                        <Worklink to="/hex">
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