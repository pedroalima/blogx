import { ButtonMUI } from "../../components/Button";
import { useBlog } from "../../hook/useBlog";
import { ButtonWrapper, DescriptionWrapper, TitleWrapper } from "../Home/style";
import { ArticleWrapper, ContentWrapper } from "./style";

function Post() {
	const { post, updatePost, deletePost } = useBlog();

	const updateBody = {
		id: 2,
		title: "teste",
		body: "teste"
	};
    
	return (
		<>
			{post.length === 0 ? 
				(
					<ArticleWrapper>
						<h2>Loading...</h2>
					</ArticleWrapper>
				) 
				: 
				(
					<ArticleWrapper>
						<ContentWrapper>
							<TitleWrapper>{post[0].title}</TitleWrapper>
							<DescriptionWrapper>{post[0].body}</DescriptionWrapper>
						</ContentWrapper>
						<ButtonWrapper>
							<ButtonMUI Text="Edit" onClick={() => updatePost(post[0].id, updateBody)}/>
							<ButtonMUI Text="Delete" onClick={() => deletePost(post[0].id)}/>
						</ButtonWrapper>
					</ArticleWrapper>
				)
			}
		</>
	);
}

export default Post;