import React from 'react';
import customLoadingGif from './Loading.gif'; 
const Loading = () => {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
    };

    const imageStyle = {
        width: '50px', 
        height: '50px',
    };

    return (
        <div style={containerStyle}>
            <img src={customLoadingGif} alt="Custom Loading GIF" style={imageStyle} />
        </div>
    );
};

export default Loading;
