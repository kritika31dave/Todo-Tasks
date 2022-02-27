import React from 'react'
import styled from 'styled-components';
const Contain=styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
margin:10px;

`
const But=styled.button`
background-color:black;
color:burlywood;

`
const List=styled.li`
font-size:20px;
font-weight:bold;
list-style-type:none;
`
const Todo = ({text,id,onSelect}) => {
  return (
      <>
    <Contain>
        <But onClick={()=> onSelect(id)} >X</But>
        <List>{text}</List>
    </Contain>
    </>
  )
}

export default Todo