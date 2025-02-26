import { callAPI } from "./modules/api.js";

async function getShows(input) {
    const url = `https://api.tvmaze.com/search/shows?q=${input}`;
    return await callAPI(url, "tv shows");
}
async function shows(input) {
    const showArray = await getShows(input);
    console.log(showArray);

}
