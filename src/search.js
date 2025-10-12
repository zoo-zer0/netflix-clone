const handleSearch = async (query) => {
    const res = await fetch(`http://localhost:3001/api/search?q=${query}`);
    const data = await res.json();
    console.log(data.items);
}
//eventListener click search button
//generate search box with new search button
//function generateSearchBox

//receive query from form
//eventListener click search button or hit ENTER
//function handleSearch (uses searchTitles, debounce, and renderResults)
//add event Listener for click and enter that triggers handleSearch

//call backend for data
//function searchTitles
//function debounce

//clear previous html <main> (hero, slider)
//add forEach item from backend data
//function renderResults

