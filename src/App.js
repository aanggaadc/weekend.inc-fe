import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from 'react-toastify'
import {Routes, Route} from 'react-router-dom'
import Index from './pages/index'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
    <ToastContainer />
    </>
  );
}

export default App;
