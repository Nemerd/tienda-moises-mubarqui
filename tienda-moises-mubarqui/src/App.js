import './App.css';
import Navbar from './components/Navbar';
import ItemList from './components/ItemList';
import mockItems from './mock/Items-mockup.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemList items={mockItems} />
    </div>
  );
}

export default App;
