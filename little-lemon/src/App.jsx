import "./App.css";
import Nav from "./components/nav/Nav";
import Home from "./pages/Home";
import "@fontsource/markazi-text";
import "@fontsource/karla";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="app_content">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/reservations" element={<Reservation/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;