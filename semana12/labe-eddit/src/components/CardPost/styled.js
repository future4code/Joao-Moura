import styled from 'styled-components';

export const ContentCardPost = styled.div`
  border: 1px solid #000;
  width: 300px;
  height: 330px;
  margin: 10px;
  box-sizing: border-box;
`;

export const CardHeader = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  background-color: #ddd;
  align-items: center;
  img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    padding-left: 5px;
  }
  p{
    margin: 10px;
  }
`;

export const PostTitle = styled.div`
  width: 100%;
  height: 15%;
  background-color: #333;
  display: flex;
  justify-content:flex-start;
  align-items:center;
  word-wrap:break-word;
  h2 {
    margin: 0;
    color: #fff;
    font-size: 16px;
  }
`;

export const PostText = styled.div`
  width: 100%;
  height: 60%;
  background-color: #d1d;
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
  height: 10%;
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
    font-size: 25px;
    height: 100%;
    color: ${(props)=> props.select === 1 ? "#0F0": "#000"};
    cursor: pointer;
    :hover{
        color: #0F0
    }
`;

export const Down = styled.span`
    font-size: 25px;
    height: 100%;
    color: ${(props)=> props.select === -1 ? "#F00": "#000"};
    cursor: pointer;
    :hover{
        color: #F00
    }
`;

export const Comments = styled.div`
  display: flex;
  width: 45%;
  background-color: #dd8;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  span{
      font-size: 25px;
  }

`;

