let buttons = document.querySelectorAll(".choices");
let display = "";
let displayinput = document.querySelector("#screen");

const screen = (userChoice) => {
    display = display + userChoice;
    displayinput.innerHTML = `<h1>${display}</h1>`;
};

const displayresult = (result) => {
    displayinput.innerHTML = `<h1>${result}</h1>`;
};

let result = 0;
buttons.forEach((choices) => {
    console.log(choices);
    choices.addEventListener("click", (e) => {
        if (e.target.innerHTML == '=') {
            try {
                result = eval(display);
                console.log(result);
                displayresult(result);
                display = "";  // Reset display after result is shown
            } catch (error) {
                displayresult("Error");
                display = "";  // Clear display after error
            }
        } else if (e.target.innerHTML == 'AC') {
            display = "";  // Clear the display
            displayinput.innerHTML = "<h1>0</h1>";
        } else if (e.target.innerHTML == 'DEL') {
            display = display.substring(0, display.length - 1);
            displayinput.innerHTML = `<h1>${display}</h1>`;
            console.log(display);
            
}           
        else {
            const userChoice = choices.getAttribute("id");
            console.log(userChoice);
            screen(userChoice);
        }
    });
});
