import React from 'react';
import Joke from './Joke';
import JokesData from './JokesData';


function App() {

 // console.log(JokesData);
 const JokeComponents = JokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

  return (
    <div>
      {JokeComponents}
    </div>

  );
}

export default App;
