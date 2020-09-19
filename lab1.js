function myFunction(){
    document.getElementById("myDropDown").classList.toggle("show")
}

const list = document.getElementsByClassName('no-bullet');


const pokedex = [
    {
        id: 1,
        name: "Bulbasaur", 
        type: "Grass/Poison. Rarity:4 "
    },
    {
        id:2,
        name: "Ivysaur", 
        type: "Grass/Poison. Rarity:5"
    },
    {
        id:3,
        name: "Venusaur",
        type: "Grass/Poison. Rarity: 6"
    },
    {
        id:4,
        name: "Charmander",
        type: "Fire.  Rarity:4"
 
    },
    {
        id:5,
        name: "Charmeleon",
        type: "Fire. Rarity:5"
    
    },
    {
        id:6,
        name: "Charizard",
        type: "Fire/Flying.  Rarity:6"
      
    },
    {
        id:7,
        name: "Squirtle",
        type: "Water.  Rarity:4"
       
    },
    {
        id:8,
        name: "Wartortle",
        type: "Water. Rarity:5"     
    },
    {
        id:9,
        name: "Blastoise",
        type: "Water.  Rarity:6 "
    },
    {
        id:10,
        name: "Caterpie",
        type: "Bug.  Rarity:1"
    },
    {
        id:11,
        name: "Metapod",
        type: "Bug.  Rarity:3"
    },
    {
        id:12,
        name: "Butterfree",
        type: "Bug/Flying.  Rarity:4"
    },
    {
        id:13,
        name: "Weedle",
        type: "Bug/Poison.  Rarity:1"
    },
    {
        id:14,
        name: "Kakuna",
        type: "Bug/Poison.  Rarity:3"
    },
    {
        id:15,
        name: "Beedrill",
        type: "Bug/Poison.  Rarity:4"
    },
    {
        id:16,
        name: "Pidgey",
        type: "Normal/Flying.  Rarity:1"
    },
    {
        id:17,
        name: "Pidgeotto",
        type: "Normal/Flying.  Rarity:3"
    },
    {
        id:18,
        name: "Pidgeot",
        type: "Normal/Flying.  Rarity:4"
    },
    {
        id:19,
        name: "Rattata",
        type: "Normal.  Rarity:1"
    },
    {
        id:20,
        name: "Raticate",
        type: "Normal.  Rarity:4"
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
        else if (String(userInputName).indexOf(' ') >= 0 ){
            alert("DON'T INPUT SPACES TRY AGAIN")
            break;
        }
        else if (!isValid){
            alert("Name must contain characters from A-Z. Please try again.") //checks to see if all characters are between A-Z/a-z 
            break;       
        }
     }
}

function nameAccepted(){
    let count = 0;
    allStored = [];
    
    for (i=0; i < pokedex.length; i++){
        if(pokedex[i].name.toLowerCase().includes(String(userInputName).toLowerCase()) && count < 5 ){ //if you type in something that matches anything in pokedex array
            //console.log("success")
            count = count + 1;
            //console.log(count)

           // console.log(pokedex[i].name)
            allStored.push(pokedex[i])
            
            console.log(allStored)
        }
    }     
    alert(JSON.stringify(allStored)) // formerly alert(JSON.stringify(allStored,null,3)). 
}


function storeNumber () {
    userInputNumber = document.getElementById('numbersearch').value;
    for (i=0;i<pokedex.length;i++){
    if(String(pokedex[i].id).includes(String(userInputNumber))){
        numberAccepted();
    }
    else if(userInputNumber >= 21 || userInputNumber <= 0){
        alert("Invalid input. Please enter a number between 1-20.")
        break;
    }
    else if(String(userInputNumber).indexOf('') >=0){
        alert("Don't input spaces please, try again.")
        break;
    }
    else if (isNaN(userInputNumber)){
        alert("Please enter a numerical value only (i.e. no letters, special characters or spaces)")
        break;
    }
    }
}
function numberAccepted(){
    console.log("Your number was accepted!")
    let numberCount = 0;
    newStored = [];

    for (i=0; i< pokedex.length; i++){
        if (String(pokedex[i].id).includes(String(userInputNumber)) && numberCount < 5){
            numberCount = numberCount + 1;
            newStored.push(pokedex[i])
        }
    }
      alert(JSON.stringify(newStored)) // formerly alert(JSON.stringify(allStored,null,3)). 
}