import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Events from "./components/Events";
import Navigation from "./components/Navigation";
import Logout from "./components/Logout";
import Dj from "./components/Dj";
import Transport from "./components/Transport";
import Wedding from "./components/Wedding";
import Photoshoot from "./components/Photoshoot";
import Jokes from "./components/Jokes";
import Profile from "./components/Profile";
import Upload from "./components/Upload";
import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [Auth, setAuth] = useState(0);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuth(1);
    }
  }, []);

  return (
    <div className="background">
      <Router>
        <Navigation Auth={Auth} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dj" element={<Dj />} />
          <Route path="/Upload" element={<Upload />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/photoshoot" element={<Photoshoot />} />
          <Route path="/Jokes" element={<Jokes />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
