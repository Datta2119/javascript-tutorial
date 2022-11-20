// ## Method: A method is a property containing a function definition

// Objects
const person = {
    name: 'Bishway',
    shirt: 'checkered'
}

// console.log(person['name'])
person['phone'] = '01681714609'
// console.log(person)



// ES6 arrow function
// This function has 2 arguments named @name and @shirt
// Inside the function there is a object named @person
// After that we use template literals

const introduction = (name, shirt) => {
    const person = {
        name: name,
        shirt: shirt,
        assets: 10000,
        liability: 5000,
        netWorth: function () {
            return this.assets - this.liability
        }
    }

    const intro = `Hi, my name is ${person.name} and the color of shirt is ${person.shirt}. He's net worth is $${person.netWorth()} USD`

    return intro
}

console.log(introduction('Bishway', 'black'))