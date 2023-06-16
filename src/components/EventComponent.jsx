import React from 'react';
import './Job.css';
const EventComponent = ({ event }) => {
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
            <h3 style={{ marginLeft: '10px' }}>{event.name}</h3>
            <p style={{ marginLeft: '10px' }}>Date: {event.date}</p>
            <p style={{ marginLeft: '10px' }}>Start: {event.start}</p>
            <p style={{ marginLeft: '10px' }}>End: {event.end}</p>
            <p style={{ marginLeft: '10px' }}>Type: {event.type}</p>
            <p style={{ marginLeft: '10px' }}>Public: {event.public ? 'Yes' : 'No'}</p>
            <p style={{ marginLeft: '10px' }}>Country: {event.country}</p>
        </div>
    );
};
export default EventComponent;