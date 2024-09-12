import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import NavBar from './features/common/NavBar';
import Login from './pages/Login';
import VerifyEmail from './pages/VerifyEmail';
import GenerateCode from './pages/GenerateCode';

const App = () => {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/generate-code" element={<GenerateCode />} />
      </Routes>
    </Router>
  );
}

export default App
