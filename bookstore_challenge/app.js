const storeInventory = [
    {name: "Catcher in the Rye", author: "J.D. Salinger", price: 10.00, genre: "Adult Fiction"},
    {name: "The Wind-Up Bird Chronicles", author: "Haruki Murakami", price: 15.00, genre: "Adult Fiction"},
    {name: "The Unbearable Lightness of Being", author: "Milan Kundera", price: 14.00, genre: "Adult Fiction"},
    {name: "Harry Potter: The Sorcerers Stone", author: "J.K. Rowling", price: 22.00, genre: "Youth Fiction"},
    {name: "In Cold Blood", author: "Truman Capote", price: 14.00, genre: "Non-Fiction"},
    {name: "A Brief History of Time", author: "Stephen Hawking", price: 18.00, genre: "Non-Fiction"},
    {name: "The Emperor of All Maladies", author: "Siddhartha Mukherjee", price: 20.00, genre: "Non-Fiction"},
    {name: "The Structure of Scientific Revolutions", author: "Thomas S. Khun", price: 16.00, genre: "Non-Fiction"},
    {name: "A Wrinkle in Time", author: "Madeleine L Engle", price: 14.00, genre: "Youth Fiction"},
    {name: "The House of the Scorpion", author: "Nancy Farmer", price: 16.00, genre: "Youth Fiction"},
    {name: "Mastering the Art of French Cooking", author: "Julia Child", price: 24.00, genre: "Food/Cooking"},
    {name: "Antifragile", author: "Nassim Nicholas Taleb", price: 20.00, genre: "Philosophy"}
]

const inventroy = storeInventory.map(namePrice =>{
    return `${namePrice.name} is by ${namePrice.author} and is $${namePrice.price}.00` 
})
//console.log(inventroy)

const newFunc =(arr)=>{

    let challTwo = arr.map((cookies) => {
        return `${cookies.name} is by ${cookies.author} and is $${cookies.price}.00`
    })
    return challTwo
}
//console.log(newFunc(storeInventory))

const nonFiction = storeInventory.filter(genreNon =>{
    return genreNon.genre === "Non-Fiction"
})
//console.log(nonFiction)

const nonFictionFunction = (arr) =>{
    let newArr =arr.filter(x =>{
        return x.genre === "Non-Fiction"
    })
    return newArr
}
//console.log(nonFictionFunction(storeInventory))

const challThree =(arr, price)=>{
    const bookFilter = arr.filter(book =>{
        return book.price > price
    }).map(i =>{
        return i.name
    })
    return bookFilter
}
//console.log(challThree(storeInventory, 15.00))

const shoppingCart = []
const addBookToCart =(nameOfBook)=>{
    const books = storeInventory.filter(book =>{
        return book.name === nameOfBook 
    })
    shoppingCart.push(books[0])    
}
addBookToCart("The Structure of Scientific Revolutions")
addBookToCart("The Wind-Up Bird Chronicles")
addBookToCart("Antifragile")
//console.log(shoppingCart)


const cosmetics = shoppingCart.map(cleanUp =>{
    return `Book Name: ${cleanUp.name}, Author: ${cleanUp.author}, Cost: $${cleanUp.price}.00, Genre: ${cleanUp.genre}`
})
console.log(cosmetics)

const addPrice=(arr)=>{
    let bookPrice = 0
    for(let i=0; i<arr.length; i+=1){
        bookPrice += arr[i].price;
    }
    return `$${bookPrice}` 
}
//console.log(addPrice(shoppingCart))

const printPrettyShoppingCart =(arr)=>{
    const books = arr.map(book => {
        return `${book.name} is by ${book.author}`
    })
    return books
}
const myBooks = printPrettyShoppingCart(shoppingCart)

for (let i=0; i<myBooks.length; i+=1){
    //console.log(`Book: ${myBooks[i]}`)
}
console.log(addPrice(shoppingCart))