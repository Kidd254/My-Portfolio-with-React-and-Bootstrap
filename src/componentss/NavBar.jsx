import MenuLink from './MenuLink';

const NavBar = () => (
  <header>
    <div className="container-fluid bg-success">
      <nav className="navbar navbar-expand-md">
        <ul className="navbar-nav list-unstyled">
          <MenuLink url="/home" pageName="Home" />
          <MenuLink url="/projects" pageName="My Projects" />
          <MenuLink url="/about" pageName="About Myself" />
          <MenuLink url="/contacts" pageName="Contact Me" />
        </ul>
      </nav>
    </div>
  </header>
);

export default NavBar;
