import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DreamCard from '../components/DreamCard';
import '../assets/home.css';
import '../assets/dreamDisplay.css';

export default function Home() {
  const [dreams, setDreams] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('dreams')) || [];
    setDreams(saved);
  }, []);

  const updateLocalStorage = (updatedDreams) => {
    setDreams(updatedDreams);
    localStorage.setItem('dreams', JSON.stringify(updatedDreams));
  };

  const handleDelete = (id) => {
    const filtered = dreams.filter((d) => d.id !== id);
    updateLocalStorage(filtered);
  };

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
        <Link to="/new" className="logo-button">New Dream</Link>
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
