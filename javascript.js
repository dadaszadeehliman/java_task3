let persons = [
    {
        name: "Mike",
        age: 45,
        gender: "male"
    }, {
        name: "Madeline",
        age: 12,
        gender: "female"
    }, {
        name: "Cheryl",
        age: 45,
        gender: "female"
    }, {
        name: "Sam",
        age: 12,
        gender: "male"
    }, {
        name: "Suzy",
        age: 4,
        gender: "female"
    }
]
let Geden = [];
let Getmiyen = [];

persons.forEach(person => {
    if (person.age >= 18) {
        Geden.push(person);
    } else if (person.age < 18) {
        Getmiyen.push(person);
    }
});
if (Geden.length > 0) {
    Geden.forEach(person => {
        console.log(person.name + " kinoya gede biler!");
    });
    if (Getmiyen.length > 0) {
        Getmiyen.forEach(person => {
            console.log(person.name + " kinoya gede bilmez!");
        });
    }
}else{
    console.log("Heç kim kinoya gede bilmez!");
}