import React from "react";
import PostItem from "./PostItem";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";

// здесь мы принимаем пропсы. поскольку мы знаем, что пропс - это объект
// необходимо написать его в {} !!!!!!!
const PostList = ({ posts, title, remove }) => {
  // объектная деструктуризация пропса

  if (!posts.length) {
    // условная отрисовка
    return <h1 className="empty_list">Список постов пуст</h1>;
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem
              remove={remove}
              number={index + 1}
              post={post}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>

      {/*<PostItem post={{ id: 1, title: "JS", body: "Description" }} />
      <PostItem post={{ id: 2, title: "Java", body: "Description" }} />
      <PostItem post={{ id: 3, title: "TS", body: "Description" }} />*/}
    </>
  );
};

export default PostList;
