import { BrowserRouter as Router, Routes, Link } from "react-router-dom";
import { Navbar, Welcome, Transactions, Services, Footer } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <Welcome />
    </Router>
  );
}

export default App;
