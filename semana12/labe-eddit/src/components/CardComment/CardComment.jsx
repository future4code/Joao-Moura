import React from 'react';
import { useHistory } from 'react-router-dom';
import { ContentCardComment,CardHeader, CommentText ,CardFooter,Status,Up,Down} from './styled';

const CardComment = (props) => {
    const {id,title,text,username,votesCount,userVoteDirection,createdAt,commentsCount} = props.data
    return ( 
       
            <ContentCardComment>
                <CardHeader>
                    <img src={"https://api.adorable.io/avatars/40/abott@adorable.png"} alt="Fulano"/>
                    <p>{username}</p>
                </CardHeader>
                <CommentText>
                    <p>{text}</p>
                </CommentText>
                <CardFooter>
                    <Status>
                        <Up onClick={props.clickUp}>🠭</Up>
                        <span>{votesCount}</span>
                        <Down onClick={props.clickDown}>🠯</Down>
                    </Status>
                </CardFooter>
            </ContentCardComment>
       
     );
}
 
export default CardComment;