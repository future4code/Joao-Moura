import { putVote, putVoteComment } from "../request/ApiRequest"

export const commentVote = (option, commentId, pathId, setPost, setComments) =>{
    if(option === "up"){
        putVoteComment({"direction": 1}, pathId, commentId, setPost,setComments)
    }else{
        putVoteComment({"direction": -1}, pathId, commentId,setPost,setComments)
    }
}

export const postVote = (option, id, setPosts) =>{
    if(option === "up"){
        putVote({"direction": 1}, id, setPosts)
    }else{
        putVote({"direction": -1}, id, setPosts)
    }
}





    
   
 
