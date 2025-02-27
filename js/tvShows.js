import { callAPI } from "./modules/api.js";
import { createElement } from "./modules/createElement.js";

const showsContainer = document.querySelector("#tv-shows-container");

async function getShows(input) {
    const url = `https://api.tvmaze.com/search/shows?q=${input}`;
    return await callAPI(url, "tv shows");
}

function createCard(info) {
    const showName = info.show.name;

    const cell = createElement("div", showsContainer, ["cell"]);

    //Make the card a link to the show url.
    //Cannot make the following card div an anchor element
    //because then Bulma's card shadow css doesn't work.
    const anchor = createElement("a", cell);
    anchor.href = info.show.url;

    //Create the card container.
    const card = createElement("div", anchor, ["card"]);

    // Create the poster img.
    const imgContainer = createElement("div", card, ["card-image"]);
    const figure = createElement("figure", imgContainer, ["image", "is-2by3"]);
    const img = createElement("img", figure);
    img.alt = showName + " poster";
    try {
        const imgSrc = info.show.image.original;
        img.src = imgSrc;
    } catch {
        //styles.css has set a placeholder background-image to all img elements,
        // so nothing needs to be done here if there is no poster image found.
    }

    //Create the title display
    const header = createElement("header", card, ["card-header"]);
    const title = createElement("p", header, ["card-header-title"]);
    title.innerText = showName;
}

async function shows(input) {
    //Delete previously searched content
    showsContainer.innerHTML = "";

    const showArray = await getShows(input);
    console.log(showArray);

    if (!showArray) {
        console.error("Error reading input.");
        return;
    }

    for (const show of showArray) {
        createCard(show);
    }
}

const searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    shows(e.target[0].value);
});
