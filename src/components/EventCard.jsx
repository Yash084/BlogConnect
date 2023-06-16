import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Job.css';
const EventCard = () => {

  const handleScrollToEvents = () => {
    const eventSection = document.getElementById("eventSection");
    eventSection.scrollIntoView({ behavior: 'smooth' });
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
    <img src="https://media.istockphoto.com/id/1348886734/photo/upcoming-events-text-message-bubble-concept-wooden-background.jpg?s=612x612&w=0&k=20&c=AABxxYZV-evnBOFlxYg_HhWTjlLYRXywyIFRckEjGsg=" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h3 style={{ fontFamily: "Arial, sans-serif" }} className="card-title">Events Updates</h3>
      <p  style={{ fontFamily: "Arial, sans-serif" }} className="card-text">Mark Your Calendar: Discover and Engage with Exciting Upcoming Events.</p>
    </div>
    <div className="card-body"style={{ display: 'flex', justifyContent: 'center'}} >
    <button type="button" className="btn btn-success" onClick={handleScrollToEvents}>See Upcoming Events</button>
    </div>
  </div>
  );
}

export default EventCard;
