import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {

  const [posts, setPosts] = useState([      // деструктуризация [,]
    // зачем здесь useState?? почему не просто массив??
    { id: 1, title: "JS", body: "Description" },
    { id: 2, title: "Java", body: "Description" },
    { id: 3, title: "TS", body: "Description" },
  ]);

  const createPost = (newPost) => {
      // изменяем массив posts - передаём ф-ии setPosts новый массив,
      // куда разворачиваем старый массив posts, в который добавим 1 новый пост
      setPosts([...posts, newPost]);       // ф-я изменения состояния
      // setPosts([...posts, {...post, id: Date.now()}])
  }

  // эту ф-ю обратного вызова нужно прокинуть на 2 уровня,
  // сначала в пропсы компонента PostList
  // а там (в PostList) в пропсы компонента PostItem
  const removePost = (post) => {
    // получаем пост из дочернего компонента
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      {/*<Counter />*/}
      {/*<ClassCounter />*/}
      <PostForm create={createPost} />
      <PostList title="Список постов 1" posts={posts} remove={removePost}/>
    </div>
  );
}

export default App;
