
//eventListener click search button
//generate search box with new search button
//function generateSearchBox
function generateSearchBox(){
    const secondaryNav = document.querySelector('.secondary-navigation');
    const searchIcon = document.querySelector('a.search-element');
    
    const searchBox = document.createElement('div');
    searchBox.className = 'search-box';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder='search titles...';
    input.id = "searchInput";

    const button = document.createElement('button');
    button.id = 'searchBtn';
    button.textContent = '🔍';

    searchBox.appendChild(input);
    searchBox.appendChild(button);

    searchIcon.addEventListener('click', (e)=>{
        console.log("clicked");
        e.preventDefault();
        searchIcon.innerHTML='';
        secondaryNav.insertBefore(searchBox, searchIcon);
        input.focus();
    });
}
generateSearchBox();

