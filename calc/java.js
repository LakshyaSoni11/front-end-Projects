let string = "";
let buttons = document.querySelectorAll('input[type="button"]');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.value;
        if (buttonText == '=') {
            try {
                // Evaluate the expression in the string
                string = eval(string);
            } catch {
                string = "Error";
            }
            document.querySelector('input[name="display"]').value = string;
        } else if (buttonText == 'AC') {
            string = "";
            document.querySelector('input[name="display"]').value = string;
        } else if (buttonText == 'DE') {
            // Remove the last character from the string
            string = string.slice(0, -1);
            document.querySelector('input[name="display"]').value = string;
        } else {
            console.log(e.target);
            string += buttonText;
            document.querySelector('input[name="display"]').value = string;
        }
    });
});
