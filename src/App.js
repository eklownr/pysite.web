import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home'; 
import About from './pages/about';
import NotFound from './pages/error/notFound';
import Contact from './pages/contact';
import TopNav from './components/header/topNav';
import Tutorial from './pages/tutorial/tutorial';
import Htmx from './pages/htmx';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/tutorial' element={<Tutorial/>}></Route>
          <Route path='/htmx' element={<Htmx/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
