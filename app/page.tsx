import { Nav } from "./ui/nav/nav";

export default function Home() {
	return (
		<main className="flex flex-row bg-orange-50 w-screen h-screen">
			<Nav />
			<div className="flex flex-col p-5 w-full">
				<div className="border-solid border-2 mb-2 h-10" > <h1> Programming Jokes </h1> </div>
				<div className="border-solid border-2 mb-2 min-h-3/5" > Jokes container </div>
				<div className="border-solid border-2 h-10"> Refresh button container </div>
			</div>
		</main>);
}

