
import './App.css';
import VideoInterviewApp from './Components/VideoInterview/VideoInterview'
import CandidateUploader from './Components/CandidateShortlisting/CandidateShortlisting';
import HomePage from './Components/HomePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from './Components/LoginPage/LoginPage.jsx';
import JobDescCreator from './Components/JobDescCreationPage/JobDescCreation.jsx';
import Signup from './Components/Signup/Signup.jsx';
// import Dashboard from './Components/MainPage/Dashboard.jsx';
import Dashboard from './Components/EmployerComponnent/Dashboard/Dashboard.jsx';
import Jobs from './Components/EmployerComponnent/Dashboard/EmployerJobPosting.jsx';
// import Jobs from './Components/MainPage/Jobs.jsx';
// import JobDetails from './Components/MainPage/JobDetails.jsx';
import JobDetails from './Components/EmployerComponnent/Dashboard/ViewJobs.jsx';
import CareerPage from './Components/CareerPage/CareerPage.jsx';
import ResumeSubmit from './Components/CareerPage/ResumeSubmit.jsx';
import EmployerDashboard from './Components/EmployerComponnent/Dashboard/EmployerDashboard.jsx';
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/interview" element={<VideoInterviewApp />} />
        <Route path="/hr" element={<CandidateUploader />} />  
        <Route path="/login" element={< LoginPage/>} />
        <Route path='/career-page' element={<CareerPage/>} />
        <Route path='/resume-submit/:indexid' element={<ResumeSubmit/>} />
        <Route path='/employer' element={<EmployerDashboard/>}> 
          <Route path='/employer/dashboard' element={<Dashboard/>} /> 
          <Route path='/employer/jobs' element={<Jobs/>} /> 
          <Route path="/employer/job-details/:indexid" element={<JobDetails/>} />
          <Route path='/employer/jdcreation' element={<JobDescCreator/>} />
        </Route>
        <Route path='/jobs' element={<Jobs/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
