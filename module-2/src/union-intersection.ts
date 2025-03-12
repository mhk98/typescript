type NoobDeveloper = {
    name: string
}

// & means intersection type
type JuniorDeveloper = NoobDeveloper & {
    expertise: string,
    experience: number
}


// & means union type
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: "Monzu Mia",
    expertise: "Javascript",
    experience: 1
}

enum Level {
    Junior= "junior",
    Mid= "mid",
    Senior= "senior"
}

type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number,
    level: Level
}

const developer: NextLevelDeveloper = {
    name: "Next Bhai",
    expertise: "Typescript",
    experience:2,
    leadershipExperience: 1,
    level: Level.Junior
}