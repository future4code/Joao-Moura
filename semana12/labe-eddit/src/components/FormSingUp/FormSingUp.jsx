import React from 'react';
import { BtnSubmit, ContentInput, Form } from './styled'

const FormSingUp = (props) => {
    return ( 
        <Form onSubmit={props.submit}>
                <ContentInput>
                    <label>Nome</label>
                    <input
                        name={"username"}
                        value={props.nameValue}
                        onChange={props.change}
                        type="text"
                        required
                    />
                </ContentInput>
                <ContentInput>
                    <label>E-mail</label>
                    <input
                        name={"email"}
                        value={props.emailValue}
                        onChange={props.change}
                        type="email"
                        required
                     />
                </ContentInput>
                <ContentInput>
                    <label>Senha</label>
                    <input
                        name={"password"}
                        value={props.passwordValue}
                        onChange={props.change}
                        type="password"
                        required 
                    />
                </ContentInput>
                <BtnSubmit type="submit">Criar</BtnSubmit>
            </Form>
     );
}
 
export default FormSingUp;