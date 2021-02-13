import React from "react";
import SideBarItem from "./SideBarItem";

const SideBar = () => {
  return (
    <div className="sidebar">
      <ul className="side-nav-links">
        <SideBarItem
          icon="fas fa-carrot"
          title="Fresh Vegetables"
          arrow
          active
        />
        <SideBarItem icon="fas fa-apple-alt" title="Fresh Fruits" arrow />
        <SideBarItem icon="fas fa-wine-bottle" title="Dairy & Eggs" arrow />
        <SideBarItem icon="fas fa-cookie-bite" title="Breakfast" />
        <SideBarItem icon="fas fa-ice-cream" title="Frozen" arrow />
        <SideBarItem icon="fas fa-utensils" title="Organic" arrow />
        <SideBarItem icon="fas fa-pizza-slice" title="Canned Food" />
        <SideBarItem icon="fas fa-coffee" title="Coffee & Snacks" arrow />
        <SideBarItem
          icon="fas fa-glass-martini-alt"
          title="Beverage & Juice"
          arrow
        />
      </ul>
    </div>
  );
};

export default SideBar;
