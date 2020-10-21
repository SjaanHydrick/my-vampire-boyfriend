// pulls dialgoue information from passed object, creates 'p' element
// returns it
export function renderDialogueBox(text){
    const div = document.createElement("div");
    let i = 0;


    const dialogueString = document.createElement("p");
    dialogueString.id = "dialogue-box";
    div.appendChild(dialogueString);
    typeWriter(dialogueString, text, i);

    div.id = "dialogue-div"
    
    return div;
}


export function typeWriter(dialogueString, text, i){
    let speed = 35;
    if (i < text.length){
        dialogueString.textContent += text.charAt(i);
        i++;
        setTimeout(function () {
            typeWriter(dialogueString, text, i)
        }, speed);
    }
}