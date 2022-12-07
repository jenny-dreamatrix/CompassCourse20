// Datatypes in computer languages
var text = "Hello World";   // string
var number = 42;            // integer/number
var char = "@";             // einzelne Zeichen
var degree = 50.16;         // float
var isHungry = false;       // Boolean (true or false)
var students = [           // array / list -> in JEDER programmiersprache mit [], kann unendlich viele values haben ! alle anderen data types haben nur einen value !
    "Enzo",
    "Jenny",
    "Patricia",
    "Hannatu",
    "Ivan",
    "Jessica",
    "Lata"
]

//Backend Commands
console.log("Hello World")                  // console is an object, .log is one of many superpowers of the console ! The log() method writes (logs) a message to the console. The log() method is useful for testing purposes.
console.warn(text + " " + degree + " " + isHungry);         // .warn is another superpower of the object console. The warn() method writes a warning to the console.
console.info(students[2] + " " + students[6])               // The info() method writes a message to the console.


//Frontend Commands
//alert("The Answer for Everything is number: " + number);

// TODOLIST FUNCTIONS
function AddToDo() {
    console.log("Started the AddToDo Function");
    // extracting the text aka. value of the input field
    var fieldValue = document.querySelector(".myInput").value;  //erstelle eine variable mit dem namen fieldValue - dessen inhalt wird gezogen aus: gehe zu html document - suche darin nach einer class oder ID mit bezeichnung ".myInput" und wähle das aus und ziehe den inhalt !
    console.log(fieldValue);
    if (fieldValue === ""){
        alert("Can't Add Empty ToDo");      //notification window
    }
    else {
    console.log(fieldValue);
    var textNode = document.createTextNode(fieldValue);
        
    //variable newListItem will create an empty ListItem (html) aka. li everytime the function is triggerd
    var newListItem = document.createElement("li");
    newListItem.appendChild(textNode); //append the 2D Text that was converted into a textnode to the empty listitem
    
    // when the text has been extracted, converted into a 2D modul with textNode and packed into an emtpy ListItem, then we can assign that ListItem with its TextNode as a child of the unordered list in html.
    document.querySelector(".myUL").appendChild(newListItem);    

    //  resetting the input field after successfully adding a todoItem
        document.querySelector(".myInput").value = " ";
    }
}



