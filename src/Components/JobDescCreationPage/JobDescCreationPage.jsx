import React from 'react'
import './JobDescCreationPage.css'

export const JobDescCreationPage = () => {
    return (
      <div className='jd-wrapper'>
          <form action="">
              <h1>Job Description</h1>
  
              {/* Job ID will be created upon completion */}
                
              {/* Job Title */}
              <div className="input-box">
                  <label>Enter Job Title</label>
                  <input type="text" placeholder='Job Title' required />
              </div>
  
              {/* Job Description */}
              <div className="input-box">
                  <label>Enter Job Description</label>
                  <textarea placeholder='Job Description' rows="4" required></textarea>
              </div>
  
              {/* Department */}
              <div className="input-box">
                  <label>Select Department</label>
                  <select required>
                      <option value="">Select Department</option>
                      <option value="Design">Design</option>
                      <option value="Product">Product</option>
                      <option value="Marketing">Marketing</option>
                  </select>
              </div>
  
              {/* Location */}
              <div className="input-box">
                  <label>Enter Location</label>
                  <input type="text" placeholder='Location (e.g., Remote, San Francisco)' required />
              </div>
  
              {/* Employment Type */}
              <div className="input-box">
                  <label>Select Employment Type</label>
                  <select required>
                      <option value="">Select Employment Type</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                  </select>
              </div>
  
              {/* Experience Level */}
              <div className="input-box">
                  <label>Select Experience Level</label>
                  <select required>
                      <option value="">Select Experience Level</option>
                      <option value="Junior">Junior</option>
                      <option value="Mid-level">Mid-level</option>
                      <option value="Senior">Senior</option>
                  </select>
              </div>
  
              {/* Key Responsibilities */}
              <div className="input-box">
                  <label>Enter Key Responsibilities</label>
                  <textarea placeholder='List 4-6 primary responsibilities' rows="4" required></textarea>
              </div>
  
              {/* Tools & Technologies */}
              <div className="input-box">
                  <label>Tools & Technologies</label>
                  <input type="text" placeholder='List tools like Figma, Sketch, etc.' required />
              </div>
  
              {/* Minimum Qualifications */}
              <div className="input-box">
                  <label>Enter Minimum Qualifications</label>
                  <textarea placeholder='List must-have qualifications' rows="4" required></textarea>
              </div>
  
              {/* Preferred Qualifications */}
              <div className="input-box">
                  <label>Enter Preferred Qualifications</label>
                  <textarea placeholder='List nice-to-have qualifications' rows="4"></textarea>
              </div>
  
              {/* Salary Range */}
              <div className="input-box">
                  <label>Enter Salary Range</label>
                  <input type="text" placeholder='e.g., $60,000 - $90,000' required />
              </div>
  
              {/* Benefits */}
              <div className="input-box">
                  <label>Benefits Offered</label>
                  <input type="text" placeholder='e.g., Health insurance, Paid time off' required />
              </div>
  
              {/* Submit Button */}
              <button type='submit' className='Jd-complete' onClick={() => { window.location.href = "/MainPage" }}>
                  Complete
              </button>
          </form>
      </div>
    )
  }
  