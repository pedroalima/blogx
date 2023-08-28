import { ChangeEvent, useState } from "react";
import { ButtonMUI } from "../../components/Button";
import { useBlog } from "../../hook/useBlog";
import { ButtonWrapper, DescriptionWrapper, TitleWrapper } from "../Home/style";
import { ArticleWrapper, ContentWrapper } from "./style";
import { Input } from "../../components/Input";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FormWrapper } from "../NewPost/style";

function Post() {
	const { post, updatePost, deletePost } = useBlog();
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [edit, setEdit] = useState(false);
	const navigate = useNavigate();

	const updateBody = {
		id: post[0].id,
		title: title,
		body: body
	};


	const toggleButtonEdit = () => {
		setTitle(post[0].title);
		setBody(post[0].body);
		setEdit(!edit);
	};

	const editPost = () => {
		updatePost(post[0].id, updateBody);
		setEdit(!edit);
	};

	const delPost = () => {
		deletePost(post[0].id);
		navigate("/");
	};
    
	return (
		<>
			{post.length === 0 ? 
				(
					<ArticleWrapper>
						<h2>Loading...</h2>
					</ArticleWrapper>
				) 
				: edit === false ?
					(
						<ArticleWrapper>
							<ContentWrapper>
								<TitleWrapper>{post[0].title}</TitleWrapper>
								<DescriptionWrapper>{post[0].body}</DescriptionWrapper>
							</ContentWrapper>
							<ButtonWrapper>
								<ButtonMUI Text="Edit" onClick={toggleButtonEdit}/>
								<ButtonMUI Text="Delete" onClick={delPost}/>
							</ButtonWrapper>
						</ArticleWrapper>
					)
					:
					(
						<ArticleWrapper>
							<FormWrapper>
								<Input 
									Type="text" 
									placeholder="Insert the title"
									value={title} 
									onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
								/>
								<TextField 
									label="Content"
									multiline
									rows={4}
									value={body}
									placeholder="Insert the content"
									onChange={(e) => setBody(e.target.value)}
								/>
								<ButtonWrapper>
									<ButtonMUI Text="Ok" onClick={editPost}/>
								</ButtonWrapper>
							</FormWrapper>
						</ArticleWrapper>
					)
			}
		</>
	);
}

export default Post;