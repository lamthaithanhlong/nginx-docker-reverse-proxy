exports.gerMarvelHeroes = (req, res) => {
    const heroes = require('./heroes.json');
    let heroesMatch = heroes.filter((hero)=>{
        if(hero.publisher == "Marvel Comics"){
            return hero;
        };
    })
    res.send(heroesMatch);
}
