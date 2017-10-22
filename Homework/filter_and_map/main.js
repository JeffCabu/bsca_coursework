const names =["David Bowie", "The Artist Formerly Known as Prince", "John Lennon", "Jimmi Hendrix", "Robert Plant",
             "Paul McCartney", "Gene Simmons", "Stevie Nicks", "Florence Welch", "Sonny and Cher"
];
//console.log(names[0])


const mappedNames = names.map(name => {
    return {name: name};
})
//console.log(mappedNames)


const firstNamesmap = names.map(name => {
    return name.split(" ")[0];
})
//console.log(firstNamesmap)

///////------------------OR-------------------/////////////////////
// const firstNamesmap = names.map(name => name.split(" ")[0])  ///
// console.log(firstNamesmap)                                   ///
///////---------------------------------------/////////////////////


const filterName = names.filter(name => {
    return name[0] === "J"
})
//console.log(filterName);

///////------------------OR-------------------/////////////////
// const filterName = name.filter(name => name[0] === "J");  //
// console.log(filterName);                                  //
///////---------------------------------------/////////////////


const firstNameJ = names.filter(name =>{
    return name[0] === "J"
}).map(j =>{
    return j.split(' ')[0]
})
//console.log(firstNameJ)

// ///////------------------OR-------------------/////////////////////////////////////////
// const firstNameJ = names.filter(name => name[0] === "J").map(j =>j.split(" ")[0])   ///
// console.log(firstNameJ)                                                             ///
// ///////---------------------------------------/////////////////////////////////////////


let shapes = [
    {name: "Square", color: "Green", sides: 4},
    {name: "Triangle", color: "Green", sides: 3},
    {name: "Rectangle", color: "Red", sides: 4},
    {name: "Pentagon", color: "Green", sides: 5},
    {name: "Hexagon", color: "Red", sides: 6},
]

const gettingShapesMapped = shapes.map(name => name.name)
//console.log(gettingShapesMapped)


const shapesFilter = shapes.filter(green => green.color === "Green")
//console.log(shapesFilter)


const lThn4Sides = shapes.filter(shape => shape.sides < 4)
//console.log(lThn4Sides)