
console.log("script.js loaded");

const gifContainer = document.querySelector("#gif-container");
const button = document.querySelector("#fetch-gif-btn");
const searchInput = document.querySelector("#search-input");

const apiKey = "YOUR_API_KEY";

button.addEventListener("click", async function () {
    const searchTerm = searchInput.value.trim();
    if (searchTerm === "") {
    alert("Please enter something to search for.");
    return;
    }

    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(searchTerm)}&limit=8`;

    const response = await fetch(endpoint);
    const data = await response.json();

    console.log(data);

    const images = [];

    for (let i = 0; i < data.data.length; i++) {
        images.push(data.data[i].images.original.url);
    }

    console.log(images);

    gifContainer.innerHTML = "";

    for (let i = 0; i < images.length; i++) {
        gifContainer.innerHTML += `<img src="${images[i]}" class="col-3 mb-3">`;
    }
});
