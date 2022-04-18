import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import resume from '../images/Chris-Dazzo-Resume.jpg';

import {DocContainer, LinkItem, Deploy} from './PageElements';


function Resume() {

    return (
        <div className="resume-container">
            <PageNav />
             <div className='pdf-container'>
             {/* <iframe src="https://drive.google.com/file/d/1IZO45hu6K9VJVc6zk1ldImh3trBlb1lG/preview" width="800" height="600" allow="autoplay" title='resume'></iframe> */}
             <img src={resume} alt="resume" className="resume-img"/>
             <DocContainer>
                    <LinkItem href='https://docs.google.com/document/d/1kyq79oMyecJyijj-btn_68sI1ESiYjq0vkRrNaGUKig/edit?usp=sharing' target='_blank' rel='noreferrer'>
                        <Deploy>DOCS</Deploy>
                    </LinkItem>
            </DocContainer>
            </div>
            <Footer />
        </div>
  );
}

export default Resume;