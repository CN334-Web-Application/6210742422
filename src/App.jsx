import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/ProCard.jsx';
import Edit from './pages/EditPro.jsx';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />}></Route>
        <Route path="/edit-profile" element={<Edit />}></Route>
      </Routes>
    </Router>
  );
}

export default App;