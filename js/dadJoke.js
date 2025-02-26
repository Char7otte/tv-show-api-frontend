import { callAPI } from "./modules/api.js";

async function getDadJoke() {
    const url = "https://icanhazdadjoke.com";
    const config = {
        headers: {
            Accept: "application/json",
            "User-Agent": "For learning APIs (https://github.com/Char7otte/tv-show-api-frontend)",
        },
    };

    return await callAPI(url, "dad joke", config);
}
function setDadJoke(joke) {
    const jokeText = document.querySelector("#dad-joke");
    jokeText.style.visibility = "visible";
    jokeText.innerText = joke;
}

async function dadJoke() {
    const joke = await getDadJoke();
    if (!joke.joke) return;

    setDadJoke(joke.joke);
}
dadJoke();
