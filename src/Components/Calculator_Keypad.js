import React, {useState} from 'react'

function Calculator_Keypad() {
  let temp = []; //Temporary Array
  let secondArr = []; //Number Array
  let i = 0; //Iterative Variable
  let temporaryVar = [];

  //DefaultArray function starts here----------------
  const DefaultArray = (props)=>{
    if(props !== '=' && props !== '+' && props !== '-' && props !== '*' && props !== '/' && props !== 'backspace' && props !== 'clear'){
      if(temp.length === 0){
        temp[i] = props;
        temporaryVar = temp;//Display
      } else{
        temp[i] = temp[i] + props;
        temporaryVar = temporaryVar + props;//Display
      }
      console.log(temp);
    } else if(props === '+' || props === '-' || props === '*' || props === '/'){
        if(temp !== '+' && temp !== '-' && temp !== '*' && temp !== '/'){
          if(temp.length > 0){
            secondArr.push(temp);
            temp = [];
          }
          secondArr.push(props);
          temporaryVar = temporaryVar + props;//Display
        } else if(temp === '+' || temp === '-'){
          temp = props + temp;
          secondArr.push(temp);
          temporaryVar = temporaryVar + props;//Display
          temp = [];
        } else if(temp === '*' || temp === '/'){
          alert("Syntax ERROR");
        }
    } else if(props === 'backspace'){
        if(arr.length === 0){
          alert("Nothing to clear");
        } else{
            temporaryVar = arr.pop();
            setArr(arr.filter(item => item.arr !== temporaryVar));
        }
    } else if(props === 'clear'){
      if(arr.length === 0){
        alert("Nothing to clear");
      } else{
        setArr([]);  
      }
    } else if(props === '='){
        if(temp.length === 0){
          ButtonPressed(arr);
        } else{
            secondArr.push(temp);
            temp = [];
            ButtonPressed(arr);
        }
    }

    if(props !== 'backspace'){
      setArr(arr => [...arr, temporaryVar]);
    }
  }


  //ButtonPressed Function Starts here----------
  const ButtonPressed = (props)=>{
    let duplicateArr = [];
    let finalNumArr = [];
    let count_plus = 0;
    let count_minus = 0;
    let count_multiply = 0;
    let count_divide = 0;
    let total = 0;
    let d = 0;
    let x = 0;
    let z = 0;
    let totalArr = [];
    var iterativeVar;

    //For filling Operator Array
    for (let index = 0; index < props.length; index++) {
      if(props[index] === '+' || props[index] === '-' || props[index] === '*' || props[index] === '/'){
        if(duplicateArr.length === 0){
          duplicateArr.push(props[index]);
        } else{
          duplicateArr.push(props[index]); 
        }
      }
    }

    //For filling Final Number array
    for (let n = 0; n < props.length; n++) {
      if(props[n] === '+' || props[n] === '-' || props[n] === '*' || props[n] === '/'){
        z++;
        finalNumArr[z] = " ";
        z++;
        finalNumArr[z] = [];
      } else{
        if(finalNumArr.length === 0){
          finalNumArr[z] = props[n];
        } else{
          finalNumArr[z] = finalNumArr[z] + props[n];
        }
      }
      finalNumArr[z+1] = [];
    }
    finalNumArr.pop();

    //For filling Full array
    for (let index = 0; index < finalNumArr.length; index++) {
      if(finalNumArr[index] === " "){
        finalNumArr[index] = duplicateArr[d];
        d++;
      }
    }
    finalNumArr =  finalNumArr.map(Number);
    iterativeVar = finalNumArr.length;

    //Calculation starts here
    for (let index = 0; index < iterativeVar; index++) {
      if(isNaN(finalNumArr[index])){
        if(duplicateArr[x] === '+'){
          if(totalArr.length === 0){
              count_plus = finalNumArr[index-1] + finalNumArr[index+1];
              totalArr.push(count_plus);
          } else{
            let p = totalArr.pop();
            count_plus = p + finalNumArr[index+1];
            totalArr.push(count_plus);
          }
          x++;
        }
        else if(duplicateArr[x] === '-'){
          if(totalArr.length === 0){
            count_minus = finalNumArr[index-1] - finalNumArr[index+1];
            totalArr.push(count_minus);
          } else{
            let l = totalArr.pop();
            count_minus = l - finalNumArr[index+1];
            totalArr.push(count_minus);
          }
          x++;
        }
        else if(duplicateArr[x] === '*'){
          if(totalArr.length === 0){
            count_multiply = finalNumArr[index-1] * finalNumArr[index+1];
            totalArr.push(count_multiply);
          }else{
            let m = totalArr.pop();
            count_multiply = m * finalNumArr[index+1];
            totalArr.push(count_multiply);
          }
          x++;
        }
        else if(duplicateArr[x] === '/'){
          if(totalArr.length === 0){
            if(finalNumArr[index-1] === 0 || finalNumArr[index+1] === 0){
              alert("Math ERROR");
            }else{
              count_divide = finalNumArr[index-1] / finalNumArr[index+1];
              totalArr.push(count_divide);
            }
          } else{
            let d = totalArr.pop();
            if(d === 0 || finalNumArr[index+1] === 0){
              alert("Math ERROR");
            } else{
              count_divide = d / finalNumArr[index+1];
              totalArr.push(count_divide);
            }
          }
          x++;
        }
      }
    }
     
    total = totalArr;
    setArr(total);
  }


  //Array React Hook
  const [arr, setArr] = useState([]);

  return (
    <>
    <div className='container' style={{border: '1px solid #f9efdd',paddingTop: '7vh',width: '29vw',height: '70vh',marginTop: '5vh',backgroundColor: '#f9efdd'}}>
      <div className='container' style={{paddingLeft: '1vw',paddingTop: '0vh'}}>
        <div style={{textAlign: 'end',width:'25vw',height:'15vh',border: '1px solid white',backgroundColor: '#eafaff'}}>{arr}</div>
        <div style={{paddingTop: '2vh'}}>
        <button className="btn btn-primary my-2 mx-2" style={{width:'5vw',backgroundColor: '#a6abaa'}} onClick={e => DefaultArray(e.target.value)} value={'1'}>1</button>
        <button className="btn btn-primary my-2 mx-2" style={{width:'5vw',backgroundColor: '#a6abaa'}} onClick={e => DefaultArray(e.target.value)} value={'2'}>2</button>
        <button className="btn btn-primary my-2 mx-2" style={{width:'5vw',backgroundColor: '#a6abaa'}} onClick={e => DefaultArray(e.target.value)} value={'3'}>3</button>
        <button className="btn btn-primary my-2 mx-2" style={{width:'5vw',fontWeight: 'bold',backgroundColor: '#5acc59'}} onClick={e => DefaultArray(e.target.value)} value={'/'}>/</button>
        <br/>
        <button className="btn btn-primary my-2 mx-2" style={{width:'5vw',backgroundColor: '#a6abaa'}} onClick={e => DefaultArray(e.target.value)} value={'4'}>4</button>
        <button className="btn btn-primary my-2 mx-2" style={{width:'5vw',backgroundColor: '#a6abaa'}} onClick={e => DefaultArray(e.target.value)} value={'5'}>5</button>
        <button className="btn btn-primary my-2 mx-2" style={{width:'5vw',backgroundColor: '#a6abaa'}} onClick={e => DefaultArray(e.target.value)} value={'6'}>6</button>
        <button className="btn btn-primary my-2 mx-2" style={{width:'5vw',fontWeight: 'bold',backgroundColor: '#5acc59'}} onClick={e => DefaultArray(e.target.value)} value={'*'}>x</button>
        <br/>
        <button className="btn btn-primary my-2 mx-2" style={{width:'5vw',backgroundColor: '#a6abaa'}} onClick={e => DefaultArray(e.target.value)} value={'7'}>7</button>
        <button className="btn btn-primary my-2 mx-2" style={{width:'5vw',backgroundColor: '#a6abaa'}} onClick={e => DefaultArray(e.target.value)} value={'8'}>8</button>
        <button className="btn btn-primary my-2 mx-2" style={{width:'5vw',backgroundColor: '#a6abaa'}} onClick={e => DefaultArray(e.target.value)} value={'9'}>9</button>
        <button className="btn btn-primary my-2 mx-2" style={{width:'5vw',fontWeight: 'bold',backgroundColor: '#5acc59'}} onClick={e => DefaultArray(e.target.value)} value={'-'}>-</button>
        <br/>
        <button className="btn btn-primary my-2 mx-2" style={{width:'5vw',fontWeight: 'bold',backgroundColor: '#5acc59'}} onClick={e => DefaultArray(e.target.value)} value={'backspace'}>DEL</button>
        <button className="btn btn-primary my-2 mx-2" style={{width:'5vw',backgroundColor: '#a6abaa'}} onClick={e => DefaultArray(e.target.value)} value={'0'}>0</button>
        <button className="btn btn-danger my-2 mx-2" style={{width:'5vw',fontWeight: 'bold'}} onClick={e => DefaultArray(e.target.value)} value={'='}>=</button>
        <button className="btn btn-primary my-2 mx-2" style={{width:'5vw',fontWeight: 'bold',backgroundColor: '#5acc59'}} onClick={e => DefaultArray(e.target.value)} value={'+'}>+</button>
        <br/>
        <div className='container'  style={{paddingLeft: '0vw'}}>
          <button className="btn btn-primary my-2 mx-2" style={{width: '23.5vw',fontWeight: 'bold',backgroundColor: '#5acc59'}} onClick={e => DefaultArray(e.target.value)} value={'clear'}>C</button>
        </div>
        </div>
      </div>  
    </div>
    </>
  )
}

export default Calculator_Keypad