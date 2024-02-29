export async function Fetch_Audio(joke: string) {
    const response = await fetch("https://joke-app-backend-lnrz2crrda-uc.a.run.app/get-audio", {
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