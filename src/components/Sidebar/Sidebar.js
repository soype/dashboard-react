import React, { useState } from "react";

import Logo from "../../imgs/logo.png";
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
  UilBars,
} from "@iconscout/react-unicons";

import {motion} from 'framer-motion';
import "./Sidebar.css";
import MenuItem from "./MenuItem";

const Sidebar = () => {
  const menuItems = [
    {
      id: 0,
      name: "Dashboard",
      icon: UilEstate,
      itemClass: "menu-item selector",
    },
    {
      id: 1,
      name: "Orders",
      icon: UilClipboardAlt,
      itemClass: "menu-item",
    },
    {
      id: 2,
      name: "Customers",
      icon: UilUsersAlt,
      itemClass: "menu-item",
    },
    {
      id: 3,
      name: "Products",
      icon: UilPackage,
      itemClass: "menu-item",
    },
    {
      id: 4,
      name: "Analytics",
      icon: UilChart,
      itemClass: "menu-item",
    },
  ];

  const [selected, setSelected] = useState(0);
  // Menu expand for mobile
  const [expanded, setExpanded] = useState(false);

  const selectHandler = (e) => {
    setSelected(e.id.toString());
  };

  const sidebarVariants = {
    true: {
      left: '0'
    },
    false:{
      left: '-60%'
    }
  }

  return (
    <>
      <div className="bars" style={expanded? {left:'60%'}:{left:'5%'}} onClick={() => setExpanded(!expanded)}>
          <UilBars />
        </div>
      <motion.div className="sidebar" 
        variants={sidebarVariants}
        animate={window.innerWidth<=768?`${expanded}`:''}
      >
        <div className="logo">
          <img src={Logo} alt="" />
          <span className="logo-text">
            Sh<span className="logo-text-color">o</span>ps
          </span>
        </div>
        <div className="menu">
          {menuItems.map((item) => {
            return (
              <MenuItem
                id={item.id}
                icon={item.icon}
                name={item.name}
                key={item.id}
                itemClass={
                  +selected === item.id ? "menu-item selector" : "menu-item"
                }
                onSelect={selectHandler}
              />
            );
          })}
          <div className="menu-item">
            <UilSignOutAlt></UilSignOutAlt>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
