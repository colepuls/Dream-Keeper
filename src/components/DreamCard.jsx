import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { EllipsisVertical, Pencil, Trash, Tag } from 'lucide-react';
import '../assets/DreamCard.css';

export default function DreamCard({ dream, onEdit, onDelete }) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setShowMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <Link to={`/view/${dream.id}`} className="card" data-id={dream.id}>

      <p className="dream-title">{dream.title}</p>
      {dream.mood && <span className="mood-tag">
          <Tag className="tag" size={12}/>
          {dream.mood}
        </span>}

      <button
        className="menu-button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();  
          toggleMenu(e);
        }}
      >
        <EllipsisVertical color="black" />
      </button>

      {showMenu && (
        <div className={`menu ${showMenu ? 'show' : ''}`} ref={menuRef}>
          <button
            className="edit-icon"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();  
              toggleMenu(e);
              onEdit(dream.id);
            }}
          >
            <Pencil color="white" size={18}/>
          </button>
          <button
            className="trash-icon"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();  
              toggleMenu(e);
              onDelete(dream.id);
            }}
          >
            <Trash color="white" size={18}/>
          </button>
        </div>
      )}
    </Link>
  );
}