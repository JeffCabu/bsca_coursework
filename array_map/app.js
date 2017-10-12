const products= ["Apple", "Avocado", "Apricot", "Mango", "Spicy Ham", "Fetta Cheese", "Nutella"]

// console.log(products);

const pluralizer = (productsIn) => {
    for(let i = 0; i < productsIn.length; i += 1){
        productsIn[i] += "s"
    }
    return productsIn
}

console.log(pluralizer(products))