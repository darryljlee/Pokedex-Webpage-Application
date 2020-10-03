const pokedex = [ //created an array where each index stored a Pokemon object and its respective attributes
    {
        id: "#1", //attribute for the pokemon's number in the Official Pokedex
        name: "Bulbasaur",  // "name" is the attribute of the Pokemon's name
        type: "Type: Grass/Poison. Rarity: 4", //"type" is the attribute storing the Pokemon's general description, such as its Type and Rarity
    },
    {
        id: "#2",
        name: "Ivysaur", 
        type: "Type: Grass/Poison. Rarity:5"
    },
    {
        id:"#3",
        name: "Venusaur",
        type: "Type: Grass/Poison. Rarity: 6"
    },
    {
        id:"#4",
        name: "Charmander",
        type: "Type: Fire.  Rarity:4"
 
    },
    {
        id:"#5",
        name: "Charmeleon",
        type: "Type: Fire. Rarity:5"
    
    },
    {
        id:"#6",
        name: "Charizard",
        type: "Type: Fire/Flying.  Rarity:6"
      
    },
    {
        id:"#7",
        name: "Squirtle",
        type: "Type: Water.  Rarity:4"
       
    },
    {
        id:"#8",
        name: "Wartortle",
        type: "Type: Water. Rarity:5"     
    },
    {
        id:"#9",
        name: "Blastoise",
        type: "Type: Water.  Rarity:6 "
    },
    {
        id:"#10",
        name: "Caterpie",
        type: "Type: Bug.  Rarity:1"
    },
    {
        id:"#11",
        name: "Metapod",
        type: "Type: Bug.  Rarity:3"
    },
    {
        id:"#12",
        name: "Butterfree",
        type: "Type: Bug/Flying.  Rarity:4"
    },
    {
        id:"#13",
        name: "Weedle",
        type: "Type: Bug/Poison.  Rarity:1"
    },
    {
        id:"#14",
        name: "Kakuna",
        type: "Type: Bug/Poison.  Rarity:3"
    },
    {
        id:"#15",
        name: "Beedrill",
        type: "Type: Bug/Poison.  Rarity:4"
    },
    {
        id:"#16",
        name: "Pidgey",
        type: "Type: Normal/Flying.  Rarity:1"
    },
    {
        id:"#17",
        name: "Pidgeotto",
        type: "Type: Normal/Flying.  Rarity:3"
    },
    {
        id:"#18",
        name: "Pidgeot",
        type: "Type: Normal/Flying.  Rarity:4"
    },
    {
        id:"#19",
        name: "Rattata",
        type: "Type: Normal.  Rarity:1"
    },
    {
        id:"#20",
        name: "Raticate",
        type: "Type: Normal.  Rarity:4"
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

    if(div != null){ //if there's something that exists in the search bar, remove it. If it doesn't then do nothing
        div.parentNode.removeChild(div); 
    }
   div = document.createElement("div"); 
   div.setAttribute("id", "newDiv");

    if(divUserInputName.length == 0) {//if no input exists, then don't add anything to the list
      return;
    }
                                         
    document.body.insertBefore(div, document.getElementById("no-bullet"));    
    let unordered = document.createElement("ul");                                        //declare unordered list
    unordered.setAttribute("class", "no-bullet");                                       //set attributes of unordered list (and also gets rid of lines)
    div.appendChild(unordered);

    for(i = 0; i < pokedex.length; i++){ //create for loop to help search through array

    if(pokedex[i].name.toLowerCase().includes(String(divUserInputName).toLowerCase())){ //if the pokemon's id contains the characters of the user input, create a <li> tag, and also put a card <div> 
        let divListElement = document.createElement("li"); //create li tag
        divListElement.setAttribute("id", "appearance"); //set li tag id

        let divCard = document.createElement("div"); //create a <div> element that has the card
        divCard.setAttribute("class", "card"); //set class of the card
        divCard.setAttribute("id", "newDiv"); //set id of the card to "newDiv"


        let divImage = document.createElement("img"); //create an <img> tag
        divImage.setAttribute("src","Lab1-pokemon-images/" +(i+1)+ ".png"); //set the src to the images inside the Lab1-pokemon-images
        divImage.setAttribute("class", "divCardImage"); // set the attribute of the class to divCardImage


        let divName = document.createTextNode(pokedex[i].name); //create a text node called divName that stores a Pokemon's name property

        let divID = document.createElement("p"); //create a <p> tag called divID
        divID.setAttribute("class", "pokemonnumber"); //set class of the divID to "pokemonnumber" in styles.css
        divID.append(pokedex[i].id); //store the id value of the Pokemon in the array

        let divDescription = document.createElement("p"); //create a <p> tag called divDescription
        divDescription.setAttribute("class", "pokemonnumber"); //set the class of the divDescription to pokemonnumber
        divDescription.append(pokedex[i].type); //store the Pokemon object's type property and append to the divDescription     

        unordered.appendChild(divListElement); //append the listElement onto the unordered list
        divListElement.appendChild(divCard); //put <div> tag of the card inside <li> tag
        divCard.appendChild(divName); //put the text node inside the card tag
        divCard.appendChild(divImage); // put <img> tag inside card tag
        divCard.appendChild(divID); //put the divID <p> inside the card tag
        divCard.appendChild(divDescription); //put the divDescription inside the card tag
        }
    }

}

function searchByNumber(){ //this function is called when key is "up" in the number search bar 
    let divUserInputNumber = document.getElementById("numbersearch").value; //store the value of the user input in the number bar

    let divFromNumber = document.getElementById("numDiv"); 

    if(divFromNumber != null){
        divFromNumber.parentNode.removeChild(divFromNumber); 
    }
    divFromNumber = document.createElement("div"); //create a div when user enters something in number bar
    divFromNumber.setAttribute("id", "numDiv"); //set the id of divNumber to "numDiv"

    if(divUserInputNumber == 0){
        return;
    }

    document.body.insertBefore(divFromNumber, document.getElementById("no-bullet")); //put content block created from number input just before unordered list from lab1 
    let unorderedFromNum=document.createElement("ul");   //create unordered list inside "number" div
    unorderedFromNum.setAttribute("class", "no-bullet"); //set attributes of unordered list inside "number" div
    divFromNumber.appendChild(unorderedFromNum); //append unorderedList behind divFromNumber

    for (i = 0; i < pokedex.length; i++){ 
        
        if(pokedex[i].id.includes(String(divUserInputNumber))){ 
        let listElementFromNum = document.createElement("li"); 
        listElementFromNum.setAttribute("id", "appearance");
        

        let cardFromNum = document.createElement("div");
        cardFromNum.setAttribute("class", "newCard");
        cardFromNum.setAttribute("id", "newDiv");


        let imgFromNum = document.createElement("img");
        imgFromNum.setAttribute("src", "Lab1-pokemon-images/" +(i+1)+ ".png");
        imgFromNum.setAttribute("class", "divCardImage")

        let nameFromNum = document.createTextNode(pokedex[i].name);
        
        let idFromNum = document.createElement("p");
        idFromNum.setAttribute("class", "pokemonnumber");
        idFromNum.append(pokedex[i].id);

        let descriptionFromNum = document.createElement("p");
        descriptionFromNum.setAttribute("class", "pokemonnumber");
        descriptionFromNum.append(pokedex[i].type)

        unorderedFromNum.appendChild(listElementFromNum);
        listElementFromNum.appendChild(cardFromNum);
        cardFromNum.appendChild(nameFromNum);
        cardFromNum.appendChild(imgFromNum);
        cardFromNum.appendChild(idFromNum);
        cardFromNum.appendChild(descriptionFromNum);
        

        



        }

    }


}









