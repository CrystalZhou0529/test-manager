import React, { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

export default function SearchPanel() {
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/search") {
      navigate("all");
    }
  }, [location]);

  return (
    <div>
      <span>Search: TC</span>
      <input
        onChange={(e) => {
          if (e.target.value !== "") {
            navigate(`/search/${e.target.value}`);
          } else {
            navigate("/search/all");
          }
        }}
      />
      <Outlet />
    </div>
  );
}
