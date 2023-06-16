import React from 'react';
import './Job.css';
const ArticleCard = ({ article }) => {
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
            <img src={article.urlToImage} alt="Article" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a href={article.url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    );
};


export default ArticleCard;