import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate for redirection
import useJobCreation from "./fetchJobDescription";

const questions = [
  {
    id: 1,
    question: "Job Title",
    options: ["AI Product Manager", "Growth Product Manager", "Associate Product Manager"],
    field: "jobTitle",
  },
  {
    id: 4,
    question: "Experience level",
    options: ["0-2 years", "2-3 years", "5-6 years"],
    field: "experience",
  },
  {
    id: 5,
    question: "Job location",
    options: ["Bangalore", "Pune", "Remote"],
    field: "location",
  },
  {
    id: 6,
    question: "",
    options: ["Let AI create it for you"],
    field: "description",
  },
];

export default function JobDescCreator() {
  const { getAiJD, saveJobDetails } = useJobCreation();
  const [jobData, setJobData] = useState({
    company: "unlearn",
    jobTitle: "",
    experience: "",
    location: "",
    description: "",
  });
  const [customInputs, setCustomInputs] = useState({});
  const [loading, setLoading] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false); // Track if the user is editing the description
  const [plusVisible, setPlusVisible] = useState({}); // Track visibility of the plus icon for each field
  const navigate = useNavigate(); // Hook for redirection

  const handleOptionClick = async (field, option) => {
    if (field === "description" && option === "Let AI create it for you") {
      setLoading(true);
      try {
        const aiJD = await getAiJD(
          jobData.jobTitle,
          jobData.experience,
          jobData.location,
          jobData.description
        );
        setJobData((prevData) => ({ ...prevData, description: aiJD }));
      } catch (error) {
        console.error("Error generating Job Description:", error);
        alert("Failed to generate Job Description. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      setJobData((prevData) => ({ ...prevData, [field]: option }));
    }
  };

  const handleAddOption = (field) => {
    setCustomInputs((prevInputs) => ({ ...prevInputs, [field]: "" }));
    setPlusVisible((prevState) => ({ ...prevState, [field]: false })); // Hide the plus icon after clicking
  };

  const handleCustomInputChange = (field, value) => {
    setCustomInputs((prevInputs) => ({ ...prevInputs, [field]: value }));
  };

  const handleSaveCustomOption = (field) => {
    if (!customInputs[field]) return;
    const newOption = customInputs[field];
    questions.find((q) => q.field === field).options.push(newOption);
    setCustomInputs((prevInputs) => ({ ...prevInputs, [field]: "" }));
  };

  const handleInputChange = (field, value) => {
    setJobData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = async () => {
    const createJob = await saveJobDetails(jobData);
    alert(createJob.message);
    navigate("/employer/jobs"); // Redirect to /employer/jobs after saving
  };

  const handleEditDescription = () => {
    setIsEditingDescription(true); // Enable editing of the description
  };

  const handleCancelEditDescription = () => {
    setIsEditingDescription(false); // Disable editing of the description
  };

  const handleDoneEditDescription = () => {
    setIsEditingDescription(false); // Save the edited description and disable editing mode
  };

  return (
    <div className="flex w-[85%] mx-auto mt-32 mb-10 bg-gray-100">
      {/* Main form content */}
      <div className="w-2/3 p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-600">Create Job Description</h2>

        {/* Displaying the questions and options */}
        {questions.map((q) => (
          <div key={q.id} className="space-y-2">
            <h3 className="text-lg text-left font-semibold text-gray-500">{q.question}</h3>
            <div className="flex gap-4 flex-wrap items-center">
              {q.field !== "description" && q.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(q.field, option)}
                  className={`px-4 py-2 text-sm font-medium text-gray-700 bg-teal-100 rounded-lg hover:bg-teal-200 ${
                    jobData[q.field]?.includes(option) || jobData[q.field] === option
                      ? "bg-teal-700 text-white"
                      : ""
                  }`}
                  disabled={loading && q.field === "description" && option === "Let AI create it for you"}
                >
                  {loading && option === "Let AI create it for you" ? "Generating..." : option}
                </button>
              ))}
              {q.field !== "description" && plusVisible[q.field] !== false && (
                <button
                  onClick={() => handleAddOption(q.field)}
                  className="p-2 text-sm font-medium text-white bg-teal-500 rounded-lg hover:bg-teal-600"
                >
                  +
                </button>
              )}
              {customInputs[q.field] !== undefined && (
                <div className="flex items-center gap-2 mt-2">
                  <input
                    type="text"
                    value={customInputs[q.field]}
                    onChange={(e) => handleCustomInputChange(q.field, e.target.value)}
                    placeholder="Add custom option"
                    className="px-2 py-1 mt-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                  <button
                    onClick={() => handleSaveCustomOption(q.field)}
                    className="px-2 py-3 text-sm text-white bg-teal-500 rounded-lg hover:bg-teal-600"
                  >
                    Add
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* AI Generate Button below the Create Job Description section */}
        <div className="mt-6">
          <button
            onClick={() => handleOptionClick("description", "Let AI create it for you")}
            className="px-4 py-2 text-sm text-white w-[15vw] bg-teal-500 rounded-lg hover:bg-teal-600 mx-auto"
            disabled={loading}
          >
            {loading ? "Generating..." : "Let AI Create Job Description"}
          </button>
        </div>
      </div>

      {/* Side panel on the right */}
      <div className="w-1/3 bg-white p-6 shadow-lg rounded-lg ml-4">
        <h3 className="text-xl font-semibold mb-10 text-gray-600">Job Description Summary</h3>
        <div className="space-y-2 text-left">
          <p><strong className="text-gray-500">Job Title:</strong> {jobData.jobTitle}</p>
          <p><strong className="text-gray-500">Experience:</strong> {jobData.experience}</p>
          <p><strong className="text-gray-500">Location:</strong> {jobData.location}</p>
          <p className="text-center pt-2"><strong className="text-gray-500">Description</strong></p>
          {isEditingDescription ? (
            <div>
              <textarea
                value={jobData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                rows="5"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <div className="flex justify-end space-x-2 mt-4">
                <button
                  onClick={handleCancelEditDescription}
                  className="px-4 py-2 text-sm text-white bg-gray-500 rounded-lg hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDoneEditDescription}
                  className="px-4 py-2 text-sm text-white bg-teal-500 rounded-lg hover:bg-teal-600"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col">
              <p>{jobData.description}</p>
              <button
                onClick={handleEditDescription}
                className="mt-6 px-4 py-2 text-sm w-[15vw] mx-auto text-white bg-teal-500 rounded-lg hover:bg-teal-600"
              >
                Edit Description
              </button>
            </div>
          )}
        </div>

        {/* Submit button placed outside of the description edit section */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-sm w-[15vw] mx-auto text-white bg-teal-500 rounded-lg hover:bg-teal-600"
          >
            Submit Job
          </button>
        </div>
      </div>
    </div>
  );
}
