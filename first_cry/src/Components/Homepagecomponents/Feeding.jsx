import React from "react";
import feeding_data from "../../db.json";

const Feeding = () => {
    let feedingdata = feeding_data.feeding;
  return <div>
    {feedingdata.map((el)=>{
        return (
            <img src={el.image} alt="" />
        )
    })}
  </div>;
};

export default Feeding;
