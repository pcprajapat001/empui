import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    navigate("/login");
  }, [navigate]);
  return (
    <div>
      <h1>logout</h1>
    </div>
  );
};

export default Logout;
