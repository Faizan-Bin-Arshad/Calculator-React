import './App.css';
import Navbar from './Components/Navbar';
import Calculator_Keypad from './Components/Calculator_Keypad';
import Text_Area from './Components/Text_Area';
import React, {useState} from 'react'

function App() {
  const [arr, setArr] = useState([]);
  const [Oparr, setOpArr] = useState([]);

  let temp = []; //Temporary Array
  let secondArr = []; //Number Array]
  let popArr = []; //Pop Array
  let check = false; //For Backspace
  let i = 0; //Iterative Variable


  //DefaultArray function starts here----------------
  const DefaultArray = (props)=>{
    if(props !== '=' && props !== '+' && props !== '-' && props !== '*' && props !== '/' && props !== 'backspace'){
      if(temp.length === 0){
        temp[i] = props;
      } else{
        temp[i] = temp[i] + props;
      }
      console.log(temp);
    } else if(props === '+' || props === '-' || props === '*' || props === '/'){
        if(temp !== '+' && temp !== '-' && temp !== '*' && temp !== '/'){
          if(temp.length > 0){
            secondArr.push(temp);
            temp = [];
          }
          secondArr.push(props);
        } else if(temp === '+' || temp === '-'){
          temp = props + temp;
          secondArr.push(temp);
          temp = [];
        } else if(temp === '*' || temp === '/'){
          alert("Syntax ERROR");
        }
    } else if(props === 'backspace'){
        if(check === false){
            secondArr.push(temp);
            temp = [];
            popArr = secondArr;
            console.log("The Array before poping is: "+secondArr);
            if(secondArr.length === 0){
                alert("Nothing to clear");
            } else{
                popArr.pop();
                check = true;
                console.log("The Array After poping is: "+secondArr);
            }
            secondArr = popArr;
        } else{ //If check is true
          popArr = secondArr;
          console.log("The Array before poping is: "+secondArr);
            if(secondArr.length === 0){
                alert("Nothing to clear");
            } else{
                popArr.pop();
                check = true;
                console.log("The Array After poping is: "+secondArr);
            }
            secondArr = popArr;
        }
    } else if(props === '='){
      check = false;
        if(temp.length === 0){
          ButtonPressed(secondArr);
        } else{
            secondArr.push(temp);
            temp = [];
            ButtonPressed(secondArr);
        }
    }
  }

  //ButtonPressed Function Starts here----------
  const ButtonPressed = (props)=>{
    let duplicateArr = [];
    let numberArr = [];
    console.log("I am in ButtonPressed");
    console.log(props);
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
    setArr(arr => [...arr, numberArr]);
    setOpArr(Oparr => [...Oparr, duplicateArr])
    console.log(numberArr);
    console.log(duplicateArr);

    let count_plus = 0;
    let count_minus = 0;
    let count_multiply = 0;
    let count_divide = 0;
    let total = 0;
    let x = 0;
    let totalArr = [];
     
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
          console.log(total);
  }

  return (
    <>
    <Navbar heading='Calculator'/>
    <Text_Area  secondArr={secondArr}/>
    <Calculator_Keypad DefaultArray={DefaultArray}/>
    </>
  );
}

export default App;
