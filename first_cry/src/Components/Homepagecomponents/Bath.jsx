import React from 'react'
import bathbanner_data from "../../db.json";
import bath_data from "../../db.json";

const Bath = () => {
    let bathbannerdata = bathbanner_data.bath_banner;
  let bathdata = bath_data.bath;
  return (
    <div>
        <div>
        {bathbannerdata.map((el) => {
          return <img src={el.image} alt="" />;
        })}
      </div>
      <div>
        {bathdata.map((elem) => {
          return <img src={elem.image} alt="" />;
        })}
      </div>
    </div>
  )
}

export default Bath