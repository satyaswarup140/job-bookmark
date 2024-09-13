import React from 'react';

const Bookmarks = ({ bookmarkedJobs }) => {
  return (
    <div>
      {bookmarkedJobs.length === 0 ? (
        <p>No jobs bookmarked yet.</p>
      ) : (
        <div className="job-list">
          {bookmarkedJobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p>Location: {job.location}</p>
              <p>Salary: {job.salary}</p>
              <p>Phone: {job.phone}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmarks;
