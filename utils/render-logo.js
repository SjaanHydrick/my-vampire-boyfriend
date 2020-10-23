// creates 'MVB' logo for bottom left corner of screen
// acts as watermark and link to 'about us' page
export function renderLogo() {
    let section = document.createElement('section');
    let a = document.createElement('a');
    let mSpan = document.createElement('span');
    let vSpan = document.createElement('span');
    let bSpan = document.createElement('span');
    a.href = '../about-us/';
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
    a.appendChild(section);
    return a
    ;
}