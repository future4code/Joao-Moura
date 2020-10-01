import styled from 'styled-components';

export const ContentCardComment = styled.div`
  border: 1px solid #000;
  width: 300px;
  height: 150px;
  margin: 10px;
  box-sizing: border-box;
`;

export const CardHeader = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  background-color: #ddd;
  align-items: center;
  img{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    padding-left: 5px;
  }
  p{
    margin: 10px;
  }
`;


export const CommentText = styled.div`
  width: 100%;
  height: 60%;
  background-color: #17d;
  color: #fff;
  font-size: 18px;
  text-align:center;
  display: flex;
  justify-content:center;
  align-items:center;
  word-wrap:break-word;
`;

export const CardFooter = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  background-color: #ddd;
  justify-content: space-between;
`;

export const Status = styled.div`
  display: flex;
  width: 30%;
  background-color: #dda;
  align-items: center;
  justify-content: space-evenly;

  p{
      font-size: 25px;
  }
`;

export const Up = styled.span`
    font-size: 22px;
    height: 100%;
    cursor: pointer;
    :hover{
        color: #0F0
    }
`;

export const Down = styled.span`
    font-size: 22px;
    height: 100%;
    cursor: pointer;
    :hover{
        color: #F00
    }
`;



