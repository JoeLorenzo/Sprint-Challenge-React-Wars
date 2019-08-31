import React, { useState, useEffect } from 'react';
import axios from 'axios';



function People(){
  return (
    <div>
      <h2>Hello World</h2>
      useEffect(() => {
        axios.get("")
        .then(res => {
        console.log(res.data)
  })
}, [])
    </div>
  )
}

export default People;
