import React from 'react'
import "./sidebaroptions.css"
function Sidebaroptions({active,text,Icon}) {
  return (
    <div className={`sidebaroptions ${active && "sidebaroptions--active"}`}>
    <Icon/>
      <h2>{text}</h2>
    </div>
  )
}

export default Sidebaroptions
