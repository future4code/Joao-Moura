import React from 'react';
import App from './App';
import { render, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import axios from 'axios';
import {BASE_URL} from './constants/BASE_URL'
import userEvent from '@testing-library/user-event';

axios.post = jest.fn().mockResolvedValue()
axios.get = jest.fn().mockResolvedValue({
    data: []
})


const createTask = async (getByPlaceholderText, getByTestId, getByText) => {
    axios.post = jest.fn().mockResolvedValue()
    
    const input = getByPlaceholderText("tarefa")
    await wait(()=>userEvent.type(input, "Estudar"))
    expect(input).toHaveValue("Estudar")

    const select = getByTestId("selectDay")
    userEvent.selectOptions(select, ["Sexta-Feira"])
    expect(getByTestId('6').selected).toBe(true)

    const button = getByText("Criar tarefa")
    userEvent.click(button)

    await wait()
}


describe("App", ()=>{
    it("Escreve no input", async ()=>{
        const {getByPlaceholderText} = render(<App/>)
        const input = getByPlaceholderText("tarefa")

        await wait(()=>userEvent.type(input, "Estudar"))
        expect(input).toHaveValue("Estudar")
        await wait()
    })

    it("Seleciona dia", async() =>{
        const {getByTestId} = render(<App/>)
       

        const select = getByTestId("selectDay")
        
        expect(getByTestId('0').selected).toBe(true)

        userEvent.selectOptions(select, ["Domingo"])
        expect(getByTestId('1').selected).toBe(true)

        userEvent.selectOptions(select, ["Sexta-Feira"])
        expect(getByTestId('6').selected).toBe(true)
        await wait()

    })

    it("Envia dados do cadastro de tarefa para a Api", async ()=>{
        axios.post = jest.fn().mockResolvedValue()

        const {getByText, getByPlaceholderText, getByTestId} = render(<App/>)
      

        const input = getByPlaceholderText("tarefa")
        await wait(()=> userEvent.type(input, "Estudar"))
        expect(input).toHaveValue("Estudar")

        const select = getByTestId("selectDay")
        userEvent.selectOptions(select, ["Sexta-Feira"])
        expect(getByTestId('6').selected).toBe(true)

        const button = getByText("Criar tarefa")
        userEvent.click(button)

        await expect(axios.post).toHaveBeenCalledWith(`${BASE_URL}`, {text: "Estudar", day:"Sexta-Feira"})
        await wait()
    })

    it('Limpa o input somente quando envia os dados da tarefa', async()=>{
        const { getByPlaceholderText, getByText, getByTestId } = render(<App/>)
       

        await createTask(getByPlaceholderText, getByTestId, getByText) 

        const input = getByPlaceholderText("tarefa")
        expect(input.value).toEqual("")

        await createTask(getByPlaceholderText, getByTestId, getByText) 
        expect(input.value).toEqual("")
        await wait()
    })

    it('Adiciona tarefa no dia da semana indicado na tela', async()=>{
        axios.get = jest.fn().mockResolvedValue({
            data: [
                {id: 1, text:"dormi", day:"Sábado"},
                {id: 2, text:"estudar", day:"Sexta-Feira"},
                {id: 3, text:"joga bola", day:"Quarta-Feira"},
                {id: 4, text:"lava roupa", day:"Sábado"},
            ]
        })

        const { findAllByTestId} = render(<App/>)
      
        await wait(()=> expect(axios.get).toHaveBeenCalledTimes(2))

        const day = await findAllByTestId("Sábado")
        expect(day).toHaveLength(2)
        expect(day[1]).toHaveTextContent("lava roupa")
       
    })

   
})