import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuLink = ({ url, pageName }) => {
  const navLinkStatus = ({ isActive, isPendng }) => {
    if (isActive) return 'isActive';
    if (isPendng) return 'isPending';
    return null;
  };
  return (

    <li className="nav-item me-5">
      <Link to={url} className={`nav-link ${navLinkStatus}`}>{pageName}</Link>
    </li>

  );
};

MenuLink.propTypes = {
  url: PropTypes.string.isRequired,
  pageName: PropTypes.string.isRequired,
};

export default MenuLink;
