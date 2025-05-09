import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DreamInput from './components/DreamInput';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<DreamInput />} />
      </Routes>
    </BrowserRouter>
  );
}