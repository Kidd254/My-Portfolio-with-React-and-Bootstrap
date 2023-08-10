import {
  FaTwitter, FaLinkedin, FaGithub, FaMedium, FaAngellist,
} from 'react-icons/fa';
import backgroundImage from '../assets/images/Header bg.jpg';

const HomeContent = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <div style={backgroundStyle} className="container m-3">
      <div className="row">
        <div className="col-md-6">
          <h1>I&apos;m Lawrence Glad to See You</h1>
        </div>
      </div>
      <div>
        <p>
          I&apos;m a software developer! I can help you build a product ,
          feature or website Look through some of my work and experience!
          If you like what you see and have a project you need coded,don’t hestiate to contact me.
        </p>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h2>Lets Connect</h2>
          <div>
            <a href="https://github.com" aria-label="Github"><FaGithub size={32} /></a>
            <a href="https://linkedin.com" aria-label="Linkedin"><FaLinkedin size={32} /></a>
            <a href="https://medium.com" aria-label="Medium"><FaMedium size={32} /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FaTwitter size={32} /></a>
            <a href="https://angellist.com" aria-label="Angellist"><FaAngellist size={32} /></a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomeContent;
