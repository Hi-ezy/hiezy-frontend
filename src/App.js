
import './App.css';
import VideoInterviewApp from './Components/VideoInterview/VideoInterview'
import CandidateUploader from './Components/CandidateShortlisting/CandidateShortlisting';
import HomePage from './Components/HomePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from './Components/LoginPage/LoginPage.jsx';
import { JobDescCreationPage } from './Components/JobDescCreationPage/JobDescCreationPage.jsx';
import Signup from './Components/Signup/Signup.jsx';
import Dashboard from './Components/MainPage/Dashboard.jsx';
import Jobs from './Components/MainPage/Jobs.jsx';
import JobDetails from './Components/MainPage/JobDetails.jsx';
import CareerPage from './Components/CareerPage/CareerPage.jsx';
import ResumeSubmit from './Components/CareerPage/ResumeSubmit.jsx';

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
        <Route path='/CareerPage' element={<CareerPage/>} />
        <Route path='/ResumeSubmit/:indexId' element={<ResumeSubmit/>} />
        <Route path='/MainPage/Dashboard' element={<Dashboard/>} />
        <Route path='/MainPage/Jobs' element={<Jobs/>} />
        <Route path="/MainPage/JobDetails/:indexId" element={<JobDetails/>} />
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/JDcreation' element={<JobDescCreationPage/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
