import React from 'react';
import Joke from './Joke';

function App() {
  return (
    <div>
        <Joke contact={{question:"Manish",answer:"Engineer"}} />
        <Joke contact={{question:"Ashish",answer:"Doctor"}} />
        <Joke contact={{question:"",answer:"This is only answer"}} />
    </div>

  );
}

export default App;
