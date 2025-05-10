import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DreamInput from './components/DreamInput';

/**
 * @returns routes to all contents of the application. 
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<DreamInput />} />
      </Routes>
    </BrowserRouter>
  );
}