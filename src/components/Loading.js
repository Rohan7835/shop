import React, { useState } from "react";

function Loading() {
  const [icon, setIcon] = useState("fas fa-carrot");

  setTimeout(() => {
    setIcon("fas fa-ice-cream");
  }, 1500);

  return (
    <div className="loading-section">
      <div className="loader">
        <div className="border"></div>
        <i className={icon}></i>
      </div>
    </div>
  );
}

export default Loading;
