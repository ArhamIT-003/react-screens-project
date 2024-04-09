import React, { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import SideBar from "./components/SideBar";

// Import pages
import RFQs from "./pages/RFQs";
import Valver from "./pages/Valver";
import Home from "./pages/Home";
import RFQManager from "./pages/RFQ-Manager";
import Overview from "./pages/Overview";
import Instructor from "./pages/Instructor";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./pages/ProtectedRoute";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const conditions = pathname === "/login" || pathname === "/signup";

  return (
    <div className="h-screen flex flex-col relative ease-out transition-all ">
      {!conditions && <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />}
      <div className="ease-out transition-all flex flex-1">
        {isOpen && <SideBar isOpen={isOpen} setOpen={setIsOpen} />}
        <div className={`w-full flex-[8] px-8 ${isOpen ? "ml-52" : ""}`}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route
              path="/rfq"
              element={
                <ProtectedRoute>
                  <RFQs />
                </ProtectedRoute>
              }
            />
            <Route
              path="/rfq-manager"
              element={
                <ProtectedRoute>
                  <RFQManager />
                </ProtectedRoute>
              }
            />
            <Route
              path="/overview"
              element={
                <ProtectedRoute>
                  <Overview />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Instructor"
              element={
                <ProtectedRoute>
                  <Instructor />
                </ProtectedRoute>
              }
            />
            <Route
              path="/rfq/:id"
              element={
                <ProtectedRoute>
                  <Valver />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
