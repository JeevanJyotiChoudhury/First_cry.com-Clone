import React from 'react'
import occasionbanner_data from "../../db.json";
import occasion_data from "../../db.json";

const Occasion = () => {
    let occasionbannerdata = occasionbanner_data.occasion_banner;
  let occasiondata = occasion_data.occasion_edit;
  return (
    <div>
      <div>
        {occasionbannerdata.map((el) => {
          return <img src={el.image} alt="" />;
        })}
      </div>
      <div>
        {occasiondata.map((elem) => {
          return <img src={elem.image} alt="" />;
        })}
      </div>
    </div>
  )
}

export default Occasion
