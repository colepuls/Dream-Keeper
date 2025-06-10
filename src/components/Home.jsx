import { useEffect, useState } from 'react';
import DreamCard from '../components/DreamCard';
import Navigator from '../components/Navigator';
import { queryOllama } from '../apis/OllamaApi';
import { Search } from 'lucide-react';
import '../assets/Home.css';

/**
 * Home page contains: Dream cards, Search for dream filter, and a page    Navigator.
 */
export default function Home() {
  const [dreams, setDreams] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDreams, setFilteredDreams] = useState([]);

  // Runs once (}, []) after the home page component mounts. Loads all of the saved dreams when app is first loaded.
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('dreams')) || [];
    setDreams(saved);
    setFilteredDreams(saved);
  }, []);

  // Updates list of dreams in local storage.
  const updateLocalStorage = (updatedDreams) => {
    setDreams(updatedDreams);
    setFilteredDreams(updatedDreams);
    localStorage.setItem('dreams', JSON.stringify(updatedDreams));
  };

  // Filters and gets all dreams that are not the deleted dream. Resulting in deleting a dream. Updates local storage
  const handleDelete = (id) => {
    const filtered = dreams.filter((d) => d.id !== id);
    updateLocalStorage(filtered);
  };

  // Passes id of dream that is being edited, prompts user to edit title.
  const handleEdit = (id) => {
    const newTitle = prompt('Edit title:');
    if (!newTitle) return;
    // If dream is the edited dream, copy the dream and override the title property with the new title.
    const updated = dreams.map((d) =>
      d.id === id ? { ...d, title: newTitle } : d
    );
    updateLocalStorage(updated);
  };

  
  useEffect(() => {
    // Timeout waits 600ms before running logic.
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

        // Checks if any keywords from prompt match a dreams title or mood.
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
  }, [searchQuery, dreams]); // Run the use effect everytime these change.

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