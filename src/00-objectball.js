function gameObject (){
    return {
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
}

function numPointsScored(name) {
    const obj = gameObject()
    for(const gameKey in obj){
        const teamObj = obj[gameKey]
        const playerObj = teamObj.players
        for(const playerKey in playerObj){
            if(playerKey === name){
                return playerObj[playerKey].points
            }
        }
    }
}

function shoeSize(name){
    const obj = gameObject()
    for(const gameKey in obj){
        const teamObj = obj[gameKey]
        const playerObj = teamObj.players
        for(const playerKey in playerObj){
            if(playerKey === name){
                return playerObj[playerKey].shoe
            }
        }
    }
}

function teamColors(name){
    const obj = gameObject()
    for(const gameKey in obj){
        const teams = obj[gameKey]
        if(teams.teamName === name){
            return teams.colors
        }
    }
}

function teamNames(){
    const obj = gameObject()
    const teamNames = []
    for(const key in obj){
        teams = obj[key]
        teamNames.push(teams.teamName)
    }
    return teamNames
}

function playerNumbers(name){
    const obj = gameObject()
    const teamJerseys = []
    for(const gameKey in obj){
        const teamObj = obj[gameKey]
        const team = teamObj.teamName //have the teams here 
        // loops through the team provided, and grab the jersey numbers of the players and push them to the array
        if(team ===  name){
            const playerObj = teamObj.players //Has all the players of the inputted team name
            for(const playerKey in playerObj){
                teamJerseys.push(playerObj[playerKey].number)
            }
        }
    }
    return teamJerseys
}   

function playerStats(name){
    const obj = gameObject()
    for(const gameKey in obj){
        const teamObj = obj[gameKey]
        const playerObj = teamObj.players
        for(const playerKey in playerObj){
            if(playerKey === name){
                return Object.assign(playerObj[playerKey])
            }
        }
    } 
}

function bigShoeRebounds(){
    const obj = gameObject()
    let rebounds = 0
    let currentShoeSize = 0
    for(let gameKey in obj){
        const teamObj = obj[gameKey]
        const playerObj = teamObj.players
        for(const playerKey in playerObj){
            const playerShoe = playerObj[playerKey].shoe
            if(playerShoe > currentShoeSize){
                currentShoeSize = playerShoe
                rebounds = playerObj[playerKey].rebounds
            }
        } 
    }
    return rebounds
}






console.log(numPointsScored('Jason Terry'))
console.log('his shoe size is ' + shoeSize('Brendan Haywood'))
const test = teamColors('Brooklyn Nets')

const names = teamNames()
const playerNums = playerNumbers('Brooklyn Nets')

console.log(playerStats('Brendan Haywood'))

const yes = bigShoeRebounds()

