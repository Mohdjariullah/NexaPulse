import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/LoginPage';
import Sucess from './pages/SucessPage';
function App() {
  return (
    <>
    <Router>
      <Route path='/' element=""/>
      <Route path='/Sucess' element=""/>
    </Router>
    </>
  );
}

export default App;
