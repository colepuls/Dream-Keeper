import { Link } from 'react-router-dom';
import { House, BadgePlus, Search } from 'lucide-react';

export default function Navigator() {
  return (
    <div className="navigator-container">
        <Link to="/" className="home-button">
          <House color="white" size={28} />
        </Link>

        <Link to="/create" className="create-button">
          <BadgePlus className="color-animate" color="white" size={28} />
        </Link>

        <Search className="search-button" color="white" size={50} />
    </div>
  );
}