// Put your code here

console.log("Let's roll some dice, baby!")
console.log("---------------------------")

const roll = (i) => {
    let die = Math.floor(Math.random() * Math.floor(i))
    return die
}

for (let i = 0; i < 10; i++) {
    let die1 = roll(i)
    let die2 = roll(i)

    let message = `${die1} + ${die2} = ${die1 + die2}`

    if (die1 === die2) {
        message += ` DOUBLES!`
    }

    console.log(message)
}
