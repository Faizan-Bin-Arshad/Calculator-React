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
          console.log("Second Array filling: "+secondArr);
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
        temporaryVar = arr;
        setArr([]);
        if(temporaryVar.length === 0){
          alert("Nothing to clear");
        } else{
            temporaryVar.pop();
            console.log("The Array After poping is: "+ temporaryVar);
            setArr(temporaryVar);
        }
    } else if(props === 'clear'){
      if(arr.length === 0){
        alert("Nothing to clear");
      } else{
        setArr([]);  
      }
    } else if(props === '='){
        console.log("Second Array going to button pressed is: "+secondArr);
        if(temp.length === 0){
          ButtonPressed(arr);
        } else{
            secondArr.push(temp);
            temp = [];
            ButtonPressed(arr);
        }
    }

    if(props !== 'backspace'){
      console.log("I am in Last of the function");
      setArr(arr => [...arr, temporaryVar]);
    }
  }


  //ButtonPressed Function Starts here----------
  const ButtonPressed = (props)=>{
    let duplicateArr = [];
    let numberArr = [];
    let count_plus = 0;
    let count_minus = 0;
    let count_multiply = 0;
    let count_divide = 0;
    let total = 0;
    let x = 0;
    let totalArr = [];
    console.log("I am in ButtonPressed");
    console.log(props.length);
    for (let index = 0; index < props.length; index++) {
      if(props[index] === '+' || props[index] === '-' || props[index] === '*' || props[index] === '/'){
        if(duplicateArr.length === 0){
          duplicateArr.push(props[index]);
        } else{
          duplicateArr.push(props[index]); 
        }
      }
    }
  
    numberArr = props.map(Number);
     
    for (let index = 0; index < props.length; index++) {
      if(isNaN(numberArr[index])){
        console.log("Number Index is: "+numberArr[index]);
        if(duplicateArr[x] === '+'){
          if(totalArr.length === 0){
              count_plus = numberArr[index-1] + numberArr[index+1];
              totalArr.push(count_plus);
          } else{
            let p = totalArr.pop();
            count_plus = p + numberArr[index+1];
            totalArr.push(count_plus);
          }
          console.log("I am in addition: "+count_plus);
          x++;
        }
        else if(duplicateArr[x] === '-'){
          if(totalArr.length === 0){
            count_minus = numberArr[index-1] - numberArr[index+1];
            totalArr.push(count_minus);
          } else{
            console.log("I am in Else statement of Subtraction"+ totalArr.slice(-1));
            let l = totalArr.pop();
            count_minus = l - numberArr[index+1];
            totalArr.push(count_minus);
          }
          console.log("I am in subtraction: "+count_minus);
          x++;
        }
        else if(duplicateArr[x] === '*'){
          if(totalArr.length === 0){
            count_multiply = numberArr[index-1] * numberArr[index+1];
            totalArr.push(count_multiply);
          }else{
            let m = totalArr.pop();
            count_multiply = m * numberArr[index+1];
            totalArr.push(count_multiply);
          }
          console.log("I am in multiplication: "+count_multiply);
          x++;
        }
        else if(duplicateArr[x] === '/'){
          if(totalArr.length === 0){
            count_divide = numberArr[index-1] / numberArr[index+1];
            totalArr.push(count_divide);
          } else{
            let d = totalArr.pop();
            count_divide = d / numberArr[index+1];
            totalArr.push(count_divide);
          }
          console.log("I am in division: "+count_divide);
          x++;
        }
      }
    }
     
    total = totalArr;
    setArr(total);
    console.log(total);
  }


  const [arr, setArr] = useState([]);

  return (
    <>
    <div className='container' style={{border: '5px solid black',paddingTop: '10vh',width: '100vh',marginTop: '5vh',backgroundColor: '#98d3d6'}}>
      <div className='container' style={{paddingLeft: '5vh'}}>
        <div style={{width:'40vw',height:'20vh',border: '5px solid black',padding: '10vh',backgroundColor: 'white'}}>{arr}</div>
        <div style={{paddingTop: '5vh'}}>
        <button className="btn btn-primary my-2 mx-2" style={{width:'9vw'}} onClick={e => DefaultArray(e.target.value)} value={'1'}>1</button>
        <button className="btn btn-primary my-2 mx-2" style={{width:'9vw'}} onClick={e => DefaultArray(e.target.value)} value={'2'}>2</button>
        <button className="btn btn-primary my-2 mx-2" style={{width:'9vw'}} onClick={e => DefaultArray(e.target.value)} value={'3'}>3</button>
        <button className="btn btn-primary my-2 mx-2" style={{width:'9vw'}} onClick={e => DefaultArray(e.target.value)} value={'/'}>/</button>
        <br/>
        <button className="btn btn-primary my-2 mx-2" style={{width:'9vw'}} onClick={e => DefaultArray(e.target.value)} value={'4'}>4</button>
        <button className="btn btn-primary my-2 mx-2" style={{width:'9vw'}} onClick={e => DefaultArray(e.target.value)} value={'5'}>5</button>
        <button className="btn btn-primary my-2 mx-2" style={{width:'9vw'}} onClick={e => DefaultArray(e.target.value)} value={'6'}>6</button>
        <button className="btn btn-primary my-2 mx-2" style={{width:'9vw'}} onClick={e => DefaultArray(e.target.value)} value={'*'}>*</button>
        <br/>
        <button className="btn btn-primary my-2 mx-2" style={{width:'9vw'}} onClick={e => DefaultArray(e.target.value)} value={'7'}>7</button>
        <button className="btn btn-primary my-2 mx-2" style={{width:'9vw'}} onClick={e => DefaultArray(e.target.value)} value={'8'}>8</button>
        <button className="btn btn-primary my-2 mx-2" style={{width:'9vw'}} onClick={e => DefaultArray(e.target.value)} value={'9'}>9</button>
        <button className="btn btn-primary my-2 mx-2" style={{width:'9vw'}} onClick={e => DefaultArray(e.target.value)} value={'-'}>-</button>
        <br/>
        <button className="btn btn-primary my-2 mx-2" style={{width:'9vw'}} onClick={e => DefaultArray(e.target.value)} value={'0'}>0</button>
        <button className="btn btn-primary my-2 mx-2" style={{width:'9vw'}} onClick={e => DefaultArray(e.target.value)} value={'backspace'}>DEL</button>
        <button className="btn btn-primary my-2 mx-2" style={{width:'9vw'}} onClick={e => DefaultArray(e.target.value)} value={'+'}>+</button>
        <button className="btn btn-primary my-2 mx-2" style={{width:'9vw'}} onClick={e => DefaultArray(e.target.value)} value={'='}>=</button>
        <br/>
        <button className="btn btn-primary my-2 mx-2" style={{width:'9vh'}} onClick={e => DefaultArray(e.target.value)} value={'clear'}>C</button>
        </div>
      </div>  
    </div>
    </>
  )
}

export default Calculator_Keypad
