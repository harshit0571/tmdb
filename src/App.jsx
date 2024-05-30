import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
