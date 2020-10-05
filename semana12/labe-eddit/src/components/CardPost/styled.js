import styled from 'styled-components';

export const ContentCardPost = styled.div`
  border: 1px solid #f5f5f5;
  box-shadow: 0px 1px 7px 0px #a2a2a2;
  width: 90vw;
  max-width: 550px;
  margin-top: 20px;
  box-sizing: border-box;
`;

export const CardHeader = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  background-color: #642CA9;
  color: #FFF;
  align-items: center;
  img{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    padding-left: 5px;
  }
  p{
    margin: 10px;
  }
`;

export const PostTitle = styled.div`
  width: 100%;
  padding: 5px 0;
  background-color: #FF74D4;
  border-bottom: 1px solid #fff;
  display: flex;
  justify-content:flex-start;
  align-items:center;
  word-wrap:wrap;
  h2 {
    margin: 0 3px;
    color: #fff;
    font-size: 16px;
  }
`;

export const PostText = styled.div`
  width: 100%;
  padding: 10px 0;
  background-color: #FF74D4;
  color: #fff;
  font-size: 18px;
  text-align:center;
  display: flex;
  justify-content:center;
  align-items:center;
  word-wrap:wrap;
 `

export const CardFooter = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  background-color: #642CA9;
  color: #fff;
  justify-content: space-between;
`;

export const Status = styled.div`
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: space-evenly;

  p{
      font-size: 25px;
  }
`;

export const Up = styled.span`
    font-size: 25px;
    height: 100%;
    color: ${(props)=> props.select === 1 ? "#0F0": "#FFF"};
    cursor: pointer;
    :hover{
        color: #0F0
    }
`;

export const Down = styled.span`
    font-size: 25px;
    height: 100%;
    color: ${(props)=> props.select === -1 ? "#F00": "#FFF"};
    cursor: pointer;
    :hover{
        color: #F00
    }
`;

export const Comments = styled.div`
  display: flex;
  width: 45%;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  span{
      font-size: 25px;
  }

`;

