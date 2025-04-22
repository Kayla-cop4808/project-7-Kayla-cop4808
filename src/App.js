// App.js
import React, { useEffect, useState } from "react";
import { useRoutes, Link } from "react-router-dom";
import { supabase } from "./client";

import Home from "./pages/Home";
import CreateCrewmate from "./pages/CreateCrewmate";
import ReadCrewmates from "./pages/ReadCrewmates";
import EditCrewmate from "./pages/EditCrewmate";
import CrewmateDetails from "./pages/CrewmateDetails";

import "./App.css";

function App() {
  const [crewmates, setCrewmates] = useState([]);

  const fetchCrewmates = async () => {
    const { data, error } = await supabase
      .from("crewmates")
      .select()
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching crewmates:", error);
    } else {
      setCrewmates(data);
    }
  };

  useEffect(() => {
    fetchCrewmates();
  }, []);

  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/create", element: <CreateCrewmate onCreated={fetchCrewmates} /> },
    { path: "/gallery", element: <ReadCrewmates crewmates={crewmates} /> },
    {
      path: "/edit/:id",
      element: <EditCrewmate crewmates={crewmates} refreshCrewmates={fetchCrewmates} />,
    },
    {
      path: "/details/:id",
      element: <CrewmateDetails crewmates={crewmates} />,
    },
  ]);

  return (
    <div className="App">
      <div className="sidenav">
        <Link to="/">
          <p className="sidenav-link">Home</p>
        </Link>
        <Link to="/create">
          <p className="sidenav-link">Create a Crewmate</p>
        </Link>
        <Link to="/gallery">
          <p className="sidenav-link">Crewmate Gallery</p>
        </Link>
        <img
          src="/src/Images/YourStaticCrewmate.gif"
          alt="Crewmate"
          className="sidenav-image"
        />
      </div>
      <div className="main-content">{routes}</div>
    </div>
  );
}

export default App;