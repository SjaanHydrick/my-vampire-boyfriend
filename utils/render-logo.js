export function renderLogo(){
    let section = document.createElement('section');
    let mSpan = document.createElement('span');
    let vSpan = document.createElement('span');
    let bSpan = document.createElement('span');

    section.id = 'logo';

    mSpan.classList.add('m');
    mSpan.textContent = 'M';

    vSpan.classList.add('v');
    vSpan.textContent = 'V';

    bSpan.classList.add('b');
    bSpan.textContent = 'B';

    section.appendChild(mSpan);
    section.appendChild(vSpan);
    section.appendChild(bSpan);

    return section;
}