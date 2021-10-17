import './App.css';
import Concert from './components/Concert/Concert';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      {/* import header part */}
      <Header></Header>
      {/* import concert part */}
      <Concert></Concert>
    </div>
  );
}

export default App;
