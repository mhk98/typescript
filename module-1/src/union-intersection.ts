type NoobDeveloper = {
    name: string
}

// type JuniorDeveloper = {
//     name: string,
//     expertise: string,
//     experince: number,
// }

type JuniorDeveloper = NoobDeveloper & {
    expertise: string;
    experience: number;
}

type NextLevelDeveloper = JuniorDeveloper & {
    leaderShipExperience: number,
    level: "Junior" | "mid" | "senior"
}

//intersection type (&)   unnion type(|)
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: "Kabir",
    expertise: "Javascript",
    experience:1,
}


const developer: NextLevelDeveloper = {
    name: "Next Bhai",
    expertise: "Typescript",
    experience: 2,
    leaderShipExperience:1,
    level: "Junior"
}