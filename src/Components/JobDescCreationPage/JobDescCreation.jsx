import React, { useState } from "react";
import useJobCreation from "./fetchJobDescription";

const questions = [
  {
    id: 1,
    question: "What is the Job Title?",
    options: ["AI Product Manager", "Growth Product Manager", "Associate Product Manager"],
    placeholder: "Enter the job title you wish to hire for",
    field: "jobTitle",
  },
  {
    id: 2,
    question: "What department does this job belong to?",
    options: ["Analytics", "Marketing", "Product"],
    placeholder: "Specify the department this job is associated with",
    field: "department",
  },
  {
    id: 3,
    question: "What skills are required for this job?",
    options: ["Strategic thinking", "Roadmapping", "Product design"],
    placeholder: "Select skills required for this job",
    field: "skills",
  },
  {
    id: 4,
    question: "What is the required experience level?",
    placeholder: "Indicate the required experience level for this job",
    options: ["0-2 years", "2-3 years", "5-6 years"],
    field: "experience",
  },
  {
    id: 5,
    question: "What is the job location?",
    options: ["Bangalore", "Pune", "Remote"],
    placeholder: "Enter the location for this job",
    field: "location",
  },
  {
    id: 6,
    question: "Create Job Description?",
    options: ["Let AI create it for you"],
    placeholder: "Write custom Job Description",
    field: "description",
  },
];

export default function JobDescCreator() {
  const { getAiJD, saveJobDetails } = useJobCreation();
  const [currentStep, setCurrentStep] = useState(0);
  const [jobData, setJobData] = useState({
    company: "unlearn",
    jobTitle: "",
    department: "",
    skills: [],
    qualification: "any degree",
    experience: "",
    location: "",
    responsibilities: "",
    description: "",
  });
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOptionClick =async (option) => {
    const field = questions[currentStep].field;
    if (field == "description" && option === "Let AI create it for you") {
      // setSelectedAnswer(option);
      console.log("we are reached here")
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
        // setCurrentStep((prevStep) => prevStep + 1);
      }
    }

    if (field === "skills") {
      setJobData((prevData) => ({
        ...prevData,
        skills: prevData.skills.includes(option)
          ? prevData.skills.filter((skill) => skill !== option)
          : [...prevData.skills, option],
      }));
    } else if (field !== "description") {
      setSelectedAnswer(option);
    }
  };

  const handleSubmitAnswer = async () => {
    const field = questions[currentStep].field;

    if (field === "skills" && jobData.skills.length === 0) {
      alert("Please select at least one skill before proceeding.");
      return;
    }
      console.log("Let AI create it for you", selectedAnswer )
    if (field === "description" && selectedAnswer === "Let AI create it for you") {
      setLoading(true);
      try {
        const aiJD = await getAiJD(
          jobData.jobTitle,
          jobData.department,
          jobData.skills.join(", "),
          jobData.experience,
          jobData.location,
          jobData.qualification,
          jobData.responsibilities
        );
        setJobData((prevData) => ({ ...prevData, description: aiJD || "" }));
        setSelectedAnswer("");  // Reset the selected answer after AI generates description
      } catch (error) {
        console.error("Error generating Job Description:", error);
        alert("An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      setJobData((prevData) => ({ ...prevData, [field]: selectedAnswer }));
      setSelectedAnswer("");  // Reset the selected answer for non-description fields
    }

    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleCustomAnswer = (e) => {
    e.preventDefault();
    const customAnswer = e.target.customAnswer.value.trim();
    
    if (customAnswer) {
      setSelectedAnswer(customAnswer);
      handleSubmitAnswer();
    }
  };

  const handleSubmit = async () => {
    const createJob = await saveJobDetails(jobData);
    alert(createJob.message);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full p-8 min-h-screen bg-gray-100">
      {currentStep < questions.length ? (
        <div className="w-full max-w-xl p-8 space-y-6 bg-white rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">{questions[currentStep].question}</h2>
          <div className="flex gap-4 flex-wrap">
            {questions[currentStep].options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className={`px-2 py-1 text-[10px] font-medium text-gray-700 bg-teal-100 rounded-lg hover:bg-teal-200 ${
                  jobData.skills.includes(option) || selectedAnswer === option ? "bg-teal-200" : ""
                }`}
                disabled={loading}
              >
                {loading && option === "Let AI create it for you" ? "Generating..." : option}
              </button>
            ))}
          </div>

          <form onSubmit={handleCustomAnswer} className="flex items-center w-full mt-6">
            <input
              type="text"
              name="customAnswer"
              value={
                questions[currentStep].field === "skills"
                  ? jobData.skills.join(", ")
                  : questions[currentStep].field === "description"
                  ? jobData.description
                  : selectedAnswer
              }
              placeholder={questions[currentStep].placeholder}
              className="flex-1 px-6 py-3 w-full text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400"
              onChange={(e) => setSelectedAnswer(e.target.value)}
              disabled={
                loading ||
                (questions[currentStep].field === "description" &&
                  selectedAnswer === "Let AI create it for you")
              }
            />
          </form>

          <button
            onClick={handleSubmitAnswer}
            className="px-6 py-3 text-sm font-semibold text-white bg-teal-500 rounded-xl hover:bg-teal-600"
            disabled={
              questions[currentStep].field === "skills" && jobData.skills.length === 0
            }
          >
            {currentStep === questions.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      ) : (
        <div className="w-full max-w-xl p-8 space-y-6 bg-white rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800">Review Your Job Details</h2>
          <ul className="space-y-4">
            {Object.entries(jobData).map(([key, value], index) => (
              <li key={index} className="flex justify-between p-4 bg-gray-100 rounded-xl shadow-sm">
                <div>
                  <p className="font-medium text-gray-800 capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </p>
                  <p className="text-sm text-gray-600">
                    {Array.isArray(value) ? value.join(", ") : value || "Not provided"}
                  </p>
                </div>
                {index < questions.length && (
                  <button
                    onClick={() => setCurrentStep(index)}
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
            className="w-full px-6 py-3 text-sm font-semibold text-white bg-teal-500 rounded-xl hover:bg-teal-600"
          >
            Submit Job Description
          </button>
        </div>
      )}
    </div>
  );
}