import './App.css';
import Navbar from './components/Navbar';
import ItemList from './components/ItemList';
import mockItems from './mock/Items-mockup.json';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <ItemList items={mockItems} /> */}
      <ItemDetailContainer id={1}/>
    </div>
  );
}

export default App;
