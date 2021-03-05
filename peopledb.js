const faker = require('faker');
const fs = require('fs')

function generateUsers() {

  let users = []

  for (let id=1; id <= 100; id++) {

    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let past = faker.date.past();
    //let age = faker.age();
    let gender = faker.name.gender();
    let word = faker.random.word(1);
    //weight
    //height
    let words = faker.random.words(5);
    let color = faker.commerce.color();
    let streetAddress = faker.address.streetAddress();
    let phoneNumber = faker.phone.phoneNumber();
    let number = faker.random.number(9);
    let number2 = faker.random.number(2);
    let boolean = faker.random.boolean();


    users.push({
        "id": id,
        "first_name": firstName,
        "last_name": lastName,
        "dob": past,
        "age": number2,
        "gender": gender,
        "race": word,
        //weight
        //height
        "eyes": color,
        "hair": color,
        "tattoos": words,
        "address": streetAddress,
        "phoneNumber": phoneNumber,
        "ssn": number,
        "dln": number,
        "gang": boolean
    });
  }

  return { "data": users }
}

let dataObj = generateUsers();

fs.writeFileSync('people.json', JSON.stringify(dataObj, null, '\t'));