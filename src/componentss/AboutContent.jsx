/* eslint-disable jsx-a11y/alt-text */
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaMedium,
  FaAngellist,
} from 'react-icons/fa';
import { ChevronDown, ChevronRight } from 'react-bootstrap-icons';
import styles from '../styles/HomeContent.module.css';
import css from '../styles/AboutContent.module.css';

const AboutContent = () => (
  <div
    className={`container-fluid d-flex justify-content-center align-items-center ${css.background}`}
  >
    <div className="row mt-4 d-flex justify-content-center align-items-center">
      <div className="col-md-5">
        <div className={`text-white ${css.heading}`}>
          <h1>About Myself</h1>
        </div>
        <div className={`mt-3 mb-2 text-white ${css.length}`}>
          <p>
            Hello I’m a software developer! I can help you build a product ,
            feature or website Look through some of my work and experience! If
            you like what you see and have a project you need coded, don’t
            hestiate to contact me.
          </p>
        </div>
        <div className="col-md-5 mb-3">
          <h2 className="text-white">Lets Connect</h2>
        </div>
        <div className="col-md-6 mb-5">
          <a
            href="https://github.com/Kidd254" target="_blank"
            aria-label="Github"
            className={`pt-2 pr-2 pb-2 ${styles.github}`}
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/lawrence-muema-kioko" target="_blank"
            aria-label="Linkedin"
            className={`p-2 ${styles.linkedin}`}
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://medium.com/@lorenkioko" target="_blank"
            aria-label="Medium"
            className={`p-2 ${styles.medium}`}
          >
            <FaMedium size={32} />
          </a>
          <a
            href="https://twitter.com/lawrenc98789206" target="_blank"
            aria-label="Twitter"
            className={`p-2 ${styles.twitter}`}
          >
            <FaTwitter size={32} />
          </a>
          <a
            href="https://wellfound.com/u/lawrence-muema-kioko" target="_blank"
            aria-label="Angellist"
            className={`p-2 ${styles.angelist}`}
          >
            <FaAngellist size={32} />
          </a>
        </div>
        <div>
          <button type="button" className="btn btn-info">
            <a
              href="https://docs.google.com/document/d/1_DneCqewtAIyWQ4gY8GkeOjPBgl8vPSnX_PmiVN1KPo/edit?usp=sharing" target="_blank"
              className={`text-white ${css.underline}`}
            >
              Get My Resume
            </a>
          </button>
        </div>
      </div>
      <div className="col-md-5">
        <div className="d-flex mb-3">
          <h2 className="text-white">Languages & Libraries</h2>
          <div className="ms-auto text-white">
            <ChevronDown />
          </div>
        </div>
        <div className="mb-4">
          <ul className="list-inline">
            <li className="list-inline-item text-white">
              <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
            </li>
            <li className="list-inline-item text-white">
              <img
                src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                alt="html5"
              />
            </li>
            <li className="list-inline-item text-white">
              <img
                src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                alt="css3"
              />
            </li>
            <li className="list-inline-item text-white">
              <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
            </li>
            <li className="list-inline-item text-white">
              <img
                src="https://img.shields.io/badge/Redux-593D88.svg?style=for-the-badge&logo=redux&logoColor=white"
                alt="redux"
              />
            </li>
            <li className="list-inline-item text-white">
              <img src="https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white" />
            </li>
          </ul>
        </div>
        <div className="d-flex mb-4">
          <h2 className="text-white">Frameworks</h2>
          <div className="ms-auto text-white">
            <ChevronRight />
          </div>
        </div>
        <div>
          <ul className="list-inline">
            <li className="list-inline-item text-white">
              <img
                src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
                alt="bootstrap"
              />
            </li>
            <li className="list-inline-item text-white">
              <img
                src="https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white"
                alt="rails"
              />
            </li>
            <li className="list-inline-item">
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="TailwindCSS"
                  src="https://img.shields.io/badge/-TailwindCSS-brightgreen"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex mb-4">
          <h2 className="text-white">Databases</h2>
          <div className="ms-auto text-white">
            <ChevronRight />
          </div>
        </div>
        <div>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="https://www.github.com">
                <img
                  alt="GitHub Pages"
                  src="https://img.shields.io/badge/GitHub%20Pages-%23327FC7.svg?style=flat&llogo=github&logoColor=white"
                />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.sqlite.org/">
                <img
                  alt="SQLite"
                  src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=flat&logo=sqlite&logoColor=white"
                />
              </a>
            </li>
            <li className="list-inline-item">
              {' '}
              <a href="https://www.heroku.com/">
                <img
                  alt="Heroku"
                  src="https://img.shields.io/badge/Heroku%20-%23430098.svg?logo=heroku&logoColor=white"
                />
              </a>
              {' '}
            </li>
            <li className="list-inline-item">
              <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
            </li>
          </ul>
        </div>
        <div className="d-flex mb-4">
          <h2 className="text-white">Software & Tools</h2>
          <div className="ms-auto text-white">
            <ChevronRight />
          </div>
        </div>
        <div>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="https://codepen.io/">
                <img
                  alt="Codepen"
                  src="https://img.shields.io/badge/Codepen-000000.svg?logo=codepen&logoColor=white"
                />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://git-scm.com/">
                <img
                  alt="Git"
                  src="https://img.shields.io/badge/Git%20-%23F05033.svg?logo=git&logoColor=white"
                />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://code.visualstudio.com/">
                <img
                  alt="Visual Studio Code"
                  src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?logo=visual-studio-code&logoColor=white"
                />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://stackoverflow.com/">
                <img
                  alt="Stack Overflow"
                  src="https://img.shields.io/badge/-Stack%20Overflow-FE7A16?logo=stack-overflow&logoColor=white"
                />
              </a>
            </li>
            <li className="list-inline-item">
              <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
            </li>
            <li className="list-inline-item">
              <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" />
            </li>
            <li className="list-inline-item">
              <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default AboutContent;
