import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";

// Import your pages
import RFQs from "./pages/RFQs";
import Valver from "./pages/Valver";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col relative">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex flex-1">
        {isOpen && <SideBar />}
        <div className="flex-1 px-8">
          <Routes>
            <Route path="/" element={<h1>Home page</h1>} />
            <Route path="/rfq" element={<RFQs />} />
            <Route path="/rfq/:id" element={<Valver />} />
          </Routes>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default App;
