import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import Hello from './components/Hello';
import Number from './components/Number';
import Colors from './components/Colors';

function App() {
  return (
    <div className="App">
      <Router>
        <Hello path='/home'/>
        <Number path='/:id'/>
        <Colors path='/:word/:text/:background'/>
      </Router>
    </div>
  );
}

export default App;
