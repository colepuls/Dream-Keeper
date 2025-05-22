import { useEffect, useState } from 'react';
import DreamCard from '../components/DreamCard';
import Navigator from '../components/Navigator';
import { queryOllama } from '../apis/OllamaApi';
import { Search } from 'lucide-react';
import '../assets/Home.css';

/**
 * Component for the Home page, where users can create a new dream and view or edit their other dreams.
 * Handles all of the dream updating.
 * @returns html for new dream button and dream cards.
 */
export default function Home() {
  const [dreams, setDreams] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDreams, setFilteredDreams] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('dreams')) || [];
    setDreams(saved);
    setFilteredDreams(saved);
  }, []);

  const updateLocalStorage = (updatedDreams) => {
    setDreams(updatedDreams);
    setFilteredDreams(updatedDreams);
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

  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (!searchQuery.trim()) {
        setFilteredDreams(dreams);
        return;
      }

      const systemPrompt = `
      You're an assistant helping filter dream journal entries.
      Given a query and a list of dreams, return only the important keywords or themes the user might be asking about.
      Respond with a comma-separated list of single keywords only.

      User query: "${searchQuery}"
      `;

      try {
        const res = await queryOllama(systemPrompt);
        const keywords = res.split(',').map(k => k.trim().toLowerCase()).filter(k => k);

        const matches = dreams.filter(dream => {
          const text = `${dream.title} ${dream.mood}`.toLowerCase();
          return keywords.some(k => text.includes(k));
        });
        setFilteredDreams(matches);
      } catch (err) {
        console.error('Search error:', err);
      }
    }, 600);

    return () => clearTimeout(timeout);
  }, [searchQuery, dreams]);

  return (
    <div className="page-container">
  
      <div className="search-container">
        <Search className="search-icon" size={26}/>
        <input
          type="text"
          className="search-bar"
          placeholder="Search your dreams"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div id="dream-container">
        {filteredDreams.map((dream) => (
          <DreamCard
            key={dream.id}
            dream={dream}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
        {filteredDreams.length === 0 && <p>No matching dreams found.</p>}
      </div>

      <Navigator />
    </div>
  );  
}