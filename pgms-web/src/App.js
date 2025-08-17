import './App.css';
import LoginPage from './pages/loginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route -> login */}
        <Route path="/" element={<LoginPage />} />
        
        {/* Dashboard route */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Catch-all for 404 */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
