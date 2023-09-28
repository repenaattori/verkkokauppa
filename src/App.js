import './App.css';
import { Link } from 'react-router-dom';

/**
 * App contains only routing links to examples.
 * Routing is built in index.js
 */
function App() {

  return (
    <div>
      <Link to={'/auth'}>Authorization example</Link><br/>
      <Link to={'/cart'}>Shopping cart example</Link>
    </div>
  );
}

export default App;
