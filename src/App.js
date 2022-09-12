import { Route, Routes } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Overview from "./pages/Overview";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Settings from "./pages/Settings";
import Stats from "./pages/Stats";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      >
        <Route path="overview" element={<Overview />} />
        <Route path="chat" element={<Chat />} />
        <Route path="stats" element={<Stats />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="projects" element={<Projects />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
        <Route path="logout" element={<Logout />} />
      </Route>
    </Routes>
  );
}

export default App;
