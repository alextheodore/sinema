import './App.css';
import NavigationBar from './components/NavigationBar';
import CarouselImage from './components/Intro'
import Intro from './components/Intro';
import Cards from './components/Cards'

function App() {
  return (
    <div>
      <div className="myNav">
        <NavigationBar/>
      </div>
      <Intro/>
      <Cards/>
    </div>
  );
}

export default App
