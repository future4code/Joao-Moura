import React ,{useState, useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import Buttons from '../../components/Buttons/Buttons'
import Header from '../../components/Header/Header'
import Profile from '../../components/Profile/Profile'


import {getProfileToChoose, getMatches, choosePerson} from '../../services/callApi'


const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    marginTop: 20,
    height: 520,
    padding: 20,
    border: 1 
  },

}));



export default function PageMatch(props) {
const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Header switchPages={props.switchPages}/>

    </Card>
  );
}
