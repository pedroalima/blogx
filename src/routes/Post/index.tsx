import { useBlog } from "../../hook/useBlog";

function Post() {
	const { post } = useBlog();

	console.log(post);
    
	return (
		<div>
			{/* <h2>{post.title}</h2>
			<p>{post.body}</p> */}
		</div>
	);
}

export default Post;