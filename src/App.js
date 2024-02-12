import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import Login from './components/login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
