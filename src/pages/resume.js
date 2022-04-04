import Footer from "../components/Footer";
import PageNav from "../components/PageNav";


function Resume() {

    return (
        <div className="resume-container">
            <PageNav />
             <div className='pdf-container'>
             <iframe src="https://drive.google.com/file/d/1IZO45hu6K9VJVc6zk1ldImh3trBlb1lG/preview" width="800" height="600" allow="autoplay"></iframe>
            </div>
            <Footer />
        </div>
  );
}

export default Resume;