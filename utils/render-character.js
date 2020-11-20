// takes in character information from JSON
// adds character image element, adds appropriate classes
// so CSS styling can allow for intended effects
export function renderCharacter(char, id) {
    const characterImage = document.createElement('img');
    const characterDiv = document.createElement('div');
    // assigns appropriate image source
    characterImage.id = id;
    characterImage.src = `../assets/${char.src}`;

    characterDiv.id = `${id}-div`;
    // character image will zoom in during beat
    // super, super cool use of metadata!
    if (char.resize) {
        characterDiv.classList.add('resize');
    }
    // character image will fade into beat
    if (char.fadeIn) {
        characterDiv.classList.add('fade-in');
    }
    // character image will fade out of beat
    if (char.fadeOut) {
        characterDiv.classList.add('fade-out');
    }

    characterDiv.append(characterImage);

    return characterDiv;
}
