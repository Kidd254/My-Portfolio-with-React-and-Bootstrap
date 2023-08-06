import { Link } from "react-router-dom";
const MenuLink = ({url, pageName})=>{
    const navLinkStatus= ({isActive, isPendng})=>{
        if(isActive) return 'isActive';
        if(isPendng) return 'isPending';
        return null;
    }
    return(
        
            <li className="nav-item me-5">
                <Link to={url} className={`nav-link ${navLinkStatus}`}>{pageName}</Link>
            </li>
        
    )
}

export default MenuLink;