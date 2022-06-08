const faker = require("faker");
const fs = require("fs");
/* Generate Images */
const generateImages = (number) => {
  const images = [];
  while (number !== 0) {
    const value = faker.name.findName();
    images.push(value);
    number--;
  }
  return images;
};

const generatePersonsData = (number) => {
  const persons = [];
  while (number >= 0) {
    persons.push({
      id: number,
      name: faker.name.findName(),
      description: faker.lorem.paragraphs(2),
      picture: faker.image.avatar(),
      country: faker.address.country(),
      joining_date: faker.date.future(),
    });
    number--;
  }
  return persons;
};

const generateProductsData = (number) => {
  const product = [];
  while (number >= 0) {
    product.push({
      id: number,
      name: faker.commerce.productName(),
      description: faker.lorem.paragraphs(2),
      picture: faker.image.fashion(),
      price: faker.commerce.price(),
      quantity: faker.random.number(),
      category: faker.commerce.department(),
      subcategory: faker.commerce.department(),
      brand: faker.commerce.department(),
      created_at: faker.date.past(),
      updated_at: faker.date.past(),
    });
    number--;
  }
  return product;
};
const product = generateProductsData(10);
console.log(product);

fs.writeFileSync("./db.json", JSON.stringify({ products: product }));
