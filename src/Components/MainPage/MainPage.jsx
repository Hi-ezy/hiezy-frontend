import React, { useState } from 'react';
import './MainPage.css'; // Import the CSS file

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
  const items = [
    { id: 1, name: 'Growth PM 5-8 years' },
    { id: 2, name: 'AI PM 5-8 years' },
    { id: 3, name: 'Growth APM 3-5 years' },
    { id: 4, name: 'APM 0-2 years' },
    { id: 5, name: 'Senior PM 10-15 years' },
    { id: 6, name: 'DATA PM 5-8 years' },
    { id: 7, name: 'AI APM 3-7 years' },
    { id: 8, name: 'Growth Senior PM 3-5 years' },
    { id: 9, name: 'APM 1-3 years' },
    { id: 10, name: 'Ai Senior PM 10-15 years' },
    // ... more items
  ];

  // Filter the items based on the search query
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get the items for the current page
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  return (
    <div className='main-page'>
        <div className= 'search-div'>
            <div className="search-wrapper"> {/* Use the wrapper class from the CSS file */}
                <input
                    type="text"
                    placeholder="Job Description"
                    value={searchQuery}
                    onChange={handleSearch}
                    className="search-input"
                /> 
            <div className="tiles-search"> {/* Use the tiles class from the CSS file */}
                {currentItems.map((item) => (
                <div key={item.id} className="tile"> {/* Use the tile class from the CSS file */}
                     {item.name}
                </div>
                 ))}
             </div>
             <div className="pagination"> {/* Use the pagination class from the CSS file */}
                <button onClick={() => handlePageChange(currentPage - 1)}>
                    Previous
                 </button>
                <button onClick={() => handlePageChange(currentPage + 1)}>
                     Next
                 </button>
            </div>
            </div>
        </div>
        <div className="main-page">  
            <div new-tile className="tiles-main"> {/* Use the tiles class from the CSS file */}
                <div className="new-tile" onClick={()=>{window.location.href="/JDcreation"}}> 
                    Create New Job Description </div>
                {currentItems.map((item) => (
                <div key={item.id} className="tile"> {/* Use the tile class from the CSS file */}
                     {item.name}
                </div>
                 ))}
             </div>  
             <div className="main-pagination"> {/* Use the pagination class from the CSS file */}
                <button onClick={() => handlePageChange(currentPage - 1)}>
                    Previous
                 </button>
                <button onClick={() => handlePageChange(currentPage + 1)}>
                     Next
                 </button>
            </div>     
        </div>
    </div>
  );
};

export default MainPage;