import { ShowerHead } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {handleGetJDwithAI} from './JobDescCreationPage';

export const JobDescCreationPage = () => {
  const navigate = useNavigate();
 const {getjdwithai}= handleGetJDwithAI();


  const setErrorState = useState(false);
  const [step, setStep] = useState(0);
  const [jobTittle, setJobTitle] = useState('');
  const [department, setDepartment] = useState('');
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState('');
  const [location, setLocation] = useState('');
  const [qualification, setQualification] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [JD, setJD] = useState('');
  const [jobDesc, setJobDesc] = useState('');

  /*
    "jobTittle":"AI Product Manager",
    "department":"Analytics",
    "location": "Pune",
    "skill":"PowerBI",
    "Qualification":"Btech ComputerScience",
    "Responsibilities":"Product enhancement",
    "experience":"2-3 years"
  */
    

    
  const steps = [
    { id: 0, label: 'Create Job Description', component: Step0 },
    { id: 1, label: 'Enter Job Title', component: Step1 },
    { id: 2, label: 'Enter Department', component: Step2 },
    { id: 3, label: 'Enter Skills', component: Step3 },
    { id: 4, label: 'Enter Experience', component: Step4 },
    { id: 5, label: 'Enter Location', component: Step5 },
    { id: 6, label: 'Enter Qualification', component: Step6 },
    { id: 7, label: 'Enter Responsibilities', component: Step7 },
    { id: 8, label: 'Upload Job Description', component: Step8 },
    { id: 9, label: 'Publish Job Description', component: Step9 },
  ];

  const handleCreateJDwithAI = () => {
    console.log("its clicked");
    const jobDesc = getjdwithai(jobTittle, department,skills,experience,location,qualification, responsibilities);
    console.log("jd",jobDesc);
    setJobDesc(jobDesc);
    //fill the getjdwithai response in the step 8 input box
  };
  
  
  /*= (event) => {
    const JD = getjdwithai(event, jobTittle, department,skills,experience,location,qualification, responsibilities,setErrorState);
    setErrorState(true);
    console.log("jd",JD);
  };*/
  
  const handleJobDescriptionPublish = (event) => {
    event.preventDefault();
    
  };

  return (
    <div className="flex flex-col h-full min-h-screen font-sans md:flex-row">
    {/* Top Bar */}
    <div className="fixed top-0 left-0 z-10 flex items-center justify-between w-full p-4 bg-white border-b border-gray-200 shadow-md">
      <img src="/assets/HiezyLogo1.png" alt="Hiezy Logo" className="h-8" />
      <div className="flex items-center justify-center text-white bg-blue-500 rounded-full w-9 h-9">D</div>
    </div>

    <div className="flex flex-grow w-full pt-16">
    {/* Main Content */}
    <div className="flex flex-col w-full p-6 bg-white md:w-1/2">
      {/* Buttons */}
      <div className="flex gap-4 mb-4">
        <button className="px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-full shadow" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>

      {/* Dynamic Step Content */}
      <div className="flex flex-col flex-grow h-full gap-6 overflow-y-auto">
        {steps.map(({ id, component: Component }) => id === step &&
         <Component key={id} 
         setStep={setStep} 
         setJobTitle={setJobTitle}
         setDepartment={setDepartment}
         setSkills={setSkills}
         setExperience={setExperience} 
         setLocation={setLocation} 
         setQualification={setQualification} 
         setResponsibilities={setResponsibilities}
         setJD ={setJD} 
         JobDesc={setJobDesc}
         handleCreateJDwithAI={handleCreateJDwithAI}
         />)}
      </div>
    </div>

    {/* Promo Section */}
    <div className="hidden w-1/2 text-center text-white bg-center bg-cover md:flex" style={{ backgroundImage: "url('../assets/women_hr.jpg')" }}>
      <div className="flex flex-col items-center justify-center w-full h-full p-6 bg-black bg-opacity-50 rounded-lg">
        <h1 className="mb-2 text-4xl font-bold">YOUR HIRING AI PARTNER</h1>
        <p className="text-lg">Got a hiring position open? Start here by asking me anything about it.</p>
      </div>
    </div>
  </div>
</div>
  );
};


// Step Components
const Step0 = ({ setStep }) => (
  <div className="p-4 bg-gray-100 rounded-lg">
    <p>Lets start the journey to create the ideal Job Description. click on the button below.</p>
    <button onClick={() => setStep(1)} className="self-end p-4 text-white bg-teal-400 rounded-lg">
      Create Job Description
    </button>
  </div>
);

const Step1 = ({ setStep, setJobTitle }) => (
  <div className="p-4 bg-gray-100 rounded-lg">
    <p>Let’s get this Job Description started! Give me a job title.</p>
    <div className="flex gap-4">
      {['AI Product Manager', 'Growth Product Manager', 'Associate Product Manager'].map((title) => (
        <button key={title} onClick={() => { setJobTitle(title); setStep(2); }} className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">
          {title}
        </button>
      ))}
    </div>
    <div className="flex items-center gap-2 mt-4">
      <input
        type="text"
        placeholder="Enter custom Job Title..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400"
        onChange={(e) => setJobTitle(e.target.value)}
      />
      <button onClick={() => setStep(2)} className="p-2 text-white bg-teal-400 rounded-full hover:bg-teal-500">➤</button>
    </div>
  </div>
);

