
export function findById(someArray, id) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        if (item.id === id) {
            return item;
        }
    }
}

export function hasCompletedChapter(quests, user) {
    for (let i = 0; i < quests.length; i++) {
        const quest = quests[i];
        if (user.completed[quest.id]) {
            return true;
        }
    }

    return false;
}

