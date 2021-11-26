import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick = () => {
    fetch('/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleClick}>CLICK</button>
      </header>
    </div>
  );
}

export default App;
