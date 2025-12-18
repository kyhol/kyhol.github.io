import React from "react";
import { Link } from "react-router-dom";

const UnderConstruction = ({ title }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        textAlign: "center",
        color: "white", // Assuming dark background based on your other components
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>{title}</h1>
      <h2 style={{ color: "#aaa" }}>🚧 Under Construction 🚧</h2>
      <p style={{ margin: "20px 0" }}>Check back soon for updates!</p>

      <Link
        to="/"
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        Return Home
      </Link>
    </div>
  );
};

export default UnderConstruction;
