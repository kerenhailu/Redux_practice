import logo from './logo.svg';
import './App.css';
import Todos from './Components/Totos/Todos.Component';
import { Provider } from 'react-redux';
import store from './Redux/Store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Todos/>
      </header> 
      </Provider>
      
    </div>
  );
}

export default App;
