// Select the input field and all buttons
const display = document.querySelector('input');
const buttons = document.querySelectorAll('button');

// Initialize an empty string to store the current input
let currentInput = '';

// Create an audio object
const clickSound = new Audio('mouse-click-290204.mp3');

// Add click event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Play the sound
        clickSound.play();

        const value = button.textContent.trim();

        if (value === 'AC') {
            // Clear the input field
            currentInput = '';
            display.value = '0';
        } else if (value === '=') {
            try {
                // Evaluate the expression and display the result
                currentInput = eval(currentInput).toString();
                display.value = currentInput;
            } catch (error) {
                display.value = 'Error';
                currentInput = '';
            }
        } else if (value === '⌫') {
            // Handle backspace (delete last character)
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput || '0';
        } else {
            // Append the button value to the current input
            currentInput += value;
            display.value = currentInput;
        }
    });
});
