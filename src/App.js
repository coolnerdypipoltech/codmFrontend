import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegistroPage from './pages/RegistroPage';
import TestPage from './pages/TestPage';

function App() {
  return (
    <Router basename="/codmFrontend">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registro" element={<RegistroPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/codmFrontend" element={<HomePage />} />
        <Route path="/codmFrontend/registro" element={<RegistroPage />} />
        <Route path="/codmFrontend/test" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
