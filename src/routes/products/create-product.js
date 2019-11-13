const Product = require('../../db/schemas/products-list')

const createProduct = (request, response) => {
    let body = '';
    request.on('data', function (data) {
        body = body + data;
    });
    request.on('end', function () {
        try {
        const productData = JSON.parse(body);
        const newProduct = new Product(productData);
        response.removeHeader('X-Powered-By');
        const sendResponse = (product) => {
            response.status(201);
            response.json({
                status: 'success',
                product
            });
        };

        const sendError = () => {
            response.status(400);
            response.json({
                error: 'product was not saved'
            });
        };
        newProduct.save()
            .then(sendResponse)
            .catch(err => {
                console.log(err)
                sendError()
            })
        } catch(e) {console.error(e)}
    })
}

module.exports = createProduct;
