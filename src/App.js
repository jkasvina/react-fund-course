import React, { useEffect, useMemo, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";
import { getPageCount, getPagesArray } from "./utils/getPageCount";
import {useFetching} from "./components/hooks/useFetching";

function App() {
  const [posts, setPosts] = useState([
    // деструктуризация [,]
    // зачем здесь useState?? почему не просто массив??
    // потому что мы отслеживаем значение этого массива, он меняется
    // { id: 1, title: "JS", body: "Description 3" },
    // { id: 2, title: "Java", body: "Description 1" },
    // { id: 3, title: "TS", body: "Description 2" },
  ]);

  // принимает алгоритм сортировки и поисковую строку
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, isPostsLoading, postError] = useFetching( async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);

    // const TotalCount = response.headers["x-total-count"];
    //
    // if (totalPages !== TotalCount) {
    //   setTotalPages(getPageCount(TotalCount, limit));
    // }

  })

  let pagesArray = getPagesArray(totalPages);

  const options = [
    // здесь value должно быть равно элементам объектов массива posts!
    { value: "title", name: "По названию" },
    { value: "body", name: "По описанию" },
  ];

  const createPost = (newPost) => {
    // изменяем массив posts - передаём ф-ии setPosts новый массив,
    // куда разворачиваем старый массив posts, в который добавим 1 новый пост
    setPosts([...posts, newPost]); // ф-я изменения состояния
    setModal(false);
    // setPosts([...posts, {...post, id: Date.now()}])
  };

  // эту ф-ю обратного вызова нужно прокинуть на 2 уровня,
  // сначала в пропсы компонента PostList
  // а там (в PostList) в пропсы компонента PostItem
  const removePost = (post) => {
    // получаем пост из дочернего компонента
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  // const sortPosts = (value) => {
  //   // ф-я sort() не возвращает новый массив, а мутирует исходный массив
  //   // состояние напрямую менять нельзя, т.к. тогда при отключении сортировки
  //   // не вернётся исходный массив, поэтому мутируем копию массива
  //   // localeCompare - сравнение строк, чаще всего используется при сортировках
  //   // setSelectedSort(value);
  //   // setPosts([...posts].sort((a, b) => a[value].localeCompare(b[value])));
  // };

  // Ф-я в useMemo отрабатывает только тогда,
  // когда меняется список постов,
  // либо выбранное значение сортировки.
  // `Такое поведение называется мемоизация.`
  const getSortedPosts = useMemo(() => {
    console.log("Отработала getSortedPosts");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  // поиск по значению инпута
  const sortedAndSearchedPosts = useMemo(() => {
    return getSortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, getSortedPosts]);

  // как загрузить посты не по кнопке, а при запуске приложения?
  // Жизненный цикл компонента:
  // Монтирование (mount) -> Обновление (update) -> Размонтирование (unmount)
  useEffect(() => {
    fetchPosts();
  }, []); // page
  // при обновлении страницы данные пропадают, хорошо бы, чтобы лоадер умел это отслеживать

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      {/*<Counter />*/}
      {/*<ClassCounter />*/}
      {/*<MyButton onClick={fetchPosts}>GET POSTS</MyButton>*/}

      <MyButton onClick={() => setModal(true)} style={{ marginTop: "4px" }}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      {/*<hr />*/}
      <PostFilter filter={filter} setFilter={setFilter} options={options} />

      {/*{sortedAndSearchedPosts.length ? ( // условная отрисовка с помощью тернарного оператора*/}
      {isPostsLoading ? (
        <div className="loader-box">
          {/*<h1>Идёт загрузка...</h1>*/}
          <Loader />
        </div>
      ) : (
        <PostList
          title="Список постов"
          posts={sortedAndSearchedPosts}
          remove={removePost}
        />
      )}
      {/*<div className="span-box">*/}
      {/*  {pagesArray.map((p) => (*/}
      {/*    <span*/}
      {/*      onClick={changePage(p)}*/}
      {/*      key={p}*/}
      {/*      className={page === p ? "page-current" : "span-page"}*/}
      {/*    >*/}
      {/*      {p}*/}
      {/*    </span>*/}
      {/*  ))}*/}
      {/*</div>*/}
    </div>
  );
}

export default App;
