import React, { useState, useEffect } from 'react';
import './App.css';


const Jobs = ({ onBookmark }) => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Fetch jobs when component mounts or when the page number changes
    fetchJobs();
  }, [page]);

  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://testapi.getlokalapp.com/common/jobs?page=1`);
      const data = await response.json();
      console.log(data)
      setJobs((prevJobs) => [...prevJobs, ...data.results]);
      setIsLoading(false);
    } catch (err) {
      setError('Error fetching jobs');
      setIsLoading(false);
    }
  };

  // Infinite Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        setPage((prevPage) => prevPage + 1);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {isLoading && <p>Loading jobs...</p>}
      {error && <p>{error}</p>}
      {jobs.length === 0 && !isLoading && <p>No jobs available</p>}
      
      <div className="job-list">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <h3 className='job-title'>{job.title}</h3>
            <p className='job-title'>Salary: {job.amount}</p>
            
            <p className='job-title'>Location: {job.job_location_slug}</p>
            <p className='job-title'>Phone: {job.custom_link}</p>
            
            <button onClick={() => onBookmark(job)}>Bookmark</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
