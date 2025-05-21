import { useState, useRef, useEffect } from 'react';
import { queryOllama } from '../apis/OllamaApi';
import Navigator from './Navigator';
import '../assets/AIChat.css';

export default function AIChat() {
  const loadDreams = () => {
    return JSON.parse(localStorage.getItem('dreams') || '[]');
  };

  const systemInstructions = `
  You are an assistant that helps users manage their dreams in a journaling app.

  You can answer questions like:
  - How many dreams do I have?
  - How many are tagged as "happy"?
  - How do I delete or edit a dream?

  To delete a dream, tap the three-dot menu on a dream card, then press the trash icon.
  To edit a dream's title, tap the same menu and press the pencil icon.

  Always respond with clear and friendly advice.
  `;

  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading])

  const handleAsk = async () => {
    if (!prompt.trim()) return;

    const userMessage = { sender: 'user', text: prompt };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    setPrompt('');

    try {
      const context = `
      ${systemInstructions}
      Here are the saved dreams:
      ${loadDreams().map(d => `• "${d.title}" - Mood: ${d.mood}`).join('\n')}
      
      User question: ${prompt}
      `;

      const res = await queryOllama(context);
      const aiMessage = { sender: 'ai', text: res };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error('Error contacting AI:', err);
      const errMessage = { sender: 'ai', text: 'Error contacting AI.' };
      setMessages((prev) => [...prev, errMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAsk();
    }
  };

  return (
    <>
      <div className="container">
        <h2 className="header">Ask for help</h2>
    
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`bubble ${msg.sender === 'user' ? 'user-bubble' : 'ai-bubble'}`}
            >
              {msg.text}
            </div>
          ))}
          {loading && <div className="bubble ai-bubble"><em>Thinking...</em></div>}
          <div ref={bottomRef} />
        </div>
    
        <div className="send-message-container">
          <textarea
            className="input-text"
            placeholder="How can I help you?"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={3}
            cols={50}
          />
          <button
            className="send-button"
            onClick={handleAsk}
            disabled={loading || !prompt.trim()}
          >
            Send
          </button>
        </div>
      </div>
      <Navigator />
    </>
  );  
}
