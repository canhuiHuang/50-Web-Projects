import './App.css';
import {useState, useEffect} from 'react';

function App(props) {
  // Simulate componentDidMount lifecycle method. Using useEffect hook
  useEffect(() => {
    getAnotherJoke();
  }, [])

  // States using the useState hook.
  const [joke, setJoke] = useState();

  const getAnotherJoke = async () => {
    const config = {
      headers: {
        Accept: 'application/json'
      }
    };

    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    
    setJoke(data.joke);
  }
  
  return (
      <div className="card">
        <h3>Don't Laugh Challenge</h3>
        <div id="joke">{joke}</div>
        <button className="btn" onClick={getAnotherJoke}>Another Joke</button>
      </div>
  );
}

export default App;
