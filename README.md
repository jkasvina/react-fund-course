# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Нахуя он нужен-то вообще, это React
- Для создания пользовательских интерфейсов. Не только веб-, но и, например, мобильных.
- React позволяет сосредоточиться на логике по работе с данными, 
а за визуализацию и обновление страницы он отвечает сам.
- Facebook - отличный пример большого приложения, использующего React.

### Single page application
- подход при котором обновляются только изменяемые компоненты, 
а не страница целиком. Это увеличивает скорость загрузки при работе с приложением, 
но уменьшает скорость первоначальной загрузки.

### Знать Array.map
> {posts.map((post, index) =>
>
>    `<PostItem number={index+1} key={post.id} post={post} />`
>
> )}
  
- При создании списков map из массивов объектов (в д.с. строк поста), необходимо указывать ключ. 
Это уникальное обозначение каждого элемента списка.  
- Ключ должен быть СТАТИЧНЫМ и уникальным, поэтому не рекомендуется использовать индекс элемента массива
(он не статичен, а может меняться, если удалять/добавлять строки). 
- Ключи помогают алгоритмам React эффективно делать рендеринг и перерисовывать не весь список,
а только те элементы, которые были изменены.

### Создание проекта
npx & npm - разница: NPX будет выполнять бинарные файлы из пакета Nodejs, как установленные, так и нет.
npx является одним из пакетов npm.

Работает только с 14 версии node.
Обновила node, скачав файл .msi с официального сайта .

В пустом проекте webstorm:
> npx create-react-app .
>
> npm start

### Компоненты
- Реакт работает по принципу компонентного подхода. 
Есть корневой компонент(<App/>), а есть компоненты, которые вкладываются в него и друг в друга.
Компоненты можно переиспользовать.

- Каждый компонент обладает каким-то состоянием. 
Без состояния react не поймёт, что компонент нужно слушать.

### ХУКИ:
- ф-ии, которые предоставляет React. Всегда начинаются со слова use.
Хуки можно использовать либо в функциональных компонентах, либо в собственных хуках.
На основании стандартных хуков можно создавать свои собственные хуки с различным функционалом.

- ХУКИ МОЖНО ИСПОЛЬЗОВАТЬ ТОЛЬКО НА ВЕРХНЕМ УРОВНЕ ВЛОЖЕННОСТИ. 
Хуки нельзя вкладывать в функции, условия, циклы и тд.

`.useState()`  -  управление состоянием компонента. Компонент, с которыми работает, называется УПРАВЛЯЕМЫМ.

`.useEffect()` - нужно изучить

`.useRef()`

`.useMemo()`

`.useCallback()`

`.useContext()`

### `.useRef()`

- С помощью этого хука можно получить доступ к дом-элементу, а уже из него достать value.
Манипулировать дом-деревом напрямую в реакт не рекомендуется, но бывают ситуации, когда это необходимо.
Компонент, сделанный с помощью useRef и forwaedRef (ф-я, 
необходимая для отслеживания компонента в этом случае) называется 
НЕуправляемый/Неконтроллируемый компонент.
  
  `const secindInputRef = useRef();`
  // `secindInput.current` - это DOM-элемент
  `console.log(secindInputRef.current.value);`

`event.target` - DOM элемент
`event.target.value` - значение в элементе

### `useMemo(callback, deps)`

- производит вычисления (в д.с. сортирует массив), запоминает результат вычислений и кэширует их. 
Она не пересчитывает результат на каждую отрисовку компонента, она достаёт отрисованный массив из кэша.
Но каждый раз, когда какая-то из зависимостей `deps` изменилась, 
то ф-я снова пересчитывает и кэширует результат. Если массив зависимостей `deps` пустой,
то ф-я отработает единожды, запомнит рез-тат и больше вызвана не будет. 
`Такое поведение называется мемоизация.`

- callback должен возвращать результат каких-то вычислений. 
Например, массив или результат математических операций.

> useMemo( () => {
>   return [...posts].sort(...)
>}, [selectedSort, posts])

### Создание компонента
Компоненты всегда пишутся с большой буквы.

В компонентах с форматом .js (.jsx - явное указание) мы пишем HTML разметку. Этот синтаксис называется JSX!!!

ДЕКОМПОЗИЦИЯ - разбиение файла на сущности (компоненты)

Функциональный компонент - это ф-я, которая всегда должна возвращать `.jsx` файл.
`rsc + Tab` - создаст компонент с именем файла.

Также компоненты можно создавать с помощью классов.
Классовые компоненты - это устаревший подход!!!!!

`.bind()` - функция, устанавливающая значение this для другой ф-ии

`div.post__btns + Tab`  -  превратить в `<div className="post__btns" .../>`

В React-компоненте не может быть больше 1 дом элемента, элементы объединаются 1им общим html тегом.

`<>` 

`...`

`</> ` 

- React фрагмент. позволяет объединить несколько Dom-эелементов в React-компонент.

Инлайн (записанные напрямую в теге) стили пишем не через дефис, а в camel case:
`<h1 style={{textAlign: 'center'}}>  Список постов  </h1>`

###  ПРОПСЫ
- это входные данные компонента (атрибуты тега компонента! и параметры функции функционального компонента).
Обмен пропсами идёт всегда сверху вниз - от родителя к дочернему компоненту.
Передача пропсов снизу вверх невозможна!

App передаёт дочернему PostForm данные. 
- Чтобы вернуть данные из PostForm родителю App, мы можем из App для PostForm передать ф-ю callback.
В д.с. ф-я callback будет ожидать на вход post и внутри себя 
полученные через аргументы посты будет добавлять в массив.
Затем нужно вызвать эту ф-я в дочернем компоненте, чтобы собранный пост попадал в массив.

### Создание анимаций
> npm install react-transition-group --save

react transition group в документации есть примеры анимаций

react-motion - библиотека анимаций 

### кастомные хуки пропустила 

### Работа с сервером
https://jsonplaceholder.typicode.com

> npm i axios

### Жизненный цикл компонента:
 - Монтирование (mount) 
 - Обновление (update) 
 - Размонтирование (unmount)
  
  Как загрузить посты не по кнопке, а при запуске приложения?
  
  В этом случае нас интересует этап монтирования. Он нужен при подгрузке данных, 
  прослушивании события, отправках запросов на сервер.
  
  .useEffect(callback, deps) нужен чтобы следить за стадиями жизненного цикла.