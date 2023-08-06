import PropTypes from 'prop-types';
import NavBar from '../componentss/NavBar';

const Layout = ({ children }) => (
  <>
    <NavBar />
    <main>
      {children}
    </main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
