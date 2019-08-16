import React from 'react';

function Joke(props) {
  return (
  	<div>
        <div style={{display: !props.question && "none" }}> Question: {props.question}</div>
        <div style={{color: !props.question && "grey" }}> Answer: {props.answer}</div>
        <hr/>
    </div>
  );
}

export default Joke;