const Step2 = ({ setStep, setDepartment }) => (
  <div className="p-4 bg-gray-100 rounded-lg">
    <p>What department should the person be in?</p>
    <div className="flex gap-4">
      {['Analytics', 'Marketing', 'Product'].map((dept) => (
        <button key={dept} onClick={() => { setDepartment(dept); setStep(3); }} className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">
          {dept}
        </button>
      ))}
    </div>
    <div className="flex items-center gap-2 mt-4">
      <input
        type="text"
        placeholder="Enter custom department..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400"
        onChange={(e) => setDepartment(e.target.value)}
      />
      <button onClick={() => setStep(3)} className="p-2 text-white bg-teal-400 rounded-full hover:bg-teal-500">➤</button>
    </div>
  </div>
);

const Step3 = ({ setStep, setSkills }) => (
  <div className="p-4 bg-gray-100 rounded-lg">
    <p>What skills should the person have?</p>
    <div className="flex items-center gap-2 mt-4">
      <input
        type="text"
        placeholder="Enter custom skill1,Skill2..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400"
        onChange={(e) => setSkills(e.target.value)}
      />
      <button onClick={() => setStep(4)} className="p-2 text-white bg-teal-400 rounded-full hover:bg-teal-500">➤</button>
    </div>
  </div>
);

const Step4 = ({ setStep, setExperience }) => (
  <div className="p-4 bg-gray-100 rounded-lg">
    <p>What experience should the person have?</p>
    <div className="flex gap-4">
      {['0-2 years', '2-3 years', '5-6 years'].map((exp) => (
        <button key={exp} onClick={() => { setExperience(exp); setStep(5); }} className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">
          {exp}
        </button>
      ))}
    </div>
    <div className="flex items-center gap-2 mt-4">
      <input
        type="text"
        placeholder="Enter custom experience..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400"
        onChange={(e) => setExperience(e.target.value)}
      />
      <button onClick={() => setStep(5)} className="p-2 text-white bg-teal-400 rounded-full hover:bg-teal-500">➤</button>
    </div>
  </div>
);

const Step5 = ({ setStep, setLocation }) => (
  <div className="p-4 bg-gray-100 rounded-lg">
    <p>Where is the location of the person you are hiring?</p>
    <div className="flex gap-4">
      {['Bangalore', 'Pune', 'Remote'].map((loc) => (
        <button key={loc} onClick={() => { setLocation(loc); setStep(6); }} className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">
          {loc}
        </button>
      ))}
    </div>
    <div className="flex items-center gap-2 mt-4">
      <input
        type="text"
        placeholder="Enter custom location..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400"
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={() => setStep(6)} className="p-2 text-white bg-teal-400 rounded-full hover:bg-teal-500">➤</button>
    </div>
  </div>
);

const Step6 = ({ setStep, setQualification }) => (
  <div className="p-4 bg-gray-100 rounded-lg">
    <p>What qualifications should the candidate have?</p>
    <div className="flex gap-4">
      {['MBA', 'Engineer'].map((qual) => (
        <button key={qual} onClick={() => { setQualification(qual); setStep(7); }} className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">
          {qual}
        </button>
      ))}
    </div>
    <div className="flex items-center gap-2 mt-4">
      <input
        type="text"
        placeholder="Enter custom qualification..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400"
        onChange={(e) => setQualification(e.target.value)}
      />
      <button onClick={() => setStep(7)} className="p-2 text-white bg-teal-400 rounded-full hover:bg-teal-500">➤</button>
    </div>
  </div>
);

const Step7 = ({ setStep, setResponsibilities }) => (
  <div className="p-4 bg-gray-100 rounded-lg">
    <p>What responsibilities should the candidate have?</p>
    <div className="flex items-center gap-2 mt-4">
      <input
        type="text"
        placeholder="Enter custom responsibilities..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400"
        onChange={(e) => setResponsibilities(e.target.value)}
      />
      <button onClick={() => setStep(8)} className="p-2 text-white bg-teal-400 rounded-full hover:bg-teal-500">➤</button>
    </div>
  </div>
);

const Step8 =  ({ setStep, JobDesc, setJD, handleCreateJDwithAI }) => (
  <div className="p-4 bg-gray-100 rounded-lg">
    <input id= "JobDesc"  type="text" value = {JobDesc} placeholder="Job Description" 
    className="p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400 h-screen/2" onChange={(e) => setJD(e.target.value)}/>
    <div className="mt-4">
      <p>Do you want to create Job Description with AI <button onClick={handleCreateJDwithAI} className="text-teal-500">AI Magic</button>.</p>
    </div>
    <button onClick={() => setStep(9)} className="p-2 text-white bg-teal-400 rounded-full hover:bg-teal-500">Next</button>
  </div>
);

const Step9 = ({ handleJobDescriptionPublish }) => (
  <div className="p-4 bg-gray-100 rounded-lg">
    <button onClick={() => handleJobDescriptionPublish()} className="p-2 text-white bg-teal-400 rounded-full hover:bg-teal-500">Publish</button>
  </div>
);
