import './App.css';
import { Route, Routes } from 'react-router-dom';
import PatientListingPage from './pages/PatientListingPage';
import RegistrationPage from './pages/RegistrationPage';
import VisitsPage from './pages/VisitsPage';

function App() {
  return (
    <div className="App">
      <p className='text-center text-primary'>Home</p>
      <Routes>
        <Route path='/' element={<PatientListingPage/>}/>
        <Route path='/visits' element={<VisitsPage/>}/>
        <Route path='/registration' element={<RegistrationPage/>}/>
      </Routes>
    </div>
  );
}

export default App;