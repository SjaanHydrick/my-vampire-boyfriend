const cafeteria = {
    id: 'cafeteria',
    image: '',
    intDialogueOne: `
    My boyfriend is volunteering at the hospital blood drive today so we're going to have a lunch date in the cafeteria.
    He's keto or something so normally I'm the only one who eats. But I really don't mind at all, it's just nice to spend time together.`,
    intDialogueTwo: ``,
    choicePrompt: `What should you have for lunch?`,
    choices: [{
        id: 'meat',
        intDialogueOne: `Wow my boyfriend actually seems like he wants to share this steak with me. How romantic!`,
        choicePrompt: `What do you do?`,
        stepChoices: [{
            id: 'feed',
            intDialogueOne: `I'll give him a little bite...`,
            results: {
                id: 'meatSick',
                intDialogueOne: `Wow, that steak must have not been on his diet, he seemed to get really sick and just got up and left. He's so mysterious!`
                },
            },
            {
            id: 'pushAway',
            intDialogueOne: `I get overwhelmed when he pays this much attention to me, I'll just push him away.`,
            results: ''
        }], 
    },
    {
        id: 'salad',
        intDialogueOne: ``,
        stepChoices: [{

        }]
    }, 
    {
        id: 'tofu',
        intDialogueOne: ``,
        stepChoices: [{

        }]
    }
    ]
},