import React from 'react'
import './JobDescCreationPage.css'

/*export const JobDescCreationPage = () => {
    return (
      <div className='jd-wrapper'>
          <form action="">
              <h1>Job Description</h1>
              <div className="input-box">
                  <label>Enter Job Title</label>
                  <input type="text" placeholder='Job Title' required />
              </div>
  
              <div className="input-box">
                  <label>Enter Job Description</label>
                  <textarea placeholder='Job Description' rows="4" required></textarea>
              </div>
  
              <div className="input-box">
                  <label>Select Department</label>
                  <select required>
                      <option value="">Select Department</option>
                      <option value="Design">Design</option>
                      <option value="Product">Product</option>
                      <option value="Marketing">Marketing</option>
                  </select>
              </div>
              <div className="input-box">
                  <label>Enter Location</label>
                  <input type="text" placeholder='Location (e.g., Remote, San Francisco)' required />
              </div>

              <div className="input-box">
                  <label>Select Employment Type</label>
                  <select required>
                      <option value="">Select Employment Type</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                  </select>
              </div>
  
              <div className="input-box">
                  <label>Select Experience Level</label>
                  <select required>
                      <option value="">Select Experience Level</option>
                      <option value="Junior">Junior</option>
                      <option value="Mid-level">Mid-level</option>
                      <option value="Senior">Senior</option>
                  </select>
              </div>
  
              <div className="input-box">
                  <label>Enter Key Responsibilities</label>
                  <textarea placeholder='List 4-6 primary responsibilities' rows="4" required></textarea>
              </div>
  
              <div className="input-box">
                  <label>Tools & Technologies</label>
                  <input type="text" placeholder='List tools like Figma, Sketch, etc.' required />
              </div>
  
              <div className="input-box">
                  <label>Enter Minimum Qualifications</label>
                  <textarea placeholder='List must-have qualifications' rows="4" required></textarea>
              </div>
  
              <div className="input-box">
                  <label>Enter Preferred Qualifications</label>
                  <textarea placeholder='List nice-to-have qualifications' rows="4"></textarea>
              </div>
              <div className="input-box">
                  <label>Enter Salary Range</label>
                  <input type="text" placeholder='e.g., $60,000 - $90,000' required />
              </div>
              <div className="input-box">
                  <label>Benefits Offered</label>
                  <input type="text" placeholder='e.g., Health insurance, Paid time off' required />
              </div>
              <div>
                <button type='cancel' className='Jd-complete' onClick={() => { window.location.href = "/MainPage" }}>
                  Cancel 
              </button>
              <button type='submit' className='Jd-complete' onClick={() => { window.location.href = "/MainPage" }}>
                  Complete
              </button>
              </div>
          </form>
      </div>
    )
  }
  
  export default JobDescCreationPage;
*/

export const JobDescCreationPage = () => {
  return (
    <div className="jobDesc-ui-container">
        <div className="top-bar">
            <div className="top-bar-left">
                <img src="Hiezy_logo.png" alt="Hiezy Logo" className="logo" />
             </div>
            <div className="top-bar-right">
                 <div className="user-avatar">D</div>
             </div>
        </div>
      
      <div className="chat-section">
        <div className="chat-header">
          <button className="new-jd-button">Creating Job Description</button>
          <button className="back-btn"
        onClick={() => { window.location.href = "/MainPage"; }}>Back</button>
        </div>
        <div className="chat-content">
          <div className="chat-message">
            <p>Here we are again, what are we chatting about today? Ask me literally anything related to Job Descriptions.</p>
          </div>
          <div className="chat-message-reply">
            <p>
              Create Job Description
            </p>
          </div>

          <div className="chat-message">
            <p>
              Alright, let’s get this Job Description started! Where are we thinking of hiring for? Give me a job tilte, and we’ll make some magic happen!
            </p>
          </div>
          <div className="chat-buttons">
            <button>AI PM</button>
            <button>Growth PM</button>
            <button>APM</button>
            <button>Data PM</button>
          </div>
          <div className="chat-input">
            <input type="text" placeholder="Ask anything..." />
            <button className="send-button">➤</button>
          </div>
          <div className="chat-input">
            <button className="submit-button" 
            onClick={() => { window.location.href = "/MainPage"; }}>Publish Job Description</button>
          </div>
          
        </div>
      </div>

      {/* Right Promotional Section */}
      <div className="promo-section">
        <div className="promo-background">
          <h1>YOUR HIRING AI PARTNER </h1>
          <p>Got a hiring postion open ? Start here by asking me anything about it.</p>
        </div>
     </div>
     </div>

  );
};

export default JobDescCreationPage;

  