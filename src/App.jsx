import "./App.css";

import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Service from "./routes/Service";
import About from "./routes/About";
import SignUp from "./routes/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpData from "./components/SignUpData";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUpData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
