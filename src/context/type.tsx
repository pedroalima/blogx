import { Post } from "../routes/Home/type";

export type BlogContextPosts = {
    posts: Post[];
    createPost: (body: object) => void;
    deletePost: (id: number) => void;
    updatePost: (id: number, body: object) => void;
    getPost: (id: number) => void;
    post: Post[];
}