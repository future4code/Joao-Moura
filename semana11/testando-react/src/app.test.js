import App from './App';
import React from 'react';
import { fireEvent, getAllByPlaceholderText, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

//==================== FUNÇÕES DE APOIO =======================
const creatPost = (getByPlaceholderText, getByText, post) => {
   
    const input = getByPlaceholderText(/Novo post/i)
    const buttonSubmit = getByText(/Adicionar/i)
    fireEvent.change(input, {target: {value: post}})
    fireEvent.click(buttonSubmit)
}


//======================= TESTE 1 ================================
it("dever retorna o post digita pelo usuario", ()=>{
    const { getByPlaceholderText, getByText } = render(<App/>)
//execução
    creatPost(getByPlaceholderText, getByText, "Bom dia")
//verificação
    expect(getByText(/Bom dia/i)).toHaveTextContent(/Bom dia/i)
})


//========================= TESTE 2 =============================
it("quando clicar no botão de 'curti/descurti' ele deve alterar seu texto", ()=>{
    const { getByPlaceholderText, getByText, getByTestId } = render(<App/>)
    creatPost(getByPlaceholderText, getByText, "Bom dia")

    const btnLike = getByTestId(/like-button/i)

    fireEvent.click(btnLike)
    expect(btnLike).toHaveTextContent(/Descurtir/i)

    fireEvent.click(btnLike)
    expect(btnLike).toHaveTextContent(/Curtir/i)
})


//========================= TESTE 3 =============================
it("quando clicar no botão 'Apagar' o post deve ser removido", ()=>{
    const { getByPlaceholderText, getByText, queryByText } = render(<App/>)
    creatPost(getByPlaceholderText, getByText, "Bom dia")

    const btnDelete = getByText(/Apagar/i)
    expect(queryByText(/Apagar/i)).not.toEqual(null)

    fireEvent.click(btnDelete)
    expect(queryByText(/Apagar/i)).toEqual(null)

})



//========================= TESTE 4 =============================
it("quando criar o post o texto do input deve ser apagado",()=>{
    const { getByPlaceholderText, getByText } = render(<App/>)
    creatPost(getByPlaceholderText, getByText, "Bom dia")

    const input = getByPlaceholderText(/Novo post/i)
    expect(input.value).toEqual("")
})


//========================= TESTE 5 =============================
it("Se existir post exiba 'Nenhum post' caso contrario não mostre a mensagem",()=>{
    const { getByPlaceholderText, getByText } = render(<App/>)
    
    const post = getByPlaceholderText(/Novo post/i)

    creatPost(getByPlaceholderText, getByText, "Bom dia")

    expect(input.value).toEqual("")
})
