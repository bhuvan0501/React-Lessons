import { HashRouter as Router, Routes, Route } from "react-router-dom";
import App1 from "./components/App1";
import App2 from "./components/App2";
import App3 from "./components/App3";
import App4 from "./components/App4";
import App5 from "./components/App5";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App1 />} />
        <Route path="/app2" element={<App2 />} />
        <Route path="/app3" element={<App3 />} />
        <Route path="/app4" element={<App4 />} />
        <Route path="/app5" element={<App5 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
