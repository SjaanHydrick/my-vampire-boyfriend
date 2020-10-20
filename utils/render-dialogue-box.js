
export function renderDialogueBox(text){
    const dialogueBox = document.createElement('p');
    dialogueBox.id = 'dialogue-box';
    dialogueBox.textContent = text;
    
    return dialogueBox;
}

