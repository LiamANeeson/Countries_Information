import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import Country from "./Pages/Country"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries/:name" element={<Country />} />
      </Routes>
    </Router>
  );
}

export default App;
