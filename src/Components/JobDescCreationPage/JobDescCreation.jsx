import React, { useState } from "react";
import useJobCreation from "./fetchJobDescription";
const questions = [
  {
    id: 1,
    question: "What is the Job Title?",
    options: ["AI Product Manager", "Growth Product Manager", "Associate Product Manager"],
    field: "jobTitle",
  },
  {
    id: 2,
    question: "What department does this job belong to?",
    options: ["Analytics", "Marketing", "Product"],
    field: "department",
  },
  {
    id: 3,
    question: "What skills are required for this job?",
    options: ["Strategic thinking", "Roadmapping", "Product design"],
    field: "skills",
  },
  {
    id: 4,
    question: "What is the required experience level?",
    options: ["0-2 years", "2-3 years", "5-6 years"],
    field: "experience",
  },
  {
    id: 5,
    question: "What is the job location?",
    options: ["Bangalore", "Pune", "Remote"],
    field: "location",
  },
  {
    id: 6,
    question: "Create Job Description?",
    options: ["Let AI create it for you"],
    field: "description",
  },
];

export default function JobDescCreator() {
  const {getAiJD, saveJobDetails} = useJobCreation()
  const [currentStep, setCurrentStep] = useState(0);
  const [jobData, setJobData] = useState({
    company: "unlearn",
    jobTitle: "",
    department:"",
    skills: "",
    qualification: "any degree",
    experience: "",
    location: "",
    responsibilities:"",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const handleAnswer = async (answer) => {
    const field = questions[currentStep].field;

    if (answer === "Let AI create it for you" && field === "description") {
      setLoading(true);

      try {
        const aiJD = await getAiJD( jobData.jobTitle, jobData.department, jobData.skills,jobData.experience, jobData.location, jobData.qualification, jobData.responsibilities)

        if (aiJD) {
          
          setJobData((prevData) => ({
            ...prevData,
            description: aiJD, // Update the description with the backend response
          }));
        } else {
          alert("Failed to generate Job Description. Please try again.");
        }
      } catch (error) {
        console.error("Error generating Job Description:", error);
        alert("An error occurred. Please try again.");
      } finally {
        setLoading(false);
        setCurrentStep((prevStep) => prevStep + 1);
      }
    } else {
      setJobData((prevData) => ({
        ...prevData,
        [field]: field === "skills" ? [...prevData.skills.split(", "), answer].join(", ") : answer,
      }));
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handleCustomAnswer = (e) => {
    e.preventDefault();
    const customAnswer = e.target.customAnswer.value.trim();
    if (customAnswer) {
      handleAnswer(customAnswer);
    }
  };

  const handleEdit = (index) => {
    setCurrentStep(index);
  };

  const handleSubmit = async () => {
    console.log(jobData); // Replace this with API call to save the Job Description
    const createjob =await saveJobDetails(jobData)
    alert(createjob.message)
  };

  return (
    <div className="flex flex-col items-center justify-center w-full p-6 min-h-screen bg-gray-50">
      {currentStep < questions.length ? (
        <div className="w-full max-w-lg p-6 space-y-4 bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-800">
            {questions[currentStep].question}
          </h2>
          <div className="flex flex-wrap gap-4">
            {questions[currentStep].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="px-4 py-2 text-sm font-medium text-white bg-teal-500 rounded-lg hover:bg-teal-600"
                disabled={loading} // Disable buttons when loading
              >
                {loading && option === "Let AI create it for you" ? "Generating..." : option}
              </button>
            ))}
          </div>
          <form onSubmit={handleCustomAnswer} className="flex items-center gap-2 mt-4">
            <input
              type="text"
              name="customAnswer"
              placeholder="Enter a custom answer..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              disabled={loading} // Disable input when loading
            />
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-teal-500 rounded-lg hover:bg-teal-600"
              disabled={loading} // Disable submit button when loading
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div className="w-full max-w-lg p-6 space-y-4 bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-800">Review Your Job Details</h2>
          <ul className="space-y-4">
            {Object.entries(jobData).map(([key, value], index) => (
              <li
                key={index}
                className="flex justify-between p-4 bg-gray-100 rounded-lg shadow"
              >
                <div>
                  <p className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1")}</p>
                  <p className="text-sm text-gray-600">{value || "Not provided"}</p>
                </div>
                {index < questions.length && (
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-sm font-medium text-teal-500 hover:underline"
                  >
                    Edit
                  </button>
                )}
              </li>
            ))}
          </ul>
          <button
            onClick={handleSubmit}
            className="w-full px-4 py-2 text-sm font-medium text-white bg-teal-500 rounded-lg hover:bg-teal-600"
          >
            Submit Job Description
          </button>
        </div>
      )}
    </div>
  );
}
