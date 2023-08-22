import { Link } from "react-router-dom";
import { useBlog } from "../../hook/useBlog";
import { DescriptionWrapper, HomeWrapper, TitleWrapper } from "./style";
import { Post } from "./type";
import { Button } from "../../components/Button/style";

function Home() {
	const { posts } = useBlog();

	return (
		<section>
			{posts.length === 0 ? (
				<h2>Loading...</h2>
			) : posts.map((post: Post) => (
				<HomeWrapper key={post.id}>
					<TitleWrapper>{post.title}</TitleWrapper>
					<DescriptionWrapper>{post.body}</DescriptionWrapper>
					<Link to={`/post/${post.id}`}>
						<Button>Reade more</Button>
					</Link>
				</HomeWrapper>
			))}
		</section>
	);
}

export default Home;