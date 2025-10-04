import React from "react";
import { useNavigate } from "react-router-dom";
import { FaShieldAlt, FaRobot, FaSatellite, FaUserShield } from "react-icons/fa";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(to bottom right, #0b1e13, #123d25, #0b1e13)",
        color: "#e2e2e2",
        fontFamily: "'Rajdhani', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px",
      }}
    >
      {/* Title */}
      <h1
        style={{
          color: "#ffe600",
          fontSize: "2.8rem",
          textShadow: "0 0 10px #00ff66",
        }}
      >
        INDIAN ARMY UNDERWATER DRONE COMMAND SYSTEM
      </h1>
      <p style={{ maxWidth: "700px", marginTop: "20px", color: "#b5b5b5" }}>
        A next-generation reconnaissance interface built for secure, real-time
        monitoring of underwater drone data — designed with precision, ethics,
        and reliability at its core.
      </p>

      {/* Principles Section */}
      <div
        style={{
          marginTop: "60px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        <div
          style={{
            width: "260px",
            backgroundColor: "rgba(0,30,0,0.8)",
            border: "2px solid #3c6e47",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 0 10px #00ff66",
          }}
        >
          <FaShieldAlt size={40} color="#ffe600" />
          <h3>Reliability</h3>
          <p>
            The system ensures uninterrupted data flow, redundancy, and
            resilience against signal losses or environmental interferences.
          </p>
        </div>

        <div
          style={{
            width: "260px",
            backgroundColor: "rgba(0,30,0,0.8)",
            border: "2px solid #3c6e47",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 0 10px #00ff66",
          }}
        >
          <FaRobot size={40} color="#ffe600" />
          <h3>Automation</h3>
          <p>
            Automated system checks, data refresh, and performance tracking to
            minimize human error and maximize efficiency.
          </p>
        </div>

        <div
          style={{
            width: "260px",
            backgroundColor: "rgba(0,30,0,0.8)",
            border: "2px solid #3c6e47",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 0 10px #00ff66",
          }}
        >
          <FaSatellite size={40} color="#ffe600" />
          <h3>Integration</h3>
          <p>
            Modular design allowing future integration with satellite, sonar,
            and AI-based threat analysis systems.
          </p>
        </div>

        <div
          style={{
            width: "260px",
            backgroundColor: "rgba(0,30,0,0.8)",
            border: "2px solid #3c6e47",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 0 10px #00ff66",
          }}
        >
          <FaUserShield size={40} color="#ffe600" />
          <h3>Ethics & Security</h3>
          <p>
            Data is encrypted and ethically handled — respecting marine
            environments, human rights, and defense confidentiality.
          </p>
        </div>
      </div>

      {/* Proceed Button */}
      <button
        onClick={() => navigate("/dashboard")}
        style={{
          marginTop: "60px",
          backgroundColor: "#006b1b",
          color: "#fff",
          border: "2px solid #00ff66",
          borderRadius: "10px",
          padding: "15px 40px",
          fontSize: "1.2rem",
          cursor: "pointer",
          boxShadow: "0 0 15px #00ff66",
          transition: "0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#00ff66")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#006b1b")}
      >
        Enter Command Center →
      </button>

      <p style={{ marginTop: "40px", fontSize: "0.9rem", color: "#999" }}>
        Designed under Army Tech & Ethics Protocols v3.4 
      </p>
    </div>
  );
}

export default LandingPage;
