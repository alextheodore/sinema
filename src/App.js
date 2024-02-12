import './App.css';
import NavigationBar from './components/NavigationBar';
import CarouselImage from './components/Intro'
// import data from './data.json'
import Intro from './components/Intro';
import Cards from './components/Cards'

function App() {
  // console.log(data)
  return (
    <div>
      <div className="myNav">
        <NavigationBar/>
      </div>
      <Intro/>
      {/* <data.js/> */}
      <Cards/>
    </div>
  );
}

export default App
