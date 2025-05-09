import { useEffect, useRef, useState } from 'react';

export default function DreamCard({ dream, onEdit, onDelete }) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setShowMenu((prev) => !prev);
  };

  // Close menu on outside click
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