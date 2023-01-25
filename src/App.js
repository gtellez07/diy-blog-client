import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NewBlog from './components/NewBlog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Navbar />

    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-blog" element={<NewBlog />} />
      </Routes>
    </main>

    </Router>
  );
}

export default App;
