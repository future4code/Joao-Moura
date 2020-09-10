import React from 'react';
import styled from 'styled-components'


export default function Profile(props) {

  return (
        <PhotoContainer background={props.photo}>
        <img src={props.photo} alt={props.name}/>

        <InfoContainer>
          <h2>{props.name}, {props.age}</h2>
          <p>{props.bio}</p>
        </InfoContainer>
      </PhotoContainer>
  );
}


const PhotoContainer = styled.div `
   width: 98%;
   position: relative;
   /* background-image: ${props=> props.background}; */

   img {
     width: 100%;
     max-height: 350px;
   }
`

const InfoContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 15px;
  color: #fff;

  h2{
    margin: 5px;
  }

  p {
    margin: 5px;
  }
`