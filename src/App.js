import axios from 'axios';
import './App.css';
import AuthorizationExample from './components/AuthorizationExample';
import CartExample from './components/CartExample';

function App() {

  axios.defaults.baseURL = 'http://localhost:3001';

  return (
    <AuthorizationExample/>
  );
}

export default App;
