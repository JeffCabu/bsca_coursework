function MonsterConstructor(name, diet, img){ //Blueprint
    this.name = name
    this.diet = diet
    this.img = img
}

const monsters = []
//console.log(monsters)

const Jason = new MonsterConstructor("Jason Voorhees", ["Monster Energy"], "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Jo_OgF4rJaizQPPbyIqUvFJQvlKgx2E3coPBoZuS80sKTWyl-g")
const Cookie = new MonsterConstructor("Cookie Monster", ["Cookies!!!"], "https://i.pinimg.com/564x/fd/83/54/fd83548a16e1473ea0c8eccf30c966a7.jpg")
const Cthulhu = new MonsterConstructor("Cthulhu", ["Life essence"], "https://sannywannatell.files.wordpress.com/2014/03/cthulhu_rising_by_somniturne1.jpg")
const Cerberus = new MonsterConstructor("Cerberus", ["Those who try to leave!"], "https://i.pinimg.com/originals/ab/6d/46/ab6d464d18bf6d8b404239d665777fb0.jpg")
const Titan = new MonsterConstructor("Titan", ["All your loved ones"], "https://geekorner.files.wordpress.com/2015/12/attack-on-titan-shingeki-no-kyojin-anime-female-titan-about-to-eat-eren-jeager.jpg")
console.log(Jason)
console.log(Cookie)


// const =()=>{

// }