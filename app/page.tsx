import { Nav } from "./ui/nav/nav";

export default function Home() {
	return (
		<main className="flex flex-row bg-orange-50 w-screen h-screen">
			<Nav />
			<div className="bg-black w-8/10"> Joke container  </div>
		</main>);
}

