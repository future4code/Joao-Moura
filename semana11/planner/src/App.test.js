import React from 'react';
import App from './App';
import { fireEvent, getByText, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import axios from 'axios';
import {BASE_URL} from './constants/BASE_URL'
import userEvent from '@testing-library/user-event';

axios.post = jest.fn().mockResolvedValue()

describe("App", ()=>{
    it("Escreve no input", async ()=>{
        const {getByPlaceholderText} = render(<App/>)
        const input = getByPlaceholderText("tarefa")

        await userEvent.type(input, "Estudar")
        expect(input).toHaveValue("Estudar")
    })

    it("Seleciona dia", () =>{
        const {getByTestId, getByText, getAllByText} = render(<App/>)
        const select = getByTestId("selectDay")

        // userEvent.selectOptions(select, getAllByText("Domingo"))
        userEvent.selectOptions(select, [getByText("Domingo")])
        // expect(screen.getByTestId('val1').selected).toBe(true)
        expect(select.value).toHaveValue("Domingo")
        
        userEvent.selectOptions(select, getByText("Terça-Feira"))
        expect(select).toHaveValue("Terça-Feira")
    })

    it("Envia dados do cadastro de tarefa para a Api", async ()=>{
        axios.post = jest.fn().mockResolvedValue()

        const {getByText, getByPlaceholderText, getByTestId} = render(<App/>)

        const input = getByPlaceholderText("tarefa")
        await userEvent.type(input, "Estudar")
        expect(input).toHaveValue("Estudar")

        const select = getByTestId("selectDay")
         userEvent.selectOptions(select, getByText("Domingo"))
        expect(select).toHaveValue("Domingo")

        const button = getByText("Criar tarefa")
        userEvent.click(button)
        // verifica se a função foi chamada com argumentos específicos
        await expect(axios.post).toHaveBeenCalledWith(`${BASE_URL}`, {text: "Estudar", day:"Domingo"})

    })
})