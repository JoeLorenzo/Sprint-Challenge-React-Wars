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


  return (
    <div>
      <Jumbotron>
      <NameTag> {props.character.name} </NameTag>
       <p> Gender: {props.character.gender}, born in the year {props.character.birth_year}  </p>
      </Jumbotron>
    </div>
  )
}

export default People;
