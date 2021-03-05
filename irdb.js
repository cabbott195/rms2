const faker = require('faker');
const fs = require('fs')

function generateUsers() {

  let users = []

  for (let id=1; id <= 100; id++) {

    let streetAddress = faker.address.streetAddress();
    let words = faker.random.words(3);
    let word = faker.random.word(1);

    users.push({
        "id": id,
        "location": streetAddress,
        "locationName": words,
        "irType": word
    });
  }

  return { "data": users }
}

let dataObj = generateUsers();

fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));