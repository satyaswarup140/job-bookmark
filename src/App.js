import React, { useState } from "react";
import Jobs from "./Jobs";
import Bookmarks from "./Bookmarks";

function App() {
  const [currentView, setCurrentView] = useState('jobs');
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  const handleBookmark = (job) => {
   

    setBookmarkedJobs((prevBookmarks) => [...prevBookmarks, job]);
  };

  return (
    <div>
      {/* Bottom Navigation */}
      <div className="bottom-navigation">
        <button onClick={() => setCurrentView('jobs')}>Jobs</button>
        <button onClick={() => setCurrentView('bookmarks')}>Bookmarks</button>
      </div>

      {/* Rendering Jobs or Bookmarks based on current view */}
      {currentView === 'jobs' && <Jobs onBookmark={handleBookmark} />}
      {currentView === 'bookmarks' && <Bookmarks bookmarkedJobs={bookmarkedJobs} />}
    </div>
  );
}

export default App;
