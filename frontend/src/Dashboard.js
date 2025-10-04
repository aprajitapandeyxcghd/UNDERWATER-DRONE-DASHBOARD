import React, { useEffect, useState } from "react";
import { FaTemperatureHigh, FaRulerVertical, FaTachometerAlt } from "react-icons/fa";
import { GiRiver, GiWaterDrop } from "react-icons/gi";
import { getLatestData } from "./api";

function Dashboard() {
  const [data, setData] = useState({
    temperature: "--",
    depth: "--",
    speed: "--",
    riverLength: "--",
    waterQuality: "--",
    image_url: ""
  });

  useEffect(() => {
    const interval = setInterval(async () => {
      const newData = await getLatestData();
      setData(newData);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const cardStyle = {
    backgroundColor: "rgba(0, 255, 0, 0.05)",
    border: "2px solid #00FF00",
    borderRadius: "15px",
    padding: "25px",
    width: "250px",
    textAlign: "center",
    color: "#00FF00",
    boxShadow: "0 0 20px #00FF00",
    transition: "0.3s",
  };

  const containerStyle = {
    backgroundColor: "#000",
    color: "#00FF00",
    minHeight: "100vh",
    padding: "40px",
    fontFamily: "Orbitron, Arial, sans-serif",
    textAlign: "center",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    justifyItems: "center",
    gap: "30px",
    maxWidth: "800px",
    margin: "40px auto",
  };

  const singleCenterStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  };

  const buttonStyle = {
    backgroundColor: "transparent",
    border: "2px solid #00FF00",
    color: "#00FF00",
    padding: "10px 20px",
    borderRadius: "10px",
    cursor: "pointer",
    marginTop: "20px",
    boxShadow: "0 0 10px #00FF00",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: "2rem", textShadow: "0 0 20px #00FF00" }}>
        INDIAN ARMY UNDERWATER DRONE DASHBOARD
      </h1>
      <p style={{ fontSize: "1rem", color: "#9cff9c" }}>
        Real-Time Environmental and Operational Data Feed
      </p>

      {/* Grid for 2x2 cards */}
      <div style={gridStyle}>
        <div style={cardStyle}>
          <FaTemperatureHigh size={40} />
          <h3>Temperature</h3>
          <p>{data.temperature} °C</p>
        </div>

        <div style={cardStyle}>
          <FaRulerVertical size={40} />
          <h3>Depth</h3>
          <p>{data.depth} m</p>
        </div>

        <div style={cardStyle}>
          <FaTachometerAlt size={40} />
          <h3>Speed of Flow</h3>
          <p>{data.speed} m/s</p>
        </div>

        <div style={cardStyle}>
          <GiRiver size={40} />
          <h3>River Length</h3>
          <p>{data.riverLength} km</p>
        </div>
      </div>

      {/* Center aligned Water Quality card */}
      <div style={singleCenterStyle}>
        <div style={cardStyle}>
          <GiWaterDrop size={40} />
          <h3>Water Quality</h3>
          <p>{data.waterQuality}</p>
        </div>
      </div>

      <h2 style={{ marginTop: "40px", textShadow: "0 0 15px #00FF00" }}>
        Live Drone Feed
      </h2>

      <button style={buttonStyle}>📸 Latest Capture</button>

      {data.image_url && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={`http://<your_pc_ip>:8000${data.image_url}`}
            alt="Latest Capture"
            style={{
              width: "500px",
              borderRadius: "10px",
              border: "2px solid #00FF00",
              boxShadow: "0 0 20px #00FF00",
            }}
          />
        </div>
      )}

      <p style={{ marginTop: "30px", fontSize: "0.8rem", color: "#9cff9c" }}>
        🪖 Secure System © Indian Army AI Division | Data classified under defense protocol
      </p>
    </div>
  );
}

export default Dashboard;
