import React, { useState, useEffect } from 'react';
import App from "../App"
import axios from 'axios';
import { Jumbotron } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components"

const NameTag = styled.h2`
font-size: 1rem;
color:blue;
`

function People(props){
  const [charName, setCharName] = useState("")
  const [charGender, setCharGender] = useState("")
  const [birthYear, setBirthYear] = useState("")

  useEffect( () => {
    axios.get(props.url)
    .then(res => {
      setCharName(res.data.name)
      setCharGender(res.data.gender)
      setBirthYear(res.data.birth_year)
    })
  }, [])

  return (
    <div>
      <Jumbotron>
      <NameTag> {charName} </NameTag>
       <p> Gender: {charGender}, born in the year {birthYear}  </p>
      </Jumbotron>
    </div>
  )
}

export default People;
