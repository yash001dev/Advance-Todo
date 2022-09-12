import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {
  let activeClassName = "active-link";
  let leftSec = [
    {
      name: "Overview",
      icon: "bi bi-house-door",
      path: "/dashboard/overview",
    },
    {
      name: "Stats",
      icon: "bi bi-bar-chart-line",
      path: "/dashboard/stats",
    },
    {
      name: "Projects",
      icon: "bi bi-archive",
      path: "/dashboard/projects",
    },
    {
      name: "Chat",
      icon: "bi bi-chat",
      path: "/dashboard/chat",
    },
    {
      name: "Calendar",
      icon: "bi bi-calendar",
      path: "/dashboard/calendar",
    },
  ];
  let userPersonalSec = [
    {
      name: "Profile",
      icon: "bi bi-person",
      path: "/dashboard/profile",
    },
    {
      name: "Logout",
      icon: "bi bi-box-arrow-right",
      path: "/dashboard/logout",
    },
  ];
  return (
    <div className="row">
      <div className="col-2 left-sec">
        <div className="container mx-5 my-5">
          <h4 className="text-20 dark">.taskez</h4>
          <div style={{ height: "90vh" }} className="d-flex flex-column">
            <nav className="d-flex flex-column mt-5">
              {leftSec.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? activeClassName + " mb-5" : "mb-5"
                  }
                >
                  <span className={`${item.icon} me-4`}></span>
                  {item.name}
                </NavLink>
              ))}
            </nav>
            <nav className="d-flex mt-auto flex-column">
              {userPersonalSec.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? activeClassName + " mb-5" : "mb-5"
                  }
                >
                  <span className={`${item.icon} me-4`}></span>
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="col-9 right-sec">
        {/* <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes> */}
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
