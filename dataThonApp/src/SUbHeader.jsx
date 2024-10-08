import React from "react";
import "./index.css"; // Import the CSS file

function SubHeader() {
    const text = "JAMBVision is an innovative platform that leverages advanced predictive modeling to assess students' likelihood of passing or failing their exams, providing personalized insights and guidance to enhance their academic success.";

    return (
        <div className="marquee">
            <h3>{text}</h3>
        </div>
    );
}

export default SubHeader;
