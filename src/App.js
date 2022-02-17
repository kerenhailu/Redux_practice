import logo from './logo.svg';
import './App.css';
import Todos from './Components/Totos/Todos.Component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Todos/>
      </header>
    </div>
  );
}

export default App;
