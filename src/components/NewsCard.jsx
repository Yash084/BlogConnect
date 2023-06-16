import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Job.css';
const NewsCard = () => {

  const handleScrollToNews = () => {
    const newsSection = document.getElementById("newsSection");
    newsSection.scrollIntoView({ behavior: 'smooth' });
  };

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
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
      }}
    >
      <img src="https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="image not found" />
      <div className="card-body">
        <h3 style={{ fontFamily: "Arial, sans-serif" }} className="card-title">News Updates</h3>
        <p style={{ fontFamily: "Arial, sans-serif" }} className="card-text">Uncover the World: Stay Informed with our Timely News Updates.</p>
      </div>
      <div className="card-body" style={{ display: 'flex', justifyContent: 'center' }}>
        <button type="button" className="btn btn-success" onClick={handleScrollToNews}>Read Latest News</button>
      </div>
    </div>
  );
}

export default NewsCard;
