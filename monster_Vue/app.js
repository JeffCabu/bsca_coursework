function Monster(name, diet, img){ //Blueprint
    this.name = name
    this.diet = diet
    this.img = img
}



const monsters = []
//console.log(monsters)


const Jason = new Monster("Jason Voorhees", ["Monster Energy"], "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Jo_OgF4rJaizQPPbyIqUvFJQvlKgx2E3coPBoZuS80sKTWyl-g")
const Cookie = new Monster("Cookie Monster", ["Cookies!!!"], "https://i.pinimg.com/564x/fd/83/54/fd83548a16e1473ea0c8eccf30c966a7.jpg")
const Cthulhu = new Monster("Cthulhu", ["Life essence"], "https://sannywannatell.files.wordpress.com/2014/03/cthulhu_rising_by_somniturne1.jpg")
const Cerberus = new Monster("Cerberus", ["Those who try to leave!"], "https://i.pinimg.com/originals/ab/6d/46/ab6d464d18bf6d8b404239d665777fb0.jpg")
const Titan = new Monster("Titan", ["All your loved ones"], "https://geekorner.files.wordpress.com/2015/12/attack-on-titan-shingeki-no-kyojin-anime-female-titan-about-to-eat-eren-jeager.jpg")

monsters.push(Jason, Cookie, Cthulhu, Cerberus, Titan)
//console.log(monsters)

const monsterVue = {
    el: "#monster-app",
    data: {
        title: "Monster Mash",
        monsters: monsters,    
        newMonsterName: "",
        newMonsterDiet: "",
        newMonsterImg: "",    
    },
    methods:{
        submitMonster: function(){
            const name = this.newMonsterName
            const diet = this.newMonsterDiet.split(",")
            const image= this.newMonsterImg
            const monster = new Monster(name, diet, image)

            this.monsters.push(monster)
            
            this.newMonsterName = ""
            this.newMonsterImg = ""
            this.newMonsterDiet = ""
        }
    },
}
new Vue(monsterVue);


