import React from "react";


const MenuItem = (props) => {

    const selectHandler = (e) => {
    props.onSelect(e.currentTarget)
   }

  return (
    <div className={props.itemClass} id={props.id} onClick={selectHandler}>
      <props.icon></props.icon>
      <span>{props.name}</span>
    </div>
  );
};

export default MenuItem;
