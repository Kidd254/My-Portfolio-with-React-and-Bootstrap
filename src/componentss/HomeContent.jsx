import {
  FaTwitter, FaLinkedin, FaGithub, FaMedium, FaAngellist,
} from 'react-icons/fa';
import styles from '../styles/HomeContent.module.css';

const HomeContent = () => (
  <div className={`container-fluid d-flex flex-column justify-content-center align-items-center ${styles.background}`}>

    <div className="col-md-6 mt-5 pt-5">
      <h1>I&apos;m Lawrence Glad to See You!</h1>
    </div>

    <div className=" col-md-6">
      <p>
        I&apos;m a software developer! I can help you build a product ,
        feature or website Look through some of my work and experience!
        If you like what you see and have a project you need coded,don’t hestiate to contact me.
      </p>
    </div>

    <div className="col-md-6">
      <h2>Lets Connect</h2>
    </div>
    <div className="col-md-6">
      <a href="https://github.com/Kidd254" aria-label="Github" className="p-2"><FaGithub size={32} /></a>
      <a href="https://www.linkedin.com/in/lawrence-muema-kioko" aria-label="Linkedin" className="p-2"><FaLinkedin size={32} /></a>
      <a href="https://medium.com/@lorenkioko" aria-label="Medium" className="p-2"><FaMedium size={32} /></a>
      <a href="https://twitter.com/lawrenc98789206" aria-label="Twitter" className="p-2"><FaTwitter size={32} /></a>
      <a href="https://wellfound.com/u/lawrence-muema-kioko" aria-label="Angellist" className="p-2"><FaAngellist size={32} /></a>
    </div>

  </div>

);

export default HomeContent;
