import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutPage from './components/Layout';
import Homepage from './components/Homepage';
import RegisterPage from './components/RegisterPage';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutPage />}>
          <Route index element={<Homepage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/reducer' element={<RegisterPage />} />
        </Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
