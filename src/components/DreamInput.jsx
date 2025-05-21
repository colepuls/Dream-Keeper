import { useState, useRef } from 'react';
import '../assets/DreamInput.css';
import '../assets/Navigator.css';
import Modal from '../components/Modal';
import { queryOllama } from '../apis/OllamaApi';
import Navigator from '../components/Navigator';


/**
 * Component for the dream input page.
 * Handles saving dreams and displaying title modal.
 * @returns html for input page and modal if dream is entered.
 */
export default function DreamInput() {
  const [showModal, setShowModal] = useState(false); // Initialzes title prompt Modal to not show.
  const [currentBody, setCurrentBody] = useState(''); // Initializes dream body to empty.
  const [title, setTitle] = useState(''); // Initializes dream title to empty.
  const inputRef = useRef(null); // Points to input node, initializes as null.

  // If dream is entered, set dream contents and initialize title to be empty, then make title Modal visible.
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const body = e.target.value.trim();
      if (!body) return;
      setCurrentBody(body);
      setTitle('');
      setShowModal(true);
    }
  };

  const saveDream = async () => {
    if (!title.trim()) return; // Keep prompting user for title.

    // Ask AI for mood tag
    let mood = 'unknown';
    try {
      const aiPrompt = `What is the mood of the following dream? Respond with ONLY A ONE word tag like scary, sad, happy, confusing, peaceful, eye-opening. Again you should respond with only the tag, nothing else. ${currentBody}`;
      const response = await queryOllama(aiPrompt);
      mood = response.trim().toLowerCase();
    } catch (err) {
      console.error('Failed to get mood from AI: ', err);
    }

    const newDream = {
      id: Date.now(), // Unique id.
      title: title.trim(),
      text: currentBody,
      mood,
    };

    const existing = JSON.parse(localStorage.getItem('dreams') || '[]'); // Load previous dreams from local storage.
    existing.push(newDream); // Add new dream to list.
    localStorage.setItem('dreams', JSON.stringify(existing)); // Set new list back to local storage.
    setShowModal(false); // Hide title modal.
    setCurrentBody(''); // Empty body for a new dream.
    inputRef.current.value = ''; // Empty textbox for a new dream.
  };

  return (
    <div className="page-container">
  
      <div className="input-container">
        <textarea
          id="dreamInput"
          className="textbox"
          placeholder="Enter your dream ☽..."
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
      </div>
  
      {showModal && (
        <Modal
          titleValue={title}
          onTitleChange={setTitle}
          onSave={saveDream}
          onCancel={() => setShowModal(false)}
        />
      )}

      <Navigator/>
    </div>
  );  
}
