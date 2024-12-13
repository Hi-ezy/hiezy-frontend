
import './App.css';
import VideoInterviewApp from './Components/VideoInterview/VideoInterview'
import CandidateUploader from './Components/CandidateShortlisting/CandidateShortlisting';
import HomePage from './Components/HomePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/interview" element={<HomePage />} />
        <Route path="/hr" element={<CandidateUploader />} />
        <Route path="/video-interview" element={< VideoInterviewApp/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
