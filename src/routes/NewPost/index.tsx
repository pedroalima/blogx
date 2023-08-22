import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TitleWrapper } from "../Home/style";
import { FormWrapper, PostWrapper, TextArea } from "./style";


function NewPost() {
	return (
		<section>
			<PostWrapper>
				<TitleWrapper>Create your post</TitleWrapper>
				<FormWrapper>
					<Input Type="text" id="title" placeholder="Insert the title" />
					<TextArea placeholder="Insert the content" />
					<Button Type="submit" Text="Send" />
				</FormWrapper>
			</PostWrapper>
		</section>
	);
}

export default NewPost;