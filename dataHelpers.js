var faker = require('faker');

const generateImages = (number) => {
    const images = [];
    while (number !== 0) {
        const value = faker.image.image();
        images.push(value);
        number--;
    }
    return images;
};

//console.log(generateImages(10))


const generateDate = () => {
    return faker.date.future();
};


const generateParagraphs = (number) => {
    return faker.lorem.paragraphs(number);
};


const generatePersonsData = (number) => {
    const persons = [];
    while (number >= 0) {
        persons.push({
            id: number,
            name: faker.name.firstName(),
            description: faker.lorem.paragraphs(2),
            picture: faker.image.avatar(),
            country: faker.address.country(),
            joining_date: faker.date.future(),
        });
        number--;
    }
    return persons;
};

module.exports = {
    generateImages,
    generateDate,
    generateDate,
    generateParagraphs,
    generatePersonsData
}