import React from 'react';
import styled from 'styled-components'

import GradePlayLista from './components/GradePlayListas/GradePlayLista'

class App extends React.Component {
  render(){
    return (
      <ContainerApp>
        <GradePlayLista/>
      </ContainerApp>
    )
  }
}

export default App;

const ContainerApp = styled.div`
background-color: #eee;
width: 100vw;
height: 100vh;
box-sizing:border-box;
`