import NavBar from "../componentss/NavBar";

const Layout = ({children}) =>(
    <>
    <NavBar />
    <main>
        {children}
    </main>
    </>
);

export default Layout;