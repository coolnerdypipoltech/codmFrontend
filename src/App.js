import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegistroPage from "./pages/RegistroPage";

import InstructionsPage from "./pages/InstructionsPage";
import Navbar from "./components/HomePage/Navbar";
import PrivacyPage from "./pages/PrivacyPage";
import FAQsPage from "./pages/FAQsPage";
function App() {
  return (
    <Router basename="/">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registro" element={<RegistroPage />} />
        <Route path="/instructions" element={<InstructionsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/codmFrontend" element={<HomePage />} />
        <Route path="/codmFrontend/registro" element={<RegistroPage />} />
        <Route
          path="/codmFrontend/instructions"
          element={<InstructionsPage />}
        />
        <Route
          path="/codmFrontend/privacy"
          element={<PrivacyPage />}
        />
        <Route
          path="/codmFrontend/faqs"
          element={<FAQsPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
