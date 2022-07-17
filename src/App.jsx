import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Routes, Route } from 'react-router-dom'
import Index from './pages/index'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </>
  );
}

export default App;
