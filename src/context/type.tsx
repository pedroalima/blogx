import { Post } from "../routes/Home/type";

export type BlogContextPosts = {
    posts: Post[];
    pushPost: (body: object) => void;
}