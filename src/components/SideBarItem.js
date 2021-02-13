import React from "react";

const SideBarItem = ({ icon, title, arrow, active }) => {
  return (
    <li className={active ? "side-link active" : "side-link"}>
      <i className={icon}></i>
      <p className="side-link-title">{title}</p>
      {arrow && <p className="arrow">&gt;</p>}
    </li>
  );
};
export default SideBarItem;
