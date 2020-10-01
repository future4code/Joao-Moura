import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {createPost, getPost, putVote} from '../../request/ApiRequest'
import CardPost from '../../components/CardPost.jsx/CardPost';
import CreateNewPost from '../../components/CreateNewPost/CreateNewPost';
import { goToCommentsPage, goToLoginPage, goToLogout } from '../../routes/Coordinator';

const FeedPage = () => {
    const [posts, setPosts] = useState([])
    const [form, setForm] = useState({text:'', title:''})
    const history = useHistory()
    
    useEffect(()=>{
        const token = localStorage.getItem("token")
        token? renderFeed() : goToLoginPage(history)
    },[history])

    const renderFeed = () =>{
        getPost(setPosts) 
    }
    

    const handleForm = (event) => {
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }

    const post = (event) =>{
        event.preventDefault()

        const {text, title} = form

        if(text.trim() !== '' && title.trim() !== ''){
            console.log("create-post")
            createPost(form)
            renderFeed()
            setForm({text:'', title:''})
        }else{
            alert("campos vazios")
        }

    }

    const postVote = (option, id) =>{
        if(option === "up"){
            putVote({"direction": 1}, id)
        }else{
            putVote({"direction": -1}, id)
        }

        renderFeed()
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
                {posts.sort((a,b)=> a.createdAt- b.createdAt).map((post, index)=>{
                    return (
                        index < 60 && 
                        <CardPost 
                            key={post.id} 
                            data={post}
                            clickUp={()=>postVote("up", post.id)}
                            clickDown={()=>postVote("down", post.id)}
                        />
                    )
                })}
            </section>
        </div>
    );
}
 
export default FeedPage;
