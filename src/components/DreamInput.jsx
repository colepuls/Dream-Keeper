import { useState, useRef } from 'react';
import '../assets/DreamInput.css';
import Modal from '../components/Modal';

export default function DreamInput() {
  const [showModal, setShowModal] = useState(false);
  const [currentBody, setCurrentBody] = useState('');
  const [title, setTitle] = useState('');
  const inputRef = useRef(null);

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
    if (!title.trim()) return;
    const newDream = {
      id: Date.now(),
      title: title.trim(),
      text: currentBody,
    };
    const existing = JSON.parse(localStorage.getItem('dreams') || '[]');
    existing.push(newDream);
    localStorage.setItem('dreams', JSON.stringify(existing));
    setShowModal(false);
    setCurrentBody('');
    inputRef.current.value = '';
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
