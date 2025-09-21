'use client';

import { useCategoryStore } from "../lib/store";
import { useEffect, useState } from "react";
import { getJokes } from "../lib/actions";
import { Joke } from "../lib/definitions";

export default function JokeCard() {
	const category = useCategoryStore((state) => state.activeCategory);
	const [jokes, setJokes] = useState(Array<Joke>);

	useEffect(() => {
		(async () => {
			const { jokes } = await getJokes(category);
			setJokes(jokes);
		})();
	}, [category]);

	return (
		<div>

			{
				jokes.map((joke, index: number) => {
					if (joke.type === 'single') {
						return (
							<div key={index}>
								<p  > {joke.joke} </p>
							</div>
						)
					}
					return (
						<div key={index}>
							<p> Setup: {joke.setup} </p>
							<p> Delivery: {joke.delivery} </p>
						</div>
					)
				})
			}
		</div>
	);
}
