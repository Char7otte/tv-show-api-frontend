async function callAPI(url, error, config) {
    try {
        const res = await axios.get(url, config);
        return res.data;
    } catch (e) {
        console.log(error, e);
    }
}

export { callAPI };
