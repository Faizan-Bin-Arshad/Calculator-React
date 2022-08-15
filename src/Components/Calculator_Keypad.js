import React from 'react'

function Calculator_Keypad(props) {
  return (
    <>
    <div className='container' style={{marginLeft:'70vh',marginTop:'10vh'}}>
    <button className="btn btn-primary my-2 mx-2" style={{width:'15vh'}} onClick={e => props.DefaultArray(e.target.value)} type="submit" value={'1'}>1</button>
    <button className="btn btn-primary my-2 mx-2" style={{width:'15vh'}} onClick={e => props.DefaultArray(e.target.value)} type="submit" value={'2'}>2</button>
    <button className="btn btn-primary my-2 mx-2" style={{width:'15vh'}} onClick={e => props.DefaultArray(e.target.value)} type="submit" value={'3'}>3</button>
    <button className="btn btn-primary my-2 mx-2" style={{width:'15vh'}} onClick={e => props.DefaultArray(e.target.value)} type="submit" value={'/'}>/</button>
    <br/>
    <button className="btn btn-primary my-2 mx-2" style={{width:'15vh'}} onClick={e => props.DefaultArray(e.target.value)} type="submit" value={'4'}>4</button>
    <button className="btn btn-primary my-2 mx-2" style={{width:'15vh'}} onClick={e => props.DefaultArray(e.target.value)} type="submit" value={'5'}>5</button>
    <button className="btn btn-primary my-2 mx-2" style={{width:'15vh'}} onClick={e => props.DefaultArray(e.target.value)} type="submit" value={'6'}>6</button>
    <button className="btn btn-primary my-2 mx-2" style={{width:'15vh'}} onClick={e => props.DefaultArray(e.target.value)} type="submit" value={'*'}>*</button>
    <br/>
    <button className="btn btn-primary my-2 mx-2" style={{width:'15vh'}} onClick={e => props.DefaultArray(e.target.value)} type="submit" value={'7'}>7</button>
    <button className="btn btn-primary my-2 mx-2" style={{width:'15vh'}} onClick={e => props.DefaultArray(e.target.value)} type="submit" value={'8'}>8</button>
    <button className="btn btn-primary my-2 mx-2" style={{width:'15vh'}} onClick={e => props.DefaultArray(e.target.value)} type="submit" value={'9'}>9</button>
    <button className="btn btn-primary my-2 mx-2" style={{width:'15vh'}} onClick={e => props.DefaultArray(e.target.value)} type="submit" value={'-'}>-</button>
    <br/>
    <button className="btn btn-primary my-2 mx-2" style={{width:'15vh'}} onClick={e => props.DefaultArray(e.target.value)} type="submit" value={'0'}>0</button>
    <button className="btn btn-primary my-2 mx-2" style={{width:'15vh'}} onClick={e => props.DefaultArray(e.target.value)} type="submit" value={'backspace'}>DEL</button>
    <button className="btn btn-primary my-2 mx-2" style={{width:'15vh'}} onClick={e => props.DefaultArray(e.target.value)} type="submit" value={'+'}>+</button>
    <button className="btn btn-primary my-2 mx-2" style={{width:'15vh'}} onClick={e => props.DefaultArray(e.target.value)} type="submit" value={'='}>=</button>
    </div>
    </>
  )
}

export default Calculator_Keypad
