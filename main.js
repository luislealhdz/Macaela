const products = document.getElementById("products");

const ALBUM_API = "https://jsonplaceholder.typicode.com/albums";

const fetchData = async () => {
    const response = await fetch(ALBUM_API);
    const albums = await response.json();
};

fetchData();
