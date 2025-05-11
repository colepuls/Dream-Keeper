import { useState, useRef } from 'react';
import '../assets/DreamInput.css';
import Modal from '../components/Modal';

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

  const saveDream = () => {
    if (!title.trim()) return; // Keep prompting user for title.
    const newDream = {
      id: Date.now(), // Unique id.
      title: title.trim(),
      text: currentBody,
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
      <a href="/" className="home-button">
        <img className="home-button-logo" src="/assets/images/home copy.png" />
      </a>
  
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
    </div>
  );  
}
