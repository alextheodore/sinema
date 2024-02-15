import './App.css';
import NavigationBar from './components/NavigationBar';
import CarouselImage from './components/Intro'
import Intro from './components/Intro';
import Cards from './components/Cards'
import DetailPage from './components/DetailPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Page/Home/Home';

function App() {
  return (
    <div>
      <div className="myNav">
        <NavigationBar/>
      </div>
      <BrowserRouter><Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/DetailMovie' element={<DetailPage/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App
