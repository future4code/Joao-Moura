import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`
//a palavra "completa" é uma props
const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
  margin: 5px 0 ;
`
const BntExcluir = styled.button`
  border-radius: 50%;
  border: none;
  margin-left: 50px;
  font-size: 10px;
  background: #ccc;
  :hover {
    background: #aaa;
  }
`
const ContaineTarefa = styled.div`
  display: flex;
  justify-content:start;
  align-items: center;
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
      localStorage.setItem("tarefa", JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {

      const atualizarTarefas = localStorage.getItem("tarefa")
      if(atualizarTarefas){
        const x = JSON.parse(atualizarTarefas)
        this.setState({tarefas: x})

      }
      
  }

  //armazena o texto do input no state
  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    if(this.state.inputValue !== ''){
      const novaTarefa = {
            id: Date.now(),
            texto: this.state.inputValue,
            completa: false
      }
      const novaListaDeTarefas = [...this.state.tarefas, novaTarefa]
      this.setState({tarefas: novaListaDeTarefas})
      this.setState({inputValue: ''})  
    } else {
      alert('Campos vazios')
    }
  }


  selectTarefa = (id) => {
    const tarefaSelecionada = this.state.tarefas.map((tarefa)=>{
      if(tarefa.id === id){
        const tarefaRiscada = {...tarefa, completa: !tarefa.completa}
        return tarefaRiscada
      } else {
        return tarefa
      }
    })
    
    this.setState({tarefas: tarefaSelecionada})
  }

  apagarTarefa = (id) => {
    const tarefaApagada = this.state.tarefas.filter((tarefa)=>{
      return tarefa.id !== id
    })
    console.log(tarefaApagada)

    this.setState({tarefas: tarefaApagada})
  } 


  //amazena o tipo de filtro selecionado, no state
  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  render() {

    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>

        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <ContaineTarefa>
                <Tarefa
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}
                >
                  {tarefa.texto}
                </Tarefa>
                <BntExcluir onClick={()=> this.apagarTarefa(tarefa.id)}>X</BntExcluir>
              </ContaineTarefa>
            )
          })}
        </TarefaList>
        
      </div>
    )
  }
}

export default App
