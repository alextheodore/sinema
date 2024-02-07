import './App.css';
import NavigationBar from './components/NavigationBar';
import CarouselImage from './components/Intro'
import data from './data.json'
import Intro from './components/Intro';

function App() {
  console.log(data)
  return (
    <div>
      <div className="myNav">
        <NavigationBar/>
      </div>
      <Intro/>
    </div>
  );
}

export default App
