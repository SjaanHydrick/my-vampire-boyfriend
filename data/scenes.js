const cafeteria = {
    id: 'cafeteria',
    image: '',
    dialogueBox: `
    My boyfriend is volunteering at the hospital blood drive today so we're going to have a lunch date in the cafeteria.
    He's keto or something so normally I'm the only one who eats. But I really don't mind at all, it's just nice to spend time together.
    What should I have for lunch?`,
    choices: [{
        id: 'meat',
        responseOne: `A steak, rare please!`,
        result: `Wow he seems like he might want to share this with me, how romantic! What should I do?`,
        stepChoices: [{
            id: 'feed',
            responseOne: `I'll give him a little bite...`,
            result: {
                id: 'meatSick',
                intDialogueOne: `Wow, that steak must have not been on his diet, he seemed to get really sick and just got up and left. He's so mysterious!`,
                result: ''
            },
        },
        {
            id: 'pushAway',
            responseTwo: `I get overwhelmed when he pays this much attention to me, I'll just push him away.`,
            result: ''
        }], 
    },
    {
        id: 'salad',
        responseTwo: `I'll go with salad, my boyfriend says he prefers vegetarians.`,
        stepChoices: [{

        }]
    }, 
    {
        id: 'tofu',
        responseThree: `I'm feeling a little vegan today, I'll get the tofu stirfry!`,
        results: ''
    }
    ]
};