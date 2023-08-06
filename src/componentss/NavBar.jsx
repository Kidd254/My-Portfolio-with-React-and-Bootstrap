import MenuLink from "./MenuLink";

const NavBar =() => (
    <header>
        <div className="container-fluid">
            <nav className="navbar navbar-expand-md bg-primary">
                <ul className="navbar-nav list-unstyled">
                    <MenuLink url="/home" pageName="Home"/>
                    <MenuLink url="/projects" pageName="My Projects"/>
                    <MenuLink url="/contacts" pageName="Contact Me"/>
                </ul>
            </nav>
        </div>
    </header>
);

export default NavBar;