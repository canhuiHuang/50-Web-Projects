import React from 'react';
import Choice from './Choice';

function Choices({choices}) {

    const displayChoices = () => {
        const choicesBox = [];
        
        choices.forEach((choice, index) => {
            choicesBox.push(<Choice id={index} key={index} text={choice} />);
        })    
        
        return choicesBox;
    }

    return (
        <div className="choices">
            {displayChoices()}
        </div>
    )
}

export default Choices
