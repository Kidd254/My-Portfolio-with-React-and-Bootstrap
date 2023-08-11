import {
  FaTwitter, FaLinkedin, FaGithub, FaMedium, FaAngellist,
} from 'react-icons/fa';
import { ChevronDown, ChevronRight } from 'react-bootstrap-icons';
import styles from '../styles/HomeContent.module.css';
import css from '../styles/AboutContent.module.css';

const AboutContent = () => (
  <div className={`container-fluid d-flex justify-content-center align-items-center ${css.background}`}>
    <div className="row mt-4 d-flex justify-content-center align-items-center">
      <div className="col-md-5">
        <div className={`text-white ${css.heading}`}>
          <h1>About                                 Myself</h1>
        </div>
        <div className={`mt-3 mb-2 text-white ${css.length}`}>
          <p>
            Hello I’m a software developer! I can help you build a            product ,
            feature or website Look through some of my                      work
            and experience! If you like what you see and have                    a project
            you need coded, don’t hestiate to contact me.
          </p>
        </div>
        <div className="col-md-5 mb-3">
          <h2 className="text-white">Lets Connect</h2>
        </div>
        <div className="col-md-6 mb-5">
          <a href="https://github.com/Kidd254" aria-label="Github" className={`pt-2 pr-2 pb-2 ${styles.github}`}><FaGithub size={32} /></a>
          <a href="https://www.linkedin.com/in/lawrence-muema-kioko" aria-label="Linkedin" className={`p-2 ${styles.linkedin}`}><FaLinkedin size={32} /></a>
          <a href="https://medium.com/@lorenkioko" aria-label="Medium" className={`p-2 ${styles.medium}`}><FaMedium size={32} /></a>
          <a href="https://twitter.com/lawrenc98789206" aria-label="Twitter" className={`p-2 ${styles.twitter}`}><FaTwitter size={32} /></a>
          <a href="https://wellfound.com/u/lawrence-muema-kioko" aria-label="Angellist" className={`p-2 ${styles.angelist}`}><FaAngellist size={32} /></a>
        </div>
        <div>
          <button type="button" className="btn btn-info text-white"><a href="https://drive.google.com/file/d/14VxIzjiDh1vY6JpgPAa8Ej58noXwelDW/view?usp=sharing" className={css.underline}>Get My Resume</a></button>
        </div>
      </div>
      <div className="col-md-5">
        <div className="d-flex mb-3">
          <h2 className="text-white">Languages</h2>
          <div className="ms-auto"><ChevronDown /></div>
        </div>
        <div className="mb-4">
          <ul className="list-inline">
            <li className="list-inline-item text-white">JavaScript</li>
            <li className="list-inline-item text-white">HTML</li>
            <li className="list-inline-item text-white">CSS</li>
            <li className="list-inline-item text-white">React/Redux</li>
          </ul>
        </div>
        <div className="d-flex mb-4">
          <h2 className="text-white">Frameworks</h2>
          <div className="ms-auto"><ChevronRight /></div>
        </div>
        <div className="d-flex mb-4">
          <h2 className="text-white">Skills</h2>
          <div className="ms-auto"><ChevronRight /></div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutContent;
