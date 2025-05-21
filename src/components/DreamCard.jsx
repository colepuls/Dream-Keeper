import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { EllipsisVertical, Pencil, Trash } from 'lucide-react';
import '../assets/DreamCard.css';

/**
 * dream - property for a dream
 * onEdit - property for handleEdit
 * onDelete - property for handleDelete
 * @param { dream, onEdit, onDelete } // Properties.
 * @returns html for a single dream card.
 */
export default function DreamCard({ dream, onEdit, onDelete }) {
  // Initialize edit menu to false.
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null); // Points to menu DOM node.

  // Takes event object from menu button click.
  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevents onClick handler from firing again and closing the menu.
    setShowMenu((prev) => !prev); // Flips from whatever the previous state was. Hides and Opens the menu.
  };

  // Logic to close menu when user clicks outside of it.
  useEffect(() => { // Runs after the components renders.
    const handleClickOutside = (e) => { // Triggered whenever the user clicks anywhere on the page.
      // Checks if menu node is visible and if there was a click anywhere outside of the menu.
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false); // Hide menu if clicked outside.
      }
    };

    // Add event listener for click
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside); // Clean up listener to prevent memory stacking.
  }, []);

  return (
    <Link to={`/view/${dream.id}`} className="card" data-id={dream.id}>

      <p className="dream-title">{dream.title}</p>
      {dream.mood && <span className="mood-tag">{dream.mood}</span>}

      <button
        className="menu-button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();  
          toggleMenu(e);
        }}
      >
        <EllipsisVertical color="rgb(78, 78, 78)" />
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