import { Link } from "react-router-dom";
import { useBlog } from "../../hook/useBlog";
import { ButtonWrapper, DescriptionWrapper, HomeWrapper, TitleWrapper } from "./style";
import { Post } from "./type";
import { ButtonMUI } from "../../components/Button";

function Home() {
	const { posts, deletePost, updatePost } = useBlog();

	const updateBody = {
		id: 2,
		title: "teste",
		body: "teste"
	};

	return (
		<section>
			{posts.length === 0 ? (
				<h2>Loading...</h2>
			) : posts.map((post: Post) => (
				<HomeWrapper key={post.id}>
					<TitleWrapper>{post.title}</TitleWrapper>
					<DescriptionWrapper>{post.body}</DescriptionWrapper>
					<ButtonWrapper>
						<Link to={`/post/${post.id}`}>
							<ButtonMUI Text="Reade more" />
						</Link>
						<ButtonMUI Text="Update" onClick={() => updatePost(post.id, updateBody)}/>
						<ButtonMUI Text="Delete" onClick={() => deletePost(post.id)}/>
					</ButtonWrapper>
				</HomeWrapper>
			))}
		</section>
	);
}

export default Home;