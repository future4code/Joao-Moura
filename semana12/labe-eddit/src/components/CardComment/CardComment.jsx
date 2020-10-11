import React from 'react';
import { ContentCardComment,CardHeader, CommentText ,CardFooter,Status,Up,Down} from './styled';

const CardComment = (props) => {
    const {id,text,username,votesCount,userVoteDirection,createdAt} = props.data
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
                        <Up onClick={props.clickUp} select={userVoteDirection}>🠭</Up>
                        <span>{votesCount}</span>
                        <Down onClick={props.clickDown} select={userVoteDirection}>🠯</Down>
                    </Status>
                </CardFooter>
            </ContentCardComment>
       
     );
}
 
export default CardComment;