import React from 'react'

function Square({value ,onClick}) {
  return (
    <div>
        <button className=" btn btn-light border square " onClick={onClick}>{value}</button>
    </div>
  )
}

export default Square