// import React, { useReducer } from 'react';
import jsonServer from '../api/jsonServer'
import createDataContext from './createDataContext';
// const BlogContext = React.createContext();
const blogReducer=(state,action) => {
    switch (action.type){
        case 'delete':
            return state.filter((blogPost)=> blogPost.id!==action.payload );
        case 'add':
            return [...state,{
                id: Math.floor(Math.random()*9999),
                title: action.payload.title,
                content: action.payload.content
            }];
        case 'edit':
            return state.map((blogPost)=>{
                return blogPost.id === action.payload.id ? action.payload:blogPost;
            })
        case 'get_blog_posts':
            return action.payload;
        default:
            return state;

    }
};
// export const BlogProvider = ({ children }) => {
//     const [blogPosts, dispatch] = useReducer(blogReducer##reducerfunction,[]##initial state);
const getBlogPosts = dispatch =>{
    return async () =>{
        const response = await jsonServer.get('/blogposts')
        dispatch({type: 'get_blog_posts',payload:response.data});
    }
};



const addBlogPost=dispatch=>{
        // return ((title,content,callback)=>{
        //     dispatch({type: 'add', payload:{title,content}});
        //     callback();
        // });
        return async(title,content,callback)=>{
            await jsonServer.post('/blogposts',{title:title,content:content})
            if (callback){
                callback();}
        }
};
const deleteBlogPost=dispatch=>{
    return async(id)=>{
        
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({type: 'delete',payload: id});
    };
};
const editBlogPost=dispatch=>{
    return async(id,title,content,callback)=>{
        await jsonServer.put(`/blogposts/${id}`,{title:title,content:content})


        dispatch({type: 'edit',payload:{id:id,title:title,content:content}});
        callback();
    }
};
    

//     return (
//         <BlogContext.Provider value={{ data: blogPosts ,addBlogPost}}>
//             {children}
//         </BlogContext.Provider>
//     );
// };

// export default BlogContext;

export const {Context,Provider}=createDataContext(
    blogReducer,
    {addBlogPost, deleteBlogPost, editBlogPost,getBlogPosts},
    []);


