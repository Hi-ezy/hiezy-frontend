
import './App.css';
import VideoInterviewApp from './Components/VideoInterview/VideoInterview'
import CandidateUploader from './Components/CandidateShortlisting/CandidateShortlisting';
import HomePage from './Components/HomePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from './Components/LoginPage/LoginPage.jsx';
import MainPage from './Components/MainPage/MainPage.jsx';
import { JobDescCreationPage } from './Components/JobDescCreationPage/JobDescCreationPage.jsx';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/interview" element={<VideoInterviewApp />} />
        <Route path="/hr" element={<CandidateUploader />} />
        <Route path="/video-interview" element={< VideoInterviewApp/>} />
        <Route path="/login" element={< LoginPage/>} />
        <Route path='/MainPage' element={<MainPage/>} />
        <Route path='/JDcreation' element={<JobDescCreationPage/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
