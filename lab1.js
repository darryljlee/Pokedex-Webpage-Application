//second commit, created functionality where cards can appear and disappear to match user input
const pokedex = [ //created an array where each index stored a Pokemon object and its respective attributes
    {
        id: "ID: 1", //attribute for the pokemon's number in the Official Pokedex
        name: "Bulbasaur",  // "name" is the attribute of the Pokemon's name
        type: "Grass/Poison. Rarity:4 " //"type" is the attribute storing the Pokemon's general description, such as its Type and Rarity
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


function storeName(){ //function storeName() is used to validate user input in the name search bar
    userInputName = document.getElementById('namesearch').value;    //create variable userInputName and store the user's input from the name search bar
    var letters = /^[A-Za-z]+$/;                                    //create a variable called letters that stores the english alphabet's letters
    var isValid = letters.test(document.getElementById('namesearch').value); //isValid is used to check the user's input with letters to see if they inputted english letters only
    //
    
    for (i=0;i<pokedex.length;i++){     // for loop to iterate through the entire pokedex array to check if input matches anything in the array
        if(pokedex[i].name.toLowerCase().includes(String(userInputName).toLowerCase())){ //check if any character in user input is inside any Pokemon Object's name 
            nameAccepted(); //if a match is made, execute the nameAccepted() function
        }
        else if (userInputName.length > 20){ //if the user's input is greater than 20 characters, alert pops up and break from for loop
            alert("Name must contain less than 20 characters")
            break;
        }
        else if (String(userInputName).indexOf(' ') >= 0 ){ //if there are any spaces in the user input, shjow alert and break from for loop
            alert("Input does not allow spaces, please try again.")
            break;
        }
        else if (!isValid){
            alert("Name must contain characters from A-Z. Please try again.") //checks to see if all inputted characters are between A-Z/a-z
            break;       
        }
     }
}

function nameAccepted(){
    let count = 0; 
    allStored = []; //create array called allStored that holds all the search results that match the user input
    
    for (i=0; i < pokedex.length; i++){ //iterate through the length of the pokedex array
        if(pokedex[i].name.toLowerCase().includes(String(userInputName).toLowerCase()) && count < 5 ){ //checks if any character in user input matches a Pokemon's name AND if count < 5. Once 5 results are received, leave for loop
            count = count + 1; //increments for each successful search match
            allStored.push(pokedex[i]) //push each Pokemon Object that matches search results into allStored 
        }
    }     
    alert(JSON.stringify(allStored)) // alert prints out the Pokemon objects in allStored array 
}


function storeNumber () { //function storeNumber() is used to validate user input in the name search bar
    userInputNumber = document.getElementById('numbersearch').value; //create variable that stores whatever user inputs

    for (i=0;i<pokedex.length;i++){ //iterate length of pokedex array
    if(String(pokedex[i].id).includes(String(userInputNumber))){ //if any pokemon ids include any characters from userInput, execute numberAccepted() function
        numberAccepted();
    }
    else if(userInputNumber >= 21 || userInputNumber <= 0){ //if user input puts any number > = 21 or less than/equal to 0 then alert and break from loop
        alert("Invalid input. Please enter a number between 1-20.")
        break;
    }
    else if(String(userInputNumber).indexOf(' ') >=0){ //if user input puts any spaces, alert and break from loop
        alert("Don't input spaces please, try again.")
        break;
    }
    else if (isNaN(userInputNumber)){//if any special characters are entered in the number search bar, alert and then break from loop
        alert("Please enter a numerical value only (i.e. no letters, special characters or spaces)")
        break;
    }
    }
}
function numberAccepted(){ //if number inputted from user matches any "ids" in pokedex array
    let numberCount = 0;
    newStored = []; //create an array that stores the Pokemon objects that satisfy input from number search bar

    for (i=0; i< pokedex.length; i++){ 
        if (String(pokedex[i].id).includes(String(userInputNumber)) && numberCount < 5){ //checks if any character in user input matches a Pokemon's name AND if numberCount < 5. Once 5 results are received, leave for loop
            numberCount = numberCount + 1;
            newStored.push(pokedex[i]) //push matching Pokemon Object search result into newStored array
        }
    }
      alert(JSON.stringify(newStored)) // print the array that stores all  Pokemon Object search results
}



function searchByName(){ //when you click button on name search bar launch function 

    let divUserInputName= document.getElementById("namesearch").value;
    //console.log("Search: " + divUserInputName);

    let div = document.getElementById("newDiv");

    if(div != null){ //if there's something that exists, remove it. If it doesnt then do nothing
        div.parentNode.removeChild(div);
    }
    div = document.createElement("div"); 
    div.setAttribute("id", "newDiv");

    if(divUserInputName.length == 0) {//if no input exists, then don't add anything to the list
      return;
    }
                                         
    document.body.insertBefore(div, document.getElementById("no-bullet"));    
    let unordered = document.createElement("ul");                               //declare unordered list
    unordered.setAttribute("class", "no-bullet");                                       //set attributes of unordered list (and also gets rid of lines)
    div.appendChild(unordered);

for(i = 0; i < pokedex.length; i++){
    //if you want to style the id and description

    if(pokedex[i].name.toLowerCase().includes(String(divUserInputName).toLowerCase())){
        let divListElement = document.createElement("li"); //create li 
        divListElement.setAttribute("id", "appearance");
        console.log("Hello")

        let divCard = document.createElement("div"); 
        divCard.setAttribute("class", "card"); 

        let divImage = document.createElement("img");
        divImage.setAttribute("src","Lab1-pokemon-images/" +(i+1)+ ".png");

        let divName = document.createTextNode(pokedex[i].name);

        let divID = document.createElement("p");
        divID.setAttribute("class", "pokemonnumber");
        divID.append(pokedex[i].id);



        //divName.setAttribute("id", "description");    

        unordered.appendChild(divListElement);
        divListElement.appendChild(divCard);//put <card> tag inside <li> tag
        divCard.appendChild(divName); //put the name DOM element inside the card tag
        divCard.appendChild(divImage); // put <img> tag inside <card> tag
        divCard.appendChild(divID);

        
    }



    else{
       // unordered=div.getElementsByTagName("unordered")[0];
       // while(unordered.firstChild){
            //unordered.removeChild(unordered.firstChild)
       }
    }

}









