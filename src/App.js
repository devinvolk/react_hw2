import './App.css';
import Nav from './Components/Nav';
import List from './Views/List';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
      <List/>
          <Routes>
            <Route path='/list' element={<List/>}/>
          </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;