import React, { useState } from "react";
import "./App.css";
import { Post } from "./components/Post";

const App = () => {
  const [postsList, setPostsList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [ msgAlert, setAlert] = useState(false);

  const onChangeInput = event => {
    setInputValue(event.target.value);
  };

  const addPost = (event) => {
    event.preventDefault()
    // Adiciona um post à lista
    const newPost = {
      id: Date.now(),
      text: inputValue,
      liked: false
    };

    if(newPost.text.trim() !== ''){
      const newPostsList = [newPost, ...postsList];
      setPostsList(newPostsList);
      setAlert(false)
    } else {
      setAlert(true)
    }

    setInputValue('')
  };

  const deletePost = postId => {
    // Apaga um post da lista
    const newPostsList = postsList.filter(post => {
      return postId !== post.id;
    });

    setPostsList(newPostsList);
  };

  const toggleLike = postId => {
    // Altera o status de curtida de um post da lista
    const newPostsList = postsList.map(post => {
      if (postId === post.id) {
        const novoPost = {
          ...post,
          liked: !post.liked
        };
        return novoPost;
      } else {
        return post;
      }
    });

    setPostsList(newPostsList);
  };

  return (
    <div className="App">
      <form onSubmit={addPost}>
        <input
          type="text"
          onChange={onChangeInput}
          value={inputValue}
          placeholder={"Novo post"}
          required
        />
        <button>Adicionar</button>
        {msgAlert && <p>campo vazio!</p>}
      </form>
      <br />
      {postsList.length === 0 ? <p>Nenhum post</p>: <p>Quantidade de posts: {postsList.length}</p>}
      {postsList.map(post => {
        return (
          <Post
            key={post.id}
            post={post}
            toggleLike={toggleLike}
            deletePost={deletePost}
          />
        );
      })}
    </div>
  );
};

export default App;
