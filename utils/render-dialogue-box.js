// pulls dialgoue information from passed object, creates 'p' element
// returns it
export function renderDialogueBox(textArray){
    const div = document.createElement("div");

    for (let text of textArray){
        const dialogueString = document.createElement("p");
        dialogueString.id = "dialogue-box";
        dialogueString.textContent = text;
        div.appendChild(dialogueString);
    }

    div.id = "dialogue-div"
    
    return div;
}

