import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Label } from "../../components/Label";
import { TitleWrapper } from "../Home/style";
import { FormWrapper, PostWrapper, TextArea } from "./style";


function NewPost() {
	return (
		<section>
			<PostWrapper>
				<TitleWrapper>Create your post</TitleWrapper>
				<FormWrapper>
					<Label htmlFor="title" Text="Title: " />
					<Input Type="text" id="title" placeholder="Insert the title" />
					<Label htmlFor="content" Text="Content: " />
					<TextArea placeholder="Insert the content" id="content" />
					<Button Type="submit" Text="Send" />
				</FormWrapper>
			</PostWrapper>
		</section>
	);
}

export default NewPost;