import { FormEvent, ChangeEvent, useState } from "react";
import { ButtonMUI } from "../../components/Button";
import { Input } from "../../components/Input";
import { useBlog } from "../../hook/useBlog";
import { TitleWrapper } from "../Home/style";
import { FormWrapper, NewPostSection, PostWrapper } from "./style";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NewPost() {
	const { createPost } = useBlog();
	const [title, setTitle] = useState<string>("");
	const [body, setBody] = useState<string>("");
	const navigate = useNavigate();

	const bodyPost = {
		body: {
			post: { title, body, user: 1 }
		}
	};

	const addNewPost = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		createPost(bodyPost);
		navigate("/");
	};

	return (
		<NewPostSection>
			<PostWrapper>
				<TitleWrapper>Create your post</TitleWrapper>
				<FormWrapper onSubmit={addNewPost}>
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
						placeholder="Insert the content"
						onChange={(e) => setBody(e.target.value)}
					/>
					<ButtonMUI Type="submit" Text="Send" />
				</FormWrapper>
			</PostWrapper>
		</NewPostSection>
	);
}

export default NewPost;