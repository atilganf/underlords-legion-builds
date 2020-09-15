let heroes = [
    ['Abaddon', 'Fallen', 'Knight'],
    ['Alchemist', 'Brute', 'Rogue', 'Poisoner'],
    ['Anti-Mage', 'Rogue', 'Hunter'],
    ['Axe', 'Brawny', 'Brute'],
    ['Batrider', 'Troll', 'Knight'],
    ['Beastmaster', 'Brawny', 'Hunter', 'Shaman'],
    ['Bounty Hunter', 'Rogue', 'Assassin'],
    ['Bristleback', 'Brawny', 'Savage'],
    ['Chaos Knight', 'Knight', 'Demon'],
    ['Crystal Maiden', 'Human', 'Mage'],
    ['Dazzle', 'Troll', 'Healer'],
    ['Doom', 'Demon', 'Brute'],
    ['Dragon Knight', 'Human', 'Dragon', 'Knight'],
    ['Drow Ranger', 'Heartless', 'Vigilant', 'Hunter'],
    ['Earth Spirit', 'Spirit', 'Warrior'],
    ['Ember Spirit', 'Spirit', 'Assassin', "Swordsman"],
    ['Faceless Void', 'Void', 'Assassin'],
    ['Juggernaut', 'Brawny', 'Swordsman'],
    ['Keeper of the Light', 'Human', 'Mage'],
    ["Kunkka", "Human", "Warrior", "Swordsman"],
    ['Legion Commander', 'Human', 'Champion'],
    ['Lich', 'Fallen', 'Mage'],
    ['Lifestealer', 'Heartless', 'Brute'],
    ['Lina', 'Human', 'Mage'],
    ['Lone Druid', 'Savage', "Shaman", 'Summoner'],
    ['Luna', 'Vigilant', 'Knight'],
    ['Lycan', 'Human', 'Savage', 'Summoner'],
    ['Magnus', 'Savage', "Shaman"],
    ['Medusa', 'Scaled', 'Hunter'],
    ['Meepo', 'Rogue', 'Hunter'],
    ['Mirana', 'Vigilant', 'Hunter'],
    ['Natures Prophet', "Shaman", 'Summoner'],
    ['Omniknight', 'Human', 'Knight', 'Healer'],
    ['Pangolier', 'Savage', 'Swordsman'],
    ['Phantom Assassin', 'Assassin', 'Swordsman'],
    ['Puck', 'Dragon', 'Mage'],
    ['Pudge', 'Heartless', 'Warrior'],
    ['Queen of Pain', 'Demon', 'Assassin', "Poisoner"],
    ['Rubic', 'Mage', 'Magus'],
    ['Shadow Demon', 'Heartless', 'Demon'],
    ['Shadow Shaman', 'Troll', 'Summoner'],
    ['Slardar', 'Scaled', 'Warrior'],
    ['Slark', 'Scaled', 'Assassin'],
    ['Snapfire', 'Dragon', 'Brawny'],
    ['Spectre', 'Void', 'Demon'],
    ['Spirit Breaker', 'Savage', 'Brute'],
    ['Storm Spirit', 'Spirit', 'Mage'],
    ['Sven', 'Human', 'Swordsman', 'Knight'],
    ['Templar Assassin', 'Vigilant', 'Void', 'Assassin'],
    ['Terrorblade', 'Demon', 'Hunter', "Fallen"],
    ['Tidehunter', 'Scaled', 'Warrior'],
    ['Treant Protector', "Shaman", 'Brute'],
    ['Troll Warlord', 'Troll', 'Warrior'],
    ['Tusk', 'Savage', 'Warrior'],
    ['Vengeful Spirit', 'Fallen', 'Heartless'],
    ['Venomancer', 'Summoner', 'Scaled', "Poisoner"],
    ['Viper', 'Dragon', 'Poisoner'],
    ['Void Spirit', 'Spirit', 'Void'],
    ['Windranger', 'Vigilant', 'Hunter'],
    ['Wraith King', 'Fallen', 'Swordsman']
]

let alli1 = ["Deadeye", "Demon"];
let alli2 = ["Blood-Bound", "Brawny", "Brute", "Dragon", "Druid", "Healer", "Heartless", "Human", "Insect", "Knight",
    "Primordial", "Savage", "Scaled", "Summoner", "Troll", "Vigilant", "Warlock"];
let alli3 = ["Assassin", "Hunter", "Mage", "Spirit", "Void", "Warrior"];
let allAlli = [...alli1, ...alli2, ...alli3, "Champion"];

res = teams

res = res.map(t => t.slice(1));
res = res.map(t => { t = t.map(rh => heroes.find(h => h[0] == rh)); return t })


function tierTotalLess(arr, tierTotal) {
    return arr.filter(t => {
        let n = 0;
        t.map(h => n += h[h.length - 1]);
        if (n < tierTotal)
            return t
    })
}

function checkBuilds(arr, allience, number) { 
    arr = arr.filter(t => {
        let n = 0;
        t.map(h => h.slice(1).map(e => {
            if (e == allience) { n++ }
        }));
        if (number == 0) {
            if (n < 2)
                return t
        } else if (n > number - 1)
            return t
    })
    // arr = clearTeamList(arr);
    return arr;
}

function checkEarlyBuilds(arr, alliCount){ 
    arr = arr.map(t => {
        return t.filter( h => h[h.length - 1] < 4)
    })
    arr = arr.map(t => {

    })
    return arr;
}

function log(arr) {
    console.log(arr.map(t => t.map(h => h[0])));
}


function bestofSix(arr) {
    return arr.map(t => {
        let filtTeam = t.filter(h => h[h.length - 1] < 4)
        let sixTeams = [];
        if (filtTeam.length > 5) {
            //TODO
        }
        return filtTeam;
    })
}
function checkHero(arr, hero) {
    hero = heroes.find(h => h[0] == hero);
    return arr.filter(t => t.includes(hero)
    )
}
function multiArrayNameSort(arr) {
    return arr.sort((a, b) => {
        if (a[0] === b[0]) {
            return 0;
        } else {
            return (a[0] < b[0]) ? -1 : 1;
        }
    });
}
function heroesToNumberArr() {
    let res = [...heroes];
    for (let i = 0; i < heroes.length; i++) {
        res[i].pop();
        for (let j = 0; j < allAlli.length; j++) {
            for (let k = 1; k < res[i].length; k++) {
                if (res[i][k] == allAlli[j]) {
                    res[i][k] = j;
                }
            }
        }
    }
    return res;
}
function clearTeamList(arr) {
    arr = arr.map(t => {
        return t.map(h => {
            h = [h[0], h[h.length - 1]];
            return h;
        })
    })
    arr = arr.map(t => {
        return t.sort(function (a, b) { 
            return a[1] - b[1] 
        })
    })
    return arr;
}

//underlords.app/build otomatik build oluşturma kodu
if (false) {
    let arr =
        ["Legion Commander", "Axe", "Shadow Demon", "Venomancer", "Beastmaster", "Chaos Knight", "Lifestealer", "Bristleback", "Sven", "Disruptor"]
    let spans = document.querySelectorAll("span")
    let fn = 0;
    for (let i = 0; i < spans.length; i++) {
        for (let j = fn; j < arr.length; j++) {
            if (spans[i].innerText == arr[j]) {
                spans[i].click()
                fn++;
            }
        }
    }
}
