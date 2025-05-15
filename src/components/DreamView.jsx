import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navigator from '../components/Navigator';
import '../assets/DreamInput.css';

export default function DreamView() {
  const { id } = useParams(); // Get the dream ID from the URL.
  const [dream, setDream] = useState(null);

  useEffect(() => {
    const dreams = JSON.parse(localStorage.getItem('dreams')) || [];
    const found = dreams.find((d) => d.id.toString() === id);
    setDream(found);
  }, [id]);

  if (!dream) return <p>Dream not found</p>;

  return (
    <>
      <div className="dream-view">
        <h2>{dream.title}</h2>
        <p>{dream.text}</p>
      </div>

      <Navigator />
    </>
  );
}
