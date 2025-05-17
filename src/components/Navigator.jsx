import { Link } from 'react-router-dom';
import { House, BadgePlus, Search, MessageCircleQuestion } from 'lucide-react';

export default function Navigator() {
  return (
    <div className="navigator-container">
        <Link to="/" className="home-button">
          <House color="black" size={18} />
        </Link>

        <Link to="/create" className="create-button">
          <BadgePlus className="color-animate" color="black" size={18} />
        </Link>

        <Link to="/AskAI" className="help-button">
          <MessageCircleQuestion color="black" size={18}/>
        </Link>

        <Search className="search-button" color="black" size={33} />
    </div>
  );
}