import React ,{useState, useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import styled from 'styled-components'

import Header from '../../components/Header/Header'
import {getMatches} from '../../services/callApi'
import Profile from '../../components/Profile/Profile';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 370,
    marginTop: 20,
    height: 540,
    // padding: 20,
    border: 1 
  },

}));



export default function PageMatch(props) {
  const classes = useStyles();


  const [listMatch, setListMatch] = useState([])

  useEffect(()=>{
    handleListMatch()
  },[])

  const handleListMatch = () => {
    getMatches(setListMatch)
  }

  return (
    <Card className={classes.root}>
      <Header switchPages={props.switchPages} myPage={props.myPage}/>

      {listMatch.map((profile)=>{
          return(
              <ItemProfile>
                  <img src={profile.photo} alt={profile.photo} />
                  <p>{profile.name}</p>
              </ItemProfile>
          )
      })}

    </Card>
  );
}

const ItemProfile = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    height: 50px;
    margin: 10px;
    padding: 10px;
    :hover {
        background-color: #ddd;
    }

    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
    }


`