import React from 'react';

function Choice({text,id}) {
    return (
        <div id={id} className='choice'>
            {text}
        </div>
    )
}

export default Choice;

