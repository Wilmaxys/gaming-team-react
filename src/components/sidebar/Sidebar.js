import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import { selectMenuItems } from "../../slices/sidebarSlice";
import { Icon } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const SideBar = () => {
  const [drawerPos, setDrawerPos] = useState(false);
  const items = useSelector(selectMenuItems);

  const handleDrawer = () => {
    setDrawerPos(!drawerPos);
  };

  let sidebarClass = [];
  if (drawerPos) {
    sidebarClass.push(styles.sidebar_max);
  }
  sidebarClass.push(styles.sidebar);

  return (
    <div className={sidebarClass.join(" ")}>
      <div className={styles.top_part}>
        <span className={styles.sidebar_drawer_icon} onClick={handleDrawer}>
          <MenuIcon />
        </span>
      </div>
      <div className={styles.bottom_part}>
        <ul>
          {items.map((item) => (
            <li key={item.title}>
              <Link to={item.link}>
                <Icon>{item.icon}</Icon>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
