import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DreamCard from '../components/DreamCard';
import '../assets/Home.css';

/**
 * Component for the Home page, where users can create a new dream and view or edit their other dreams.
 * Handles all of the dream updating.
 * @returns html for new dream button and dream cards.
 */
export default function Home() {
  // Initilaize dreams as empty list and and setDreams to update list and re-render.
  const [dreams, setDreams] = useState([]);

  // Runs once after the Home component is mounted (displayed) becasue of '[]'.
  // Loads dreams from local storage and sets them.
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('dreams')) || [];
    setDreams(saved);
  }, []);

  // Takes argument updatedDreams (new list of dreams) and sets them, then puts new list of dreams into local storage.
  const updateLocalStorage = (updatedDreams) => {
    setDreams(updatedDreams);
    localStorage.setItem('dreams', JSON.stringify(updatedDreams));
  };

  // Takes argument id (unique identifier for a dream) and returns every dream but the id of the one passed in,
  // resulting in deleting the dream. Then updates to local storage.
  const handleDelete = (id) => {
    const filtered = dreams.filter((d) => d.id !== id);
    updateLocalStorage(filtered);
  };

  // Takes argument id (unique identifier for a dream). Prompts user to edit title. Exits if no title is entered.
  // Then finds the dream that was edited, makes a copy and updates the title.
  // Then updated to local storage.
  const handleEdit = (id) => {
    const newTitle = prompt('Edit title:');
    if (!newTitle) return;
    const updated = dreams.map((d) =>
      d.id === id ? { ...d, title: newTitle } : d
    );
    updateLocalStorage(updated);
  };

  return (
    <div className="page-container">
      <div className="logo-container">
        <Link to="/create" className="logo-button">New Dream</Link>
      </div>
  
      <div id="dream-container">
        {dreams.map((dream) => (
          <DreamCard
            key={dream.id}
            dream={dream}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );  
}
