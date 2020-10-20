
export function renderCharacter(char){
    const characterImage = document.createElement('img');
    const characterDiv = document.createElement('div');

    characterImage.id = 'character-image';
    characterImage.src = `../assets/${char}`;

    characterDiv.id = 'character-div';
    characterDiv.append(characterImage);

    return characterDiv;
}
