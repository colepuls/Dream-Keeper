import { Link } from 'react-router-dom';
import { House, BadgePlus, MessageCircleQuestion } from 'lucide-react';
import '../assets/Navigator.css';

export default function Navigator() {
  return (
    <div className="navigator-container">
        <Link to="/" className="home-button">
          <House color="white" size={24} />
        </Link>

        <Link to="/create" className="create-button">
          <BadgePlus className="color-animate" color="white" size={24} />
        </Link>

        <Link to="/AskAI" className="help-button">
          <MessageCircleQuestion color="white" size={24}/>
        </Link>
    </div>
  );
}