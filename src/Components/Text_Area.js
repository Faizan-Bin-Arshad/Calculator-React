import React from 'react'

function Text_Area(props) {
  return (
    <>
    <div className='container my-5' style={{width:'500px',height:'50px'}}>
       <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" defaultValue={props.secondArr}></textarea>
    </div>
    </>
  )
}

export default Text_Area
