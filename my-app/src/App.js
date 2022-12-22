import React from 'react'
import './App.css';

function App() {
const[dices,setDices]=React.useState([
{id:1,locked:false,value:1},
{id:2,locked:false,value:2},
{id:3,locked:false,value:3},
{id:4,locked:false,value:4},
{id:5,locked:false,value:5},
{id:6,locked:false,value:6},
{id:7,locked:false,value:1},
{id:8,locked:false,value:2},
{id:9,locked:false,value:3},
{id:10,locked:false,value:4}
])

const[count,setCount]=React.useState(0)

const[victory,setVictory]=React.useState(false)

const Dices=dices.map(createDice)

React.useEffect(()=>{
let firstNum=dices[1].value
let same=true
for(let i=1;i<Dices.length;i++){
  if(dices[i].value!==firstNum){
    same=false
    break
  }
}
if(same){
  setVictory(true)
}
},[count])

function handleClick(num){
  const newDices=[...dices]
  for(let i=0;i<newDices.length;i++){
    if(newDices[i].id===num){
      const currentValue=newDices[i].locked
      newDices[i].locked=!currentValue
    }
  }
  setDices(newDices)
  
}


function rollDice(){
  const newDices=[...dices]
  for(let i=0;i<newDices.length;i++){
    if(newDices[i].locked===false){
      let newNum =Math.ceil(6*Math.random())  
      newDices[i].value=newNum
    }
  }
  setDices(newDices)
  setCount(prevCount=>prevCount+1)
}

function resetDice(){
  setDices([
    {id:1,locked:false,value:1},
    {id:2,locked:false,value:2},
    {id:3,locked:false,value:3},
    {id:4,locked:false,value:4},
    {id:5,locked:false,value:5},
    {id:6,locked:false,value:6},
    {id:7,locked:false,value:1},
    {id:8,locked:false,value:2},
    {id:9,locked:false,value:3},
    {id:10,locked:false,value:4}
    ])

    setCount(0)
    setVictory(false)
}

function createDice(val){
  const id=val.id
  const locked=val.locked
  const value=val.value
  const ClassName=locked?"locked-dice":"unlocked-dice"
  return(
    <div 
    className={ClassName}
    id={id}
    locked={locked}
    onClick={()=>{handleClick(id)}}
    > 
    {value}
    
    </div>
  )
}

  return (
    <div className="App">
      <h1>TENZIES</h1>
      <div className='allThemDices'>{Dices}</div>
      <div className='count'>Number of Rolls:{count}</div>
      <div className='buttons'>
      <button className='roll' onClick={rollDice}>ROLL</button>
      <button className='reset' onClick={resetDice}>RESET</button>
      </div>
      {victory&&<h2>YOU WIN</h2>}
    </div>
  );
}

export default App;
