
export function renderCharacter(char, id){
    const characterImage = document.createElement('img');
    const characterDiv = document.createElement('div');

    characterImage.id = id;
    characterImage.src = `../assets/${char.src}`;

    characterDiv.id = `${id}-div`;

    if (char.resize){
        characterDiv.classList.add('resize');
    }

    if (char.fadeIn){
        characterDiv.classList.add('fade-in');
    }
    if (char.fadeOut) {
        characterDiv.classList.add('fade-out');
    }

    characterDiv.append(characterImage);

    return characterDiv;
}
