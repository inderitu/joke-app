/*
 * https://v2.jokeapi.dev/joke/Programming?amount=3
 */

export async function getJokes(category: string) {
	const url = `https://v2.jokeapi.dev/joke/${category}?amount=3`;

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Error: ${response.status}`);
		}
		const result = await response.json();
		return result;
		console.log(result)
	} catch (error) {
		console.error(error);
	}
}
