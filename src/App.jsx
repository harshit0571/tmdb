import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
};

export default App;
