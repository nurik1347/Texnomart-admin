import { Link } from 'react-router-dom';
import App from '../App';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/product">Products</Link>
        </li>
        <li>
          <Link to="/cattegory">Cattegory</Link>
        </li>
        <li>
          <Link to="/combo">Combo</Link>
        </li>
        <li>
          <Link to="/brands">Brands</Link>
        </li>
        <li>
          <Link to="/statistics">Statistik</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
