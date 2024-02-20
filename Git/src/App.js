import Navbar from './Navbar';
import Home from './Home';
import MyRadioButton from './Radiobutton';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
        <div className="rating">
          <MyRadioButton />
        </div>
    </div>
  );
}

export default App;