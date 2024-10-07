var newMessage = "John Cena's mad."

var messageTag = document.getElementById("message")

function showMessageOnPage(){
    messageTag.innerHTML = newMessage;
}

showMessageOnPage();