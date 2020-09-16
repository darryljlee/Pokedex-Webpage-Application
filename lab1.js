function myFunction(){
    document.getElementById("myDropDown").classList.toggle("show")
}

const list = document.getElementsByClassName('no-bullet');


const pokedex = [
    {
        id:1,
        name: "Bulbasaur",
        Description: "Grass/Poison Type -- Rarity:6 "
    },
    {
        id:2,
        name: "Ivysaur", type: "Grass/Poison"
    },
    {
        id:3,
        name: "Venusaur",
        type: "Grass/Poison Type. Rarity: 6"
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
        type: "Normal/Flying"
    },
    {
        id:17,
        name: "Pidgeot",
        type: "Normal/Flying"
    },
    {
        id:18,
        name: "Pidgeotto",
        type: "Normal/Flying"
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


function storeName(){
    userInputName = document.getElementById('namesearch').value;
    var letters = /^[A-Za-z]+$/;
    var isValid = letters.test(document.getElementById('namesearch').value);
    console.log(userInputName)
    
    for (i=0;i<pokedex.length;i++){
        if(pokedex[i].name.toLowerCase().includes(String(userInputName).toLowerCase())){
            nameAccepted();
        }
        else if (userInputName.length > 20){
            alert("Name must contain less than 20 characters")
            break;
        }
        else if (!isValid){
            alert("Name must contain characters from A-Z. Please try again.") //checks to see if all characters are between A-Z/a-z 
            break;       
        }
        else{
            alert("Your search wasn't found")
            break;
        } 
    }
}

function nameAccepted(){
    let count = 0;
    allStored = [];
    
    for (i=0; i < pokedex.length; i++){
        if(pokedex[i].name.toLowerCase().includes(String(userInputName).toLowerCase()) && count < 5 ){ //if you type in something that matches anything in pokedex array
            console.log("success")
            count = count + 1;
            console.log(count)

            console.log(pokedex[i].name)
            allStored.push(pokedex[i])
            
            console.log(allStored)
        }
    }   
    
    
    Object.prototype.toString = function() {
        var output = "";
        for (var i in this) {
          output += i + ": " + this[i] ;
        }
        return output;
      }
      alert(JSON.stringify(allStored)) // formerly alert(JSON.stringify(allStored,null,3)). 

}


function storeNumber () {
    userInputNumber = document.getElementById('numbersearch').value;
    if(userInputNumber > 21 || userInputNumber <= 0 || isNaN(userInputNumber)){
        alert("Invalid number input. Please enter a number between 1-20.")
    }
    else{
        numberAccepted();
    }
}

function numberAccepted(){
    console.log("Your number was accepted!")
    let numberCount = 0;
    newStored = [];

    for (i=0; i< pokedex.length; i++){
        if (String(pokedex[i].id).includes(String(userInputNumber)) && numberCount < 5){
            console.log("hello, you made it into the if statement")
            numberCount = numberCount + 1;
            console.log(numberCount)

            console.log(pokedex[i].name)
            newStored.push(pokedex[i])
            console.log(newStored)
        }
    }
    Object.prototype.toString = function() {
        var output = "";
        for (var i in this) {
          output += i + ": " + this[i] ;
        }
        return output;
      }
      alert(JSON.stringify(newStored)) // formerly alert(JSON.stringify(allStored,null,3)). 
}






// I think I could either try to see if the user inputted number is in "id" or I could check if it's inside local variable i. If I can do the second one that'd give me more room for description
    








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

