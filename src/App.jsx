import Home from "./components/pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "@/components/pages/Signup";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
