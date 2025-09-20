'use client';

import { Nav } from "./ui/nav/nav";
import { useCategoryStore } from "./lib/store";

export default function Home() {
	const category = useCategoryStore((state) => state.activeCategory);
	/**
	 * todo: 
	 * fetch jokes from https://v2.jokeapi.dev/
	 * implement logic to select active category
	 * implement global state management for active category
	 * look at useContext react hook
	 *
	 * set nav bar for mobile devices
	 * logic for type of jokes: 2 part and 1 part jokes
	 * implement text to speech with either nodejs/python/go/c 
		*/
	return (
		<main className="flex flex-row bg-orange-50 w-screen h-screen">
			<Nav />
			<div className="flex flex-col p-5 w-full">
				<div className="border-solid border-2 mb-2 h-10" > <h1> {category} Jokes </h1> </div>
				<div className="border-solid border-2 mb-2 min-h-3/5" > Jokes container </div>
				<div className="border-solid border-2 h-10"> Refresh button container </div>
			</div>
		</main>);
}

