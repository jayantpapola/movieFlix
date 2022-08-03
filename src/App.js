import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/HomePage/Home';
import MoviePage from './Components/MoviePage/MoviePage';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/moviePage'} element={<MoviePage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
