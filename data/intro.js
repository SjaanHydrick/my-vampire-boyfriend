export const intro = {
    id: 'intro',
    dialogueBox: [`Omg he's leaning closer to my neck`],
    buttonChoice: "nav",
    choices: [
        {
            id: 'youDie',
            response: `I'll let him...`,
            result: {
                dead: "player",
                resultText: 'He bit me and I died' 
            },
            responseFunction: function() {

                gameOverYouDied();

                gameOver(this.result);

            }
        },
        {
            id: 'pushAway',
            response: `I get overwhelmed when he pays this much attention to me, I'll just push him away.`,
            responseFunction: function() {
                updateScene(S2B1);
            }
        }]
};