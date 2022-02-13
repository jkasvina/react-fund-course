import React from "react";
import PostItem from "./postItem";

// здесь мы принимаем пропсы. поскольку мы знаем, что пропс - это объект
// необходимо написать его в {} !!!!!!!
const PostList = ({posts, title, remove}) => { // объектная деструктуризация пропса
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
          {title}
      </h1>
      {posts.map((post, index) =>
        <PostItem remove={remove} number={index+1} key={post.id} post={post} />
      )}

      {/*<PostItem post={{ id: 1, title: "JS", body: "Description" }} />
      <PostItem post={{ id: 2, title: "Java", body: "Description" }} />
      <PostItem post={{ id: 3, title: "TS", body: "Description" }} />*/}
    </>
  );
};

export default PostList;
