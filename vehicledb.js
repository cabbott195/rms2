const faker = require('faker');
const fs = require('fs')

function generateUsers() {

  let users = []

  for (let id=1; id <= 100; id++) {

    let vin = faker.vehicle.vin();
    let number = faker.random.number(4);
    let manufacturer = faker.vehicle.manufacturer();
    let model = faker.vehicle.model();
    let color = faker.commerce.color();
    let words = faker.random.words(10);

    users.push({
        "id": id,
        "vehicle": vin,
        "year": number,
        "make": manufacturer,
        "model": model,
        "color": color,
        "otherInfo": words
    });
  }

  return { "data": users }
}

let dataObj = generateUsers();

fs.writeFileSync('vehicle.json', JSON.stringify(dataObj, null, '\t'));