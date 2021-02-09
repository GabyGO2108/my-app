import logo from './logo.svg';
import Search from "./Search";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Weather app
        </h1>
        
        <Search />
      
      </header>
    </div>
  );
}

export default App;
