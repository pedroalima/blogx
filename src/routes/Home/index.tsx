import { useContext } from "react";
import { BlogContext } from "../../context/BlogContext";


function Home() {
	const posts = useContext(BlogContext);
	console.log(posts);

	return (
		<section>Home</section>
	);
}

export default Home;