import { renderDialogueBox } from '../utils/render-dialogue-box.js';

export const cafeteria = {
    id: 'cafeteria',
    image: 'castle.jpg',
    char: 'Vampire_BF.png',
    dialogueBox: `
    My boyfriend is volunteering at the hospital blood drive today, so we're going to have a lunch date in the cafeteria!
    He's keto or something so normally I'm the only one who eats. But I really don't mind at all, it's just nice to spend time together!
    What should I have for lunch?`,
    choices: [{
        id: 'meat',
        response: `A steak, rare please!`,
        dialogueBox: `Wow he seems like he might want to share this with me, how romantic! What should I do?`,
        responseFunction: function() {
            renderDialogueBox(this.dialogueBox);
        },
        stepChoices: [{
            id: 'feed',
            responseOne: `I'll give him a little bite...`,
            result: {
                id: 'meatSick',
                dialogueBox: `Wow, that steak must have not been on his diet, he seemed to get really sick and just got up and left. He's so mysterious!`,
                nextScene: ''
            },
        },
        {
            id: 'pushAway',
            responseTwo: `I get overwhelmed when he pays this much attention to me, I'll just push him away!`,
            nextScene: ''
        }], 
    },
    {
        id: 'salad',
        response: `I'll go with salad, my boyfriend prefers vegetarians.`,
        dialogueBox: `OMG he's leaning closer to my neck!`,
        responseFunction: function() {
            renderDialogueBox(this.dialogueBox);
        },
        stepChoices: [{
            id: 'letHim',
            responseOne: `I'll let him...`,
            result: {
                id: 'youDie',
                dialogueBox: `Your vampire boyfriend leans in...to bite and kill you. You're dead.`,
                youDie: true
            },
        },
        {
            id: 'pushAway',
            responseTwo: `I get overwhelmed when he pays this much attention to me, I'll just push him away.`,
            nextScene: ''
        }]
    }, 
    {
        id: 'tofu',
        response: `I'm feeling a little vegan today, I'll get the tofu stir-fry!`,
        dialogueBox: `The stir-fry contains an obscene amount of garlic and your vampire boyfriend becomes violently ill and dies.`,
        vbfDie: true
    }
    ]
};