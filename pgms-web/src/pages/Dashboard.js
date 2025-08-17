import React from "react";

function Dashboard() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Welcome, User 👋</h2>
        <p>You have successfully logged in.</p>
      </div>

      <div style={styles.grid}>
        <div style={styles.tile}>
          <h3>Profile</h3>
          <p>View and edit your personal info.</p>
        </div>
        <div style={styles.tile}>
          <h3>Reports</h3>
          <p>Check your recent activities.</p>
        </div>
        <div style={styles.tile}>
          <h3>Settings</h3>
          <p>Manage your account preferences.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#f5f5f5",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  card: {
    background: "#fff",
    padding: "1.5rem",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "600px",
    marginBottom: "2rem",
    textAlign: "center"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1rem",
    width: "100%",
    maxWidth: "800px"
  },
  tile: {
    background: "#fff",
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    textAlign: "center"
  }
};

export default Dashboard;
