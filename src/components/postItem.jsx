import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => { // почему здесь пропсы без {}? Потому что все вместе, без имени/перечисления?
  return (
    <>
      <div className="post">
        <div className="post__content">
          <strong>
            {`${props.number}. ${props.post.title}`}
          </strong>
          <div>{props.post.body}</div>
        </div>
        <div className="post__btns">
          <MyButton onClick={() => props.remove(props.post)}>
            Удалить
          </MyButton>
        </div>
      </div>
    </>
  );
};

export default PostItem;
