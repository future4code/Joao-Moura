import React from 'react';
import{ BtnSubmit, ContentInput, Form} from './styled'

const FormLogin = (props) => {
    return ( 
        <Form onSubmit={props.submit}>
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
            <BtnSubmit type="submit">login</BtnSubmit>
        </Form>
     );
}
 
export default FormLogin;