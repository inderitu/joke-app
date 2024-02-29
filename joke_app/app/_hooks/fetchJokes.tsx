'use client'

export async function Fetch_Jokes(category: string) {
    let url: string = `https://v2.jokeapi.dev/joke/${category}?amount=3`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
}