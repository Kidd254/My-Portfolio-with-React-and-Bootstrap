/* eslint-disable max-len */
import {
  FaTwitter, FaLinkedin, FaGithub, FaMedium, FaAngellist,
} from 'react-icons/fa';
import styles from '../styles/HomeContent.module.css';

const HomeContent = () => (
  <div className={`container-fluid d-flex flex-column justify-content-center align-items-center ${styles.background}`}>

    <div className={`col-md-5 mt-3 transition ${styles.space}`}>
      <h1 className="text-white">I&apos;m Lawrence                   Glad to See                     You!</h1>
    </div>

    <div className=" col-md-5">
      <p className="text-white">
        I&apos;m a Full-stack developer with over 2 years of hands-on experience, dedicated to crafting robust and innovative software solutions. My expertise spans both front-end and back-end development, allowing me to contribute holistically to the software development life cycle. I thrive in collaborative environments, working closely with diverse teams to ensure the successful execution of projects.

        My passion extends to staying at the forefront of emerging trends and continuously refining development methodologies. My commitment to innovation and excellence drives me to deliver exceptional outcomes.
        {' '}

      </p>
    </div>

    <div className="col-md-5 pb-2">
      <h2 className="text-white">Lets Connect</h2>
    </div>
    <div className="col-md-5">
      <a href="https://github.com/Kidd254" target="_blank" aria-label="Github" className={`pt-2 pr-2 pb-2 ${styles.github}`} rel="noreferrer"><FaGithub size={32} /></a>
      <a href="https://www.linkedin.com/in/lawrence-muema-kioko" target="_blank" aria-label="Linkedin" className={`p-2 ${styles.linkedin}`} rel="noreferrer"><FaLinkedin size={32} /></a>
      <a href="https://medium.com/@lorenkioko" target="_blank" aria-label="Medium" className={`p-2 ${styles.medium}`} rel="noreferrer"><FaMedium size={32} /></a>
      <a href="https://twitter.com/lawrenc98789206" target="_blank" aria-label="Twitter" className={`p-2 ${styles.twitter}`} rel="noreferrer"><FaTwitter size={32} /></a>
      <a href="https://wellfound.com/u/lawrence-muema-kioko" target="_blank" aria-label="Angellist" className={`p-2 ${styles.angelist}`} rel="noreferrer"><FaAngellist size={32} /></a>
    </div>

  </div>

);

export default HomeContent;
