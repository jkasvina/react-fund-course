import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    // const [firstInput, setFirstInput] = useState("");
    // const [secondInput, setSecondInput] = useState("");

    // в случае, если у нас много инпутов, мы можем не создавать состояние для каждого,
    // а передавать в состояние объект с набором полей
    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        // предотвращаем дефолтное поведение браузера
        // по умолчанию кнопка имеет type="submit"
        // а браузер при таком типе кнопки по умолчанию бует обновлять
        // страницу и отправлять данные на сервер
        // если это не написать, то по кнопке будет обновляться страница браузера
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now(), //дата в милисекундах
            // title: firstInput,
            // body: secondInput
        }

        create(newPost);
        setPost({title: '', body: ''});
        // setFirstInput('');
        // setSecondInput('');
    };

    return (
        <form>
            {/*Управляемый компонент*/}
            <MyInput
                value={post.title}
                onChange={(e) => setPost({...post, title: e.target.value})} // изменяем поле title, остальной объект неизменен
                type="text"
                placeholder="Название поста 1"
            />
            <MyInput
                value={post.body}
                onChange={(e) => setPost({...post, body: e.target.value})} // изменяем поле body, остальной объект неизменен
                type="text"
                placeholder="Тело поста 1"
            />
            {/*<MyInput*/}
            {/*  value={firstInput}*/}
            {/*  onChange={(e) => setFirstInput(e.target.value)} // двухстороннее связывание*/}
            {/*  type="text"*/}
            {/*  placeholder="Название поста"*/}
            {/*/>*/}
            {/*<MyInput*/}
            {/*    value={secondInput}*/}
            {/*    onChange={(e) => setSecondInput(e.target.value)}*/}
            {/*    type="text"*/}
            {/*    placeholder="Описание поста" />*/}
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;
