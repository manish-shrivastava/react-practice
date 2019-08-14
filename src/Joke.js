import React from 'react';

function Joke(props) {
  return (
  	<div>
    <div style={{display: !props.contact.question && "none" }}> Question: {props.contact.question}</div>
    <div style={{color: !props.contact.question && "grey" }}> Answer: {props.contact.answer}</div>
    <hr/>
    </div>
  );
}

export default Joke;
