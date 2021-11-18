const PDFDocument = require('pdfkit');
const faker = require('faker');

const http = require('http');
const port = process.env.PORT || 3000;

//web-server
http.createServer(function (req, res) {

	if (req.url != '/favicon.ico') {	
   
        const doc = new PDFDocument();     
        doc.pipe(res);

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
	}
}).listen(port, function () {
	console.log(`server is listening on port: ${port}`);
});