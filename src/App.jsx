import { Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home';
import './App.css';
import Paragraph from './components/Texto/Paragraph'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/text' element={ <Paragraph />} />
      </Routes>

    </div>
  );
}

export default App;
