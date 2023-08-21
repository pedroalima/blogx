import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

export const useBlog = () => {
	const context = useContext(BlogContext);

	return context;
};