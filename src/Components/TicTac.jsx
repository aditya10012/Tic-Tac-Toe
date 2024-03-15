import React, { useRef, useState } from 'react'
import './tictac.css';
import circle from './assets/circle.png'
import cross from './assets/cross.png'


let data=["","","","","","","","",""];
//Array(9).fill(null);

const TicTac = () => {
  
  let [count,setcount]=useState(0);
  let[lock,setlock]=useState(false);
  let titleRef=useRef(null);

  const toggle =(w,num)=>{
   if(lock){
    return 0;
   }
   if(count%2===0){
    w.target.innerHTML=`<img src=${cross}>`;
    data[num]="x";
    setcount(++count);
   }
   else{
    w.target.innerHTML=`<img src=${circle}>`;
    data[num]="o";
    setcount(++count);
   }
   checkWin();
  }
const checkWin =()=>{
  if(data[0]===data[1] && data[1]==data[2] && data[2]!==""){
     won(data[2]);
  }
  else if(data[3]===data[4] && data[4]==data[5] && data[5]!==""){
    won(data[5]);
  }
  else if(data[6]===data[7] && data[7]==data[8] && data[8]!==""){
    won(data[8]);
  }
  else if(data[0]===data[3] && data[3]==data[6] && data[6]!==""){
    won(data[6]);
  }
  else if(data[1]===data[4] && data[4]==data[7] && data[7]!==""){
    won(data[7]);
  }
  else if(data[2]===data[5] && data[5]==data[8] && data[8]!==""){
    won(data[8]);
  }
  else if(data[0]===data[4] && data[4]==data[8] && data[8]!==""){
    won(data[8]);
  }
  else if(data[2]===data[4] && data[4]==data[6] && data[6]!==""){
    won(data[6]);
  }

}
const won = (winner) =>{
  setlock(true);
  if(winner==="x")
  {
     titleRef.current.innerHTML=`Congratulations :
     <img src=${cross}> Won `
  }
  else if(winner==="o"){
    titleRef.current.innerHTML=`Congratulations :
     <img src=${circle}> Won `
  }
}

const reset = () =>{
  setlock(false);
   data=["","","","","","","","",""];
   document.querySelectorAll('.boxes').forEach(box => {
    box.innerHTML = '';
  });
  titleRef.current.innerHTML=`Tic Tac Toe Using <span>React</span>`
};

  return (
    <div className='container'>
      <h1 className='title' ref={titleRef}>Tic Tac Toe Using <span>React</span></h1>
      <div className='board'>
        <div className='row1'>
          <div className='boxes' onClick={(w)=>{toggle(w,0)}}></div>
          <div className='boxes'onClick={(w)=>{toggle(w,1)}}></div>
          <div className='boxes'onClick={(w)=>{toggle(w,2)}}></div>
        </div>
        <div className='row2'>
          <div className='boxes'onClick={(w)=>{toggle(w,3)}}></div>
          <div className='boxes'onClick={(w)=>{toggle(w,4)}}></div>
          <div className='boxes'onClick={(w)=>{toggle(w,5)}}></div>
        </div>
        <div className='row3'>
          <div className='boxes'onClick={(w)=>{toggle(w,6)}}></div>
          <div className='boxes'onClick={(w)=>{toggle(w,7)}}></div>
          <div className='boxes'onClick={(w)=>{toggle(w,8)}}></div>
        </div>
      </div>
      <button className='reset' onClick={()=>{reset()}}>Reset</button>
    </div>
  )
}

export default TicTac
