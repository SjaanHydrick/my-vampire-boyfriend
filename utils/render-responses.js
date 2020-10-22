// renderResponses uses a for loop to create 'p' elements from passed array
// creates 'p' elements and then returns them as children of a 'response-section'
export function renderResponses(object){
    const responseSection = document.createElement('section');
    responseSection.id = 'response-section';
    responseSection.style.visibility = 'hidden';
    let i = 1;
    
    for (let choice of object.choices){
        const response = document.createElement('p');
        response.classList.add('response');
        response.id = `response${i}`;
        response.textContent = choice.response;

        if (object.tutorial){
            response.classList.add(`glow${i}`);
        }

        responseSection.appendChild(response);
        i++;
    }

    return responseSection;
}