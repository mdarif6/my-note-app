import "./App.css";
import logo from "./logo.png";
import ArchivePage from "./pages/archive-page/ArchivePage";
import HomePage from "./pages/home-page/HomePage";
import LabelPage from "./pages/label-page/LabelPage";
import LandingPage from "./pages/ladnding-page/LandingPage";
import LoginPage from "./pages/login-page/LoginPage";
import SignupPage from "./pages/signup-page/SignupPage";
import { Rout, Route, Routes } from "react-router-dom";
import TrashPage from "./pages/trash-page/TrashPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/label" element={<LabelPage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/trash" element={<TrashPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
