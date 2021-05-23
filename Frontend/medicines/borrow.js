const plusButton = document.getElementById("plusButton");
const textField1 = document.getElementById("textField1");
const btnSubmit = document.getElementById("btnSubmit");

addEventListener('keypress', function(e) {
    const todo = textField1.value;
    if (e.keyCode === 13)
        if (textField1.value) {
            alert('Added');
            textField1.value = "";
        }

})
plusButton.addEventListener("click", () => {
    if (textField1.value) {
        alert('Added');
        textField1.value = "";
    }

})

btnSubmit.addEventListener("click", () => {
    alert("Form Submitted");
})