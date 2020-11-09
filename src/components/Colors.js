import React from 'react';

const Colors = props => {
    return (
        <div>
            <div style={{backgroundColor: props.background, color: props.text}}>
                <h1>The Word is: {props.word}</h1>
            </div>
        </div>
    )
}

export default Colors;