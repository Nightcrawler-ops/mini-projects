const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

textInput.addEventListener("input", () => {
    let text = textInput.value;

    if (text.length > 70) {
        text = text.slice(0, 70);
        textInput.value = text;
    }

charCount.textContent = `Character Count: ${text.length}/70`;

if (text.length === 70) {
    charCount.classList.add("red") //change the text color to red
} else {
    charCount.classList.remove("red") //change the text color to the initial color
}
});