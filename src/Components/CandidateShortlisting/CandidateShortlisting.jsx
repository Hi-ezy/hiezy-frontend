// Import necessary libraries
import React, { useState } from "react";
import * as XLSX from "xlsx";
import useHandleCandidateData from "./candidatedata";

const CandidateUploader = () => {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidates, setSelectedCandidates] = useState([]);

  const { saveDatatoBackend,sendEmail, loading, error  } = useHandleCandidateData();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);

      // Validate required fields
      const validData = parsedData.map((row) => ({
        jobID: row.JobID || "",
        name: row.Name || "",
        email: row.Email || "",
        experience: row["Work Experience"] || "",
      }));

      setCandidates(validData);
    };

    reader.readAsArrayBuffer(file);
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedCandidates(candidates.map((_, index) => index));
    } else {
      setSelectedCandidates([]);
    }
  };

  const handleSelectOne = (index) => {
    if (selectedCandidates.includes(index)) {
      setSelectedCandidates(selectedCandidates.filter((i) => i !== index));
    } else {
      setSelectedCandidates([...selectedCandidates, index]);
    }
  };

  const handleSendEmails = async () => {
    const selectedData = selectedCandidates.map((index) => candidates[index]);
    try {
      // const saveData = await saveDatatoBackend(JSON.stringify(selectedData));
      const saveDataAndSendEmail = await sendEmail(JSON.stringify({candidatesList:selectedData}))
     return saveDataAndSendEmail.data
    } catch (error) {
      console.error("Error sending emails:", error);
      alert("Failed to send emails.");
    }
  };

//   const handleSaveToBackend = async () => {
//     try {
//       await callApi("http://localhost:5000/api/candidates", "POST", { candidates });
//       alert("Candidates saved to backend successfully!");
//     } catch (error) {
//       console.error("Error saving candidates to backend:", error);
//       alert("Failed to save candidates.");
//     }
//   };

  return (
    <div className="bg-[#30d5c7] min-h-screen p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Candidate Uploader</h1>
      <div className="mb-6">
        <input
          type="file"
          accept=".csv, .xlsx"
          onChange={handleFileUpload}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-white file:text-[#30d5c7] hover:file:bg-[#26b3ab]"
        />
        {/* <button
          onClick={handleSaveToBackend}
          disabled={!candidates.length}
          className="mt-4 px-4 py-2 bg-white text-[#30d5c7] font-semibold rounded-lg disabled:opacity-50 hover:bg-[#26b3ab] hover:text-white"
        >
          Save to Backend
        </button> */}
      </div>

      {candidates.length > 0 && (
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-[#26b3ab] text-white">
              <th className="p-2">
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={selectedCandidates.length === candidates.length}
                />
              </th>
              <th className="p-2">JOBID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Work Experience</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }
              >
                <td className="p-2 text-center">
                  <input
                    type="checkbox"
                    checked={selectedCandidates.includes(index)}
                    onChange={() => handleSelectOne(index)}
                  />
                </td>
                <td className="p-2">{candidate.jobID}</td>
                <td className="p-2">{candidate.name}</td>
                <td className="p-2">{candidate.email}</td>
                <td className="p-2">{candidate.experience}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {selectedCandidates.length > 0 && (
        <button
          onClick={handleSendEmails}
          className="mt-4 px-4 py-2 bg-white text-[#30d5c7] font-semibold rounded-lg hover:bg-[#26b3ab] hover:text-white"
        >
          Send AI interview Invites
        </button>
      )}
    </div>
  );
};

export default CandidateUploader;
