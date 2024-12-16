import React, { useState } from 'react';
import './MainPage.css'; // Import the CSS file
import TopBar from './TopBar';

export const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Assuming you have an array of items to display
  const jobDesc = [
    { id: 1001, status: 'ongoing', title: 'Growth PM', experience:'5-8 years', description: 'Requirement of Growth PM with 5-8 years of experience' },
    { id: 1002, status: 'closed',title: 'AI PM ',experience:'5-8 years', description: 'Requirement of AI PM with 5-8 years of experience' },
    { id: 1003, status: 'ongoing',title: 'Growth APM ', experience:' 3-5 years',description: 'Requirement of Growth APM with 3-5 years of experience' },
    { id: 1004, status: 'ongoing',title: 'APM ', experience:'0-2 years', description: 'Requirement of APM with 0-2 years of experience' },
    { id: 1005, status: 'ongoing',status: 'closed',title: 'Senior PM ', experience:' 10-15 years', description: 'Requirement of Senior PM with 10-15 years of experience' },
    { id: 1006, status: 'ongoing',title: 'DATA PM' ,experience:'5-8 years',description: 'Requirement of DATA PM with 5-8 years of experience' },
    { id: 1007, status: 'ongoing',title: 'AI APM',experience: '3-7 years', description: 'Requirement of AI APM with 3-7 years of experience' },
    { id: 1008, status: 'ongoing',title: 'Growth Senior PM ',experience: '3-5 years',description: 'Requirement of Growth Senior PM with 3-5 years of experience' },
    { id: 1009, status: 'ongoing',status: 'closed',title: 'APM',experience: '1-3 years',description: 'Requirement of APM with 1-3 years of experience' },
    { id: 1010, status: 'ongoing',title: 'Ai Senior PM',experience: ' 10-15 years',description: 'Requirement of Ai Senior PM with 10-15 years of experience' },
    { id: 1011, status: 'ongoing',title: 'DATA PM',experience: '5-8 years',description: 'Requirement of DATA PM with 5-8 years of experience' },
    { id: 1012, status: 'closed',title: 'AI APM',experience:' 3-7 years', description: 'Requirement of AI APM with 3-7 years of experience' },
    { id: 1013, status: 'ongoing',title: 'Growth Senior PM ',experience:'3-5 years',description: 'Requirement of Growth Senior PM with 3-5 years of experience' },
    { id: 1014, status: 'closed',title: 'APM',experience: '1-3 years',description: 'Requirement of APM with 1-3 years of experience' },
    { id: 1015, status: 'ongoing',title: 'AI Senior PM',experience: '10-15 years',description: 'Requirement of AI Senior PM with 10-15 years of experience' },
    // ... more items
  ];

  // Filter the items based on the search query
  /*const filteredItems = jobDesc.filter((jobDesc) =>
    jobDesc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  */
  // Get the items for the current page
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  //const currentItems = filteredItems.slice(startIndex, endIndex);
  return (
    /*<div className='main-page'>
        <div>
             <TopBar className="top-bar"/>
        </div>
        <div className= 'search-div'>
            <div className="search-wrapper"> 
                <input
                    type="text"
                    placeholder="Job Description"
                    value={searchQuery}
                    onChange={handleSearch}
                    className="search-input"
                /> 
            <div className="tiles-search"> 
                {currentItems.map((item) => (
                <div key={item.id} className="tile"> 
                </div>
                 ))}
             </div>
             <div className="pagination"> 
                <button onClick={() => handlePageChange(currentPage - 1)}>
                    Previous
                 </button>
                <button onClick={() => handlePageChange(currentPage + 1)}>
                     Next
                 </button>
            </div>
            </div>
        </div>*/
    <div className='main-page'>
        <TopBar className="top-bar"/>
        <div className="jd-grid-page"> 
          <h2>Job Descriptions List</h2> <button type ="button" className="jd-button" 
          onClick={() => { window.location.href = "/JDCreation";}}> Create Job Description </button>
          <div className="jd-grid">
                {jobDesc.map((jobDesc, index) => (
                  <div className="jd-card" key={index}> 
                    <h3>{jobDesc.id} </h3>
                    <h3>{jobDesc.title}</h3>
                    <h2>{jobDesc.experience}</h2>
                    <p>{jobDesc.description}</p>
                    <h3>{jobDesc.status}</h3>
                  </div>
                ))}
              </div>
             {/*<div className="main-pagination"> 
                <button onClick={() => handlePageChange(currentPage - 1)}>
                    Previous
                 </button>
                <button onClick={() => handlePageChange(currentPage + 1)}>
                     Next
                 </button>
            </div>*/}     
        </div>
    </div>
  );
};

export default MainPage;