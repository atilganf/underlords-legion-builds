
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

heroes = heroes.map(h => {
    for(let i = 1; i < h.length; i++){
        for(let j = 0; j < alli1.length; j++){
            if(alli1[j] == h[i]){
                h[i] = j;
            }
        }
        for(let j = 0; j < alli2.length; j++){
            if(alli2[j] == h[i]){
                h[i] = j + alli1.length;
            }
        }
        for(let j = 0; j < alli3.length; j++){
            if(alli3[j] == h[i]){
                h[i] = j + alli1.length +alli2.length;
            }
        }
    }
    return h;
})
console.log(heroes);