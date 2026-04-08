import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import NotFound from './components/notFound/NotFound';



function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='library' element={<Dashboard />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;