
export function buttonTutorial(){

    const buttons = document.getElementsByClassName('small-buttons');
    // const responses = document.getElementById('response1');
        for (let i = 0; i < buttons.length; i++){
            buttons[i].classList.add(`glow${i+1}`);
            // responses[i].classList.add(`glow`);
        }

//     buttons[0].classList.add('glow1');
//     responses[0].classList.add('glow1')

//     buttons[1].classList.add('glow2');
//     responses[1].classList.add('glow1')

//     buttons[2].classList.add('glow3');
//     responses[2].classList.add('glow3')

// }
}