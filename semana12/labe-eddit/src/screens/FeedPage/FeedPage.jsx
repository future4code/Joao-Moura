import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {getPost} from '../../request/ApiRequest'
import CardPost from '../../components/CardPost.jsx/CardPost';
import CreateNewPost from '../../components/CreateNewPost/CreateNewPost';
import { goToCommentsPage, goToLoginPage, goToLogout } from '../../routes/Coordinator';

const FeedPage = () => {
    const [posts, setPosts] = useState([])
    const [form, setForm] = useState({title:'', text:''})
    const history = useHistory()
    
    useEffect(()=>{
        const token = localStorage.getItem("token")
        token?  getPost(setPosts) : goToLoginPage(history)
    },[setPosts,history])
    

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
        <div>
            <button onClick={()=>goToLogout(history)}>Logout</button>
            <CreateNewPost 
                submit={post}
                textValue={form.text}
                onChangeText={handleForm}
                titleValue={form.title}
                onChangeTitle={handleForm}
            />
            <section>
                {posts.map((post, index)=>{
                    return index > 105 && <CardPost key={post.id} data={post}/>
                })}
            </section>
        </div>
    );
}
 
export default FeedPage;
