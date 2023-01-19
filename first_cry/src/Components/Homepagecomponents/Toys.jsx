import React from 'react'
import toy_data from "../../db.json";

const Toys = () => {
    let toydata = toy_data.toys;
  return (
    <div>
        {toydata.map((el)=>{
        return (
            <img src={el.image} alt="" />
        )
    })}
    </div>
  )
}

export default Toys