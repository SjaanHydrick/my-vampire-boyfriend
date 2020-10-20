// pulls dialgoue information from passed object, creates 'p' element
// returns it
export function renderDialogueBox(text){
    const div = document.createElement("div");
    const dialogueBox = document.createElement("p");
    dialogueBox.id = "dialogue-box";
    dialogueBox.textContent = text;

    div.id = "dialogue-div"
    
    div.appendChild(dialogueBox);
    return div;
}

