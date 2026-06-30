import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Applications from "../pages/Applications";
import ResumeAI from "../pages/ResumeAI";
import About from "../pages/About";
function AppRoutes() {

    return (

        <Routes>

            <Route path="/" element={<Landing />} />

            <Route path="/login" element={<Login />} />

            <Route path="/signup" element={<Signup />} />

            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/applications"
                element={
                    <ProtectedRoute>
                        <Applications />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/resume-ai"
                element={
                    <ProtectedRoute>
                        <ResumeAI />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/about"
                element={<About />}
            />

        </Routes>

    )

}

export default AppRoutes;