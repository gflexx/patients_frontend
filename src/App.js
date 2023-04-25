import './App.css';
import { Route, Routes } from 'react-router-dom';
import PatientListingPage from './pages/PatientListingPage';
import RegistrationPage from './pages/RegistrationPage';
import VisitsPage from './pages/VisitsPage';
import PageNotFound from './pages/PageNotFound';
import NavBar from './components/nav/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<PatientListingPage/>}/>
        <Route path='/visits' element={<VisitsPage/>}/>
        <Route path='/register' element={<RegistrationPage/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;