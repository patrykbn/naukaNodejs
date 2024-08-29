const os = require('os');
console.log('Platform: ', os.platform());
console.log('Arch: ', os.arch());
const userInfo = os.userInfo();
const login = userInfo.username
console.log('Login: ', login);

const fs = require('node:fs/promises');
const { stringify } = require('querystring');

const genders = ['M', 'F'];
const maleNames = [
    'Jakub', 'Michał', 'Adam', 'Kacper', 'Jan', 'Szymon',
    'Tomasz', 'Łukasz', 'Wojciech', 'Paweł'
];
const femaleNames = [
    'Anna', 'Julia', 'Zuzanna', 'Katarzyna', 'Maria', 'Natalia',
    'Oliwia', 'Agnieszka', 'Magda', 'Amelia'
];
const lastNames = [
    'Nowak', 'Kowalski', 'Wiśniewski', 'Wójcik', 'Kowalczyk',
    'Kamiński', 'Lewandowski', 'Zieliński', 'Szymański', 'Woźniak'
];

function randChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const people = [];

for (let i = 0; i < 20; i++) {
    const gender = randChoice(genders);
    const firstName = gender === 'M' ? randChoice(maleNames) : randChoice(femaleNames);
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const age = Math.floor(Math.random() * (78-18+1)) + 18;
    const birthYear = String(2024 - age)
    const email = lastName + '.' + firstName + birthYear + '@gmail.com'

    const person = {
        gender: gender,
        firstName: firstName,
        lastName: lastName,
        age: age,
        email: email
    };

    people.push(person);
}

const peopleJSON = JSON.stringify(people, null, 2);

fs.writeFile('people.json', peopleJSON)
    .then(() => {
        console.log('File written successfully');
    })
    .catch((error) => {
        console.error('Error writing file:', error)
    });