import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import Home from './Home';
import BusesView from './component/bus/BusesView';

function App() {
  return (
    <div className="App">
      <h2>Welcome to our frontend</h2>
      <Home />
      <BusesView />
    </div>
  );
}

export default App;
