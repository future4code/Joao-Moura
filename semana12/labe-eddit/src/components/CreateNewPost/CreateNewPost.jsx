import React, { useState } from 'react';
import { createPost } from '../../request/ApiRequest';
import { BtnPost, ContentNewPost, Form, InputTitle, InputText } from './styled'

const CreateNewPost = () => {
    const [form, setForm] = useState({title:'', text:''})

    const handleForm = (event) => {
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }

    const post = (event) =>{
        event.preventDefault()

        const {title, text} = form

        if(title.trim() !== '' && text.trim() !== ''){
            createPost(form)
            setForm({title:'', text:''})
        }else{
            alert("campos vazios")
        }

    }


    return ( 
        <ContentNewPost>
            <img src={"https://api.adorable.io/avatars/50/abott@adorable.png"} alt="Fulano"/>
            <Form onSubmit={post}>
                <InputTitle 
                    placeholder={'Título'}
                    name={"title"}
                    value={form.title}
                    onChange={handleForm}
                    type="text"
                    required
                />
                <InputText 
                    placeholder={'Postagem'}
                    name={"text"}
                    value={form.text}
                    onChange={handleForm}
                    type="text"
                    required
                />
                <BtnPost>Postar</BtnPost>
            </Form>
        </ContentNewPost> 
    );
}
 
export default CreateNewPost;