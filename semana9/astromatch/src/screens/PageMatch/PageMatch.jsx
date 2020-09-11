import React ,{useState, useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import styled from 'styled-components'

import ListMatch from '../../components/ListMach/ListMach' 
import Header from '../../components/Header/Header'
import {clear, getMatches} from '../../services/callApi'
import Profile from '../../components/Profile/Profile';


const useStyles = makeStyles(() => ({
  root: {
    width: 370,
    marginTop: 20,
    height: 540,
    position: 'relative',
    border: 1 
  },

}));



export default function PageMatch(props) {
  const classes = useStyles();

  return (
      <Card className={classes.root}>
        <Header 
          switchPages={props.switchPages} 
          myPage={props.myPage}
        />

        <ListMatch/>
      </Card>
  );
}


