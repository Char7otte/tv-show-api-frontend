async function getDadJoke() {
    const config = {
        headers: {
            Accept: "application/json",
            "User-Agent": "For learning APIs",
        },
    };
    try {
        const res = await axios.get("https://icanhazdadjoke.com", config);
        return res.data.joke;
    } catch (e) {
        console.error("Error getting dad joke.", e);
        return null;
    }
}
function setDadJoke(joke) {
    const jokeText = document.querySelector("#dad-joke");
    jokeText.innerText = joke;
}

async function dadJoke() {
    const joke = await getDadJoke();
    if (!joke) return;

    setDadJoke(joke);
}
dadJoke();
