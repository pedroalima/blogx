import { createContext, ReactNode, useEffect, useState } from "react";
import blogAxios from "../axios/config";
import { BlogContextPosts } from "./type";

export const BlogContext = createContext<BlogContextPosts>({} as BlogContextPosts);

export const BlogProvider = ({ children } : { children: ReactNode}) => {
	const [ posts, setPosts ] = useState([]);

	useEffect(()=> {
		getPosts();
	}, []);

	const getPosts = async () => {
		try {
			const response = await blogAxios.get("/posts");
			const data = response.data;

			setPosts(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<BlogContext.Provider value={{posts}}>
			{children}
		</BlogContext.Provider>
	);
};