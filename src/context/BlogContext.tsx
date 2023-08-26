import { createContext, ReactNode, useEffect, useState } from "react";
import blogAxios from "../axios/config";
import { BlogContextPosts } from "./type";

export const BlogContext = createContext<BlogContextPosts>({} as BlogContextPosts);

export const BlogProvider = ({ children } : { children: ReactNode}) => {
	const [ posts, setPosts ] = useState([]);

	useEffect(()=> {
		getAllPosts();
	}, []);

	const getAllPosts = async () => {
		try {
			const response = await blogAxios.get("/posts");
			const data = response.data;

			setPosts(data);
		} catch (error) {
			console.log(error);
		}
	};

	// const getPost = async (id: number) => {
	// 	try {
	// 		const response = await blogAxios.get(`/posts/${id}`);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	const createPost = async (body: object) => {
		await blogAxios.post("/posts", body);
	};

	const updatePost = async (id: number, body: object) => {
		await blogAxios.put(`/posts/${id}`, body);
	};

	const deletePost = async (id: number) => {
		await blogAxios.delete(`/posts/${id}`);
	};

	return (
		<BlogContext.Provider value={{posts, createPost, deletePost, updatePost}}>
			{children}
		</BlogContext.Provider>
	);
};