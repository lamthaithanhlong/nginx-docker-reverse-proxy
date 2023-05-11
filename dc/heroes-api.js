exports.gerDcHeroes = (req, res) => {
  const heroes = require('./heroes.json');
  // comment
  let heroesMatch = heroes.filter((hero)=>{
      if(hero.publisher == "DC Comics"){
          return hero;
      };
  })
  res.send(heroesMatch);
}
