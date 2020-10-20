// pulls dialgoue information from passed object, creates 'p' element
// returns it
export function renderDialogueBox(text){
    const dialogueBox = document.createElement('p');
    dialogueBox.id = 'dialogue-box';
    dialogueBox.textContent = text;
    
    return dialogueBox;
}

