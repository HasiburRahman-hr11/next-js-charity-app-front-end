
import axios from 'axios';
import { errorNotify, successNotify } from '../../utils/toastify';
import { addNewBlogFailed, addNewBlogStart, addNewBlogSuccess, deleteBlogFailed, deleteBlogStart, deleteBlogSuccess, getAllBlogsFailed, getAllBlogsStart, getAllBlogsSuccess, updateBlogFailed, updateBlogStart, updateBlogSuccess } from './blogsActions';
// Add New Case
export const addNewBlog = async (dispatch, formData, router) => {
    dispatch(addNewBlogStart());
    try {
        const { data } = await axios.post('http://localhost:8000/blogs/add', formData);
        dispatch(addNewBlogSuccess(data));
        successNotify('Blog added successfully');
        router.push(`/dashboard/blogs/edit/${data._id}`);
    } catch (error) {
        console.log(error);
        dispatch(addNewBlogFailed(error));
        errorNotify('Could not add blog')
    }
}

// Get All Blogs
export const getAllBlogs = async (dispatch) => {
    dispatch(getAllBlogsStart())
    try {
        const { data } = await axios.get('http://localhost:8000/blogs');
        dispatch(getAllBlogsSuccess(data))
    } catch (error) {
        console.log(error);
        dispatch(getAllBlogsFailed(error))
    }
}

// Update Blog
export const updateBlog = async (dispatch, id, formData) => {
    dispatch(updateBlogStart());
    try {
        const { data } = await axios.put(`http://localhost:8000/blogs/${id}`, formData);
        dispatch(updateBlogSuccess(data));
        successNotify('Blog updated successfully');
    } catch (error) {
        console.log(error);
        dispatch(updateBlogFailed(error));
        errorNotify('Could not update blog')
    }
}

// Delete Blog
export const deleteBlog = async (dispatch, id) => {
    dispatch(deleteBlogStart());
    try {
        const { data } = await axios.delete(`http://localhost:8000/blogs/${id}`);
        dispatch(deleteBlogSuccess(data));
        successNotify('Blog deleted successfully');
    } catch (error) {
        console.log(error);
        dispatch(deleteBlogFailed(error));
        errorNotify('Could not delete blog')
    }
}