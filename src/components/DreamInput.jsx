import { useState, useRef } from 'react';
import '../assets/DreamInput.css';
import Modal from '../components/Modal';
import { queryOllama } from '../apis/OllamaApi';
import Navigator from '../components/Navigator';

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

  const saveDream = async () => {
    if (!title.trim()) return;

    let mood = 'unknown';
    try {
      const aiPrompt = `What is the mood of the following dream? Respond with ONLY A ONE word tag like scary, sad, happy, confusing, peaceful, eye-opening. Again you should respond with only the tag, nothing else. ${currentBody}`;
      const response = await queryOllama(aiPrompt);
      mood = response.trim().toLowerCase();
    } catch (err) {
      console.error('Failed to get mood from AI: ', err);
    }

    const newDream = {
      id: Date.now(),
      title: title.trim(),
      text: currentBody,
      mood,
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
