import React from 'react'
import gear_activity_data from "../../db.json";

const Gearactivity = () => {
    let gearactivitydata = gear_activity_data.gear_activity;
  return (
    <div>
        {gearactivitydata.map((el)=>{
        return (
            <img src={el.image} alt="" />
        )
    })}
    </div>
  )
}

export default Gearactivity