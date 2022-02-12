import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [value, setValue] = useState("ТЕКСТ В ИНПУТЕ"); // деструктуризация [,]

  const [posts, setPosts] = useState([
    // зачем здесь useState?? почему не просто массив??
    { id: 1, title: "JS", body: "Description" },
    { id: 2, title: "Java", body: "Description" },
    { id: 3, title: "TS", body: "Description" },
  ]);

  const [firstInput, setFirstInput] = useState("");
    const [secondInput, setSecondInput] = useState("");

  const addNewPost = (e) => {
    // предотвращаем дефолтное поведение браузера
    // по умолчанию кнопка имеет type="submit"
    // а браузер при таком типе кнопки по умолчанию бует обновлять
    // страницу и отправлять данные на сервер
    // если это не написать, то по кнопке будет обновляться страница браузера
    e.preventDefault();
    const newPost = {
        id: Date.now(), //дата в милисекундах
        title: firstInput,
        body: secondInput
    }
      // изменяем массив posts - передаём ф-ии setPosts новый массив,
      // куда разворачиваем старый массив posts, в который добавим 1 новый пост
    setPosts([...posts, newPost])
  };

  return (
    <div className="App">
      <h1>{value}</h1>
      {/*<input // управляемый компонент - можем изменить значение, изменив его состояние*/}
      {/*  type="text"*/}
      {/*  value={value}*/}
      {/*  onChange={(e) => setValue(e.target.value)} // двухстороннее связывание*/}
      {/*  // event - всегда пишут как е*/}
      {/*/>*/}

      {/*<Counter />*/}
      {/*<ClassCounter />*/}
      <form>
        {/*Управляемый компонент*/}
        <MyInput
          value={firstInput}
          onChange={(e) => setFirstInput(e.target.value)} // двухстороннее связывание
          type="text"
          placeholder="Название поста"
        />
        <MyInput
            value={secondInput}
            onChange={(e) => setSecondInput(e.target.value)}
            type="text"
            placeholder="Описание поста" />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList title="Список постов 1" posts={posts} />
    </div>
  );
}

export default App;
