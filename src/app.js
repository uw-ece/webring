const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let ece_students = [
    {
        "name": "Adshayan Balendra",
        "website": "https://adshayanb.github.io/",
        "image": "static/adshayan.jpg"
    },
    {
        "name": "Sayma Khan",
        "website": "https://saymaakhan.github.io/",
        "image": "static/sayma.jpg"

    }, 

];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = ece_students.filter((students) => {
        return (
            students.name.toLowerCase().includes(searchString) ||
            students.website.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        displayCharacters(ece_students);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (students) => {
    const htmlString = students
        .map((students) => {
            return `
            <li class="character">
                <h2>${students.name}</h2>
                <p>Site: ${students.website}</p>
                <img src="${students.image}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();
