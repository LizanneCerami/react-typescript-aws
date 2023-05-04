import React from 'react';
import { Hello } from './components/Hello'
import { Form } from './components/Form'
import './App.css';

function App() {

  const [ serverData, setServerData ] = React.useState([])

  React.useEffect(() => {
    fetch('http://54.152.255.167:4000/')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <Hello firstName='Liz' lastName='Cerami'/>
        <Form />
        {/*@ts-ignore */}
        {serverData && serverData.map(eachDog => <p>{eachDog.name} - {eachDog}</p>)}
      </header>
    </div>
  );
}

export default App;
