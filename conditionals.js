
let firstName = "sebastian"
//let firstName = null
let lastName = "salazar"

if (firstName) {
    console.log(`Hello world, ${firstName}`)
} else if (lastName) {
    console.log("my last name is " + lastName)
} else {
    console.log("Hello world, stranger")
}

let fullName = firstName && lastName ? ` my full name is ${firstName} ${lastName}` : "you are nameless"
console.log(fullName)

const today = "tuesday"

let result = today === "monday"? "Sebastian is getting paid" : "Sebastian is broke"
console.log(result)

//swtich

const fruit = ""

switch(fruit){
    case"orange":
    console.log("this is an orange")
    break
    case "apple":
        console.log("this is my apple")
        break
        default:
            console.log("we are out of fruits")
            break
}

function sum(a, b){
    const result = a + b 
    return result
}
let addition = sum(2, 7)
console.log("the sum is", addition)
