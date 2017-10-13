const products= ["Apple", "Avocado", "Apricot", "Mango", "Spicy Ham", "Fetta Cheese", "Nutella"]

// console.log(products);

const pluralizer = (productsIn) => {
    for(let i = 0; i < productsIn.length; i += 1){
        productsIn[i] += "s"
    }
    return productsIn
}

//console.log(pluralizer(products))


const pluralProducts = products.map(product => product + "s")

//console.log(pluralProducts)


//// const objectProducts = pluralProducts.map(product => {
////     const newProduct = { name: product} 
////     return newProduct
//// })

//console.log(objectProducts)

const numbers = [1,2,3,4,5,6,7,8,9];

let doublesArray = []

const printNumbers =(arr)=>{
    for(let i=0; i<arr.length; i+=1){
        doublesArray.push(arr[i] * 2)
    }
    return doublesArray
}
// console.log(printNumbers(numbers));

// _________ARRAY.map(function)_________
// const printNumbersMap = numbers.map(function(sfda){
//     return sfda * 2
// })

// console.log(printNumbersMap)

// const printNumbersMap = numbers.map((number) => {
//     return number * 2
// })
// console.log(printNumbersMap)

const printNumbersMap = numbers.map(number => number * 2)

//console.log(printNumbersMap)

const numbFunc = ( arr ) => {

    let newArray = []
    
    for (let i=0; i<arr.length; i+=1){        
         newArray.push({ number: arr[i] * 2 });
    }
    return newArray
}

//console.log(numbFunc(numbers));

const numbFuncMap = numbers.map(n => {
    return {number: n * 2}
})

//console.log(numbFuncMap)


const  numbsGreaterThanFive = (arr) => {
    let greaterThanFive = []

    for (let i=0; i<arr.length; i+=1){

        if(arr[i] > 5 && arr[i] < 9){
            greaterThanFive.push({ number: arr[i]})
        }
    }
    return greaterThanFive
}
//console.log(numbsGreaterThanFive(numbers))

// const numbsGreaterThanFiveFilter = numbers.filter( num => {
//     return num > 5 && num < 9
// })
//console.log(numbsGreaterThanFiveFilter)

// const numbsGreaterThanFiveFilter = numbers.filter( num => {
//     return num > 5 && num < 9
// })
//console.log(numbsGreaterThanFiveFilter)

// "filter" returns arrays
const mapAndFilterNumbers = numbers.filter( num => {
    return num < 4
}).map(i => {
    return {number: i}
})
console.log(mapAndFilterNumbers)