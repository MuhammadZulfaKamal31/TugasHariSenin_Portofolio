import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Kontak from './component/Kontak';
import Portofolio from './Pages/Portofolio';
import Navbar from './component/Navbar';
import HalamanPertama from './Pages/HalamanPertama';
import Footer from './component/Footer';
function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HalamanPertama />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/portofolio" element={<Portofolio />} />
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
