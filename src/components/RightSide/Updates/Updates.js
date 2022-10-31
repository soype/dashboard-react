import React from "react";

import img1 from "../../../imgs/img1.png";
import img2 from "../../../imgs/img2.png";
import img3 from "../../../imgs/img3.png";

import './Updates.css';

const Updates = () => {
  const UpdatesData = [
    {
      img: img1,
      name: "Andrew Thomas",
      noti: "has ordered Apple smart watch 2500mh battery.",
      time: "25 seconds ago",
    },
    {
      img: img2,
      name: "James Bond",
      noti: "has received Samsung gadget for charging battery.",
      time: "30 minutes ago",
    },
    {
      img: img3,
      name: "Iron Man",
      noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
      time: "2 hours ago",
    },
  ];

  return (
    <div className="updates">
      {UpdatesData.map((update) => {
        return (
          <React.Fragment>
            <div className="update">
              <img className="update-img" src={update.img} alt="" />
              <div className="update-message">
                <span>{update.name} </span>{update.noti}
                <br />
                <span className="update-date">{update.time}</span>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Updates;
