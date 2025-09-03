import React from 'react';

const CircularProgress = ({ progress }) => {
    return (
        <div className="progress-container">
            <div className="circular-progress" style={{ '--progress': progress }}>
                <span className="progress-value">{progress}%</span>
            </div>
        </div>
    );
};

export default CircularProgress;
