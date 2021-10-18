const gameObject = (function(){
    stats = {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            } 
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                'Bed Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            } 
        }
    }
    return stats
})

const numPointsScored= (name => {
    const obj = gameObject()
    let pointsScored
    for(let firstLvl in obj){
        const secondLvl = obj[firstLvl]
        for(let test in secondLvl){
            const thirdLvl = secondLvl[test]
            for(let forthLvl in thirdLvl){
                const final = thirdLvl[forthLvl]
                if(forthLvl === name){
                    pointsScored = final.points
                }
            }
        }
    }
    return pointsScored
})

const shoeSize= (name => {
    const obj = gameObject()
    let shoeSize
    for(let firstLvl in obj){
        const secondLvl = obj[firstLvl]
        for(let test in secondLvl){
            const thirdLvl = secondLvl[test]
            for(let forthLvl in thirdLvl){
                const final = thirdLvl[forthLvl]
                if(forthLvl === name){
                    shoeSize = final.shoe
                }
            }
        }
    }
    return shoeSize
})

const teamColors = (name => {
    const obj = gameObject()
    let teamColors = []
    for(let key in obj){
        const secondKey = obj[key]
        if(secondKey.teamName === name){
            teamColors = secondKey.colors
        }
    }
    return teamColors
})

const teamNames = (() => {
    const obj = gameObject()
    let teamNames = []
    for(let key in obj){
        secondKey = obj[key]
        teamNames.push(secondKey.teamName)
    }
    return teamNames
})

const playerNumbers = (name => {
    const obj = gameObject()
    let teamJerseys = []
    for(let firstLvl in obj){
        const secondLvl = obj[firstLvl]
        for(let test in secondLvl){
            const thirdLvl = secondLvl[test]
            for(let forthLvl in thirdLvl){
                const final = thirdLvl[forthLvl]
                if(secondLvl.teamName === name && final.number){
                    teamJerseys.push(final.number)
                }
            }
        }
    }   

    return teamJerseys
})

const playerStats = (name => {
    const obj = gameObject()
    let player = {}
    for(let firstLvl in obj){
        const secondLvl = obj[firstLvl]
        for(let test in secondLvl){
            const thirdLvl = secondLvl[test]
            for(let forthLvl in thirdLvl){
                const final = thirdLvl[forthLvl]
                if(forthLvl === name){
                    player = Object.assign(final)
                }
            }
        }
    } 

    return player
})

const bigShoeRebounds = (() => {
    const obj = gameObject()
    let rebounds = 0
    let shoeSize = 1
    for(let firstLvl in obj){
        const secondLvl = obj[firstLvl]
        for(let test in secondLvl){
            const thirdLvl = secondLvl[test]
            for(let forthLvl in thirdLvl){
                const final = thirdLvl[forthLvl]
                const int = final.shoe
                if(int > shoeSize){
                    shoeSize = int
                    rebounds = final.rebounds
                }
            }
        }
    } 

    return rebounds
})






console.log(numPointsScored('Jason Terry'))
console.log('his shoe size is ' + shoeSize('Brendan Haywood'))
const test = teamColors('Brooklyn Nets')

const names = teamNames()
const playerNums = playerNumbers('Brooklyn Nets')

console.log(playerStats('Brendan Haywood'))

const yes = bigShoeRebounds()

