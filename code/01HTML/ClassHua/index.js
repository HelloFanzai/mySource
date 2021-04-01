const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar')

// Fetch method
const fetchText = (searchText) => {
    let API = `https://itunes.apple.com/search?term=$%7b${searchText}%7d&media=music&entity=album&attribute=artistTerm&limit=500`
    return new Promise((resolve, reject) => {
        fetch(API)
            .then((response) => response.json())
            .then((result) => {
                resolve(result);
            })
            .catch((error) => reject(error));
    })
}

// display method
const displayCharacters = (characters) => {
    const htmlString = characters.map((character) => {
        return `
            <li class = 'character'>
            <h2>${character.collectionName}</h2>
            
            <img src=${character.artworkUrl60}/>
            </li>
        `
    })
        .join('')
    charactersList.innerHTML = htmlString;
}


// 1. listen key up, 
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    // 2. get data
    fetchText(searchString).then((data) => {
        console.log('res', data);
        if (data.results !== undefined) {
            const filtedredCharacters = data.results.filter((character) => {
                return (
                    character.collectionName.toLowerCase().includes(searchString)
                )
            })
            console.log('filtedredCharacters', filtedredCharacters);

            // 3. render to html page
            displayCharacters(filtedredCharacters)
        }
    });
});