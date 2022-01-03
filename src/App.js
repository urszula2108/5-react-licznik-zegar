import './App.css';
import Counter from './components/counter/Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Counter initValue={108} />
      </header>
    </div>
  );
}

export default App;
