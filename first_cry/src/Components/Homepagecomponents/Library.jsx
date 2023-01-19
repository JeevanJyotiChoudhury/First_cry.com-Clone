import React from 'react'
import library_data from "../../db.json";

const Library = () => {
    let librarydata = library_data.library;
  return (
    <div>{librarydata.map((el)=>{
        return (
            <img src={el.image} alt="" />
        )
    })}</div>
  )
}

export default Library