//take button and put in a variable
const addBtn = document.querySelector('button');
//add an eventlistener to the button that triggers a function when clicked
addBtn.addEventListener("click", addToList);

//take input's value 
const input = document.querySelector('input');

//put html's body into variable
const container = document.querySelector('.container');

//create ul for shopping list to be added on DOM scripts
const ul = document.createElement("ul");
container.appendChild(ul);

//add id for list's to be deleted by rows with identifier
let counterId = 0;

//function to add user input into DOM made list
function addToList(){ 
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    const delButton = document.createElement("button");
    delButton.textContent = "Delete";
   
    
    //add list 
    ul.appendChild(listItem);
    listItem.textContent =input.value;
    listItem.appendChild(delButton);

    //set id for listItems
    listItem.setAttribute("id", counterId++);

    //add class for delButton
    //delButton.setAttribute("class", 'del');
    //add event listener for delButton
    delButton.addEventListener("click", deleteMe);
    //delete function for delButton
    function deleteMe(){
        listItem.remove();
    };

    //resets input field every submit
    input.value = '';
    //focus back on input field after clicking add to list button
    input.focus();
};
