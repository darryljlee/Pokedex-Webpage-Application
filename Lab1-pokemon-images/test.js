const list = document.getElementsByClassName('no-bullet');

const pokedex = [
    {
        id:1,
        name: "Bulbasaur",
        type: "Grass/Poison",
        image: "Lab1-pokemon-images\1.png"
    },
    {
        id:2,
        name: "Ivysaur",
        type: "Grass/Poison"
    },
    {
        id:3,
        name: "Venusaur",
        type: "Grass/Poison"
    },
    {
        id:4,
        name: "Charmander",
        type: "Fire"
    },
    {
        id:5,
        name: "Charmeleon",
        type: "Fire"
    },
    {
        id:6,
        name: "Charizard",
        type: "Fire/Flying"
    },
    {
        id:7,
        name: "Squirtle",
        type: "Water"
    },
    {
        id:8,
        name: "Wartortle",
        type: "Water"
    },
    {
        id:9,
        name: "Blastoise",
        type: "Water"
    },
    {
        id:10,
        name: "Caterpie",
        type: "Bug"
    },
    {
        id:11,
        name: "Metapod",
        type: "Bug"
    },
    {
        id:12,
        name: "Butterfree",
        type: "Bug/Flying"
    },
    {
        id:13,
        name: "Weedle",
        type: "Bug/Poison"
    },
    {
        id:14,
        name: "Kakuna",
        type: "Bug/Poison"
    },
    {
        id:15,
        name: "Beedrill",
        type: "Bug/Poison"
    },
    {
        id:16,
        name: "Pidgey",
        type: "Flying/Normal"
    },
    {
        id:17,
        name: "Pidgeot",
        type: "Flying/Normal"
    },
    {
        id:18,
        name: "Pidgeotto",
        type: "Flying/Normal"
    },
    {
        id:19,
        name: "Rattata",
        type: "Normal"
    },
    {
        id:20,
        name: "Raticate",
        type: "Normal"
    },
]

displayPokemon(pokedex);


const displayPokemon = (pokemons) => {
    const htmlString = pokemons.map((pokemon) => {
        return `
        <li class="character">
                <h2>${pokemon.name}</h2>
                <p>Type: ${pokemon.type}</p>
                <img src="${pokemon.image}"></img>
            </li>
        `;

    })
    .join('');

    list.innerHTML = htmlString;

};


displayPokemon();



/*

function submit(){
    var submit;
    submit = document.getElementById("submitbutton").value;
}

//one input output for numbers
//one input output for naming

function numberFunction(){
var number; 

numberUserInput = document.getElementById("numbersearch").value;

ul = document.getElementById("no-bullet");
li = ul.getElementsByTagName("li");

}


//make a submit function
*/