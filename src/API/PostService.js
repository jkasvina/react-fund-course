import axios from "axios";

export  default  class  PostService {
    static async getAll(limit = 10, page = 1) {
        try {
            return await axios.get('https://jsonplaceholder.typicode.com/posts');
            // https://jsonplaceholder.typicode.com/posts_limit=10&_page=3
            // _page=3 и _limit=10 - это quiery параметры. страница выдаст третью страницу из десяти элементов - НЕ РАБОТАЕТ

            // `https://jsonplaceholder.typicode.com/posts_limit=${limit}&_page=${page}`

            // return await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
            //     params: {
            //         _limit: limit,
            //         _page: page
            //     }
            // });
        } catch (e) {
            console.log(e)
        }

    }
}