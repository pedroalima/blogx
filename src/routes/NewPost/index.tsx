import { FormEvent, ChangeEvent, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Label } from "../../components/Label";
import { useBlog } from "../../hook/useBlog";
import { TitleWrapper } from "../Home/style";
import { FormWrapper, NewPostSection, PostWrapper, TextArea } from "./style";

function NewPost() {
	const { pushPost } = useBlog();
	const [title, setTitle] = useState<string>("");
	const [body, setBody] = useState<string>("");

	const bodyPost = {
		body: { 
			post: { title, body, user: 1 }
		}
	};

	const addNewPost = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		pushPost(bodyPost);
	};

	console.log(title);
	console.log(body);

	return (
		<NewPostSection>
			<PostWrapper>
				<TitleWrapper>Create your post</TitleWrapper>
				<FormWrapper onSubmit={addNewPost}>
					<Label htmlFor="title" Text="Title: " />
					<Input 
						Type="text" 
						id="title" 
						placeholder="Insert the title"
						value={title} 
						onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
					/>
					<Label htmlFor="content" Text="Content: " />
					<TextArea 
						placeholder="Insert the content"
						id="content"
						onChange={(e) => setBody(e.target.value)}
					/>
					<Button Type="submit" Text="Send" />
				</FormWrapper>
			</PostWrapper>
		</NewPostSection>
	);
}

export default NewPost;