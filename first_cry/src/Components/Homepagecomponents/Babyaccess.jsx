import React from "react";
import babyaccess_data from "../../db.json";

const Babyaccess = () => {
  let babyaccessdata = babyaccess_data.baby_access;
  return (
    <div>
      {babyaccessdata.map((el) => {
        return <img src={el.image} alt="" />;
      })}
    </div>
  );
};

export default Babyaccess;
