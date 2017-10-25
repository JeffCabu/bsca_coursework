function LeagueChampion(name, role, difficulty, img){
    this.name = name
    this.role = role
    this.difficulty = difficulty
    this.img = img
}


const Orianna = new LeagueChampion("Orianna",["Mage, Support"], 3, "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Orianna_0.jpg");
const Jhin = new LeagueChampion("Jhin", ["Assassin, Marksman"], 2, "http://qtoptens.com/wp-content/uploads/2017/05/Jhin_Splash_2.jpg");
const Jayce = new LeagueChampion("Jayce", ["Fighter, Marksman"], 2, "https://vignette.wikia.nocookie.net/leagueoflegends/images/8/89/Jayce_OriginalSkin.jpg/revision/latest?cb=20170615214603" );
const Leona = new LeagueChampion("Leona", ["Support, Tank"], 1, "https://vignette.wikia.nocookie.net/leagueoflegends/images/3/3e/Leona_OriginalSkin.jpg/revision/latest?cb=20170621202639");
const Warwick = new LeagueChampion("Warwick", ["Fighter, Tank"], 1, "https://vignette.wikia.nocookie.net/leagueoflegends/images/6/6c/Warwick_OriginalSkin.jpg/revision/latest?cb=20170110203842");
//////////------VS------//////////
const Ahri = new LeagueChampion("Ahri", ["Assassin, Mage"], 2, "https://vignette.wikia.nocookie.net/leagueoflegends/images/3/33/Ahri_OriginalSkin.jpg/revision/latest?cb=20170615201440");
const Illaoi = new LeagueChampion("Illaoi", ["Fighter, Tank"], 2, "https://vignette.wikia.nocookie.net/leagueoflegends/images/0/0b/Illaoi_OriginalSkin.jpg/revision/latest?cb=20170616230710");
const Alistar = new LeagueChampion("Alistar", ["Support", "Tank"], 1, "https://vignette.wikia.nocookie.net/leagueoflegends/images/5/54/Alistar_OriginalSkin.jpg/revision/latest?cb=20170615212010");
const Maokai = new LeagueChampion("Maokai", ["Mage, Tank"], 1, "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Maokai_0.jpg");
const Ashe = new LeagueChampion("Ashe", ["Support, Marksman"], 1, "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c0/Ashe_OriginalSkin.jpg/revision/latest?cb=20170616000317");

const champions = []
const championsTwo = []

champions.push(Orianna, Jhin, Jayce, Leona, Warwick)
championsTwo.push(Ahri, Illaoi, Alistar, Maokai, Ashe)

console.log(champions)

const leagueChampionVue = {
    el:"#league-app",
    data: {
        title: "Legends of League",
        champions: champions,
        championsTwo: championsTwo,

    },
}
new Vue(leagueChampionVue);


