// import axios from 'axios';
import './App.css';
import Chart from './components/charts/chart';

import Dashboard from "./components/dashboardInfo/dashboard";


function App() {
  return (
    <div className="App">
      <Dashboard />
      <Chart />
    </div>
  );
}

export default App;
