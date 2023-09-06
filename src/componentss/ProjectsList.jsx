import firstProject from '../assets/images/Annual.PNG';
import firstProject2 from '../assets/images/first capstone2.PNG';
import bookstore from '../assets/images/bookcms.PNG';
import spaceTravellers from '../assets/images/space travellers hub.png';
import leaderboard from '../assets/images/leaderboard image.PNG';
import shows from '../assets/images/movies.PNG';
import styles from '../styles/ProjectsList.module.css';

const projects = [
  {
    id: 1,
    image: [firstProject, firstProject2],
    alt: 'first Capstone Project',
    heading: 'Annual SuperCruise Festival Website',
    description:
      'In this website users can find information about where and when the festival will be held, informs users about the performing artists as well as the festival program. The about page displays infomation about past supercruice celebrations and contact information',
    languages: ['HTML', 'CSS', 'JavaScript'],
    projectLink: 'https://kidd254.github.io/Module1-Capstone-Project/',
  },
  {
    id: 2,
    image: [bookstore],
    alt: 'bookstore app image',
    heading: 'BookStore Web App',
    description:
      'In this web app a user can add books, track reading progress and remove unneccesary books. Moreover a user can add and edit comments',
    languages: ['React', 'HTML', 'JavaScript'],
    projectLink: 'https://bookstore-react-redux-x12q.onrender.com/',
  },
  {
    id: 3,
    image: [spaceTravellers],
    alt: 'Space Travellers App image',
    heading: 'Space Travellers Hub',
    description:
      "This web app is for a company that offers space travel services. It's built with React and Redux, using spaceX API to get the data",
    languages: ['React', 'Redux', 'JavaScript', 'HTML', 'CSS'],
    projectLink: 'https://space-travelers-hub-l1ba.onrender.com/',
  },
  {
    id: 4,
    image: [leaderboard],
    alt: 'Leaderboard App Image',
    heading: 'Leaderboad App',
    description:
      'This  Web App fetches scores from API and displays them with the corresponding scorer name. Moreover, one can add there score by filling the input fields with the user name and the score',
    languages: ['HTML', 'CSS', 'JavaScript'],
    projectLink: 'https://kidd254.github.io/Leaderboard/',
  },
  {
    id: 5,
    image: [shows],
    alt: 'An image of a page displaying a list of shows',
    heading: 'Television Series Web App',
    description:
      'This app makes use of an API and it displays a library of Tv Shows upon a search input. You can search for your favorite show or movie categories.',
    languages: ['HTML', 'CSS', 'JavaScript'],
    projectLink: 'https://hfg43.github.io/JS_Capstone/',
  },
];

const ProjectList = () => (
  <div
    className={`container-fluid align-items-center justify-content-center bg-secondary bg-secondary-light pt-3 pb-3 ${styles.background}`}
  >
    {projects.map((project) => (
      <div
        key={project.id}
        className="row m-5 p-2 rounded max-h-600 h-500 min-h-450 bg-dark"
      >
        <div className="left col-md-6 align-items-center">
          <div className="mt-3 mb-3 ratio ratio-4x3 text-white">
            <img
              src={project.image[0]}
              alt={project.alt}
              className={`image-fluid ${styles.image}`}
            />
          </div>
        </div>
        <div className="right col-md-6 pt-3 pb-3">
          <div className="row">
            <div className="col-md-12 text-white">
              <h2>{project.heading}</h2>
            </div>
          </div>
          <div className="h-450 pt-2 pb-2 text-white">
            <p>{project.description}</p>
          </div>
          <div>
            <ul className="list-inline">
              {project.languages.map((language) => (
                <li
                  key={language}
                  className="list-inline-item bg-primary bg-primary-light rounded p-2 text-white"
                >
                  {language}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-info cursor-pointer background"
            >
              <a
                href={project.projectLink}
                target="_blank"
                className={`text-white ${styles.underline}`}
                rel="noreferrer"
              >
                See Project
              </a>
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ProjectList;
