import React from 'react';
import './Job.css';
const Result = ({ job }) => {
  return (
    <div
    className="card"
    style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        border: '2px solid black',
        padding: '10px',
        marginBottom: '10px',
        transition: 'transform 0.3s ease',
    }}
    onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.05)';
    }}
    onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
    }}
>
      <img src="https://png.pngtree.com/png-clipart/20190604/original/pngtree-creative-company-logo-png-image_1197025.jpg" alt="Company Logo" className="card-img-top" style={{ height: '200px'}} />
      <div className="card-body">
        <h5 className="card-title">{job.role}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{job.company_name}</h6>
        <a href={job.url} className="btn btn-primary">Apply</a>
      </div>
    </div>
  );
};


export default Result;