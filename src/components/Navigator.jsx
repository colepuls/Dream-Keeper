import { Link } from 'react-router-dom';
import { House, BadgePlus, MessageCircleQuestion } from 'lucide-react';
import '../assets/Navigator.css';

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
    </div>
  );
}