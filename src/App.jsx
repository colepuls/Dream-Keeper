import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DreamInput from './components/DreamInput';
import DreamView from './components/DreamView';
import AIChat from './components/AIChat';

/**
 * Contains all of the apps pages and routes
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/AskAI" element={<AIChat/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<DreamInput/>}/>
        <Route path="/view/:id" element={<DreamView/>}/>
      </Routes>
    </BrowserRouter>
  );
}