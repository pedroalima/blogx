import { Post } from "../routes/Home/type";

export type BlogContextPosts = {
    posts: Post[];
    createPost: (body: object) => void;
    deletePost: (id: number) => void;
}