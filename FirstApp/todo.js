/**Get context of the Add Button***/

var addButton = document.getElementById("addBtn");

/**The below function is executed when onclick event of the Add button triggers:**/

function addNewItem() {
  /**Get input from user**/

  var input = document.getElementById("userInput");
  if (input.value != "") {
    /**Get context of the Ul element***/

    var ul = document.getElementById("ulList");

    /**Create a new list item**/

    var li = document.createElement("li");
    // creates an element "li"

    /**create text node with input value**/
    var inputValue = document.createTextNode(input.value);

    /**makes text from input field the li text**/
    li.appendChild(inputValue);
    /**Attach an event listener to the delete button on 'click', when clicked 'deleteListItem' method will be called**/
    li.addEventListener("click", alertContents, false);

    /**Create a delete button dynamically**/
    var deleteBtn = document.createElement("button");

    /**Assign an 'X' to the name of the button***/
    deleteBtn.appendChild(document.createTextNode("x"));
    /**Attach an event listener to the delete button on 'click', when clicked 'deleteListItem' method will be called**/
    deleteBtn.addEventListener("click", deleteListItem, false);

    /**Attach the button to the created li**/
    li.appendChild(deleteBtn);
    /**Append li to ul***/
    ul.appendChild(li);
    //Reset text input field
    input.value = "";
  } else {
    /***If input is empty or blank alert a message**/
    alert("please enter a value");
  }
}
/**function to delete list item on click of 'X'**/
function deleteListItem(e) {
  /*Here the ‘e’ is aken as an argument parameter , e stands for event, it is an object of the document and hols context of current event*/

  var currentLi = e.target.parentElement;
  currentLi.setAttribute("class", "delete");
}

function alertContents(el) {
  if (el.target.innerText !== "x") {
    alert("You selected " + el.target.childNodes[0].nodeValue);
  }
}
