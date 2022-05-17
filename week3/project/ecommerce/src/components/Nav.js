import { Link } from 'react-router-dom';

import '../css/Nav.css';

function Nav() {
  return (
    <div className="nav">
      <Link to={'/'} className="nav-link">
        Products
      </Link>
      <Link to='/favourites' className="nav-link">
        Favourites
      </Link>
    </div>
  );
}

export default Nav;