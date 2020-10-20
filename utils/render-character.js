
export function renderCharacter(char, id){
    const characterImage = document.createElement('img');
    const characterDiv = document.createElement('div');

    characterImage.id = id;
    characterImage.src = `../assets/${char}`;

    characterDiv.id = 'character-div';
    characterDiv.append(characterImage);

    return characterDiv;
}
