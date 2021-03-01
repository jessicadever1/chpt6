// Put your code here

let namesArray = [
    "Nashville",
    "Hong Kong",
    "The back yard",
    "Earth",
    "London",
    "The mall",
    "Ryman Auditorium",
    "The Great Wall of China"
]

console.log("These are the names in the namesArray")

namesArray.forEach(name => console.log(name))

console.log(" ")

let theNamesArray = namesArray.filter(name => name.startsWith("The"))
console.log("'The' Place Names")
theNamesArray.forEach(name => console.log(name))