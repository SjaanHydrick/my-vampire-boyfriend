export const S2B1 = {
    id: 'coffee-shop',
    image: 'coffee-shop.jpg',
    char: 'Vampire_BF.png',
    dialogueBox: `Love at the coffee shop!`,
    choices: [{
        id: 'meat',
        response: `A steak, rare please!`,
        responseFunction: function () {
            updateBeat(S1B2);
        },
    },
    {
        id: 'salad',
        response: `I'll go with salad, my boyfriend says he prefers vegetarians.`,
        responseFunction: function () {
            updateBeat(S1B3);
        },

    }, 
    {
        id: 'tofu',
        response: `I'm feeling a little vegan today, I'll get the tofu stir-fry!`,
        responseFunction: function () {
            console.log('`The stir-fry contains an obscene amount of garlic and your vampire boyfriend becomes violently ill and dies.`')
        },
        vbfDie: true
    }
    ]
};
