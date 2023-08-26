import { useBlog } from "../../hook/useBlog";

function Post() {
	const { post } = useBlog();

	console.log(post);
	return (
		<div>Post</div>
	);
}

export default Post;