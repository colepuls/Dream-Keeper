import { Link } from 'react-router-dom';
import { House } from 'lucide-react';

export default function Navigator() {
  return (
    <div className="navigator-container">
        <Link to="/create" className="create-button">New Dream</Link>

        <Link to="/" className="home-button">
          <House color="white" size={28} />
        </Link>
    </div>
  );
}