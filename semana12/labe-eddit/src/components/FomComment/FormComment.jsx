import React from 'react';
import { ContentNewComment,Form,InputText,BtnPost } from './styled';

const FormComment = (props) => {
    return ( 
        <ContentNewComment>
            <Form onSubmit={props.submit}>
                <InputText
                    placeholder={'deixe seu comentário..'}
                    name={"text"}
                    value={props.inputValue}
                    onChange={props.inputChange}
                    type="text"
                    required
                    autoFocus
                    />
                <BtnPost>Comentar</BtnPost>
            </Form>
        </ContentNewComment>
     );
}
 
export default FormComment;