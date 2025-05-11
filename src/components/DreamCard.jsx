import { useEffect, useRef, useState } from 'react';

/**
 * Dream - property for a dream
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
    <div className="card" data-id={dream.id}>
      <p>{dream.title}</p>
      <button className="menu-button" onClick={toggleMenu}>⋮</button>

      {showMenu && (
        <div className="menu" ref={menuRef}>
          <button onClick={() => alert(dream.text)}>
            <img className="view-icon" src="/assets/images/view.png" alt="view" />
          </button>
          <button onClick={() => onEdit(dream.id)}>
            <img className="edit-icon" src="/assets/images/edit.png" alt="edit" />
          </button>
          <button onClick={() => onDelete(dream.id)}>
            <img className="trash-icon" src="/assets/images/trash.png" alt="delete" />
          </button>
        </div>
      )}
    </div>
  );
}