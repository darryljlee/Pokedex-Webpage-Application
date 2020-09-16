function myFunction(){
    document.getElementById("myDropDown").classList.toggle("show")
}

const list = document.getElementsByClassName('no-bullet');


const pokedex = [
    {
        id:1,
        name: "Bulbasaur",
    },
    {
        id:2,
        name: "Ivysaur",
    },
    {
        id:3,
        name: "Venusaur",
    },
    {
        id:4,
        name: "Charmander",
 
    },
    {
        id:5,
        name: "Charmeleon",
    
    },
    {
        id:6,
        name: "Charizard",
      
    },
    {
        id:7,
        name: "Squirtle",
       
    },
    {
        id:8,
        name: "Wartortle",
       
    },
    {
        id:9,
        name: "Blastoise",
        type: "Water"
    },
    {
        id:10,
        name: "Caterpie",
        
    },
    {
        id:11,
        name: "Metapod",
        
    },
    {
        id:12,
        name: "Butterfree",
        
    },
    {
        id:13,
        name: "Weedle",
        
    },
    {
        id:14,
        name: "Kakuna",
        
    },
    {
        id:15,
        name: "Beedrill",
        
    },
    {
        id:16,
        name: "Pidgey",
        
    },
    {
        id:17,
        name: "Pidgeot",
        
    },
    {
        id:18,
        name: "Pidgeotto",
        
    },
    {
        id:19,
        name: "Rattata",
        
    },
    {
        id:20,
        name: "Raticate",
        
    },
]


function storeName(){
    var userInputName = document.getElementById('namesearch').value;
    var letters = /^[A-Za-z]+$/;
    var isValid = letters.test(document.getElementById('namesearch').value);
    console.log(userInputName)
    
    if (userInputName.length > 20){
        alert("Name must contain less than 20 characters")
    }
    else if (!isValid){
        alert("Name must contain characters from A-Z. Please try again.") //checks to see if all characters are between A-Z/a-z 
    }
    else{
        nameAccepted()
    }
    
}

function nameAccepted(){

let count = 0;

for (i=0; i< pokedex.length; i++){
if(pokedex[i].name.includes("P")){
    console.log("success")
    count= count+1;
    console.log(count)
}

}

}


function submit(){
    alert ("Bulbasaur: Grass/Poison Type \nCharizarddsssssssssssssssssss")
}


//This is for number search box:

let numberReceived = "the variable that stores the user input"


/*
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
*/


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

