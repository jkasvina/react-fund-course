import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([    // деструктуризация [,]
    // зачем здесь useState?? почему не просто массив??
    // потому что мы отслеживаем значение этого массива, он меняется
    { id: 1, title: "JS", body: "Description 3" },
    { id: 2, title: "Java", body: "Description 1" },
    { id: 3, title: "TS", body: "Description 2" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

  const options = [  // здесь value должно быть равно элементам объектов массива posts!
    { value: "title", name: "По названию" },
    { value: "body", name: "По описанию" },
  ];

  const createPost = (newPost) => {
    // изменяем массив posts - передаём ф-ии setPosts новый массив,
    // куда разворачиваем старый массив posts, в который добавим 1 новый пост
    setPosts([...posts, newPost]); // ф-я изменения состояния
    // setPosts([...posts, {...post, id: Date.now()}])
  };

  // эту ф-ю обратного вызова нужно прокинуть на 2 уровня,
  // сначала в пропсы компонента PostList
  // а там (в PostList) в пропсы компонента PostItem
  const removePost = (post) => {
    // получаем пост из дочернего компонента
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (value) => {
      // ф-я sort() не возвращает новый массив, а мутирует исходный массив
      // состояние напрямую менять нельзя, т.к. тогда при отключении сортировки
      // не вернётся исходный массив, поэтому мутируем копию массива
      // localeCompare - сравнение строк, чаще всего используется при сортировках
      setSelectedSort(value);
      setPosts([...posts].sort((a, b) => a[value].localeCompare(b[value])));
  }

  return (
    <div className="App">
      {/*<Counter />*/}
      <ClassCounter />
      <PostForm create={createPost} />
      <hr />
      <div>
          <MyInput
          placeholder="Поиск..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка по..."
          options={options}
        />
      </div>
      {posts.length ? ( // условная отрисовка с помощью тернарного оператора
        <PostList title="Список постов 1" posts={posts} remove={removePost} />
      ) : (
        <h1 className="empty_list">Список постов пуст</h1>
      )}
    </div>
  );
}

export default App;
