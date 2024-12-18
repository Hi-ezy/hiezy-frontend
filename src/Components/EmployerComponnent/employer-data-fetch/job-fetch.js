import React, { useEffect, useState } from 'react'

const useGetallJobs = () => {

     const fetchJobs = async (comapny) => {
       try {
         const response = await fetch(`${process.env.REACT_APP_BASE_URL}/app/jobs/getjobbycompany?comapny=${comapny}&limit=10&$skip=0`); 
         if (!response.ok) {
           throw new Error('Failed to fetch jobs');
         }
         const data = await response.json();
         console.log('Jobs fetched:', data);
         return data?.response
        
       } catch (err) {
         console.error(err);
       }
     };

 return {fetchJobs}
  
}

export default useGetallJobs