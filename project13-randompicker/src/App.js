import './App.css';
import Choices from './Choices';
import {useState} from 'react';

function App() {
  const [choices, setChoices] = useState([]);

  const checkForEnter = (event) => {
    const displayedChoices = document.querySelectorAll('.choice');
    const textarea = document.querySelector('textarea');
    if((event.key === 'Enter' || (event.target.id === 'enter-text' && textarea.disabled === false)) && displayedChoices.item(0) !== null) {
      
      textarea.disabled = true;
      // random Pick
      let intervalTime = 100 + Math.floor(Math.random()*101) - (displayedChoices.length * 5 < 100 ? displayedChoices.length * 5 : 95);
      const duration = 1500 + 1000*(displayedChoices.length % 10);

      const ruleta = () => {
        //Limpiar enRuleta clase de todas las choices.
        displayedChoices.forEach(choice => {
          choice.classList.remove('enRuleta');
        })

        // Agregar enRuleta en la choice actual.
        const choice = displayedChoices.item(i % displayedChoices.length);
        choice.classList.add('enRuleta');
        i++;
      }
      const terminarRuleta = () => {
        clearInterval(tid);

        textarea.disabled = false;
      }

      let i = 0;
      let tid = setInterval(ruleta, intervalTime);

      
      setTimeout(terminarRuleta, duration);
    }
    
  }
  const handleChange = event => {
    const choices = event.target.value.split(',');
    if(choices[choices.length - 1] === '') {
      choices.pop();
    }
    setChoices(choices);
    if (choices.length === 1 && choices[0] === "") {
      setChoices([]);
    }
  }

  return (
    <div className="app" >
      <h3 className="xd">Enter your choices divided by a comma (',').</h3>
      <h2>Press <span onClick={checkForEnter} id="enter-text">Enter</span> when you're done</h2>
      <textarea type="text" className="choices-input" placeholder='Enter choices...' onChange={handleChange} onKeyPress={checkForEnter}/>
      <Choices choices={choices}/>
    </div>
  );
}

export default App;
