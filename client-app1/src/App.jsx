import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Collection from "./pages/Collection";
import Dashboard from "./pages/Dashboard";
import NoPage from "./pages/NoPage";
import Survey from "./pages/Survey";

import AuthProvider from "./components/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import SurveyData from "./pages/SurveyData";

export default function App() {

    return (
        <>
            <AuthProvider>
                <div className="main__wrapper">
                    <Routes>
                        <Route path="/" element={<Collection />} />
                        <Route path="/survey" element={<Survey />} />
                        <Route
                            path="/dashboard"
                            element={
                                <ProtectedRoute>
                                    <Dashboard />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/surveydata"
                            element={
                                <ProtectedRoute>
                                    <SurveyData />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="/login" element={<Login />} />
                        <Route path="*" element={<NoPage />} />
                    </Routes>
                </div>
            </AuthProvider>
        </>
    )
}