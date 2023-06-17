import axios from "axios";
export const getArticles = async (isConnected) => {
    const res = await axios.get(`http://localhost:3000/articles`);
    return res;
}

export const CreateArticleAPI  = async (article,token) => {
    const res = await axios.post(`http://localhost:3000/articles`,article);
    return res;
}

export const getArticle = async (articleId)=>{
    const res = await axios.get(`http://localhost:3000/articles/${articleId}`);
    return res.data;
}