import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import CardComment from '../../components/CardComment/CardComment';
import CardPost from '../../components/CardPost/CardPost';
import FormComment from '../../components/FomComment/FormComment';
import { createComment, getPostDetail } from '../../request/ApiRequest';
import {goToBack,goToLoginPage} from '../../routes/Coordinator'
import { commentVote } from '../../utils/vote';


const CommentsPage = () => {
    const [ post, setPost] = useState({})
    const [ comments, setComments] = useState([])
    const [textComment, setTextComment] = useState({text: ''})
    const history = useHistory()
    const path = useParams()

    useEffect(()=>{
        const token = localStorage.getItem("token")
        token? getPostDetail(path.id,setPost,setComments) : goToLoginPage(history)
    },[history])


    const handleComment = (event) =>{
        setTextComment({text: event.target.value})
    }

    const comment = (event) => {
        event.preventDefault()

        if(textComment.text.trim() !== ''){
            console.log("create-comment")
            createComment(textComment, path.id, setPost, setComments)
            setTextComment({text: ''})
        }else{
            alert("campos vazios")
        }

    }


    return ( 
        <div>
            <button onClick={()=>goToBack(history)}>voltar</button>
            <CardPost data={post}/>
            <FormComment
                submit={comment}
                inputValue={textComment.text}
                inputChange={handleComment}
            />
            {comments.sort((a,b)=> b.createdAt- a.createdAt).map((item)=>{
                return (
                    <CardComment 
                        key={item.id} 
                        data={item}
                        clickUp={()=>commentVote("up", item.id, path.id, setPost, setComments)}
                        clickDown={()=>commentVote("down", item.id, path.id, setPost, setComments)}
                    />
                )
            })}
            
        </div>
    );
}
 
export default CommentsPage;