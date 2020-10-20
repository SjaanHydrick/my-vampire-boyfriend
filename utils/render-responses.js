// renderResponses uses a for loop to create 'p' elements from passed array
// creates 'p' elements and then returns them as children of a 'response-section'
export function renderResponses(choices){
    const responseSection = document.createElement('section');
    responseSection.id = 'response-section';
    for (let choice of choices){
        const response = document.createElement('p');
        response.classList.add('response');
        response.textContent = choice.response;
        responseSection.appendChild(response);
    }

    return responseSection;
}