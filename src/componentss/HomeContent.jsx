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
    <div style={backgroundStyle}>
      <div>I&apos;m Lawrence Glad to See You</div>

      <div>
        <p>
          I&apos;m a software developer! I can help you build a product ,
          feature or website Look through some of my work and experience!
          If you like what you see and have a project you need coded,don’t hestiate to contact me.
        </p>
      </div>

    </div>
  );
};

export default HomeContent;
