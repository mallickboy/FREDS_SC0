import React from 'react'
import "./sidebaroptions.css"
function Sidebaroptions({active,text,Icon}) {
  let color;
  if(active==1){
    color='active';
  }else{
    color=''
  }
  return (
    <div className={`sidebaroptions ${color && "sidebaroptions--active"} `}>
    <Icon/>
      <h2>{text}</h2>
    </div>
  )
}

export default Sidebaroptions
