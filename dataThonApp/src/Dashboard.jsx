import React from "react";

function Dashboard() {
  return (
    <div className="dash-board">
      {/* Embed Power BI Dashboard using iframe */}
      <iframe
        title="Power BI Dashboard"
        width="100%"
        height="600"
        src="https://app.powerbi.com/view?r=eyJrIjoiNzRkMmI1NzYtZmUzYS00YmJmLWI2ZTItMzZhZWI1ZmIzYjViIiwidCI6ImFkOWJkMDFhLWI0ODItNGEzMy1iM2E5LTAyMDdhZjMxZDM2NyJ9"
        frameBorder="0"
        allowFullScreen={true}
      ></iframe>

      <h2> Small Note on the Analysis and the insight on the dashboard</h2>
    </div>
  );
}

export default Dashboard;
