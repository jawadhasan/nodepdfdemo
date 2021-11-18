const PDFDocument = require('pdfkit');
var faker = require('faker');
const fs = require('fs');


const doc = new PDFDocument();

doc.pipe(fs.createWriteStream('output.pdf'));

const randomName = faker.name.findName();

doc.text(randomName, { align: 'right' });
doc.text(faker.address.streetAddress(), { align: 'right' });
doc.text(faker.address.secondaryAddress(), { align: 'right' });
doc.text(faker.address.zipCode() + ' ' + faker.address.city(), { align: 'right' });
doc.moveDown();

doc.text('Dear ' + randomName + ',');
doc.moveDown();
for(let i = 0; i < 3; i++) {
    doc.text(faker.lorem.paragraph());
    doc.moveDown();
}
doc.text(faker.name.findName(), { align: 'right' });
doc.end();

