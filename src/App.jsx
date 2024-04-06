import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import SideBar from "./components/SideBar";

// Import your pages
import RFQs from "./pages/RFQs";
import Valver from "./pages/Valver";
import Home from "./pages/Home";
import RFQManager from "./pages/RFQ-Manager";
import Overview from "./pages/Overview";
import Instructor from "./pages/Instructor";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const conditions = pathname === "/login" || pathname === "/signup";
  return (
    <div className="h-screen flex flex-col relative ease-out transition-all ">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="ease-out transition-all flex flex-1">
        {isOpen && <SideBar isOpen={isOpen} setOpen={setIsOpen} />}
        <div className={`w-full flex-[8] px-8 ${isOpen ? "ml-52" : ""}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rfq" element={<RFQs />} />
            <Route path="/rfq-manager" element={<RFQManager />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/Instructor" element={<Instructor />} />
            <Route path="/rfq/:id" element={<Valver />} />
          </Routes>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
