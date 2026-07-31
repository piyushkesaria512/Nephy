import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Upload from "./pages/Upload/Upload";
import Explore from "./pages/Explore/Explore";
import Messages from "./pages/Messages/Messages";
import Tournaments from "./pages/Tournaments/Tournaments";
import Organization from "./pages/Organization/Organization";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings/Settings";
import Activity from "./pages/Activity/Activity";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";

// Layout
import MainLayout from "./components/layout/MainLayout/MainLayout";

function App() {
  // Replace with actual authentication logic later
  const isAuthenticated = true;

  return (
    <Routes>

      {/* Redirect Root */}
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Navigate to="/home" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
      {isAuthenticated && (
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/activity" element={<Activity />} />
        </Route>
      )}

      {/* 404 */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;