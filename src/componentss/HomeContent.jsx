import {
  FaTwitter, FaLinkedin, FaGithub, FaMedium, FaAngellist,
} from 'react-icons/fa';
import styles from '../styles/HomeContent.module.css';

const HomeContent = () => (
  <div className={`container-fluid d-flex flex-column justify-content-center align-items-center ${styles.background}`}>

    <div className={`col-md-5 mt-5 pt-5 transition ${styles.space}`}>
      <h1 className="text-white">I&apos;m Lawrence                   Glad to See                     You!</h1>
    </div>

    <div className=" col-md-5">
      <p className="text-white">
        I&apos;m a software developer! I can help you build a product ,
        feature or website Look through some of my work and experience!
        If you like what you see and have a project you need coded,don’t hestiate to contact me.
      </p>
    </div>

    <div className="col-md-5 pb-2">
      <h2 className="text-white">Lets Connect</h2>
    </div>
    <div className="col-md-5">
      <a href="https://github.com/Kidd254" aria-label="Github" className={`pt-2 pr-2 pb-2 ${styles.github}`}><FaGithub size={32} /></a>
      <a href="https://www.linkedin.com/in/lawrence-muema-kioko" aria-label="Linkedin" className={`p-2 ${styles.linkedin}`}><FaLinkedin size={32} /></a>
      <a href="https://medium.com/@lorenkioko" aria-label="Medium" className={`p-2 ${styles.medium}`}><FaMedium size={32} /></a>
      <a href="https://twitter.com/lawrenc98789206" aria-label="Twitter" className={`p-2 ${styles.twitter}`}><FaTwitter size={32} /></a>
      <a href="https://wellfound.com/u/lawrence-muema-kioko" aria-label="Angellist" className={`p-2 ${styles.angelist}`}><FaAngellist size={32} /></a>
    </div>

  </div>

);

export default HomeContent;
