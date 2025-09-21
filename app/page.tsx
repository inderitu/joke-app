import { Nav } from "./ui/nav/nav";
import JokesContainer from "./ui/JokesContainer";
import CategoryTitle from "./ui/CategoryTitle";

export default function Home() {
	/**
	 * todo: 
	 * Add safe mode 
	 * set nav bar for mobile devices
	 * implement text to speech with either nodejs/python/go/c 
		*/
	return (
		<main className="flex flex-row bg-orange-50 w-screen h-screen">
			<Nav />
			<div className="flex flex-col p-5 w-full">
				<CategoryTitle />
				<JokesContainer />
				<div className="border-solid border-2 h-10"> Refresh button container </div>
			</div>
		</main>);
}

