
import React, { useEffect } from "react";


const handleScrollToNews = () => {
    const newsSection = document.getElementById("newsSection");
    newsSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToJobs= () => {
    const jobsSection = document.getElementById("jobsSection");
    jobsSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToEvents = () => {
    const eventSection = document.getElementById("eventSection");
    eventSection.scrollIntoView({ behavior: 'smooth' });
  };

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ fontFamily: "Arial, sans-serif" }}>
                <div className="container-fluid">
                    <h3>BlogConnect</h3>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{ marginLeft: '40%'}}>
                        <ul className="navbar-nav">
                            <li className="nav-item" style={{ marginLeft: '60px'}}>
                                <h4><a className="nav-link active" aria-current="page"  onClick={handleScrollToNews} style={{ cursor: 'pointer'}}>News</a></h4>
                            </li>
                            <li className="nav-item" style={{ marginLeft: '60px'}}>
                                <h4> <a className="nav-link"  onClick={handleScrollToEvents} style={{ cursor: 'pointer'}}>Events</a></h4>
                            </li>
                            <li className="nav-item" style={{ marginLeft: '60px'}}>
                                <h4><a className="nav-link"  onClick={handleScrollToJobs} style={{ cursor: 'pointer'}}>Jobs</a></h4>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <div style={{ display: 'flex', margin: 'auto' }}>
                <h3 style={{ fontFamily: "Arial, sans-serif", margin: 'auto', marginTop: '15px' }}>Stay Informed and Connected: Discover News, Events, and Career Insights in One Place</h3>
            </div>
        </>
    );
}

export default Header;