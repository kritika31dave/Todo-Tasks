import React, { useState } from 'react'
import styled from 'styled-components'
import Todo from './Todo'
const Container=styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height:400px;
  padding: 20px 10px;
  margin: auto;
  border:4px solid black;
  border-radius: 4px ;
  box-shadow: 0 3px 6px 0 #555;
  background-color:burlywood;
`
const Head=styled.h1`
font-size:20px;
font-weight:bold;
`
const Container1=styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
`
const Input=styled.input`
padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-weight: bold;
`
const ClickBut=styled.button`
background-color: black;
    font-size: 14px;
    padding: 0 10px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: bold;

`
const Items=styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
border:1px solid black;
border-radius:5px;
width:200px;
height:20px;
margin:10px;
padding:10px 5px;
background-color:brown;
color:burlywood;
`
const List = () => {
  const[task,setTask] =useState();
  const [task1,setClick]=useState([]);
    const inputSet=(event)=>{
       setTask(event.target.value);
   }
   const setClick1=()=>{
       setClick((oldItems)=>{
           return [...oldItems,task];
       });
       setTask("");
   };
    const deleteItems=(id)=>{
        setClick((oldItems)=>{
            return oldItems.filter((arrItem,index)=>{
                return index!==id;
            });
        });
    };
  return (
    <Container>
    <Head>ToDo List</Head>
    <Container1>
    <Input placeholder='write your task here' value={task} onChange={inputSet} />
    <ClickBut onClick={setClick1}>Add</ClickBut>
    </Container1>
    
    <ol>
        {
          task1.map( (itemval,index)=>{
            return <Todo key={index} text={itemval} id={index} onSelect={deleteItems}/>
          })
        }
    </ol>
    
    
    </Container>
  )
}

export default List