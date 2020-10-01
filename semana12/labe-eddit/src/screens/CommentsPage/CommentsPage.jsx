import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import CardComment from '../../components/CardComment/CardComment';
import CardPost from '../../components/CardPost.jsx/CardPost';
import { createComment, getPostDetail, putVoteComment } from '../../request/ApiRequest';
import {goToBack,goToLoginPage,goToLogout} from '../../routes/Coordinator'
import { ContentNewComment,Form,InputText,BtnPost } from './styled';

const CommentsPage = () => {
    const [ post, setPost] = useState({})
    const [ comments, setComments] = useState([])
    const [textComment, setTextComment] = useState({text: ''})
    const history = useHistory()
    const path = useParams()

    useEffect(()=>{
        const token = localStorage.getItem("token")
        token? renderComment() : goToLoginPage(history)
    },[history])

    const renderComment =  () => {
        console.log('entrou no render')
        getPostDetail(path.id,setPost,setComments)
    }

    const handleComment = (event) =>{
        setTextComment({text: event.target.value})
    }

    const comment = (event) => {
        event.preventDefault()

        if(textComment.text.trim() !== ''){
            console.log("create-comment")
            createComment(textComment, path.id)
            renderComment()
            setTextComment({text: ''})
        }else{
            alert("campos vazios")
        }

    }

    const commentVote = (option, commentId) =>{
        if(option === "up"){
            putVoteComment({"direction": 1}, path.id, commentId, setPost,setComments)
        }else{
            putVoteComment({"direction": -1}, path.id, commentId,setPost,setComments)
        }

      
    }

    return ( 
        <div>
            <button onClick={()=>goToBack(history)}>voltar</button>
            <CardPost data={post}/>
            <ContentNewComment>
                <Form onSubmit={comment}>
                    <InputText
                        placeholder={'deixe seu comentário..'}
                        name={"text"}
                        value={textComment.text}
                        onChange={handleComment}
                        type="text"
                        required
                     />
                    <BtnPost>Comentar</BtnPost>
                </Form>
            </ContentNewComment>
            {comments.sort((a,b)=> b.createdAt- a.createdAt).map((item)=>{
                return (
                    <CardComment 
                        key={item.id} 
                        data={item}
                        clickUp={()=>commentVote("up", item.id)}
                        clickDown={()=>commentVote("down", item.id)}
                    />
                )
            })}
            
        </div>
    );
}
 
export default CommentsPage;