//const naming ={} is object literal




const tvCharacterOne = {
                    name:"Rick Sanchez", 
                    show: "Rick and Morty",
                    rating: 9,
                    }

const tvCharacterTwo ={
                    name: "James Howlet",
                    show: "X-men",
                    rating: 10,
                    }

const tvCharacterThree ={
                    name: "Rocko",
                    show: "Rocko's modern life",
                    rating: 9,
                    }

function tvCharacter(name, show, rating){
    this.name = name
    this.show = show
    this.rating = rating
}
const RickSanchez = new tvCharacter("Morty Smith", "Rick and Morty", 9)
//console.log(RickSanchez)





///////////////////////////////////////////////////////////////////////
function car(make, model, year){
    this.make = make
    this.model = model
    this.year = year
}

const carFactory = new car("Tesla", "Roadster", 2008)
const carFactory2 = new car("Aston Marton", "Vulcan", 2015)
const carFactory3 = new car("Ford", "Model T", 1908)

//console.log(carFactory, carFactory2, carFactory3)


/////////____________________/////////
const createCar = () =>{
    let result = []
    for(let i=0; i<10; i+=1){
        const carObject = {
            make: "VW",
            model: "Rabbit",
            year: 2008,
        }
        result.push(carObject)
    }
    return result
}
//console.log(createCar())


/////////____________________/////////
const createCarTwo =()=>{
    let result = []
    for(let i=0; i<10; i+=1){
        result.push(new car("Ford", "Model T", 1908))
    }
    return result
}
//console.log(createCarTwo())
//////////////////////////////////////////////////////////////////////////////////


function Recipe(ingredients, instructions, time){
    this.ingredients = ingredients
    this.instructions = instructions
    this.time = time
}

const newRecipe = (numRecipes) => {
    let result = []
    for(let i=0; i<numRecipes; i+=1){
        result.push(new Recipe({},[], 0))
    }
    return result
}
console.log(newRecipe(50))