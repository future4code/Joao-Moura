import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {createPost, getPost} from '../../request/ApiRequest'
import CardPost from '../../components/CardPost/CardPost';
import CreateNewPost from '../../components/CreateNewPost/CreateNewPost';
import { goToLoginPage, goToLogout } from '../../routes/Coordinator';
import { postVote } from '../../utils/vote';
import {FeedContent, BtnLogout} from './styled'

const FeedPage = () => {
    const [posts, setPosts] = useState([])
    const [form, setForm] = useState({text:'', title:''})
    const history = useHistory()
    
    useEffect(()=>{
        const token = localStorage.getItem("token")
        token? getPost(setPosts)  : goToLoginPage(history)
    },[history])

    
    const handleForm = (event) => {
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }

    const post = (event) =>{
        event.preventDefault()

        if(form.text.trim() !== '' && form.title.trim() !== ''){
            createPost(form, setPosts)
            setForm({text:'', title:''})
        }else{
            alert("campos vazios")
        }
    }


    return ( 
        <FeedContent>
            <BtnLogout onClick={()=>goToLogout(history)}>Logout</BtnLogout>
            <CreateNewPost 
                submit={post}
                textValue={form.text}
                onChangeText={handleForm}
                titleValue={form.title}
                onChangeTitle={handleForm}
            />
            <section>
                {posts.sort((a,b)=> b.createdAt- a.createdAt).map((post, index)=>{
                    return (
                        index < 50 && 
                        <CardPost 
                            key={post.id} 
                            data={post}
                            clickUp={()=>postVote("up", post.id, setPosts)}
                            clickDown={()=>postVote("down", post.id, setPosts)}
                        />
                    )
                })}
            </section>
        </FeedContent>
    );
}
 
export default FeedPage;
