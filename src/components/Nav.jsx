import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
          <Link to="/">Home</Link>
          <Link to="users/ronaldo">Ronaldo</Link>
          <Link to="users/Messi">Messi</Link>
          <Link to="users/br4gg">David Bragg</Link>

          {/* <Link to="/About">About</Link> //This ends the first part of routing
          <Link to="/Contact">Contact</Link> */}
        </nav>
    );
}
export default Nav;