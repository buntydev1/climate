import React from 'react';
import './seasonDisplay.css';

const seasonConfig =  {

    summer: {
        text: "let's hit the beach!",
        iconName: 'sun'
    },
    winter: {
        text: "Bur, it's chilly",
        iconName: 'snowflake'
    }
};



const SeasonDisplay = props => {

    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;