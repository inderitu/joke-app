export async function Fetch_Audio(joke: string) {
    const response = await fetch("http://localhost:8080/get-audio", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ joke: joke }),
    });
    const data = await response.blob();
    return data;
}