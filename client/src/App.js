import { Navbar, Welcome, Transactions, Services, Footer } from "./components";

function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcom">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
